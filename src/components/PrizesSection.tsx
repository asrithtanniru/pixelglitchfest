'use client'

import { Card } from '@/components/ui/card'
import { FaTrophy, FaMedal } from 'react-icons/fa'

const prizes = [
  {
    place: '1st Place',
    title: 'Champion',
    amount: '?',
    color: 'chart-1',
    icon: FaTrophy,
    features: ['Revealing Soon'],
  },
  {
    place: '2nd Place',
    title: 'Runner-Up',
    amount: '?',
    color: 'chart-2',
    icon: FaMedal,
    features: ['Revealing Soon'],
  },
]

export default function PrizesSection() {
  return (
    <section className="py-12 md:py-16 bg-secondary-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-tech font-bold text-foreground mb-4">Epic Rewards</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 max-w-4xl mx-auto">
          {prizes.map((prize, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 text-center relative overflow-hidden flex flex-col justify-center items-center transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              <div className={`absolute top-0 left-0 w-full h-2 bg-${prize.color}`}></div>
              <div className="flex flex-col justify-center items-center flex-1">
                <div
                  className={`text-4xl md:text-5xl mb-4 md:mb-6 inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-base bg-${prize.color} text-main-foreground border-2 border-border shadow-shadow`}
                >
                  <prize.icon />
                </div>
                <h3 className="text-lg md:text-xl font-tech font-bold text-foreground/60 mb-2 md:mb-3">{prize.place}</h3>
                <h4 className="text-2xl md:text-3xl font-tech font-bold text-foreground mb-3 md:mb-4 px-2">{prize.title}</h4>
                {/* <div className="text-3xl font-tech font-bold text-chart-3 mb-6">{prize.amount}</div> */}
                <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  {prize.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center gap-2 text-sm md:text-base font-tech text-foreground/70">
                      <div className={`w-2 h-2 md:w-3 md:h-3 bg-${prize.color} rounded-full`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
