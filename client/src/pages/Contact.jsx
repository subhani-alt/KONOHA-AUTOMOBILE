import React, { useState } from 'react';
import { Send, Check, Mail, Phone, MapPin } from 'lucide-react';
import SEO from '../components/common/SEO';
import api from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'General Inquiry',
    vehicleInterest: 'VALENCE APEX STRATOS',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/contact', formData);
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-obsidian text-white pt-32 pb-24 px-6 lg:px-12">
      <SEO title="Private Commission Contact" description="Contact Valence Concierge for private allocations, test drives, and custom commissions." />

      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs font-mono text-copper uppercase tracking-[0.3em] block">Private Concierge</span>
          <h1 className="font-cinematic text-4xl md:text-6xl font-extrabold">CONTACT ATELIER</h1>
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-copper/30">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-copper/20 text-copper flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-cinematic text-2xl font-bold">Inquiry Successfully Transmitted</h3>
              <p className="text-xs font-sans text-titanium-dark max-w-md mx-auto">
                A private Valence advisor will review your message and contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-mono text-titanium-dark uppercase block mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full bg-obsidian border border-white/15 rounded-xl py-3.5 px-4 text-xs text-white focus:outline-none focus:border-copper font-sans"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono text-titanium-dark uppercase block mb-2">Private Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="client@domain.com"
                    className="w-full bg-obsidian border border-white/15 rounded-xl py-3.5 px-4 text-xs text-white focus:outline-none focus:border-copper font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-mono text-titanium-dark uppercase block mb-2">Inquiry Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full bg-obsidian border border-white/15 rounded-xl py-3.5 px-4 text-xs text-white focus:outline-none focus:border-copper font-mono"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Private Test Drive">Private Test Drive Request</option>
                  <option value="Commission Request">Commission Request</option>
                  <option value="Press & Media">Press & Media</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-mono text-titanium-dark uppercase block mb-2">Message & Custom Requests</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail your commission requirements or test drive location preference..."
                  className="w-full bg-obsidian border border-white/15 rounded-xl py-3.5 px-4 text-xs text-white focus:outline-none focus:border-copper font-sans"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-copper text-obsidian font-mono text-xs font-bold py-4 rounded-xl hover:opacity-90 transition-opacity uppercase tracking-wider shadow-2xl"
              >
                Submit Private Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
