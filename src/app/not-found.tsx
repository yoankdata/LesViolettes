import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
    return (
        <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
            <Container className="text-center space-y-6">
                <h1 className="text-6xl font-bold text-violet-primary">404</h1>
                <h2 className="text-3xl font-semibold text-gray-900">Page non trouvée</h2>
                <p className="text-gray-600 max-w-md mx-auto">
                    La page que vous recherchez semble n&apos;avoir jamais existé ou a été déplacée.
                </p>
                <Button asChild>
                    <Link href="/">Retour à l&apos;accueil</Link>
                </Button>
            </Container>
        </div>
    );
}
