import React from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Sidebar } from './Sidebar'

const Herosection = () => {
  return (
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto relative z-10">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">🚀 AI-Powered Sports Predictions</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            AI Sports Picks &<br />
            <span className="gradient-text">Predictions</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Get winning sports betting predictions powered by advanced AI algorithms. Join thousands of successful
            bettors using our proven prediction model.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 glow-effect">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              View Live Picks
            </Button>
          </div>

          {/* Mobile App Mockups */}
          <div className="flex justify-center items-center gap-8 mt-16">
            <div className="relative">
              <div className="w-64 h-[500px] bg-card border border-border rounded-3xl p-4 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-b from-primary/20 to-background rounded-2xl p-4 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-semibold">Today's Picks</div>
                    <Badge className="bg-primary text-primary-foreground">Live</Badge>
                  </div>
                  <div className="space-y-3 flex-1">
                    <div className="bg-secondary/50 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Lakers vs Warriors</span>
                        <span className="text-primary text-sm font-bold">92%</span>
                      </div>
                      <div className="text-xs text-muted-foreground">Over 215.5 Points</div>
                    </div>
                    <div className="bg-secondary/50 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Chiefs vs Bills</span>
                        <span className="text-primary text-sm font-bold">87%</span>
                      </div>
                      <div className="text-xs text-muted-foreground">Chiefs -3.5</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="w-64 h-[500px] bg-card border border-border rounded-3xl p-4 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-b from-accent/20 to-background rounded-2xl p-4 flex flex-col">
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-primary">$2,847</div>
                    <div className="text-sm text-muted-foreground">This Month</div>
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex justify-between text-sm">
                      <span>Win Rate</span>
                      <span className="text-primary font-semibold">73%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>ROI</span>
                      <span className="text-primary font-semibold">+24%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Streak</span>
                      <span className="text-primary font-semibold">7W</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Herosection
