import React from 'react'

const Header = () => {
    return (
        <header className="bg-gray-900 border-b border-gray-800 px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-green-500 rounded"></div>
                        <span className="text-white font-semibold">MySports.AI</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm">
                        <span>🇺🇸 EN</span>
                        <span>📍 United States</span>
                        <span>💰 American</span>
                    </div>
                    <button className="px-4 py-2 text-green-400 border border-green-400 rounded hover:bg-green-400 hover:text-black transition-colors">
                        Log In
                    </button>
                    <button className="px-4 py-2 bg-green-500 text-black rounded hover:bg-green-600 transition-colors">
                        TRY FOR FREE
                    </button>
                </div>
            </div>

            <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                    <span className="text-red-500">⚾ MIN</span>
                    <span className="text-gray-400">vs</span>
                    <span className="text-red-500">🏈 PHI</span>
                    <button className="px-3 py-1 bg-purple-600 text-white rounded text-sm">Join Group</button>
                </div>
            </div>
        </header>
    )
}

export default Header
