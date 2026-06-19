import { SectionContainer } from "@/components/shared/section-container"
import { Badge } from "@/components/ui/badge"

const personas = [
  { profession: "Médicos", specialty: "Clínicos e especialistas", icon: "🩺" },
  { profession: "Dentistas", specialty: "Clínicas odontológicas", icon: "🦷" },
  { profession: "Psicólogos", specialty: "Terapia individual e grupal", icon: "🧠" },
  { profession: "Nutricionistas", specialty: "Acompanhamento nutricional", icon: "🥗" },
]

export function Personas() {
  return (
    <SectionContainer id="personas">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Feito para cada profissional</h2>
        <p className="text-muted-foreground">Soluções específicas para sua área de atuação.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {personas.map((p) => (
          <div key={p.profession} className="text-center p-6 rounded-lg border bg-card">
            <div className="text-4xl mb-4">{p.icon}</div>
            <h3 className="font-semibold mb-1">{p.profession}</h3>
            <Badge variant="secondary">{p.specialty}</Badge>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
