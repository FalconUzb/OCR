"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function PricingSection() {
  const { t } = useLanguage()

  const pricingTiers = [
    {
      name: t("pricing.starter.name"),
      price: "$0.01",
      unit: t("pricing.starter.unit"),
      description: t("pricing.starter.description"),
      features: [
        t("pricing.starter.features.pages"),
        t("pricing.starter.features.accuracy"),
        t("pricing.starter.features.api"),
        t("pricing.starter.features.analytics"),
      ],
      cta: t("pricing.starter.cta"),
      popular: false,
    },
    {
      name: t("pricing.professional.name"),
      price: "$0.008",
      unit: t("pricing.professional.unit"),
      description: t("pricing.professional.description"),
      features: [
        t("pricing.professional.features.pages"),
        t("pricing.professional.features.accuracy"),
        t("pricing.professional.features.priority"),
        t("pricing.professional.features.analytics"),
        t("pricing.professional.features.training"),
        t("pricing.professional.features.sla"),
      ],
      cta: t("pricing.professional.cta"),
      popular: true,
    },
    {
      name: t("pricing.enterprise.name"),
      price: t("$0.007"),
      unit: t("pricing.enterprise.unit"),
      description: t("pricing.enterprise.description"),
      features: [
        t("pricing.enterprise.features.unlimited"),
        t("pricing.enterprise.features.deployment"),
        t("pricing.enterprise.features.tuning"),
        t("pricing.enterprise.features.priority"),
        t("pricing.enterprise.features.security"),
        t("pricing.enterprise.features.integrations"),
        t("pricing.enterprise.features.training"),
      ],
      cta: t("pricing.enterprise.cta"),
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 sm:text-4xl">{t("pricing.title")}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{t("pricing.subtitle")}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`bg-white border-gray-200 hover:shadow-xl transition-all duration-300 ${
                tier.popular ? "ring-2 ring-indigo-600 scale-105" : "hover:scale-105"
              }`}
            >
              <CardHeader className="text-center pb-8">
                {tier.popular && (
                  <Badge className="w-fit mx-auto mb-4 bg-indigo-600 text-white">{t("pricing.popular")}</Badge>
                )}
                <CardTitle className="text-2xl font-heading font-bold text-gray-900">{tier.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  <span className="text-lg text-gray-600 ml-1">{tier.unit}</span>
                </div>
                <CardDescription className="mt-4 text-gray-600">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-indigo-600 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    tier.popular
                      ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                      : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">{t("pricing.disclaimer")}</p>
        </div>
      </div>
    </section>
  )
}
