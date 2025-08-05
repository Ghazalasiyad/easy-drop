import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!formRef.current) return;

        emailjs
            .sendForm(
                'service_email',
                'template_2gn1ihp',
                formRef.current,
                'pQbL6scWwGL52zucs'
            )
            .then(
                () => {
                    alert('Form submitted successfully!');
                    setName('');
                    setEmail('');
                    setMessage('');
                    setIsSubmitting(false);
                    formRef.current?.reset();
                },
                (error) => {
                    console.error('Failed to send form:', error);
                    alert('Something went wrong. Please try again.');
                    setIsSubmitting(false);
                }
            );
    };

    return (
        <div id="ContactForm" className='bg-gradient-to-r from-[#FFFFFF] to-[#E5F4FF]'>
            <div className="container mx-auto flex items-center justify-evenly px-3 sm:pt-10 sm:pb-0 h-[757px]">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:p-12 lg:pt-10">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#2E2C80] to-[#2458A4] mb-2">
                            Contact Us ____
                        </h2>
                        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#2E2C80] to-[#2458A4] mb-6">
                            Get In Touch
                        </h1>
                        <div className="relative overflow-hidden pb-[56.25%] h-0 rounded-sm">
                            <iframe
                                src="https://www.google.com/maps/embed?...your map link..."
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    <div>
                        <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full border border-gray-200 bg-white rounded-lg py-3 px-4 focus:outline-none focus:ring-1 focus:ring-blue-200"
                                />
                            </div>
                            <div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full border border-gray-200 bg-white rounded-lg py-3 px-4 focus:outline-none focus:ring-1 focus:ring-blue-200"
                                />
                            </div>
                            <div>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Message"
                                    rows={4}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    className="w-full border border-gray-200 bg-white rounded-lg py-3 px-4 focus:outline-none focus:ring-1 focus:ring-blue-200"
                                />
                            </div>
                            <div className="flex justify-start">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full sm:w-[130px] h-[47px] rounded-lg cursor-pointer text-base sm:text-lg font-medium text-white transition-colors bg-gradient-to-b from-[#2E2C80] to-[#2458A4] hover:from-[#3a3799] hover:to-[#3069b5] focus:outline-none focus:ring-2 focus:ring-blue-500 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Contact us'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
