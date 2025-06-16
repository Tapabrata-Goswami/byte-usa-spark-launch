
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowDown, ArrowUp, ChevronDown, Search, LayoutDashboard, LayoutGrid, LayoutList, Link, Youtube, Menu, X } from "lucide-react";
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
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#BBED50] to-[#BBED50]/80 rounded-lg flex items-center justify-center">
                <span className="text-[#2C323C] font-bold text-lg">B</span>
              </div>
              <div>
                <span className="font-bold text-xl text-[#2C323C]">Bytecode</span>
                <div className="text-xs text-gray-600">IT Solutions PVT LTD</div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => navigate('/')} className="text-[#2C323C] hover:text-[#BBED50] transition-colors font-medium">Home</button>
              <button onClick={() => navigate('/about')} className="text-[#2C323C] hover:text-[#BBED50] transition-colors font-medium">About</button>
              <button onClick={() => navigate('/services')} className="text-[#2C323C] hover:text-[#BBED50] transition-colors font-medium">Services</button>
              <button onClick={() => navigate('/portfolio')} className="text-[#2C323C] hover:text-[#BBED50] transition-colors font-medium">Portfolio</button>
              <button onClick={() => navigate('/contact')} className="text-[#2C323C] hover:text-[#BBED50] transition-colors font-medium">Contact</button>
              <Button className="bg-[#BBED50] text-[#2C323C] hover:bg-[#BBED50]/90 font-semibold">
                Get Free Quote
              </Button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => navigate('/')} className="block px-3 py-2 text-[#2C323C] hover:text-[#BBED50] font-medium">Home</button>
                <button onClick={() => navigate('/about')} className="block px-3 py-2 text-[#2C323C] hover:text-[#BBED50] font-medium">About</button>
                <button onClick={() => navigate('/services')} className="block px-3 py-2 text-[#2C323C] hover:text-[#BBED50] font-medium">Services</button>
                <button onClick={() => navigate('/portfolio')} className="block px-3 py-2 text-[#2C323C] hover:text-[#BBED50] font-medium">Portfolio</button>
                <button onClick={() => navigate('/contact')} className="block px-3 py-2 text-[#2C323C] hover:text-[#BBED50] font-medium">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge className="bg-[#BBED50]/20 text-[#2C323C] hover:bg-[#BBED50]/30 border-[#BBED50]">
                  🚀 #1 Web Development Company in USA
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C323C] leading-tight">
                  Transform Your Business with 
                  <span className="bg-gradient-to-r from-[#BBED50] to-[#BBED50]/80 bg-clip-text text-transparent"> Custom Web Solutions</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  From stunning websites to powerful web applications, we deliver cutting-edge solutions that drive growth and exceed expectations. Trusted by 500+ businesses across the USA.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#BBED50] text-[#2C323C] hover:bg-[#BBED50]/90 text-lg px-8 py-6 font-semibold"
                  onClick={() => scrollToSection('contact')}
                >
                  Start Your Project Today
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 border-2 border-[#2C323C] text-[#2C323C] hover:bg-[#2C323C] hover:text-white"
                  onClick={() => scrollToSection('portfolio')}
                >
                  View Our Work
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2C323C]">500+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2C323C]">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2C323C]">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-[#2C323C] to-[#2C323C]/90 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Get Your Free Consultation</h3>
                <p className="mb-6">Ready to transform your digital presence? Let's discuss your project requirements.</p>
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
                  <Button type="submit" className="w-full bg-[#BBED50] text-[#2C323C] hover:bg-[#BBED50]/90 font-semibold">
                    Get Free Quote Now
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16">
          <button 
            onClick={() => scrollToSection('services')}
            className="animate-bounce bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronDown className="w-6 h-6 text-[#BBED50]" />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Expert Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end web development solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <LayoutDashboard className="w-8 h-8" />,
                title: "Custom Web Development",
                description: "Bespoke web applications built with cutting-edge technologies like React, Node.js, and cloud platforms.",
                features: ["React & Next.js", "Full-Stack Development", "API Integration", "Database Design"]
              },
              {
                icon: <LayoutGrid className="w-8 h-8" />,
                title: "E-Commerce Solutions",
                description: "Powerful online stores that convert visitors into customers with seamless shopping experiences.",
                features: ["Shopify & WooCommerce", "Payment Gateway", "Inventory Management", "Mobile Optimization"]
              },
              {
                icon: <Search className="w-8 h-8" />,
                title: "SEO & Digital Marketing",
                description: "Drive organic traffic and boost your online visibility with our proven SEO strategies.",
                features: ["Technical SEO", "Content Strategy", "Local SEO", "Analytics Setup"]
              },
              {
                icon: <LayoutList className="w-8 h-8" />,
                title: "UI/UX Design",
                description: "Beautiful, intuitive designs that engage users and drive conversions across all devices.",
                features: ["User Research", "Wireframing", "Prototyping", "Responsive Design"]
              },
              {
                icon: <Link className="w-8 h-8" />,
                title: "Website Maintenance",
                description: "Keep your website secure, fast, and up-to-date with our comprehensive maintenance services.",
                features: ["Security Updates", "Performance Optimization", "Backup Solutions", "24/7 Monitoring"]
              },
              {
                icon: <Youtube className="w-8 h-8" />,
                title: "Digital Transformation",
                description: "Modernize your business processes with cloud solutions and digital automation.",
                features: ["Cloud Migration", "API Development", "System Integration", "Workflow Automation"]
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-3 w-fit mb-4 text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses across various industries achieve their digital goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "TechStart E-Commerce Platform",
                category: "E-Commerce",
                description: "Increased online sales by 300% with a custom Shopify solution and advanced analytics.",
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
                results: ["300% Sales Increase", "Mobile-First Design", "Payment Integration"]
              },
              {
                title: "FinanceFlow Web Application",
                category: "SaaS Platform",
                description: "Built a secure financial management platform serving 10,000+ users nationwide.",
                image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80",
                results: ["10K+ Active Users", "Bank-Grade Security", "Real-time Analytics"]
              },
              {
                title: "HealthCare Provider Portal",
                category: "Healthcare",
                description: "Streamlined patient management with HIPAA-compliant web portal and appointment system.",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
                results: ["HIPAA Compliant", "Patient Portal", "Appointment System"]
              }
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}></div>
                <CardContent className="p-6">
                  <Badge className="bg-blue-100 text-blue-700 mb-3">{project.category}</Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="space-y-2">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <ArrowUp className="w-4 h-4 text-green-600 mr-2" />
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from businesses we've helped succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                title: "CEO, TechStart Inc.",
                content: "Bytecode IT Solutions transformed our online presence. Their team delivered a beautiful, high-performing website that exceeded our expectations. Our conversion rates have tripled!",
                rating: 5,
                location: "San Francisco, CA"
              },
              {
                name: "Michael Chen",
                title: "Founder, GrowthLab",
                content: "Professional, reliable, and incredibly skilled. They built our SaaS platform from scratch and continue to provide excellent support. Highly recommended!",
                rating: 5,
                location: "New York, NY"
              },
              {
                name: "Emily Rodriguez",
                title: "Marketing Director, RetailPlus",
                content: "The e-commerce solution they developed has been a game-changer for our business. Sales have increased by 250% since launch. Amazing work!",
                rating: 5,
                location: "Austin, TX"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-5 h-5 text-yellow-400">⭐</div>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                    <div className="text-sm text-blue-600">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2C323C] to-[#2C323C]/90">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 500+ successful businesses that trust Bytecode IT Solutions for their web development needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#BBED50] text-[#2C323C] hover:bg-[#BBED50]/90 text-lg px-8 py-6 font-semibold"
              onClick={() => scrollToSection('contact')}
            >
              Get Your Free Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-[#2C323C] text-lg px-8 py-6"
            >
              Call Now: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Started Today</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to discuss your project? Fill out the form and our team will contact you within 24 hours with a customized solution for your business needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 rounded-full p-3">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">(555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 rounded-full p-3">
                    <span className="text-white text-sm">✉️</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">hello@bytecodeit.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 rounded-full p-3">
                    <span className="text-white text-sm">📍</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Office</div>
                    <div className="text-gray-600">123 Tech Street, Silicon Valley, CA 94000</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
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
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6"
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
      <footer className="bg-[#2C323C] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-[#BBED50] to-[#BBED50]/80 rounded-lg flex items-center justify-center">
                  <span className="text-[#2C323C] font-bold text-lg">B</span>
                </div>
                <div>
                  <span className="font-bold text-lg text-white">Bytecode</span>
                  <div className="text-xs text-gray-400">IT Solutions PVT LTD</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Transforming businesses with cutting-edge web development solutions across the USA.
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
                <li>hello@bytecode.com</li>
                <li>123 Tech Street</li>
                <li>Silicon Valley, CA 94000</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Bytecode IT Solutions PVT LTD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
