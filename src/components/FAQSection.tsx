'use client'

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
const faqs = [
  {
    question: 'What is Pixel Glitch Fest?',
    answer:
      "Pixel Glitch Fest is a 4-day celebration of game creation and creativity, hosted by Galactic Geeks (Pangaea Corp) in collaboration with Next Tech Lab, SRM University AP. It's split into two parts: 2-Day Workshop — Learn the essentials of Unity, C#, and game design. 2-Day Game Jam — Team up, build a game, and show off your creativity under a common theme.",
  },
  {
    question: 'When and where is it happening?',
    answer: 'Venue: SRM University AP Campus. Duration: 4 days total — 2 days of workshop + 2 days of jam.',
  },
  {
    question: 'Who can participate?',
    answer: "Anyone interested in game design, art, development, storytelling, or music — no prior experience required! We'll guide you from zero to your first playable game.",
  },
  {
    question: 'What will I learn in the workshop?',
    answer:
      "You'll get hands-on experience with: Setting up a Unity project and importing assets, Understanding the Unity Editor & project structure, Basics of C# scripting and game logic, Player input handling using the Input System, Cinemachine for camera control, Unity's physics system, Basic UI design and stat updates, Structuring your game with a Game Manager. By the end of Day 2, you'll have the foundation needed to start your own game project.",
  },
  {
    question: 'What happens during the Game Jam?',
    answer:
      "You'll form teams and get a secret theme at the start of Day 3. Over 48 hours, you'll brainstorm, design, and develop a playable game prototype. You'll be mentored by: A Game Designer for concept and mechanics, A 3D Artist / Level Designer for visuals, A Programmer for implementation guidance, A Mentor Panel for direction and troubleshooting.",
  },
  {
    question: 'Is there a prize or recognition?',
    answer:
      "Yes! The top games will be showcased and rewarded based on creativity, design, fun factor, and technical execution. Even if you don't win — you'll leave with a finished game and real teamwork experience.",
  },
  {
    question: 'Do I need to bring my own assets or tools?',
    answer: "Not necessarily. We'll provide a starter asset pack for quick prototyping. But if you want to bring your own 2D/3D assets, music, or tools — go for it!",
  },
  {
    question: 'What software will we use?',
    answer: 'Unity (latest stable LTS release), Visual Studio Code or Visual Studio Community, Optional: Blender / Krita / Photoshop / Figma (for art and design)',
  },
  {
    question: 'How are teams formed?',
    answer: "You can either: Register as a team (up to 4 members) or register solo and we'll help you find teammates during the mixer session.",
  },
  {
    question: 'How do I stay updated and communicate during the event?',
    answer:
      "Join our Discord server! It's the primary communication hub for Pixel Glitch Fest. You'll get real-time updates, can find teammates, ask mentors questions, and connect with other participants. Make sure to join before the event starts!",
  },
  {
    question: 'What is the schedule like?',
    answer: 'Day 1–2: Workshop (Learning + Practice), Day 3–4: Game Jam (Theme Reveal + Development + Submission), Final Evening: Game Showcase & Results',
  },
  {
    question: 'Who are the mentors?',
    answer:
      'Industry professionals and experienced developers from Galactic Geeks and Next Tech Lab will be guiding you — people who have built games, shipped prototypes, and tinkered with engines at all scales.',
  },
  {
    question: 'Do I need to bring a laptop?',
    answer: "Yes — bring your own laptop with Unity installed. We'll share installation and setup instructions before the event.",
  },
  {
    question: 'Will there be internet and power backup?',
    answer: 'Yes. SRM University will provide Wi-Fi and charging stations in the development area.',
  },
  {
    question: 'Food and refreshments?',
    answer: 'Yes! Expect snacks, caffeine, and chaos. Game dev runs on pizza and energy drinks.',
  },
  {
    question: 'Can we continue the project after the event?',
    answer: 'Absolutely. You own your project — continue refining it, post it on itch.io, or even publish it!',
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
