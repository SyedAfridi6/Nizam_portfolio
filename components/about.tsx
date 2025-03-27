"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { LineChart, BarChart, Mail, Target, Bot } from "lucide-react"

export default function About() {
  const expertiseAreas = [
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Data Analysis",
      description: "Turning raw data into actionable insights with a strong analytical mindset.",
    },
    {
      icon: <Mail className="h-10 w-10 text-primary" />,
      title: "Email Marketing",
      description: "Crafting effective email campaigns to boost engagement and conversion rates.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Data Visualization",
      description: "Translating complex data into visually compelling stories and interactive dashboards.",
    },
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: "A/B Testing",
      description: "Experimenting to discover what resonates best with audiences and improve ROI.",
    },
    {
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: "Marketing Automation",
      description: "Streamlining workflows and enhancing customer journeys to drive engagement.",
    },
  ]

  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-heading">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <p className="text-lg mb-6">
              I'm a dedicated Data Specialist and Growth Marketing Expert with a track record of delivering
              results-driven campaigns. My passion lies at the intersection of data and marketing, where I leverage my
              expertise to drive business growth.
            </p>
            <p className="text-lg mb-6">
              With a background in Mechanical Engineering and specialized training in Data Science & AI, I bring a
              unique analytical perspective to marketing challenges. I excel at finding patterns in data and translating
              them into strategic marketing decisions.
            </p>
            <p className="text-lg">
              Currently working as a Sr. Growth Data Specialist at Turing, I focus on optimizing email marketing
              campaigns, developing comprehensive dashboards, and implementing data-driven strategies to improve
              engagement and conversion rates.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-xl"></div>
              <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-6 flex flex-col justify-center h-full">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">N</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Nizam</h3>
                    <p className="text-muted-foreground">Data Specialist & Growth Marketing Expert</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-6">Areas of Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover">
                <CardContent className="p-6">
                  <div className="mb-4">{area.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">{area.title}</h4>
                  <p className="text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

