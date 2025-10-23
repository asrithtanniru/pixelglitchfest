'use client'

import { Card } from '@/components/ui/card'
import { FaClipboardList, FaFlag, FaUsers, FaCode, FaPizzaSlice, FaCoffee, FaUtensils, FaChartBar, FaClock, FaMicrophone, FaTrophy, FaGlassCheers, FaLaptopCode, FaLightbulb } from 'react-icons/fa'

export const scheduleData = [
  {
    day: 'Day 1 - Friday',
    date: 'October 10, 2025',
    events: [
      { time: '9:00 AM', title: 'Registration & Welcome', type: 'admin', icon: FaClipboardList },
      { time: '10:00 AM', title: 'Workshop: Rapid Game Prototyping', type: 'workshop', icon: FaLightbulb },
      { time: '12:30 PM', title: 'Lunch Break', type: 'food', icon: FaUtensils },
      { time: '2:00 PM', title: 'Mentor Connect & Team Networking', type: 'networking', icon: FaUsers },
      { time: '5:30 PM', title: 'Opening Ceremony & Theme Reveal', type: 'main', icon: FaFlag },
      { time: '7:00 PM', title: 'Hackathon Kickoff — Coding Begins!', type: 'coding', icon: FaCode },
      { time: '10:00 PM', title: 'Late Night Snacks &amp; Brainstorming', type: 'food', icon: FaPizzaSlice },
    ],
  },
  {
    day: 'Day 2 - Saturday',
    date: 'October 11, 2025',
    events: [
      { time: '8:00 AM', title: 'Breakfast & Coffee', type: 'food', icon: FaCoffee },
      { time: '9:00 AM', title: 'Continue Hacking', type: 'coding', icon: FaLaptopCode },
      { time: '12:00 PM', title: 'Lunch Break', type: 'food', icon: FaUtensils },
      { time: '2:00 PM', title: 'Progress Check-in with Mentors', type: 'mentoring', icon: FaChartBar },
      { time: '4:00 PM', title: 'Submission Deadline', type: 'deadline', icon: FaClock },
      { time: '4:30 PM', title: 'Project Demos & Presentations', type: 'demo', icon: FaMicrophone },
      { time: '6:00 PM', title: 'Awards & Closing Ceremony', type: 'main', icon: FaTrophy },
      { time: '7:00 PM', title: 'Celebration & Networking', type: 'networking', icon: FaGlassCheers },
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
          <h2 className="text-4xl sm:text-5xl font-tech font-bold text-foreground mb-4">48-Hour Timeline</h2>
          <p className="text-lg font-tech text-foreground/70 max-w-2xl mx-auto">From kickoff to awards, here&apos;s your complete Game Jam journey</p>
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
