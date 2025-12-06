import type { Metadata } from "next";
import Link from "next/link";
import { Coffee, Wifi, Tv, User, CheckCircle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata: Metadata = {
    title: "Nos Chambres Confort | Résidence Les Violettes Toulouse",
    description: "Découvrez nos chambres rénovées pour 1 à 3 personnes. Wi-Fi gratuit, TV, parking. Le calme à 10 min du centre de Toulouse.",
};

export default function ChambresPage() {
    return (
        <>
            {/* Header */}
            <section className="bg-violet-deep text-white py-20 relative overflow-hidden">
                <Container className="relative z-10 text-center">
                    <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 border-none">Hôtellerie Classique</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4 text-white">Nos Chambres Confort</h1>
                    <p className="text-xl text-violet-100 max-w-2xl mx-auto">
                        Une escale reposante dans un cadre verdoyant et sécurisé.
                    </p>
                </Container>
                {/* Decoration bubble */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            </section>

            {/* Main Content */}
            <Section>
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 mb-16">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-violet-deep">Confort & Sérénité</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Nos chambres ont été pensées pour votre confort, que vous soyez seul, en couple ou avec un enfant.
                                Récemment rénovées, elles offrent une décoration sobre et apaisante, avec une literie de qualité hôtelière.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                    <Wifi className="text-violet-primary" /> <span>Wi-Fi Fibre Gratuit</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                    <Tv className="text-violet-primary" /> <span>TV Écran Plat</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                    <User className="text-violet-primary" /> <span>Accueil 7j/7</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                    <Coffee className="text-violet-primary" /> <span>Petit-déjeuner (opt.)</span>
                                </div>
                            </div>

                            <div className="pt-4">
                                <h3 className="font-bold text-gray-900 mb-2">Inclus dans votre tarif :</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-accent" /> Cabinet de toilette, douche et WC</li>
                                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-accent" /> Réfrigérateur et Micro-ondes</li>
                                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-accent" /> Accès à la "Véranda" commune avec TV</li>
                                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-accent" /> Ménage quotidien</li>
                                </ul>
                            </div>
                        </div>

                        {/* Gallery Grid */}
                        <div className="grid grid-cols-2 gap-4 h-min">
                            <img
                                src="/images/room-double-mirror.jpg"
                                alt="Chambre Double Confort"
                                className="rounded-lg shadow-md w-full h-64 object-cover col-span-2"
                            />
                            <img
                                src="/images/room-single-floral.jpg"
                                alt="Chambre Simple"
                                className="rounded-lg shadow-md w-full h-40 object-cover"
                            />
                            <img
                                src="/images/room-twin-green.jpg"
                                alt="Chambre Twin"
                                className="rounded-lg shadow-md w-full h-40 object-cover"
                            />
                        </div>
                    </div>

                    {/* Pricing Table */}
                    <Card className="max-w-4xl mx-auto overflow-hidden border-none shadow-xl">
                        <div className="bg-violet-primary p-6 text-white text-center">
                            <h3 className="text-2xl font-bold font-poppins text-white">Tarifs 2026</h3>
                            <p className="opacity-90">Meilleur tarif garanti en direct</p>
                        </div>
                        <CardContent className="p-0">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50 border-b">
                                        <tr>
                                            <th className="p-4 font-semibold text-gray-600">Type de Chambre</th>
                                            <th className="p-4 font-semibold text-gray-600">Capacité</th>
                                            <th className="p-4 font-semibold text-gray-600">Nuitée</th>
                                            <th className="p-4 font-semibold text-gray-600">Semaine (7 nuits)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="p-4 font-medium text-gray-900">Chambre Standard</td>
                                            <td className="p-4 text-gray-600">1 pers.</td>
                                            <td className="p-4 font-bold text-violet-primary">50 €</td>
                                            <td className="p-4 text-gray-800">350 €</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="p-4 font-medium text-gray-900">Chambre Double</td>
                                            <td className="p-4 text-gray-600">2 pers.</td>
                                            <td className="p-4 font-bold text-violet-primary">55 €</td>
                                            <td className="p-4 text-gray-800">385 €</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="p-4 font-medium text-gray-900">Chambre Triple</td>
                                            <td className="p-4 text-gray-600">3 pers.</td>
                                            <td className="p-4 font-bold text-violet-primary">70 €</td>
                                            <td className="p-4 text-gray-800">490 €</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="p-6 bg-gray-50 border-t text-sm text-gray-500 text-center">
                                (1) Tous nos tarifs sont en € TTC, y compris la Taxe de séjour.
                                <Link href="/contact" className="text-violet-primary hover:underline ml-1">Nous contacter</Link>.
                            </div>
                        </CardContent>
                    </Card>

                    <div className="mt-12 text-center">
                        <Button size="lg" className="px-12" asChild>
                            <Link href="/contact">Réserver cette chambre</Link>
                        </Button>
                    </div>
                </Container>
            </Section>
        </>
    );
}
