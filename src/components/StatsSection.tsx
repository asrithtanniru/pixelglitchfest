export default function StatsSection() {
  return (
    <section className="py-12 md:py-16 bg-secondary-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:gap-12 text-center max-w-2xl mx-auto">
          <div className="space-y-3">
            <div className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-chart-2">5</div>
            <div className="text-base md:text-lg lg:text-xl font-tech text-foreground/70">Mentors</div>
          </div>
          <div className="space-y-3">
            <div className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-chart-4">3</div>
            <div className="text-base md:text-lg lg:text-xl font-tech text-foreground/70">Winners</div>
          </div>
        </div>
      </div>
    </section>
  )
}
