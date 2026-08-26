import { useState } from "react";

const navItems = [
  { label: "Mission", href: "#mission" },
  { label: "Programs", href: "#programs" },
  { label: "Stories", href: "#stories" },
  { label: "Origin", href: "#origin" },
  { label: "Roadmap", href: "#roadmap" },
];

const impactStats = [
  {
    value: "2002",
    label:
      "Youth Refiners Organisation began at FUTO as the early spark behind the OEF vision.",
  },
  {
    value: "2021",
    label:
      "OEF scholarship has been active since its foundation period and has impacted alot of poeple.",
  },
  {
    value: "200",
    label:
      "Students OEF hopes to reach within the next five years through expanded support.",
  },
  {
    value: "5",
    label:
      "Main focus areas: mentorship, scholarships, teachers, digital literacy, and advocacy.",
  },
];

const missionSteps = [
  {
    title: "Support the learner",
    text: " We support students facing financial difficulties, limited learning resources, and other challenges that can stand in the way of their education.",
  },
  {
    title: "Guide career choices",
    text: "We help young people make informed career choices by encouraging mentorship, guidance, and conversations that connect their interests and strengths with meaningful career paths.",
  },
  {
    title: "Strengthen classrooms",
    text: "We support stronger learning environments through teacher development, modern teaching approaches, recognition of outstanding educators, and improved educational resources.",
  },
  {
    title: "Build community ownership",
    text: "We believe education is a shared responsibility. Parents, teachers, alumni, mentors, community leaders, and members of the diaspora all have a role to play in creating better opportunities for young people.",
  },
];

const programs = [
  {
    title: "Marydez Scholarship for the Girl Child",
    text: "The Marydez Scholarship for the Girl Child supports girls in their educational journey and promotes the importance of opportunity, encouragement, and professional development.",
  },
  {
    title: "Veroz Academic and Apprenticeship Scheme",
    text: "The Veroz Academic and Apprenticeship Scheme combines academic support with practical learning opportunities, helping young people develop both knowledge and useful skills.",
  },
  {
    title: "Dr. Dave Okorafor Prize for First Class Excellence",
    text: "The Dr. Dave Okorafor Prize for First Class Excellence recognizes outstanding academic achievement and encourages young people to pursue excellence in their studies.",
  },
  {
    title: "Teacher Excellence Program",
    text: "The Teacher Excellence Program recognizes outstanding educators and encourages dedication, innovation, and better teaching practices within the community.",
  },
  {
    title: "Digital Education and E-Learning",
    text: "We aim to expand access to digital education through a virtual learning platform that connects students in Onicha with wider educational resources and opportunities to learn.",
  },
  {
    title: "Entrepreneurship and Vocational Skills",
    text: "We promote practical skills and entrepreneurship to help young people develop the knowledge, confidence, and skills needed for greater self-reliance.",
  },
];

const stories = [
  {
    image: "/magazine-pages/presidents-desk.png",
    eyebrow: "President's desk",
    title: "Empowering minds, transforming the future",
    text: "Engr. Humphrey Okereke describes OEF as a response to limited access to quality schools, inadequate learning facilities, and financial constraints facing young people in Onicha-Igboeze.",
  },
  {
    image: "/magazine-pages/girl-child.png",
    eyebrow: "Girl-child empowerment",
    title: "Professional excellence needs an enabling environment",
    text: "OEF was established in response to the educational challenges facing young people in Onicha-Igboeze, including limited access to quality learning facilities and financial support",
  },
  {
    image: "/magazine-pages/birth-of-vision.png",
    eyebrow: "Origin story",
    title: "From Youth Refiners to Onicha Education Foundation",
    text: "The OEF vision traces back to four FUTO undergraduates in 2002 who wanted to refine young minds through education, moral reawakening, and purpose-driven living.",
  },
  {
    image: "/magazine-pages/classrooms.png",
    eyebrow: "Community development",
    title: "The future of Onicha-Igboeze lies in her classrooms",
    text: "Strong classrooms create more than academic success. They provide spaces where young people can develop ideas, leadership, innovation, and the confidence to contribute to their community.",
  },
];

