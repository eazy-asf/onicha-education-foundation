import { useState } from "react";

function GetInvolved() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xjyvgknv", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <main>
      {/* =========================
          PAGE HERO
      ========================== */}
      <section className="relative overflow-hidden bg-cream px-5 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 md:px-8 md:pb-28 md:pt-24 lg:px-10 lg:pb-32 lg:pt-28 xl:px-12 2xl:px-16">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-20">
          <div>
            <div className="mb-10 flex items-center gap-3">
              <span className="font-body text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-forest">
                Get Involved
              </span>

              <span className="h-px w-24 bg-gold"></span>

              <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
            </div>

            <h1 className="max-w-[900px] font-display text-[3.5rem] font-normal uppercase leading-[0.88] tracking-[-0.05em] text-ink sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.2rem] xl:text-[7rem]">
              Education grows when a community gets involved.
            </h1>
          </div>

          <div className="border-l border-gold pl-6 lg:mb-2 lg:pl-8">
            <p className="max-w-xl font-body text-base font-medium leading-7 text-ink/70 md:text-lg md:leading-8">
              OEF believes meaningful change does not come from one person or
              one organisation alone. There is a place for people who want to
              give, mentor, teach, support, partner, or simply contribute to
              creating better opportunities for young people.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          INTEREST FORM
      ========================== */}
      <section className="bg-cream px-5 py-20 sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:py-32 xl:px-12 2xl:px-16">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.75fr_1fr] lg:gap-20">
          {/* FORM INTRO */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="font-body text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-forest">
                Start a Conversation
              </span>

              <span className="h-px w-20 bg-gold"></span>
            </div>

            <h2 className="max-w-xl font-display text-[3rem] font-normal uppercase leading-[0.9] tracking-[-0.045em] text-ink sm:text-[3.8rem] md:text-[4.8rem]">
              Tell us how you would like to contribute.
            </h2>

            <p className="mt-8 max-w-lg font-body text-base font-medium leading-7 text-ink/65 md:text-lg md:leading-8">
              Whether you want to volunteer, mentor, partner with OEF, support a
              student, or explore another opportunity, let us know what you have
              in mind.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="border-t border-ink/10 pt-8">
            <div className="grid gap-7 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-extrabold uppercase tracking-[0.12em] text-forest"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full border-b border-ink/20 bg-transparent px-0 py-4 font-body text-base outline-none transition-colors placeholder:text-ink/35 focus:border-gold"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-extrabold uppercase tracking-[0.12em] text-forest"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full border-b border-ink/20 bg-transparent px-0 py-4 font-body text-base outline-none transition-colors placeholder:text-ink/35 focus:border-gold"
                />
              </div>
            </div>

            <div className="mt-8">
              <label
                htmlFor="interest"
                className="mb-2 block text-xs font-extrabold uppercase tracking-[0.12em] text-forest"
              >
                How would you like to help?
              </label>

              <select
                id="interest"
                name="interest"
                required
                className="w-full border-b border-ink/20 bg-transparent px-0 py-4 font-body text-base outline-none transition-colors focus:border-gold"
                defaultValue=""
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="student-support">Support a Student</option>
                <option value="mentor">Become a Mentor</option>
                <option value="partner">Partner With OEF</option>
                <option value="volunteer">Volunteer</option>
                <option value="other">Something Else</option>
              </select>
            </div>

            <div className="mt-8">
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-extrabold uppercase tracking-[0.12em] text-forest"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Tell us a little about what you have in mind..."
                className="w-full resize-none border-b border-ink/20 bg-transparent px-0 py-4 font-body text-base outline-none transition-colors placeholder:text-ink/35 focus:border-gold"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-10 inline-flex items-center gap-3 rounded-sm bg-ink px-7 py-4 text-xs font-black uppercase tracking-[0.14em] text-paper transition-all duration-300 hover:-translate-y-1 hover:bg-forest hover:shadow-lg disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send your message"}
            </button>

            {status === "success" && (
              <p className="mt-4 font-body text-sm font-medium text-forest">
                Thanks — your message has been sent. We'll be in touch soon.
              </p>
            )}

            {status === "error" && (
              <p className="mt-4 font-body text-sm font-medium text-brick">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* =========================
          WAYS TO GET INVOLVED
      ========================== */}
      <section className="bg-paper px-5 py-20 sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:py-32 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:gap-20">
            {/* LEFT */}
            <div>
              <div className="mb-8 flex items-center gap-3">
                <span className="font-body text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-forest">
                  Your Contribution
                </span>

                <span className="h-px w-20 bg-gold"></span>
              </div>

              <h2 className="max-w-xl font-display text-[3rem] font-normal uppercase leading-[0.9] tracking-[-0.045em] text-ink sm:text-[3.8rem] md:text-[4.6rem]">
                There is more than one way to make an impact.
              </h2>
            </div>

            {/* RIGHT */}
            <div className="grid border-t border-ink/10 sm:grid-cols-2">
              {/* 01 */}
              <article className="group border-b border-ink/10 py-8 sm:border-r sm:px-7 sm:py-10">
                <div className="flex items-start justify-between">
                  <span className="font-display text-4xl font-normal text-gold">
                    01
                  </span>

                  <span className="mt-3 h-px w-8 bg-ink/15 transition-all duration-500 group-hover:w-14 group-hover:bg-gold"></span>
                </div>

                <h3 className="mt-8 font-body text-base font-extrabold uppercase tracking-[0.06em] text-forest">
                  Support a Student
                </h3>

                <p className="mt-4 font-body text-sm font-medium leading-7 text-ink/60 sm:text-base">
                  Help provide students with the financial and educational
                  support they need to continue their learning journey.
                </p>
              </article>

              {/* 02 */}
              <article className="group border-b border-ink/10 py-8 sm:px-7 sm:py-10">
                <div className="flex items-start justify-between">
                  <span className="font-display text-4xl font-normal text-gold">
                    02
                  </span>

                  <span className="mt-3 h-px w-8 bg-ink/15 transition-all duration-500 group-hover:w-14 group-hover:bg-gold"></span>
                </div>

                <h3 className="mt-8 font-body text-base font-extrabold uppercase tracking-[0.06em] text-forest">
                  Become a Mentor
                </h3>

                <p className="mt-4 font-body text-sm font-medium leading-7 text-ink/60 sm:text-base">
                  Share your experience, knowledge, and perspective with young
                  people navigating education and career decisions.
                </p>
              </article>

              {/* 03 */}
              <article className="group border-b border-ink/10 py-8 sm:border-r sm:px-7 sm:py-10">
                <div className="flex items-start justify-between">
                  <span className="font-display text-4xl font-normal text-gold">
                    03
                  </span>

                  <span className="mt-3 h-px w-8 bg-ink/15 transition-all duration-500 group-hover:w-14 group-hover:bg-gold"></span>
                </div>

                <h3 className="mt-8 font-body text-base font-extrabold uppercase tracking-[0.06em] text-forest">
                  Partner With OEF
                </h3>

                <p className="mt-4 font-body text-sm font-medium leading-7 text-ink/60 sm:text-base">
                  Organisations, institutions, educators, and community groups
                  can work with OEF to expand educational opportunities.
                </p>
              </article>

              {/* 04 */}
              <article className="group border-b border-ink/10 py-8 sm:px-7 sm:py-10">
                <div className="flex items-start justify-between">
                  <span className="font-display text-4xl font-normal text-gold">
                    04
                  </span>

                  <span className="mt-3 h-px w-8 bg-ink/15 transition-all duration-500 group-hover:w-14 group-hover:bg-gold"></span>
                </div>

                <h3 className="mt-8 font-body text-base font-extrabold uppercase tracking-[0.06em] text-forest">
                  Volunteer
                </h3>

                <p className="mt-4 font-body text-sm font-medium leading-7 text-ink/60 sm:text-base">
                  Contribute your time, skills, ideas, or professional
                  experience to support OEF initiatives.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FINAL CTA
      ========================== */}
      <section className="bg-ink px-5 py-20 text-paper sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-10 lg:py-32 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <h2 className="max-w-4xl font-display text-[3.2rem] font-normal uppercase leading-[0.9] tracking-[-0.045em] sm:text-[4.2rem] md:text-[5.2rem] lg:text-[6rem]">
              One contribution can become somebody else's opportunity.
            </h2>

            <div className="border-l border-gold pl-6">
              <p className="font-body text-base font-medium leading-7 text-paper/65 md:text-lg md:leading-8">
                Education is a collective effort. Every mentor, volunteer,
                partner, and supporter can help move the vision forward.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default GetInvolved;
