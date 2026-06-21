import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function Prestige() {
  return (
    <section id="prestige" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-265 px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            {/*<p className="font-sans text-xs font-medium tracking-wider text-amber-600 uppercase">
              FIRST IMPRESSIONS
            </p>*/}
            <h2 className="mt-4 font-heading text-3xl font-bold text-stone-900 md:text-4xl">
              First impression happens{" "}
              <span className="italic">
                <span className="text-amber-600">before</span> anyone arrives
              </span>
              .
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mx-auto mt-6 md:max-w-xl font-sans text-base leading-relaxed text-stone-500 max-w-88 md:text-lg">
              When a delegate from another college opens your registration link,
              they make a judgment in seconds. A fast, beautifully designed
              website tells them this fest is serious. It reflects on you, your
              committee, and your institution.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.15}>
          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-lg md:mt-12">
            <div className="flex items-center gap-2 border-b border-stone-100 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-amber-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 font-sans text-xs text-stone-400">
                Tatvam 2026 — JSS Medical College, Mysuru
              </span>
            </div>
            <img
              src="/new.webp"
              srcSet="/new-mobile.webp 600w, /new-tablet.webp 900w, /new.webp 1200w"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 900px, 1200px"
              alt="Tatvam 2026 fest website — a fast, branded registration platform built with FestFlow"
              className="w-full"
              width={1200}
              height={750}
              loading="lazy"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-8 text-center font-heading text-lg font-semibold text-stone-700 md:text-2xl">
            That's what delegates see. <br />
            That's what they remember.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
