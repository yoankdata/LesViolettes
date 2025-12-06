import Link from "next/link";
import { Wifi, Car, Monitor, MapPin, ArrowRight, Phone, Coffee } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/exterior-front.jpg"
            alt="Résidence Les Violettes - Façade"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-violet-deep/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <Container className="relative z-10 text-center text-white space-y-8 max-w-4xl">
          <Badge variant="success" className="mb-4 px-4 py-1 text-sm uppercase tracking-widest bg-green-accent text-white border-none">
            Bienvenue à Toulouse
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins leading-tight tracking-tight drop-shadow-lg text-white">
            Résidence Hôtelière
            <br />
            <span className="text-green-accent">Les Violettes</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-100 max-w-2xl mx-auto font-light leading-relaxed">
            Votre chez-vous, au cœur nord de Toulouse.
            <br />
            Studios tout équipés pour séjours courts et longs.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="bg-green-accent hover:bg-green-600 border-none text-white font-semibold px-10 h-14 text-lg" asChild>
              <Link href="/chambres">Découvrir nos Chambres</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-violet-deep h-14 px-10 text-lg" asChild>
              <Link href="/contact">Nous Contacter</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Intro Section */}
      <Section className="bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-violet-deep">Séjournez en toute liberté</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Située à Toulouse - Fondeyre (Nord-Est), à proximité de la zone de Sesquières, notre résidence vous accueille pour vos déplacements professionnels ou familiaux.
                Nous proposons des solutions d&apos;hébergement flexibles : à la nuit, à la semaine ou au mois.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Le centre-ville est accessible en quelques minutes via le Métro B, et le Canal du Midi est tout proche pour vos balades.
              </p>
              <div className="pt-4">
                <Link href="/situation" className="text-violet-primary font-semibold hover:underline inline-flex items-center">
                  Voir notre emplacement <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
              <img
                src="/images/interior-veranda.jpg"
                alt="Espace Véranda et Détente"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Features Grid - 4 Main Icons */}
      <Section bg="gray">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Wifi, title: "Wi-Fi Fibre", desc: "Haut débit gratuit illimité" },
              { icon: Car, title: "Parking", desc: "Stationnement privé disponible" },
              { icon: Monitor, title: "Studios 25m²", desc: "Espace et confort garantis" },
              { icon: MapPin, title: "Accès Métro", desc: "La Vache (Ligne B) à 400m" },
            ].map((feature, idx) => (
              <Card key={idx} className="border-none shadow-sm hover:shadow-lg transition-all duration-300 text-center py-8">
                <CardContent className="flex flex-col items-center pt-6">
                  <div className="h-14 w-14 rounded-full bg-violet-50 flex items-center justify-center mb-6 text-violet-primary">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-500">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Rooms & Studios Teaser */}
      <Section>
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-violet-deep mb-4">Nos Hébergements</h2>
            <p className="text-gray-600 text-lg">
              Du court séjour à la location au mois, nous avons la formule adaptée à vos besoins.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Chambres */}
            <Card className="flex flex-col h-full border-none shadow-lg group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/images/room-spacious-wood.jpg"
                  alt="Chambre Double Spacieuse"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Badge className="absolute top-4 right-4 bg-white text-violet-deep font-bold shadow-md">
                  Dès 50€ / nuit
                </Badge>
              </div>
              <CardContent className="flex-grow pt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Chambres Hôtelières</h3>
                <p className="text-gray-600 mb-4">
                  Parfait pour une escale ou un week-end à Toulouse. Confort, calme et services inclus pour 1 à 3 personnes.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-gray-500">
                  <li className="flex items-center"><Coffee className="w-4 h-4 mr-2 text-green-accent" /> TV & Wi-Fi Inclus</li>
                  <li className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-green-accent" /> Proche Métro</li>
                  <li className="flex items-center"><Coffee className="w-4 h-4 mr-2 text-green-accent" /> Accès Véranda</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-violet-primary hover:bg-violet-deep" asChild>
                  <Link href="/chambres">Voir les Chambres</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Studios */}
            <Card className="flex flex-col h-full border-none shadow-lg group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/images/studio-bed-living.jpg"
                  alt="Studio Kitchenette"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Badge className="absolute top-4 right-4 bg-white text-green-accent font-bold shadow-md">
                  Tout équipé
                </Badge>
              </div>
              <CardContent className="flex-grow pt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Studios Meublés</h3>
                <p className="text-gray-600 mb-4">
                  Pour vos séjours longs ou votre indépendance. Kitchenette équipée, espace de vie de 25m² et tarifs dégressifs.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-gray-500">
                  <li className="flex items-center"><Coffee className="w-4 h-4 mr-2 text-green-accent" /> Kitchenette Privée</li>
                  <li className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-green-accent" /> Location Mois Possible</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-accent hover:bg-green-600 text-white" asChild>
                  <Link href="/studios">Découvrir les Studios</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Location Preview */}
      <Section bg="gray">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 h-[400px] bg-gray-300 rounded-xl overflow-hidden shadow-inner relative">
              {/* Parking Image instead of Map Placeholder */}
              <img
                src="/images/parking-courtyard.jpg"
                alt="Parking Privé et Cour Intérieure"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900/10">
                {/* Optional Overlay if text needed, leaving clean for now */}
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl font-bold text-violet-deep">Situation Privilégiée</h2>
              <p className="text-gray-600 text-lg">
                Situé au 64 Impasse de la Glacière, 31200 Toulouse.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-violet-100 p-2 rounded-full mr-4 text-violet-primary"><MapPin size={20} /></span>
                  <div>
                    <strong className="block text-gray-900">Métro La Vache (Ligne B)</strong>
                    <span className="text-gray-500">À seulement 5 minutes à pied. Accès direct Jean Jaurès.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 p-2 rounded-full mr-4 text-green-accent"><Car size={20} /></span>
                  <div>
                    <strong className="block text-gray-900">Accès Périphérique & Airbus</strong>
                    <span className="text-gray-500">Sortie Sesquières rapide. Idéal pour les professionnels.</span>
                  </div>
                </li>
              </ul>
              <Button variant="outline" className="mt-4" asChild>
                <Link href="/situation">Voir les détails d&apos;accès</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Strip */}
      <section className="bg-violet-deep py-16 text-center text-white">
        <Container>
          <h2 className="text-3xl font-bold mb-6">Prêt à réserver votre séjour ?</h2>
          <p className="text-violet-100 mb-8 max-w-2xl mx-auto text-lg">
            Contactez-nous directement pour obtenir le meilleur tarif garanti et vérifier les disponibilités en temps réel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-violet-deep hover:bg-gray-100 border-none font-bold" asChild>
              <a href="tel:0561477302"><Phone className="mr-2 h-5 w-5" /> 05 61 47 73 02</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/contact">Envoyer un message</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
