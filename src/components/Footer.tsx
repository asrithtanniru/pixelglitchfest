'use client'

import { Button } from '@/components/ui/button'
import { FaDiscord, FaGithub, FaInstagram, FaArrowUp } from 'react-icons/fa'

const socialLinks = [
  { name: 'Discord', icon: FaDiscord, href: 'https://discord.gg/z3qaq54ZwR', bgColor: 'bg-[#5865F2]', hoverColor: 'hover:bg-[#4752C4]' },
  { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/nexttechlab_ap/', bgColor: 'bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FD1D1D]', hoverColor: 'hover:opacity-90' },
  { name: 'GitHub', icon: FaGithub, href: 'https://github.com/NextTechLabAP', bgColor: 'bg-black', hoverColor: 'hover:bg-gray-800' },
]

export default function Footer() {
  return (
    <footer className="bg-secondary-background border-t-4 border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div>
            <h4 className="text-xl md:text-2xl font-rajdhani font-bold text-foreground mb-2 md:mb-3 text-center md:text-left">Stay Connected</h4>
            <p className="text-sm md:text-base font-tech text-foreground/70 mb-4 text-center md:text-left">
              <span className="text-chart-1 font-bold">Join our Discord server</span> for Game Jam updates, team formation, and real-time support!
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="noShadow"
                      size="lg"
                      className={`${social.bgColor} ${social.hoverColor} text-white font-tech text-sm md:text-base shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all px-4 py-2 md:px-6 md:py-3`}
                    >
                      <IconComponent className="mr-1 md:mr-2 text-base md:text-lg" />
                      {social.name}
                    </Button>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-center gap-3">
        <Button asChild className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#5865F2] hover:bg-[#4752C4] text-white shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-lg md:text-xl">
          <a href="https://discord.gg/z3qaq54ZwR" target="_blank" rel="noopener noreferrer" aria-label="Join Discord">
            <FaDiscord />
          </a>
        </Button>
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-chart-1 hover:bg-chart-1/80 text-main-foreground shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-lg md:text-xl"
        >
          <FaArrowUp />
        </Button>
      </div>
    </footer>
  )
}
