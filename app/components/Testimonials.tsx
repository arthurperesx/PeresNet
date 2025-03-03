"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Empresa",
    image: "/placeholder.svg?height=400&width=400",
    quote: "",
  },
  {
    name: "Ana Oliveira",
    role: "Empresa",
    image: "/placeholder.svg?height=400&width=400",
    quote: "",
  },
  {
    name: "Marcos Santos",
    role: "Empresa",
    image: "/placeholder.svg?height=400&width=400",
    quote: "",
  },
];

export default function Testimonials() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="bg-muted pb-16 sm:pb-24 relative overflow-hidden"
      id="testimonials"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -right-16 w-32 h-32 bg-primary-light rounded-full"
          initial={{ y: 0, x: 0 }}
          animate={{
            y: animationComplete ? -20 : [0, -20, -20],
            x: animationComplete ? 20 : [0, 20, 20],
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-16 w-24 h-24 bg-secondary-light rounded-full"
          initial={{ y: 0, x: 0 }}
          animate={{
            y: animationComplete ? 30 : [0, 30, 30],
            x: animationComplete ? -30 : [0, -30, -30],
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
          <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
            Clientes satisfeitos em toda Cuiabá
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Veja o que nossos clientes têm a dizer sobre a PeresNet
          </p>
        </motion.div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-background border border-border shadow-lg rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <div className="text-lg font-medium text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground italic">
                  "{testimonial.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
