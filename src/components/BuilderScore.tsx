import { Card, CardContent } from "@/components/ui/card"
import { Info } from "lucide-react"
import { Loading } from "./Loading"

interface BuilderScoreProps {
  text?: string
  score: number
  isRequired?: boolean
  walletAddress?: string
  loading?: boolean
}

export default function BuilderScore({ text, score, isRequired, walletAddress, loading }: BuilderScoreProps) {
  const gradientColors = isRequired
    ? "from-blue-400 to-blue-600"
    : score >= (isRequired ? 0 : score) // Always true for user score, comparing with required score otherwise
      ? "from-green-400 to-green-600"
      : "from-red-400 to-red-600"

  return (
    <Card className="w-28 h-auto bg-white shadow-md rounded-xl overflow-hidden p-2">
      <CardContent className="p-0 flex flex-col items-center justify-center h-full">
        <div className={`w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 ${gradientColors} rounded-2xl shadow-lg flex items-center justify-center transform rotate-45 mb-2`}>
          <span className="text-white text-2xl font-bold transform -rotate-45">
            {loading ? <Loading /> : score}
          </span>
        </div>
        <p className="text-sm font-medium text-gray-700 text-center">{text ? text : 'Your Builder Score'}</p>
        {(!isRequired && walletAddress) && (
          <a
            href={`https://passport.talentprotocol.com/profile/${walletAddress}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Info className="h-5 w-5 text-blue-500 hover:text-blue-600" />
          </a>
        )}
      </CardContent>
    </Card>
  )
}