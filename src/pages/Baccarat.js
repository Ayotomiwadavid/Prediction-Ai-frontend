"use client"

import { useState } from "react"
import { Home, Calendar, Dice1, Spade, TrendingUp, Trophy, ChevronDown, ChevronRight, ChevronUp } from "lucide-react"
import Sidebar from "../Components/Sidebar"

export default function Baccarat() {
  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-white">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="max-w-5xl mx-auto p-6 space-y-8">
          <PredictionInterface />
          <UserGuide />
          <FAQ />
        </div>
      </main>
    </div>
  )
}

// function Sidebar() {
//   const [expandedSections, setExpandedSections] = useState({
//     aiPredictions: true,
//     calendar: false,
//   })

//   const toggleSection = (section) => {
//     setExpandedSections((prev) => ({
//       ...prev,
//       [section]: !prev[section],
//     }))
//   }

//   return (
//     <aside className="w-64 bg-[#0f0f0f] border-r border-gray-800 flex flex-col">
//       {/* Logo */}
//       <div className="p-4 border-b border-gray-800">
//         <div className="flex items-center gap-2">
//           <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
//             <Spade className="w-5 h-5 text-white" />
//           </div>
//           <span className="font-bold text-lg">Mysports.ai</span>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 p-4 space-y-2">
//         {/* AI Predictions Section */}
//         <div>
//           <button
//             onClick={() => toggleSection("aiPredictions")}
//             className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
//           >
//             <span className="flex items-center gap-2">
//               <Home className="w-4 h-4" />
//               AI Predictions
//             </span>
//             {expandedSections.aiPredictions ? (
//               <ChevronDown className="w-4 h-4" />
//             ) : (
//               <ChevronRight className="w-4 h-4" />
//             )}
//           </button>

//           {expandedSections.aiPredictions && (
//             <div className="ml-6 mt-1 space-y-1">
//               <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm bg-blue-600 text-white rounded-lg">
//                 <Dice1 className="w-4 h-4" />
//                 Baccarat AI
//               </a>
//               <a
//                 href="#"
//                 className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
//               >
//                 <Dice1 className="w-4 h-4" />
//                 Craps AI Signals
//               </a>
//               <a
//                 href="#"
//                 className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
//               >
//                 <Spade className="w-4 h-4" />
//                 Blackjack AI
//               </a>
//               <a
//                 href="#"
//                 className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
//               >
//                 <Trophy className="w-4 h-4" />
//                 Football Tips AI
//               </a>
//             </div>
//           )}
//         </div>

//         {/* Calendar Section */}
//         <div>
//           <button
//             onClick={() => toggleSection("calendar")}
//             className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
//           >
//             <span className="flex items-center gap-2">
//               <Calendar className="w-4 h-4" />
//               Calendar
//             </span>
//             {expandedSections.calendar ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
//           </button>
//         </div>

//         {/* Other Menu Items */}
//         <a
//           href="#"
//           className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
//         >
//           <TrendingUp className="w-4 h-4" />
//           Statistics
//         </a>
//       </nav>

//       {/* Bottom Section */}
//       <div className="p-4 border-t border-gray-800">
//         <div className="flex items-center gap-3 px-3 py-2">
//           <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full" />
//           <div className="flex-1 min-w-0">
//             <div className="text-sm font-medium truncate">User</div>
//             <div className="text-xs text-gray-400 truncate">user@email.com</div>
//           </div>
//         </div>
//       </div>
//     </aside>
//   )
// }

