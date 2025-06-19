import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowDown, ArrowUp, ChevronDown, Search, LayoutDashboard, LayoutGrid, LayoutList, Link, Youtube, Menu, X, CheckCircle, Star } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your inquiry!",
      description: "Our team will contact you within 24 hours to discuss your project requirements.",
    });
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#1a1a1a]/95 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              <div className="text-white">
                <span className="font-bold text-2xl">BYTE</span>
                <div className="text-sm text-[#B3E547]">Block by Block</div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => navigate('/')} className="text-white hover:text-[#B3E547] transition-colors font-medium">Home</button>
              <button onClick={() => navigate('/about')} className="text-white hover:text-[#B3E547] transition-colors font-medium">About</button>
              <button onClick={() => navigate('/services')} className="text-white hover:text-[#B3E547] transition-colors font-medium">Services</button>
              <button onClick={() => navigate('/portfolio')} className="text-white hover:text-[#B3E547] transition-colors font-medium">Portfolio</button>
              <button onClick={() => navigate('/contact')} className="text-white hover:text-[#B3E547] transition-colors font-medium">Contact</button>
              <Button className="bg-[#B3E547] text-[#1a1a1a] hover:bg-[#A4DC3D] font-semibold">
                Get Free Quote
              </Button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-800 bg-[#1a1a1a]">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => navigate('/')} className="block px-3 py-2 text-white hover:text-[#B3E547] font-medium">Home</button>
                <button onClick={() => navigate('/about')} className="block px-3 py-2 text-white hover:text-[#B3E547] font-medium">About</button>
                <button onClick={() => navigate('/services')} className="block px-3 py-2 text-white hover:text-[#B3E547] font-medium">Services</button>
                <button onClick={() => navigate('/portfolio')} className="block px-3 py-2 text-white hover:text-[#B3E547] font-medium">Portfolio</button>
                <button onClick={() => navigate('/contact')} className="block px-3 py-2 text-white hover:text-[#B3E547] font-medium">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge className="bg-[#B3E547]/20 text-[#3B4954] hover:bg-[#B3E547]/30 border-[#B3E547]">
                  🚀 #1 Web Development Company in USA & Canada
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3B4954] leading-tight">
                  Transform Your Business with 
                  <span className="bg-gradient-to-r from-[#B3E547] to-[#A4DC3D] bg-clip-text text-transparent"> Professional Web Solutions</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Ready to dominate the North American market? We build stunning, high-converting websites that turn visitors into customers. Join 500+ successful businesses across USA & Canada who chose ByteCode for results that matter.
                </p>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.9/5 from 200+ reviews across USA & Canada</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#B3E547] text-[#3B4954] hover:bg-[#A4DC3D] text-lg px-8 py-6 font-semibold animate-pulse"
                  onClick={() => scrollToSection('contact')}
                >
                  🔥 Start Your Success Story Today
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 border-2 border-[#3B4954] text-[#3B4954] hover:bg-[#3B4954] hover:text-white"
                  onClick={() => scrollToSection('portfolio')}
                >
                  See Winning Results
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#3B4954]">500+</div>
                  <div className="text-sm text-gray-600">Success Stories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#3B4954]">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#3B4954]">24/7</div>
                  <div className="text-sm text-gray-600">Premium Support</div>
                </div>
              </div>

              {/* Urgency & Social Proof */}
              <div className="bg-[#B3E547]/10 border border-[#B3E547] rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-[#B3E547]" />
                  <span className="font-semibold text-[#3B4954]">Limited Time Offer</span>
                </div>
                <p className="text-sm text-gray-700">Book your free consultation this week and get 20% off your first project!</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-[#3B4954] to-[#2C3E4A] rounded-2xl p-8 text-white shadow-2xl">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-[#B3E547] rounded-full animate-pulse"></div>
                  <span className="text-sm text-[#B3E547]">🔥 High Demand - Book Now!</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Get Your FREE Strategy Session</h3>
                <p className="mb-6">Ready to 10X your online presence in USA & Canada? Let's create a winning strategy for your business.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input 
                    placeholder="Your Name" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                  <Input 
                    type="email" 
                    placeholder="Email Address" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                  <Input 
                    placeholder="Phone Number" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  <Button type="submit" className="w-full bg-[#B3E547] text-[#3B4954] hover:bg-[#A4DC3D] font-semibold py-6 text-lg">
                    🚀 Get My FREE Quote ($500 Value)
                  </Button>
                </form>
                <p className="text-xs text-gray-300 mt-3 text-center">No spam. Your information is 100% secure.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16">
          <button 
            onClick={() => scrollToSection('services')}
            className="animate-bounce bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronDown className="w-6 h-6 text-[#B3E547]" />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3B4954] mb-4">
              Services That Drive Real Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stop losing customers to competitors. Our proven solutions turn your website into a profit-generating machine across USA & Canada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <LayoutDashboard className="w-8 h-8" />,
                title: "High-Converting Websites",
                description: "Custom websites that convert 3X better than industry average. Built for speed, SEO, and sales across North America.",
                features: ["Mobile-First Design", "Lightning Fast Loading", "SEO Optimized", "Conversion Focused"]
              },
              {
                icon: <LayoutGrid className="w-8 h-8" />,
                title: "E-Commerce Powerhouses",
                description: "Turn your products into profit with stores that sell 24/7. Complete payment integration for USD & CAD.",
                features: ["Shopify & WooCommerce", "Payment Gateway Setup", "Inventory Management", "Sales Analytics"]
              },
              {
                icon: <Search className="w-8 h-8" />,
                title: "SEO Domination",
                description: "Rank #1 on Google.com and Google.ca. Steal customers from competitors. Guaranteed traffic increase or money back.",
                features: ["Google Ranking", "Local SEO USA/Canada", "Content Strategy", "Monthly Reports"]
              },
              {
                icon: <LayoutList className="w-8 h-8" />,
                title: "Brand & Design That Sells",
                description: "Professional designs that build trust and drive sales. Your brand will stand out in the North American market.",
                features: ["Logo & Branding", "UI/UX Design", "Brand Guidelines", "Marketing Materials"]
              },
              {
                icon: <Link className="w-8 h-8" />,
                title: "24/7 Peace of Mind",
                description: "Never worry about downtime again. Complete maintenance, security, and support for USA & Canada.",
                features: ["Security Monitoring", "Daily Backups", "Performance Optimization", "Priority Support"]
              },
              {
                icon: <Youtube className="w-8 h-8" />,
                title: "Complete Digital Transformation",
                description: "Future-proof your business with cloud solutions and automation that save time and money.",
                features: ["Cloud Migration", "API Integration", "Workflow Automation", "System Optimization"]
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-r from-[#B3E547] to-[#A4DC3D] rounded-lg p-3 w-fit mb-4 text-[#3B4954]">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#3B4954] mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#B3E547] mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t pt-4">
                    <Button className="w-full bg-[#B3E547] text-[#3B4954] hover:bg-[#A4DC3D]">
                      Get Started Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3B4954] mb-4">
              Our Success Stories Across USA & Canada
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses across North America achieve their digital goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "TechStart E-Commerce Platform",
                category: "E-Commerce - USA",
                description: "Increased online sales by 300% with a custom Shopify solution and advanced analytics.",
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
                results: ["300% Sales Increase", "Mobile-First Design", "Payment Integration"]
              },
              {
                title: "FinanceFlow Web Application",
                category: "SaaS Platform - Canada",
                description: "Built a secure financial management platform serving 10,000+ users across Canada.",
                image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80",
                results: ["10K+ Active Users", "Bank-Grade Security", "Real-time Analytics"]
              },
              {
                title: "HealthCare Provider Portal",
                category: "Healthcare - USA",
                description: "Streamlined patient management with HIPAA-compliant web portal and appointment system.",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
                results: ["HIPAA Compliant", "Patient Portal", "Appointment System"]
              }
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}></div>
                <CardContent className="p-6">
                  <Badge className="bg-[#B3E547]/20 text-[#3B4954] mb-3">{project.category}</Badge>
                  <h3 className="text-xl font-bold text-[#3B4954] mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="space-y-2">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <ArrowUp className="w-4 h-4 text-[#B3E547] mr-2" />
                        {result}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3B4954] mb-4">
              Real Results From Real Businesses
            </h2>
            <p className="text-xl text-gray-600">
              See how we've helped businesses across USA & Canada achieve incredible growth and success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                title: "CEO, TechStart Inc.",
                content: "ROI of 400% in just 6 months! ByteCode didn't just build us a website - they built us a money-making machine. Sales have tripled and we're booked solid across the USA!",
                rating: 5,
                location: "San Francisco, CA, USA",
                result: "+400% ROI"
              },
              {
                name: "Michael Chen",
                title: "Founder, GrowthLab",
                content: "From zero to $100K CAD/month in online sales! Their team is incredible - professional, fast, and they actually care about your success. Best investment we ever made!",
                rating: 5,
                location: "Toronto, ON, Canada",
                result: "$100K/mo Sales"
              },
              {
                name: "Emily Rodriguez",
                title: "Marketing Director, RetailPlus",
                content: "We were skeptical but they delivered beyond our wildest dreams. 250% increase in sales, customers love the new site, and our conversion rate is through the roof!",
                rating: 5,
                location: "Austin, TX, USA",
                result: "+250% Sales"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Badge className="bg-[#B3E547]/20 text-[#B3E547] font-bold">{testimonial.result}</Badge>
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-bold text-[#3B4954]">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                    <div className="text-sm text-[#B3E547]">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1a1a1a] to-[#2C3E4A]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Stop Losing Money to Bad Websites
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Every day you wait is money lost to competitors. Join 500+ businesses across USA & Canada making serious profit with ByteCode.
          </p>
          <div className="bg-[#B3E547]/20 border border-[#B3E547] rounded-lg p-4 mb-8">
            <p className="text-white font-semibold">⚡ LIMITED TIME: Book this week and save $2,000 + get FREE premium support for 3 months!</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#B3E547] text-[#3B4954] hover:bg-[#A4DC3D] text-lg px-8 py-6 font-semibold animate-pulse"
              onClick={() => scrollToSection('contact')}
            >
              🔥 Claim Your $2,000 Discount Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-[#3B4954] text-lg px-8 py-6"
            >
              📞 Call Now: (555) 123-4567
            </Button>
          </div>
          <p className="text-sm text-gray-400 mt-4">⏰ Offer expires in 48 hours. Don't miss out!</p>
        </div>
      </section>

      {/* Contact Section - Get Started Today */}
      <section id="contact" className="py-16" style={{ background: `linear-gradient(135deg, #B3E547 0%, #A4DC3D 50%, #1a1a1a 100%)` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 flex items-center">
                <div className="text-[#1a1a1a] mr-3">
                  <span className="font-bold text-2xl">BYTE</span>
                  <div className="text-sm">Block by Block</div>
                </div>
                Get Started Today
              </h2>
              <p className="text-lg text-[#1a1a1a] mb-8">
                Ready to dominate the USA & Canada markets? Fill out the form and our team will contact you within 24 hours with a customized solution for your business needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#1a1a1a] rounded-full p-3">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#1a1a1a]">Phone (USA & Canada)</div>
                    <div className="text-[#1a1a1a]/80">(555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-[#1a1a1a] rounded-full p-3">
                    <span className="text-white text-sm">✉️</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#1a1a1a]">Email</div>
                    <div className="text-[#1a1a1a]/80">hello@bytecode.dev</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-[#1a1a1a] rounded-full p-3">
                    <span className="text-white text-sm">📍</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#1a1a1a]">Offices</div>
                    <div className="text-[#1a1a1a]/80">Silicon Valley, CA & Toronto, ON</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input 
                      placeholder="Full Name" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                    <Input 
                      type="email" 
                      placeholder="Email Address" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input 
                      placeholder="Company Name" 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                    <Input 
                      placeholder="Phone Number" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <Textarea 
                    placeholder="Tell us about your project requirements..." 
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#1a1a1a] to-[#2C3E4A] hover:from-[#2C3E4A] hover:to-[#1a1a1a] text-lg py-6 text-white"
                  >
                    Send Message & Get Free Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-white">
                  <span className="font-bold text-xl">BYTE</span>
                  <div className="text-sm text-[#B3E547]">Block by Block</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Transforming businesses with cutting-edge web development solutions across USA & Canada.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Web Development</li>
                <li>E-Commerce Solutions</li>
                <li>UI/UX Design</li>
                <li>Digital Marketing</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => navigate('/about')}>About Us</button></li>
                <li>Our Team</li>
                <li>Careers</li>
                <li><button onClick={() => navigate('/contact')}>Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>(555) 123-4567</li>
                <li>hello@bytecode.dev</li>
                <li>Silicon Valley, CA</li>
                <li>Toronto, ON, Canada</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BYTE - Block by Block. All rights reserved. Serving USA & Canada.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
