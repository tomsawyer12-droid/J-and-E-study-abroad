import { Contact } from '../components/Contact';

export function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen text-white overflow-hidden flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
            alt="Study Abroad Student"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: 1 }}></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(130, 24, 26, 0.5), rgba(0, 0, 0, 0.4))', zIndex: 2 }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-base sm:text-xl text-white/90">We're here to help you every step of the way</p>
        </div>
      </section>

      {/* Contact Component - Overlapping the hero */}
      <div className="relative z-20 -mt-24 pb-20">
        <Contact />
      </div>
    </div>
  );
}