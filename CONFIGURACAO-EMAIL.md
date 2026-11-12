# Atualização do site PeresNet

## O que foi atualizado
- A página inicial do projeto Next.js agora exibe o novo site enviado em `public/peresnet-novo.html`.
- O formulário envia os dados para `/api/contato`, que encaminha o e-mail para `contato@peresnet.com.br` usando a API do Resend.
- A chave do Resend fica no servidor, nunca no HTML ou no GitHub.

## Configuração necessária na Vercel
Em **Project → Settings → Environment Variables**, cadastre:

- `RESEND_API_KEY`: chave da API criada no Resend.
- `RESEND_FROM_EMAIL`: remetente verificado no Resend, por exemplo `PeresNet <contato@seudominio-verificado.com.br>`.

O domínio usado no remetente precisa estar verificado no Resend. O destinatário já está configurado como `contato@peresnet.com.br`.

Depois de salvar as variáveis, faça um novo deploy na Vercel.

## Publicar no GitHub
1. Extraia este ZIP.
2. Substitua os arquivos do repositório pelos arquivos desta pasta (mantendo a estrutura).
3. Faça commit e push para a branch conectada à Vercel.
4. Aguarde o deploy e teste o formulário.

## Observação
O formulário requer as variáveis do Resend para enviar e-mail. Sem elas, o site continua abrindo, mas o envio retorna uma mensagem de indisponibilidade. O botão flutuante do WhatsApp continua disponível como alternativa.
