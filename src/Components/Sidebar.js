import React from 'react'
import { Star, Users, MessageCircle, Phone, DollarSignIcon, CircleGauge } from "lucide-react"
import { Link } from 'react-router'

const Sidebar = () => {
  const menuItems = [
    { icon: Star, label: "Casino AI", active: false },
    { icon: Users, label: "Subscribe", active: false },
    { icon: MessageCircle, label: "AI Now", active: false },
    { icon: DollarSignIcon, label: "Bet Now", active: false },
    { icon: Phone, label: "Contact Us", active: false },
    { icon: CircleGauge, label: "Help & Resources", active: false },
  ]

  return (
    <div className="w-64 bg-gray-900 h-screen fixed left-0 top-0 border-r border-gray-800">
      {/* Logo */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-500 rounded"></div>
          <span className="text-white font-semibold">MySports.ai</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-400 text-sm mb-2">AI Prediction</div>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.label === "Bet Now" ? "/betting" : "#"}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer 
                ${item.active ? "bg-purple-600 text-white"
                  : "text-gray-300 hover:bg-gray-800"}`}
            >
              <item.icon className="w-4 h-4" />
              <span className="text-sm">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Betting Options */}
        <div className="mt-8">
          <div className="space-y-2">
            <div className="flex items-center justify-between px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-lg cursor-pointer">
              <span className="text-sm">DET</span>
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-xs">Live</span>
                <span className="text-xs">+1.5</span>
              </div>
            </div>
            <div className="flex items-center justify-between px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-lg cursor-pointer">
              <span className="text-sm">CHI</span>
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-xs">Live</span>
                <span className="text-xs">-1.5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Options */}
        <div className="mt-8 space-y-2">
          <div className="flex items-center justify-between px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-lg cursor-pointer">
            <span className="text-sm">CHW</span>
            <div className="flex items-center gap-2">
              <span className="text-green-400 text-xs">Live</span>
              <span className="text-xs">-1.5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
