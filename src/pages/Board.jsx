import { useState } from "react";

const boardMembers = [
  {
    name: "Dr. Chukwuma Ogbonna",
    role: "Chairman, Board of Trustees",
    image: "",
    functions: [
      "General oversight of OEF operations",
      "Provide general leadership",
      "Lead strategic policy developments",
    ],
  },

  {
    name: "Engr. Humphrey Okereke",
    role: "President",
    image: "",
    functions: [
      "General oversight and daily operations",
      "Delegates duties as appropriate",
      "Preside over meetings",
    ],
  },

  {
    name: "Dr. Nathaniel Obasi",
    role: "Lead, Research Developments",
    image: "",
    functions: [
      "Design approved researches",
      "Coordinate OEF grants",
      "Manage research data and produce reports for informed decisions",
    ],
  },

  {
    name: "Engr. Benison Ovoke",
    role: "Lead, Career, Scholarships, and Overseas Opportunities",
    image: "",
    functions: [
      "Search for, collate, and share overseas and career growth opportunities",
      "Develop feedback and evaluation criteria for all awardees of OEF scholarships",
      "Contact individuals and bodies capable of providing scholarships and career growth opportunities to our people",
    ],
  },

  {
    name: "Dr. Kenneth Omabe",
    role: "Lead, Finance and Accounting",
    image: "",
    functions: [
      "Develop standard and acceptable financial report templates",
      "Keep detailed and accurate records of all OEF financial dealings",
      "Produce financial reports to BOT bi-annually in July and December",
    ],
  },

  {
    name: "Dr. Ejike Chukwu",
    role: "Lead, ICT and Innovation",
    image: "",
    functions: [
      "Develop and manage OEF Website",
      "Manage Microsoft Suites and associated packages",
      "Develop a robust digital footprint of OEF activities",
      "Keep records of all OEF ICT assets",
    ],
  },

  {
    name: "Engr. Ikechukwu Onwe",
    role: "Lead, Community Relations",
    image: "",
    functions: [
      "Coordinate physical activities of our annual VCIs",
      "Gather feedback from VCI participants and the general community for OEF continuous improvement",
      "Represent OEF in physical functions at home that require OEF participation",
    ],
  },

  {
    name: "Engr. Chigozie Uneke",
    role: "Lead, Diversity and Inclusion",
    image: "",
    functions: [
      "Ensure balance and inclusion in all OEF public events",
      "Advise on peculiar cases of individuals in need for the consideration of OEF BOT",
    ],
  },

  {
    name: "Barr. Chukwuma Nwosu",
    role: "Secretary and Lead, Legal Services",
    image: "",
    functions: [
      "Represent OEF in all legal-related matters",
      "Take and maintain minutes of all BOT meetings",
      "Advise on legal obligations that OEF must meet",
    ],
  },

  {
    name: "Mr. Edward Okereke",
    role: "OEF Secretary and Community Interface",
    image: "",
    functions: [
      "Assist Engr. Onwe to coordinate OEF VCI annually",
      "Take charge of printings, dispatch, and feedback for all OEF correspondences at home",
      "Give, receive, and disburse funds for VCIs and other OEF events at home",
      "Submit reports of events including financials",
    ],
  },

  {
    name: "Dr. Mathew Akpa",
    role: "Lead, Strategic Communications",
    image: "",
    functions: [
      "Draft all OEF public announcements",
      "Publish approved OEF announcements on appropriate platforms",
      "Manage OEF social media platforms",
    ],
  },

  {
    name: "Dr. David Okorafor",
    role: "Lead, Organizational Development and Strategy",
    image: "",
    functions: [
      "Lead development of any new OEF policy",
      "Review and update contents of our strategic document",
      "Draft contents of OEF Website",
      "Ensure activities comply with OEF policies",
    ],
  },

  {
    name: "Ms. Chidinma Nwankwo",
    role: "Lead, Advocacy and Impacts",
    image: "",
    functions: [
      "Use available data to evaluate impacts of OEF programs",
      "Collate reports of all units and prepare annual OEF report",
      "Organize required stakeholders engagement",
    ],
  },
];

