import type { Metadata } from "next";
import Link from "next/link";
import { Utensils, Wifi, Layout, Calendar, CheckCircle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
    title: "Lourer un Studio Meublé à Toulouse | Résidence Les Violettes",
    description: "Studios 25m² avec kitchenette tout équipés. Location à la semaine ou au mois. Idéal étudiants, stagiaires, missions pro à Toulouse.",
};

export default function StudiosPage() {
    return (
        <>
            <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-20 relative overflow-hidden">
                <Container className="relative z-10 text-center">
                    <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 border-none">Longue Durée & Indépendance</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4 text-white">Nos Studios Meublés</h1>
                    <p className="text-xl text-green-50 max-w-2xl mx-auto">
                        Vivez à votre rythme dans un espace de 25m² entièrement pensé pour votre quotidien.
                    </p>
                </Container>
            </section>

            <Section>
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <img
                                src="/images/studio-bed-living.jpg"
                                alt="Studio Meublé 25m²"
                                className="rounded-2xl shadow-lg mb-8 w-full object-cover h-[250px] md:h-[350px]"
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <img src="/images/studio-kitchen-1.jpg" alt="Kitchenette Équipée" className="rounded-xl shadow w-full h-40 object-cover" />
                                <img src="/images/studio-kitchen-2.jpg" alt="Espace Repas" className="rounded-xl shadow w-full h-40 object-cover" />
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-violet-deep mb-4">Comme à la maison</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                    Nos studios de 25m² vous offrent une autonomie totale. Cuisinez vos plats préférés grâce à la kitchenette équipée, travaillez sur votre bureau dédié, et détendez-vous devant la télévision.
                                </p>
                                <p className="text-gray-600">
                                    <strong>Services inclus :</strong> Ménage quotidien et fourniture du linge de lit et de toilette (hebdomadaire).
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-semibold text-xl text-gray-900">Équipements Premium</h3>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                                        <Layout className="text-green-accent" />
                                        <span className="text-gray-700">Surface 25m²</span>
                                    </li>
                                    <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                                        <Utensils className="text-green-accent" />
                                        <span className="text-gray-700">Kitchenette & SDB complètes</span>
                                    </li>
                                    <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                                        <Wifi className="text-green-accent" />
                                        <span className="text-gray-700">Wi-Fi Haut Débit</span>
                                    </li>
                                    <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                                        <Calendar className="text-green-accent" />
                                        <span className="text-gray-700">Tarifs dégressifs</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-violet-50 p-6 rounded-xl border border-violet-100">
                                <h3 className="font-bold text-violet-deep mb-2">Idéal pour :</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start text-gray-700">
                                        <CheckCircle className="w-5 h-5 mr-2 text-violet-primary shrink-0 mt-0.5" />
                                        Salariés en mission (Airbus, Thales...)
                                    </li>
                                    <li className="flex items-start text-gray-700">
                                        <CheckCircle className="w-5 h-5 mr-2 text-violet-primary shrink-0 mt-0.5" />
                                        Étudiants et stagiaires
                                    </li>
                                    <li className="flex items-start text-gray-700">
                                        <CheckCircle className="w-5 h-5 mr-2 text-violet-primary shrink-0 mt-0.5" />
                                        Séjours de transition ou relogement
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-4">
                                <Button size="lg" className="w-full sm:w-auto text-lg px-8 bg-green-accent hover:bg-green-600 text-white" asChild>
                                    <Link href="/contact">Demander un devis mensuel</Link>
                                </Button>
                                <p className="mt-4 text-sm text-gray-500">
                                    Disponibilités limitées pour les longues durées. Contactez-nous à l&apos;avance.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