function PredictionInterface() {
  const [selectedCards, setSelectedCards] = useState([])
  const [isVersionOpen, setIsVersionOpen] = useState(false)
  const [selectedVersion, setSelectedVersion] = useState("Baccarat Prediction & Card Counting v2.0")

  const handleCardClick = (card) => {
    if (selectedCards.includes(card)) {
      setSelectedCards(selectedCards.filter((c) => c !== card))
    } else {
      setSelectedCards([...selectedCards, card])
    }
  }

  const cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">AI Baccarat Predictor & Card Counting Guide</h1>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Home</span>
          <span>/</span>
          <span>Baccarat Predictor</span>
          <span>/</span>
          <span>Last updated: Aug 24, 2024</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative w-80">
          <button
            onClick={() => setIsVersionOpen(!isVersionOpen)}
            className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-2 text-left flex items-center justify-between hover:bg-[#252525] transition-colors"
          >
            <span className="text-sm">{selectedVersion}</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
          {isVersionOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-[#1a1a1a] border border-gray-700 rounded-lg overflow-hidden z-10">
              <button
                onClick={() => {
                  setSelectedVersion("Baccarat Prediction & Card Counting v2.0")
                  setIsVersionOpen(false)
                }}
                className="w-full px-4 py-2 text-left text-sm hover:bg-[#252525] transition-colors"
              >
                Baccarat Prediction & Card Counting v2.0
              </button>
              <button
                onClick={() => {
                  setSelectedVersion("Baccarat Prediction & Card Counting v1.0")
                  setIsVersionOpen(false)
                }}
                className="w-full px-4 py-2 text-left text-sm hover:bg-[#252525] transition-colors"
              >
                Baccarat Prediction & Card Counting v1.0
              </button>
            </div>
          )}
        </div>
        <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-medium transition-colors">
          Support
        </button>
      </div>

      {/* Card Display Area */}
      <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-800">
        <div className="text-center mb-4">
          <span className="text-sm text-gray-400">Cards Entered: </span>
          <span className="text-sm text-white">All Cards</span>
          <span className="text-sm text-gray-400"> • Accuracy: </span>
          <span className="text-sm text-white">High</span>
        </div>

        <div className="text-center mb-6">
          <span className="text-red-500 text-sm">● Start - Enter Cards in Order</span>
        </div>

        {/* Main Prediction Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-[#0f0f0f] rounded-lg p-6 border-2 border-blue-500">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">Player</div>
              <div className="text-sm text-gray-400">Predicted Winner</div>
            </div>
          </div>
          <div className="bg-[#0f0f0f] rounded-lg p-6 border-2 border-green-500">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">Tie</div>
              <div className="text-sm text-gray-400">Low Probability</div>
            </div>
          </div>
          <div className="bg-[#0f0f0f] rounded-lg p-6 border-2 border-red-500">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">Banker</div>
              <div className="text-sm text-gray-400">Alternative</div>
            </div>
          </div>
        </div>

        {/* Side Bets */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-[#0f0f0f] rounded-lg p-4 border border-gray-700">
            <div className="text-center">
              <div className="text-lg font-bold text-blue-400 mb-1">Player Pair</div>
              <div className="text-xs text-gray-500">Side Bet</div>
            </div>
          </div>
          <div className="bg-[#0f0f0f] rounded-lg p-4 border border-gray-700">
            <div className="text-center">
              <div className="text-lg font-bold text-blue-400 mb-1">Big</div>
              <div className="text-xs text-red-400">Small</div>
            </div>
          </div>
          <div className="bg-[#0f0f0f] rounded-lg p-4 border border-gray-700">
            <div className="text-center">
              <div className="text-lg font-bold text-red-400 mb-1">Banker Pair</div>
              <div className="text-xs text-gray-500">Side Bet</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-[#0f0f0f] rounded-lg p-4 border border-gray-700">
            <div className="text-center">
              <div className="text-lg font-bold text-blue-400 mb-1">Player Dragon</div>
              <div className="text-xs text-gray-500">Natural Win</div>
            </div>
          </div>
          <div className="bg-[#0f0f0f] rounded-lg p-4 border border-gray-700">
            <div className="text-center">
              <div className="text-lg font-bold text-yellow-400 mb-1">Lucky Six</div>
              <div className="text-xs text-gray-500">Bonus</div>
            </div>
          </div>
          <div className="bg-[#0f0f0f] rounded-lg p-4 border border-gray-700">
            <div className="text-center">
              <div className="text-lg font-bold text-red-400 mb-1">Banker Dragon</div>
              <div className="text-xs text-gray-500">Natural Win</div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-7 gap-2">
            {cards.slice(0, 7).map((card) => (
              <button
                key={card}
                onClick={() => handleCardClick(card)}
                className={`h-12 text-lg font-bold rounded-lg border border-gray-700 transition-colors ${
                  selectedCards.includes(card) ? "bg-blue-600 hover:bg-blue-700" : "bg-[#2a2a2a] hover:bg-[#3a3a3a]"
                }`}
              >
                {card}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {cards.slice(7).map((card) => (
              <button
                key={card}
                onClick={() => handleCardClick(card)}
                className={`h-12 text-lg font-bold rounded-lg border border-gray-700 transition-colors ${
                  selectedCards.includes(card) ? "bg-blue-600 hover:bg-blue-700" : "bg-[#2a2a2a] hover:bg-[#3a3a3a]"
                }`}
              >
                {card}
              </button>
            ))}
            <button
              onClick={() => setSelectedCards([])}
              className="h-12 text-sm font-bold bg-[#2a2a2a] hover:bg-[#3a3a3a] border border-gray-700 rounded-lg transition-colors"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Gradient Bar */}
        <div className="mt-6 h-8 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
      </div>
    </div>
  )
}

function UserGuide() {
  return (
    <div className="bg-[#1a1a1a] rounded-lg p-8 border border-gray-800">
      <h2 className="text-2xl font-bold mb-6">User Guide</h2>

      <div className="space-y-6">
        {/* Step 1 */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Step 1 - Enter Burn Card</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>If there's a burn card revealed on the table, please record the first burn card</li>
            <li>If you missed it, you can choose "Skip Burn Card" button, keeping this slightly impacts accuracy</li>
            <li>The burn card is typically revealed at the start of each shoe</li>
          </ul>
        </div>

        {/* Step 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Step 2 - Enter Dealt Cards</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Manually add cards in order, including:</li>
            <li className="ml-6">1. Player's first card, then Player and Banker</li>
            <li className="ml-6">2. Banker's first card</li>
            <li className="ml-6">3. Follow with draw a third card please include those as well</li>
          </ul>
        </div>

        {/* Step 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Step 3 - Get AI Recommendation</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>The system gives clear, direct recommendations</li>
            <li>1. Best Choice: Follow the highlighted recommendation</li>
            <li>2. Suggested bets: See the recommended number of units</li>
            <li>3. Win Rate: Specific % to indicate in your probability from the base odds</li>
          </ul>
        </div>

        {/* Step 4 */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Step 4 - Place Bets as Recommended</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>The system handles your data calculations and strategic decision-making. You simply need to:</li>
            <li>1. Follow the bet size recommendations</li>
            <li>2. Stick to the suggested bet type (Player, Banker, or occasionally Tie)</li>
            <li>3. Trust the math — avoid impulsive bets outside the system's advice</li>
          </ul>
        </div>

        {/* Strategy Overview */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Strategy Overview</h3>
          <p className="text-gray-300 mb-3">
            Our AI uses advanced probability models and card count. Low variance, steady overall profit. Suitable for
            low bankroll players.
          </p>
          <p className="text-gray-300 mb-3">
            <span className="font-semibold">Optimal Strategy:</span> Recommends PLAYER bets. Medium variance and higher
            potential return. Suitable for moderate bankroll.
          </p>
          <p className="text-gray-300">
            <span className="font-semibold">Progressive Strategy:</span> Increases bet after a loss, higher risk,
            highest potential return. Suitable for experienced players.
          </p>
        </div>

        {/* Expertise */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Expertise</h3>
          <p className="text-gray-300 mb-3">
            <span className="font-semibold">For Expertise:</span> Yes, believe: "Let high help you win — not luck."
          </p>
          <p className="text-gray-300">
            By applying mathematical models to precisely calculate win rate and expected value, the system gives you the
            most profitable opportunity in every round.
          </p>
        </div>
      </div>
    </div>
  )
}

function FAQ() {
  const [openItems, setOpenItems] = useState({})

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const faqItems = [
    {
      question: "Does the Baccarat prediction software always recommend betting on Player or Banker?",
      answer:
        "YES. That's completely normal. Our AI Baccarat card prediction based on mathematical models and card counting. It calculates the expected value for each bet type. For example, if many low cards (A, 2, 3, 4, 5) have already been dealt, and there are still lots of high cards (6, 7, 8, 9) left in the shoe, the system will favor Player bets. This is because the remaining high cards increase the probability of the Player winning. A truly effective prediction system doesn't just \"follow trends\" — it looks for mathematical edges where the probability is skewed, which is the smart way to bet with real upward edge.",
    },
    {
      question: "What if I enter the wrong cards and click submit?",
      answer:
        "In most online and live Baccarat games, the BigRoad (or option closes when betting ends. This prevents you from entering cards after the round has started. If you accidentally enter the wrong cards, you can simply reset the system and start fresh from the next round. The system is designed to be forgiving of these errors and keeps you on track.",
    },
    {
      question: "Which betting strategy should I use in Baccarat?",
      answer:
        "We offer three betting strategies:\n\n- Standard - Best for beginners, lower risk, and very stable.\n- Aggressive - Only for players with a large bankroll, aiming for high returns but with a controlled risk and avoid bankroll drawdowns. This is a conservative, long-term strategy.\n- Progressive - Riskier but with a chance of doubling a strategy that matches your bankroll and play style.",
    },
    {
      question: "Why can't I bet on Tie/Small in later rounds?",
      answer:
        "In most online and live Baccarat games, the BigRoad (or option) closes when betting ends. This prevents you from entering cards after the round has started. If you accidentally enter the wrong cards, you can simply reset the system and start fresh from the next round. The system is designed to be forgiving of these errors and keeps you on track.",
    },
    {
      question: "Why does the system always recommend I split for the 'Baccarat Tie' bet?",
      answer:
        "The Baccarat Tie bet has high payout but very low odds, making them high risk for most players. Our system is built to maximize your overall return, not to chase low-probability bets. However, if you want to control risk and avoid large bankroll drawdowns, this is a conservative, long-term approach.",
    },
    {
      question: "Does skipping the burn card affect win rates?",
      answer:
        "Yes, but only slightly. The burn card is one piece of starting information. If you skip it, the AI still has enough data to return to optimal accuracy, and work rolling some strategy profitably.",
    },
  ]

  const faqItems2 = [
    {
      question: "Why use Baccarat Prediction Software?",
      answer:
        "Using a prediction software can be one of the most effective and practical tools for serious players. By tracking the cards already dealt, it allows you to make better-informed decisions about when to bet on Player or Banker. Analysis shows that card counting in Baccarat can shift the house edge in your favor — even if only by a small margin. Over hundreds or thousands of hands, this edge compounds into real, measurable profit. If you're serious about playing Baccarat long-term, using prediction software is one of the smartest moves you can make. It removes emotion, tracks data in real-time, and gives you an edge most casual players will never have. It's not about \"beating the system\" — it's about playing smarter, with math on your side.",
    },
    {
      question:
        "Are real use of advanced Baccarat prediction software, and you can leverage these tools to improve your win rate and expected value?",
      answer:
        "Yes. Whether you're playing online or in a live casino, advanced Baccarat prediction software can help you make smarter, data-driven decisions. These tools use real-time card tracking, probability models, and AI-powered recommendations to give you an edge that most players don't have. The key is consistency — using the software correctly over many hands allows the math to work in your favor.",
    },
    {
      question: "What are the basic principles behind Baccarat prediction software?",
      answer:
        "Most AI-based Baccarat prediction is structured and real-time card counting. Using cards-based models and the Dragon Bonus side bet probability to identify which bets offer positive expected value. The software tracks every card dealt, updates the remaining deck composition, and calculates which outcome (Player, Banker, or Tie) is statistically more likely to occur next and edges your advantage. This kind of AI-driven analysis is far more accurate and faster than manual tracking, giving you a data-backed edge in real-time.",
    },
  ]

  return (
    <div className="space-y-6">
      {/* First FAQ Section */}
      <div className="bg-[#1a1a1a] rounded-lg border border-gray-800 overflow-hidden">
        <div className="bg-blue-600 p-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="text-2xl">📘</span>
            Baccarat Prediction Software - Frequently Asked Questions
          </h2>
        </div>
        <div className="p-6 space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-800 pb-4 last:border-0">
              <button
                onClick={() => toggleItem(`faq1-${index}`)}
                className="w-full flex items-start justify-between gap-4 text-left"
              >
                <span className="font-semibold text-white flex-1">★ {item.question}</span>
                {openItems[`faq1-${index}`] ? (
                  <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                )}
              </button>
              {openItems[`faq1-${index}`] && (
                <div className="mt-3 text-gray-300 whitespace-pre-line">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Second FAQ Section */}
      <div className="bg-[#1a1a1a] rounded-lg border border-gray-800 overflow-hidden">
        <div className="bg-blue-600 p-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="text-2xl">📘</span>
            What is Baccarat Prediction Software?
          </h2>
        </div>
        <div className="p-6 space-y-4">
          {faqItems2.map((item, index) => (
            <div key={index} className="border-b border-gray-800 pb-4 last:border-0">
              <button
                onClick={() => toggleItem(`faq2-${index}`)}
                className="w-full flex items-start justify-between gap-4 text-left"
              >
                <span className="font-semibold text-white flex-1">★ {item.question}</span>
                {openItems[`faq2-${index}`] ? (
                  <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                )}
              </button>
              {openItems[`faq2-${index}`] && (
                <div className="mt-3 text-gray-300 whitespace-pre-line">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