function Board() {
  const [openMember, setOpenMember] = useState(null);

  function toggleMember(index) {
    setOpenMember((current) => (current === index ? null : index));
  }

  return (
    <main className="bg-cream text-ink">
      {/* =====================================================
          BOARD HERO
      ====================================================== */}
      <section className="px-5 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24 md:px-8 md:pb-24 md:pt-28 lg:px-10 lg:pb-28 lg:pt-32 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 flex items-center gap-3">
            <span className="font-body text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-forest">
              Governance
            </span>

            <span className="h-px w-24 bg-gold"></span>

            <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.7fr] lg:gap-20">
            <div>
              <h1 className="max-w-[900px] font-display text-[3.4rem] font-normal uppercase leading-[0.88] tracking-[-0.045em] text-ink sm:text-[4.3rem] md:text-[5.3rem] lg:text-[6rem] xl:text-[6.5rem]">
                Board of Trustees
              </h1>
            </div>

            <div className="flex items-end">
              <p className="max-w-xl border-l border-gold pl-6 font-body text-base font-medium leading-7 text-ink/65 md:text-lg md:leading-8">
                The people entrusted with providing leadership, oversight,
                strategic direction, and specialised support across the Onicha
                Education Foundation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOARD INTRO
      ====================================================== */}
      <section className="border-y border-ink/10 bg-paper px-5 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:py-28 xl:px-12 2xl:px-16">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.8fr_1fr] lg:gap-20">
          <div>
            <p className="font-body text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-forest">
              Leadership & Responsibility
            </p>
          </div>

          <div>
            <p className="max-w-3xl font-display text-3xl leading-[1.05] tracking-[-0.025em] text-ink sm:text-4xl md:text-5xl">
              A foundation is only as strong as the people responsible for
              carrying its vision forward.
            </p>

            <p className="mt-7 max-w-2xl font-body text-base font-medium leading-7 text-ink/65 md:text-lg md:leading-8">
              OEF's Board of Trustees brings together individuals responsible
              for different areas of leadership, development, governance,
              education, community relations, and organisational growth.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOARD MEMBERS
      ====================================================== */}
      <section className="bg-cream px-5 py-20 sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:py-32 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          {/* SECTION HEADING */}
          <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
            <div>
              <div className="mb-8 flex items-center gap-3">
                <span className="font-body text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-forest">
                  The Board
                </span>

                <span className="h-px w-24 bg-gold"></span>

                <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
              </div>

              <h2 className="max-w-4xl font-display text-[3rem] font-normal uppercase leading-[0.9] tracking-[-0.045em] text-ink sm:text-[3.8rem] md:text-[4.8rem] lg:text-[5.5rem] xl:text-[6rem]">
                People behind the responsibility.
              </h2>
            </div>

            <p className="max-w-xl border-l border-gold pl-6 font-body text-base font-medium leading-7 text-ink/65 md:text-lg md:leading-8">
              Select a member to explore their role and responsibilities within
              OEF.
            </p>
          </div>

          {/* MEMBER GRID */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {boardMembers.map((member, index) => {
              const isOpen = openMember === index;

              return (
                <article
                  key={member.name}
                  className={`group overflow-hidden border border-ink/10 bg-paper transition-all duration-500 ${
                    isOpen
                      ? "shadow-soft"
                      : "hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(16,20,24,0.08)]"
                  }`}
                >
                  {/* PHOTO / PLACEHOLDER */}
                  <button
                    type="button"
                    onClick={() => toggleMember(index)}
                    className="block w-full text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="relative aspect-[4/4.6] overflow-hidden bg-ink/5">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center bg-ink text-paper">
                          <span className="font-display text-5xl uppercase tracking-[-0.04em] text-gold/80 sm:text-6xl">
                            OEF
                          </span>

                          <span className="mt-4 text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-paper/45">
                            Photo coming soon
                          </span>
                        </div>
                      )}

                      {/* NUMBER */}
                      <span className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-paper/90 font-body text-[0.65rem] font-black text-ink backdrop-blur">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* NAME / ROLE */}
                    <div className="p-6 sm:p-7">
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <h3 className="font-display text-2xl leading-[1] tracking-[-0.025em] text-ink sm:text-3xl">
                            {member.name}
                          </h3>

                          <p className="mt-3 max-w-[280px] font-body text-[0.68rem] font-extrabold uppercase leading-[1.5] tracking-[0.08em] text-forest">
                            {member.role}
                          </p>
                        </div>

                        <span
                          className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 text-lg transition-transform duration-300 ${
                            isOpen ? "rotate-45 bg-gold" : "bg-transparent"
                          }`}
                        >
                          +
                        </span>
                      </div>

                      <p className="mt-6 text-[0.62rem] font-extrabold uppercase tracking-[0.15em] text-ink/35">
                        {isOpen ? "Close functions" : "View functions"}
                      </p>
                    </div>
                  </button>

                  {/* FUNCTIONS */}
                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-ink/10 px-6 pb-7 pt-6 sm:px-7">
                        <p className="mb-5 font-body text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-brick">
                          Functions
                        </p>

                        <ol className="space-y-4">
                          {member.functions.map((item, functionIndex) => (
                            <li
                              key={item}
                              className="flex gap-4 font-body text-sm font-medium leading-6 text-ink/65"
                            >
                              <span className="shrink-0 font-display text-lg text-gold">
                                {String(functionIndex + 1).padStart(2, "0")}
                              </span>

                              <span>{item}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CLOSING SECTION
      ====================================================== */}
      <section className="bg-ink px-5 py-20 text-paper sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:py-32 xl:px-12 2xl:px-16">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-20">
          <h2 className="max-w-4xl font-display text-[3rem] font-normal uppercase leading-[0.9] tracking-[-0.045em] sm:text-[4rem] md:text-[5rem] lg:text-[5.8rem]">
            Leadership with purpose.
          </h2>

          <p className="max-w-xl border-l border-gold pl-6 font-body text-base font-medium leading-7 text-paper/60 md:text-lg md:leading-8">
            Together, the Board provides the leadership and specialised
            responsibilities required to move OEF's educational vision forward.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Board;
