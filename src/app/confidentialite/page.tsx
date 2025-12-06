import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
    title: "Politique de Confidentialité | Résidence Les Violettes",
    description: "Notre politique concernant la gestion de vos données personnelles et des cookies.",
};

export default function ConfidentialitePage() {
    return (
        <div className="py-20">
            <Container className="max-w-4xl space-y-8">
                <h1 className="text-3xl font-bold font-poppins mb-8">Politique de Confidentialité</h1>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-violet-deep">Gestion des cookies</h2>
                    <p className="text-gray-600">
                        Ce site utilise un nombre minimal de cookies techniques nécessaires au bon fonctionnement de la navigation.
                        Aucun cookie publicitaire ou de traçage tiers n&apos;est installé sans votre consentement explicite.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-violet-deep">Utilisation des données</h2>
                    <p className="text-gray-600">
                        Les données transmises via notre formulaire de contact (Nom, Email, Téléphone) sont utilisées uniquement pour répondre à votre demande de réservation ou d&apos;information.
                        Elles ne sont jamais cédées, vendues ou louées à des tiers.
                    </p>
                </section>
            </Container>
        </div>
    );
}
