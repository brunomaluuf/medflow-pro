import { Logo } from "@/components/shared/logo"
import { SectionContainer } from "@/components/shared/section-container"

export function Footer() {
  return (
    <footer className="bg-muted/40 border-t border-border/40">
      <SectionContainer className="py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Logo variant="full" className="h-6 w-auto text-foreground mb-4" />
            <p className="text-sm text-muted-foreground">Gestão inteligente para profissionais da saúde.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground">Funcionalidades</a></li>
              <li><a href="#pricing" className="hover:text-foreground">Preços</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Sobre</a></li>
              <li><a href="#" className="hover:text-foreground">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Termos</a></li>
              <li><a href="#" className="hover:text-foreground">Privacidade</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>© 2026 MedFlow Pro. Todos os direitos reservados.</p>
          <p className="mt-2">Ambiente de demonstração — dados fictícios. Não utilize para fins clínicos reais.</p>
        </div>
      </SectionContainer>
    </footer>
  )
}
