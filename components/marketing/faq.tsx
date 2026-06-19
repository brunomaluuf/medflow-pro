"use client"

import * as React from "react"
import { SectionContainer } from "@/components/shared/section-container"

const faqs = [
  { q: "Como funciona o teste grátis?", a: "14 dias sem compromisso. Não pedimos cartão de crédito." },
  { q: "Posso migrar meus dados de outro sistema?", a: "Sim! Oferecemos migração assistida gratuita." },
  { q: "O sistema é seguro?", a: "Criptografia de ponta a ponta e backup diário." },
  { q: "Tem suporte em português?", a: "Sim, equipe 100% brasileira via chat e email." },
  { q: "Posso cancelar quando quiser?", a: "Sim, sem multa ou burocracia." },
  { q: "Funciona no celular?", a: "Sim, aplicativo iOS e Android inclusos." },
  { q: "Serve para múltiplas unidades?", a: "Sim, o plano Enterprise atende redes de clínicas." },
]

export function FAQ() {
  return (
    <SectionContainer id="faq">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Perguntas frequentes</h2>
        <p className="text-muted-foreground">Tire suas dúvidas sobre o MedFlow Pro.</p>
      </div>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <details key={i} className="group rounded-lg border bg-card p-4">
            <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
              {faq.q}
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-3 text-muted-foreground">{faq.a}</p>
          </details>
        ))}
      </div>
    </SectionContainer>
  )
}
