"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const serviceCategories = [
  {
    name: "Gestão e Suporte de TI",
    services: [
      {
        title: "ITSM – Gestão de Chamados",
        features: [
          "Sistema de chamados personalizado para sua empresa",
          "Automação de processos para respostas mais rápidas",
          "Relatórios detalhados de SLAs e desempenho da equipe",
          "Integração com Microsoft 365 (Teams, Outlook, etc.)",
        ],
      },
      {
        title: "Suporte de TI Remoto",
        features: [
          "Atendimento imediato para falhas e dúvidas",
          "Monitoramento e manutenção preventiva",
          "Configuração e suporte a Microsoft 365",
          "Aplicação de políticas de segurança e otimização",
        ],
      },
    ],
  },
  {
    name: "Infraestrutura e Segurança",
    services: [
      {
        title: "Consultoria em Servidores e Active Directory",
        features: [
          "Otimização e integração com Microsoft 365",
          "Segurança e conformidade (controle de acessos, auditoria)",
          "Gerenciamento centralizado de usuários e dispositivos",
        ],
      },
      {
        title: "Gerenciamento de Dispositivos (MDM) e Aplicativos (MAM)",
        features: [
          "Controle e segurança de dispositivos corporativos e BYOD",
          "Aplicação de políticas de conformidade e restrições de acesso",
          "Proteção de dados empresariais em dispositivos pessoais",
        ],
      },
    ],
  },
  {
    name: "Soluções Microsoft 365",
    services: [
      {
        title: "Migração para Microsoft 365",
        features: [
          "Transferência segura de e-mails, arquivos e usuários",
          "Configuração de contas e políticas de segurança",
          "Suporte especializado para garantir máxima produtividade",
        ],
      },
      {
        title: "Licenciamento Microsoft 365",
        features: [
          "Consultoria para escolha do plano ideal",
          "Acesso às principais ferramentas (Teams, Outlook, SharePoint, etc.)",
          "Suporte especializado para implementação e uso",
        ],
      },
    ],
  },
]

export default function Services() {
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-background py-16 sm:py-24 relative overflow-hidden" id="services">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
       
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary-light rounded-full"
          initial={{ scale: 1, rotate: 0 }}
          animate={{
            scale: animationComplete ? 1.2 : [1, 1.2, 1.2],
            rotate: animationComplete ? -45 : [0, -45, -45],
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Nossos Serviços</h2>
          <p className="mt-4 text-xl text-muted-foreground">Soluções completas para sua infraestrutura de TI</p>
        </motion.div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.name}
              className="border border-border rounded-lg shadow-sm divide-y divide-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)" }}
            >
              <div className="p-6">
                <h3 className="text-lg font-medium text-foreground">{category.name}</h3>
              </div>
              <div className="px-6 pt-6 pb-8">
                {category.services.map((service) => (
                  <div key={service.title} className="mb-6">
                    <h4 className="text-sm font-medium text-foreground tracking-wide uppercase mb-3">
                      {service.title}
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <Check className="h-5 w-5 text-secondary" aria-hidden="true" />
                          </div>
                          <p className="ml-3 text-sm text-muted-foreground">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

