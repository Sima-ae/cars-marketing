import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

export default function CarsMarketingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">CM</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Cars Marketing</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-4 h-4 bg-teal-600 rounded-full"></div>
                <span>We are mainly active in</span>
              </div>
              <Badge variant="outline" className="text-sm">
                ASIA, EUROPE, UAE & USA
              </Badge>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-4 h-4 bg-teal-600 rounded-full"></div>
                <span>Languages</span>
              </div>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">Get A Quote</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-100 to-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Cars <span className="text-teal-600">Marketing</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Accelerate your automotive business with proven digital marketing strategies. From dealership promotion
                to brand awareness, we drive results that matter. Our expert team specializes in automotive marketing
                across all platforms, helping you reach more customers and increase sales.
              </p>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg">
                Start Your Campaign
              </Button>
            </div>
            <div className="relative">
              <img
                src="/professional-woman-giving-thumbs-up-in-modern-offi.png"
                alt="Professional automotive marketing consultant"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Tags */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Advertising",
              "Branding",
              "Copywriting",
              "Email",
              "Lead Generation",
              "Pay-per-click",
              "Planning",
              "Remarketing",
              "Strategy",
              "Leads",
              "SEO",
              "PPC",
              "Content",
              "CRO",
              "Social",
              "Analytics",
              "ROI",
              "Web",
            ].map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-gray-800 text-white hover:bg-gray-700">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Steps Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-teal-600 font-medium mb-2">Our working process</p>
            <h2 className="text-4xl font-bold text-gray-900">In 4 Steps</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <img
                    src="/business-meeting-with-automotive-professionals-dis.png"
                    alt="Meeting"
                    className="rounded-lg w-full h-40 object-cover"
                  />
                  <Badge className="absolute top-2 left-2 bg-teal-600">Step 01</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-3">Meeting</h3>
                <p className="text-gray-600 text-sm">
                  We start by having our meetings to understand your automotive business goals. Schedule with a dealer
                  marketing expert appointment.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <img
                    src="/business-professionals-analyzing-analytics-dashboard.png"
                    alt="Plan of approach"
                    className="rounded-lg w-full h-40 object-cover"
                  />
                  <Badge className="absolute top-2 left-2 bg-teal-600">Step 02</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-3">Plan of approach</h3>
                <p className="text-gray-600 text-sm">
                  Crafting the budget, setting realistic goals, choosing audience, objectives, strategy and full
                  summary.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <img
                    src="/automotive-marketing-campaign-execution-with-digit.png"
                    alt="Start"
                    className="rounded-lg w-full h-40 object-cover"
                  />
                  <Badge className="absolute top-2 left-2 bg-teal-600">Step 03</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-3">Start</h3>
                <p className="text-gray-600 text-sm">
                  Is everything clear? Are you satisfied with our approach and our plan of approach? Let's start!
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <img
                    src="/business-professionals-planning-meeting-with-charts.png"
                    alt="Results"
                    className="rounded-lg w-full h-40 object-cover"
                  />
                  <Badge className="absolute top-2 left-2 bg-teal-600">Step 04</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-3">Results</h3>
                <p className="text-gray-600 text-sm">
                  After a successful period we create a report and optimize for a follow-up campaign.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media Marketing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal-600 font-medium mb-2">Social Media</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Marketing</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With a focus on measurable results and a commitment to excellence, we ensure your automotive marketing
                efforts translate into increased traffic, higher conversions, and enhanced brand visibility.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Advice from certified automotive professionals",
                  "Customized advertising campaigns",
                  "Driven by collected data",
                  "Focused on buyer CPA/CPC",
                  "Increased ROI/ROAS",
                  "Long-term prospects",
                  "Personal approach",
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-teal-600 hover:bg-teal-700 text-white">Schedule an appointment →</Button>
            </div>

            <div className="relative">
              <div className="bg-gray-100 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="mt-6 bg-teal-600 text-white p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold">12+</div>
                    <div className="text-sm">Years of experience</div>
                  </div>
                  {[
                    { platform: "Facebook" },
                    { platform: "Instagram" },
                    { platform: "Messenger" },
                    { platform: "Meta" },
                    { platform: "LinkedIn" },
                    { platform: "Telegram" },
                    { platform: "TikTok" },
                    { platform: "WhatsApp" },
                    { platform: "X" },
                  ].map((item) => (
                    <div
                      key={item.platform}
                      className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
                    >
                      <div className="flex items-center space-x-3">
                        <img src="/checkmark-icon.png" alt="checkmark" className="w-5 h-5" />
                        <span className="font-medium">{item.platform}</span>
                      </div>
                      <CheckCircle className="w-5 h-5 text-teal-600" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Icons */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8">
            We provide services for our clients on the following platforms
          </p>
          <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
            {[
              { name: "Meta" },
              { name: "Facebook" },
              { name: "Messenger" },
              { name: "Instagram" },
              { name: "WhatsApp" },
              { name: "WeChat" },
              { name: "TikTok" },
              { name: "Telegram" },
              { name: "Snapchat" },
              { name: "X" },
            ].map((platform) => (
              <div key={platform.name} className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                <img src="/checkmark-icon.png" alt="checkmark" className="w-6 h-6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Marketing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal-600 font-medium mb-2">Digital Online</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Marketing</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">We only work with official channels, NO Bots!</p>

              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-8">
                <div className="space-y-2">
                  <div>A/B Testing</div>
                  <div>Affiliate Promotion</div>
                  <div>Brand Promotion</div>
                  <div>Content Marketing</div>
                  <div>Digital Marketing</div>
                  <div>Email Marketing</div>
                  <div>Lead Generation</div>
                  <div>Market Penetration</div>
                  <div>PPC Management</div>
                </div>
                <div className="space-y-2">
                  <div>Sales Optimization</div>
                  <div>Social Media Management</div>
                  <div>Website Development</div>
                  <div>and we offer more services</div>
                </div>
              </div>

              <Button className="bg-teal-600 hover:bg-teal-700 text-white">Schedule an appointment →</Button>
            </div>

            <div className="relative">
              <div className="bg-gray-100 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="mt-6 bg-teal-600 text-white p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm">Years of experience</div>
                  </div>
                  {[
                    { platform: "Amazon Music" },
                    { platform: "Apple Music" },
                    { platform: "Discord" },
                    { platform: "Facebook / Instagram" },
                    { platform: "Google" },
                    { platform: "Meta" },
                    { platform: "NetEase Cloud Music" },
                    { platform: "SoundCloud" },
                    { platform: "Spotify" },
                    { platform: "Tencent Music" },
                    { platform: "TikTok" },
                    { platform: "X" },
                    { platform: "Twitch" },
                    { platform: "YouTube" },
                  ].map((item) => (
                    <div
                      key={item.platform}
                      className="flex items-center justify-between p-2 bg-white rounded shadow-sm"
                    >
                      <div className="flex items-center space-x-3">
                        <img src="/checkmark-icon.png" alt="checkmark" className="w-5 h-5" />
                        <span className="text-sm font-medium">{item.platform}</span>
                      </div>
                      <CheckCircle className="w-4 h-4 text-teal-600" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
                  Unlock the full potential of your automotive business with our professional Cars Marketing services
                  and dedicated support.
                </p>
                <p>
                  We are certified and specialized in driving growth through advertising and tailor-made digital
                  solutions combined with effective strategies.
                </p>
                <p>
                  Whether you need SEO optimization, engaging content creation, effective social media campaigns, or
                  cutting-edge PPC management, our team of seasoned professionals are here to elevate your brand's
                  online presence.
                </p>
                <p>
                  Partner with us today and transform your digital landscape for tomorrow's success. Discover the
                  difference our expertise can make.
                </p>
              </div>

              <div className="flex space-x-3">
                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.367-12 11.987c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12.013C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-teal-600 mb-6">Our Services</h3>
              <div className="space-y-3 text-sm text-gray-700">
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
                  "Influencer Marketing",
                  "Lead Generation",
                  "Pay-Per-Click",
                  "Product Promotion",
                  "Sales Improvement",
                  "SEO Optimization",
                  "Social Media Marketing",
                  "Webdesign & Webhosting",
                  "Website Traffic Boosting",
                ].map((service) => (
                  <div key={service} className="flex items-center space-x-2">
                    <span className="text-black font-bold">✓</span>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-teal-600 mb-6">News</h3>

              <div className="mb-8">
                <h4 className="text-lg font-medium text-teal-600 mb-4">Like to receive our newsletter?</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-l-none">Sign up</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 mt-12 pt-8">
            <div className="flex flex-col items-center text-center text-sm text-gray-600 space-y-2">
              <span>Working Hours: Every day from 08:00 till 20:00 hours CET.</span>
              <span className="font-bold text-gray-900">Cars Marketing © 2025</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
