import { Button } from "@/components/ui/button";

import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-brand-dark-navy text-primary-foreground py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/logo.png"
                alt="E-Combinator Logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empowering the next generation of entrepreneurs with the tools,
              network, and guidance needed to build successful companies.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-primary-foreground hover:bg-secondary"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-primary-foreground hover:bg-secondary"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-primary-foreground hover:bg-secondary"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-primary-foreground hover:bg-secondary"
              >
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-muted-foreground hover:text-primary-foreground transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-muted-foreground hover:text-primary-foreground transition-colors"
                >
                  News and Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/help"
                  className="text-muted-foreground hover:text-primary-foreground transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-primary-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  hello@e-combinator.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} E-Combinator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/* <footer className="bg-brand-dark-navy text-primary-foreground py-16">
   <div className="container px-4 md:px-6">
     <div className="grid md:grid-cols-4 gap-8">
       <div>
         <img src="/logo.png" alt="logo" className="h-10 mb-4" />
         <p className="text-muted-foreground">
           Empowering the next generation of entrepreneurs.
         </p>
         <div className="flex space-x-3 mt-4">
           {[Facebook, Twitter, Linkedin, Instagram].map((Icon) => (
             <Button
               key={Icon.displayName}
               variant="ghost"
               size="icon"
               className="text-muted-foreground hover:text-primary-foreground"
             >
               <Icon className="h-5 w-5" />
             </Button>
           ))}
         </div>
       </div>
       <div>
         <h3 className="font-semibold mb-4">Navigation</h3>
         <ul className="space-y-2">
           {["/", "/about", "/programs", "/news"].map((href, i) => (
             <li key={href}>
               <Link
                 href={href}
                 className="text-muted-foreground hover:text-primary-foreground"
               >
                 {["Home", "About", "Programs", "News"][i]}
               </Link>
             </li>
           ))}
         </ul>
       </div>
       <div>
         <h3 className="font-semibold mb-4">Support</h3>
         <ul className="space-y-2">
           <li>
             <Link
               href="/help"
               className="text-muted-foreground hover:text-primary-foreground"
             >
               Help Center
             </Link>
           </li>
           <li>
             <Link
               href="/contact"
               className="text-muted-foreground hover:text-primary-foreground"
             >
               Contact Us
             </Link>
           </li>
         </ul>
       </div>
       <div>
         <h3 className="font-semibold mb-4">Contact</h3>
         <p className="flex items-center space-x-2 text-muted-foreground">
           <Mail className="h-4 w-4" />
           <span>info@ecombinator.com</span>
         </p>
         <p className="flex items-center space-x-2 text-muted-foreground mt-2">
           <Phone className="h-4 w-4" />
           <span>+251 911 223 344</span>
         </p>
         <p className="flex items-center space-x-2 text-muted-foreground mt-2">
           <MapPin className="h-4 w-4" />
           <span>Addis Ababa, Ethiopia</span>
         </p>
       </div>
     </div>
     <p className="text-center text-muted-foreground mt-8 border-t border-gray-800 pt-6">
       © {new Date().getFullYear()} E-Combinator. All rights reserved.
     </p>
   </div>
 </footer>; */
