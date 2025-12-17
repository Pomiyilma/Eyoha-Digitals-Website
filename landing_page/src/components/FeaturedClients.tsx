import { ClientCard } from "./ClientCard";

export default function FeaturedClients() {
    return (
        <section className="bg-white py-24 px-4">
            <div className="max-w-7xl mx-auto">
           

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ClientCard
                        companyName="TechFlow Solutions"
                        tagline="TechFlow Solutions"
                        logo="/path-to-logo.png"
                        testimonial='"Exceptional digital transformation that increased our conversion rate by 340%"'
                        category="E-commerce Platform"
                        accentTheme="orange"
                    />

                    <ClientCard
                        companyName="FinanceCore Group"
                        tagline="FinanceCore Group"
                        logo="/path-to-logo-2.png"
                        testimonial='"Outstanding mobile app development that revolutionized our customer experience"'
                        category="Mobile Banking App"
                        accentTheme="purple"
                    />

                
                </div>
            </div>
        </section>
    );
}
