
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Menu, X } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your inquiry!",
      description: "Our team will contact you within 24 hours to discuss your project requirements.",
    });
    setFormData({ name: "", email: "", company: "", phone: "", service: "", budget: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
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
              <button onClick={() => navigate('/contact')} className="text-[#BBED50] font-medium">Contact</button>
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
                <button onClick={() => navigate('/contact')} className="block px-3 py-2 text-[#BBED50] font-medium">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="bg-[#BBED50]/20 text-[#2C323C] hover:bg-[#BBED50]/30 border-[#BBED50] mb-4">
            Contact Us
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C323C] mb-6">
            Let's Build Something 
            <span className="bg-gradient-to-r from-[#BBED50] to-[#BBED50]/80 bg-clip-text text-transparent"> Amazing Together</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge web solutions? Get in touch with our team 
            and let's discuss how we can help you achieve your digital goals.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#2C323C] mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to discuss your project? Fill out the form and our team will contact you within 24 hours 
                with a customized solution for your business needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#BBED50] rounded-full p-3">
                    <Phone className="w-6 h-6 text-[#2C323C]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2C323C]">Phone</div>
                    <div className="text-gray-600">(555) 123-4567</div>
                    <div className="text-sm text-gray-500">Available 24/7 for urgent inquiries</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-[#BBED50] rounded-full p-3">
                    <Mail className="w-6 h-6 text-[#2C323C]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2C323C]">Email</div>
                    <div className="text-gray-600">hello@bytecode.com</div>
                    <div className="text-sm text-gray-500">We respond within 2 hours</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-[#BBED50] rounded-full p-3">
                    <MapPin className="w-6 h-6 text-[#2C323C]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2C323C]">Office</div>
                    <div className="text-gray-600">123 Tech Street, Silicon Valley, CA 94000</div>
                    <div className="text-sm text-gray-500">Visit us Monday - Friday, 9 AM - 6 PM</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-[#BBED50] rounded-full p-3">
                    <Clock className="w-6 h-6 text-[#2C323C]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2C323C]">Business Hours</div>
                    <div className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM PST</div>
                    <div className="text-sm text-gray-500">Emergency support available 24/7</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#2C323C] mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input 
                      placeholder="Full Name *" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                    <Input 
                      type="email" 
                      placeholder="Email Address *" 
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
                  <div className="grid md:grid-cols-2 gap-4">
                    <select 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#BBED50]"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="">Select Service</option>
                      <option value="web-development">Web Development</option>
                      <option value="ecommerce">E-Commerce Solutions</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="ui-ux">UI/UX Design</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="other">Other</option>
                    </select>
                    <select 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#BBED50]"
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    >
                      <option value="">Project Budget</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-plus">$50,000+</option>
                    </select>
                  </div>
                  <Textarea 
                    placeholder="Tell us about your project requirements... *" 
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-[#BBED50] text-[#2C323C] hover:bg-[#BBED50]/90 text-lg py-6 font-semibold"
                  >
                    Send Message & Get Free Quote
                  </Button>
                  <p className="text-sm text-gray-500 text-center">
                    * Required fields. We'll respond within 24 hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2C323C] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical web development project take?",
                answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while custom web applications can take 3-6 months. We provide detailed timelines during our initial consultation."
              },
              {
                question: "Do you provide ongoing support and maintenance?",
                answer: "Yes, we offer comprehensive maintenance packages including security updates, performance optimization, content updates, and 24/7 technical support."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "We specialize in modern technologies including React, Node.js, Python, PHP, and various cloud platforms. We choose the best technology stack based on your specific requirements."
              },
              {
                question: "Can you help with SEO and digital marketing?",
                answer: "Absolutely! We offer comprehensive SEO services, content marketing, social media management, and PPC advertising to help grow your online presence."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#2C323C] mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
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

export default Contact;
