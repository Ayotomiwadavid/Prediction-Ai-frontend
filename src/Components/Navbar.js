import React, { useContext } from 'react'
import { Button } from './ui/button'
import { PanelRight, Target } from "lucide-react"
import { AppContext } from '../context/StateContext'
import Sidebar from './Sidebar'

const Navbar = () => {
    const { collapseMenu, setCollapseMenu } = useContext(AppContext);

    return (
        < header className="border-b border-border/50 backdrop-blur-sm flex-row-reverse items-center justify-between sticky top-0 z-50" >
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <PanelRight className='cursor-pointer' onClick={() => {
                        setCollapseMenu(!collapseMenu)
                    }} />
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <Target className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-xl font-bold">MySports.ai</span>
                </div>
                <nav className="hidden md:flex items-center space-x-6">
                    <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                        Features
                    </a>
                    <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                        Pricing
                    </a>
                    <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                        Reviews
                    </a>
                    <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                        FAQ
                    </a>
                </nav>
                <div className="flex items-center space-x-3">
                    <Button variant="ghost" size="sm">
                        Sign In
                    </Button>
                    <Button size="sm" className="glow-effect">
                        Get Started
                    </Button>
                </div>
            </div>
            <Sidebar />
        </header>
    )
}

export default Navbar
