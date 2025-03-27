"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Code, BarChart, MessageSquare, Clock, Users, BrainCircuit, Lightbulb } from "lucide-react"

export default function Skills() {
  const technicalSkills = [
    {
      category: "Data Analysis & Visualization",
      icon: <BarChart className="h-5 w-5" />,
      skills: ["MS Excel", "Google Analytics", "Power BI", "Google Sheets", "Looker Pro"],
    },
    {
      category: "Programming Languages",
      icon: <Code className="h-5 w-5" />,
      skills: ["Python"],
    },
    {
      category: "Database Manipulation",
      icon: <Database className="h-5 w-5" />,
      skills: ["MySQL", "PostgreSQL"],
    },
    {
      category: "CRM Marketing Tools",
      icon: <MessageSquare className="h-5 w-5" />,
      skills: ["HubSpot", "Salesforce", "Interseller", "Outreach"],
    },
    {
      category: "Libraries",
      icon: <BrainCircuit className="h-5 w-5" />,
      skills: ["Scikit-learn", "XG Boost", "Numpy", "Pandas"],
    },
  ]

  const softSkills = [
    { skill: "Communication", icon: <MessageSquare className="h-5 w-5" /> },
    { skill: "Problem-solving", icon: <Lightbulb className="h-5 w-5" /> },
    { skill: "Strategic thinking", icon: <BrainCircuit className="h-5 w-5" /> },
    { skill: "Time management", icon: <Clock className="h-5 w-5" /> },
    { skill: "Team collaboration", icon: <Users className="h-5 w-5" /> },
  ]

  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-heading">Skills</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalSkills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        {skillGroup.icon}
                        <h4 className="text-lg font-semibold">{skillGroup.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="px-3 py-1">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
            <Card className="card-hover">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {softSkills.map((skill, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        {skill.icon}
                      </div>
                      <span className="text-lg">{skill.skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-xl"></div>
                <Card className="relative bg-card/50 backdrop-blur-sm border-primary/20 card-hover">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-4">Continuous Learning</h4>
                    <p className="text-muted-foreground">
                      I'm constantly expanding my skillset through courses, certifications, and hands-on projects to
                      stay at the forefront of data science and marketing technology.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

