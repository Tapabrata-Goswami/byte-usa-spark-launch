
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Users, Target, Award, Globe, Menu, X } from "lucide-react";
import { useState } from "react";

const About = () => {
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
              <button onClick={() => navigate('/about')} className="text-[#BBED50] font-medium">About</button>
              <button onClick={() => navigate('/services')} className="text-[#2C323C] hover:text-[#BBED50] transition-colors font-medium">Services</button>
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
                <button onClick={() => navigate('/about')} className="block px-3 py-2 text-[#BBED50] font-medium">About</button>
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
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="bg-[#BBED50]/20 text-[#2C323C] hover:bg-[#BBED50]/30 border-[#BBED50] mb-4">
            About Our Company
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C323C] mb-6">
            The Team Behind 
            <span className="bg-gradient-to-r from-[#BBED50] to-[#A4DC3D] bg-clip-text text-transparent"> Your Success</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just developers - we're business growth experts who happen to code. Every project we touch becomes a profit-generating machine.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#2C323C] mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded with a vision to bridge the gap between technology and business success, 
                Bytecode IT Solutions PVT LTD has grown from a small startup to a leading web 
                development company serving clients across the United States.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey began with a simple belief: every business deserves access to 
                cutting-edge technology solutions that drive growth, enhance efficiency, 
                and create meaningful connections with customers.
              </p>
              <p className="text-gray-600">
                Today, we're proud to have delivered over 500 successful projects, helping 
                businesses transform their digital presence and achieve their goals through 
                innovative web solutions.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C323C] mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we serve our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Excellence",
                description: "We strive for perfection in every project, delivering solutions that exceed expectations."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Collaboration",
                description: "We work closely with our clients as partners, ensuring their vision becomes reality."
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Innovation",
                description: "We stay ahead of technology trends to provide cutting-edge solutions."
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Impact",
                description: "We measure success by the positive impact we create for our clients' businesses."
              }
            ].map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-r from-[#BBED50] to-[#A4DC3D] rounded-lg p-3 w-fit mx-auto mb-4 text-[#2C323C]">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#2C323C] mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-[#2C323C] to-[#1F252D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-300">
              Measurable results that speak for themselves
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "200+", label: "Happy Clients" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "5+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl font-bold text-[#BBED50] mb-2">{stat.number}</div>
                <div className="text-lg text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C323C] mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help transform your business with our expert web development services.
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
              className="border-[#2C323C] text-[#2C323C] hover:bg-[#2C323C] hover:text-white text-lg px-8 py-6"
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
                  src="/lovable-uploads/cec5ab2c-8de4-423e-85ca-10b71cdee0b5.png" 
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

export default About;
