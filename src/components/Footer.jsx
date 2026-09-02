import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-ink px-5 py-16 text-paper sm:px-6 sm:py-20 md:px-8 lg:px-10 lg:py-24 xl:px-12 2xl:px-16">
      <div className="mx-auto max-w-[1400px] ">
        {/* TOP FOOTER */}
        <div className="grid gap-12 border-t border-paper/15 pt-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* BRAND */}
          <div>
            <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-gold">
              Onicha Education Foundation
            </p>

            <h2 className="mt-5 max-w-2xl font-display text-4xl font-normal uppercase leading-[0.95] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Lighting the flame, one torch at a time.
            </h2>

            <p className="mt-6 max-w-xl font-body text-sm font-medium leading-7 text-paper/55 sm:text-base">
              Creating opportunities through education, mentorship, skills
              development, and community support for young people.
            </p>
          </div>

          {/* FOOTER NAVIGATION */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:justify-self-end">
            <div>
              <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-gold">
                Explore
              </p>

              <div className="mt-5 grid gap-3 text-sm font-medium text-paper/65 ">
                <Link to="/" className="transition-colors hover:text-paper">
                  Home
                </Link>

                <Link to="/about" className="transition-colors hover:text-gold">
                  About
                </Link>

                <Link
                  to="/programs"
                  className="transition-colors hover:text-gold"
                >
                  Programs
                </Link>

                <Link
                  to="/stories"
                  className="transition-colors hover:text-gold"
                >
                  Stories
                </Link>

                <Link
                  to="/events"
                  className="transition-colors hover:text-gold"
                >
                  Events
                </Link>
              </div>
            </div>

            <div>
              <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-gold">
                Connect
              </p>

              <div className="mt-5 grid gap-3 text-sm font-medium text-paper/65">
                <Link to="/board" className="transition-colors hover:text-gold">
                  Board
                </Link>

                <Link
                  to="/get-involved"
                  className="transition-colors hover:text-gold"
                >
                  Get Involved
                </Link>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-gold">
                Document
              </p>

              <a
                href="https://qnzdfp345asd8nrn.public.blob.vercel-storage.com/oef-impact-magazine.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center rounded-full border border-gold px-5 py-3 text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-gold transition-all duration-300 hover:bg-gold hover:text-ink"
              >
                View Impact Magazine
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="mt-14 flex flex-col gap-4 border-t border-paper/10 pt-6 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-paper/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Onicha Education Foundation</p>

          <p>Education • Opportunity • Community</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
