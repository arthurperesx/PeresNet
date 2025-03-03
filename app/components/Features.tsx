"use client"

import { FileText, Shield, Laptop, Database, FileStack, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const features = [
  {
    name: "Licenciamento Microsoft 365",
    description: "Soluções completas de licenciamento para Microsoft 365, adaptadas às necessidades da sua empresa.",
    icon: FileText,
  },
  {
    name: "Microsoft Intune",
    description: "Gerenciamento de segurança e conformidade para todos os dispositivos da sua organização.",
    icon: Shield,
  },
  {
    name: "Gestão de Dispositivos",
    description: "Administração eficiente de notebooks, smartphones iOS e Android em ambiente corporativo.",
    icon: Laptop,
  },
  {
    name: "Migração de Dados",
    description: "Transferência segura e eficiente de seus dados para o ambiente Microsoft 365.",
    icon: Database,
  },
  {
    name: "SharePoint",
    description: "Implementação e configuração de soluções de colaboração e gestão documental.",
    icon: FileStack,
  },
  {
    name: "Usuários e Permissões",
    description: "Configuração e gerenciamento de usuários, grupos e níveis de acesso personalizados.",
    icon: Users,
  },
]

export default function Features() {
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="py-24 bg-muted relative overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:text-center">
          <motion.h2
            className="text-base text-secondary font-semibold tracking-wide uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Soluções
          </motion.h2>
          <motion.p
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Soluções tecnológicas para sua empresa
          </motion.p>
          <motion.p
            className="mt-4 max-w-2xl text-xl text-muted-foreground lg:mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Oferecemos serviços especializados para otimizar a produtividade, segurança e gestão de recursos da sua
            organização.
          </motion.p>
        </div>

        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <dt>
                  <motion.div
                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </motion.div>
                  <p className="ml-16 text-lg leading-6 font-medium text-foreground">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-muted-foreground">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

