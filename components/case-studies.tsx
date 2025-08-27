"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function CaseStudies() {
  const { t } = useLanguage()

  const caseStudies = [
    {
      company: t("cases.financial.company"),
      industry: t("cases.financial.industry"),
      challenge: t("cases.financial.challenge"),
      result: t("cases.financial.result"),
      quote: t("cases.financial.quote"),
      metrics: {
        accuracy: t("cases.financial.metrics.accuracy"),
        speed: t("cases.financial.metrics.speed"),
        cost: t("cases.financial.metrics.cost"),
      },
    },
    {
      company: t("cases.healthcare.company"),
      industry: t("cases.healthcare.industry"),
      challenge: t("cases.healthcare.challenge"),
      result: t("cases.healthcare.result"),
      quote: t("cases.healthcare.quote"),
      metrics: {
        accuracy: t("cases.healthcare.metrics.accuracy"),
        speed: t("cases.healthcare.metrics.speed"),
        cost: t("cases.healthcare.metrics.cost"),
      },
    },
    {
      company: t("cases.logistics.company"),
      industry: t("cases.logistics.industry"),
      challenge: t("cases.logistics.challenge"),
      result: t("cases.logistics.result"),
      quote: t("cases.logistics.quote"),
      metrics: {
        accuracy: t("cases.logistics.metrics.accuracy"),
        speed: t("cases.logistics.metrics.speed"),
        cost: t("cases.logistics.metrics.cost"),
      },
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 sm:text-4xl">
            {t("cases.title")}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {t("cases.subtitle")}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {study.industry}
                  </Badge>
                  <Quote className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl font-heading font-bold text-gray-900">
                  {study.company}
                </CardTitle>
                <CardDescription className="text-gray-600">{study.challenge}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-gray-700 italic leading-relaxed">"{study.quote}"</blockquote>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm font-semibold text-gray-900 mb-2">
                    {t("cases.keyResults")}
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center">
                      <div className="font-bold text-indigo-600">{study.metrics.accuracy}</div>
                      <div className="text-gray-600">{t("cases.metrics.accuracy")}</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-indigo-600">{study.metrics.speed}</div>
                      <div className="text-gray-600">{t("cases.metrics.speed")}</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-indigo-600">{study.metrics.cost}</div>
                      <div className="text-gray-600">{t("cases.metrics.cost")}</div>
                    </div>
                  </div>
                </div>

                <div className="text-lg font-semibold text-indigo-600">{study.result}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
    </section>
  )
}
