import { Link } from "react-router-dom";

function Programs() {
  const programs = [
    {
      number: "01",
      title: "Marydez Scholarship for the Girl Child",
      category: "Scholarship",
      description:
        "Supporting girls in their educational journey by creating access to opportunity, encouragement, and professional development.",
      bg: "bg-forest",
      text: "text-surface",
    },
    {
      number: "02",
      title: "Veroz Academic and Apprenticeship Scheme",
      category: "Education + Skills",
      description:
        "Combining academic support with practical learning opportunities so young people can develop knowledge alongside useful real-world skills.",
      bg: "bg-river",
      text: "text-surface",
    },
    {
      number: "03",
      title: "Dr. Dave Okorafor Prize for First Class Excellence",
      category: "Academic Excellence",
      description:
        "Recognising outstanding academic achievement and encouraging students to pursue excellence in their studies.",
      bg: "bg-ink",
      text: "text-surface",
    },
    {
      number: "04",
      title: "Teacher Excellence Program",
      category: "Teachers",
      description:
        "Recognising outstanding educators while encouraging dedication, innovation, and stronger teaching practices within the community.",
      bg: "bg-brick",
      text: "text-surface",
    },
    {
      number: "05",
      title: "Digital Education & E-Learning",
      category: "Digital Learning",
      description:
        "Expanding access to digital education and wider learning resources for students in Onicha-Igboeze.",
      bg: "bg-leaf",
      text: "text-surface",
    },
    {
      number: "06",
      title: "Entrepreneurship & Vocational Skills",
      category: "Enterprise",
      description:
        "Helping young people develop practical skills, confidence, and entrepreneurial knowledge for greater self-reliance.",
      bg: "bg-gold",
      text: "text-ink",
    },
  ];

  const tilt = [
    "sm:-rotate-2 lg:translate-y-2",
    "sm:rotate-1 lg:translate-y-0",
    "sm:-rotate-1 lg:-translate-y-6",
    "sm:rotate-2 lg:translate-y-4",
    "sm:-rotate-1 lg:-translate-y-0",
    "sm:rotate-1 lg:translate-y-4",
  ];

  return (
    <main>
      {/* =========================
          PAGE HERO
      ========================== */}
      <section className="relative overflow-hidden bg-primary-light px-5 pb-10 pt-35  sm:px-6 sm:pb-24 sm:pt-28 md:px-8 md:pb-28 md:pt-28 lg:px-10 lg:pb-28 lg:pt-35 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.7fr] lg:items-center lg:gap-20">
            {/* LEFT */}
            <div>
              <div className="mb-8 flex items-center gap-3">
                <span className="font-body text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-primary-dark">
                  Our Programs
                </span>
                <span className="h-px w-24 bg-primary"></span>

                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
              </div>

              <h1 className="max-w-7xl font-display text-[3rem] font-normal uppercase leading-[0.88] tracking-[-0.05em] text-primary-dark sm:text-[4.4rem] md:text-[5.5rem] lg:text-[5.2rem] xl:text-[4.5rem]">
                Creating pathways for young people to thrive.
              </h1>
            </div>

            {/* RIGHT */}
            <div className="border-l border-primary-dark pl-6 lg:pb-2 lg:pl-10 xl:pl-14">
              <p className="max-w-xl font-body text-base font-medium leading-7 text-ink/75 md:text-lg md:leading-8">
                Our programs are designed to create meaningful educational
                opportunities, strengthen learning, and help young people
                develop the knowledge and skills they need for the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          PROGRAMS INTRO STRIP
      ========================== */}
      <section className="relative overflow-hidden bg-primary-light px-5 py-16 text-surface sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:py-0 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1400px] rounded-[2.25rem] bg-primary-dark p-6 sm:rounded-[3.5rem] sm:p-10 md:p-12 lg:p-16">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-20">
            {/* LEFT — STATEMENT */}
            <div className="relative px-1 py-1 sm:px-5 sm:py-3">
              <p className="max-w-xs font-body pb-4 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-gold sm:pb-5">
                The OEF approach
              </p>

              <h2 className="mt-4 max-w-full font-display text-[2.2rem] uppercase leading-[0.94] tracking-[-0.045em] text-surface sm:mt-5 sm:max-w-5xl sm:text-[3.5rem] md:text-[4rem] lg:text-[3.5rem]">
                Opportunity should last beyond the classroom.
              </h2>
            </div>

            {/* RIGHT — EXPLANATION */}
            <div className="relative border-l-0 border-gold/70 pl-0 sm:border-l sm:pl-6 sm:pl-8 lg:pl-12">
              <p className="max-w-2xl font-body text-base font-medium leading-8 text-surface/70 md:text-lg md:leading-9">
                From scholarships and digital education to teacher development,
                mentorship, and enterprise pathways, OEF's programs are designed
                to give young people more than short-term assistance.
              </p>

              <p className="mt-6 max-w-2xl font-body text-base font-medium leading-8 text-surface/70 md:text-lg md:leading-9">
                We create opportunities that can strengthen a student's
                education, develop practical skills, and open new possibilities
                for the future.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-10 bg-gold"></span>

                <span className="font-body text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-surface/40">
                  Education · Skills · Opportunity
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =========================
          PROGRAM LIST
      ========================== */}
      <section className="bg-primary-light px-5 pb-16 pt-5 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:py-28 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          {/* SECTION HEADING */}
          <div className="mb-14 grid gap-8 pt-12 sm:pt-12 lg:grid-cols-[0.8fr_1fr] lg:items-end lg:gap-16 lg:border-t lg:border-primary/50 lg:pt-16">
            <h2 className="font-display text-[2.8rem] uppercase leading-[0.92] tracking-[-0.04em] text-text sm:text-[3.5rem] md:text-[4.2rem]">
              Six pathways.
              <br />
              One vision.
            </h2>

            <p className="max-w-xl border-l border-primary-dark pl-6 font-body text-base font-medium leading-7 text-ink/60 md:text-lg md:leading-8">
              Each program addresses a different part of the educational journey
              — from helping a student stay in school to helping a young person
              build a career.
            </p>
          </div>

          {/* PROGRAM GRID */}
          <div className="grid gap-10 border-b border-primary/50 pb-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-8">
            {programs.map((program, i) => (
              <article
                key={program.number}
                className={`group relative ${program.bg} ${program.text} p-8 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:rotate-0 hover:shadow-xl sm:p-9 ${tilt[i]}`}
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 28px) 0, 100% 35px, 102% 100%, 0 102%)",
                }}
              >
                <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.15em] opacity-70">
                  {program.category}
                </p>

                <h3 className="mt-5 font-display text-2xl leading-[1.05] tracking-[-0.02em] sm:text-[1.7rem]">
                  {program.title}
                </h3>

                <p className="mt-5 font-body text-sm font-medium leading-7 opacity-80">
                  {program.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          PROGRAM PHILOSOPHY
      ========================== */}
      <section className="bg-primary-light px-5 pt-0 pb-10 sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:pt-0 lg:pb-10 xl:px-12 xl:pt-0 2xl:px-16">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* LEFT */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="font-body text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-primary-dark">
                Beyond the program
              </span>

              <span className="h-px w-20 bg-primary-dark"></span>

              <span className="h-1.5 w-1.5 rounded-full bg-primary-dark"></span>
            </div>

            <h2 className="max-w-2xl font-display text-[3rem] uppercase leading-[0.9] tracking-[-0.045em] text-text sm:text-[4rem] md:text-[4.8rem]">
              Education should open more than one door.
            </h2>
          </div>

          {/* RIGHT */}
          <div className="flex items-center">
            <div className="max-w-xl border-l border-primary-dark pl-6 lg:pl-10">
              <p className="font-body text-base font-medium leading-8 text-ink/65 md:text-lg">
                OEF's approach goes beyond financial assistance. We want young
                people to have access to the guidance, skills, recognition,
                resources, and relationships that can help them make something
                meaningful of their opportunities.
              </p>

              <p className="mt-6 font-body text-base font-medium leading-8 text-ink/65 md:text-lg">
                That is why our programs connect academic support with
                mentorship, practical skills, stronger classrooms, and a wider
                vision for the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}
    </main>
  );
}

export default Programs;
