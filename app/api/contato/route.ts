import { NextResponse } from "next/server";

export const runtime = "nodejs";

function clean(value: unknown, max = 2000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Honeypot: bots that fill this field receive a generic success response.
    if (clean(body.website, 200)) {
      return NextResponse.json({ ok: true });
    }

    const name = clean(body.name, 120);
    const email = clean(body.email, 254);
    const whatsapp = clean(body.whatsapp, 40);
    const type = clean(body.type, 160);
    const message = clean(body.message, 5000);

    if (!name || !email || !whatsapp || !type) {
      return NextResponse.json({ error: "Preencha nome, e-mail, WhatsApp e assunto." }, { status: 400 });
    }
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Informe um endereço de e-mail válido." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    if (!apiKey || !from) {
      console.error("Missing RESEND_API_KEY or RESEND_FROM_EMAIL environment variable.");
      return NextResponse.json({ error: "O envio de mensagens está temporariamente indisponível." }, { status: 503 });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: ["contato@peresnet.com.br"],
        reply_to: email,
        subject: `Novo contato pelo site PeresNet: ${type}`,
        text: [
          "Nova mensagem recebida pelo formulário do site PeresNet.",
          "",
          `Nome: ${name}`,
          `E-mail: ${email}`,
          `WhatsApp: ${whatsapp}`,
          `Assunto: ${type}`,
          "",
          "Mensagem:",
          message || "Não informada",
        ].join("\\n"),
      }),
    });

    if (!response.ok) {
      const details = await response.text();
      console.error("Resend error:", response.status, details);
      return NextResponse.json({ error: "Não foi possível enviar sua mensagem agora. Tente novamente mais tarde." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Não foi possível processar sua solicitação." }, { status: 500 });
  }
}
