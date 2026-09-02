import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      {/* =====================================================
          01 — HERO
          HOME'S FIRST JOB:
          Introduce OEF immediately.
      ====================================================== */}
      <section className="relative min-h-[calc(100svh-73px)] overflow-hidden bg-cream px-5 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-12 2xl:px-16">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1.05fr_0.75fr] lg:gap-14">
          <div>
            <p className="mb-6 text-[0.88rem] font-black uppercase tracking-[0.22em] text-forest">
              Onicha Education Foundation
            </p>

            <h1 className="max-w-5xl font-display text-[3.4rem] font-medium uppercase leading-[0.86] tracking-[-0.045em] text-ink sm:text-[4.2rem] md:text-[5.4rem] lg:text-[6rem] xl:text-[6.6rem]">
              Lighting the flame, one torch at a time.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-ink/65 md:text-lg md:leading-8">
              OEF creates educational opportunities that help young people
              learn, grow, discover their potential, and contribute meaningfully
              to the future of Onicha-Igboeze.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 rounded-sm bg-ink px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-paper transition-all duration-300 hover:-translate-y-1 hover:bg-forest hover:shadow-lg"
              >
                Discover OEF
              </Link>

              <Link
                to="/programs"
                className="inline-flex items-center gap-3 rounded-sm border border-ink px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-ink transition-all duration-300 hover:-translate-y-1 hover:bg-gold"
              >
                See the work
              </Link>
            </div>
          </div>

          {/* MAGAZINE */}
          <div className="group relative mx-auto mt-6 w-full max-w-[18rem] sm:max-w-[21rem] md:max-w-[24rem] lg:mt-0 lg:max-w-lg lg:translate-x-4">
            <div className="absolute inset-5 rotate-2 bg-gold transition-transform duration-700 group-hover:rotate-1"></div>

            <img
              className="relative max-h-[520px] w-full border-[6px] border-paper object-cover shadow-soft transition-transform duration-700 ease-out group-hover:-translate-y-2 sm:max-h-[600px] md:border-[8px] lg:max-h-[680px]"
              src="/magazine-pages/cover.png"
              alt="OEF Impact Magazine cover"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          02 — WHY OEF EXISTS

          HOME CAN INTRODUCE THE REASON BEHIND THE WORK.
          ABOUT WILL EXPLAIN THE FULL HISTORY.
      ====================================================== */}
      <section className="bg-paper px-5 py-20 sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:py-32 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.02em] text-ink sm:text-[2.75rem] md:text-5xl">
              Education should open doors, not close them.
            </h2>

            <p className="mt-5 font-body text-base leading-7 text-ink/65 md:text-lg">
              OEF exists because young people deserve the opportunity to develop
              their abilities regardless of the circumstances around them.
            </p>

            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-3 border-b border-ink pb-2 text-xs font-black uppercase tracking-[0.14em] text-ink transition-colors hover:border-gold hover:text-forest"
            >
              Understand our story
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 border-l border-t border-ink/15 sm:grid-cols-4">
            {[
              { value: "24", label: "Years of work" },
              { value: "6", label: "Active programs" },
              { value: "11", label: "Community values" },
              { value: "13", label: "Board trustees" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border-b border-r border-ink/15 px-6 py-8"
              >
                <p className="font-display text-4xl text-ink sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 font-body text-xs uppercase tracking-[0.12em] text-ink/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — THE JOURNEY

          THIS IS A PREVIEW OF OEF'S HISTORY.
          THE FULL STORY BELONGS ON ABOUT.
      ====================================================== */}
      <section className="bg-ink px-5 py-20 text-paper sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:py-32 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="max-w-2xl font-display text-4xl leading-[1.05] tracking-[-0.02em] sm:text-5xl md:text-6xl">
            A vision that kept growing.
          </h2>

          <div className="mt-16 flex flex-col gap-8 border-t border-paper/15 pt-12 sm:flex-row sm:items-end sm:gap-10">
            <div className="sm:w-1/4">
              <p className="font-display text-2xl text-paper/45">2002</p>
              <p className="mt-2 font-body text-sm leading-6 text-paper/45">
                A student-led vision begins at FUTO.
              </p>
            </div>

            <div className="sm:w-1/3">
              <p className="font-display text-3xl text-paper/65">2021</p>
              <p className="mt-2 font-body text-sm leading-6 text-paper/55">
                That vision becomes a scholarship journey, and OEF takes shape.
              </p>
            </div>

            <div className="sm:flex-1">
              <p className="font-display text-3xl text-gold sm:text-6xl">
                Today
              </p>
              <p className="mt-3 font-body text-base leading-7 text-paper/70">
                Education, mentorship, and community support continue across
                Onicha-Igboeze.
              </p>
            </div>
          </div>

          <Link
            to="/about"
            className="mt-12 inline-flex items-center gap-3 rounded-sm border border-gold px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-gold transition-all duration-300 hover:bg-gold hover:text-ink"
          >
            Read the full story
          </Link>
        </div>
      </section>

      {/* =====================================================
          04 — PROGRAMS PREVIEW

          IMPORTANT:
          WE DO NOT EXPLAIN THE PROGRAMS HERE.
          PROGRAMS.JSX OWNS THAT INFORMATION.
      ====================================================== */}
      <section className="bg-cream px-5 py-20 sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:py-32 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <h2 className="max-w-4xl font-display text-4xl leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl md:text-6xl">
              Turning opportunity into possibility.
            </h2>

            <p className="max-w-xl font-body text-base leading-7 text-ink/65 md:text-lg">
              From scholarships and academic excellence to digital learning and
              enterprise skills, OEF works across six areas to create better
              educational opportunities.
            </p>
          </div>

          <div className="mt-14 border-t border-ink/15">
            {[
              "Scholarship",
              "Education + Skills",
              "Academic Excellence",
              "Teachers",
              "Digital Learning",
              "Enterprise",
            ].map((category, index) => (
              <div
                key={category}
                className="flex items-baseline gap-6 border-b border-ink/15 py-5"
              >
                <span className="w-8 shrink-0 font-body text-xs text-ink/35">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="font-display text-2xl leading-tight text-ink sm:text-3xl">
                  {category}
                </span>
              </div>
            ))}
          </div>

          <Link
            to="/programs"
            className="mt-12 inline-flex items-center gap-3 rounded-sm bg-ink px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-paper transition-all duration-300 hover:-translate-y-1 hover:bg-forest hover:shadow-lg"
          >
            Explore the programs
          </Link>
        </div>
      </section>

      {/* =====================================================
          05 — FEATURED STORY

          STORIES.JSX OWNS THE FULL STORIES.
          HOME ONLY FEATURES ONE.
      ====================================================== */}
      <section className="bg-paper px-5 py-20 sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:py-32 xl:px-12 2xl:px-16">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-body text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-forest">
                From the Community
              </span>

              <span className="h-px w-20 bg-gold"></span>
            </div>

            <p className="mt-8 font-display text-7xl leading-none tracking-[-0.05em] text-gold sm:text-8xl">
              05
            </p>
          </div>

          <article className="border-t border-ink/15 pt-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-brick">
              Featured Story
            </p>

            <h2 className="mt-5 max-w-4xl font-display text-[2.8rem] leading-[0.95] tracking-[-0.04em] text-ink sm:text-[3.6rem] md:text-[4.4rem]">
              Every opportunity begins with someone believing it is possible.
            </h2>

            <p className="mt-6 max-w-2xl font-body text-base font-medium leading-8 text-ink/65 md:text-lg">
              Explore the people, experiences, and moments that show what
              educational opportunity can mean in real life.
            </p>

            <Link
              to="/stories"
              className="mt-8 inline-flex items-center gap-3 border-b border-ink pb-2 text-xs font-black uppercase tracking-[0.14em] text-ink transition-colors hover:border-gold hover:text-forest"
            >
              Read OEF stories
            </Link>
          </article>
        </div>
      </section>

      {/* =====================================================
          06 — GET INVOLVED

          THIS IS ONLY AN INVITATION.
          GETINVOLVED.JSX EXPLAINS HOW TO PARTICIPATE.
      ====================================================== */}
      <section className="bg-gold px-5 py-20 sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:py-32 xl:px-12 2xl:px-16">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-ink/60">
              Your turn
            </p>

            <h2 className="mt-5 max-w-5xl font-display text-[3.4rem] font-normal uppercase leading-[0.88] tracking-[-0.05em] text-ink sm:text-[4.4rem] md:text-[5.4rem] lg:text-[6.2rem]">
              Help light the next flame.
            </h2>

            <p className="mt-6 max-w-2xl font-body text-base font-medium leading-8 text-ink/65 md:text-lg">
              Support a student, share your expertise, partner with OEF, or find
              another way to contribute to the work.
            </p>
          </div>

          <Link
            to="/get-involved"
            className="inline-flex w-fit items-center gap-3 rounded-sm bg-ink px-7 py-4 text-xs font-black uppercase tracking-[0.14em] text-paper transition-all duration-300 hover:-translate-y-1 hover:bg-forest hover:shadow-lg"
          >
            Get involved
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
