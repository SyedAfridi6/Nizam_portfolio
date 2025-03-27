"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "B.Tech. Mechanical Engineering",
      institution: "SRM Institute of Science and Technology",
      period: "2017 - 2021",
      type: "education",
    },
  ]

  const certifications = [
    {
      name: "Data Science & AI",
      issuer: "Boston Institute of Analytics",
      type: "certification",
    },
    {
      name: "Email Marketing",
      issuer: "HubSpot Academy",
      type: "certification",
    },
    {
      name: "HubSpot Marketing Hub Software",
      issuer: "HubSpot Academy",
      type: "certification",
    },
  ]

  return (
    <section id="education" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-heading">Education & Certification</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>

            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-semibold">{item.degree}</h4>
                        <Badge variant="outline">{item.period}</Badge>
                      </div>
                      <p className="text-muted-foreground">{item.institution}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Certifications
            </h3>

            <div className="space-y-6">
              {certifications.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-semibold">{item.name}</h4>
                      </div>
                      <p className="text-muted-foreground">{item.issuer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-xl"></div>
                <Card className="relative bg-card/50 backdrop-blur-sm border-primary/20 card-hover">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-4">Continuous Learning</h4>
                    <p className="text-muted-foreground">
                      I'm committed to ongoing professional development and regularly pursue new certifications to
                      enhance my skills in data science, marketing, and analytics.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

