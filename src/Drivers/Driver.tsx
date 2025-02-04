import TopImage from "../assets/ImagesGallery/image1.png";
import BottomImage from "../assets/ImagesGallery/image2.png";

const Driver = () => {
    return (
        <div className="bg-gradient-to-r from-[#FFFFFF] to-[#E5F4FF]">
            <div className="container w-[1920px] h-[698px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center w-[1,501px] h-[538px]">
                    <div className="space-y-6">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            Join Our Trusted <span className="text-[#2E2C80]">Drivers in Gilgit</span>
                        </h1>
                        <div className="space-y-4 text-gray-600">
                            <p className="leading-relaxed">
                                Become a part of Easy Drop's trusted team of drivers in Gilgit! Enjoy flexible schedules, competitive
                                earnings, and the opportunity to provide safe and reliable transportation services to students, schools,
                                colleges, and businesses. Drive with pride and make a difference in your community.
                            </p>
                            <p className="leading-relaxed">
                                Join our mission to simplify daily commutes in Gilgit by ensuring safety, punctuality, and reliability.
                                As a trusted Easy Drop driver, you'll play a vital role in connecting people and making their journeys
                                smooth and stress-free.
                            </p>
                        </div>
                        <button className="w-[134px] h-[47px] rounded-[8px] text-lg font-medium text-white bg-gradient-to-b from-[#2E2C80] to-[#2458A4]">
                            Learn More
                        </button>
                    </div>

                    <div className="relative h-[600px] w-full max-w-[600px] mx-auto">
                        <div className="absolute top-0 left-0 w-[480px] h-[400px]">
                            <img
                                src={BottomImage}
                                alt="Driver in car"
                                className="w-full h-full object-cover rounded-2xl shadow-[0_8px_28px_-6px_rgba(24,39,75,0.12),0_18px_88px_-4px_rgba(24,39,75,0.14)]"
                            />
                        </div>
                        <div className="absolute bottom-0 right-0 w-[380px] h-[280px] translate-y-4">
                            <img
                                src={TopImage}
                                alt="Driver with passenger"
                                className="w-full h-full object-cover rounded-2xl shadow-[0_8px_28px_-6px_rgba(24,39,75,0.12),0_18px_88px_-4px_rgba(24,39,75,0.14)]"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Driver;
