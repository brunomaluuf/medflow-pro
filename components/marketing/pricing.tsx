import { SectionContainer } from "@/components/shared/section-container"
import { Button } from "@/components/ui/button"

const plans = [
  { name: "Starter", price: "R$99", features: ["Até 100 pacientes", "Agendamento básico", "Prontuário eletrônico"], cta: "Começar" },
  { name: "Pro", price: "R$199", features: ["Pacientes ilimitados", "Telemedicina", "Relatórios avançados", "Suporte prioritário"], cta: "Experimentar", popular: true },
  { name: "Enterprise", price: "Sob consulta", features: ["Multi-unidades", "API dedicada", "SSO", "Treinamento"], cta: "Contatar" },
]

export function Pricing() {
  return (
    <SectionContainer id="pricing" className="bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Planos flexíveis</h2>
        <p className="text-muted-foreground">Escolha o ideal para seu consultório.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div key={plan.name} className={`rounded-xl border bg-card p-8 ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
            {plan.popular && <Badge className="mb-4">Mais popular</Badge>}
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <div className="text-3xl font-bold mb-6">{plan.price}<span className="text-sm font-normal text-muted-foreground">/mês</span></div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => <li key={f} className="text-sm">✓ {f}</li>)}
            </ul>
            <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>{plan.cta}</Button>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
