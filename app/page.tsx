import { Header } from "@/components/marketing/header"
import { Footer } from "@/components/marketing/footer"
import { Hero } from "@/components/marketing/hero"
import { SocialProof } from "@/components/marketing/social-proof"
import { Features } from "@/components/marketing/features"
import { Personas } from "@/components/marketing/personas"
import { Pricing } from "@/components/marketing/pricing"
import { FAQ } from "@/components/marketing/faq"
import { CTAFinal } from "@/components/marketing/cta"

export const dynamic = "force-static"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <Hero />
        <SocialProof />
        <Features />
        <Personas />
        <Pricing />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
