import dynamic from "next/dynamic"
import CallToAction from "./_components/call-to-action"
import DashboardSnippet from "./_components/dashboard-snippet"
import SplashCursor from "./_components/SplashCursor/splashcursor"

const PricingSection = dynamic(
    () =>
        import("./_components/pricing").then(
            (component) => component.PricingSection,
        ),
    { ssr: true },
)

export default function Home() {
    return (
        <main className="md:px-10 py-20 flex flex-col gap-20">
            <SplashCursor/>
            <div>
                <CallToAction />
                <DashboardSnippet />
                <PricingSection />
            </div>
            
        </main>
    )
}
