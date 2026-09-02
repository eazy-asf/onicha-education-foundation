import { Link } from "react-router-dom";

function About() {
  return (
    <main>
      {/* =====================================================
          01 — INTRO
          ABOUT'S JOB:
          Establish who OEF is and why it exists.
      ====================================================== */}
      <section className="bg-cream px-5 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-16 md:px-8 md:pb-28 md:pt-20 lg:px-10 lg:pb-32 lg:pt-24 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-center gap-3">
            <span className="font-body text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-forest">
              About OEF
            </span>

            <span className="h-px w-20 bg-gold"></span>

            <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
          </div>

          <h1 className="mt-10 max-w-6xl font-display text-[3.5rem] font-normal uppercase leading-[0.88] tracking-[-0.05em] text-ink sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.5rem]">
            Education is the beginning of possibility.
          </h1>

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-0">
            {/* LEFT — FOUNDATION DESCRIPTION */}
            <div className="pr-0 lg:pr-16">
              <p className="max-w-3xl font-body pt-8 text-base font-medium leading-7 text-ink/65 md:text-lg md:leading-8">
                The Onicha Education Foundation exists to create meaningful
                educational opportunities for young people and to help build a
                community where learning can become a pathway to a better
                future.
              </p>
            </div>

            {/* RIGHT — FOUNDATION STATEMENT */}
            <div className="border-t border-gold pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <p className="max-w-xl font-body text-sm font-extrabold uppercase leading-7 tracking-[0.12em] text-forest md:text-base md:leading-8">
                A foundation built around opportunity, education, and the belief
                that young people can shape what comes next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          02 — WHY WE EXIST
          THIS IS ABOUT PURPOSE, NOT PROGRAM DETAILS.
      ====================================================== */}
      <section className="bg-paper px-5 py-20 sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:py-32 xl:px-12 2xl:px-16">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
          <div>
            <p className="font-display text-8xl leading-none tracking-[-0.06em] text-gold sm:text-9xl">
              01
            </p>

            <p className="mt-5 max-w-xs text-xs font-black uppercase leading-5 tracking-[0.16em] text-forest">
              Why we exist
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl font-display text-[3rem] font-normal uppercase leading-[0.9] tracking-[-0.045em] text-ink sm:text-[3.8rem] md:text-[4.8rem] lg:text-[5.5rem]">
              We believe potential should not be limited by circumstance.
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <p className="font-body text-base font-medium leading-8 text-ink/65 md:text-lg">
                Too many young people have the ability and ambition to go
                further, but lack access to the resources, support, and
                opportunities that can help them do so.
              </p>

              <p className="font-body text-base font-medium leading-8 text-ink/65 md:text-lg">
                OEF was created around a simple belief: when people are given
                the opportunity to learn and grow, the impact can reach far
                beyond one individual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — OUR ORIGIN
          THIS IS WHERE THE HISTORY BELONGS.
      ====================================================== */}
      <section className="bg-ink px-5 py-20 text-paper sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:py-32 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-body text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-gold">
                  Where it began
                </span>

                <span className="h-px w-20 bg-gold"></span>
              </div>

              <p className="mt-10 font-display text-[7rem] leading-none tracking-[-0.07em] text-gold sm:text-[9rem] lg:text-[11rem]">
                2002
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl font-display text-[3rem] font-normal uppercase leading-[0.9] tracking-[-0.045em] sm:text-[3.8rem] md:text-[4.8rem] lg:text-[5.6rem]">
                Before OEF, there was a vision.
              </h2>

              <div className="mt-10 max-w-3xl space-y-6 font-body text-base leading-8 text-paper/65 md:text-lg">
                <p>
                  What started as a student-led initiative grew from a desire to
                  encourage young people, strengthen their sense of purpose, and
                  create opportunities for positive development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          04 — THE EVOLUTION
          THIS EXPLAINS HOW OEF BECAME WHAT IT IS TODAY.
      ====================================================== */}
      <section className="bg-cream px-5 py-20 sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:py-32 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="font-body text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-forest">
                The evolution
              </span>

              <span className="h-px w-20 bg-gold"></span>

              <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
            </div>

            <h2 className="mt-8 font-display text-[3rem] font-normal uppercase leading-[0.9] tracking-[-0.045em] text-ink sm:text-[3.8rem] md:text-[4.8rem] lg:text-[5.5rem]">
              The vision kept moving forward.
            </h2>
          </div>

          <div className="mt-16">
            <article className="grid gap-6 border-t border-ink/15 py-10 md:grid-cols-[160px_1fr]">
              <span className="font-display text-4xl text-gold">2002</span>

              <div>
                <h3 className="font-display text-3xl leading-none tracking-[-0.025em] text-ink sm:text-4xl">
                  Youth Refiners Organisation
                </h3>

                <p className="mt-4 max-w-3xl font-body text-base leading-7 text-ink/65 md:text-lg">
                  A student-led initiative begins at FUTO with a vision centered
                  on youth development and positive community impact.
                </p>
              </div>
            </article>

            <article className="grid gap-6 border-t border-ink/15 py-10 md:grid-cols-[160px_1fr]">
              <span className="font-display text-4xl text-gold">2021</span>

              <div>
                <h3 className="font-display text-3xl leading-none tracking-[-0.025em] text-ink sm:text-4xl">
                  The scholarship journey
                </h3>

                <p className="mt-4 max-w-3xl font-body text-base leading-7 text-ink/65 md:text-lg">
                  OEF's educational mission takes a more direct form through
                  scholarship support and a growing commitment to creating
                  access to opportunity.
                </p>
              </div>
            </article>

            <article className="grid gap-6 border-t border-ink/15 py-10 md:grid-cols-[160px_1fr]">
              <span className="font-display text-4xl text-gold">Today</span>

              <div>
                <h3 className="font-display text-3xl leading-none tracking-[-0.025em] text-ink sm:text-4xl">
                  A growing foundation
                </h3>

                <p className="mt-4 max-w-3xl font-body text-base leading-7 text-ink/65 md:text-lg">
                  The foundation continues to develop its educational vision,
                  working toward a stronger future for young people and the
                  wider community.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          05 — OUR PHILOSOPHY
          THIS IS THE CORE OF ABOUT.
          NOT A LIST OF PROGRAMS.
      ====================================================== */}
      <section className="bg-paper px-5 py-20 sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:py-32 xl:px-12 2xl:px-16">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="font-display text-8xl leading-none tracking-[-0.06em] text-gold sm:text-9xl">
              02
            </p>

            <p className="mt-5 max-w-xs text-xs font-black uppercase leading-5 tracking-[0.16em] text-forest">
              What guides us
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl font-display text-[3rem] font-normal uppercase leading-[0.9] tracking-[-0.045em] text-ink sm:text-[3.8rem] md:text-[4.8rem] lg:text-[5.5rem]">
              Opportunity creates responsibility.
            </h2>

            <p className="mt-8 max-w-3xl font-body text-base font-medium leading-8 text-ink/65 md:text-lg">
              We believe education is not only about gaining knowledge. It is
              about developing confidence, discovering possibility, and giving
              people the foundation to contribute to the communities around
              them.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              <div className="border-t border-ink/15 pt-5">
                <span className="text-xs font-black uppercase tracking-[0.12em] text-forest">
                  Curiosity
                </span>
                <p className="mt-3 text-sm leading-6 text-ink/60">
                  Encourage people to keep learning and asking better questions.
                </p>
              </div>

              <div className="border-t border-ink/15 pt-5">
                <span className="text-xs font-black uppercase tracking-[0.12em] text-forest">
                  Growth
                </span>
                <p className="mt-3 text-sm leading-6 text-ink/60">
                  Create room for people to develop their abilities and
                  confidence.
                </p>
              </div>

              <div className="border-t border-ink/15 pt-5">
                <span className="text-xs font-black uppercase tracking-[0.12em] text-forest">
                  Contribution
                </span>
                <p className="mt-3 text-sm leading-6 text-ink/60">
                  Help people use what they learn to strengthen their
                  communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          06 — CLOSING
          ABOUT ENDS BY POINTING PEOPLE TOWARD THE WORK,
          NOT REPEATING THE WORK.
      ====================================================== */}
      <section className="bg-gold px-5 py-20 sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:py-32 xl:px-12 2xl:px-16">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-ink/60">
              Where we are going
            </p>

            <h2 className="mt-5 max-w-5xl font-display text-[3.4rem] font-normal uppercase leading-[0.88] tracking-[-0.05em] text-ink sm:text-[4.4rem] md:text-[5.4rem] lg:text-[6.2rem]">
              The story continues through the work.
            </h2>

            <p className="mt-6 max-w-2xl font-body text-base font-medium leading-8 text-ink/65 md:text-lg">
              Discover how OEF is turning its vision into practical
              opportunities for young people.
            </p>
          </div>

          <Link
            to="/programs"
            className="inline-flex w-fit items-center gap-3 rounded-sm bg-ink px-7 py-4 text-xs font-black uppercase tracking-[0.14em] text-paper transition-all duration-300 hover:-translate-y-1 hover:bg-forest hover:shadow-lg"
          >
            Explore the work
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;
