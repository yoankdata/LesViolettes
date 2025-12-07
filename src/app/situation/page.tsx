import type { Metadata } from "next";
import { MapPin, Train, Car, Plane } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "Accès & Situation | Résidence Les Violettes Toulouse Nord",
    description: "À 10 min du Capitole via Métro B (La Vache). Accès rapide périphérique et aéroport. Emplacement stratégique au calme.",
};

export default function SituationPage() {
    return (
        <>
            <section className="bg-gray-900 text-white py-20">
                <Container className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-white">Où sommes-nous ?</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Un emplacement stratégique au Nord de Toulouse, combinant calme résidentiel et accès immédiat aux grands axes.
                    </p>
                </Container>
            </section>

            <Section>
                <Container>
                    <div className="grid lg:grid-cols-3 gap-8 mb-12">
                        <Card className="border-none shadow-md">
                            <CardContent className="pt-6 flex flex-col items-center text-center">
                                <div className="bg-violet-50 p-4 rounded-full text-violet-primary mb-4">
                                    <Train className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Transports</h3>
                                <p className="text-gray-600">Bus 15 et 59 à proximité.</p>
                                <p className="text-sm text-gray-500 mt-2">Métro B (La Vache) à 1.5 km.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-md">
                            <CardContent className="pt-6 flex flex-col items-center text-center">
                                <div className="bg-violet-50 p-4 rounded-full text-violet-primary mb-4">
                                    <Car className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Accès Routier</h3>
                                <p className="text-gray-600">Sortie 33B (Lalande)</p>
                                <p className="text-sm text-gray-500 mt-2">Dir. Parc d&apos;activité de FONDEYRE (MIN).</p>
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-md">
                            <CardContent className="pt-6 flex flex-col items-center text-center">
                                <div className="bg-violet-50 p-4 rounded-full text-violet-primary mb-4">
                                    <Plane className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Distances Clés</h3>
                                <p className="text-gray-600">Capitole : 6 km</p>
                                <p className="text-sm text-gray-500 mt-2">Gare Matabiau : 5 km<br />Aéroport Blagnac : 7 km</p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                        <div className="grid md:grid-cols-3">
                            <div className="md:col-span-1 p-8 bg-gray-50 space-y-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-violet-deep mb-2">Adresse</h2>
                                    <address className="not-italic text-gray-600">
                                        Résidence Les Violettes<br />
                                        64 Impasse de la Glacière<br />
                                        31200 Toulouse
                                    </address>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-semibold text-gray-900">À proximité (rayon 7km) :</h3>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• Zone verte de Sesquières</li>
                                        <li>• Cité de l&apos;espace</li>
                                        <li>• Usine Aéroconstellation Airbus</li>
                                        <li>• Canal du Midi (Promenade)</li>
                                        <li>• Marché d&apos;Intérêt National (MIN)</li>
                                    </ul>
                                </div>
                                <Button className="w-full" asChild>
                                    <a href="https://www.google.com/maps/dir//64+Impasse+de+la+Glacière,+31200+Toulouse" target="_blank" rel="noopener noreferrer">
                                        Itinéraire GPS
                                    </a>
                                </Button>
                            </div>
                            <div className="md:col-span-2 min-h-[400px] bg-gray-200 relative">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    className="w-full h-full min-h-[400px]"
                                    frameBorder="0"
                                    title="Carte Résidence Les Violettes"
                                    scrolling="no"
                                    marginHeight={0}
                                    marginWidth={0}
                                    src="https://maps.google.com/maps?q=64%20Impasse%20de%20la%20Glaci%C3%A8re%2C%2031200%20Toulouse&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
