"use client"

import { motion } from "framer-motion"
import { Building2, Plane, Shield, CreditCard, Truck, FileText } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function IndustrySolutions() {
  const { t } = useLanguage()

  const industries = [
    {
      icon: CreditCard,
      title: t("industries.financial.title"),
      description: t("industries.financial.description"),
      features: [
        t("industries.financial.features.identity"),
        t("industries.financial.features.authentication"),
        t("industries.financial.features.compliance"),
        t("industries.financial.features.risk"),
      ],
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
    },
    {
      icon: Shield,
      title: t("industries.government.title"),
      description: t("industries.government.description"),
      features: [
        t("industries.government.features.passport"),
        t("industries.government.features.visa"),
        t("industries.government.features.security"),
        t("industries.government.features.forensic"),
      ],
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50",
    },
    {
      icon: Plane,
      title: t("industries.travel.title"),
      description: t("industries.travel.description"),
      features: [
        t("industries.travel.features.checkin"),
        t("industries.travel.features.age"),
        t("industries.travel.features.validation"),
        t("industries.travel.features.registration"),
      ],
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
    },
    {
      icon: Building2,
      title: t("industries.healthcare.title"),
      description: t("industries.healthcare.description"),
      features: [
        t("industries.healthcare.features.patient"),
        t("industries.healthcare.features.insurance"),
        t("industries.healthcare.features.medical"),
        t("industries.healthcare.features.hipaa"),
      ],
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-50 to-red-50",
    },
    {
      icon: Truck,
      title: t("industries.logistics.title"),
      description: t("industries.logistics.description"),
      features: [
        t("industries.logistics.features.lading"),
        t("industries.logistics.features.invoice"),
        t("industries.logistics.features.customs"),
        t("industries.logistics.features.delivery"),
      ],
      color: "from-cyan-500 to-blue-600",
      bgColor: "from-cyan-50 to-blue-50",
    },
    {
      icon: FileText,
      title: t("industries.insurance.title"),
      description: t("industries.insurance.description"),
      features: [
        t("industries.insurance.features.claims"),
        t("industries.insurance.features.policy"),
        t("industries.insurance.features.damage"),
        t("industries.insurance.features.fraud"),
      ],
      color: "from-violet-500 to-purple-600",
      bgColor: "from-violet-50 to-purple-50",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("industries.title")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {t("industries.titleHighlight")}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("industries.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${industry.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
              />

              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-transparent group-hover:transform group-hover:scale-105">
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${industry.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <industry.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {industry.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>

                <div className="space-y-3">
                  {industry.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${industry.color} group-hover:scale-125 transition-transform duration-300`}
                      />
                      <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
                  <button
                    className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r ${industry.color} text-white font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:shadow-lg`}
                  >
                    {t("industries.learnMore")}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-12 border border-gray-100">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {t("cta.question")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {t("cta.answer")}
                </span>
              </h3>
              <p className="text-lg text-gray-600 mb-8">{t("cta.description")}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  {t("cta.discuss")}
                </button>
                <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                  {t("cta.viewAll")}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
