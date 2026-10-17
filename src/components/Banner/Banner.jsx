import React from 'react';

const Banner = () => {
    return (



        <section className="w-full min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center">
            <div className="w-full py-12 md:py-16">
                <div className="w-[86%] mx-auto">
                    <div className="hero-content flex-col-reverse lg:flex-row-reverse justify-between gap-10 lg:gap-14 p-0 w-full max-w-none">

                        <div className="w-full lg:w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80"
                                alt="Modern gym"
                                className="w-full h-64 sm:h-80 lg:h-[460px] object-cover rounded-2xl shadow-2xl"
                            />
                        </div>

                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <span className="inline-block text-orange-400 font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm">
                                Build Your Best
                            </span>

                            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white mt-4 leading-tight">
                                Transform Your Body,
                                <span className="text-orange-400"> Transform Your Life.</span>
                            </h1>

                            <p className="mt-5 text-sm sm:text-base text-gray-400 leading-7 max-w-xl mx-auto lg:mx-0">
                                Choose the right membership plan, stay consistent, and
                                take your fitness journey to the next level.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center lg:justify-start">
                                <a
                                    href="#pricing"
                                    className="btn bg-orange-400 text-black border-none hover:bg-orange-500 px-7"
                                >
                                    Explore Plans
                                </a>

                                <a
                                    href="#about"
                                    className="btn btn-outline border-gray-600 text-white hover:bg-white hover:text-black hover:border-white px-7"
                                >
                                    Learn More
                                </a>
                            </div>

                            <div className="mt-10 flex justify-center lg:justify-start gap-8 sm:gap-12">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">500+</h3>
                                    <p className="text-xs sm:text-sm text-gray-500 mt-1">Active Members</p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white">15+</h3>
                                    <p className="text-xs sm:text-sm text-gray-500 mt-1">Expert Trainers</p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white">10+</h3>
                                    <p className="text-xs sm:text-sm text-gray-500 mt-1">Years Experience</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;