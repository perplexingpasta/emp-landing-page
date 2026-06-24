import { ScrollReveal } from "@/components/shared/ScrollReveal";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  college: string;
  city: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Your Tatvam website was really amazing. I reached out because I saw how well organized and seamlessly integrated everything was. But i was so so fascinated by your website. You're incredibly talented to have built something like this built on your own.",
    name: "Arjun Menon",
    role: "Student Council President",
    college: "Kasturba Medical College",
    city: "Manipal, Karnataka",
  },
  {
    quote:
      "I was honestly skeptical. We'd always done everything manually. But by Day 1, every single delegate had their ID, their kits, their schedule — and I didn't touch a spreadsheet once. My HOD personally called to congratulate the committee.",
    name: "Dr. Ananya Sharma",
    role: "Cultural Secretary",
    college: "Kasturba Medical College",
    city: "Manipal, Karnataka",
  },
  {
    quote:
      "The WhatsApp auto-routing alone saved us. We used to manually add everyone. And the live schedule meant we could make last-minute changes and everyone saw it instantly. No running around with printed sheets.",
    name: "Priya Venkatesh",
    role: "Technical Head",
    college: "Madras Medical College",
    city: "Chennai, Tamil Nadu",
  },
  // {
  //   quote:
  //     "Best decision we made. Our team was genuinely able to attend and enjoy the fest instead of sitting behind laptops verifying payments. The analytics dashboard made our post-fest report to the Dean take like 15 minutes.",
  //   name: "Dr. Rahul Deshmukh",
  //   role: "Joint Secretary",
  //   college: "AIIMS",
  //   city: "Nagpur, Maharashtra",
  // },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-16 px-2 md:py-20">
      <div className="mx-auto max-w-265 px-5 md:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full border border-violet-200 bg-violet-50 px-3 py-1 font-sans text-xs font-medium tracking-wider text-violet-600 uppercase">
            FROM FEST ORGANISERS
          </span>
          <h2 className="font-heading text-3xl font-bold text-stone-900 md:text-4xl">
            What people are{" "}
            <span className="italic text-amber-600">saying</span>
          </h2>
        </div>

        {/* Quote cards grid */}
        <ScrollReveal>
          <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col rounded-2xl border border-stone-200/80 bg-white p-5 shadow-sm transition-colors hover:border-amber-200/50 md:p-6"
                style={{
                  transition:
                    "border-color 250ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                {/* Quote */}
                <blockquote className="flex-1 font-sans text-sm leading-relaxed italic text-stone-600 md:text-base">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div className="mt-4 flex items-center gap-3 border-t border-stone-100 pt-4">
                  {/* Avatar placeholder */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                    <span className="font-heading text-sm font-bold">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-stone-800">
                      {t.name}
                    </p>
                    <p className="font-sans text-xs text-stone-500">
                      {t.role}, {t.college}, {t.city}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Subtle note */}
        <p className="mt-6 text-center font-sans text-xs text-stone-400">
          Real feedback from fest organisers who used FestFlow.
        </p>
      </div>
    </section>
  );
}
