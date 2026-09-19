import { Link, useParams } from "react-router-dom";
import stories from "../data/content";

function StoryDetail() {
  const { storySlug } = useParams();

  const story = stories.find((item) => item.slug === storySlug);

  if (!story) {
    return (
      <main className="min-h-screen bg-primary-light px-5 py-24 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <h1 className="font-display text-5xl uppercase text-ink">
            Story not found
          </h1>

          <Link
            to="/stories"
            className="mt-8 inline-flex rounded-sm bg-ink px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-paper"
          >
            Back to stories
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* =========================
          STORY HERO
      ========================== */}
      <section className="bg-primary-light px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-28 md:px-8 md:pb-24 md:pt-28 lg:px-10 lg:pb-28 lg:pt-28 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <Link
            to="/stories"
            className="mb-12 inline-flex items-center gap-3 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-primary-dark transition-colors hover:text-ink"
          >
            <span>←</span>
            Back to stories
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
            <div>
              <div className="mb-8 flex items-center gap-3">
                <span className="font-display text-5xl text-primary">
                  {story.number}
                </span>

                <span className="h-px w-16 bg-primary"></span>

                <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-primary">
                  {story.eyebrow}
                </span>
              </div>

              <h1 className="max-w-5xl font-display text-[1.2rem] uppercase leading-[0.88] tracking-[-0.05em] text-ink sm:text-[4.2rem] md:text-[5.3rem] lg:text-[6rem] xl:text-[7rem]">
                {story.title}
              </h1>
            </div>

            <p className="max-w-xl border-l border-primary-dark pl-6 font-body text-base font-medium leading-8 text-ink/65 md:text-lg">
              {story.text}
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          STORY IMAGE
      ========================== */}
      <section className="bg-primary px-5 py-10 sm:px-6 md:px-8 lg:px-10 lg:py-16 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="mx-auto max-w-[1000px] overflow-hidden rounded-[1.5rem] border border-ink/10 bg-cream p-4 sm:p-6 lg:p-8">
            <img
              src={story.image}
              alt={story.title}
              className="mx-auto h-auto w-full max-w-[850px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* =========================
          STORY CONTENT
      ========================== */}
      <section className="border-b border-primary/15 bg-primary-light px-5 pb-12 pt-10 sm:px-6 md:px-8 lg:px-10 lg:pb-16 lg:pt-16 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="overflow-hidden rounded-[2rem] border border-primary/20 bg-primary-dark p-6 sm:p-8 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[0.32fr_1fr] lg:items-start lg:gap-14">
              <div className="flex lg:justify-start">
                <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-4">
                  <span className="h-px w-12 bg-gold lg:w-16"></span>
                  <p className="text-left text-[0.68rem] font-extrabold uppercase tracking-[0.15em] text-gold">
                    summary.
                  </p>
                </div>
              </div>

              <div className="mx-auto max-w-[760px] text-center">
                <div className="space-y-7 text-surface/80">
                  {story.content.map((paragraph, index) => (
                    <p
                      key={index}
                      className="font-body text-base font-medium leading-8 md:text-lg md:leading-9"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          BACK CTA
      ========================== */}
      <section className="bg-primary-light px-5 py-16 text-paper sm:px-6 md:px-8 lg:px-10 lg:py-20 xl:px-12 2xl:px-16">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.15em] text-primary">
              Continue exploring
            </p>

            <h2 className="mt-3 font-display text-4xl uppercase leading-[0.9] tracking-[-0.04em] sm:text-5xl">
              More stories from OEF.
            </h2>
          </div>

          <Link
            to="/stories"
            className="inline-flex w-fit rounded-sm border bg-primary-dark px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-surface transition-all duration-300 hover:-translate-y-1 hover:bg-primary"
          >
            View all stories
          </Link>
        </div>
      </section>
    </main>
  );
}

export default StoryDetail;
