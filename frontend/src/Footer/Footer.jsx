import React from "react";

const Footer = () => {
  return (
    <footer className="bg-brandBlue bg-blue-100  font-brand py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-6">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Pioneer</h2>
          <p className="">Making your events elegant and memorable.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul>
            <li className="hover:text-brandOrange cursor-pointer">Home</li>
            <li className="hover:text-brandOrange cursor-pointer">Products</li>
            <li className="hover:text-brandOrange cursor-pointer">About</li>
            <li className="hover:text-brandOrange cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p>Email: info@company.com</p>
          <p>Phone: +91 123-456-7890</p>
          <p>Address: 123 Event Street, City, Country</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-3">
            <span className="cursor-pointer hover:text-brandOrange">Facebook</span>
            <span className="cursor-pointer hover:text-brandOrange">Twitter</span>
            <span className="cursor-pointer hover:text-brandOrange">Instagram</span>
            
          </div>
        </div>

      </div>

      <div className="text-center mt-6 text-sm">
        © {new Date().getFullYear()} Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
