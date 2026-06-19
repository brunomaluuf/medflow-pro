import { SectionContainer } from "@/components/shared/section-container"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <SectionContainer id="hero" className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Gestão inteligente para clínicas <span className="text-primary">modernas</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          MedFlow Pro é a plataforma completa para profissionais da saúde que querem
          otimizar tempo e oferecer o melhor atendimento.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">Começar grátis</Button>
          <Button variant="outline" size="lg">Ver demonstração</Button>
        </div>
      </div>
    </SectionContainer>
  )
}
