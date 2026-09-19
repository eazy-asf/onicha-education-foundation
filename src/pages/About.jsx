import { Link } from "react-router-dom";

function About() {
  return (
    <main className="overflow-x-hidden">
      {/* =====================================================
          01 — INTRO
          EDITORIAL OPENING
      ====================================================== */}
      {/* =====================================================
    01 — INTRO
====================================================== */}
      <section className="bg-primary-light px-5 pb-15 pt-28 sm:px-6 sm:pb-24 sm:pt-28 md:px-8 md:pb-28 md:pt-28 lg:px-10 lg:pb-32 lg:pt-30 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-center pt-8 gap-3">
            <span className="font-body text-[0.7rem]  font-extrabold uppercase tracking-[0.18em] text-primary">
              About OEF
            </span>

            <span className="h-px w-24 bg-primary"></span>

            <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
          </div>

          <h1 className="mt-5 max-w-6xl font-display text-[3rem] font-normal uppercase leading-[0.88] tracking-[-0.05em] text-primary-dark sm:text-[4.5rem] md:text-[5.5rem] lg:text-[5.5rem] xl:text-[5.5rem]">
            Education is the beginning of possibility.
          </h1>

          <div className="grid gap-10 pt-3.5 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-0">
            {/* LEFT — FOUNDATION DESCRIPTION */}
            <div className="pr-0 pb-0 lg:pr-16">
              <p className="max-w-3xl font-body pt-5 text-base font-light leading-7 text-ink/65 md:text-lg md:leading-8">
                The Onicha Education Foundation exists to create meaningful
                educational opportunities for young people and to help build a
                community where learning can become a pathway to a better
                future.
              </p>
            </div>

            {/* RIGHT — FOUNDATION STATEMENT */}
            <div className="border-t border-support pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <p className="max-w-xl font-body text-sm font-extrabold uppercase leading-7 tracking-[0.12em] text-ink md:text-base md:leading-8">
                A foundation built around opportunity, education, and the belief
                that young people can shape what comes next.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* =====================================================
    02 — PURPOSE
====================================================== */}
      <section className="bg-primary-dark px-5 py-10 text-surface sm:px-6 sm:py-4 md:px-8 md:py-28 lg:px-10 lg:py-32 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid min-w-0 gap-14 lg:grid-cols-[220px_1fr] lg:gap-20">
            <div>
              {/* <span className="font-display text-[7rem] leading-none tracking-[-0.07em] text-support sm:text-[8rem]">
                01
              </span> */}

              <p className="mt-4 max-w-[150px]  font-body text-[0.7rem] font-extrabold uppercase leading-5 tracking-[0.16em] text-gold">
                Why we exist
              </p>
            </div>

            <div>
              <h2 className="max-w-5xl font-display text-[3rem]  font-normal uppercase leading-[0.88] tracking-[-0.05em] sm:text-[4rem] md:text-[5rem] lg:text-[6rem]">
                Potential should not be limited by circumstance.
              </h2>

              <div className="mt-12 grid gap-8 md:grid-cols-2">
                <p className="max-w-xl font-body text-base leading-8 text-surface/65 md:text-lg">
                  Too many young people have the ability and ambition to go
                  further, but lack access to the resources, support and
                  opportunities that can help them do so.
                </p>

                <p className="max-w-xl font-body text-base leading-8 text-surface/65 md:text-lg">
                  OEF was built around a simple belief: giving people the
                  opportunity to learn and grow can create an impact that
                  extends far beyond one person.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
    04 — EVOLUTION
    HISTORY AS EDITORIAL INDEX
====================================================== */}
      <section className="bg-primary-light px-5 py-10 sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:py-32 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="font-body text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-primary">
                The evolution
              </span>
              <span className="h-px w-16 bg-support"></span>
            </div>

            <h2 className="mt-8 font-display text-[3rem] font-normal uppercase leading-[0.88] tracking-[-0.05em] text-text sm:text-[4rem] md:text-[5rem]">
              The vision kept moving forward.
            </h2>
          </div>

          <div className="mt-16 border-t border-border">
            <article className="grid gap-6 border-b border-border py-10 md:grid-cols-[180px_1fr_auto] md:items-start">
              <span className="font-display text-4xl tracking-[-0.04em] text-support">
                2002
              </span>

              <div>
                <h3 className="font-display text-3xl leading-none tracking-[-0.03em] text-text sm:text-4xl">
                  Youth Refiners Organisation
                </h3>

                <p className="mt-4 max-w-2xl font-body text-base leading-7 text-text-secondary md:text-lg">
                  A student-led initiative begins at FUTO with a vision centred
                  on youth development and positive community impact.
                </p>
              </div>

              <span className="hidden text-xs font-black uppercase tracking-[0.14em] text-primary md:block">
                Beginning
              </span>
            </article>

            <article className="grid gap-6 border-b border-border py-10 md:grid-cols-[180px_1fr_auto] md:items-start">
              <span className="font-display text-4xl tracking-[-0.04em] text-support">
                2021
              </span>

              <div>
                <h3 className="font-display text-3xl leading-none tracking-[-0.03em] text-text sm:text-4xl">
                  The scholarship journey
                </h3>

                <p className="mt-4 max-w-2xl font-body text-base leading-7 text-text-secondary md:text-lg">
                  The educational mission takes a more direct form through
                  scholarship support and a growing commitment to access.
                </p>
              </div>

              <span className="hidden text-xs font-black uppercase tracking-[0.14em] text-primary md:block">
                Expansion
              </span>
            </article>

            <article className="grid gap-6 py-10 md:grid-cols-[180px_1fr_auto] md:items-start md:border-b md:border-border">
              <span className="font-display text-4xl tracking-[-0.04em] text-support">
                Today
              </span>

              <div>
                <h3 className="font-display text-3xl leading-none tracking-[-0.03em] text-text sm:text-4xl">
                  A growing foundation
                </h3>

                <p className="mt-4 max-w-2xl font-body text-base leading-7 text-text-secondary md:text-lg">
                  OEF continues to develop its educational vision through
                  programs focused on opportunity, learning and community.
                </p>
              </div>

              <span className="hidden text-xs font-black uppercase tracking-[0.14em] text-primary md:block">
                Today
              </span>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
    03 — ORIGIN
    DARK HISTORY + MAGAZINE IMAGE
