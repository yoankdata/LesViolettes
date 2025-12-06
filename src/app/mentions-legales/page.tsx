import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
    title: "Mentions Légales | Résidence Les Violettes",
    description: "Mentions légales et informations juridiques de la Résidence Hôtelière Les Violettes.",
};

export default function MentionsLegalesPage() {
    return (
        <div className="py-20">
            <Container className="max-w-4xl space-y-8">
                <h1 className="text-3xl font-bold font-poppins mb-8">Mentions Légales</h1>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-violet-deep">1. Éditeur du site</h2>
                    <p className="text-gray-600">
                        Le site internet <strong>residencelesviolettes.com</strong> est édité par la Résidence Hôtelière Les Violettes.
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li><strong>Adresse :</strong> 64 Impasse de la Glacière, 31200 Toulouse</li>
                        <li><strong>Téléphone :</strong> 05 61 47 73 02</li>
                        <li><strong>Email :</strong> contact@residencelesviolettes.com</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-violet-deep">2. Hébergement</h2>
                    <p className="text-gray-600">
                        Ce site est hébergé par Vercel Inc.<br />
                        Adresse : 440 N Barranca Ave #4133 Covina, CA 91723<br />
                        États-Unis
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-violet-deep">3. Propriété intellectuelle</h2>
                    <p className="text-gray-600">
                        L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle.
                        Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-violet-deep">4. Données personnelles</h2>
                    <p className="text-gray-600">
                        Les informations recueillies via le formulaire de contact sont destinées exclusivement à la Résidence Les Violettes pour le traitement de votre demande.
                        Conformément à la loi « Informatique et Libertés », vous disposez d&apos;un droit d&apos;accès, de modification et de suppression de vos données.
                    </p>
                </section>
            </Container>
        </div>
    );
}