const roadmap = [
  {
    title: "Expand scholarship reach",
    text: "We aim to extend scholarship support to 200 students within the next five years, helping more young people pursue their education.",
  },
  {
    title: "Launch digital learning",
    text: "We plan to develop an e-learning platform that will give students in Onicha access to wider educational resources and learning opportunities.",
  },
  {
    title: "Recognize teachers",
    text: "Annual Teacher Excellence Awards will recognize educators whose commitment and work contribute to better learning outcomes.",
  },
  {
    title: "Add enterprise pathways",
    text: "We plan to expand vocational training and entrepreneurship opportunities that equip young people with practical skills for self-reliance.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="min-h-screen bg-cream text-ink">
      <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between rounded-full border border-white/50 bg-paper/70 px-5 shadow-[0_12px_40px_rgba(16,20,24,0.08)] backdrop-blur-2xl sm:px-7 lg:px-8">
          <a
            href="#top"
            className="group flex items-center gap-3 font-black tracking-tight"
            onClick={closeMenu}
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink font-display text-xs tracking-[0.08em] text-gold transition-transform duration-300 group-hover:rotate-3 sm:h-11 sm:w-11 sm:text-sm">
              OEF
            </span>
            <span className="hidden text-sm tracking-tight sm:inline">
              Onicha Education Foundation
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-ink/60 md:flex lg:gap-9">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative py-2 transition-colors duration-300 hover:text-ink after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            // type="button"
            className="rounded-2xl border border-ink/20 bg-paper/40 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.16em] transition-all duration-300 hover:bg-ink hover:text-paper md:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            Menu
          </button>
        </div>

        {menuOpen && (
          <nav
            id="mobile-menu"
            className="mx-auto mt-2 max-w-[1400px] rounded-3xl border border-white/50 bg-paper/85 px-5 py-5 shadow-[0_12px_40px_rgba(16,20,24,0.08)] backdrop-blur-2xl md:hidden"
          >
            <div className="grid gap-3 text-sm font-extrabold">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="mx-auto grid min-h-[calc(100svh-73px)] max-w-[1400px] items-center gap-12 overflow-hidden px-5 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:grid-cols-[1.05fr_0.75fr] lg:gap-14 lg:px-10 lg:py-24 xl:px-12 2xl:px-16">
          <div>
            <p className="mb-6 text-[0.88rem] font-black uppercase tracking-[0.22em] text-forest">
              Onicha Education Foundation
            </p>
            <h1 className="max-w-5xl font-display text-[3.4rem] font-medium uppercase leading-[0.86] tracking-[-0.045em] text-ink sm:text-[4.2rem] md:text-[5.4rem] lg:text-[6rem] xl:text-[6.6rem]">
              Lighting the flame, one torch at a time.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-ink/65 md:text-lg md:leading-8">
              Education is a shared investment in the future of our students,
              families, classrooms, and community. At Onicha Education
              Foundation, we are committed to creating opportunities that help
              young people learn, grow, discover their potential, and contribute
              meaningfully to the future of Onicha-Igboeze.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                className="group inline-flex items-center gap-3 rounded-sm bg-ink px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-paper transition-all duration-300 hover:-translate-y-1 hover:bg-forest hover:shadow-lg"
                href="#mission"
              >
                Explore the mission
              </a>
              <a
                className="inline-flex items-center gap-3 rounded-sm border border-ink px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-ink transition-all duration-300 hover:-translate-y-1 hover:bg-gold"
                href="#programs"
              >
                View programs
              </a>
            </div>
          </div>

          <div className="group relative mx-auto mt-6 w-full max-w-[18rem] sm:max-w-[21rem] md:max-w-[24rem] lg:mt-0 lg:max-w-lg lg:translate-x-4">
            <div className="absolute inset-5 rotate-6 bg-gold transition-transform duration-700 group-hover:rotate-3"></div>
            <img
              className="relative max-h-[520px] w-full border-[6px] border-paper object-cover shadow-soft transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:rotate-[-1deg] sm:max-h-[600px] md:border-[8px] lg:max-h-[680px]"
              src="/magazine-pages/cover.png"
              alt="OEF Impact Magazine cover for Career Choices and Youth Development in the Contemporary Society"
            />
          </div>
        </section>

        <section
          aria-label="Impact highlights"
          className="grid border-y border-ink/10 bg-ink text-paper sm:grid-cols-2 lg:grid-cols-4"
        >
          {impactStats.map((item) => (
            <article
              key={item.value}
              className="border-b border-paper/10 p-7 md:border-b-0 md:border-r md:p-8"
            >
              <strong className="block font-display text-6xl leading-none tracking-[-0.04em] text-gold md:text-7xl">
                {item.value}
              </strong>
              <span className="mt-4 block max-w-xs text-xs font-medium uppercase leading-6 tracking-[0.08em] text-paper/60">
                {item.label}
              </span>
            </article>
          ))}
        </section>

        <section
          id="mission"
          className="bg-cream px-5 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:py-28 xl:px-12 2xl:px-16"
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-0">
            {/* LEFT COLUMN */}
            <div className="pr-0 lg:pr-16">
              <div className="mb-10 flex items-center gap-3">
                <span className="font-body text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-forest">
                  Our Mission
                </span>

                <span className="h-px w-24 bg-gold"></span>

                <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
              </div>

              <h2 className="max-w-[760px] font-display text-[3rem] font-normal uppercase leading-[0.9] tracking-[-0.045em] text-ink sm:text-[3.6rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[5.7rem] 2xl:text-[6.1rem]">
                Creating opportunities through education.
              </h2>

              <div className="mt-10 flex items-center gap-3">
                <span className="h-px w-24 bg-gold"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="border-gold lg:border-l lg:pl-10 xl:pl-14 2xl:pl-16">
              <p className="max-w-[620px] font-body text-base leading-7 text-ink/75 md:text-lg md:leading-8">
                <strong className="font-extrabold text-ink">
                  OEF is committed to addressing the challenges that can limit
                  educational opportunities for young people in Onicha-Igboeze.
                </strong>
              </p>

              <p className="mt-5 max-w-[620px] font-body text-base font-medium leading-7 text-ink/70 md:mt-8 md:text-lg md:leading-8">
                Through financial support, mentorship, teacher development,
                digital learning, and community engagement, we work to create an
                environment where young people can learn, grow, and pursue their
                aspirations.
              </p>
            </div>

            {/* FOUR MISSION PILLARS */}
            <div className="mt-5 grid border-t border-ink/10 md:grid-cols-2 lg:col-span-2 lg:mt-24 lg:grid-cols-4">
              {missionSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="group border-b border-ink/10 py-7 sm:py-8 md:px-6 md:py-9 lg:border-b-0 lg:border-r lg:px-7 lg:py-2 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
                >
                  {/* NUMBER */}
                  <div className="flex items-start justify-between">
                    <span className="font-display text-[2.8rem] font-normal leading-none tracking-[-0.04em] text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="mt-3 h-px w-8 bg-ink/15 transition-all duration-500 group-hover:w-14 group-hover:bg-gold"></span>
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-6 max-w-[240px] font-body text-[0.72rem] font-extrabold uppercase leading-[1.4] tracking-[0.08em] text-forest sm:text-[0.76rem] md:mt-7 lg:mt-6">
                    {step.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-4 max-w-[300px] font-body text-[0.84rem] font-medium leading-[1.7] text-ink/65 sm:text-[0.88rem] md:mt-5">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="stories"
          className="bg-cream px-5 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:py-28 xl:px-12 2xl:px-16"
        >
          {/* SECTION INTRO */}
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-0">
            {/* LEFT — MAIN HEADING */}
            <div className="pr-0 lg:pr-16">
              <div className="mb-10 flex items-center gap-3">
                <span className="font-body text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-forest">
                  Our Stories
                </span>

                <span className="h-px w-24 bg-gold"></span>

                <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
              </div>

              <h2 className="max-w-[760px] font-display text-[3rem] font-normal uppercase leading-[0.9] tracking-[-0.045em] text-ink sm:text-[3.6rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[5.7rem] 2xl:text-[6.1rem]">
                Voices that inspire our mission.
              </h2>
            </div>

            {/* RIGHT — SUPPORTING TEXT + GOLD DIVIDER */}
            <div className="relative flex items-center border-gold lg:border-l lg:pl-10 xl:pl-14 2xl:pl-16">
              <p className="max-w-[620px] font-body text-base font-medium leading-7 text-ink/70 md:text-lg md:leading-8">
                These stories reflect the experiences, ideas, and aspirations
                that continue to shape our commitment to education and youth
                development.
              </p>
            </div>
          </div>

          {/* STORIES */}
          <div className="mt-16 grid gap-5 md:mt-20 lg:grid-cols-2">
            {stories.map((story) => (
              <article
                key={story.title}
                className="group grid overflow-hidden rounded-lg border border-ink/15 bg-paper transition-all duration-500 hover:-translate-y-1 hover:shadow-soft md:grid-cols-[170px_1fr]"
              >
                <div className="overflow-hidden">
                  <img
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    src={story.image}
                    alt=""
                  />
                </div>

                <div className="p-6 md:p-7">
                  <p className="text-xs font-black uppercase tracking-[0.12em] text-brick">
                    {story.eyebrow}
                  </p>

                  <h3 className="mt-3 font-display text-3xl leading-[1.05] tracking-[-0.02em] text-ink">
                    {story.title}
                  </h3>

                  <p className="mt-4 font-body text-sm font-medium leading-7 text-ink/65 md:text-[0.9rem]">
                    {story.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="origin"
          className="bg-ink px-5 py-20 text-paper sm:px-8 sm:py-24 md:px-10 md:py-28 lg:min-h-[85svh] lg:px-12 lg:py-24 xl:px-16 2xl:px-20"
        >
          <div className="mx-auto grid max-w-[1500px] gap-16 lg:min-h-[65svh] lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 xl:gap-28">
            {/* LEFT SIDE — ORIGIN INTRODUCTION */}
            <div className="flex h-full flex-col justify-center">
              {/* SECTION LABEL */}
              <div className="mb-10 flex items-center gap-3">
                <span className="font-body text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-gold">
                  Our Origin
                </span>

                <span className="h-px w-20 bg-gold sm:w-24"></span>

                <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
              </div>

              {/* MAIN HEADING */}
              <h2 className="max-w-[620px] font-display text-[3.2rem] font-normal leading-[0.92] tracking-[-0.045em] text-paper sm:text-[4rem] md:text-[4.8rem] lg:text-[5rem] xl:text-[5.7rem]">
                From a student vision to a community foundation.
              </h2>

              {/* DESCRIPTION */}
              <div className="mt-10 max-w-[600px] border-l border-gold pl-6 sm:pl-7">
                <p className="font-body text-base font-medium leading-7 text-paper/70 sm:text-lg sm:leading-8">
                  OEF grew from a vision shared by young people who believed
                  that education could shape stronger minds, purposeful lives,
                  and a better future for their community.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE — TIMELINE */}
            <div className="flex h-full flex-col justify-center">
              <div className="space-y-12 sm:space-y-14 lg:space-y-16">
                {/* 2002 */}
                <article className="grid gap-5 sm:grid-cols-[130px_1fr] sm:gap-8 lg:grid-cols-[150px_1fr] lg:gap-10">
                  <strong className="font-display text-5xl font-normal leading-none tracking-[-0.04em] text-gold sm:text-6xl lg:text-7xl">
                    2002
                  </strong>

                  <div>
                    <h3 className="font-body text-sm font-extrabold uppercase leading-6 tracking-[0.05em] text-paper sm:text-base">
                      Youth Refiners Organisation begins
                    </h3>

                    <p className="mt-4 max-w-[650px] font-body text-base font-medium leading-7 text-paper/65 sm:text-lg sm:leading-8">
                      Four FUTO undergraduates — Destiny Ogbonna, Onwe Christian
                      Ikechukwu, Nathaniel Obasi, and Chigozie Uneke — founded
                      the Youth Refiners Organisation (YRO) with a shared desire
                      to inspire young people through education, moral
                      development, and purposeful living.
                    </p>
                  </div>
                </article>

                {/* LATER */}
                <article className="grid gap-5 sm:grid-cols-[130px_1fr] sm:gap-8 lg:grid-cols-[150px_1fr] lg:gap-10">
                  <strong className="font-display text-5xl font-normal leading-none tracking-[-0.04em] text-gold sm:text-6xl lg:text-7xl">
                    Later
                  </strong>

                  <div>
                    <h3 className="font-body text-sm font-extrabold uppercase leading-6 tracking-[0.05em] text-paper sm:text-base">
                      The vision matures
                    </h3>

                    <p className="mt-4 max-w-[650px] font-body text-base font-medium leading-7 text-paper/65 sm:text-lg sm:leading-8">
                      The early awareness effort did not fully happen because of
                      funding limits, but the magazine says the dream remained
                      alive until it found a stronger structure.
                    </p>
                  </div>
                </article>

                {/* OEF */}
                <article className="grid gap-5 sm:grid-cols-[130px_1fr] sm:gap-8 lg:grid-cols-[150px_1fr] lg:gap-10">
                  <strong className="font-display text-5xl font-normal leading-none tracking-[-0.04em] text-gold sm:text-6xl lg:text-7xl">
                    OEF
                  </strong>

                  <div>
                    <h3 className="font-body text-sm font-extrabold uppercase leading-6 tracking-[0.05em] text-paper sm:text-base">
                      A wider platform for education
                    </h3>

                    <p className="mt-4 max-w-[650px] font-body text-base font-medium leading-7 text-paper/65 sm:text-lg sm:leading-8">
                      Today, OEF carries that vision forward through
                      scholarships, mentorship, skills development, teacher
                      support, and community education initiatives.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section
          id="roadmap"
          className="bg-paper px-5 py-20 sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:py-32 xl:px-12 2xl:px-16"
        >
          <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
            <h2 className="max-w-3xl font-display text-[3.2rem] font-normal uppercase leading-[0.9] tracking-[-0.045em] text-ink sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem]">
              The next five years.
            </h2>
            <p className="max-w-xl border-l border-gold pl-6 font-body text-base font-medium leading-7 text-ink/65 md:text-lg md:leading-8">
              OEF is working toward expanding its reach and creating more
              opportunities for students, educators, and young people in the
              years ahead.
            </p>
          </div>

          <div className="grid border-t border-ink/10 md:grid-cols-2">
            {roadmap.map((item, index) => (
              <article
                key={item.title}
                className="group flex gap-6 border-b border-ink/10 py-8 sm:p-8 md:border-r md:first:pl-0 md:nth-[2]:pr-0 lg:py-10"
              >
                <span className="shrink-0 font-display text-4xl font-normal leading-none tracking-[-0.04em] text-gold sm:text-5xl">
                  {index + 1}
                </span>
                <div>
                  <h3 className="max-w-md font-body text-base font-extrabold uppercase leading-[1.3] tracking-[0.06em] text-forest sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-xl font-body text-sm font-medium leading-7 text-ink/60 sm:text-base">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-ink px-5 py-16 text-paper sm:px-6 sm:py-20 md:px-8 lg:px-10 lg:py-24 xl:px-12 2xl:px-16">
        <div className="mx-auto grid max-w-[1400px] gap-10 border-t border-paper/15 pt-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h2 className="max-w-xl font-display text-4xl font-normal uppercase leading-[0.95] tracking-[-0.035em] sm:text-5xl">
              Onicha Education Foundation
            </h2>
            <p className="mt-5 max-w-xl font-body text-sm font-medium leading-7 text-paper/55 sm:text-base">
              For more information, view the full document.
            </p>
          </div>
          <a
            className="inline-flex items-center justify-center rounded-full border border-gold px-6 py-3 text-xs font-extrabold uppercase tracking-[0.16em] text-gold transition-all duration-300 hover:bg-gold hover:text-ink"
            href="/documents/oef-impact-magazine.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View full document
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
