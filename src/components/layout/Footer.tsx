import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 relative rounded-lg overflow-hidden bg-white p-0.5">
                                <img
                                    src="/images/logo-violettes.jpg"
                                    alt="Les Violettes"
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>
                            <span className="font-poppins font-bold text-xl text-white">Les Violettes</span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Résidence hôtelière calme et moderne à Toulouse. Séjours court et long terme tout confort.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-poppins font-semibold text-white mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            {[
                                { label: "Accueil", href: "/" },
                                { label: "Nos Chambres", href: "/chambres" },
                                { label: "Nos Studios", href: "/studios" },
                                { label: "Tarifs", href: "/tarifs" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm hover:text-violet-primary transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-poppins font-semibold text-white mb-4">Nous contacter</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm">
                                <MapPin className="h-5 w-5 text-violet-primary shrink-0" />
                                <span>64 Impasse de la Glacière,<br />31200 Toulouse</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <Phone className="h-5 w-5 text-violet-primary shrink-0" />
                                <a href="tel:0561477302" className="hover:text-white transition-colors">05 61 47 73 02</a>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <Mail className="h-5 w-5 text-violet-primary shrink-0" />
                                <a href="mailto:contact@residencelesviolettes.com" className="hover:text-white transition-colors">contact@residencelesviolettes.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-poppins font-semibold text-white mb-4">Informations</h3>
                        <ul className="space-y-2">
                            {[
                                { label: "Mentions Légales", href: "/mentions-legales" },
                                { label: "Politique de Confidentialité", href: "/confidentialite" },
                                { label: "Plan du site", href: "/sitemap" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm hover:text-violet-primary transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                    <p>&copy; {currentYear} <a href="https://www.bloneagency.fr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Blone</a>. Tous droits réservés.</p>
                </div>
            </Container>
        </footer>
    );
}
