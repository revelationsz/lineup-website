import AnimatedBlurImage from '../components/AnimatedBlurImage'
import EmailSignup from '../components/EmailSignup'
import WaitlistCounter from '../components/WaitlistCounter'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ═══════════════ Section 1 — Hero ═══════════════ */}
      <section className="section-dark relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24">
        {/* Moving gradient background — purple flowing through black */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="gradient-blob absolute w-[500px] h-[500px] rounded-full opacity-100"
            style={{
              background: 'radial-gradient(ellipse, rgba(138, 92, 246, 0.9), transparent 65%)',
              filter: 'blur(100px)',
              top: '10%',
              left: '5%',
            }}
          />
          <div
            className="gradient-blob absolute w-[450px] h-[450px] rounded-full opacity-80"
            style={{
              background: 'radial-gradient(ellipse, rgba(71, 1, 235, 0.81), transparent 65%)',
              filter: 'blur(100px)',
              top: '60%',
              right: '10%',
            }}
          />
          <div
            className="gradient-blob absolute w-[480px] h-[480px] rounded-full opacity-80"
            style={{
              background: 'radial-gradient(ellipse, rgba(71, 16, 199, 0.96), transparent 65%)',
              filter: 'blur(50px)',
              bottom: '20%',
              left: '20%',
            }}
          />
          <div
            className="gradient-blob absolute w-[420px] h-[420px] rounded-full opacity-80"
            style={{
              background: 'radial-gradient(ellipse, rgba(76, 22, 201, 0.81), transparent 100%)',
              filter: 'blur(50px)',
              top: '30%',
              right: '25%',
            }}
          />
        </div>
        <div className="relative z-10 flex flex-col items-center">
        <h1 className="display-text text-display-hero text-white mb-6">
          LINEUP
        </h1>
        <p className="font-headline text-display-sub text-white/90 mb-4">
          Know Where the Night is Going
        </p>
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-10">
          Real-time, crowd-sourced bar reviews so you always pick the best spot.
          See line length, music, crowd levels, cover charge, and more — all in one app.
        </p>
        <a
          href="https://apps.apple.com/app/id6743187492"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-lime text-lg"
        >
          Download on iOS
        </a>
        </div>
      </section>

      {/* ═══════════════ Section 2 — Marquee Ticker ═══════════════ */}
      <section className="section-dark py-6 overflow-hidden border-y border-white/10">
        <div className="relative">
          <div
            className="flex whitespace-nowrap"
            style={{ animation: 'marquee 30s linear infinite' }}
          >
            {[...Array(2)].map((_, i) => (
              <span key={i} className="flex items-center gap-8 text-sm font-bold tracking-widest text-white/40 uppercase px-8">
                <span>Live Reviews</span>
                <span className="text-[#8B5CF6]">/</span>
                <span>Crowd Levels</span>
                <span className="text-[#8B5CF6]">/</span>
                <span>Line Length</span>
                <span className="text-[#8B5CF6]">/</span>
                <span>Music Ratings</span>
                <span className="text-[#8B5CF6]">/</span>
                <span>Cover Charge</span>
                <span className="text-[#8B5CF6]">/</span>
                <span>Bar Map</span>
                <span className="text-[#8B5CF6]">/</span>
                <span>Safety Scores</span>
                <span className="text-[#8B5CF6]">/</span>
                <span>Real-Time Data</span>
                <span className="text-[#8B5CF6]">/</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3 — How It Works ═══════════════ */}
      <section className="section-light py-24 px-6">
        <div className="max-w-content mx-auto">
          <p className="text-sm font-bold tracking-widest text-[#0A0A0A]/40 uppercase mb-4">
            How It Works
          </p>
          <h2 className="display-text text-display-sub text-[#0A0A0A] mb-16">
            THREE SIMPLE STEPS
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <span className="display-text text-6xl text-[#8B5CF6]">01</span>
              <h3 className="text-2xl font-bold text-[#0A0A0A] mt-4 mb-3">Open the App</h3>
              <p className="text-[#0A0A0A]/60 leading-relaxed">
                Download LineUp and instantly see every bar near you with real-time data on what&apos;s happening right now.
              </p>
            </div>
            <div>
              <span className="display-text text-6xl text-[#8B5CF6]">02</span>
              <h3 className="text-2xl font-bold text-[#0A0A0A] mt-4 mb-3">Check the Vibe</h3>
              <p className="text-[#0A0A0A]/60 leading-relaxed">
                Browse crowd-sourced reviews — line length, music type, cover charge, crowd level — all updated in real time by people already there.
              </p>
            </div>
            <div>
              <span className="display-text text-6xl text-[#8B5CF6]">03</span>
              <h3 className="text-2xl font-bold text-[#0A0A0A] mt-4 mb-3">Head Out</h3>
              <p className="text-[#0A0A0A]/60 leading-relaxed">
                Pick the perfect spot and go. No more guessing, no more bar-hopping blind. You know exactly what to expect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4 — Visual Showcase ═══════════════ */}
      <section className="section-dark py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="gradient-blob absolute w-[400px] h-[400px] rounded-full opacity-60"
            style={{
              background: 'radial-gradient(ellipse, rgba(138, 92, 246, 0.7), transparent 65%)',
              filter: 'blur(100px)',
              top: '10%',
              right: '5%',
            }}
          />
          <div
            className="gradient-blob absolute w-[350px] h-[350px] rounded-full opacity-80"
            style={{
              background: 'radial-gradient(ellipse, rgba(71, 16, 199, 0.8), transparent 103%)',
              filter: 'blur(100px)',
              bottom: '10%',
              left: '10%',
            }}
          />
        </div>
        <div className="max-w-content mx-auto text-center relative z-10">
          <h2 className="display-text text-display-sub text-white mb-12">
            SEE WHAT&apos;S HAPPENING<br />RIGHT NOW
          </h2>
          <div className="flex justify-center">
            <AnimatedBlurImage
              src="https://i.postimg.cc/05CxBfCX/bar-app-mockup-for-website-copy.png"
              alt="LineUp App Interface"
              className="max-w-full md:max-w-3xl rounded-image shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5 — Stats ═══════════════ */}
      <section className="section-dark py-24 px-6 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="gradient-blob absolute w-[450px] h-[450px] rounded-full opacity-50"
            style={{
              background: 'radial-gradient(ellipse, rgba(138, 92, 246, 0.7), transparent 85%)',
              filter: 'blur(100px)',
              top: '-20%',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
          <div
            className="gradient-blob absolute w-[380px] h-[380px] rounded-full opacity-40"
            style={{
              background: 'radial-gradient(ellipse, rgba(80, 15, 231, 0.9), transparent 75%)',
              filter: 'blur(100px)',
              bottom: '-10%',
              right: '15%',
            }}
          />
        </div>
        <div className="max-w-content mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="display-text text-5xl md:text-6xl text-white mb-2">500+</div>
              <p className="text-white/50 text-lg">Bars Tracked</p>
            </div>
            <div>
              <div className="display-text text-5xl md:text-6xl text-white mb-2">5</div>
              <p className="text-white/50 text-lg">Review Categories</p>
            </div>
            <div>
              <WaitlistCounter />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 6 — Testimonials ═══════════════ */}
      <section className="section-light py-24 px-6">
        <div className="max-w-content mx-auto">
          <p className="text-sm font-bold tracking-widest text-[#0A0A0A]/40 uppercase mb-4">
            What People Are Saying
          </p>
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div>
              <blockquote className="text-3xl md:text-4xl font-headline font-bold text-[#0A0A0A] leading-tight mb-6">
                &ldquo;Finally, an app that tells me what&apos;s actually happening before I leave the house.&rdquo;
              </blockquote>
              <p className="text-[#0A0A0A]/50 font-medium">— Early Beta User, Boston</p>
            </div>
            <div>
              <blockquote className="text-3xl md:text-4xl font-headline font-bold text-[#0A0A0A] leading-tight mb-6">
                &ldquo;No more showing up to a dead bar. LineUp changed how my friend group goes out.&rdquo;
              </blockquote>
              <p className="text-[#0A0A0A]/50 font-medium">— Waitlist Member</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 7 — Lime CTA ═══════════════ */}
      <section className="section-lime py-24 px-6">
        <div className="max-w-content mx-auto text-center">
          <h2 className="display-text text-display-sub text-white mb-8">
            READY TO CHANGE<br />HOW YOU GO OUT?
          </h2>
          <a
            href="https://apps.apple.com/app/id6743187492"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark text-lg"
          >
            Download LineUp
          </a>
        </div>
      </section>

      {/* ═══════════════ Section 8 — Feature Details ═══════════════ */}
      <section className="section-dark py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="gradient-blob absolute w-[420px] h-[420px] rounded-full opacity-50"
            style={{
              background: 'radial-gradient(ellipse, rgba(71, 1, 235, 0.9), transparent 65%)',
              filter: 'blur(100px)',
              top: '20%',
              left: '-10%',
            }}
          />
          <div
            className="gradient-blob absolute w-[400px] h-[400px] rounded-full opacity-45"
            style={{
              background: 'radial-gradient(ellipse, rgba(138, 92, 246, 0.85), transparent 65%)',
              filter: 'blur(100px)',
              bottom: '20%',
              right: '-5%',
            }}
          />
          <div
            className="gradient-blob absolute w-[350px] h-[350px] rounded-full opacity-40"
            style={{
              background: 'radial-gradient(ellipse, rgba(71, 16, 199, 0.88), transparent 65%)',
              filter: 'blur(100px)',
              top: '50%',
              left: '40%',
            }}
          />
        </div>
        <div className="max-w-content mx-auto space-y-24 relative z-10">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold tracking-widest text-[#8B5CF6] uppercase mb-4">Live Bar Reviews</p>
              <h3 className="display-text text-3xl md:text-4xl text-white mb-6">
                KNOW BEFORE YOU GO
              </h3>
              <p className="text-white/60 text-lg leading-relaxed">
                See real-time crowd-sourced data on line length, music genre, cover charge, crowd density, and safety — updated live by people who are already there.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-[4/3] bg-white/5 rounded-image border border-white/10 flex items-center justify-center">
                <span className="text-white/20 text-sm">App Screenshot</span>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <div className="w-full max-w-md aspect-[4/3] bg-white/5 rounded-image border border-white/10 flex items-center justify-center">
                <span className="text-white/20 text-sm">Map View</span>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-sm font-bold tracking-widest text-[#8B5CF6] uppercase mb-4">Interactive Map</p>
              <h3 className="display-text text-3xl md:text-4xl text-white mb-6">
                FIND YOUR NEXT STOP
              </h3>
              <p className="text-white/60 text-lg leading-relaxed">
                Browse bars on a live interactive map with your current location. Tap any bar to see details, then get directions with one tap.
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold tracking-widest text-[#8B5CF6] uppercase mb-4">Smart Sorting & Filters</p>
              <h3 className="display-text text-3xl md:text-4xl text-white mb-6">
                YOUR NIGHT, YOUR WAY
              </h3>
              <p className="text-white/60 text-lg leading-relaxed">
                Sort by distance, line length, music type, or name. Filter by what matters to you and save your favorites for quick access later.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-[4/3] bg-white/5 rounded-image border border-white/10 flex items-center justify-center">
                <span className="text-white/20 text-sm">Sort & Filter</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 9 — Final CTA + Email Signup ═══════════════ */}
      <section className="section-dark py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="gradient-blob absolute w-[500px] h-[500px] rounded-full opacity-70"
            style={{
              background: 'radial-gradient(ellipse, rgba(138, 92, 246, 0.8), transparent 65%)',
              filter: 'blur(100px)',
              top: '10%',
              left: '20%',
            }}
          />
          <div
            className="gradient-blob absolute w-[450px] h-[450px] rounded-full opacity-60"
            style={{
              background: 'radial-gradient(ellipse, rgba(71, 1, 235, 0.7), transparent 65%)',
              filter: 'blur(100px)',
              bottom: '10%',
              right: '15%',
            }}
          />
          <div
            className="gradient-blob absolute w-[400px] h-[400px] rounded-full opacity-50"
            style={{
              background: 'radial-gradient(ellipse, rgba(76, 22, 201, 0.75), transparent 65%)',
              filter: 'blur(100px)',
              top: '40%',
              right: '30%',
            }}
          />
        </div>
        <div className="max-w-content mx-auto text-center relative z-10">
          <h2 className="display-text text-display-hero text-white mb-4">
            JOIN THE<br />LINEUP
          </h2>
          <p className="text-white/50 text-lg md:text-xl mb-12 max-w-xl mx-auto">
            Get notified when we launch in your city
          </p>
          <EmailSignup />
        </div>
      </section>
    </div>
  )
}
