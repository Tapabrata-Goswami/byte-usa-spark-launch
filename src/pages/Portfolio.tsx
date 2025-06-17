import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ExternalLink, TrendingUp, Users, DollarSign, Menu, X } from "lucide-react";
import { useState } from "react";

const Portfolio = () => {
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
              <button onClick={() => navigate('/services')} className="text-[#2C323C] hover:text-[#BBED50] transition-colors font-medium">Services</button>
              <button onClick={() => navigate('/portfolio')} className="text-[#BBED50] font-medium">Portfolio</button>
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
                <button onClick={() => navigate('/services')} className="block px-3 py-2 text-[#2C323C] hover:text-[#BBED50] font-medium">Services</button>
                <button onClick={() => navigate('/portfolio')} className="block px-3 py-2 text-[#BBED50] font-medium">Portfolio</button>
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
            Success Stories
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C323C] mb-6">
            Proven Results That 
            <span className="bg-gradient-to-r from-[#BBED50] to-[#A4DC3D] bg-clip-text text-transparent"> Speak Volumes</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've transformed businesses from struggling to thriving. These aren't just websites - they're profit-generating machines.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                title: "TechStart E-Commerce Empire",
                category: "E-Commerce Transformation",
                description: "From zero to $100K/month in just 8 months. Complete brand overhaul and conversion-optimized store design.",
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
                results: [
                  { label: "Monthly Revenue", value: "$100K+", icon: <DollarSign className="w-5 h-5" /> },
                  { label: "Conversion Rate", value: "+450%", icon: <TrendingUp className="w-5 h-5" /> },
                  { label: "Customer Base", value: "5,000+", icon: <Users className="w-5 h-5" /> }
                ],
                testimonial: "Best investment we ever made. ROI was incredible!",
                client: "Sarah Johnson, CEO",
                timeframe: "Delivered in 6 weeks"
              },
              {
                title: "FinanceFlow SaaS Platform",
                category: "SaaS Development",
                description: "Built a secure financial platform serving 10,000+ users with bank-grade security and real-time analytics.",
                image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80",
                results: [
                  { label: "Active Users", value: "10K+", icon: <Users className="w-5 h-5" /> },
                  { label: "Security Rating", value: "A+", icon: <TrendingUp className="w-5 h-5" /> },
                  { label: "Uptime", value: "99.9%", icon: <DollarSign className="w-5 h-5" /> }
                ],
                testimonial: "They turned our vision into a money-making reality.",
                client: "Michael Chen, Founder",
                timeframe: "Delivered in 12 weeks"
              },
              {
                title: "HealthCare Provider Revolution",
                category: "Healthcare Portal",
                description: "HIPAA-compliant patient management system that streamlined operations and improved patient satisfaction by 200%.",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
                results: [
                  { label: "Patient Satisfaction", value: "+200%", icon: <TrendingUp className="w-5 h-5" /> },
                  { label: "Operational Efficiency", value: "+75%", icon: <DollarSign className="w-5 h-5" /> },
                  { label: "Compliance Score", value: "100%", icon: <Users className="w-5 h-5" /> }
                ],
                testimonial: "Transformed how we serve our patients completely.",
                client: "Dr. Emily Rodriguez",
                timeframe: "Delivered in 10 weeks"
              },
              {
                title: "RetailPlus E-Commerce Makeover",
                category: "Retail Transformation",
                description: "Complete redesign and optimization resulted in 250% sales increase and 40% improvement in customer retention.",
                image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
                results: [
                  { label: "Sales Increase", value: "+250%", icon: <DollarSign className="w-5 h-5" /> },
                  { label: "Customer Retention", value: "+40%", icon: <Users className="w-5 h-5" /> },
                  { label: "Page Speed", value: "95/100", icon: <TrendingUp className="w-5 h-5" /> }
                ],
                testimonial: "Our customers love the new experience. Sales are booming!",
                client: "James Wilson, Owner",
                timeframe: "Delivered in 8 weeks"
              }
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="h-64 bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: `url(${project.image})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C323C]/80 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-[#BBED50] text-[#2C323C]">{project.category}</Badge>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm opacity-90">{project.timeframe}</div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#2C323C] mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="flex justify-center mb-2 text-[#BBED50]">
                          {result.icon}
                        </div>
                        <div className="text-xl font-bold text-[#2C323C]">{result.value}</div>
                        <div className="text-xs text-gray-600">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <p className="text-gray-700 italic mb-2">"{project.testimonial}"</p>
                    <div className="text-sm font-semibold text-[#2C323C]">- {project.client}</div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 bg-[#BBED50] text-[#2C323C] hover:bg-[#A4DC3D]">
                      View Case Study
                    </Button>
                    <Button variant="outline" size="icon" className="border-[#2C323C] text-[#2C323C] hover:bg-[#2C323C] hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C323C] mb-4">
              Portfolio Highlights
            </h2>
            <p className="text-xl text-gray-600">
              Our projects have delivered measurable results across industries
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Completed", color: "text-[#BBED50]" },
              { number: "50+", label: "Industries Served", color: "text-[#BBED50]" },
              { number: "98%", label: "Client Satisfaction", color: "text-[#BBED50]" },
              { number: "$2M+", label: "Client Revenue Generated", color: "text-[#BBED50]" }
            ].map((stat, index) => (
              <div key={index}>
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.number}</div>
                <div className="text-lg text-[#2C323C] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2C323C] to-[#1F252D]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#BBED50] text-[#2C323C] hover:bg-[#BBED50]/90 text-lg px-8 py-6 font-semibold"
              onClick={() => navigate('/contact')}
            >
              Start Your Project
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-[#2C323C] text-lg px-8 py-6"
              onClick={() => navigate('/services')}
            >
              View Our Services
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
                  src="/lovable-uploads/1e6b1fce-6b9e-4994-9c8e-d6ad642a53f5.png" 
                  alt="Bytecode IT Solutions"
                  className="w-10 h-10 object-contain"
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

export default Portfolio;
