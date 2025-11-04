export default function StatsSection() {
  return (
    <section className="py-16 bg-secondary-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {/* <div className="space-y-2">
            <div className="text-3xl font-orbitron font-bold text-chart-1">70+</div>
            <div className="text-sm font-tech text-foreground/70">Teams Formed</div>
          </div> */}
          <div className="space-y-2">
            <div className="text-3xl font-orbitron font-bold text-chart-2">5</div>
            <div className="text-sm font-tech text-foreground/70">Mentors</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-orbitron font-bold text-chart-4">2</div>
            <div className="text-sm font-tech text-foreground/70">Workshops</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-orbitron font-bold text-chart-5">5+</div>
            <div className="text-sm font-tech text-foreground/70">Themes</div>
          </div>
        </div>
      </div>
    </section>
  )
}
