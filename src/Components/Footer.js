import React from 'react'

const Footer = () => {
  return (
            <footer className="border-t border-gray-800 pt-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                  <h4 className="text-white font-semibold mb-4">Company</h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>
                      <a href="#" className="hover:text-white">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white">
                        User Agreement
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-4">Product</h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>
                      <a href="#" className="hover:text-white">
                        AI Predictions
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white">
                        Free Service
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white">
                        Premium
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white">
                        Betting Data
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-4">Resource</h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>
                      <a href="#" className="hover:text-white">
                        Help
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white">
                        News
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white">
                        Betting Tips
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-4">Support</h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>
                      <a href="#" className="hover:text-white">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-gray-800">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded"></div>
                  <span className="text-white font-semibold">MySports.AI</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="text-center text-gray-400 text-sm mt-8">
                <p>©2025 by MySports.AI</p>
                <div className="flex justify-center gap-4 mt-2">
                  <a href="#" className="hover:text-white">
                    User Agreement
                  </a>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </div>
                <p className="mt-4 text-xs leading-relaxed max-w-4xl mx-auto">
                  MySports.AI provides sports betting predictions and analysis for entertainment purposes only. We do
                  not offer or facilitate real money betting and are not affiliated with any gambling operators. All
                  predictions are for informational purposes only and should not be considered as guaranteed outcomes.
                  Please bet responsibly and within your means. For assistance with problem gambling, please visit the
                  National Council on Problem Gambling at ncpgambling.org.
                </p>
              </div>
            </footer>
  )
}

export default Footer
