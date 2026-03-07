import Navbar from "@/components/Navbar";
import ContactSection from '@/components/ContactSection'
export const metadata = {
  title: 'Contact | Kailey Ventures',
  description: 'Initiate connection with our holding portfolio management.',
}

export default function ContactPage() {
  return (
    // min-h-screen ensure karega ki page height choti na pade, 
    // aur pt-20 (padding-top) navbar ke peeche content chupne nahi dega.
    <main className="flex flex-col min-h-screen bg-white pt-20">
        <Navbar />
      <ContactSection />
    </main>
  )
}