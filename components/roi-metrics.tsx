"use client"

import { motion } from "framer-motion"
import { TrendingUp, Clock, DollarSign, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ROIMetrics() {
  const { t } = useLanguage()

  const metrics = [
    {
      icon: TrendingUp,
      value: "95%+",
      label: t("roi.accuracyRate"),
      description: t("roi.accuracyDesc"),
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Clock,
      value: "10x",
      label: t("roi.fasterProcessing"),
      description: t("roi.fasterDesc"),
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: DollarSign,
      value: "400%",
      label: t("roi.roiIncrease"),
      description: t("roi.roiDesc"),
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Users,
      value: "88%",
      label: t("roi.effortReduction"),
      description: t("roi.effortDesc"),
      color: "from-orange-500 to-red-600",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("roi.title")}{" "}
            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {t("roi.titleHighlight")}
            </span> */}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("roi.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50">
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${metric.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <metric.icon className="w-8 h-8 text-white" />
                </div>

                <div className="space-y-2">
                  <div className="text-4xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {metric.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-700">{metric.label}</div>
                  <div className="text-sm text-gray-500 leading-relaxed">{metric.description}</div>
                </div>

                {/* Animated background gradient */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t("roi.readyToSeeResults")}</h3>
                <p className="text-gray-600">{t("roi.personalizedRoi")}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  {t("roi.calculateRoi")}
                </button>
                <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                  {t("roi.scheduleDemo")}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
