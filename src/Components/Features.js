import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card'
import { BarChart3, Smartphone, Target } from 'lucide-react'

const Features = () => {
  return (
    <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">AI Sports Picks</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced machine learning algorithms analyze thousands of data points to deliver winning predictions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Real-Time Analysis</CardTitle>
                <CardDescription>
                  Live data processing from multiple sources including player stats, weather, and team performance
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>High Accuracy</CardTitle>
                <CardDescription>
                  Our AI model maintains a 73% win rate across all major sports with consistent profitability
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Mobile App</CardTitle>
                <CardDescription>
                  Get instant notifications and access your picks anywhere with our iOS and Android apps
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
  )
}

export default Features
