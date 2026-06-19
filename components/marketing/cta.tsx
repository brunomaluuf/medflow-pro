import { SectionContainer } from "@/components/shared/section-container"
import { Button } from "@/components/ui/button"

export function CTAFinal() {
  return (
    <SectionContainer id="cta-final" className="text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Pronto para transformar sua gestão?</h2>
        <p className="text-muted-foreground mb-8">
          Junte-se a milhares de profissionais que usam MedFlow Pro.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg">Começar teste grátis</Button>
          <Button variant="outline" size="lg">Falar com vendas</Button>
        </div>
        <p className="text-xs text-muted-foreground max-w-xl mx-auto">
          Ambiente de demonstração — dados fictícios. Não utilize para fins clínicos reais.
          Ao se cadastrar, você concorda com nossos Termos de Uso e Política de Privacidade.
        </p>
      </div>
    </SectionContainer>
  )
}
