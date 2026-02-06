import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { MultiStepContactForm as ContactForm } from './MultiStepContactForm';


export function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-4 flex items-center justify-center pointer-events-none"
    >
      <div className="pointer-events-auto w-full max-w-7xl mx-auto">
        
        {/* GRID CONTAINER - Two Separate Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ================= LEFT CARD (Contact Info) ================= */}
          <div className="lg:col-span-5 relative bg-gray-900 rounded-2xl shadow-xl overflow-hidden min-h-[600px] flex flex-col">
            
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1740&q=80"
              alt="Students Studying Abroad"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Overlay */}
            <div 
              className="absolute inset-0 z-10" 
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.80)', backdropFilter: 'blur(2px)' }} 
            />

            {/* CONTENT */}
            <div className="relative z-20 text-white p-10 flex flex-col justify-between h-full flex-1">

              {/* TOP TEXT */}
              <div>
                <h2 className="text-4xl font-serif mb-4">
                  Get in touch
                </h2>

                <div className="w-16 h-[2px] bg-gray-400 mb-6" />

                <p className="text-gray-200 leading-relaxed">
                  Contacting one of our expert travel designers will be your
                  first step towards your trip of a lifetime.
                </p>
              </div>

              {/* CONTACT DETAILS */}
              <div className="space-y-8 mt-10">

                {/* UGANDA OFFICE */}
                <div>
                  <h3 className="text-amber-400 uppercase tracking-widest text-sm mb-2">
                    Uganda Office
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    Mirage Complex, Second Floor<br />
                    RM MC2 - 05 Kitintale<br />
                    P.O. Box 200473 Nakawa K'la
                  </p>

                  <div className="mt-4 space-y-1">
                    <p className="text-amber-400 font-semibold hover:text-amber-300 transition">
                      +256 788 232 695
                    </p>
                    <p className="text-amber-400 font-semibold hover:text-amber-300 transition">
                      +256 756 733 094
                    </p>
                    <p className="text-amber-400 font-semibold hover:text-amber-300 transition">
                      +256 763 174 100
                    </p>
                  </div>

                  <p className="text-gray-300 text-sm mt-4">
                    info@jestudyabroad.com
                  </p>
                </div>

                {/* EMERGENCY */}
                <div>
                  <h4 className="font-semibold">
                    Emergency 24 / 7
                  </h4>

                  <p className="text-gray-400 text-sm">
                    An emergency number will be provided to you at arrival.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* ================= RIGHT CARD (Form) ================= */}
          <div className="lg:col-span-7 bg-white rounded-2xl shadow-xl overflow-hidden p-8 lg:p-12 min-h-[600px] flex flex-col justify-center">
            <div className="w-full max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}