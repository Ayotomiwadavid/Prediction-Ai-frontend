import React from 'react'
import { Card, CardHeader, CardDescription } from './ui/card'
import { Star } from 'lucide-react'

const Testimonial = () => {
  return (
     <section id="testimonials" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted AI Picks, Proven by Members</h2>
            <p className="text-xl text-muted-foreground">Join thousands of winning bettors</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold">MJ</span>
                  </div>
                  <div>
                    <div className="font-semibold">Mike Johnson</div>
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <CardDescription>
                  "Up $4,200 this month using MySports.ai picks. The accuracy is incredible and the mobile app makes it
                  so easy to follow."
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold">SR</span>
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Rodriguez</div>
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <CardDescription>
                  "Finally found a service that actually works. 8 wins in a row last week. The AI predictions are spot
                  on!"
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold">DL</span>
                  </div>
                  <div>
                    <div className="font-semibold">David Lee</div>
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <CardDescription>
                  "Best investment I've made. The detailed analysis and confidence ratings help me make smarter bets."
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
  )
}

export default Testimonial
