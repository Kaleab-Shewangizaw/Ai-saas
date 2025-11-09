import HeroSection from "@/landing/hero";
import Navbar from "@/landing/navbar";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-gray-900 to-gray-950">
      <Navbar />
      <div>
        {" "}
        {/* Add padding to account for fixed navbar */}
        <HeroSection />
      </div>
    </main>
  );
}
