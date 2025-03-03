"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background md:min-h-screen flex items-center justify-center overflow-hidden relative">
      <div className="container pt-24 mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <motion.span
              className="text-secondary block mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Transforme seu negócio
            </motion.span>
            <motion.span
              className="text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              com tecnologia!
            </motion.span>
          </h1>
          <motion.p
            className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Otimize processos, reduza custos e aumente a produtividade com
            nossas soluções inovadoras.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a 
            target="_blank"
            href="https://wa.me/5565993381830?text=Ol%C3%A1%2C%20vim%20do%20site%20da%20PeresNet%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20oferecidos.%20Pode%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white"
              >
                <svg
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                Fale conosco
              </Button></a>
          </motion.div>

          <motion.div
            className="md:mt-24 mt-8 mb-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            {" "}
            <motion.div
              className="bg-white backdrop-blur-sm p-6 rounded-xl shadow-lg flex items-center justify-center h-32"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/intune.png"
                alt="Microsoft Intune"
                className="h-16 object-contain"
              />
            </motion.div>
            <motion.div
              className="bg-white backdrop-blur-sm p-6 rounded-xl shadow-lg flex items-center justify-center h-32"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/microsoft.webp"
                alt="Microsoft Partner"
                className="h-16 object-contain"
              />
            </motion.div>
            <motion.div
              className="bg-white backdrop-blur-sm p-6 rounded-xl shadow-lg flex items-center justify-center h-32"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/entra.png"
                alt="Microsoft Entra ID"
                className="h-16 object-contain"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/5 rounded-full"
          initial={{ scale: 1, rotate: 0 }}
          animate={{
            scale: animationComplete ? 1.1 : [1, 1.1, 1.1],
            rotate: animationComplete ? 55 : [0, 90, 90],
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-secondary/5 rounded-full"
          initial={{ scale: 1, rotate: 0 }}
          animate={{
            scale: animationComplete ? 1.2 : [1, 1.2, 1.2],
            rotate: animationComplete ? -80 : [0, -90, -90],
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
        />
        <motion.div
          className="absolute top-1/4 left-1/4 w-12 h-12 bg-primary/10 rounded-full"
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
          className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-secondary/10 rounded-full"
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
    </div>
  );
}
