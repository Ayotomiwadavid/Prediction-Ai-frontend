import React from 'react'
import { useState } from "react"
import Sidebar from "../Components/Sidebar"
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const AiSportPicks = () => {
  const [expandedSections, setExpandedSections] = useState([])

  const toggleSection = (index) => {
    if (expandedSections.includes(index)) {
      setExpandedSections(expandedSections.filter((i) => i !== index))
    } else {
      setExpandedSections([...expandedSections, index])
    }
  }

  const predictions = [
    {
      date: "Oct 1",
      time: "12:00 PM",
      team1: "Team A",
      team2: "Team B",
      prediction: "Team A Win",
      odds: "1.85",
      confidence: "75%",
    },
    {
      date: "Oct 1",
      time: "2:30 PM",
      team1: "Team C",
      team2: "Team D",
      prediction: "Draw",
      odds: "3.20",
      confidence: "68%",
    },
    {
      date: "Oct 1",
      time: "5:00 PM",
      team1: "Team E",
      team2: "Team F",
      prediction: "Team F Win",
      odds: "2.10",
      confidence: "72%",
    },
    {
      date: "Oct 2",
      time: "1:00 PM",
      team1: "Team G",
      team2: "Team H",
      prediction: "Team G Win",
      odds: "1.95",
      confidence: "70%",
    },
    {
      date: "Oct 2",
      time: "3:30 PM",
      team1: "Team I",
      team2: "Team J",
      prediction: "Team J Win",
      odds: "2.25",
      confidence: "65%",
    },
    {
      date: "Oct 2",
      time: "6:00 PM",
      team1: "Team K",
      team2: "Team L",
      prediction: "Draw",
      odds: "3.40",
      confidence: "60%",
    },
    {
      date: "Oct 3",
      time: "12:30 PM",
      team1: "Team M",
      team2: "Team N",
      prediction: "Team M Win",
      odds: "1.75",
      confidence: "78%",
    },
    {
      date: "Oct 3",
      time: "3:00 PM",
      team1: "Team O",
      team2: "Team P",
      prediction: "Team P Win",
      odds: "2.40",
      confidence: "63%",
    },
  ]

  const faqSections = [
    {
      title: "What is Mysports.AI and How Does AI Help Make AI Free Sports Picks Every Day?",
      content: `Mysports.AI is an advanced artificial intelligence platform designed to provide free, data-driven sports betting predictions every single day. Our AI analyzes vast amounts of historical data, current team performance, player statistics, weather conditions, and countless other variables to generate accurate predictions for various sports events.

The AI uses machine learning algorithms that continuously improve by learning from past predictions and outcomes. This means our predictions become more accurate over time as the system identifies patterns and trends that human analysts might miss. Unlike traditional betting tips that rely on gut feelings or limited analysis, our AI processes millions of data points in seconds to provide you with the most informed predictions possible.

Every day, our platform updates with new predictions across multiple sports including football, basketball, baseball, hockey, and more. These predictions are completely free to access, making professional-grade sports betting analysis available to everyone, regardless of their experience level or budget.`,
    },
    {
      title: "How Do I Sign Up for Mysports.AI's Free Sports Betting Picks?",
      content: `Signing up for Mysports.AI is quick, easy, and completely free. Simply click the "Sign Up" button in the top right corner of our website. You'll be asked to provide basic information including your email address and create a password. Once you verify your email, you'll have immediate access to all our free AI-generated sports picks.

After signing up, you can customize your experience by selecting your favorite sports and teams. This allows our platform to prioritize predictions that matter most to you. You'll also receive daily email notifications with the latest picks, ensuring you never miss an opportunity.

For those who want even more features, we offer premium subscription plans that include advanced analytics, detailed breakdowns of each prediction, and access to our expert community. However, our core prediction service remains free for all users, demonstrating our commitment to making AI-powered sports betting accessible to everyone.`,
    },
    {
      title: "What Background Data Does Mysports.AI Use for Its Predictions?",
      content: `Mysports.AI's prediction engine draws from an extensive database of sports information spanning decades. Our AI analyzes team performance statistics including win-loss records, scoring averages, defensive capabilities, and home/away performance. We also factor in individual player statistics, injury reports, and lineup changes that could impact game outcomes.

Beyond basic statistics, our AI considers contextual factors such as weather conditions for outdoor sports, travel schedules, rest days between games, historical head-to-head matchups, and even psychological factors like team momentum and pressure situations. We also incorporate real-time betting market data to understand how odds are moving and what the broader betting community expects.

Our data sources include official league statistics, verified sports databases, news outlets, and proprietary data collection systems. All data is continuously updated and verified for accuracy. The AI then processes this information using sophisticated algorithms that identify correlations and patterns, ultimately generating predictions with associated confidence levels to help you make informed betting decisions.`,
    },
    {
      title: "Can AI Help Me Identify Value Bets?",
      content: `One of the most powerful features of Mysports.AI is its ability to identify value bets - situations where the odds offered by bookmakers are higher than the actual probability of an outcome occurring. Our AI compares its calculated probabilities against current betting odds to highlight opportunities where you can get better value for your wagers.

For example, if our AI calculates that a team has a 60% chance of winning, but the bookmaker's odds imply only a 50% chance, this represents a value betting opportunity. Over time, consistently betting on value opportunities can significantly improve your long-term profitability, even if individual bets don't always win.

Our platform displays value ratings for each prediction, making it easy to identify the best betting opportunities. Premium subscribers also get access to detailed value analysis, including expected value calculations and recommended stake sizes based on the Kelly Criterion. This systematic approach to betting helps remove emotion from your decisions and focuses on mathematical advantage.`,
    },
    {
      title: "Can AI Predict Football (Soccer) Results?",
      content: `Yes, Mysports.AI specializes in football (soccer) predictions across leagues worldwide. Football is one of the most data-rich sports, making it ideal for AI analysis. Our system analyzes team form, player performance, tactical approaches, historical matchups, and numerous other factors to predict match outcomes.

Our football predictions cover major leagues including the English Premier League, La Liga, Serie A, Bundesliga, Ligue 1, and many others. We provide predictions for various betting markets including match result (1X2), both teams to score, over/under goals, correct score, and more. Each prediction comes with a confidence rating and detailed reasoning.

The AI is particularly effective at identifying upsets and unexpected results by recognizing patterns that traditional analysis might overlook. For instance, it might identify that a particular team consistently performs better against certain tactical formations, or that specific weather conditions favor one playing style over another. This depth of analysis gives you a significant edge when placing football bets.`,
    },
    {
      title: "Why Subscribe to Mysports.AI?",
      content: `While our basic predictions are free, subscribing to Mysports.AI unlocks a wealth of additional features that serious bettors will find invaluable. Premium subscribers get access to detailed prediction breakdowns showing exactly why the AI made each pick, including all the key factors that influenced the decision.

Subscribers also receive advanced statistics and analytics tools, including historical performance tracking, bankroll management features, and personalized betting strategies based on your preferences and risk tolerance. You'll get early access to predictions before they're released to free users, giving you the opportunity to secure the best odds.

Additionally, premium members join an exclusive community of serious bettors where you can share insights, discuss strategies, and learn from others. You'll also receive priority customer support and access to educational resources including betting guides, strategy articles, and webinars with sports betting experts. The subscription pays for itself quickly when you consider the improved win rate and value betting opportunities it provides.`,
    },
    {
      title: "What Subscription Plans Does Mysports.AI Offer?",
      content: `Mysports.AI offers flexible subscription plans to suit different needs and budgets. Our Basic plan is completely free and includes daily AI predictions for major sports, basic statistics, and access to our prediction archive.

Our Premium plan, priced at $19.99 per month, includes everything in the Basic plan plus detailed prediction analysis, advanced statistics, early access to picks, value bet identification, and access to our premium community. This plan is perfect for regular bettors who want to take their betting to the next level.

For serious bettors and professionals, we offer a Pro plan at $49.99 per month. This includes all Premium features plus personalized betting strategies, one-on-one consultations with our data scientists, API access for automated betting systems, and priority support. We also offer annual subscriptions with significant discounts - save 20% by paying yearly instead of monthly. All paid plans come with a 30-day money-back guarantee, so you can try them risk-free.`,
    },
    {
      title: "Why Choose our Bets, Handicap or the Best Tips? Can pick odds with Mysports.AI?",
      content: `Mysports.AI stands out from traditional tipsters and betting services in several key ways. First, our predictions are generated by AI that analyzes millions of data points objectively, without the biases and emotions that can affect human tipsters. This results in more consistent and reliable predictions over time.

Second, we offer complete transparency. Every prediction comes with a confidence rating and detailed explanation of the factors that influenced it. You can track our historical performance and see exactly how accurate our predictions have been across different sports and bet types. Many traditional tipsters don't provide this level of accountability.

Third, our platform covers a much wider range of sports and betting markets than any individual tipster could. Whether you're interested in football, basketball, tennis, or niche sports, our AI provides predictions across hundreds of events daily. We also cover various bet types including handicaps, over/under, and prop bets, giving you flexibility in how you bet.

Finally, our odds comparison feature helps you find the best available odds across multiple bookmakers for each prediction. This ensures you're always getting maximum value for your bets. Combined with our value bet identification system, this gives you a significant edge over betting with a single bookmaker or following traditional tipsters.`,
    },
    {
      title: "Which Games Are Best for Interactive Predictions?",
      content: `Interactive predictions work best for sports and events with abundant historical data and clear statistical patterns. Football (soccer) is excellent for interactive predictions due to the wealth of data available and the relatively predictable nature of league competitions. Our AI performs exceptionally well with major football leagues where team statistics, player performance, and tactical information are comprehensive.

Basketball is another sport where interactive predictions excel. The high-scoring nature of basketball and the frequency of games provide plenty of data for the AI to analyze. Our predictions for NBA games, for example, have shown strong accuracy rates, particularly for over/under and spread betting.

Tennis is ideal for interactive predictions because it's an individual sport with clear head-to-head statistics. Our AI can analyze player form, surface preferences, and historical matchups to generate highly accurate predictions. Baseball also works well due to its statistical nature and the importance of pitcher matchups, which our AI can analyze in detail.

For best results, focus on major leagues and competitions where data quality is highest. While our AI can make predictions for any sport, accuracy tends to be higher for well-established leagues with comprehensive statistics. We continuously update our models and expand coverage to new sports and leagues based on data availability and user demand.`,
    },
    {
      title: "FAQ",
      content: `**How accurate are Mysports.AI predictions?**
Our overall accuracy rate varies by sport and bet type, but typically ranges from 65-75% for major sports. We provide detailed accuracy statistics for each sport and prediction type on our platform, updated daily.

**Can I use Mysports.AI predictions for live betting?**
Yes! We offer live predictions for many events, updated in real-time as games progress. Our AI adjusts predictions based on current score, time remaining, and in-game statistics.

**Do you offer predictions for all sports?**
We cover major sports including football, basketball, baseball, hockey, tennis, and more. We're constantly expanding our coverage based on user demand and data availability.

**How often are predictions updated?**
Predictions are updated multiple times daily as new information becomes available. Major updates occur in the morning and evening, with additional updates for breaking news like injury reports.

**Can I automate my betting using your predictions?**
Pro plan subscribers have API access that allows integration with automated betting systems. However, we always recommend reviewing predictions personally before placing bets.`,
    },
    {
      title: "Can I actually make consistent profits using Mysports.AI?",
      content: `While no prediction system can guarantee profits (sports betting always involves risk), Mysports.AI significantly improves your chances of long-term profitability compared to betting without data-driven analysis. Our users who follow proper bankroll management and focus on value bets report positive results over extended periods.

The key to consistent profits is discipline. This means betting only when our AI identifies genuine value, managing your bankroll properly (never betting more than 1-5% of your total bankroll on a single bet), and maintaining a long-term perspective. Short-term variance is inevitable in sports betting, but our AI's edge becomes apparent over hundreds of bets.

We provide tools to help you track your betting performance, including profit/loss graphs, ROI calculations, and detailed bet history. Many of our premium subscribers have turned sports betting from a casual hobby into a consistent income stream by following our predictions systematically and maintaining discipline.

That said, we always encourage responsible gambling. Only bet what you can afford to lose, and remember that past performance doesn't guarantee future results. Our AI provides an edge, but sports will always have an element of unpredictability - that's what makes them exciting!`,
    },
    {
      title: "What makes Mysports.AI different from other prediction sites?",
      content: `Mysports.AI distinguishes itself through several unique features. First, our predictions are generated by advanced machine learning algorithms, not human tipsters. This eliminates bias and ensures consistent, data-driven analysis. Our AI processes millions of data points for each prediction, far more than any human analyst could consider.

Second, we offer complete transparency. You can see exactly how our predictions have performed historically, broken down by sport, league, and bet type. We don't hide our losses or cherry-pick our best results - every prediction is tracked and displayed publicly. This level of accountability is rare in the sports betting industry.

Third, our platform is designed for both casual bettors and professionals. Free users get quality predictions to improve their betting, while premium subscribers access advanced tools like value bet identification, detailed analytics, and personalized strategies. We also offer educational resources to help you understand sports betting concepts and improve your overall betting knowledge.

Finally, our community aspect sets us apart. Premium members can connect with other serious bettors, share insights, and learn from each other's experiences. We also host regular webinars and Q&A sessions with our data scientists, giving you direct access to the experts behind our AI. This combination of cutting-edge technology, transparency, and community makes Mysports.AI the most comprehensive sports betting platform available.`,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Sidebar />

      <div className="ml-64">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="p-6">
          {/* Title and Filter Bar */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-4">AI Sports Picks | Every Game Everyday</h1>

            <div className="flex items-center gap-4 mb-6">
              <button className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 flex items-center gap-2">
                <span>⚽</span>
                <span>Barcelona</span>
              </button>
              <button className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 flex items-center gap-2">
                <span>⚽</span>
                <span>Real Oviedo</span>
              </button>
              <button className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700">Join Group</button>
            </div>
          </div>

          {/* Predictions Table */}
          <div className="bg-gray-900 rounded-lg overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Date</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Time</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Match</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Prediction</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Odds</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Confidence</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {predictions.map((pred, index) => (
                    <tr key={index} className="hover:bg-gray-800">
                      <td className="px-4 py-4 text-sm">{pred.date}</td>
                      <td className="px-4 py-4 text-sm">{pred.time}</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                          <span className="text-sm">{pred.team1}</span>
                          <span className="text-gray-500">vs</span>
                          <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                          <span className="text-sm">{pred.team2}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm">{pred.prediction}</td>
                      <td className="px-4 py-4 text-sm font-semibold text-green-400">{pred.odds}</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-gray-700 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: pred.confidence }}></div>
                          </div>
                          <span className="text-sm">{pred.confidence}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm">
                          Subscribe
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-6">
            {faqSections.map((section, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800 transition-colors"
                >
                  <h2 className="text-lg font-semibold text-left">{section.title}</h2>
                  <svg
                    className={`w-5 h-5 transition-transform ${expandedSections.includes(index) ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedSections.includes(index) && (
                  <div className="px-6 py-4 border-t border-gray-800">
                    <div className="text-gray-300 whitespace-pre-line leading-relaxed">{section.content}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

export default AiSportPicks
