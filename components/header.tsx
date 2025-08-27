"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { LanguageSelector } from "./language-selector"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-heading font-bold text-gray-700">OCR.AI</h1>
            </div>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-indigo-600 transition-colors px-3 py-2 text-sm font-medium"
              >
                {t("nav.features")}
              </a>
              <a
                href="#deployment"
                className="text-gray-600 hover:text-indigo-600 transition-colors px-3 py-2 text-sm font-medium"
              >
                {t("nav.deployment")}
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-indigo-600 transition-colors px-3 py-2 text-sm font-medium"
              >
                {t("nav.pricing")}
              </a>
              <a
                href="#docs"
                className="text-gray-600 hover:text-indigo-600 transition-colors px-3 py-2 text-sm font-medium"
              >
                {t("nav.documentation")}
              </a>
            </div>
          </nav>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              <LanguageSelector />
              <Button variant="ghost" className="text-gray-600 hover:text-indigo-600">
                {t("nav.signIn")}
              </Button>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">{t("nav.getStarted")}</Button>
            </div>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600">
                {t("nav.features")}
              </a>
              <a
                href="#deployment"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600"
              >
                {t("nav.deployment")}
              </a>
              <a href="#pricing" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600">
                {t("nav.pricing")}
              </a>
              <a href="#docs" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600">
                {t("nav.documentation")}
              </a>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-3 space-x-3">
                  <LanguageSelector />
                  <Button variant="ghost" className="w-full justify-start">
                    {t("nav.signIn")}
                  </Button>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">{t("nav.getStarted")}</Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