====================================================== */}
      {/* <section className="bg-text px-5 py-20 text-surface sm:px-6 sm:py-24 md:px-8 lg:px-10 lg:py-32 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-body text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-support">
                  Where it began
                </span>
                <span className="h-px w-16 bg-support"></span>
              </div>

              <p className="mt-10 font-display text-[6rem] leading-none tracking-[-0.07em] text-support sm:text-[8rem] lg:text-[10rem]">
                2002
              </p>

              <p className="mt-6 max-w-xs font-body text-sm leading-7 text-surface/55">
                The beginning of a vision centred on young people, development
                and positive community impact.
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end">
              <div>
                <h2 className="max-w-4xl font-display text-[3rem] font-normal uppercase leading-[0.88] tracking-[-0.045em] sm:text-[4rem] md:text-[4.8rem]">
                  Before OEF, there was a vision.
                </h2>

                <p className="mt-8 max-w-2xl font-body text-base leading-8 text-surface/65 md:text-lg">
                  What started as a student-led initiative grew from a desire to
                  encourage young people, strengthen their sense of purpose, and
                  create opportunities for positive development.
                </p>
              </div>

              <div className="relative mx-auto w-full max-w-[280px]">
                <div className="absolute -bottom-4 -left-4 h-full w-full bg-support"></div>

                <img
                  src="/magazine-pages/birth-of-vision.png"
                  alt="OEF Impact Magazine — Origin Story"
                  className="relative block w-full bg-surface p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* =====================================================
          05 — PHILOSOPHY
          LESS "CARDS", MORE EDITORIAL INDEX
      ====================================================== */}
      <section className="relative overflow-hidden bg-primary-light px-5 pb-16 pt-16 max-sm:border-t max-sm:border-primary/20 sm:px-6 sm:pb-24 sm:pt-20 md:px-8 md:pb-28 md:pt-24 lg:px-10 lg:pb-32 lg:pt-0 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1500px]">
          {/* Section label */}
          <div>
            <p className="font-body text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-primary">
              What guides us
            </p>
          </div>

          {/* Main statement */}
          <div className="mx-auto mt-10 max-w-[1250px] text-center lg:mt-20">
            <h2 className="font-display text-[2.5rem] font-normal uppercase leading-[0.9] tracking-[-0.055em] text-ink sm:text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[7rem]">
              Opportunity creates responsibility.
            </h2>

            <p className="mx-auto mt-10 max-w-3xl font-body text-base leading-8 text-ink/65 md:text-lg">
              Education is not only about gaining knowledge. It is about
              developing confidence, discovering possibility and giving people a
              foundation to contribute to the communities around them.
            </p>
          </div>

          {/* Principles */}
          <div className="relative mt-20 lg:mt-28">
            {/* Flowing line behind cards */}
            <svg
              className="pointer-events-none absolute left-[-5%] top-1/2 hidden w-[110%] -translate-y-1/2 md:block"
              viewBox="0 0 1400 300"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 170 C180 20, 320 20, 500 150 C680 280, 820 280, 1000 145 C1180 10, 1280 45, 1400 135"
                stroke="currentColor"
                strokeWidth="1.2"
                className="text-primary"
              />
            </svg>

            <div className="relative grid gap-8 md:grid-cols-3 md:items-start md:gap-10 lg:gap-14">
              {/* Curiosity */}
              <div className="md:translate-y-[-24px] md:hover:translate-y-[34px] transition-transform duration-500 ease-in-out ">
                <div className="h-[270px] rounded-[2rem] border border-white/70 bg-primary-light bg-linear-to-tl from-primary-light to-primary-dark p-8 shadow-[0_20px_60px_rgba(30,50,40,0.08)] backdrop-blur-xl sm:h-[290px] lg:p-10">
                  <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/40">
                    <span className="font-display text-xl text-text">+</span>
                  </div>

                  <span className="font-body text-xs font-black uppercase tracking-[0.18em] text-surface">
                    01 — Curiosity
                  </span>

                  <p className="mt-5 max-w-sm font-bold text-base leading-7 text-text/85">
                    Encourage people to keep learning, exploring and asking
                    better questions.
                  </p>
                </div>
              </div>

              {/* Growth */}
              <div className="md:translate-y-[34px] md:hover:translate-y-[24px] transition-transform duration-500 ease-in-out ">
                <div className="h-[270px] rounded-[2rem] border border-white/70 bg-primary-light bg-linear-180 from-primary-light to-primary-dark p-8 shadow-[0_20px_60px_rgba(30,50,40,0.08)] backdrop-blur-xl sm:h-[290px] lg:p-10">
                  <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/40">
                    <span className="font-display text-xl text-text">+</span>
                  </div>

                  <span className="font-body text-xs font-black uppercase tracking-[0.18em] text-surface">
                    02 — Growth
                  </span>

                  <p className="mt-5 max-w-sm font-bold text-base leading-7 text-text/85">
                    Create room for people to develop their abilities,
                    confidence and sense of possibility.
                  </p>
                </div>
              </div>

              {/* Contribution */}
              <div className="md:translate-y-[-24px] md:hover:translate-y-[34px] transition-transform duration-500 ease-in-out ">
                <div className="h-[270px] rounded-[2rem] border border-white/70 bg-primary-light bg-linear-to-tr from-primary-light to-primary-dark p-8 shadow-[0_20px_60px_rgba(30,50,40,0.08)] backdrop-blur-xl sm:h-[290px] lg:p-10">
                  <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/40">
                    <span className="font-display text-xl text-text">+</span>
                  </div>

                  <span className="font-body text-xs font-black uppercase tracking-[0.18em] text-surface">
                    03 — Contribution
                  </span>

                  <p className="mt-5 max-w-sm font-bold text-base leading-7 text-text/85">
                    Help people use what they learn to strengthen the
                    communities around them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          06 — CLOSING
      ====================================================== */}
      <section className="bg-primary-light px-5 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:py-28 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-body text-xs font-black uppercase tracking-[0.18em] text-primary-dark">
            Where we are going
          </p>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
            <h2 className="max-w-6xl font-display text-[3.5rem] font-normal uppercase leading-[0.85] tracking-[-0.055em] text-text sm:text-[4.5rem] md:text-[5.5rem] lg:text-[5.5rem]">
              The story continues through the work.
            </h2>

            <Link
              to="/programs"
              className="inline-flex w-fit items-center gap-3 bg-primary-dark rounded-xl px-7 py-4 text-xs font-body uppercase tracking-[0.14em] text-surface transition-transform duration-300 hover:bg-primary hover:-translate-y-1"
            >
              Explore the work
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
