import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const CTA = () => {
  return (
    <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Join Free - Get AI Sports Betting Picks</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start with our free plan and see why thousands trust MySports.ai for winning predictions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button className="glow-effect">Get Started Free</Button>
            </div>
            <p className="text-sm text-muted-foreground">
              No credit card required • 3 free picks per week • Cancel anytime
            </p>
          </div>
        </div>
      </section>
  )
}

export default CTA
