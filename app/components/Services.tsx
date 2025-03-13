"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const serviceCategories = [
  {
    name: "Gestão e Suporte de TI",
    services: [
      {
        title: "Monitoramento e Gerenciamento de TI",
        features: [
          "Monitoramento proativo de servidores e redes para evitar falhas",
          "Gerenciamento de backups e recuperação de desastres",
          "Relatórios detalhados de desempenho e disponibilidade",
          "Integração com Microsoft 365 e soluções de segurança",
        ],
      },
      {
        title: "Suporte de TI Remoto",
        features: [
          "Atendimento imediato para falhas e dúvidas",
          "Monitoramento e manutenção preventiva",
          "Suporte e configuração para Microsoft 365 e soluções de segurança",
          "Aplicação de políticas de segurança e otimização",
        ],
      },
    ],
  },
  {
    name: "Infraestrutura e Segurança",
    services: [
      {
        title: "Consultoria em Servidores",
        features: [
          "Otimização e integração com Microsoft 365",
          "Segurança e conformidade com gestão de acessos e auditoria",
          "Administração centralizada de usuários e dispositivos",
          "Implementação de Firewall Fortinet e soluções de proteção avançada.",
        ],
      },
      {
        title: "Gerenciamento de Dispositivos",
        features: [
          "Controle e segurança de dispositivos corporativos e BYOD",
          "Aplicação de políticas de conformidade e restrição de acessos",
          "Proteção de dados empresariais em dispositivos pessoais e corporativos",
          "Monitoramento contínuo e resposta proativa a ameaças cibernéticas",
        ],
      },
    ],
  },
  {
    name: "Soluções Microsoft 365",
    services: [
      {
        title: "Migração e Gestão para Microsoft 365",
        features: [
          "Transferência segura de e-mails, arquivos e usuários",
          "Configuração de permissões e políticas de segurança personalizadas",
          "Suporte especializado para garantir máxima produtividade",
          "Integração do Microsoft 365 com outras soluções empresariais",
        ],
      },
      {
        title: "Licenciamento Microsoft 365",
        features: [
          "Escolha do plano ideal de Microsoft 365 para sua empresa",
          "Acesso a Teams, Outlook e SharePoint",
          "Implementação e suporte contínuo para uso eficiente da solução",
          "Treinamento para equipes sobre boas práticas e segurança digital",
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

