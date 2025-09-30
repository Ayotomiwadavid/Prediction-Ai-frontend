import React from 'react'
import Footer from '../Components/Footer'
import { Sidebar } from 'lucide-react'
import Header from '../Components/Header'

const Calculator = () => {
   const calculators = [
    "Arbitrage Calculator",
    "Expected Value Calculator",
    "Bonus Bet Conversion Calculator",
    "Hold Calculator",
    "Implied Probability Calculator",
    "Kelly Calculator",
    "No-Vig Fair Odds Calculator",
    "Odds Converter Calculator",
    "Parlay Calculator",
    "Point Spread Calculator",
    "Poisson Calculator",
    "Round Robin Calculator",
    "Vig Calculator",
  ]

  const calculatorDescriptions = [
    {
      title: "Arbitrage Calculator",
      description:
        "Use Mysports.AI's arbitrage calculator to find hedge bets, reduce risk, and lock in a risk-free profit. Calculate exact stakes across sportsbooks in seconds.",
    },
    {
      title: "Expected Value Calculator",
      description:
        "Use Mysports.AI's odds expected value calculator to find EV in seconds. Apply win probability × profit minus loss risk to identify +EV bets and boost ROI.",
    },
    {
      title: "Bonus Bet Conversion Calculator",
      description:
        "determine the exact hedge bet size you need to lock in a guaranteed profit—turning your free bet into real cash.",
    },
    {
      title: "Hold Calculator",
      description:
        "Use Mysports.AI's Hold Calculator to measure sportsbook hold on both sides of a bet. Spot low-hold markets and improve your long-term betting",
    },
    {
      title: "Implied Probability Calculator",
      description:
        "Easily convert betting odds into implied probability. Compare market odds with your win chances to find value bets and smarter",
    },
    {
      title: "Kelly Calculator",
      description:
        "Use the Kelly Criterion Calculator from Mysports.AI to find the optimal bet size. Maximize profit, control risk, and bet smarter with AI-powered",
    },
    {
      title: "No-Vig Fair Odds Calculator",
      description:
        "Use this no-vig calculator to reveal fair odds and real win probabilities. Compare sportsbook lines without juice and find bets with true value.",
    },
    {
      title: "Odds Converter Calculator",
      description:
        "Convert betting odds between American, decimal, fractional, and European formats. Instantly calculate implied probability and make smarter",
    },
    {
      title: "Parlay Calculator",
      description:
        "Enter your total wager and individual odds to calculate parlay payout, profit, and combined odds instantly. Great for stacking multi-leg bets.",
    },
    {
      title: "Point Spread Calculator",
      description:
        "Quickly convert point spreads to moneyline odds. Compare spreads with moneyline bets to find value and make smarter, data-driven sports",
    },
    {
      title: "Poisson Calculator",
      description:
        "Use the Poisson calculator to estimate the chance of hitting a betting prop based on expected averages—perfect for scoring, goals, or event",
    },
    {
      title: "Round Robin Calculator",
      description:
        "Easily calculate payouts and risk for 3x, 4x, or more Round Robin parlays. See win scenarios, simulate results, and build smarter combos with precision.",
    },
    {
      title: "Vig Calculator",
      description:
        "Enter odds from both sides of a market to calculate the bookmaker's edge (vig). Understand how much you're really paying in every bet.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <Header />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">All Sports Betting Calculators & Probability Tools</h1>

            {/* Calculator Buttons */}
            <div className="flex flex-wrap gap-3 mb-12">
              {calculators.map((calculator, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-gray-800 text-white rounded-full border border-gray-700 hover:bg-gray-700 transition-colors"
                >
                  {calculator}
                </button>
              ))}
            </div>

            {/* Calculator Descriptions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {calculatorDescriptions.map((calc, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{calc.title}</h3>
                    <button className="text-gray-400 hover:text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </button>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{calc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Calculator
