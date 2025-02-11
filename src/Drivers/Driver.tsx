import TopImage from "../assets/ImagesGallery/image1.png";
import BottomImage from "../assets/ImagesGallery/image2.png";

const Driver = () => {
    return (
        <div className="bg-gradient-to-r from-white to-[#E5F4FF] py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            Join Our Trusted <span className="text-[#2E2C80]">Drivers in Gilgit</span>
                        </h1>
                        <p className="text-gray-600 leading-relaxed">
                            Become a part of Easy Drop's trusted team of drivers in Gilgit! Enjoy flexible schedules, competitive
                            earnings, and the opportunity to provide safe and reliable transportation services to students, schools,
                            colleges, and businesses. Drive with pride and make a difference in your community.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Join our mission to simplify daily commutes in Gilgit by ensuring safety, punctuality, and reliability.
                            As a trusted Easy Drop driver, you'll play a vital role in connecting people and making their journeys
                            smooth and stress-free.
                        </p>
                        <button className="w-[134px] h-[47px] rounded-lg text-lg font-medium text-white bg-gradient-to-b from-[#2E2C80] to-[#2458A4] hover:from-[#3a3799] hover:to-[#3069b5] transition-colors">
                            Learn More
                        </button>
                    </div>

                    <div className="relative w-full h-[400px] lg:h-[600px]">
                        <div className="absolute top-0 left-0 w-[300px] lg:w-[480px] h-[250px] lg:h-[400px]">
                            <img
                                src={BottomImage}
                                alt="Driver in car"
                                className="w-full h-full object-cover rounded-2xl shadow-lg"
                            />
                        </div>
                        <div className="absolute bottom-0 right-0 w-[250px] lg:w-[380px] h-[180px] lg:h-[280px] translate-y-4">
                            <img
                                src={TopImage}
                                alt="Driver with passenger"
                                className="w-full h-full object-cover rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Driver;
