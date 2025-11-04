'use client'

import { Card } from '@/components/ui/card'
import { FaTrophy, FaMedal } from 'react-icons/fa'

const prizes = [
  {
    place: '1st Place',
    title: 'Grand Champion',
    amount: '?',
    color: 'chart-1',
    icon: FaTrophy,
    features: ['Cash Prize', 'Certificate', 'Swag'],
  },
  {
    place: '2nd Place',
    title: 'Rising Star',
    amount: '?',
    color: 'chart-2',
    icon: FaMedal,
    features: ['Cash Prize', 'Certificate', 'Swag'],
  },
]

// const specialAwards = [
//   {
//     title: 'Best Art & Design',
//     amount: '$500',
//     icon: FaPalette,
//     color: 'chart-4',
//   },
//   {
//     title: 'Best Technical Innovation',
//     amount: '$500',
//     icon: FaCog,
//     color: 'chart-5',
//   },
//   {
//     title: 'Best Newcomer Team',
//     amount: '$500',
//     icon: FaStar,
//     color: 'chart-1',
//   },
//   {
//     title: "People's Choice",
//     amount: '$500',
//     icon: FaHeart,
//     color: 'chart-2',
//   },
// ]

export default function PrizesSection() {
  return (
    <section className="py-16 bg-secondary-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-tech font-bold text-foreground mb-4">Epic Rewards</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {prizes.map((prize, index) => (
            <Card key={index} className="p-8 text-center relative overflow-hidden flex flex-col justify-center items-center transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <div className={`absolute top-0 left-0 w-full h-2 bg-${prize.color}`}></div>
              <div className="flex flex-col justify-center items-center flex-1">
                <div className={`text-4xl mb-4 inline-flex items-center justify-center w-16 h-16 rounded-base bg-${prize.color} text-main-foreground border-2 border-border shadow-shadow`}>
                  <prize.icon />
                </div>
                <h3 className="text-lg font-tech font-bold text-foreground/60 mb-2">{prize.place}</h3>
                <h4 className="text-2xl font-tech font-bold text-foreground mb-2">{prize.title}</h4>
                <div className="text-3xl font-tech font-bold text-chart-3 mb-6">{prize.amount}</div>
                <ul className="space-y-2 mb-6">
                  {prize.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center gap-2 text-sm font-tech text-foreground/70">
                      <div className={`w-2 h-2 bg-${prize.color} rounded-full`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
        {/* 
        <div className="mb-12">
          <h3 className="text-2xl font-tech font-bold text-center text-foreground mb-8">Special Category Awards</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialAwards.map((award, index) => (
              <Card key={index} className="p-6 text-center flex flex-col justify-center items-center hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                <div className={`text-2xl mb-3 inline-flex items-center justify-center w-12 h-12 rounded-base bg-${award.color} text-main-foreground border-2 border-border shadow-shadow`}>
                  <award.icon />
                </div>
                <h4 className="text-lg font-tech font-bold text-foreground mb-2">{award.title}</h4>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
