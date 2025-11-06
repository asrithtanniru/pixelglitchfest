'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FaGamepad, FaMusic, FaCog, FaRocket, FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaUnity } from 'react-icons/fa'
import { SiGodotengine, SiUnrealengine, SiSharp, SiCplusplus, SiRust, SiBlender, SiConstruct3, SiLua } from 'react-icons/si'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-10 left-10 w-16 h-16 bg-chart-1 rounded-base"
          animate={{ rotate: [12, 45, 12] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className="absolute top-32 right-20 w-12 h-12 bg-chart-2 rounded-base"
          animate={{ rotate: [-45, 0, -45] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 left-1/4 w-20 h-20 bg-chart-3 rounded-base"
          animate={{ rotate: [45, 90, 45] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className="absolute top-1/2 right-1/3 w-14 h-14 bg-chart-4 rounded-base"
          animate={{ rotate: [-12, 12, -12] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className="absolute bottom-32 right-16 w-18 h-18 bg-chart-5 rounded-base"
          animate={{ rotate: [90, 135, 90] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>
      </div>

      <motion.div
        className="absolute top-16 left-28 hidden lg:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, rotate: [6, 12, 6] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.1 },
          y: { duration: 0.6, delay: 0.1 },
          rotate: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
        whileHover={{ scale: 1.1, rotate: 0 }}
      >
        <Button
          variant="noShadow"
          size="sm"
          className="bg-chart-3 hover:bg-chart-3/80 text-main-foreground font-tech font-bold text-sm shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          <FaUnity className="mr-1" /> Unity
        </Button>
      </motion.div>

      <motion.div
        className="absolute top-52 left-32 hidden xl:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, rotate: [-3, 3, -3] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.15 },
          x: { duration: 0.6, delay: 0.15 },
          rotate: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        }}
        whileHover={{ scale: 1.1, rotate: 0 }}
      >
        <Button
          variant="noShadow"
          size="sm"
          className="bg-chart-4 hover:bg-chart-4/80 text-main-foreground font-rajdhani font-bold text-sm shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          <SiConstruct3 className="mr-1" /> Construct
        </Button>
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-20 hidden lg:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, rotate: [12, 24, 12] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.2 },
          y: { duration: 0.6, delay: 0.2 },
          rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
        whileHover={{ scale: 1.1, rotate: 0 }}
      >
        <Button
          variant="noShadow"
          size="sm"
          className="bg-chart-1 hover:bg-chart-1/80 text-main-foreground font-rajdhani font-bold text-sm shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          <SiUnrealengine className="mr-1" /> Unreal
        </Button>
      </motion.div>

      <motion.div
        className="absolute top-24 right-16 hidden xl:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, rotate: [12, 18, 12] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.12 },
          x: { duration: 0.6, delay: 0.12 },
          rotate: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
        }}
        whileHover={{ scale: 1.1, rotate: 0 }}
      >
        <Button
          variant="noShadow"
          size="sm"
          className="bg-chart-5 hover:bg-chart-5/80 text-main-foreground font-tech font-medium text-xs shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          <FaCog className="mr-1" /> Tools
        </Button>
      </motion.div>

      <motion.div
        className="absolute top-40 right-32 hidden lg:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, rotate: [-6, 0, -6] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.18 },
          y: { duration: 0.6, delay: 0.18 },
          rotate: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' },
        }}
        whileHover={{ scale: 1.1, rotate: 0 }}
      >
        <Button
          variant="noShadow"
          size="sm"
          className="bg-chart-5 hover:bg-chart-5/80 text-main-foreground font-rajdhani font-bold text-sm shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          <SiGodotengine className="mr-1" /> Godot
        </Button>
      </motion.div>

      <motion.div
        className="absolute top-16 right-1/4 hidden lg:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, rotate: [3, 9, 3] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.25 },
          scale: { duration: 0.6, delay: 0.25 },
          rotate: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
        }}
        whileHover={{ scale: 1.15, rotate: 0 }}
      >
        <Button
          variant="noShadow"
          size="sm"
          className="bg-chart-3 hover:bg-chart-3/80 text-main-foreground font-tech font-medium text-xs shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          <SiCplusplus className="mr-1" /> C++
        </Button>
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-1/4 hidden xl:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, rotate: [-12, -6, -12] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.3 },
          x: { duration: 0.6, delay: 0.3 },
          rotate: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
        whileHover={{ scale: 1.1, rotate: 0 }}
      >
        <Button
          variant="noShadow"
          size="sm"
          className="bg-chart-4 hover:bg-chart-4/80 text-main-foreground font-code font-bold text-sm shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          <SiSharp className="mr-1" /> C#
        </Button>
      </motion.div>

      <motion.div
        className="absolute bottom-24 right-20 hidden xl:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, rotate: [6, 12, 6] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.35 },
          y: { duration: 0.6, delay: 0.35 },
          rotate: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
        }}
        whileHover={{ scale: 1.1, rotate: 0 }}
      >
        <Button
          variant="noShadow"
          size="sm"
          className="bg-chart-2 hover:bg-chart-2/80 text-main-foreground font-code font-bold text-sm shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          <SiRust className="mr-1" /> Rust
        </Button>
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-1/4 hidden lg:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, rotate: [-6, 0, -6] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.4 },
          scale: { duration: 0.6, delay: 0.4 },
          rotate: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        }}
        whileHover={{ scale: 1.15, rotate: 0 }}
      >
        <Button
          variant="noShadow"
          size="sm"
          className="bg-chart-3 hover:bg-chart-2/80 text-main-foreground font-tech font-medium text-xs shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          <FaMusic className="mr-1" /> Audio
        </Button>
      </motion.div>

      <motion.div
        className="absolute top-2/3 left-20 hidden xl:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, rotate: [12, 18, 12] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.45 },
          x: { duration: 0.6, delay: 0.45 },
          rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
        whileHover={{ scale: 1.1, rotate: 0 }}
      >
        <Button
          variant="noShadow"
          size="sm"
          className="bg-chart-5 hover:bg-chart-5/80 text-main-foreground font-code font-bold text-sm shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          <SiLua className="mr-1" /> Lua
        </Button>
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-24 hidden xl:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, rotate: [-6, 6, -6] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.5 },
          y: { duration: 0.6, delay: 0.5 },
          rotate: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
        }}
        whileHover={{ scale: 1.1, rotate: 0 }}
      >
        <Button
          variant="noShadow"
          size="sm"
          className="bg-chart-3 hover:bg-chart-3/80 text-main-foreground font-code font-bold text-sm shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          <SiBlender className="mr-1" /> Blender
        </Button>
      </motion.div>

      <motion.div className="relative container mx-auto px-4 py-16 sm:py-24 lg:py-32" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
        <div className="text-center space-y-8">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.3 }} whileHover={{ scale: 1.05 }}>
            <Button
              variant="noShadow"
              className="inline-flex items-center gap-2 px-4 py-2 bg-chart-1 hover:bg-chart-1/80 text-main-foreground 
              rounded-base border-2 border-border shadow-shadow font-code font-bold text-md tracking-wide 
              hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              <FaGamepad className="mr-1" /> GAME JAM
            </Button>
          </motion.div>

          <motion.div className="space-y-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }}>
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-orbitron font-bold text-foreground leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              PIXEL{' '}
              <motion.span
                className="inline-block bg-chart-2 text-main-foreground px-3 py-1 rounded-base 
                border-2 border-border shadow-shadow font-rajdhani"
                initial={{ rotate: 0, scale: 0.8 }}
                animate={{ rotate: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                whileHover={{ rotate: 0, scale: 1.05 }}
              >
                GLITCH
              </motion.span>{' '}
              <br />
              FEST
            </motion.h1>
            <motion.div className="relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.5 }}>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-tech font-normal text-foreground/80 max-w-3xl mx-auto">
                48 hours to build the next gaming revolution.
                <motion.div className="inline-block ml-2" whileHover={{ rotate: 3, scale: 1.1 }} initial={{ rotate: -1 }}>
                  <Button className="bg-chart-4 text-main-foreground px-2 py-1 rounded-base text-lg font-rajdhani font-bold transform -rotate-1">Are you ready?</Button>
                </motion.div>
              </h2>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto my-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
          >
            {[
              { value: '2', label: 'Day Workshop', color: 'chart-1', delay: 0 },
              { value: '?', label: 'Prize Pool', color: 'chart-2', delay: 0.1, isGlitch: true },
              { value: '48', label: 'Hours GameJam', color: 'chart-3', delay: 0.2 },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.9 + item.delay }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="p-6 text-center bg-secondary-background hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                  <motion.div
                    className={`font-tech font-bold mb-1 ${item.isGlitch ? 'text-6xl text-chart-2' : `text-3xl text-${item.color}`}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 2.1 + item.delay, type: 'spring', stiffness: 200 }}
                  >
                    {item.value}
                  </motion.div>
                  <div className="text-xl font-tech text-foreground/70">{item.label}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 2.3 }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-chart-2 hover:bg-chart-2/90 border-2 border-border shadow-shadow hover:translate-x-1 
                hover:translate-y-1 hover:shadow-none font-tech font-bold"
                onClick={() => window.open('https://forms.gle/Ax2WcVyeCaMWhL1y7', '_blank')}
              >
                <FaRocket className="mr-1" /> Register Now
              </Button>
            </motion.div>
            {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="neutral" size="lg" className="text-lg px-8 py-6 font-tech">
                <FaCalendarAlt className="mr-1" /> View Schedule
              </Button>
            </motion.div> */}
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-center gap-4 md:gap-6 text-foreground/60 text-xs sm:text-sm mt-8 font-tech"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.5 }}
          >
            <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
              <FaCalendarAlt className="text-chart-4" />
              <span className="text-center">10-13 November, 2025</span>
            </motion.div>
            <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
              <FaMapMarkerAlt className="text-chart-1" />
              <span className="text-center px-2">ALC - 1, 3rd Floor, Homi J Bhaba Block</span>
            </motion.div>
            <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
              <FaUsers className="text-chart-5" />
              <span>In-Person</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  )
}
