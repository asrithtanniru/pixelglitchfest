'use client'

import { Card } from '@/components/ui/card'
import { FaFlag, FaUsers, FaCode, FaCoffee, FaChartBar, FaMicrophone, FaTrophy, FaLaptopCode, FaLightbulb } from 'react-icons/fa'

export const scheduleData = [
  {
    day: 'Day 1 - Unity Workshop',
    date: 'Unity Basics & Game Development Fundamentals',
    events: [
      { time: 'Hour 1-2', title: 'Basics of C# - Hello World, Data Types, Control Statements', type: 'workshop', icon: FaCode },
      { time: 'Hour 3-4', title: 'Unity Editor Walkthrough - Physics, Materials, Lighting', type: 'workshop', icon: FaLaptopCode },
      { time: '11:00 AM', title: '15 Minute Break', type: 'food', icon: FaCoffee },
      { time: 'Hour 5', title: 'GDD Presentation - What is a Game? The Door Problem', type: 'demo', icon: FaMicrophone },
      { time: 'Hour 6-7', title: 'Hello World In Unity - First C# Script, Game Object Cycle', type: 'coding', icon: FaLightbulb },
      { time: '3:00 PM', title: '15 Minute Break', type: 'food', icon: FaCoffee },
      { time: 'Hour 7-8', title: 'Activity of the Day - Your Game is too Big, Taxonomy of Player', type: 'workshop', icon: FaUsers },
    ],
  },
  {
    day: 'Day 2 - Unity Implementation',
    date: 'Game Development & Testing',
    events: [
      { time: 'Hour 1-3', title: 'Implementation of Game - Character Controller, Projectile System, Health System', type: 'coding', icon: FaCode },
      { time: '11:00 AM', title: '15 Minute Break', type: 'food', icon: FaCoffee },
      { time: 'Hour 4-5', title: 'Polishing the Game - Sound Effects, Particles, User Interface (UI)', type: 'workshop', icon: FaChartBar },
      { time: '3:00 PM', title: '15 Minute Break', type: 'food', icon: FaCoffee },
      { time: 'Hour 6', title: 'Play Testing - Internal Testing, Player Experience', type: 'demo', icon: FaMicrophone },
      { time: 'Hour 7', title: 'Feedback - Suggestions', type: 'mentoring', icon: FaUsers },
      { time: 'Hour 8', title: 'Recap - Closing', type: 'main', icon: FaFlag },
    ],
  },
  {
    day: 'Day 3 - Extended Reality (VR/AR)',
    date: 'VR Basics & Game Design',
    events: [
      { time: 'Hour 1-2', title: 'Basics of VR - Project Creation, Experiencing VR', type: 'workshop', icon: FaLightbulb },
      { time: 'Hour 3-4', title: 'GDD Presentation - Game Idea, Player Experience', type: 'demo', icon: FaMicrophone },
      { time: 'Hour 5-8', title: 'Grey Box - Player Mechanics, Game Mechanics', type: 'coding', icon: FaCode },
    ],
  },
  {
    day: 'Day 4 - Game Polish & Testing',
    date: 'Final Implementation & Feedback',
    events: [
      { time: 'Hour 1-4', title: 'Game Juice - Sound Effects, Particle Effects, Game Manager', type: 'workshop', icon: FaChartBar },
      { time: 'Hour 5-6', title: 'Play Testing - Experience the Game', type: 'demo', icon: FaMicrophone },
      { time: 'Hour 7-8', title: 'Feedback & Closing - Suggestions', type: 'main', icon: FaTrophy },
    ],
  },
]

const getEventStyle = (type: string) => {
  switch (type) {
    case 'main':
      return 'bg-chart-1 text-main-foreground'
    case 'coding':
      return 'bg-chart-2 text-main-foreground'
    case 'workshop':
      return 'bg-chart-3 text-main-foreground'
    case 'food':
      return 'bg-chart-4 text-main-foreground'
    case 'deadline':
      return 'bg-chart-5 text-main-foreground'
    case 'demo':
      return 'bg-chart-2 text-main-foreground'
    case 'judging':
      return 'bg-chart-1 text-main-foreground'
    case 'mentoring':
      return 'bg-chart-3 text-main-foreground'
    case 'networking':
      return 'bg-chart-4 text-main-foreground'
    default:
      return 'bg-secondary-background text-foreground'
  }
}

export default function ScheduleSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-tech font-bold text-foreground mb-4">Workshop Timeline</h2>
          <p className="text-lg font-tech text-foreground/70 max-w-2xl mx-auto">4-Day Unity & Extended Reality Workshop - From basics to VR/AR implementation</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {scheduleData.map((day, dayIndex) => (
            <Card key={dayIndex} className="p-6 bg-secondary-background">
              <div className="mb-6">
                <h3 className="text-xl font-rajdhani font-bold text-foreground mb-1">{day.day}</h3>
                <p className="text-sm font-tech text-foreground/60">{day.date}</p>
              </div>

              <div className="space-y-4">
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="flex items-center gap-3">
                    <div className={`inline-flex items-center justify-center w-8 h-8 rounded-base border-2 border-border shadow-shadow ${getEventStyle(event.type)} flex-shrink-0`}>
                      <event.icon className="text-sm" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-tech font-medium text-foreground text-sm truncate">{event.title}</span>
                        <span className="font-code text-sm text-foreground/60 flex-shrink-0 ml-2">{event.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
