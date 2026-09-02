function Events() {
  return (
    <main className="bg-cream text-ink">
      {/* =========================
          PAGE INTRO
      ========================== */}
      <section className="px-5 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24 md:px-8 md:pb-24 md:pt-28 lg:px-10 lg:pb-28 lg:pt-32 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1400px] ">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-0">
            <div className="pr-0 lg:pr-16">
              <div className="mb-10 flex items-center gap-3">
                <span className="font-body text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-forest">
                  Events & Activities
                </span>

                <span className="h-px w-24 bg-gold"></span>

                <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
              </div>

              <h1 className="max-w-[850px] font-display text-[3.4rem] font-normal uppercase leading-[0.88] tracking-[-0.045em] sm:text-[4.2rem] md:text-[5.2rem] lg:text-[6rem] xl:text-[6.6rem]">
                Where the work comes to life.
              </h1>
            </div>

            <div className="flex items-center border-gold lg:border-l lg:pl-10 xl:pl-14 2xl:pl-16">
              <p className="max-w-[620px] font-body text-base font-medium leading-7 text-ink/70 md:text-lg md:leading-8">
                From educational programmes to community initiatives, OEF's
                activities create spaces for young people, educators, families,
                and the wider community to connect and participate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
    EVENTS
========================== */}
      <section className="bg-paper px-5 py-20 sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:py-32 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="border-t border-ink/10 pt-10">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:gap-20">
              {/* LEFT */}
              <div>
                <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.15em] text-brick">
                  OEF Events
                </p>

                <h2 className="mt-4 max-w-xl font-display text-[3rem] leading-[0.92] tracking-[-0.04em] text-ink sm:text-[4rem] md:text-[4.5rem]">
                  What happens next.
                </h2>
              </div>

              {/* RIGHT */}
              <div className="border-l border-gold pl-6 lg:pl-10">
                <p className="max-w-xl font-body text-base font-medium leading-8 text-ink/65 md:text-lg">
                  Upcoming and past events will be shared here as OEF's
                  activities take place.
                </p>

                <div className="mt-10 border-t border-ink/10 pt-8">
                  <p className="font-display text-2xl tracking-[-0.02em] text-ink sm:text-3xl">
                    No events to display yet.
                  </p>

                  <p className="mt-3 max-w-md font-body text-sm font-medium leading-7 text-ink/50 sm:text-base">
                    Any upcoming or past OEF events will appear here when they
                    are available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Events;
