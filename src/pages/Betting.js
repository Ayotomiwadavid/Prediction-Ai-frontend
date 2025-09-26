import React from 'react'
import BettingSiteCard from '../Components/Betting-site-card'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'


const Betting = () => {
    const bettingSites = [
        {
            logo: (
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">B</div>
            ),
            name: "Betus",
            bonus: "$15000",
            description: "Claim a 125% Deposit Bonus up to $2500 with exclusive live.",
            rating: 4.5,
            ratingCount: "3K+",
            claimAmount: "$15000",
        },
        {
            logo: (
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    S
                </div>
            ),
            name: "Sportsbet.io",
            bonus: "",
            description: "Betting with 100% cryptocurrency deposits and withdrawals, convenient, and competitive odds.",
            rating: 4.3,
            ratingCount: "2K+",
            claimAmount: "$100",
        },
        {
            logo: (
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">888</div>
            ),
            name: "888STARZ",
            bonus: "$300",
            description: "Receive 100% Deposit Bonus up to $300 with exclusive live. 24/7.",
            rating: 4.2,
            ratingCount: "1.5K+",
            claimAmount: "$300",
        },
        {
            logo: (
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
                    GG
                </div>
            ),
            name: "GG.bet",
            bonus: "$750",
            description: "Receive 100% Deposit Bonus up to $750 with live.",
            rating: 4.4,
            ratingCount: "2.2K+",
            claimAmount: "$750",
        },
        {
            logo: (
                <div className="w-12 h-12 bg-red-700 rounded-lg flex items-center justify-center text-white font-bold">B</div>
            ),
            name: "BetOnline",
            bonus: "$250",
            description: "Receive 50% Deposit Bonus up to $250 with live.",
            rating: 4.1,
            ratingCount: "1.8K+",
            claimAmount: "$250",
        },
        {
            logo: (
                <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center text-white font-bold">S</div>
            ),
            name: "Stake",
            bonus: "$100",
            description: "Enjoy crypto deposits, bonuses, get a 200% bonus up to $100 real!",
            rating: 4.6,
            ratingCount: "3.5K+",
            claimAmount: "$100",
        },
        {
            logo: (
                <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold">1x</div>
            ),
            name: "1xbet",
            bonus: "$130",
            description: "Get a 100% Match Deposit Bonus up to $130 with Promo Code.",
            rating: 4.0,
            ratingCount: "1.2K+",
            claimAmount: "$130",
        },
        {
            logo: (
                <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center text-white font-bold">
                    M
                </div>
            ),
            name: "Melbet",
            bonus: "$130",
            description: "Get a 100% Deposit Bonus up to $130 with live.",
            rating: 4.2,
            ratingCount: "1.6K+",
            claimAmount: "$130",
        },
        {
            logo: (
                <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center text-white font-bold">22</div>
            ),
            name: "22bet",
            bonus: "$130",
            description: "Claim a 100% Deposit Bonus up to $130 with exclusive live!",
            rating: 4.3,
            ratingCount: "1.9K+",
            claimAmount: "$130",
        },
        {
            logo: (
                <div className="w-12 h-12 bg-red-800 rounded-lg flex items-center justify-center text-white font-bold">D</div>
            ),
            name: "DafaBet",
            bonus: "$100",
            description: "Get a 100% Deposit Bonus up to $100 with live.",
            rating: 4.1,
            ratingCount: "1.4K+",
            claimAmount: "$100",
        },
        {
            logo: (
                <div className="w-12 h-12 bg-orange-700 rounded-lg flex items-center justify-center text-white font-bold">
                    188
                </div>
            ),
            name: "188bet",
            bonus: "$200",
            description: "Receive 60% Deposit Bonus up to $200 with live.",
            rating: 4.0,
            ratingCount: "1.1K+",
            claimAmount: "$200",
        },
    ]

    return (
        <div className="min-h-screen bg-gray-900">
            <Sidebar />

            {/* Header */}
            <div className="ml-64 bg-gray-900 border-b border-gray-800 px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <span className="text-gray-400">🌐 EN</span>
                        <span className="text-gray-400">📍 United States</span>
                        <span className="text-gray-400">🇺🇸 American</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="text-white border border-gray-600 px-4 py-2 rounded-lg">Log In</button>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Get Free AI</button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="ml-64 p-6">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
                    <span>🏠 HOW TO</span>
                    <span>▶</span>
                    <span>AI Tip</span>
                    <span>▶</span>
                    <span className="text-orange-400">Join Group</span>
                </div>

                {/* Title Section */}
                <div className="mb-8">
                    <h1 className="text-white text-4xl font-bold mb-4">
                        Find the Best Betting Site: Top 10 Sports Betting Sites in the US for 2025
                    </h1>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
                        Welcome to your ultimate guide for discovering the top 10 sports betting sites in the US for 2025. As the
                        landscape of online sports betting continues to evolve in the exciting world of online sports betting, this
                        resource aims to provide you with the essential information you need to enhance your betting experience.
                        From understanding legal sports betting to exploring different betting options, we cover everything you need
                        to make informed choices and maximize your winnings.
                    </p>
                </div>

                {/* Betting Sites Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {bettingSites.map((site, index) => (
                        <BettingSiteCard key={index} {...site} />
                    ))}
                </div>

                {/* Content Sections */}
                <div className="space-y-8">
                    <section>
                        <h2 className="text-white text-2xl font-bold mb-4">What Are the Best Sports Betting Sites in the US?</h2>
                    </section>

                    <section>
                        <h3 className="text-white text-xl font-semibold mb-4">Top Online Sportsbooks to Consider</h3>
                        <p className="text-gray-300 leading-relaxed">
                            When it comes to finding the best sports betting site, it's crucial to look for online sportsbooks that
                            offer a wide range of betting options, competitive odds, and excellent customer service. The top
                            sportsbooks in the US provide users with access to a comprehensive array of betting markets, allowing
                            sports bettors to place wagers on various sports events, from football and basketball and beyond. These
                            sites not only offer competitive odds but also feature user-friendly interfaces that enhance the overall
                            betting experience. By choosing one of the best online sports betting sites, you are setting the stage for
                            a rewarding betting journey.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-white text-xl font-semibold mb-4">Reviews of Leading Online Betting Sites</h3>
                        <p className="text-gray-300 leading-relaxed">
                            To help you make an informed decision, we provide detailed reviews of leading online betting sites. Each
                            review outlines key features such as bonuses, customer support, and payment options. By analyzing the
                            strengths and weaknesses of these betting sites, you can better understand which platforms align with your
                            betting preferences and requirements. These reviews give you insight into the experiences of fellow sports
                            bettors, further guiding you in your selection of the best betting site.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-white text-xl font-semibold mb-4">Comparing Features of Best Sportsbooks in the US</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Comparing features is vital when selecting the best sportsbook. It's essential for finding the ideal
                            online betting site. Important factors to consider include the range of betting options available, live
                            betting capabilities, and the overall functionality of the betting app. Furthermore, security measures and
                            payment methods are crucial aspects that can significantly impact your betting experience. By evaluating
                            these aspects, you can confidently choose an online sportsbook that meets all your sports betting needs.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-white text-xl font-semibold mb-4">
                            How to Choose the Best Online Sports Betting Site?
                        </h3>
                    </section>

                    <section>
                        <h4 className="text-white text-lg font-semibold mb-4">Key Factors in Selecting a Betting Website</h4>
                        <p className="text-gray-300 leading-relaxed">
                            Selecting the right betting website involves considering several key factors. Look for sports betting
                            sites that are known for their reliability, user-friendly design, and customer service. Additionally,
                            check if the online sportsbook offers competitive odds and a wide variety of betting markets. The
                            reputation of the betting site and its track record in the industry are also important factors. The best
                            betting site will not only cater to your betting preferences but also ensure a seamless and enjoyable
                            online experience.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-white text-xl font-semibold mb-4">Understanding Betting Markets and Options</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Understanding the different betting markets and options available is crucial for successful betting in the
                            US. The best online sportsbooks present a comprehensive selection of betting options, including moneyline
                            bets, point spreads, and prop bets. Familiarizing yourself with these betting markets will help you make
                            more informed decisions and increase your chances of each type of bet works, the better your chances of
                            success will be.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-white text-xl font-semibold mb-4">Evaluating Legal and Regulatory Aspects</h3>
                        <p className="text-gray-300 leading-relaxed mb-8">
                            Before engaging with any online sportsbook, it's essential to evaluate the legal and regulatory aspects of
                            sports betting in your state. The legality of online sports betting varies by state, and it's important to
                            ensure that the betting site you choose operates within the legal framework of your jurisdiction. Look for
                            licensed sportsbooks that comply with state regulations and offer secure, regulated betting environments.
                            This not only protects your interests but also ensures that you're participating in legal sports betting
                            activities.
                        </p>
                    </section>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Betting
