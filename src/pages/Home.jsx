import { Link } from "react-router-dom";

const programs = [
  "Scholarship",
  "Education + Skills",
  "Academic Excellence",
  "Teachers",
  "Digital Learning",
  "Enterprise",
];

function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* =====================================================
    01 — HERO
====================================================== */}
      <section className="relative min-h-[calc(100svh-84px)] overflow-hidden border-b border-primary/50 bg-primary-light px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-28 md:px-8 md:pb-24 md:pt-28 lg:px-10 lg:pb-28 lg:pt-28 xl:px-12 2xl:px-16">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1.05fr_0.75fr] lg:gap-14">
          <div>
            <p className="mb-6 text-[0.88rem] font-black uppercase tracking-[0.22em] text-primary">
              Onicha Education Foundation
            </p>

            <h1 className="max-w-7xl font-display text-[3.4rem] font-medium uppercase leading-[0.86] tracking-[-0.045em] text-text sm:text-[4.2rem] md:text-[5.4rem] lg:text-[6rem] xl:text-[5rem]">
              Lighting the flame, one torch at a time.
            </h1>

            <p className="mt-10 max-w-2xl text-base leading-8 text-text-secondary md:text-lg lg:text-[1.3rem] md:leading-8">
              OEF creates educational opportunities that help young people
              learn, grow, discover their potential, and contribute meaningfully
              to the future of Onicha-Igboeze.
            </p>

            <div className="mt-15 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 rounded-sm border border-primary bg-primary px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-surface transition-all duration-300 hover:-translate-y-1 hover:bg-primary-dark"
              >
                Discover OEF
              </Link>

              <Link
                to="/programs"
                className="inline-flex items-center gap-3 rounded-sm border border-border bg-surface px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-text transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary-light hover:text-primary"
              >
                See the work
              </Link>
            </div>
          </div>

          {/* MAGAZINE */}
          <div className="group relative mx-auto mt-8 w-full max-w-[18rem] sm:max-w-[21rem] sm:pb-5 md:max-w-[24rem] lg:mt-0 lg:max-w-lg lg:translate-x-4">
            <div className="absolute inset-5 rotate-3 rounded-sm bg-support transition-transform duration-700 group-hover:rotate-1"></div>

            <img
              className="relative max-h-[520px] w-full border-[6px] border-primary-light object-cover shadow-soft transition-transform duration-700 ease-out group-hover:-translate-y-2 sm:max-h-[600px] md:border-[8px] lg:max-h-[680px]"
              src="/magazine-pages/cover.png"
              alt="OEF Impact Magazine cover"
            />
          </div>
        </div>
      </section>
      {/* =====================================================
    02 — WHY OEF EXISTS
====================================================== */}
      <section className="relative bg-primary-light px-5 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:py-28 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[2500px]">
          <div className="grid gap-14 lg:grid-cols-[1.4fr_0.6fr] lg:gap-20">
            <div>
              <p className="mb-8 pb-6 font-body text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-primary-dark">
                Why OEF exists
              </p>

              <h2 className="max-w-5xl font-display text-[3rem] leading-[1] tracking-[-0.045em] text-shadow-text sm:text-[4.5rem] md:text-[5.5rem] lg:text-[5.7rem]">
                Education should open doors, not close them.
              </h2>
            </div>

            <div className="flex items-center">
              <div className="border-l border-primary/50 pl-10">
                <p className="max-w-md font-body text-base leading-8 text-text-secondary md:text-lg">
                  OEF exists because young people deserve the opportunity to
                  develop their abilities regardless of the circumstances around
                  them.
                </p>

                <Link
                  to="/about"
                  className="mt-8 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.14em] text-primary-dark transition-colors hover:text-muted-gold"
                >
                  Understand our story ↗
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-20 grid border-t border-primary/20 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "24", label: "Years of work" },
              { value: "6", label: "Active programs" },
              { value: "11", label: "Community values" },
              { value: "13", label: "Board trustees" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`relative pl-8 py-8 sm:px-6 lg:py-10 ${
                  index !== 0 ? "border-l border-primary/20" : ""
                }`}
              >
                <p className="font-display text-[4rem] leading-none tracking-[-0.04em] text-primary sm:text-[4.5rem]">
                  {stat.value}
                </p>

                <p className="mt-3 font-body text-[0.65rem] font-extrabold uppercase tracking-[0.15em] text-text-secondary">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — THE JOURNEY
          KEEP THIS SIMPLE
      ====================================================== 
      <section className="bg-ink px-5 py-20 text-paper sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:py-32 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-3xl font-display text-[3rem] leading-[0.92] tracking-[-0.04em] sm:text-[4rem] md:text-[5rem]">
              A vision that kept growing.
            </h2>

            <p className="max-w-sm text-sm leading-7 text-paper/50">
              What began as a student-led vision continues to shape educational
              opportunity in Onicha-Igboeze.
            </p>
          </div>

          <div className="mt-20 border-t border-paper/15">
            <div className="grid gap-10 border-b border-paper/15 py-10 md:grid-cols-[0.45fr_1fr] md:gap-16">
              <p className="font-display text-5xl leading-none text-paper/35 sm:text-6xl">
                2002
              </p>

              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                <p className="max-w-md text-sm leading-7 text-paper/55">
                  A student-led vision begins at FUTO.
                </p>

                <span className="text-[0.62rem] font-black uppercase tracking-[0.15em] text-gold">
                  The beginning
                </span>
              </div>
            </div>

            <div className="grid gap-10 border-b border-paper/15 py-10 md:grid-cols-[0.45fr_1fr] md:gap-16">
              <p className="font-display text-5xl leading-none text-paper/55 sm:text-6xl">
                2021
              </p>

              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                <p className="max-w-md text-sm leading-7 text-paper/60">
                  That vision becomes a scholarship journey, and OEF takes
                  shape.
                </p>

                <span className="text-[0.62rem] font-black uppercase tracking-[0.15em] text-paper/35">
                  Taking shape
                </span>
              </div>
            </div>

            <div className="grid gap-8 py-12 md:grid-cols-[0.45fr_1fr] md:gap-16">
              <p className="font-display text-6xl leading-none text-gold sm:text-7xl">
                Today
              </p>

              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                <p className="max-w-xl text-base leading-8 text-paper/70 md:text-lg">
                  Education, mentorship, skills development, and community
                  support continue across Onicha-Igboeze.
                </p>

                <Link
                  to="/about"
                  className="group inline-flex w-fit items-center gap-3 border-b border-gold pb-2 text-xs font-black uppercase tracking-[0.14em] text-gold"
                >
                  Read the full story
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* =====================================================
          04 — PROGRAMS PREVIEW

          IMPORTANT:
          WE DO NOT EXPLAIN THE PROGRAMS HERE.
          PROGRAMS.JSX OWNS THAT INFORMATION.
      ====================================================== */}
      <section className="bg-primary px-5 py-20 text-surface sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:py-20 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-center">
            <div>
              <p className="text-[0.65rem] pb-7 font-black uppercase tracking-[0.18em] text-gold">
                The work
              </p>

              <h2 className="mt-6 max-w-4xl font-display text-[3rem] leading-[0.92] tracking-[-0.04em] text-surface sm:text-[4rem] md:text-[5rem]">
                Turning opportunity into possibility.
              </h2>
            </div>

            <p className=" border-l border-muted-gold pl-10 max-w-md text-base leading-8 text-surface/65">
              Six areas of work designed around education, development,
              excellence, and opportunity.
            </p>
          </div>

          <div className="mt-16 border-t border-surface/20">
            {programs.map((program, index) => (
              <Link
                key={program}
                to="/programs"
                className="group grid gap-4 border-b border-surface/25 py-7 transition-all duration-300 md:grid-cols-[70px_1fr_auto] md:items-center md:gap-8 md:hover:px-4"
              >
                <span className="font-body text-xs font-bold tracking-[0.1em] text-surface/40">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="font-display text-3xl leading-none tracking-[-0.025em] text-surface transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl">
                  {program}
                </span>

                <span className="text-[0.62rem] font-black uppercase tracking-[0.15em] text-primary-light transition-colors duration-300 group-hover:text-gold">
                  Explore →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/programs"
              className="inline-flex items-center gap-3 rounded-sm border border-primary-light px-6 py-4 text-xs font-black uppercase trcking-[0.14em] text-support transition-all duration-300 hover:bg-support hover:text-gold"
            >
              Explore all programs
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
      {/* =====================================================
          05 — FEATURED STORY

          STORIES.JSX OWNS THE FULL STORIES.
          HOME ONLY FEATURES ONE.
      ====================================================== */}
      <section className="bg-primary-light px-5 py-10 sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:pt-10 lg:pb-0 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          {/* SECTION IDENTITY */}
          <div className="flex items-baseline justify-between border-b border-primary/20 pb-10">
            <p className="font-body text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-primary">
              From the community
            </p>
            <span className="hidden text-[0.65rem] font-bold uppercase tracking-[0.14rem] text-primary sm:block">
              Stories &amp; experiences
            </span>
          </div>

          {/* FEATURE */}
          <article className="pt-10 sm:pt-12  ">
            {/* <p className="font-body text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-support">
              Featured story
            </p> */}

            <h2 className="mt-5 max-w-6xl font-display text-[3.2rem] leading-[0.9] tracking-[-0.045em] text-text sm:text-[4.5rem] md:text-[5.5rem] lg:text-[5.5rem]">
              Every opportunity begins with someone believing it is possible.
            </h2>

            <div className="mt-10 flex flex-col items-center gap-8 pt-6 sm:mt-10 sm:flex-row sm:items-end sm:justify-between sm:border-b sm:border-primary/20 sm:pb-10">
              <p className="max-w-2xl font-body text-base leading-8 text-text-secondary md:text-lg">
                Explore the people, experiences, and moments that show what
                educational opportunity can mean in real life.
              </p>

              <Link
                to="/stories"
                className="group inline-flex w-fit shrink-0 items-center gap-3 pb-1 text-xs font-black uppercase tracking-[0.14em] text-primary-dark transition-colors hover:text-muted-gold"
              >
                Read OEF stories
                <span className="text-primary-dark transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </Link>
            </div>
          </article>
        </div>
      </section>
      {/* =====================================================
          06 — GET INVOLVED

          THIS IS ONLY AN INVITATION.
          GETINVOLVED.JSX EXPLAINS HOW TO PARTICIPATE.
      ====================================================== */}
      <section className="bg-primary-light px-5 py-20 text-text sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:py-20 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-6 text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-primary-dark">
                Get involved
              </p>

              <h2 className="max-w-4xl font-display text-[3rem] uppercase leading-[0.9] tracking-[-0.045em] text-primary-dark sm:text-[4rem] md:text-[5rem]">
                The next opportunity could start with you.
              </h2>
            </div>

            <Link
              to="/get-involved"
              className="inline-flex w-fit items-center justify-center rounded-xl border bg-primary-dark px-6 py-4 text-xs font-b uppercase tracking-[0.14em] text-surface transition-all duration-300 hover:-translate-y-1 hover:bg-primary"
            >
              Get involved
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
