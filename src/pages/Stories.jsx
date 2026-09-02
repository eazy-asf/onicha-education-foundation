import { Link } from "react-router-dom";
import stories from "../data/content";

function Stories() {
  const featuredStory = stories.find((story) => story.featured);
  const supportingStories = stories.filter((story) => !story.featured);

  return (
    <main>
      {/* =========================
          PAGE HERO
      ========================== */}
      <section className="bg-cream px-5 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 md:px-8 lg:px-10 lg:pb-24 lg:pt-24 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr] lg:items-end lg:gap-20">
            <div>
              <div className="mb-8 flex items-center gap-3">
                <span className="font-body text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-forest">
                  Our Stories
                </span>

                <span className="h-px w-20 bg-gold"></span>

                <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
              </div>

              <h1 className="max-w-5xl font-display text-[3.4rem] font-normal uppercase leading-[0.88] tracking-[-0.05em] text-ink sm:text-[4.4rem] md:text-[5.5rem] lg:text-[6.2rem] xl:text-[7rem]">
                Voices that inspire our mission.
              </h1>
            </div>

            <div className="border-l border-gold pl-6 lg:pb-1 lg:pl-10 xl:pl-14">
              <p className="mt-5 max-w-2xl font-body text-base font-medium leading-7 text-ink/60 md:text-lg md:leading-8">
                This edition — Career Choices and Youth Development — explores
                more stories, ideas, reflections, and information about the
                foundation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
    MAGAZINE STORIES
========================== */}
      <section className="bg-paper px-5 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:py-28 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1280px]">
          {/* SECTION INTRO */}
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-4 text-[0.68rem] font-extrabold uppercase tracking-[0.15em] text-brick">
                OEF Impact Magazine
              </p>

              <h2 className="max-w-3xl font-display text-[2.8rem] leading-[0.92] tracking-[-0.04em] text-ink sm:text-[3.8rem] md:text-[4.5rem]">
                Stories behind the mission.
              </h2>
            </div>

            <p className="max-w-md border-l border-gold pl-5 font-body text-sm font-medium leading-7 text-ink/60 sm:text-base">
              Explore selected pieces from the OEF Impact Magazine and discover
              the ideas, people, and experiences behind the foundation's work.
            </p>
          </div>

          {/* FEATURED STORY */}
          <Link
            to={`/stories/${featuredStory.slug}`}
            className="group relative mb-6 grid overflow-visible rounded-[1.5rem] border border-ink/10 bg-cream transition-all duration-500 hover:-translate-y-1 hover:shadow-soft lg:grid-cols-[280px_1fr]"
          >
            {/* IMAGE */}
            <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-paper sm:min-h-[400px] lg:min-h-[430px]">
              <img
                src={featuredStory.image}
                alt={featuredStory.title}
                className="h-full w-full object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
            </div>

            {/* NUMBER — TOP RIGHT OF THE WHOLE CARD */}
            <span className="absolute right-7 bottom-5 z-20 font-display text-3xl leading-none text-gold">
              {featuredStory.number}
            </span>

            {/* CONTENT */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.15em] text-brick">
                {featuredStory.eyebrow}
              </p>

              <h3 className="mt-4 max-w-2xl font-display text-[2.5rem] leading-[0.95] tracking-[-0.035em] text-ink sm:text-[3.4rem]">
                {featuredStory.title}
              </h3>

              <p className="mt-6 max-w-2xl font-body text-sm font-medium leading-7 text-ink/60 sm:text-base sm:leading-8">
                {featuredStory.text}
              </p>

              <div className="mt-8 flex items-center gap-3 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-forest">
                Read full story
                <span className="h-px w-8 bg-gold transition-all duration-300 group-hover:w-14" />
              </div>
            </div>
          </Link>

          {/* SUPPORTING STORIES */}
          <div className="grid gap-6 lg:grid-cols-2">
            {supportingStories.map((story) => (
              <Link
                key={story.slug}
                to={`/stories/${story.slug}`}
                className="group relative grid overflow-visible rounded-[1.5rem] border border-ink/10 bg-cream transition-all duration-500 hover:-translate-y-1 hover:shadow-soft sm:grid-cols-[190px_1fr]"
              >
                {/* IMAGE */}
                <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-paper sm:min-h-[300px]">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-full w-full object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                {/* NUMBER — TOP RIGHT OF THE ENTIRE CARD */}
                <span className="absolute right-7 bottom-5 z-20 font-display text-3xl leading-none text-gold">
                  {story.number}
                </span>

                {/* CONTENT */}
                <div className="flex flex-col justify-center p-6 sm:p-7">
                  <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-brick">
                    {story.eyebrow}
                  </p>

                  <h3 className="mt-3 font-display text-2xl leading-[1] tracking-[-0.025em] text-ink sm:text-3xl">
                    {story.title}
                  </h3>

                  <p className="mt-4 font-body text-sm font-medium leading-7 text-ink/60">
                    {story.text}
                  </p>

                  <div className="mt-6 flex items-center gap-3 text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-forest">
                    Read full story
                    <span className="h-px w-7 bg-gold transition-all duration-300 group-hover:w-12" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          MAGAZINE CTA
      ========================== */}
      <section className="bg-cream px-5 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:py-28 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 border-t border-ink/10 pt-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.15em] text-brick">
                OEF Impact Magazine
              </p>

              <h2 className="mt-4 max-w-3xl font-display text-[2.8rem] leading-[0.92] tracking-[-0.04em] text-ink sm:text-[3.8rem]">
                There is more to the story.
              </h2>

              <p className="mt-5 max-w-2xl font-body text-base font-medium leading-7 text-ink/60 md:text-lg md:leading-8">
                Explore the full publication for more stories, ideas,
                reflections, and information about the foundation.
              </p>
            </div>

            <a
              href="https://qnzdfp345asd8nrn.public.blob.vercel-storage.com/oef-impact-magazine.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center justify-center rounded-sm bg-ink px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-paper transition-all duration-300 hover:-translate-y-1 hover:bg-forest"
            >
              View full document
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Stories;
