import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-10 md:gap-0 flex-col md:flex-row justify-between">
            <div className="col-span-1 flex flex-col items-center md:col-span-1 md:items-start">
              <Link href="/" className="inline-flex items-center rounded-md bg-[#2b2f48] px-3 py-2 shadow-sm md:px-4">
                <Image
                  src="/logo2.png"
                  alt="PeresNet Logo"
                  width={180}
                  height={54}
                  className="max-h-12 w-auto object-contain md:max-h-14"
                />
              </Link>
              <div className="mt-4 flex w-full justify-center space-x-6 md:justify-center">
                <Link
                  target="_blank"
                  href="https://www.instagram.com/peresnet/"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/peresnet/"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61574039690806"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-6 w-6" />
                </Link>
              </div>
            </div>

                        <div className="text-center">
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
                Parceiros
              </h3>
              <ul className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center">
              <li className="flex justify-center">
                  <Link href="https://partner.microsoft.com/" target="_blank">
                    <Image src="/microsoft.webp" alt="Microsoft Partner" width={120} height={60} />
                  </Link>
                </li>
                <li className="flex justify-center">
                  <Link href="https://www.acronis.com/pt-br/partners/locator/#country=BR," target="_blank">
                    <Image src="/acronispartner.png" alt="Acronis Partner" width={120} height={60} />
                  </Link>
                </li>
              
                <li className="flex justify-center">
                  <Link href="https://locator.kaspersky.com/b2c/?locale=br&filter_UF_COUNTRY=a0Ea000000GlK71EAF&filter_UF_STATE=a0Ra000000AMx8FEAT&filter_ADDRESS=&filter_ADDRESS_S=&filter_ADDRESS_W=&filter_ADDRESS_N=&filter_ADDRESS_E=&filter_UF_ACCOUNTNAME=peresnet&set_filter=Pesquisar" target="_blank">
                    <Image src="/Kasperskypartner.png" alt="Kaspersky Partner" width={120} height={60} />
                  </Link>
                </li>
                <li className="flex justify-center">
                  <Link href="https://www.fortinet.com/" target="_blank">
                    <Image src="/fortinetpartner.png" alt="Fortinet Partner" width={120} height={60} />
                  </Link>
                </li>
              </ul>
            </div>


            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
                Contato
              </h3>
              <ul className="mt-4 space-y-4">
                {/* <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                  <span className="text-base text-muted-foreground">
                    Av. Principal, 1234, Centro
                    <br />
                    Cuiabá, MT
                  </span>
                </li> */}
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-secondary mr-2" />
                  <span className="text-base text-muted-foreground">
                    (65) 99338-1830
                  </span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-secondary mr-2" />
                  <span className="text-base text-muted-foreground">
                    contato@peresnet.com.br
                  </span>
                </li>
              </ul>
            </div>
          </div>
        <div className="mt-8 border-t border-border pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-base text-secondary md:mt-0 md:order-1">
            &copy; 2025 PeresNet. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
