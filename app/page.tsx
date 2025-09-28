"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import ContactForm from "@/components/contact-form"
import QuoteForm from "@/components/quote-form"
import SimpleContactForm from "@/components/simple-contact-form"
import LanguageSwitcher from "@/components/language-switcher"
import { useTranslations } from "@/lib/use-translations"

export default function CarsMarketingPage() {
  const t = useTranslations()
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)
  const [isSimpleContactFormOpen, setIsSimpleContactFormOpen] = useState(false)

  const openContactForm = () => {
    setIsContactFormOpen(true)
  }

  const closeContactForm = () => {
    setIsContactFormOpen(false)
  }

  const openQuoteForm = () => {
    setIsQuoteFormOpen(true)
  }

  const closeQuoteForm = () => {
    setIsQuoteFormOpen(false)
  }

  const openSimpleContactForm = () => {
    setIsSimpleContactFormOpen(true)
  }

  const closeSimpleContactForm = () => {
    setIsSimpleContactFormOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ContactForm isOpen={isContactFormOpen} onClose={closeContactForm} />
      <QuoteForm isOpen={isQuoteFormOpen} onClose={closeQuoteForm} />
      <SimpleContactForm isOpen={isSimpleContactFormOpen} onClose={closeSimpleContactForm} />
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">CM</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">Cars Marketing</span>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
                <span className="font-medium">{t.activeIn}</span>
              </div>
              <Badge variant="outline" className="text-sm font-semibold border-teal-200 text-teal-700 bg-teal-50">
                {t.regions}
              </Badge>
              <Button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200" onClick={openQuoteForm}>
                {t.getAQuote}
              </Button>
              <LanguageSwitcher />
            </div>
            <div className="lg:hidden">
              <Button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold px-4 py-2 rounded-lg shadow-md">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-teal-50 py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t.heroTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800">{t.heroSubtitle}</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                {t.heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200" onClick={openContactForm}>
                  {t.startToday}
                </Button>
                <Button variant="outline" className="border-2 border-teal-600 text-teal-700 hover:bg-teal-50 font-semibold px-6 py-2 rounded-lg transition-all duration-200" onClick={() => document.getElementById('marketing-section')?.scrollIntoView({ behavior: 'smooth' })}>
                  {t.learnMore}
                </Button>
              </div>
            </div>
            <div className="relative lg:order-last">
              <div className="relative">
                <img
                  src="/professional-woman-giving-thumbs-up-in-modern-offi.png"
                  alt="Professional automotive marketing consultant"
                  className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-teal-300 to-teal-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Icons */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-700 text-lg font-medium mb-4">
            {t.platformTitle}
          </p>
          <div className="grid grid-cols-6 sm:grid-cols-9 md:grid-cols-12 lg:grid-cols-18 gap-3 sm:gap-4 lg:gap-6 justify-items-center">
            {[
              { name: "Amazon", logo: "/logos/amazon-icon.png" },
              { name: "Discord", logo: "/logos/discord-icon.png" },
              { name: "Facebook", logo: "/logos/facebook-icon.png" },
              { name: "Facebook Messenger", logo: "/logos/facebook-messenger-icon.png" },
              { name: "Google", logo: "/logos/google-icon.png" },
              { name: "Instagram", logo: "/logos/instagram-icon.png" },
              { name: "LinkedIn", logo: "/logos/linkedin-icon.png" },
              { name: "Meta", logo: "/logos/meta-icon.png" },
              { name: "Pinterest", logo: "/logos/pinterest-icon.png" },
              { name: "Shopify", logo: "/logos/shopify-icon.png" },
              { name: "Snapchat", logo: "/logos/snapchat-icon.png" },
              { name: "Spotify", logo: "/logos/spotify-icon.png" },
              { name: "Telegram", logo: "/logos/telegram-icon.png" },
              { name: "TikTok", logo: "/logos/tiktok-icon.png" },
              { name: "Twitch", logo: "/logos/twitch-icon.png" },
              { name: "WhatsApp", logo: "/logos/whatsapp-icon.png" },
              { name: "X", logo: "/logos/x-icon.png" },
              { name: "YouTube", logo: "/logos/youtube-icon.png" },
            ].map((platform) => (
              <div key={platform.name} className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group">
                <img src={platform.logo} alt={platform.name} className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 object-contain group-hover:scale-110 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>


       {/* Digital & Social Media Marketing Section */}
       <section id="marketing-section" className="pt-12 pb-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  {t.marketingTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800">{t.marketingSubtitle}</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">{t.marketingDescription}</p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">{t.noBotsText}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="space-y-2">
                  {t.services.slice(0, 13).map((service, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-teal-600" />
                      </div>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {t.services.slice(13).map((service, index) => (
                    <div key={index + 12} className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-teal-600" />
                      </div>
                      <span>{service}</span>
                    </div>
                  ))}
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-teal-600" />
                    </div>
                    <span>{t.moreServices}</span>
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" onClick={openQuoteForm}>
                {t.scheduleAppointment}
              </Button>
            </div>

            <div className="relative lg:order-first">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-6 rounded-2xl text-center shadow-lg">
                    <div className="text-4xl font-bold mb-2">15+</div>
                    <div className="text-lg font-medium">{t.experienceTitle}</div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-2">
                      {[
                        { platform: "Amazon" },
                        { platform: "Discord" },
                        { platform: "Facebook" },
                        { platform: "Google" },
                        { platform: "Instagram" },
                        { platform: "LinkedIn" },
                        { platform: "Messenger" },
                        { platform: "Meta" },
                        { platform: "Pinterest" },
                      ].map((item) => (
                        <div
                          key={item.platform}
                          className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100"
                        >
                          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm">
                            <CheckCircle className="w-3 h-3 text-teal-600" />
                          </div>
                          <span className="text-sm font-semibold text-gray-700">{item.platform}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {[
                        { platform: "Shopify" },
                        { platform: "Snapchat" },
                        { platform: "Spotify" },
                        { platform: "Telegram" },
                        { platform: "TikTok" },
                        { platform: "Twitch" },
                        { platform: "WhatsApp" },
                        { platform: "X" },
                        { platform: "YouTube" },
                      ].map((item) => (
                        <div
                          key={item.platform}
                          className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100"
                        >
                          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm">
                            <CheckCircle className="w-3 h-3 text-teal-600" />
                          </div>
                          <span className="text-sm font-semibold text-gray-700">{item.platform}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Steps Process */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {t.stepsTitle} <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800">{t.stepsSubtitle}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <Card className="text-center group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <img
                    src="/business-meeting-with-automotive-professionals-dis.png"
                    alt="Meeting"
                    className="rounded-2xl w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-bold px-4 py-2 rounded-xl shadow-lg">
                    Step 01
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-4 text-teal-600">Meeting</h3>
                <p className="text-gray-600 leading-relaxed">
                  We start by having our meetings to understand your automotive business goals. Schedule with a dealer
                  marketing expert appointment.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <img
                    src="/business-professionals-analyzing-analytics-dashboard.png"
                    alt="Plan of approach"
                    className="rounded-2xl w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-bold px-4 py-2 rounded-xl shadow-lg">
                    Step 02
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-4 text-teal-600">{t.step2Title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.step2Description}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <img
                    src="/automotive-marketing-campaign-execution-with-digit.png"
                    alt="Start"
                    className="rounded-2xl w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-bold px-4 py-2 rounded-xl shadow-lg">
                    Step 03
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-4 text-teal-600">{t.step3Title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.step3Description}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <img
                    src="/business-professionals-planning-meeting-with-charts.png"
                    alt="Results"
                    className="rounded-2xl w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-bold px-4 py-2 rounded-xl shadow-lg">
                    Step 04
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-4 text-teal-600">{t.step4Title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.step4Description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Button */}
      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Button 
            className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            onClick={openContactForm}
          >
            {t.startToday}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CM</span>
                </div>
                <span className="text-xl font-semibold text-gray-900">Cars Marketing</span>
              </div>

              <div className="space-y-4 text-gray-600 text-sm mb-8">
                <p>
                  {t.footerDescription1}
                </p>
                <p>
                  {t.footerDescription2}
                </p>
                <p>
                  {t.footerDescription3}
                </p>
                <p>
                  {t.footerDescription4}
                </p>
              </div>

            </div>

            <div>
              <h3 className="text-xl font-semibold text-teal-600 mb-6">{t.ourServices}</h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700">
                {[
                  "Automotive Marketing",
                  "Brand Awareness",
                  "Business Growth",
                  "Cars Promotion",
                  "Data Analytics",
                  "Dealer Promotion",
                  "Digital Marketing",
                  "E-commerce",
                  "E-mail Marketing",
                  "Graphic Design",
                  "Lead Generation",
                  "Pay-Per-Click",
                  "Product Promotion",
                  "Sales Improvement",
                  "SEO Optimization",
                  "Social Media Marketing",
                  "Webdesign & Webhosting",
                  "Website Traffic Boosting",
                ].map((service) => (
                  <div key={service} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                      <CheckCircle className="w-3 h-3 text-teal-600" />
                    </div>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-teal-600 mb-6">{t.contact}</h3>
              
              <div className="mb-8">
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t.address}</h4>
                    <p>
                      {Array.isArray(t.addressValue) 
                        ? t.addressValue.map((line, index) => (
                            <span key={index}>
                              {line}
                              {index < t.addressValue.length - 1 && <br />}
                            </span>
                          ))
                        : t.addressValue
                      }
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t.phone}</h4>
                    <p>{t.phoneValue}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t.email}</h4>
                    <p>
                      <button 
                        onClick={openSimpleContactForm}
                        className="text-teal-600 hover:text-teal-700 hover:underline cursor-pointer"
                      >
                        {t.emailValue}
                      </button>
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t.businessHours}</h4>
                    <p>
                      {Array.isArray(t.businessHoursValue) 
                        ? t.businessHoursValue.map((line, index) => (
                            <span key={index}>
                              {typeof line === 'object' && 'bold' in line && line.bold ? (
                                <strong>{line.text}</strong>
                              ) : (
                                line as string
                              )}
                              {index < t.businessHoursValue.length - 1 && <br />}
                            </span>
                          ))
                        : t.businessHoursValue
                      }
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <a href="https://www.facebook.com/certified.marketing.professionals" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors duration-200">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.367-12 11.987c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/certified.marketing.pro" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors duration-200">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 mt-12 pt-8">
            <div className="flex flex-col items-center text-center text-sm text-gray-600 space-y-2">
              
              <span className="font-bold text-gray-900">{t.copyright}</span>
               <span>{t.poweredBy} <a href="https://000-it.com" target="_blank" className="text-teal-600">TripleZero iT</a></span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
