import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdEmail, MdPhone, MdWhatsapp } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const contactDetails = [
    {
        icon: <MdEmail className="text-blue-600 text-xl" />,
        label: 'Email',
        value: 'mhkhandakar57@gmail.com',
        href: 'mailto:mhkhandakar57@gmail.com'
    },
    {
        icon: <MdPhone className="text-green-600 text-xl" />,
        label: 'Phone',
        value: '+880 1874935657',
        href: 'tel:+8801874935657',
    },
    {
        icon: <MdWhatsapp className="text-green-500 text-xl" />,
        label: 'WhatsApp',
        value: '+880 1874935657',
        href: 'https://wa.me/8801874935657',
    },
];

const ContactInfo = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentTime = new Date().toLocaleString();

        const fullData = {
            ...formData,
            time: currentTime,
        };

        toast.promise(
            emailjs.send(
                'service_x89662z',     // ✅ Replace with your actual Service ID
                'template_aiwu7un',    // ✅ Replace with your actual Template ID
                fullData,
                'Lp-IsCBPuUNq6lh6V'      // ✅ Replace with your actual Public Key
            ),
            {
                loading: 'Sending message...',
                success: 'Message sent successfully!',
                error: 'Failed to send message. Try again later.',
            }
        );

        setFormData({ name: '', email: '', message: '' }); // Reset form
    };

    return (
        <section id="contact" className=" max-w-6xl mx-auto py-8">
            <Toaster position="top-right" />
           
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold inline-block border-b-4 border-blue-500 pb-1">
      Contact
        </h1>
      </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center lg:mt-15 px-2 lg:px-0">
                {/* Contact Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-6 border dim:bg-gray-800 p-6 rounded-2xl shadow"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Title & Subtitle */}
                    <div className="text-center space-y-1">
                        <h3 className="text-xl font-semibold dim:text-white">
                            Send Me a Message
                        </h3>
                        <p className="text-sm dim:text-gray-400">
                            I’ll get back to you as soon as possible — usually within 24 hours.
                        </p>
                    </div>

                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full p-3 rounded-lg border  focus:outline-none focus:ring-2 focus:ring-blue-400  "
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full p-3 rounded-lg border  focus:outline-none focus:ring-2 focus:ring-blue-400 "
                        required
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Your Message"
                        className="w-full p-3 rounded-lg border  focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg cursor-pointer hover:bg-blue-700 transition"
                    >
                        Send Message
                    </button>
                </motion.form>


                {/* Contact Info */}
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {contactDetails.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-lg shadow hover:scale-105 transition-transform hover:ring hover:ring-blue-400 focus:outline-none focus:ring-2 border"
                        >
                            {item.icon}
                            <div>
                                <p className="text-sm font-semibold  ">
                                    {item.label}
                                </p>
                                <p className="text-sm ">
                                    {item.value}
                                </p>
                            </div>
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ContactInfo;