import React from 'react'
import { MessageCircle, Users, FileText, ChevronDown } from "lucide-react"
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'


const ContactUs = () => {
    const faqQuestions = [
        "What is MySports.AI, and how does it help with sports betting?",
        "Is the AI sports betting analysis really free?",
        "How are the AI predictions generated?",
        "Which sports and leagues does MySports.AI cover?",
        "Can I trust the accuracy of the AI sports predictions?",
        "What are AI sports betting picks?",
        "How can I find the best sports betting picks today?",
        "What types of bets can I place using AI sports picks?",
        "Are free AI sports betting picks reliable?",
        "How do betting odds affect my wagers?",
        "What is the future of sports betting with the use of AI?",
        "How can I make the best bets using AI sports betting?",
        "What should I look for in AI sports betting predictions?",
        "Can AI help in identifying betting opportunities?",
        "What are parlay picks and how can AI assist with them?",
        "What is the benefit of using AI in sports betting?",
        "What are the best bets today for the NBA?",
        "Can AI help with prop bets?",
        "How do betting trends influence sports betting predictions?",
        "What is the future of sports betting with AI technology?",
    ]

    return (
        <div className="min-h-screen bg-gray-950 text-white">
            {/* Header */}
            <header className="border-b border-gray-800 px-6 py-4">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-blue-500 rounded"></div>
                            <span className="text-white font-semibold">MySports.ai</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-4 text-sm">
                            <span className="flex items-center gap-1">
                                <span className="w-4 h-4 bg-gray-600 rounded-sm"></span>
                                EN
                            </span>
                            <span className="flex items-center gap-1">
                                <span className="w-4 h-4 bg-gray-600 rounded-sm"></span>
                                United States
                            </span>
                            <span className="flex items-center gap-1">
                                <span className="w-4 h-4 bg-gray-600 rounded-sm"></span>
                                American
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <button className="px-4 py-2 text-sm border border-gray-600 rounded-lg hover:bg-gray-800">Log In</button>
                            <button className="px-4 py-2 text-sm bg-green-500 text-black rounded-lg hover:bg-green-400">
                                Get Free AI
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="flex">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <div className="flex-1 ml-64 p-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Contact Header */}
                        <div className="mb-12">
                            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

                            {/* Contact Methods */}
                            <div className="flex gap-4 mb-12">
                                <button className="flex-1 px-6 py-4 border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors">
                                    <span className="text-lg">Telegram</span>
                                </button>
                                <button className="flex-1 px-6 py-4 border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors">
                                    <span className="text-lg">Messenger</span>
                                </button>
                            </div>

                            {/* Service Categories */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                                {/* Customer Service */}
                                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                                    <div className="flex items-center gap-3 mb-4">
                                        <MessageCircle className="w-6 h-6 text-green-400" />
                                        <h3 className="text-xl font-semibold">Customer Service</h3>
                                    </div>
                                    <p className="text-gray-300 mb-6 text-sm leading-relaxed">Any questions about Mysports.AI</p>
                                    <p className="text-gray-400 text-sm mb-6">
                                        If you have any questions about our services, features, activities, or suggestions, you can contact
                                        us at any time and we will contact you as soon as possible.
                                    </p>
                                    <button className="w-full px-4 py-2 bg-green-500 text-black rounded-lg hover:bg-green-400 transition-colors">
                                        Contact
                                    </button>
                                </div>

                                {/* Partners */}
                                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Users className="w-6 h-6 text-green-400" />
                                        <h3 className="text-xl font-semibold">Partners</h3>
                                    </div>
                                    <p className="text-gray-300 mb-6 text-sm leading-relaxed">Cooperation on various projects</p>
                                    <p className="text-gray-400 text-sm mb-6">
                                        Our most successful strategies and partners are those who can reach a large audience. These include
                                        influencers, YouTube, Twitter, Reddit, TikTok, Instagram, Discord and others.
                                    </p>
                                    <button className="w-full px-4 py-2 bg-green-500 text-black rounded-lg hover:bg-green-400 transition-colors">
                                        Contact
                                    </button>
                                </div>

                                {/* API Cooperation */}
                                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                                    <div className="flex items-center gap-3 mb-4">
                                        <FileText className="w-6 h-6 text-green-400" />
                                        <h3 className="text-xl font-semibold">API Cooperation</h3>
                                    </div>
                                    <p className="text-gray-300 mb-6 text-sm leading-relaxed">APIs / Sports data / AI predictions</p>
                                    <p className="text-gray-400 text-sm mb-6">
                                        If you would like to incorporate further in your business or on our platform, please contact us and
                                        we will be in touch.
                                    </p>
                                    <button className="w-full px-4 py-2 bg-green-500 text-black rounded-lg hover:bg-green-400 transition-colors">
                                        Contact
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

                            <div className="space-y-4">
                                {faqQuestions.map((question, index) => (
                                    <div key={index} className="border border-gray-800 rounded-lg">
                                        <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-900 transition-colors">
                                            <span className="text-gray-300">{question}</span>
                                            <ChevronDown className="w-5 h-5 text-gray-400" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Footer */}
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
