
interface LandingPageProps {
    onEnter: () => void;
}

const LandingPage = ({ onEnter }: LandingPageProps) => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-0 -right-20 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-40 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900">
                        <span className="block">Store your thoughts,</span>
                        <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                            Note out every idea.
                        </span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
                        A beautiful, intelligent space for your mind to wander and your ideas to take shape.
                        Powered by AI to help you focus on what matters.
                    </p>
                </div>

                <div className="mt-10">
                    <button
                        onClick={onEnter}
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-all duration-200 bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        <span>Start Writing</span>
                        <svg
                            className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            ></path>
                        </svg>

                        {/* Button Glow Effect */}
                        <div className="absolute inset-0 rounded-full ring-4 ring-white/20 group-hover:ring-white/30 transition-all"></div>
                    </button>
                </div>
            </div>

            {/* Footer / Copyright */}
            <div className="absolute bottom-6 text-sm text-gray-400">
                © 2025 AI Notes App
            </div>
        </div>
    );
};

export default LandingPage;
