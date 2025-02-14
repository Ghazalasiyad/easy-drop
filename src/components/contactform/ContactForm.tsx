import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            alert('Form submitted!');
            setIsSubmitting(false);
        }, 2000);
    };

    return (
        <div className='bg-gradient-to-r from-[#FFFFFF] to-[#E5F4FF]'>
            <div className="container mx-auto flex items-center justify-evenly px-4 py-12 h-[757px]">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 p-6 lg:p-12">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#2E2C80] to-[#2458A4] mb-2">
                            Contact Us ____
                        </h2>
                        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#2E2C80] to-[#2458A4] mb-6">
                            Get In Touch
                        </h1>
                        <div className="relative overflow-hidden pb-[56.25%] h-0 rounded-lg shadow-md">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.1127672137104!2d74.37619077640038!3d35.919739716834094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e6496221ad0aeb%3A0xc5fd48782e73fa82!2sDanyore%20Main%20Chowk%20Gilgit!5e0!3m2!1sen!2s!4v1739350516879!5m2!1sen!2s" className="absolute top-0 left-0 w-full h-full border-0"
                                loading="lazy"
                                aria-label="Location map of IdeoMetriX Pvt. Ltd"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                    <div className='h-[429px]'>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="sr-only">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                    className="w-full border border-gray-200 bg-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full border border-gray-200 bg-white  rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">Message</label>
                                <textarea
                                    id="message"
                                    placeholder="Message"
                                    rows={4}
                                    className="w-full border border-gray-200 bg-white  rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                ></textarea>
                            </div>
                            <div className="flex justify-start">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-[134px] h-[47px] rounded-lg text-lg font-medium text-white transition-colors bg-gradient-to-b from-[#2E2C80] to-[#2458A4] hover:from-[#3a3799] hover:to-[#3069b5] focus:outline-none focus:ring-2 focus:ring-blue-500 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                        }`}
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
