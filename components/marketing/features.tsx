import { SectionContainer } from "@/components/shared/section-container"

const features = [
  { title: "Agendamento Inteligente", description: "Calendário integrado com lembretes automáticos." },
  { title: "Prontuário Eletrônico", description: "Histórico completo dos pacientes." },
  { title: "Telemedicina", description: "Consultas por vídeo com qualidade." },
  { title: "Gestão Financeira", description: "Fluxo de caixa e recebíveis." },
  { title: "Relatórios", description: "Métricas para otimizar sua clínica." },
  { title: "Multi-Profissional", description: "Gestão para equipes." },
]

export function Features() {
  return (
    <SectionContainer id="features" className="bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Tudo que você precisa</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Ferramentas completas para gerenciar sua prática.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.title} className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-muted-foreground">{f.description}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
