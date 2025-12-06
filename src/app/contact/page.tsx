import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata: Metadata = {
    title: "Contactez-nous | Résidence Hôtelière Les Violettes",
    description: "Réservez votre chambre ou studio à Toulouse. Contact direct par téléphone ou email. Réponse rapide.",
};

export default function ContactPage() {
    return (
        <>
            <section className="bg-violet-deep text-white py-16">
                <Container className="text-center">
                    <h1 className="text-4xl font-bold font-poppins mb-4 text-white">Contact & Réservations</h1>
                    <p className="text-lg opacity-90">Nous sommes à votre écoute 7j/7.</p>
                </Container>
            </section>

            <Section>
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Coordonnées</h2>
                                <div className="space-y-6">
                                    <Card className="border-none shadow-sm bg-violet-50">
                                        <CardContent className="flex items-center p-6 gap-4">
                                            <div className="bg-white p-3 rounded-full text-violet-primary shadow-sm"><Phone /></div>
                                            <div>
                                                <p className="text-sm text-gray-500 font-semibold uppercase">Téléphone</p>
                                                <a href="tel:0561477302" className="text-xl font-bold text-gray-900 hover:text-violet-primary">05 61 47 73 02</a>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card className="border-none shadow-sm bg-violet-50">
                                        <CardContent className="flex items-center p-6 gap-4">
                                            <div className="bg-white p-3 rounded-full text-violet-primary shadow-sm"><Mail /></div>
                                            <div>
                                                <p className="text-sm text-gray-500 font-semibold uppercase">Email</p>
                                                <a href="mailto:contact@residencelesviolettes.com" className="text-lg font-bold text-gray-900 hover:text-violet-primary break-all">contact@residencelesviolettes.com</a>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card className="border-none shadow-sm bg-violet-50">
                                        <CardContent className="flex items-center p-6 gap-4">
                                            <div className="bg-white p-3 rounded-full text-violet-primary shadow-sm"><MapPin /></div>
                                            <div>
                                                <p className="text-sm text-gray-500 font-semibold uppercase">Adresse</p>
                                                <p className="text-lg font-bold text-gray-900">
                                                    64 Impasse de la Glacière<br />31200 Toulouse
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Envoyer un message</h2>
                            <p className="text-gray-500 mb-6">Pour toute demande de disponibilité ou de devis.</p>

                            <form className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-700">Nom complet</label>
                                        <input type="text" id="name" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-violet-primary focus:border-transparent outline-none transition-all" placeholder="Votre nom" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-gray-700">Téléphone</label>
                                        <input type="tel" id="phone" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-violet-primary focus:border-transparent outline-none transition-all" placeholder="Votre numéro" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" id="email" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-violet-primary focus:border-transparent outline-none transition-all" placeholder="votre@email.com" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                    <textarea id="message" rows={4} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-violet-primary focus:border-transparent outline-none transition-all" placeholder="Dates souhaitées, nombre de personnes..."></textarea>
                                </div>
                                <Button size="lg" className="w-full mt-2">Envoyer la demande</Button>
                            </form>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
