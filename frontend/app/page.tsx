import Features from "@/landing/features";
import Footer from "@/landing/footer";
import HeroSection from "@/landing/hero";
import MeetAxo from "@/landing/MeetAxo";
import Navbar from "@/landing/navbar";
import Testimonial from "@/landing/testimonial";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-gray-900 to-gray-950">
      <Navbar />
      <div>
        <HeroSection />
        <MeetAxo />
        <Features />
        <Testimonial />
        <Footer />
      </div>
    </main>
  );
}
