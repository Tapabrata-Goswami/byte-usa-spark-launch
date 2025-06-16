
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  LayoutGrid, 
  Search, 
  LayoutList, 
  Link, 
  Youtube, 
  Menu, 
  X,
  Code,
  Smartphone,
  Database,
  Shield
} from "lucide-react";
import { useState } from "react";

const Services = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: <LayoutDashboard className="w-8 h-8" />,
      title: "Custom Web Development",
      description: "Bespoke web applications built with cutting-edge technologies like React, Node.js, and cloud platforms.",
      features: ["React & Next.js", "Full-Stack Development", "API Integration", "Database Design"],
      price: "Starting from $2,999"
    },
    {
      icon: <LayoutGrid className="w-8 h-8" />,
      title: "E-Commerce Solutions",
      description: "Powerful online stores that convert visitors into customers with seamless shopping experiences.",
      features: ["Shopify & WooCommerce", "Payment Gateway", "Inventory Management", "Mobile Optimization"],
      price: "Starting from $3,999"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO & Digital Marketing",
      description: "Drive organic traffic and boost your online visibility with our proven SEO strategies.",
      features: ["Technical SEO", "Content Strategy", "Local SEO", "Analytics Setup"],
      price: "Starting from $999/month"
    },
    {
      icon: <LayoutList className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that engage users and drive conversions across all devices.",
      features: ["User Research", "Wireframing", "Prototyping", "Responsive Design"],
      price: "Starting from $1,999"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS & Android", "React Native", "App Store Optimization", "Push Notifications"],
      price: "Starting from $4,999"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Solutions",
      description: "Robust database architecture and management for scalable business applications.",
      features: ["MySQL & PostgreSQL", "Database Migration", "Performance Optimization", "Backup Solutions"],
      price: "Starting from $1,499"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity Services",
      description: "Protect your digital assets with comprehensive security audits and implementations.",
      features: ["Security Audits", "SSL Certificates", "Firewall Setup", "Regular Monitoring"],
      price: "Starting from $799/month"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Legacy System Modernization",
      description: "Transform outdated systems into modern, efficient, and scalable solutions.",
      features: ["Code Refactoring", "Technology Migration", "API Modernization", "Performance Enhancement"],
      price: "Starting from $5,999"
    }
  ];

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
              <button onClick={() => navigate('/services')} className="text-[#BBED50] font-medium">Services</button>
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
            Our Services
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C323C] mb-6">
            Comprehensive 
            <span className="bg-gradient-to-r from-[#BBED50] to-[#BBED50]/80 bg-clip-text text-transparent"> Digital Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From web development to digital marketing, we offer a full suite of services to help 
            your business thrive in the digital landscape.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg group">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-r from-[#BBED50] to-[#BBED50]/80 rounded-lg p-3 w-fit mb-4 text-[#2C323C] group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#2C323C] mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-[#BBED50] rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t pt-4">
                    <div className="text-lg font-bold text-[#2C323C] mb-3">{service.price}</div>
                    <Button 
                      className="w-full bg-[#BBED50] text-[#2C323C] hover:bg-[#BBED50]/90 font-semibold"
                      onClick={() => navigate('/contact')}
                    >
                      Get Started
                    </Button>
                  </div>
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
      <section className="py-16 bg-gradient-to-r from-[#2C323C] to-[#2C323C]/90">
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

export default Services;
