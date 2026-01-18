import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white text-slate-700">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-500"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
          <div className="pt-10 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6">
  {/* Brand Text */}
  <div className="flex flex-col items-start">
    <h3 className="text-slate-900 font-bold text-2xl leading-tight">
      Akshat Sales
    </h3>
    <h3 className="text-slate-900 font-bold text-2xl leading-tight">
      RR Unitrade
    </h3>
  </div>

  {/* Social Links */}
  <div className="flex gap-4">
    {/* Instagram */}
    <a
  href="https://instagram.com/re_energen"
  aria-label="Instagram"
  className="group w-11 h-11 rounded-lg bg-slate-100 flex items-center justify-center
             text-slate-600
             hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500
             hover:text-white
             transition-all duration-300 hover:shadow-md"
>
  <svg
    className="w-5 h-5 fill-current transition-colors duration-300"
    viewBox="0 0 24 24"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919-.058 1.265-.069 1.645-.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.849 0-3.204.013-3.583.072-4.948.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
  </svg>
</a>

    {/* Phone */}
    <a
  href="tel:+919203407300"
  aria-label="Phone"
  className="group w-11 h-11 rounded-lg bg-slate-100 flex items-center justify-center
             text-slate-600
             hover:bg-gradient-to-br hover:from-emerald-500 hover:to-green-500
             hover:text-white
             transition-all duration-300 hover:shadow-md hover:scale-105"
>
  <Phone className="w-5 h-5 transition-colors duration-300" />
</a>

    {/* Email */}
    <a
  href="mailto:info@re-energen.com"
  aria-label="Email"
  className="group w-11 h-11 rounded-lg bg-slate-100 flex items-center justify-center
             text-slate-600
             hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-500
             hover:text-white
             transition-all duration-300 hover:shadow-md hover:scale-105"
>
  <Mail className="w-5 h-5 transition-colors duration-300" />
</a>
  </div>
</div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-900 font-semibold text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent"></span>
              Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Products', href: '/productspage' },
                { name: 'About Us', href: '/about' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-600 hover:text-emerald-600 transition-colors duration-200"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-900 font-semibold text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent"></span>
              Resources
            </h4>
            <ul className="space-y-3">
              {[
                'Solar Guide',
                'Savings Calculator',
                'Blog',
                'FAQ',
              ].map((name) => (
                <li key={name}>
                  <a
                    href="/resources"
                    className="group flex items-center gap-2 text-sm text-slate-600 hover:text-emerald-600 transition-colors duration-200"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-slate-900 font-semibold text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent"></span>
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="flex flex-col">
                  <span>+91 9203407300</span>
                  <span>+91 9203407301</span>
                </div>
              </li>
              <li className="flex gap-3 text-sm">
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-emerald-600" />
                </div>
                <span>info@re-energen.com</span>
              </li>
              <li className="flex gap-3 text-sm">
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                </div>
                <span>
                  5th Floor, Currency Tower, V.I.P. Road, Raipur 492001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 py-4">
  <p className="text-sm text-slate-500 text-center">
    © {currentYear}{' '}
    <span className="text-slate-700 font-medium">Re-Energen</span>. All rights reserved.
  </p>
</div>
      </div>

      {/* Ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 via-transparent to-transparent pointer-events-none"></div>
    </footer>
  );
}
