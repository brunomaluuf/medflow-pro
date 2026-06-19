import { SectionContainer } from "@/components/shared/section-container"

export function SocialProof() {
  return (
    <SectionContainer className="py-12">
      <div className="text-center mb-8">
        <p className="text-sm text-muted-foreground">Confiado por +10.000 profissionais</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
        {["Clínica A", "Saúde+", "VidaPlena", "BemEstar", "MedCenter"].map((name) => (
          <div key={name} className="text-lg font-semibold text-muted-foreground">{name}</div>
        ))}
      </div>
    </SectionContainer>
  )
}
