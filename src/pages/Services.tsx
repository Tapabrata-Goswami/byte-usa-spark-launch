import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Code, ShoppingCart, Search, Palette, Shield, Cloud, Menu, X, CheckCircle, Star } from "lucide-react";
import { useState } from "react";

const Services = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
              <img 
                src="/lovable-uploads/cec5ab2c-8de4-423e-85ca-10b71cdee0b5.png" 
                alt="Bytecode IT Solutions"
                className="w-12 h-12 object-contain"
              />
              <div>
                <span className="font-bold text-xl text-[#2C323C]">Bytecode</span>
                <div className="text-xs text-gray-600">IT Solutions PVT LTD</div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => navigate('/')} className="text-[#2C323C] hover:text-[#BBED50] transition-colors font-medium">Home</button>
              <button onClick={() => navigate('/about')} className="text-[#2C323C] hover:text-[#BBED50] transition-colors font-medium">About</button>
              <button onClick={() => navigate('/services')} className="text-[#BBED50] font-medium">Services</button>
              <button onClick={() => navigate('/portfolio')} className="text-[#2C323C] hover:text-[#BBED50] transition-colors font-medium">Portfolio</button>
              <button onClick={() => navigate('/contact')} className="text-[#2C323C] hover:text-[#BBED50] transition-colors font-medium">Contact</button>
              <Button className="bg-[#BBED50] text-[#2C323C] hover:bg-[#A4DC3D] font-semibold">
                Get Free Quote
              </Button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-[#2C323C]"
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
                <button onClick={() => navigate('/services')} className="block px-3 py-2 text-[#BBED50] font-medium">Services</button>
                <button onClick={() => navigate('/portfolio')} className="block px-3 py-2 text-[#2C323C] hover:text-[#BBED50] font-medium">Portfolio</button>
                <button onClick={() => navigate('/contact')} className="block px-3 py-2 text-[#2C323C] hover:text-[#BBED50] font-medium">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="bg-[#BBED50]/20 text-[#2C323C] hover:bg-[#BBED50]/30 border-[#BBED50] mb-4">
            Premium Services
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C323C] mb-6">
            Services That 
            <span className="bg-gradient-to-r from-[#BBED50] to-[#A4DC3D] bg-clip-text text-transparent"> Generate Revenue</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop throwing money at marketing that doesn't work. Our proven services turn your investment into profit, guaranteed.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                icon: <Code className="w-12 h-12" />,
                title: "Revenue-Driven Web Development",
                description: "Custom websites engineered for conversions, not just looks. Every element is designed to turn visitors into paying customers.",
                features: [
                  "Conversion-optimized design",
                  "Lightning-fast loading speeds",
                  "Mobile-first responsive design",
                  "SEO-ready architecture",
                  "Advanced analytics integration"
                ],
                pricing: "Starting at $2,999",
                guarantee: "300% ROI guarantee or money back"
              },
              {
                icon: <ShoppingCart className="w-12 h-12" />,
                title: "High-Converting E-Commerce Stores",
                description: "Transform your products into profit machines. Our e-commerce solutions sell while you sleep, 24/7.",
                features: [
                  "Shopify & WooCommerce mastery",
                  "Payment gateway optimization",
                  "Abandoned cart recovery",
                  "Inventory management systems",
                  "Sales funnel automation"
                ],
                pricing: "Starting at $4,999",
                guarantee: "Break-even in 90 days or we work for free"
              },
              {
                icon: <Search className="w-12 h-12" />,
                title: "SEO Domination & Traffic Explosion",
                description: "Steal customers from competitors by ranking #1 on Google. Our SEO strategies generate traffic that converts.",
                features: [
                  "Guaranteed Google rankings",
                  "Local SEO domination",
                  "Content strategy that sells",
                  "Technical SEO optimization",
                  "Competitor analysis & targeting"
                ],
                pricing: "Starting at $1,999/month",
                guarantee: "Top 3 Google rankings in 6 months"
              },
              {
                icon: <Palette className="w-12 h-12" />,
                title: "Brand Design That Builds Trust",
                description: "Professional branding that makes customers choose you over competitors. First impressions convert into sales.",
                features: [
                  "Complete brand identity",
                  "Logo & visual assets",
                  "Brand guidelines & strategy",
                  "Marketing collateral design",
                  "Social media branding"
                ],
                pricing: "Starting at $1,999",
                guarantee: "100% satisfaction or complete redesign"
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "24/7 Website Protection & Maintenance",
                description: "Sleep peacefully knowing your website is secure, fast, and always online. We handle everything so you don't have to.",
                features: [
                  "Real-time security monitoring",
                  "Daily automated backups",
                  "Performance optimization",
                  "Software updates & patches",
                  "Priority technical support"
                ],
                pricing: "Starting at $299/month",
                guarantee: "99.9% uptime guarantee"
              },
              {
                icon: <Cloud className="w-12 h-12" />,
                title: "Complete Digital Transformation",
                description: "Future-proof your business with cloud solutions and automation that save time, reduce costs, and increase efficiency.",
                features: [
                  "Cloud migration & setup",
                  "Business process automation",
                  "System integration & APIs",
                  "Data analytics & reporting",
                  "Scalable infrastructure"
                ],
                pricing: "Custom enterprise pricing",
                guarantee: "50% efficiency improvement or refund"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-r from-[#BBED50] to-[#A4DC3D] rounded-lg p-4 w-fit mb-6 text-[#2C323C]">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#2C323C] mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#2C323C] mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <CheckCircle className="w-5 h-5 text-[#BBED50] mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="text-2xl font-bold text-[#BBED50] mb-2">{service.pricing}</div>
                    <div className="text-sm text-gray-600 font-medium">✅ {service.guarantee}</div>
                  </div>

                  <Button className="w-full bg-[#BBED50] text-[#2C323C] hover:bg-[#A4DC3D] text-lg py-6">
                    Get Started Today
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C323C] mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure project success and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your requirements and create a detailed project roadmap."
              },
              {
                step: "02",
                title: "Design",
                description: "Our designers create beautiful, user-friendly interfaces tailored to your brand."
              },
              {
                step: "03",
                title: "Development",
                description: "Our developers bring the design to life using the latest technologies."
              },
              {
                step: "04",
                title: "Launch",
                description: "We deploy your project and provide ongoing support and maintenance."
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#BBED50] text-[#2C323C] rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-[#2C323C] mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2C323C] to-[#1F252D]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free consultation and detailed quote for your next web development project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#BBED50] text-[#2C323C] hover:bg-[#BBED50]/90 text-lg px-8 py-6 font-semibold"
              onClick={() => navigate('/contact')}
            >
              Get Free Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-[#2C323C] text-lg px-8 py-6"
              onClick={() => navigate('/portfolio')}
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C323C] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/cec5ab2c-8de4-423e-85ca-10b71cdee0b5.png" 
                  alt="Bytecode IT Solutions"
                  className="w-12 h-12 object-contain"
                />
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

export default Services;
