function Events() {
  return (
    <main className="bg-primary-light text-ink">
      {/* =========================
          PAGE INTRO
      ========================== */}

      <div className="mx-auto mb-0 flex max-w-[1400px] items-center gap-3 px-5 pb-8 pt-28 sm:px-6 sm:pb-10 sm:pt-28 md:px-8 lg:px-10 lg:pb-12 lg:pt-35 xl:px-12 2xl:px-16">
        <span className="font-body text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-primary">
          Events & Activities
        </span>

        <span className="h-px w-24 bg-primary"></span>

        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
      </div>

      {/* =========================
    EVENTS
========================== */}
      <section className="bg-paper px-5 pt-5 pb-20 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:py-28 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid min-w-0 gap-10 lg:grid-cols-[0.8fr_1fr] lg:gap-16">
            {/* LEFT */}
            <div>
              <h2 className="mt-4 max-w-6xl font-display text-[3rem] leading-[0.92] tracking-[-0.04em] text-ink sm:text-[4rem] md:text-[4.5rem] lg:text-[5.5rem]">
                Where the work comes to life.
              </h2>
            </div>

            {/* RIGHT */}
            <div className="border-l border-primary pl-6 lg:pl-10">
              <p className="max-w-xl font-body text-base font-medium leading-8 text-ink/65 md:text-lg">
                Upcoming and past events will be shared here as OEF's activities
                take place.
              </p>

              <div className="mt-10 border-t border-ink/10 pt-8">
                <p className="font-display text-2xl tracking-[-0.02em] text-ink sm:text-3xl">
                  No events to display yet.
                </p>

                <p className="mt-3 max-w-md font-body text-sm font-medium leading-7 text-ink/50 sm:text-base">
                  Any upcoming or past OEF events will appear here when they are
                  available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Events;
