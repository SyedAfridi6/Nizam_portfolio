"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="gradient-text glow">Nizam</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground">
            Data Specialist & Growth Marketing Expert
          </h2>
          <p className="text-lg mb-8 max-w-xl text-muted-foreground">
            Transforming raw data into actionable insights and driving growth
            through data-driven marketing strategies.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              <a href="#about">Learn More</a>
            </Button>
          </div>

          <div className="flex gap-4 mt-8">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/Nizamud33n"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/nizamudeen-j?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:nizam.jayalapdeen@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="aspect-square rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1">
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Nizam"
                width={300} // Adjust size as needed
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -z-10 inset-0 blur-3xl bg-blue-500/10 rounded-full"></div>
        </motion.div>
      </div>

      <div className="flex justify-center mt-16">
        <Button variant="ghost" size="icon" className="animate-bounce" asChild>
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6" />
          </a>
        </Button>
      </div>
    </section>
  );
}
