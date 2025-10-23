'use client'

import { Button } from '@/components/ui/button'
import { FaDiscord, FaGithub, FaInstagram, FaGamepad, FaArrowUp } from 'react-icons/fa'

const socialLinks = [
  { name: 'Discord', icon: FaDiscord, href: '#', bgColor: 'bg-[#5865F2]', hoverColor: 'hover:bg-[#4752C4]' },
  { name: 'Instagram', icon: FaInstagram, href: '#', bgColor: 'bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FD1D1D]', hoverColor: 'hover:opacity-90' },
  { name: 'GitHub', icon: FaGithub, href: '#', bgColor: 'bg-black', hoverColor: 'hover:bg-gray-800' },
]

const quickLinks = [
  { name: 'Register', href: '#register' },
  { name: 'Schedule', href: '#schedule' },
  { name: 'FAQ', href: '#faq' },
]

const collaborators = [
  { name: 'NextTechLab', role: 'Lead Organizer', image: '/images/ntl_icon.png' },
  { name: 'HatchLab Research Centre', role: 'Research Partner', image: '/images/ntl_icon.png' },
  // { name: 'Community', role: 'Community Partner',image:'/images/ntl_icon.png'  },
]

export default function Footer() {
  return (
    <footer className="bg-secondary-background border-t-4 border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-fira-code font-bold text-foreground mb-4 flex items-center gap-2">
                <FaGamepad className="text-chart-1" />
                Game Jam 2025
              </h3>
              <p className="text-sm font-tech text-foreground/70 leading-relaxed">The ultimate 24-hour game development competition. Join 500+ developers,and create the next gaming revolution.</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-rajdhani font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm font-tech text-foreground/70 hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-rajdhani font-bold text-foreground mb-4">Stay Connected</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <Button
                    key={index}
                    variant="noShadow"
                    size="sm"
                    className={`${social.bgColor} ${social.hoverColor} text-white font-tech text-xs shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all`}
                  >
                    <IconComponent className="mr-1" />
                    {social.name}
                  </Button>
                )
              })}
            </div>

            <div className="space-y-3">
              <p className="text-sm font-tech text-foreground/70">Get updates about Game Jam 2025</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="asrith@email.com"
                  className="flex-1 px-3 py-2 text-sm bg-background border-2 border-border rounded-base font-tech text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-chart-1"
                />
                <Button size="sm" className="font-tech text-xs">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-border pt-8">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <div className="text-base font-tech font-bold text-foreground whitespace-nowrap">Jointly organized by:</div>

            <div className="flex flex-wrap items-center gap-4">
              {collaborators.map((collab, index) => (
                <div key={index} className="flex items-center gap-2">
                  <img src={collab.image} alt={collab.name} className="h-5 w-auto" />
                  <div className="text-sm font-tech font-semibold text-foreground">{collab.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6">
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 rounded-full bg-chart-1 hover:bg-chart-1/80 text-main-foreground shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          <FaArrowUp />
        </Button>
      </div>
    </footer>
  )
}
