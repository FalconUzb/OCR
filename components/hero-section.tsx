"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, Zap, Eye, CreditCard, FileText, User } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 animate-float"></div>
        <div
          className="absolute -bottom-32 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-emerald-400/20 to-blue-600/20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-200/50 animate-slide-up">
                <Sparkles className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">{t("aiPoweredOcr")}</span>
                <Zap className="h-4 w-4 text-purple-600" />
              </div>
            </div>

            <h1 className="text-4xl font-heading font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block animate-slide-up">{t("transformingData")}</span>
              <span className="block gradient-text animate-slide-up animate-delay-200">{t("intoInsight")}</span>
              <span className="block text-gray-700 animate-slide-up animate-delay-300">{t("withAdvancedOcr")}</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 sm:mt-8 sm:text-xl sm:max-w-3xl animate-slide-up animate-delay-400">
              {t("heroDescription")}
            </p>

            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 animate-slide-up animate-delay-500">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="gradient-bg hover:shadow-2xl text-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 glow-effect group"
                >
                  {t("exploreSolutions")}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-3 text-lg font-medium bg-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-blue-400 group"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                  {t("watchDemo")}
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center animate-slide-in-right animate-delay-300">
            <div className="relative mx-auto w-full lg:max-w-md">
              {/* Main scanning interface */}
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700 hover-lift">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span className="text-white text-sm font-medium">{t("liveProcessing")}</span>
                    </div>
                    <div className="text-emerald-400 text-sm font-mono">99.8%</div>
                  </div>

                  {/* ID Card Scanning Animation */}
                  <div className="relative bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-lg p-4 mb-4 border border-blue-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <CreditCard className="w-4 h-4 text-blue-400" />
                        <span className="text-blue-300 text-sm">{t("idDocument")}</span>
                      </div>
                      <div className="scanning-line"></div>
                    </div>

                    {/* Simulated ID card */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded p-3 relative overflow-hidden">
                      <div className="scanning-overlay"></div>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-blue-300 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-blue-700" />
                        </div>
                        <div className="text-white">
                          <div className="text-sm font-semibold">John Doe</div>
                          <div className="text-xs opacity-80">ID: 123456789</div>
                        </div>
                      </div>

                      {/* Scanning points animation */}
                      <div className="absolute top-2 right-2 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                      <div
                        className="absolute bottom-2 left-2 w-2 h-2 bg-emerald-400 rounded-full animate-ping"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </div>

                    {/* Extracted data */}
                    <div className="mt-2 space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">{t("name")}</span>
                        <span className="text-emerald-400 typing-animation">John Doe</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">{t("idNumber")}</span>
                        <span className="text-emerald-400 typing-animation" style={{ animationDelay: "1s" }}>
                          123456789
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Face Detection Animation */}
                  <div className="relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-lg p-4 mb-4 border border-purple-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Eye className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-300 text-sm">{t("faceDetection")}</span>
                      </div>
                      <div className="text-purple-400 text-xs">{t("active")}</div>
                    </div>

                    {/* Face detection visualization */}
                    <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded p-3 h-20 flex items-center justify-center">
                      <div className="relative">
                        <div className="w-12 h-12 bg-purple-300 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-purple-700" />
                        </div>
                        {/* Face detection box */}
                        <div className="absolute inset-0 border-2 border-purple-400 rounded-full animate-pulse-border"></div>
                        {/* Detection points */}
                        <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-purple-400 animate-pulse"></div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-purple-400 animate-pulse"></div>
                        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-purple-400 animate-pulse"></div>
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-purple-400 animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Document Processing */}
                  <div className="relative bg-gradient-to-br from-emerald-900/50 to-teal-900/50 rounded-lg p-4 border border-emerald-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-300 text-sm">{t("documentOcr")}</span>
                      </div>
                      <div className="processing-spinner"></div>
                    </div>

                    {/* Document lines simulation */}
                    <div className="space-y-2">
                      <div className="h-2 bg-emerald-600/30 rounded animate-fill-line"></div>
                      <div
                        className="h-2 bg-emerald-600/30 rounded animate-fill-line"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div
                        className="h-2 bg-emerald-600/30 rounded w-3/4 animate-fill-line"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Floating accuracy indicator */}
                <div className="absolute top-4 right-4 bg-emerald-500/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-emerald-500/30 animate-float">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-emerald-300">{t("realTime")}</span>
                  </div>
                </div>
              </div>

              {/* Floating capability indicators */}
              <div className="absolute -left-4 top-1/4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg animate-float border border-blue-200">
                <div className="flex items-center space-x-2">
                  <CreditCard className="w-3 h-3 text-blue-600" />
                  <span className="text-xs font-medium text-gray-700">{t("idCards")}</span>
                </div>
              </div>

              <div
                className="absolute -right-4 top-1/2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg animate-float border border-purple-200"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center space-x-2">
                  <Eye className="w-3 h-3 text-purple-600" />
                  <span className="text-xs font-medium text-gray-700">{t("faceAi")}</span>
                </div>
              </div>

              <div
                className="absolute -left-6 bottom-1/4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg animate-float border border-emerald-200"
                style={{ animationDelay: "2s" }}
              >
                <div className="flex items-center space-x-2">
                  <FileText className="w-3 h-3 text-emerald-600" />
                  <span className="text-xs font-medium text-gray-700">{t("documents")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
