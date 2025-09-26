import React from 'react'
import { TrendingUp, Shield, Zap, Award } from 'lucide-react'

const Benefit = () => {
  return (
       <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Benefits of Using MySports.ai for Sports Betting</h2>
            <p className="text-xl text-muted-foreground">Why thousands choose our AI-powered predictions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Data-Driven Predictions</h3>
                  <p className="text-muted-foreground">
                    Our AI analyzes over 10,000 data points per game including player performance, weather conditions,
                    team dynamics, and historical trends.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Risk Management</h3>
                  <p className="text-muted-foreground">
                    Built-in bankroll management and risk assessment tools help you bet responsibly and maximize
                    long-term profits.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
                  <p className="text-muted-foreground">
                    Get instant notifications when line movements or injury reports affect our predictions, keeping you
                    ahead of the market.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
                  <p className="text-muted-foreground">
                    3+ years of consistent profitability with transparent results and detailed performance tracking for
                    every prediction.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border/50 rounded-2xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">This Week's Performance</h3>
                <div className="text-4xl font-bold text-primary">12-3</div>
                <div className="text-muted-foreground">80% Win Rate</div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                  <span>NBA</span>
                  <span className="text-primary font-semibold">4-1</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                  <span>NFL</span>
                  <span className="text-primary font-semibold">5-1</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                  <span>NHL</span>
                  <span className="text-primary font-semibold">3-1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Benefit
