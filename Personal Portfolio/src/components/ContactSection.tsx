import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Send, Linkedin, Instagram, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';
import emailjs from '@emailjs/browser';

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/rohan-deshmukh-31b906347', color: 'hover:text-blue-600' },
  { name: 'Behance', icon: '🎨', url: '#', color: 'hover:text-blue-500' },
  { name: 'Dribbble', icon: '🏀', url: '#', color: 'hover:text-pink-500' },
  { name: 'Instagram', icon: Instagram, url: '#', color: 'hover:text-pink-600' },
];

export function ContactSection() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // EmailJS configuration
      const serviceID = 'service_8yg4bid'; // Your EmailJS Service ID
      const templateID = 'template_dkfgezz'; // Your EmailJS Template ID
      const publicKey = '4YyZSJLwdPvZqHlqa'; // Your EmailJS Public Key

      if (serviceID === 'YOUR_SERVICE_ID' || templateID === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
        // Demo mode - show success without actually sending
        toast.info('Demo Mode: Email sending not configured', {
          description: 'Please set up EmailJS credentials to enable email functionality.',
        });
        setFormData({ name: '', email: '', message: '' });
        setIsLoading(false);
        return;
      }

      // Send email using EmailJS
      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'rohandeshmukh945@gmail.com',
        },
        publicKey
      );

      toast.success('Message sent successfully!', {
        description: 'Thank you for reaching out! I\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message', {
        description: 'Please try again or email me directly at rohandeshmukh945@gmail.com',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4 text-gray-900">Let's Work Together</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's create something amazing together!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-stretch">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 flex"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 w-full flex flex-col">
              <div className="space-y-6 flex-1 flex flex-col">
                {/* Name Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 transition-all duration-300"
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 transition-all duration-300"
                  />
                </motion.div>

                {/* Message Textarea */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex-1 flex flex-col"
                >
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 transition-all duration-300 resize-none flex-1"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/30 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </div>
            </form>
          </motion.div>

          {/* Social Links & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
              <h3 className="text-xl mb-4 text-gray-900">Get in Touch</h3>
              <div className="space-y-3 text-gray-600">
                <p>📧 rohandeshmukh945@gmail.com</p>
                <p>📍 Pune, Maharashtra</p>
                <p>⏰ Available Mon-Fri, 9AM-6PM</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl mb-6 text-gray-900">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`flex flex-col items-center justify-center p-4 rounded-2xl bg-gray-50 hover:bg-white border border-gray-200 transition-all duration-300 ${social.color} hover:shadow-lg group`}
                  >
                    {typeof social.icon === 'string' ? (
                      <span className="text-3xl mb-2">{social.icon}</span>
                    ) : (
                      <social.icon className="w-8 h-8 mb-2 text-gray-700 group-hover:scale-110 transition-transform" />
                    )}
                    <span className="text-sm text-gray-700">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
