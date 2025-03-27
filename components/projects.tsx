"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart, LineChart, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Digital Marketing Campaign Analysis",
      description:
        "Designed and developed an interactive dashboard using Power BI to analyze digital marketing campaigns across channels (email, PPC, SEO, social media).",
      details: [
        "Assessed campaign types (awareness, consideration, conversion, retention), visualizing metrics such as email opens, clicks, and conversions segmented by gender and channel.",
        "Provided actionable insights to optimize engagement and conversion rates, leading to improved marketing strategies.",
      ],
      tools: ["Power BI", "Data Analysis", "Marketing Analytics"],
      icon: <BarChart className="h-10 w-10 text-primary" />,
      link: "https://github.com/Nizamud33n/Capstone-project", // ✅ Add project link
    },
    {
      title: "Customer Conversion Prediction",
      description:
        "Built and evaluated a Random Forest classifier to predict customer conversions with an accuracy of 88% using real-world marketing data.",
      details: [
        "Conducted data preprocessing (handling missing values, encoding categorical variables, scaling features) and exploratory data analysis to identify key conversion factors.",
        "Created new features (e.g., clicks per open, ad spend per conversion) and visualized relationships (e.g., click through rate vs. ad spend) to enhance campaign insights.",
        "Identified higher conversion rates for females and provided recommendations to improve audience targeting for increased conversions.",
      ],
      tools: [
        "Machine Learning",
        "Python",
        "Random Forest",
        "Feature Engineering",
      ],
      icon: <LineChart className="h-10 w-10 text-primary" />,
      link: "https://github.com/Nizamud33n/HULU", // ✅ Add project link
    },
  ];

  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-heading">Projects</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col card-hover">
                <CardContent className="p-6 flex-grow">
                  <div className="mb-4">{project.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    {project.description}
                  </p>

                  <h4 className="font-medium mb-2">Key Achievements:</h4>
                  <ul className="space-y-2 mb-6">
                    {project.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="secondary">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
