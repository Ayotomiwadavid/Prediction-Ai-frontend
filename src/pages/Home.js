import React from 'react'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'

const Home = () => {
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
      <div className="ml-64">
        {/* Hero Section */}
        <section className="px-6 py-16 text-center">
          <h1 className="text-white text-5xl font-bold mb-6">
            AI Sports Picks &<br />
            Predictions
          </h1>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            Get AI-powered sports predictions with advanced analytics and machine learning algorithms
          </p>
          <button className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold mb-12">
            Get Free Predictions
          </button>

          {/* Mobile App Mockups */}
          <div className="flex justify-center gap-8">
            <div className="w-64 h-96 bg-gray-800 rounded-3xl p-4 border border-gray-700">
              <div className="bg-gray-700 rounded-2xl h-full p-4">
                <div className="text-white text-sm mb-4">Today's Picks</div>
                <div className="space-y-3">
                  <div className="bg-green-600 rounded-lg p-3">
                    <div className="text-white font-semibold">Lakers vs Warriors</div>
                    <div className="text-green-100 text-sm">Over 215.5 - 87% confidence</div>
                  </div>
                  <div className="bg-purple-600 rounded-lg p-3">
                    <div className="text-white font-semibold">Cowboys vs Giants</div>
                    <div className="text-purple-100 text-sm">Cowboys -7.5 - 92% confidence</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-64 h-96 bg-gray-800 rounded-3xl p-4 border border-gray-700">
              <div className="bg-gray-700 rounded-2xl h-full p-4">
                <div className="text-white text-sm mb-4">Live Tracking</div>
                <div className="space-y-3">
                  <div className="bg-gray-600 rounded-lg p-3">
                    <div className="text-white font-semibold">Win Rate: 73%</div>
                    <div className="text-gray-300 text-sm">Last 30 days</div>
                  </div>
                  <div className="bg-gray-600 rounded-lg p-3">
                    <div className="text-white font-semibold">ROI: +24.5%</div>
                    <div className="text-gray-300 text-sm">This month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Sports Picks Section */}
        <section className="px-6 py-16 bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-white text-4xl font-bold mb-6">AI Sports Picks</h2>
                <p className="text-gray-300 text-lg mb-8">
                  Our advanced AI analyzes thousands of data points to provide you with the most accurate sports
                  predictions. Get real-time insights and betting recommendations powered by machine learning.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">Real-time data analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">Machine learning predictions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">Expert analysis integration</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-72 h-96 bg-gray-700 rounded-3xl p-4 border border-gray-600">
                  <div className="bg-purple-600 rounded-2xl h-full p-4">
                    <div className="text-white text-lg font-semibold mb-4">Today's Top Picks</div>
                    <div className="space-y-4">
                      <div className="bg-purple-700 rounded-lg p-3">
                        <div className="text-white font-semibold">NBA</div>
                        <div className="text-purple-100 text-sm">Lakers vs Celtics</div>
                        <div className="text-green-300 text-sm">95% confidence</div>
                      </div>
                      <div className="bg-purple-700 rounded-lg p-3">
                        <div className="text-white font-semibold">NFL</div>
                        <div className="text-purple-100 text-sm">Chiefs vs Bills</div>
                        <div className="text-green-300 text-sm">88% confidence</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted AI Picks Section */}
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-white text-4xl font-bold mb-12">Trusted AI Picks, Proven by Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-800 rounded-lg p-8">
                <div className="text-green-500 text-4xl font-bold mb-2">73%</div>
                <div className="text-white text-lg font-semibold mb-2">Win Rate</div>
                <div className="text-gray-400">Last 30 days performance</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-8">
                <div className="text-green-500 text-4xl font-bold mb-2">+24.5%</div>
                <div className="text-white text-lg font-semibold mb-2">ROI</div>
                <div className="text-gray-400">Average return on investment</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-8">
                <div className="text-green-500 text-4xl font-bold mb-2">50K+</div>
                <div className="text-white text-lg font-semibold mb-2">Users</div>
                <div className="text-gray-400">Trust our predictions</div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Predictions for Sports */}
        <section className="px-6 py-16 bg-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-white text-4xl font-bold mb-12">AI Predictions for These Sports</h2>
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-3">
                  <span className="text-white text-2xl">🏈</span>
                </div>
                <span className="text-white">NFL</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-3">
                  <span className="text-white text-2xl">🏀</span>
                </div>
                <span className="text-white">NBA</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-3">
                  <span className="text-white text-2xl">⚾</span>
                </div>
                <span className="text-white">MLB</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-3">
                  <span className="text-white text-2xl">🏒</span>
                </div>
                <span className="text-white">NHL</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-3">
                  <span className="text-white text-2xl">⚽</span>
                </div>
                <span className="text-white">Soccer</span>
              </div>
            </div>
          </div>
        </section>

        {/* Free vs Subscription Comparison */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white text-4xl font-bold text-center mb-12">Free vs Subscription: Choose Superior</h2>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="grid grid-cols-3 gap-0">
                <div className="p-6 border-r border-gray-700">
                  <h3 className="text-white text-xl font-semibold mb-4">Features</h3>
                  <div className="space-y-4">
                    <div className="text-gray-300">Daily Picks</div>
                    <div className="text-gray-300">Win Rate</div>
                    <div className="text-gray-300">Expert Analysis</div>
                    <div className="text-gray-300">Live Updates</div>
                    <div className="text-gray-300">Premium Support</div>
                  </div>
                </div>
                <div className="p-6 border-r border-gray-700">
                  <h3 className="text-white text-xl font-semibold mb-4">Free</h3>
                  <div className="space-y-4">
                    <div className="text-gray-400">3 picks/day</div>
                    <div className="text-gray-400">Basic</div>
                    <div className="text-red-400">✗</div>
                    <div className="text-red-400">✗</div>
                    <div className="text-red-400">✗</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-green-500 text-xl font-semibold mb-4">Premium</h3>
                  <div className="space-y-4">
                    <div className="text-green-400">Unlimited</div>
                    <div className="text-green-400">Advanced</div>
                    <div className="text-green-400">✓</div>
                    <div className="text-green-400">✓</div>
                    <div className="text-green-400">✓</div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gray-700 text-center">
                <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold">
                  Upgrade to Premium
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pick Your Winner Section */}
        <section className="px-6 py-16 bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-white text-4xl font-bold text-center mb-12">
              Pick Your Winner at Sports Betting Sites
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: "DraftKings", color: "bg-orange-600" },
                { name: "FanDuel", color: "bg-blue-600" },
                { name: "BetMGM", color: "bg-yellow-600" },
                { name: "Caesars", color: "bg-purple-600" },
                { name: "PointsBet", color: "bg-red-600" },
                { name: "BetRivers", color: "bg-green-600" },
              ].map((site, index) => (
                <div key={index} className="bg-gray-700 rounded-lg p-4 text-center">
                  <div className={`w-12 h-12 ${site.color} rounded-lg mx-auto mb-3 flex items-center justify-center`}>
                    <span className="text-white font-bold text-sm">{site.name.slice(0, 2)}</span>
                  </div>
                  <div className="text-white text-sm">{site.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Chart Section */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white text-3xl font-bold text-center mb-12">Our Performance Track Record</h2>
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-gray-400">Performance Chart Placeholder</div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Predictions Comparison Table */}
        <section className="px-6 py-16 bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-white text-4xl font-bold text-center mb-12">AI predictions Free Comparison</h2>
            <div className="bg-gray-700 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-600">
                  <tr>
                    <th className="text-white p-4 text-left">Sportsbook</th>
                    <th className="text-white p-4 text-left">Win Rate</th>
                    <th className="text-white p-4 text-left">ROI</th>
                    <th className="text-white p-4 text-left">Picks</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "MySports.AI", winRate: "73%", roi: "+24.5%", picks: "Unlimited" },
                    { name: "Competitor A", winRate: "65%", roi: "+18.2%", picks: "Limited" },
                    { name: "Competitor B", winRate: "61%", roi: "+15.8%", picks: "Limited" },
                    { name: "Competitor C", winRate: "58%", roi: "+12.3%", picks: "Limited" },
                  ].map((row, index) => (
                    <tr key={index} className="border-t border-gray-600">
                      <td className="text-white p-4">{row.name}</td>
                      <td className="text-green-400 p-4">{row.winRate}</td>
                      <td className="text-green-400 p-4">{row.roi}</td>
                      <td className="text-white p-4">{row.picks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Mobile App Section */}
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-green-500 text-4xl font-bold mb-6">Join Free - Get AI Sports Betting Picks</h2>
                <p className="text-gray-300 text-lg mb-8">
                  Download our mobile app and get instant access to AI-powered sports predictions. Start winning more
                  bets today with our advanced analytics.
                </p>
                <button className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold">
                  Download App
                </button>
              </div>
              <div className="flex justify-center gap-4">
                <div className="w-48 h-80 bg-gray-800 rounded-3xl p-3 border border-gray-700">
                  <div className="bg-gray-700 rounded-2xl h-full p-4">
                    <div className="text-white text-sm mb-4">Live Picks</div>
                    <div className="space-y-2">
                      <div className="bg-green-600 rounded p-2">
                        <div className="text-white text-xs">Lakers +5.5</div>
                      </div>
                      <div className="bg-purple-600 rounded p-2">
                        <div className="text-white text-xs">Over 215.5</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-48 h-80 bg-gray-800 rounded-3xl p-3 border border-gray-700">
                  <div className="bg-gray-700 rounded-2xl h-full p-4">
                    <div className="text-white text-sm mb-4">Stats</div>
                    <div className="space-y-2">
                      <div className="bg-gray-600 rounded p-2">
                        <div className="text-white text-xs">Win Rate: 73%</div>
                      </div>
                      <div className="bg-gray-600 rounded p-2">
                        <div className="text-white text-xs">ROI: +24.5%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-6 py-16 bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-white text-4xl font-bold text-center mb-12">
              Benefits of Using Mysports.ai for Sports Betting
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "🎯",
                  title: "Accurate Predictions",
                  description: "AI-powered analysis with 73% win rate",
                },
                {
                  icon: "📊",
                  title: "Real-time Data",
                  description: "Live updates and instant notifications",
                },
                {
                  icon: "🔒",
                  title: "Secure Platform",
                  description: "Your data and privacy are protected",
                },
                {
                  icon: "💰",
                  title: "Profitable Returns",
                  description: "Average ROI of +24.5% for users",
                },
              ].map((benefit, index) => (
                <div key={index} className="bg-gray-700 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-white text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prediction Model Section */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white text-4xl font-bold mb-8">Mysports.AI's Sports Betting Prediction Model</h2>
            <p className="text-gray-300 text-lg mb-12">
              Our advanced AI model analyzes thousands of data points including player statistics, team performance,
              weather conditions, historical matchups, and real-time market movements to provide you with the most
              accurate predictions possible.
            </p>
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-green-500 text-3xl font-bold mb-2">1000+</div>
                  <div className="text-white">Data Points</div>
                </div>
                <div className="text-center">
                  <div className="text-green-500 text-3xl font-bold mb-2">24/7</div>
                  <div className="text-white">Analysis</div>
                </div>
                <div className="text-center">
                  <div className="text-green-500 text-3xl font-bold mb-2">AI</div>
                  <div className="text-white">Powered</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 py-16 bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: "How accurate are your AI predictions?",
                  answer:
                    "Our AI model maintains a 73% win rate over the last 30 days with continuous improvement through machine learning.",
                },
                {
                  question: "What sports do you cover?",
                  answer: "We provide predictions for NFL, NBA, MLB, NHL, Soccer, and other major sports leagues.",
                },
                {
                  question: "Is there a free trial available?",
                  answer:
                    "Yes, we offer free daily picks so you can test our accuracy before subscribing to premium features.",
                },
                {
                  question: "How do I get started?",
                  answer:
                    "Simply sign up for a free account and start receiving AI-powered sports predictions immediately.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-gray-700 rounded-lg p-6">
                  <h3 className="text-white text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

export default Home
