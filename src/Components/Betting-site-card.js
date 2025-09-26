import { Star } from "lucide-react"

export default function BettingSiteCard({
  logo,
  name,
  bonus,
  description,
  rating,
  ratingCount,
  claimAmount,
  bgColor = "bg-gray-800",
}) {
  return (
    <div className={`${bgColor} rounded-lg p-6 border border-gray-700`}>
      {/* Logo and Name */}
      <div className="flex items-center justify-center mb-4">
        <div className="text-center">
          {logo}
          <h3 className="text-white font-semibold mt-2">{name}</h3>
        </div>
      </div>

      {/* Bonus */}
      <div className="text-center mb-4">
        <div className="text-green-400 text-2xl font-bold">{bonus}</div>
      </div>

      {/* Description */}
      <div className="text-gray-300 text-sm text-center mb-4 min-h-[60px]">{description}</div>

      {/* Rating */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-600"}`}
            />
          ))}
        </div>
        <span className="text-gray-400 text-sm">{rating}</span>
        <span className="text-gray-500 text-xs">({ratingCount})</span>
      </div>

      {/* Claim Button */}
      <div className="text-center">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold w-full">
          Claim {claimAmount}
        </button>
      </div>
    </div>
  )
}
