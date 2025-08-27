"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/contexts/language-context"

export function TechnicalSpecs() {
  const { t } = useLanguage()

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 sm:text-4xl">{t("technical.title")}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{t("technical.subtitle")}</p>
        </div>

        <div className="mt-16">
          <Tabs defaultValue="performance" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
              <TabsTrigger value="performance">{t("technical.tabs.performance")}</TabsTrigger>
              <TabsTrigger value="accuracy">{t("technical.tabs.accuracy")}</TabsTrigger>
              <TabsTrigger value="integration">{t("technical.tabs.integration")}</TabsTrigger>
            </TabsList>

            <TabsContent value="performance" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-heading">{t("technical.performance.speed.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-indigo-600 mb-2">2,000+</div>
                    <CardDescription>{t("technical.performance.speed.description")}</CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-heading">{t("technical.performance.response.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-indigo-600 mb-2">{"<50ms"}</div>
                    <CardDescription>{t("technical.performance.response.description")}</CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-heading">
                      {t("technical.performance.throughput.title")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-indigo-600 mb-2">10M+</div>
                    <CardDescription>{t("technical.performance.throughput.description")}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="accuracy" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-heading">{t("technical.accuracy.text.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-indigo-600 mb-2">99.8%</div>
                    <CardDescription>{t("technical.accuracy.text.description")}</CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-heading">{t("technical.accuracy.handwriting.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-indigo-600 mb-2">96.5%</div>
                    <CardDescription>{t("technical.accuracy.handwriting.description")}</CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-heading">{t("technical.accuracy.table.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-indigo-600 mb-2">98.2%</div>
                    <CardDescription>{t("technical.accuracy.table.description")}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="integration" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-heading">{t("technical.integration.supportedFormats")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["PDF", "JPEG", "PNG", "TIFF", "BMP", "WEBP", "HEIC"].map((format) => (
                        <Badge key={format} variant="secondary">
                          {format}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-heading">{t("technical.integration.apiStandards")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["REST API", "GraphQL", "WebSocket", "gRPC", "OpenAPI 3.0"].map((standard) => (
                        <Badge key={standard} variant="outline">
                          {standard}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
