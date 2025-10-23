'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FaGamepad, FaMusic, FaCog, FaRocket, FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaUnity } from 'react-icons/fa'
import { SiGodotengine, SiUnrealengine, SiSharp, SiCplusplus, SiRust, SiBlender, SiConstruct3, SiLua } from 'react-icons/si'

export default function HeroSection() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-16 h-16 bg-chart-1 rounded-base rotate-12"></div>
        <div className="absolute top-32 right-20 w-12 h-12 bg-chart-2 rounded-base -rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-chart-3 rounded-base rotate-45"></div>
        <div className="absolute top-1/2 right-1/3 w-14 h-14 bg-chart-4 rounded-base -rotate-12"></div>
        <div className="absolute bottom-32 right-16 w-18 h-18 bg-chart-5 rounded-base rotate-90"></div>
      </div>

      <div className="absolute top-16 left-28 hidden lg:block transform rotate-6">
        <Button
          variant="noShadow"
          size="sm"
          className="bg-chart-3 hover:bg-chart-3/80 text-main-foreground font-tech font-bold text-sm shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          <FaUnity className="mr-1" /> Unity
        </Button>
      </div>

      <div className="absolute top-52 left-32 hidden xl:block transform -rotate-3">
        <Button
          variant="noShadow"
          size="sm"
          className="bg-chart-4 hover:bg-chart-4/80 text-main-foreground font-rajdhani font-bold text-sm shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          <SiConstruct3 className="mr-1" /> Construct
        </Button>
      </div>

      <div className="absolute bottom-32 left-20 hidden lg:block transform rotate-12">
        <Button
          variant="noShadow"
          size="sm"
          className="bg-chart-1 hover:bg-chart-1/80 text-main-foreground font-rajdhani font-bold text-sm shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          <SiUnrealengine className="mr-1" /> Unreal
        </Button>
      </div>

      <div className="absolute top-24 right-16 hidden xl:block transform rotate-12">
        <Button
          variant="noShadow"
          size="sm"
          className="bg-chart-5 hover:bg-chart-5/80 text-main-foreground font-tech font-medium text-xs shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          <FaCog className="mr-1" /> Tools
        </Button>
      </div>

      <div className="absolute top-40 right-32 hidden lg:block transform -rotate-6">
        <Button
          variant="noShadow"
          size="sm"
          className="bg-chart-5 hover:bg-chart-5/80 text-main-foreground font-rajdhani font-bold text-sm shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          <SiGodotengine className="mr-1" /> Godot
        </Button>
      </div>

      <div className="absolute top-16 right-1/4 hidden lg:block transform rotate-3">
        <Button
          variant="noShadow"
          size="sm"
          className="bg-chart-3 hover:bg-chart-3/80 text-main-foreground font-tech font-medium text-xs shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          <SiCplusplus className="mr-1" /> C++
        </Button>
      </div>

      <div className="absolute bottom-40 right-1/4 hidden xl:block transform -rotate-12">
        <Button
          variant="noShadow"
          size="sm"
          className="bg-chart-4 hover:bg-chart-4/80 text-main-foreground font-code font-bold text-sm shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          <SiSharp className="mr-1" /> C#
        </Button>
      </div>

      <div className="absolute bottom-24 right-20 hidden xl:block transform rotate-6">
        <Button
          variant="noShadow"
          size="sm"
          className="bg-chart-2 hover:bg-chart-2/80 text-main-foreground font-code font-bold text-sm shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          <SiRust className="mr-1" /> Rust
        </Button>
      </div>

      <div className="absolute bottom-20 left-1/4 hidden lg:block transform -rotate-6">
        <Button
          variant="noShadow"
          size="sm"
          className="bg-chart-3 hover:bg-chart-2/80 text-main-foreground font-tech font-medium text-xs shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          <FaMusic className="mr-1" /> Audio
        </Button>
      </div>
      <div className="absolute top-2/3 left-20 hidden xl:block transform rotate-12">
        <Button
          variant="noShadow"
          size="sm"
          className="bg-chart-5 hover:bg-chart-5/80 text-main-foreground font-code font-bold text-sm shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          <SiLua className="mr-1" /> Lua
        </Button>
      </div>

      <div className="absolute top-1/2 right-24 hidden xl:block transform -rotate-6">
        <Button
          variant="noShadow"
          size="sm"
          className="bg-chart-3 hover:bg-chart-3/80 text-main-foreground font-code font-bold text-sm shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          <SiBlender className="mr-1" /> Blender
        </Button>
      </div>

      <div className="relative container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="text-center space-y-8">
          <Button
            variant="noShadow"
            className="inline-flex items-center gap-2 px-4 py-2 bg-chart-1 hover:bg-chart-1/80 text-main-foreground 
            rounded-base border-2 border-border shadow-shadow font-code font-bold text-md tracking-wide 
            hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            <FaGamepad className="mr-1" /> GAME JAM 2025
          </Button>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-orbitron font-bold text-foreground leading-tight tracking-tight">
              CODE.{' '}
              <span
                className="inline-block bg-chart-2 text-main-foreground px-3 py-1 rounded-base 
              border-2 border-border shadow-shadow transform rotate-1 font-rajdhani"
              >
                CREATE.
              </span>{' '}
              <br />
              COMPETE.
            </h1>
            <div className="relative">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-tech font-normal text-foreground/80 max-w-3xl mx-auto">
                48 hours to build the next gaming revolution.
                <Button className="inline-block bg-chart-4 text-main-foreground px-2 py-1 rounded-base text-lg font-rajdhani font-bold ml-2 transform -rotate-1">Are you ready?</Button>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto my-12">
            <Card className="p-6 text-center bg-secondary-background hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              <div className="text-3xl font-tech font-bold text-chart-1 mb-1">24</div>
              <div className="text-xl font-tech text-foreground/70">Hours to Code</div>
            </Card>
            <Card className="p-6 text-center bg-secondary-background hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              <div className="text-3xl font-tech font-bold text-chart-2 mb-1">10K</div>
              <div className="text-xl font-tech text-foreground/70">Prize Pool</div>
            </Card>
            <Card className="p-6 text-center bg-secondary-background hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              <div className="text-3xl font-tech font-bold text-chart-3 mb-1">200+</div>
              <div className="text-xl font-tech text-foreground/70">Developers</div>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-chart-2 hover:bg-chart-2/90 border-2 border-border shadow-shadow hover:translate-x-1 
              hover:translate-y-1 hover:shadow-none font-tech font-bold"
            >
              <FaRocket className="mr-1" /> Opening Soon
            </Button>
            <Button variant="neutral" size="lg" className="text-lg px-8 py-6 font-tech">
              <FaCalendarAlt className="mr-1" /> View Schedule
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-foreground/60 text-sm mt-8 font-tech">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-chart-4" />
              <span>10-11 October, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-chart-1" />
              <span>SRM University AP</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-chart-5" />
              <span>In-Person</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
