function Archive() {
  return (
    <main>
      {/* =========================
          ARCHIVE HERO
      ========================== */}
      <section className="bg-cream px-5 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 md:px-8 md:pb-24 md:pt-24 lg:px-10 lg:pb-28 lg:pt-28 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="font-body text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-forest">
                  OEF Archive
                </span>

                <span className="h-px w-20 bg-gold"></span>

                <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
              </div>

              <h1 className="max-w-4xl font-display text-[3.2rem] font-normal uppercase leading-[0.88] tracking-[-0.05em] text-ink sm:text-[4.2rem] md:text-[5.2rem] lg:text-[6rem] xl:text-[6.5rem]">
                Ideas worth keeping.
              </h1>
            </div>

            <div className="border-l border-gold pl-6 lg:pl-9">
              <p className="max-w-lg font-body text-base font-medium leading-7 text-ink/65 md:text-lg md:leading-8">
                Publications and stories that document the vision, work, and
                experiences of the Onicha Education Foundation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FEATURED PUBLICATION
      ========================== */}
      <section className="bg-paper px-5 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:py-28 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1280px]">
          {/* INTRO */}
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="font-body text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-forest">
                  Featured publication
                </span>

                <span className="h-px w-16 bg-gold"></span>

                <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
              </div>

              <h2 className="max-w-3xl font-display text-[2.8rem] font-normal uppercase leading-[0.9] tracking-[-0.045em] text-ink sm:text-[3.6rem] md:text-[4.5rem]">
                OEF Impact Magazine
              </h2>
            </div>

            <p className="max-w-md border-l border-gold pl-5 font-body text-sm font-medium leading-7 text-ink/60 sm:text-base">
              The foundation's publication documenting its vision, educational
              work, stories, and plans for the future.
            </p>
          </div>

          {/* MAGAZINE */}
          <div className="grid overflow-hidden rounded-[1.5rem] bg-ink lg:grid-cols-[320px_1fr]">
            {/* COVER */}
            <div className="flex items-center justify-center bg-ink p-7 sm:p-9 lg:p-10">
              <div className="group relative w-full max-w-[260px]">
                <div className="absolute inset-3 rotate-3 bg-gold transition-transform duration-500 group-hover:rotate-1"></div>

                <img
                  src="/magazine-pages/cover.png"
                  alt="OEF Impact Magazine cover"
                  className="relative w-full border-4 border-paper object-cover shadow-soft transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-1deg]"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="flex flex-col justify-center p-7 text-paper sm:p-10 md:p-12 lg:p-14">
              <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-gold">
                Publication
              </p>

              <h3 className="mt-4 max-w-2xl font-display text-[2.5rem] uppercase leading-[0.94] tracking-[-0.035em] sm:text-[3.2rem] md:text-[4rem]">
                Career Choices and Youth Development
              </h3>

              <p className="mt-5 max-w-xl font-body text-sm font-medium leading-7 text-paper/60 sm:text-base sm:leading-8">
                Discover the stories, conversations, educational ideas, and
                community vision contained within the OEF Impact Magazine.
              </p>

              <div className="mt-7">
                <a
                  href="https://qnzdfp345asd8nrn.public.blob.vercel-storage.com/oef-impact-magazine.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-sm border border-gold px-5 py-3.5 text-[0.68rem] font-black uppercase tracking-[0.14em] text-gold transition-all duration-300 hover:-translate-y-1 hover:bg-gold hover:text-ink"
                >
                  Read the magazine
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          ARCHIVE CONTENT
      ========================== */}
      <section className="bg-cream px-5 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:py-28 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1280px]">
          {/* HEADER */}
          <div className="mb-10">
            <div className="mb-5 flex items-center gap-3">
              <span className="font-body text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-forest">
                Explore the archive
              </span>

              <span className="h-px w-16 bg-gold"></span>

              <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
            </div>

            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="max-w-3xl font-display text-[2.8rem] font-normal uppercase leading-[0.9] tracking-[-0.045em] text-ink sm:text-[3.6rem] md:text-[4.5rem]">
                What we've documented.
              </h2>

              <p className="max-w-md font-body text-sm font-medium leading-7 text-ink/60 sm:text-base">
                Explore the material currently available from OEF. More will be
                added as the foundation's archive grows.
              </p>
            </div>
          </div>

          {/* ARCHIVE ITEMS */}
          <div className="border-t border-ink/10">
            {/* STORIES */}
            <a
              href="/stories"
              className="group grid gap-5 border-b border-ink/10 py-7 transition-all duration-300 hover:px-3 md:grid-cols-[70px_1fr_auto] md:items-center md:gap-8"
            >
              <span className="font-display text-3xl leading-none tracking-[-0.04em] text-gold">
                01
              </span>

              <div>
                <p className="text-[0.65rem] font-black uppercase tracking-[0.14em] text-brick">
                  Stories
                </p>

                <h3 className="mt-2 font-display text-2xl leading-none tracking-[-0.025em] text-ink sm:text-3xl">
                  Stories behind the mission.
                </h3>

                <p className="mt-2 max-w-2xl font-body text-sm font-medium leading-6 text-ink/55">
                  Perspectives, experiences, and stories that help explain the
                  people and ideas behind OEF's work.
                </p>
              </div>

              <span className="text-[0.65rem] font-black uppercase tracking-[0.14em] text-ink/40 transition-colors group-hover:text-forest">
                Explore →
              </span>
            </a>

            {/* PUBLICATION */}
            <a
              href="https://qnzdfp345asd8nrn.public.blob.vercel-storage.com/oef-impact-magazine.pdf"
              target="_blank"
              rel="noreferrer"
              className="group grid gap-5 border-b border-ink/10 py-7 transition-all duration-300 hover:px-3 md:grid-cols-[70px_1fr_auto] md:items-center md:gap-8"
            >
              <span className="font-display text-3xl leading-none tracking-[-0.04em] text-gold">
                02
              </span>

              <div>
                <p className="text-[0.65rem] font-black uppercase tracking-[0.14em] text-brick">
                  Publication
                </p>

                <h3 className="mt-2 font-display text-2xl leading-none tracking-[-0.025em] text-ink sm:text-3xl">
                  OEF Impact Magazine
                </h3>

                <p className="mt-2 max-w-2xl font-body text-sm font-medium leading-6 text-ink/55">
                  Career choices, youth development, educational ideas, and the
                  foundation's wider vision.
                </p>
              </div>

              <span className="text-[0.65rem] font-black uppercase tracking-[0.14em] text-ink/40 transition-colors group-hover:text-forest">
                Read →
              </span>
            </a>

            {/* FUTURE ARCHIVE */}
            <div className="grid gap-5 py-7 md:grid-cols-[70px_1fr] md:gap-8">
              <span className="font-display text-3xl leading-none tracking-[-0.04em] text-ink/20">
                03
              </span>

              <div>
                <p className="text-[0.65rem] font-black uppercase tracking-[0.14em] text-ink/40">
                  Archive in progress
                </p>

                <h3 className="mt-2 font-display text-2xl leading-none tracking-[-0.025em] text-ink/70 sm:text-3xl">
                  More material will appear here.
                </h3>

                <p className="mt-2 max-w-2xl font-body text-sm font-medium leading-6 text-ink/50">
                  Any additional publications, documents, or resources will be
                  added as they become available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FINAL CTA
      ========================== */}
      <section className="bg-paper px-5 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:py-28 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1280px] border-t border-ink/10 pt-10">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-forest">
                Keep exploring
              </p>

              <h2 className="mt-4 max-w-3xl font-display text-[2.6rem] uppercase leading-[0.92] tracking-[-0.04em] text-ink sm:text-[3.5rem] md:text-[4.2rem]">
                The work continues beyond the page.
              </h2>
            </div>

            <a
              href="/get-involved"
              className="inline-flex w-fit items-center justify-center rounded-sm bg-ink px-5 py-3.5 text-[0.68rem] font-black uppercase tracking-[0.14em] text-paper transition-all duration-300 hover:-translate-y-1 hover:bg-forest"
            >
              Get involved
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Archive;
