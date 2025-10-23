'use client'

import { useState } from 'react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { FaUsers, FaClipboardList, FaCog, FaGavel, FaScroll, FaUpload, FaHandshake } from 'react-icons/fa'

const faqs = [
  {
    question: 'Are there mentors available during the event?',
    answer: 'Absolutely! NTL is here!!!!!',
  },
  {
    question: 'Who can participate in the Game Jam?',
    answer:
      "Anyone passionate about game development! Whether you're a seasoned developer, a design student, or a complete beginner, you're welcome. We encourage teams of 2-5 people with diverse skills.",
  },

  {
    question: 'Do I need a team to participate?',
    answer: "Not necessarily! You can register solo and we'll help you find teammates during our team formation session on Friday evening. Many great friendships and partnerships start at Game Jams!",
  },
  {
    question: 'What should I bring to the event?',
    answer:
      "Bring your laptop, chargers, any development software you prefer, and your creativity! We'll provide food, drinks, and a comfortable workspace. Don't forget a sleeping bag if you plan to stay overnight!",
  },
  {
    question: 'Are there any restrictions on game engines or tools?',
    answer:
      "No restrictions! Use Unity, Unreal Engine, Godot, GameMaker, or even code from scratch. We encourage using tools you're comfortable with to maximize your productivity during the 48 hours.",
  },
  {
    question: 'What are the judging criteria?',
    answer:
      'Games are judged on creativity, technical implementation, theme adherence, and overall fun factor. We have industry professionals as judges who will provide valuable feedback on all submissions.',
  },
  {
    question: 'Can I start working on my game before the event?',
    answer:
      'No! All game development must happen during the 48-hour window. However, you can prepare by learning new tools, forming teams, and brainstorming general ideas (but no actual development).',
  },
  {
    question: 'Is food and accommodation provided?',
    answer:
      'Yes! We provide all meals, snacks, and beverages throughout the event. The venue is open 24/7, and we have quiet spaces for those who want to rest. Sleeping bags and pillows are recommended.',
  },
  {
    question: 'How do I submit my game?',
    answer: "Games must be submitted through our online portal by 1:00 PM on Sunday. We'll provide detailed submission guidelines including required files, demo videos, and documentation.",
  },
]

const categories = {
  participation: { name: 'Participation', icon: FaUsers, color: 'chart-1' },
  logistics: { name: 'Logistics', icon: FaClipboardList, color: 'chart-2' },
  technical: { name: 'Technical', icon: FaCog, color: 'chart-3' },
  judging: { name: 'Judging', icon: FaGavel, color: 'chart-4' },
  rules: { name: 'Rules', icon: FaScroll, color: 'chart-5' },
  submission: { name: 'Submission', icon: FaUpload, color: 'chart-1' },
  legal: { name: 'Legal', icon: FaGavel, color: 'chart-2' },
  support: { name: 'Support', icon: FaHandshake, color: 'chart-3' },
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-secondary-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-tech font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg font-tech text-foreground/70 max-w-2xl mx-auto">Got questions? We've got answers! Here's everything you need to know about Game Jam 2025</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="mb-3">
                <AccordionTrigger className="font-tech  text-foreground text-left text-lg">{faq.question}</AccordionTrigger>
                <AccordionContent className="font-tech text-foreground/80 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
