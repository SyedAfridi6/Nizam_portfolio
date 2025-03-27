"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ChevronRight, BarChart, LineChart, Mail, Target, Bot, Database } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Sr. Growth Data Specialist",
      company: "Turing",
      period: "Nov 2021 - Present",
      responsibilities: [
        {
          text: "Email Metrics Dashboard and Reporting",
          description:
            "Developed comprehensive email metrics dashboards in Looker Pro and Power BI, to facilitate detailed campaign performance analysis through data extraction, manipulation, and visualization.",
          icon: <BarChart className="h-5 w-5" />,
        },
        {
          text: "Conducted A/B test",
          description:
            "On email templates and domains using Google Analytics, generating actionable insights to optimize engagement metrics, including open rates and click-through rates.",
          icon: <Target className="h-5 w-5" />,
        },
        {
          text: "Campaign Optimization",
          description:
            "Leveraged data-driven insights to optimize email marketing campaigns, using SQL for data manipulation and Python to automate operations for strategic planning.",
          icon: <LineChart className="h-5 w-5" />,
        },
        {
          text: "Campaign Management",
          description:
            "Managed end-to-end campaign operations, overseeing dashboards, throughput planning, and analysis with Looker Pro, Power BI and Google Sheets for project tracking.",
          icon: <Mail className="h-5 w-5" />,
        },
        {
          text: "Strategy Development",
          description:
            "As Demand Generation Analysts to develop and streamline email marketing strategies, utilizing Google Sheets for strategy tracking.",
          icon: <LineChart className="h-5 w-5" />,
        },
        {
          text: "Marketing Automation",
          description:
            "Automated email sequences and drip campaigns to improve lead nurturing and segmentation, resulting in an increase in engagements.",
          icon: <Bot className="h-5 w-5" />,
        },
        {
          text: "CRM Integration (HubSpot & Salesforce)",
          description:
            "On email templates and domains using Google Analytics, generating actionable insights to optimize engagement metrics, including open rates and click-through rates.",
          icon: <Database className="h-5 w-5" />,
        },
      ],
    },
    {
      title: "Project Trainee",
      company: "Ramco Systems",
      period: "Apr 2021 - Oct 2021",
      responsibilities: [
        {
          text: "MySQL Data Generation",
          description:
            "Utilized MySQL to generate the dataset for language module, ensuring accurate and comprehensive data representation.",
          icon: <Database className="h-5 w-5" />,
        },
        {
          text: "Automated Excel Tool Usage",
          description:
            "Employed an automated Excel tool to modify the language module as per clients' requirements, enhancing customization and adaptability.",
          icon: <Bot className="h-5 w-5" />,
        },
        {
          text: "Git Deployment for Version Control",
          description:
            "Deployed the updated version of the language module in production and client servers using Git, ensuring smooth operations and version control.",
          icon: <ChevronRight className="h-5 w-5" />,
        },
      ],
    },
  ]

  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-heading">Experience</h2>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/80 to-primary/20 ml-6 hidden md:block"></div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="sticky top-24">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center z-10">
                          <Calendar className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-sm text-muted-foreground">{experience.period}</div>
                      </div>

                      <h3 className="text-2xl font-semibold">{experience.title}</h3>
                      <div className="flex items-center mt-2">
                        <Badge variant="outline" className="text-sm font-normal">
                          {experience.company}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <Card className="card-hover">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-semibold mb-6">Key Responsibilities</h4>
                        <ul className="space-y-6">
                          {experience.responsibilities.map((responsibility, respIndex) => (
                            <motion.li
                              key={respIndex}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: respIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="relative pl-8"
                            >
                              <div className="absolute left-0 top-1">
                                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                                  {responsibility.icon}
                                </div>
                              </div>
                              <div>
                                <h5 className="font-medium">{responsibility.text}</h5>
                                <p className="text-muted-foreground mt-1">{responsibility.description}</p>
                              </div>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

