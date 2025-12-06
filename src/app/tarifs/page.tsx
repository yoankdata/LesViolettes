import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "Tarifs & Réservation | Résidence Les Violettes Toulouse",
    description: "Consultez nos tarifs nuitée et semaine. Meilleur prix garanti en direct. Chambres dès 50€.",
};

export default function TarifsPage() {
    return (
        <>
            <Section className="bg-violet-50/50">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h1 className="text-4xl font-bold text-violet-deep mb-4">Nos Tarifs</h1>
                        <p className="text-lg text-gray-600">
                            Transparence et flexibilité. Réservez en direct par téléphone ou email pour éviter les commissions des plateformes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Court Séjour */}
                        <Card className="border-t-4 border-t-violet-primary">
                            <CardContent className="pt-8 text-center">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Court Séjour</h2>
                                <p className="text-gray-500 mb-6">À la nuitée (moins d&apos;une semaine)</p>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <span className="font-medium">1 Personne</span>
                                        <span className="text-2xl font-bold text-violet-primary">50 € <span className="text-sm font-normal text-gray-400">/nuit</span></span>
                                    </div>
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <span className="font-medium">2 Personnes</span>
                                        <span className="text-2xl font-bold text-violet-primary">55 € <span className="text-sm font-normal text-gray-400">/nuit</span></span>
                                    </div>
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <span className="font-medium">3 Personnes</span>
                                        <span className="text-2xl font-bold text-violet-primary">70 € <span className="text-sm font-normal text-gray-400">/nuit</span></span>
                                    </div>
                                </div>

                                <Button className="w-full" asChild>
                                    <Link href="/contact">Vérifier la disponibilité</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        {/* À la Semaine */}
                        <Card className="border-t-4 border-t-green-accent">
                            <CardContent className="pt-8 text-center">
                                <div className="absolute top-0 right-0 p-2">
                                    <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">Économique</span>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Semaine</h2>
                                <p className="text-gray-500 mb-6">Tarif forfaitaire 7 nuits</p>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <span className="font-medium">1 Personne</span>
                                        <span className="text-2xl font-bold text-green-600">350 € <span className="text-sm font-normal text-gray-400">/sem</span></span>
                                    </div>
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <span className="font-medium">2 Personnes</span>
                                        <span className="text-2xl font-bold text-green-600">385 € <span className="text-sm font-normal text-gray-400">/sem</span></span>
                                    </div>
                                    <div className="flex justify-between items-center border-b pb-2">
                                        <span className="font-medium">3 Personnes</span>
                                        <span className="text-2xl font-bold text-green-600">490 € <span className="text-sm font-normal text-gray-400">/sem</span></span>
                                    </div>
                                </div>

                                <Button className="w-full bg-green-accent hover:bg-green-600 border-none" asChild>
                                    <Link href="/contact">Réserver une semaine</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="max-w-4xl mx-auto mt-12 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-4 text-violet-deep">Conditions & Services</h3>
                        <ul className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                            <li className="flex items-start"><Check className="w-5 h-5 text-green-accent mr-2 shrink-0" /> Taxe de séjour : Incluse dans nos tarifs TTC.</li>
                            <li className="flex items-start"><Check className="w-5 h-5 text-green-accent mr-2 shrink-0" /> Arrivée : 14h00 - 20h00. Départ : 11h00.</li>
                            <li className="flex items-start"><Check className="w-5 h-5 text-green-accent mr-2 shrink-0" /> Annulation : Gratuite jusqu&apos;à 24h avant l&apos;arrivée.</li>
                            <li className="flex items-start"><Check className="w-5 h-5 text-green-accent mr-2 shrink-0" /> Moyens de paiement : CB, Espèces, Virements, Chèques Vacances.</li>
                        </ul>
                        <div className="mt-6 pt-6 border-t font-medium text-gray-800 text-center">
                            Pour les séjours au MOIS en Studio : <Link href="/contact" className="text-violet-primary underline">Contactez-nous pour un devis personnalisé</Link>.
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
