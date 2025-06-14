import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = 'service_spxc79p';     // Replace with actual EmailJS service ID
    const templateID = 'template_ybfldqr';   // Replace with actual EmailJS template ID
    const publicKey = 'wNG5OgkFFIIdY49_y';     // Replace with actual EmailJS public key

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email sending error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'isurusajan9@gmail.com',
      link: 'mailto:isurusajan9@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+94 0754796701',
      link: 'tel:+94754796701',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Sri Lanka, Galle',
      link: null,
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-width">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your project and how we can work together to bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Let's Talk</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm always interested in hearing about new opportunities, projects, 
                and collaborations. Whether you have a specific project in mind or 
                just want to connect, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const content = (
                  <div className="flex items-center space-x-4 p-4 glass-effect rounded-lg hover:bg-gray-700/30 transition-all duration-200">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <IconComponent size={24} className="text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 font-medium">{info.label}</div>
                      <div className="text-white font-semibold">{info.value}</div>
                    </div>
                  </div>
                );

                return info.link ? (
                  <a key={index} href={info.link} className="block hover:scale-105 transition-transform duration-200">
                    {content}
                  </a>
                ) : (
                  <div key={index} className="hover:scale-105 transition-transform duration-200">
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-teal-500/10 p-6 rounded-xl glass-effect">
              <h3 className="text-xl font-bold text-white mb-3">Quick Response</h3>
              <p className="text-gray-300 leading-relaxed">
                I typically respond to messages within 24 hours. For urgent matters, 
                feel free to reach out via phone or LinkedIn for faster communication.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white"
                  placeholder="Tell me about your project or how I can help..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white font-medium py-4 px-6 rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Status */}
              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 text-green-400 bg-green-500/10 p-4 rounded-lg">
                  <CheckCircle size={20} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 text-red-400 bg-red-500/10 p-4 rounded-lg">
                  <AlertCircle size={20} />
                  <span>Something went wrong. Please try again later.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;