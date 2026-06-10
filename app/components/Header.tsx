"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 bg-[#2b2f48] items-center h-16 md:h-24 shadow-sm w-full flex border-b border-[#3d7896] z-50">
      <div className="flex mx-auto justify-center w-full px-4 items-center sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between w-full items-center py-2">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="PeresNet Logo"
                width={180}
                height={50}
                className="max-h-9 w-auto object-contain md:max-h-11"
                priority
              />
            </Link>
          </div>

          <div>
            <nav className="scroll-smooth hidden md:flex items-center gap-3">
              <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-md px-3 py-1.5 text-base font-medium text-[#82dbbd] hover:text-white transition-colors"
            >
              Soluções
            </Link>
              
              {/* <Link
                href="#testimonials"
                className="scroll-smooth rounded-md px-3 py-1.5 text-base font-medium text-[#82dbbd] hover:text-white transition-colors"
              >
                Depoimentos
              </Link> */}
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="scroll-smooth rounded-md px-3 py-1.5 text-base font-medium text-[#82dbbd] hover:text-white transition-colors"
              >
                Serviços
              </Link>
            </nav>
          </div>

          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 rounded-lg border border-[#3d7896]"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[#82dbbd] transition-transform duration-300 ease-in-out ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-[#82dbbd] transition-opacity duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-[#82dbbd] transition-transform duration-300 ease-in-out ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-[#2b2f48] z-40 flex flex-col items-center pt-10">
          <nav className="flex flex-col items-center space-y-8 w-full">
            <Link
              href="#features"
              className="rounded-lg bg-[#2b2f48] px-6 py-3 text-xl font-medium text-[#82dbbd] hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Soluções
            </Link>
            {/* <Link
              href="#testimonials"
              className="rounded-lg bg-[#2b2f48] px-6 py-3 text-xl font-medium text-[#82dbbd] hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </Link> */}
            <Link
              href="#services"
              className="rounded-lg bg-[#2b2f48] px-6 py-3 text-xl font-medium text-[#82dbbd] hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </Link>
            
          </nav>
        </div>
      )}
    </header>
  )
}

