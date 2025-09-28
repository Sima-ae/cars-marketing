"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Send, CheckCircle } from "lucide-react"
import { useTranslations } from "@/lib/use-translations"

interface QuoteFormProps {
  isOpen: boolean
  onClose: () => void
}

const platforms = [
  "Amazon", "Discord", "Facebook", "Facebook Messenger", "Google", "Instagram",
  "LinkedIn", "Meta", "Pinterest", "Shopify", "Snapchat", "Spotify",
  "Telegram", "TikTok", "Twitch", "WhatsApp", "X", "YouTube"
]

const services = [
  "A/B Testing", "Advertising Campaigns", "Advice from certified professionals",
  "Analytics", "Branding", "Business Growth", "Content Creation",
  "Conversion Rate Optimization", "Copywriting", "Driven by collected data",
  "Email and Mailing Lists", "Focused on buyer CPA/CPC", "Increased ROAS and ROI",
  "Lead Generation", "Long-term prospects", "Market Penetration", "Pay-per-click",
  "Personal approach", "Planning and Strategy", "PPC Management", "Sales Optimization",
  "SEM, SEO and SXO", "Remarketing", "Social Media Management", "Website Development"
]

const budgetOptions = [
  "€ 5,00 - € 50,00",
  "€ 50,00 - € 100,00", 
  "€ 100,00 - € 250,00",
  "€ 250,00 - € 500,00",
  "€ 500,00 - € 1.000,00",
  "€ 1.000,00 - € 2.500,00",
  "€ 2.500,00 - € 5.000,00",
  "€ 5.000,00 - € 10.000,00",
  "€ 10.000,00 - € 25.000,00",
  "€ 25.000,00 - € 50.000,00",
  "€ 50.000,00 +"
]

export default function QuoteForm({ isOpen, onClose }: QuoteFormProps) {
  const t = useTranslations()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    platforms: [] as string[],
    services: [] as string[],
    budget: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (type: 'platforms' | 'services', value: string) => {
    setFormData(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(item => item !== value)
        : [...prev[type], value]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: 'info@cars-marketing.com',
          formType: 'quote'
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setTimeout(() => {
          onClose()
          setIsSubmitted(false)
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            message: "",
            platforms: [],
            services: [],
            budget: ""
          })
        }, 2000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 z-[9999]"
      onClick={onClose}
    >
      <Card 
        className="w-full max-w-xl sm:max-w-2xl md:max-w-4xl max-h-[98vh] overflow-y-auto shadow-2xl border-0 bg-white/95 backdrop-blur-md"
        onClick={(e) => e.stopPropagation()}
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 border-b border-gray-100">
          <CardTitle className="text-lg font-bold text-gray-900">
            {t.quoteFormTitle}
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0 hover:bg-gray-100 rounded-full"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="px-4 py-0">
          {isSubmitted ? (
            <div className="text-center py-6">
              <CheckCircle className="h-12 w-12 text-teal-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600 text-sm">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Basic Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              {/* Platforms Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Platforms of Interest
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 border border-gray-200 rounded-md p-2 bg-gray-50">
                  {platforms.map((platform) => (
                    <label key={platform} className="flex items-center space-x-1 cursor-pointer hover:bg-white rounded px-1 py-0.5">
                      <input
                        type="checkbox"
                        checked={formData.platforms.includes(platform)}
                        onChange={() => handleCheckboxChange('platforms', platform)}
                        className="w-3 h-3 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                      />
                      <span className="text-xs text-gray-700">{platform}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Services Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Services Needed
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 border border-gray-200 rounded-md p-2 bg-gray-50">
                  {services.map((service) => (
                    <label key={service} className="flex items-center space-x-1 cursor-pointer hover:bg-white rounded px-1 py-0.5">
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleCheckboxChange('services', service)}
                        className="w-3 h-3 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                      />
                      <span className="text-xs text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget Selection */}
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.monthlyBudget} *
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="">Select your budget range</option>
                  {budgetOptions.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project, goals, or any specific requirements..."
                  className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end space-x-2 pt-1">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  disabled={isSubmitting}
                  className="text-sm px-3 py-1.5"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-sm px-4 py-1.5"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-1"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-3 w-3 mr-1" />
                      Send Quote Request
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
