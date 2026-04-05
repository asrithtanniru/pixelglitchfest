'use client'

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
const faqs = [
  {
    question: 'What is Pixel Glitch Fest?',
    answer:
      "Pixel Glitch Fest is a game creation event hosted by Next Tech Lab, SRM University AP in collaboration with the Game Developers Association of India (GDAI) and Galactic Geeks Studio. It's split into two phases: Phase 1 — A 2-day on-campus workshop focused on game development (April 10–11). Phase 2 — An online Game Jam on Itch.io where you build and submit your game (April 12–19).",
  },
  {
    question: 'When and where is it happening?',
    answer: 'The event runs from April 10th to 19th. The 2-day workshop (Phase 1) is held offline on the SRM University AP campus on April 10th & 11th. The Game Jam (Phase 2) is fully online via Itch.io from April 12th to 19th.',
  },
  {
    question: 'Is there a registration fee?',
    answer: 'No! This is a completely free event with no registration fees. Just sign up and you\'re in.',
  },
  {
    question: 'Who can participate?',
    answer:
      "Anyone interested in game design, art, development, storytelling, or music can participate — no prior experience required. The on-campus workshop has only 100 seats and requires filling out the registration form. If you're participating from outside, you do not need to fill out the form; just join the jam on Itch.io and join the Discord server.",
  },
  {
    question: 'What will I learn in the workshop?',
    answer:
      "The 2-day workshop is conducted by external speakers and mentors from Galactic Geeks. You'll get hands-on experience with game engine fundamentals, scripting, game design principles, and practical development skills. By the end of Day 2, you'll have the foundation needed to start your own game project.",
  },
  {
    question: 'What happens during the Game Jam?',
    answer:
      "The Game Jam runs online from April 12th to 19th on Itch.io. You'll develop and submit your game during this period. The official theme will be provided by GDAI at the start of the Game Jam. Mentors from Galactic Geeks will be available via Discord and online platforms to support you throughout.",
  },
  {
    question: 'What are the prizes?',
    answer:
      'The top 3 teams will receive free IGDC passes from GDAI, surprise gifts, and official recognition across event platforms and communications.',
  },
  {
    question: 'Do I need to bring my own assets or tools?',
    answer: "Not necessarily. We'll provide guidance during the workshop. But if you want to bring your own 2D/3D assets, music, or tools — go for it!",
  },
  {
    question: 'What software will we use?',
    answer: 'You can use any game engine of your choice — Unity, Godot, Unreal Engine, Construct, or any other. The workshop will cover game development fundamentals applicable across engines.',
  },
  {
    question: 'How are teams formed?',
    answer: "You can either register as a team (up to 4 members) or register solo and we'll help you find teammates during the mixer session.",
  },
  {
    question: 'How do I stay updated and communicate during the event?',
    answer:
      "Join our Discord server! It's the primary communication hub for Pixel Glitch Fest. You'll get real-time updates, can find teammates, ask mentors questions, and connect with other participants. Make sure to join before the event starts!",
  },
  {
    question: 'What is the schedule like?',
    answer: 'Phase 1 (April 10–11): 2-day on-campus workshop with sessions by Galactic Geeks mentors. Phase 2 (April 12–19): Online Game Jam on Itch.io — theme reveal, development, and submission.',
  },
  {
    question: 'Who are the mentors?',
    answer:
      'Speakers and mentors from Galactic Geeks will conduct the workshop sessions and provide mentorship during the Game Jam via Discord and online platforms. GDAI provides industry recognition and judging support.',
  },
  {
    question: 'Do I need to bring a laptop?',
    answer: "Yes — bring your own laptop for the workshop days. We'll share installation and setup instructions before the event.",
  },
  {
    question: 'Where do I submit my game?',
    answer: 'Games are submitted on Itch.io during the Game Jam phase (April 12–19). Detailed submission instructions will be provided at the start of the Game Jam.',
  },
  {
    question: 'Can we continue the project after the event?',
    answer: 'Absolutely. You own your project — continue refining it, keep it on Itch.io, or even publish it!',
  },
]

export default function FAQSection() {
  return (
    <section className="py-12 md:py-16 bg-secondary-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-tech font-bold text-foreground mb-4">Pixel Glitch Fest - FAQ</h2>
          <p className="text-base md:text-lg font-tech text-foreground/70 max-w-2xl mx-auto px-4">
            Got questions? We&apos;ve got answers! Here&apos;s everything you need to know about Pixel Glitch Fest
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="mb-2 md:mb-3">
                <AccordionTrigger className="font-tech text-foreground text-left text-base md:text-lg px-4 md:px-6">{faq.question}</AccordionTrigger>
                <AccordionContent className="font-tech text-foreground/80 leading-relaxed text-sm md:text-base px-4 md:px-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
