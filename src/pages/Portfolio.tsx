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
      <nav className="fixed top-0 w-full bg-[#1a1a1a]/95 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
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
              <button onClick={() => navigate('/portfolio')} className="text-[#B3E547] font-medium">Portfolio</button>
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
                <button onClick={() => navigate('/portfolio')} className="block px-3 py-2 text-[#B3E547] font-medium">Portfolio</button>
                <button onClick={() => navigate('/contact')} className="block px-3 py-2 text-white hover:text-[#B3E547] font-medium">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="bg-[#B3E547]/20 text-[#3B4954] hover:bg-[#B3E547]/30 border-[#B3E547] mb-4">
            Success Stories
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3B4954] mb-6">
            Proven Results That 
            <span className="bg-gradient-to-r from-[#B3E547] to-[#A4DC3D] bg-clip-text text-transparent"> Speak Volumes</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've transformed businesses from struggling to thriving across USA & Canada. These aren't just websites - they're profit-generating machines.
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
      <section className="py-16 bg-gradient-to-r from-[#1a1a1a] to-[#2C3E4A]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help you achieve similar results for your business across USA & Canada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#B3E547] text-[#1a1a1a] hover:bg-[#A4DC3D] text-lg px-8 py-6 font-semibold"
              onClick={() => navigate('/contact')}
            >
              Start Your Project
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-[#1a1a1a] text-lg px-8 py-6"
              onClick={() => navigate('/services')}
            >
              View Our Services
            </Button>
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
                <li>hello@bytecode.com</li>
                <li>123 Tech Street</li>
                <li>Silicon Valley, CA 94000</li>
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

export default Portfolio;
