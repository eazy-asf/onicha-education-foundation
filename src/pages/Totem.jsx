function Totem() {
  const values = [
    {
      number: "01",
      title: "Truthfulness",
      text: "Truthfulness is the quality of being honest and always telling the truth. In a world and society today where saying and being truthful seems more like a taboo, truthfulness remains a rare gem. In Onicha Igboeze community this core value is of great essence as it guides the daily activities of its residents building trust that leads to lasting cooperation. In Onicha Igboeze, truthfulness is more than a value; it’s the very essence of their moral identity.",
    },
    {
      number: "02",
      title: "Integrity",
      text: "Back then in secondary school, I was taught that integrity is the quality of being honest and always standing up for the truth (high moral principles). Of a truth integrity is a value that must be held up by every individual. In the bleeding state of our nation and globe, the world is in search of men and women of integrity; people with high moral conduct, who are ready to stand by what is true at any cost. In Onicha Igboeze community integrity is the compass guiding every action and decision. It is the foundation upon which the community’s relationships and governance stand, fostering mutual respect and cooperation.",
    },
    {
      number: "03",
      title: "Resilience",
      text: "Merriam-Webster’s dictionary defines resilience as the ability to recover or adjust to change. In life it is a fact that change is inevitable and what really matters is how one acts when changes occur. A change can be positive or negative but our reaction to it matters and goes a long way. Resilience is the unyielding spirit that defines the Onicha Igboeze community. It signifies the ability to face adversity with courage and determination. In this community, resilience means that challenges are met with an unwavering resolve to overcome them converting them to stepping stones for a higher level. In a nutshell, It is the fuel that propels Onicha Igboeze forward, ensuring that trials are opportunities for growth and unity.",
    },
    {
      number: "04",
      title: "Confidence",
      text: "Personally, the word confidence is not just a word but a lifestyle. Without confidence, many great ideas, dreams, and goals would never come to actualization. Most times what we need is the confidence to act accordingly, as we have planned. Confidence is the emblem of the Onicha Igboeze community, symbolized by the majestic elephant totem. It represents a deep self-assuredness that runs through the community’s veins. This communal confidence fosters an environment where aspirations are pursued with determination, and obstacles are faced with optimism.",
    },
    {
      number: "05",
      title: "Strength",
      text: "The holy bible says and I quote “If you faint in the days of adversity thy strength is small”. Strength is that force that keeps you going in the midst of troubles and trying situations. Strength is the enduring pillar of the Onicha Igboeze community. Beyond physical might, it represents inner fortitude and unity. In this community, strength means standing firm in the face of adversity, supporting one another, and protecting the community’s well-being. It embodies the resilience to overcome challenges and the collective power to uplift one another.",
    },
    {
      number: "06",
      title: "Industry",
      text: "As the saying goes and I quote “Necessity is the mother of innovation”, and without innovation, one cannot be industrious. Industry in the Onicha Igboeze community is a commitment to not only hard work but also the cultivation of creativity and innovation in every endeavor. It encourages the pursuit of new ideas, the exploration of novel approaches, and the development of innovative solutions. Industry is the community’s driving force, pushing them to continually evolve and find creative ways to address challenges and seize opportunities, thus ensuring their progress and prosperity.",
      note: "Exhibiting creativity and innovativeness in whatever they do.",
    },
    {
      number: "07",
      title: "Justice",
      text: "In our world where it seems justice can be bought, this value remains a core attribute for the growth and progress of any society if served right and maintained. In the Onicha Igboeze community, justice is the bedrock of fairness and equality. It embodies the principle that every individual is treated impartially, without discrimination. This core value ensures that disputes are resolved transparently, conflicts are addressed with fairness, and accountability is upheld. In Onicha Igboeze, justice isn’t just an ideal; it’s a living principle that promotes unity, protects individual rights, and upholds the community’s cultural heritage.",
    },
    {
      number: "08",
      title: "Fairness",
      text: "In a society filled with compromise, fairness becomes a rare trait. Fairness is a foundational value in the Onicha Igboeze community, where it means treating all individuals equitably, without bias. It signifies the even distribution of opportunities and resources, ensuring that no one is unjustly favored or disadvantaged. Here, it’s a way of life that guarantees that every member’s voice is heard and respected, fostering a harmonious society where justice prevails and unity thrives.",
    },
    {
      number: "09",
      title: "Equity",
      text: "Merriam-Webster’s dictionary defines equity as justice according to natural law or right. In our nation today where it seems that the laws of the land are no longer making waves since no one is ready to enforce them, equity becomes a rare quality that shouldn’t be rare. Equity is a fundamental value in the Onicha Igboeze community, signifying the commitment to rectify imbalances and disparities. It ensures that all individuals have an equal chance to prosper, regardless of their background or circumstances thereby creating a level playing field.",
    },
    {
      number: "10",
      title: "Unity",
      text: "Merriam-Webster’s dictionary defines unity as the quality or state of not being multiple, that’s the state of oneness. Oneness in community ideas, goals, and plans to mention but a few. In the Onicha Igboeze community, unity stands as a sacred pillar of strength. It embodies the profound principle of coming together as one, setting aside differences, and working towards shared goals. It is the force that enables them to face challenges collectively, celebrate victories together, and support one another through thick and thin. It is the enduring bond that weaves the community into a tapestry of shared values, culture, and destiny, reflecting the gallantry of the symbolic elephant totem.",
    },
    {
      number: "11",
      title: "Purity",
      text: "Purity is a state of being pure. Here it signifies moral integrity, an unwavering standard of behavior. In the Onicha Igboeze community, purity signifies not only physical cleanliness but moral integrity. It encompasses a commitment to virtuous living, where actions and intentions are guided by ethical principles. This core value ensures that the community maintains a wholesome environment free from corruption and deceit. Purity promotes a harmonious atmosphere where trust and transparency flourish.",
    },
  ];

  return (
    <main className="bg-cream text-ink">
      {/* =========================
          HERO
      ========================== */}
      <section className="px-5 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 md:px-8 md:pb-24 md:pt-24 lg:px-10 lg:pb-28 lg:pt-28 xl:px-12 2xl:px-16">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-20">
          {/* TEXT */}
          <div>
            <div className="mb-10 flex items-center gap-3">
              <span className="font-body text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-forest">
                Our Totem
              </span>

              <span className="h-px w-24 bg-gold"></span>

              <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
            </div>

            <h1 className="max-w-[900px] font-display text-[3.5rem] font-normal uppercase leading-[0.86] tracking-[-0.05em] text-ink sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.3rem] xl:text-[7rem]">
              Onicha-Igboeze Totem & Core Values.
            </h1>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-10 bg-gold"></span>

              <p className="font-body text-sm font-bold text-ink/60">
                By Ogbonnya, Nnayere Simon
              </p>
            </div>

            <p className="mt-2 font-body text-sm font-medium text-ink/45">
              University of Uyo, Nigeria.
            </p>
          </div>

          {/* TOTEM IMAGE */}
          <div className="relative mx-auto w-full max-w-[600px]">
            <div className="absolute -inset-3 rounded-[2rem] border border-gold/30"></div>

            <div className="relative overflow-hidden rounded-[1.5rem] bg-paper">
              <img
                src="/magazine-pages/onicha-igboeze-totem.jpeg"
                alt="Onicha-Igboeze elephant totem"
                className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[580px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6">
                <span className="rounded-full border border-gold bg-ink/40 px-4 py-2 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-gold backdrop-blur-sm">
                  Onicha-Igboeze Totem
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          INTRODUCTION
      ========================== */}
      <section className="bg-paper px-5 py-20 sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:py-32 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1fr] lg:gap-24">
            {/* LABEL */}
            <div>
              <div className="flex items-center gap-3">
                <span className="font-body text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-forest">
                  The Foundation of a Community
                </span>

                <span className="h-px w-16 bg-gold"></span>
              </div>
            </div>

            {/* CONTENT */}
            <article className="max-w-4xl">
              <h2 className="font-display text-[3rem] font-normal uppercase leading-[0.9] tracking-[-0.045em] sm:text-[4rem] md:text-[5rem]">
                What is a community’s core value?
              </h2>

              <div className="mt-10 border-l-2 border-gold pl-6 sm:pl-8">
                <p className="font-display text-2xl leading-[1.15] tracking-[-0.02em] text-ink sm:text-3xl md:text-4xl">
                  “There is no power for change greater than a community
                  discovering what it cares about.”
                </p>

                <p className="mt-4 font-body text-xs font-extrabold uppercase tracking-[0.12em] text-ink/45">
                  Margaret J. Wheatley
                </p>
              </div>

              <div className="mt-10 space-y-6 font-body text-base font-medium leading-8 text-ink/65 md:text-lg md:leading-9">
                <p>
                  Let’s begin our journey with a quote by an American writer,
                  Margaret J. Wheatley, “There is no power for change greater
                  than a community discovering what it cares about”, I would
                  love to add to it “and what it values.”
                </p>

                <p>
                  Now, let’s delve into the topic of discussion, A community
                  core value is a value that is appreciated at an individual
                  level and shared by every member of the community. Community
                  values are the non-negotiable core principles or standards
                  that the community’s residents wish to maintain. They must be
                  acknowledged, honoured, and constantly defended to ensure that
                  change and development occur in accordance with these.
                </p>

                <p>
                  In essence, community core values guide the community’s
                  vision, mission, and strategic plan as well as its goals,
                  objectives, activities, capital projects, budgets, and
                  services. They serve as broad guidelines in all situations.
                  Every community must have the values it appreciates and guide
                  the individual and collective behaviour of the community.
                </p>

                <p>
                  Values serve as the moral compass for any society, shaping its
                  culture, interactions, and collective identity. In the context
                  of Onicha Igboeze, their totem, the magnificent elephant, is
                  symbolic of these values, reflecting the community’s
                  deep-rooted commitment to a set of principles that ensure
                  unity, fairness, and strength.
                </p>

                <p>
                  This essay aims to explore the meaning and impact of these
                  values in the lives of Onicha Igboeze residents.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =========================
          VALUES INTRO
      ========================== */}
      <section className="bg-cream px-5 pb-10 pt-20 sm:px-6 sm:pb-12 sm:pt-24 md:px-8 md:pb-16 md:pt-28 lg:px-10 lg:pb-20 lg:pt-32 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-end justify-between gap-10">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="font-body text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-forest">
                  Our Values
                </span>

                <span className="h-px w-20 bg-gold"></span>
              </div>

              <h2 className="max-w-4xl font-display text-[3rem] font-normal uppercase leading-[0.88] tracking-[-0.045em] sm:text-[4rem] md:text-[5rem] lg:text-[6rem]">
                The principles that shape us.
              </h2>
            </div>

            <span className="hidden font-display text-[8rem] leading-none text-gold/30 lg:block">
              11
            </span>
          </div>
        </div>
      </section>

      {/* =========================
          VALUES
      ========================== */}
      <section className="bg-cream px-5 pb-20 sm:px-6 sm:pb-24 md:px-8 md:pb-28 lg:px-10 lg:pb-32 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="border-t border-ink/10">
            {values.map((value) => (
              <article
                key={value.number}
                className="grid gap-7 border-b border-ink/10 py-10 sm:py-12 lg:grid-cols-[110px_0.65fr_1fr] lg:gap-12 lg:py-14"
              >
                {/* NUMBER */}
                <span className="font-display text-4xl leading-none tracking-[-0.04em] text-gold sm:text-5xl">
                  {value.number}
                </span>

                {/* TITLE */}
                <div>
                  <h3 className="font-display text-3xl uppercase leading-[0.95] tracking-[-0.035em] sm:text-4xl md:text-5xl">
                    {value.title}
                  </h3>

                  {value.note && (
                    <p className="mt-4 max-w-sm font-body text-xs font-extrabold uppercase tracking-[0.1em] text-forest">
                      {value.note}
                    </p>
                  )}
                </div>

                {/* TEXT */}
                <p className="max-w-2xl font-body text-base font-medium leading-8 text-ink/65 md:text-lg md:leading-9">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          ELEPHANT STATEMENT
      ========================== */}
      <section className="relative overflow-hidden bg-ink px-5 py-24 text-paper sm:px-6 sm:py-28 md:px-8 md:py-32 lg:px-10 lg:py-36 xl:px-12 2xl:px-16">
        <div className="relative mx-auto max-w-[1400px]">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="font-body text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-gold">
                A Symbol of Identity
              </span>

              <span className="h-px w-20 bg-gold"></span>
            </div>

            <h2 className="max-w-3xl font-display text-[3rem] font-normal uppercase leading-[0.88] tracking-[-0.045em] sm:text-[4rem] md:text-[5rem]">
              Strength. Unity. Resilience.
            </h2>

            <p className="mt-8 max-w-2xl font-body text-base font-medium leading-8 text-paper/65 md:text-lg md:leading-9">
              In the context of Onicha Igboeze, the magnificent elephant is
              symbolic of the community’s values, reflecting a deep-rooted
              commitment to unity, fairness, and strength.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          CONCLUSION
      ========================== */}
      <section className="bg-paper px-5 py-20 sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:py-32 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="border-t border-ink/10 pt-10 md:pt-14">
            <div className="mb-8 flex items-center gap-3">
              <span className="font-body text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-forest">
                In Conclusion
              </span>

              <span className="h-px w-20 bg-gold"></span>
            </div>

            <p className="max-w-5xl font-display text-[2.5rem] leading-[0.98] tracking-[-0.035em] text-ink sm:text-[3.5rem] md:text-[4.5rem]">
              Onicha Igboeze serves as a living testament to the transformative
              power of core values.
            </p>

            <p className="mt-10 max-w-4xl font-body text-base font-medium leading-8 text-ink/65 md:text-lg md:leading-9">
              The amalgamation of Truthfulness, Integrity, Resilience,
              Confidence, Strength, Industry, Justice, Fairness, Equity, Unity,
              and Purity weaves the intricate tapestry of this community’s moral
              fabric. They are the moral compass, guiding every action, every
              interaction, and every decision. They not only preserve the rich
              cultural heritage but also ensure that unity and justice flourish,
              making this community a shining example of how core values can
              foster a harmonious, prosperous, and enduring society.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Totem;
