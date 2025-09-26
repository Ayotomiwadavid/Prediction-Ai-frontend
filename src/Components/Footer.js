import React from 'react'

const Footer = () => {
  return (
        <footer className="px-6 py-12 bg-gray-900 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">MySports.AI</h3>
                <p className="text-gray-400">AI-powered sports predictions for better betting decisions.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Product</h4>
                <div className="space-y-2">
                  <div className="text-gray-400">Features</div>
                  <div className="text-gray-400">Pricing</div>
                  <div className="text-gray-400">API</div>
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <div className="space-y-2">
                  <div className="text-gray-400">About</div>
                  <div className="text-gray-400">Contact</div>
                  <div className="text-gray-400">Careers</div>
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Legal</h4>
                <div className="space-y-2">
                  <div className="text-gray-400">Privacy Policy</div>
                  <div className="text-gray-400">Terms of Service</div>
                  <div className="text-gray-400">Disclaimer</div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">© 2025 MySports.AI. All rights reserved.</p>
            </div>
          </div>
        </footer>
  )
}

export default Footer
