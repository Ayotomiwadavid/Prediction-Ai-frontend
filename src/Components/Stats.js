import React from 'react'

const Stats = () => {
  return (
     <section className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Pick Your Winning AI Sports Betting Picks</h2>
            <p className="text-xl text-muted-foreground">Proven results across all major sports</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">73%</div>
              <div className="text-muted-foreground">Win Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">+24%</div>
              <div className="text-muted-foreground">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$2.4M</div>
              <div className="text-muted-foreground">Total Winnings</div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Stats
