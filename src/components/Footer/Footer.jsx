
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-400 border-t border-gray-800">
            <div className="w-11/12 max-w-7xl mx-auto py-10 md:py-12">

                <div className="flex flex-col md:flex-row justify-between gap-8">

                    {/* Brand */}
                    <div className="max-w-sm">
                        <h2 className="text-2xl font-bold text-white">
                            Gym<span className="text-orange-400">Plans</span>
                        </h2>

                        <p className="text-sm leading-7 mt-3">
                            Build your strength, improve your lifestyle, and
                            achieve your fitness goals with the right plan.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Quick Links
                        </h3>

                        <ul className="flex flex-wrap flex-col gap-x-5 gap-y-1.5 text-sm">
                            <li><a href="/" className="hover:text-orange-400 transition-colors">Home</a></li>
                            <li><a href="/membership" className="hover:text-orange-400 transition-colors">Membership</a></li>
                            <li><a href="/trainers" className="hover:text-orange-400 transition-colors">Trainers</a></li>
                            <li><a href="/facilities" className="hover:text-orange-400 transition-colors">Facilities</a></li>
                            <li><a href="/pricing" className="hover:text-orange-400 transition-colors">Pricing</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Get Started Today
                        </h3>

                        <p className="text-sm leading-6 mb-4">
                            Your fitness journey starts with one step.
                            Find the right plan for you.
                        </p>

                        <a href="/pricing"
                            className="inline-block text-sm font-semibold text-orange-400 border-b border-orange-400 pb-1 hover:text-orange-300 transition-colors">
                            Explore Our Plans
                        </a>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-9 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs sm:text-sm">
                    <p>
                        © {new Date().getFullYear()} GymPlans. All rights reserved.
                    </p>

                    <p className="text-gray-500">
                        Built for a stronger you.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
