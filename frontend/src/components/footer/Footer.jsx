import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import AnimatedSection from "../animate/AnimatedSection";


const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-12">

        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <AnimatedSection delay={0}>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">FST Team</h3>
              <p className="text-sm leading-relaxed">
                Innovating the future, one line of code at a time.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="flex flex-col items-center md:items-start gap-2">
              <h6 className="font-semibold mb-2">Quick Links</h6>
              <a href="/" className="link link-hover text-sm">Home</a>
              <a href="/about" className="link link-hover text-sm">About Us</a>
              <a href="/services" className="link link-hover text-sm">Services</a>
              <a href="/contact" className="link link-hover text-sm">Contact</a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="flex flex-col items-center md:items-start gap-2">
              <h6 className="font-semibold mb-2">Legal</h6>
              <a href="/terms" className="link link-hover text-sm">Terms of Use</a>
              <a href="/privacy" className="link link-hover text-sm">Privacy Policy</a>
              <a href="/cookies" className="link link-hover text-sm">Cookie Policy</a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={450}>
            <div className="flex flex-col items-center md:items-start gap-2">
              <h6 className="font-semibold mb-2">Contact</h6>
              <p className="text-sm">Sofia, Bulgaria</p>
              <a href="mailto:info@fstteam.com" className="link link-hover text-sm">info@fstteam.com</a>
            </div>
          </AnimatedSection>
        </div>

        {/* Divider */}
        <div className="h-px bg-base-content/20 w-full"></div>

        {/* Map */}
        <AnimatedSection delay={600}>
          <div className="flex flex-col items-center text-center">
            <h6 className="font-bold mb-4 text-lg">Our Headquarters</h6>
            <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-md border border-base-300 transition-all duration-300 hover:shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11574.844856976933!2d23.344489764056558!3d42.65905770510949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8426c28853ef%3A0x507b5ee6b85ffd1e!2sBlock%209%20of%20the%20Technical%20University!5e0!3m2!1sen!2sbg!4v1731674014136!5m2!1sen!2sbg"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Office Location"
              ></iframe>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Bottom Bar */}
      <div className="bg-base-300/50 py-5 border-t border-base-300/30">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} FST Team. All rights reserved.
          </p>
          <div className="flex gap-4 text-xl">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><FaLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><FaTwitter /></a>
            <a href="https://instagram.com" target="https://www.instagram.com/tus_racingteam/" rel="noopener noreferrer" className="hover:text-primary transition-colors"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
