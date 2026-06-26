import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Compare } from '@/components/ui/compare';

import { WhatsAppIcon } from '@/components/shared/WhatsAppIcon';

export function Hero() {
  const whatsappNumber = '+918123655765'; // Replace with your WhatsApp number
  const whatsappMessage = encodeURIComponent(
    'Hi! Can you tell me more about how you can make our upcoming fest 10x better?'
  );

  // const scrollToCTA = () => {
  //   const el = document.querySelector('#cta');
  //   if (el) el.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <section
      id="hero"
      className="relative min-h-svh overflow-hidden pt-20 xl:min-h-5/6 xl:py-32"
    >
      <div className="relative mx-auto max-w-265 px-4 pt-22 pb-12 md:px-6 md:pt-30 md:pb-20 xl:grid xl:max-w-[1280px] xl:grid-cols-12 xl:items-center xl:pt-16 xl:pb-0">
        {/* Headline */}
        <div className="mx-auto max-w-3xl text-center xl:col-span-6 xl:mx-0 xl:text-left">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-amber-100/60 px-3 py-1 font-sans text-xs font-medium tracking-wider text-amber-700 uppercase md:text-base lg:text-sm">
            <ShieldCheck className="h-4 w-4" />
            {/*Trusted by 1,700+ delegates at JSSMC*/}
            Trusted by JSS Medical College
          </span>
          <h1 className="font-heading text-4xl leading-tight font-bold text-stone-800 md:text-5xl xl:text-[3.25rem]">
            Your fest,{' '}
            <span className="text-amber-600 italic">fully handled</span>, before
            you even wake up
          </h1>
          <p className="mx-auto mt-6 max-w-76 font-sans text-base leading-relaxed text-stone-500 md:max-w-md md:text-xl xl:mx-0">
            4,500+ delegates. <br />
            80+ events. <br />
            0 spreadsheets.
            <br />
            <br />
            Your phone stays silent — because everything just works.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 xl:items-start">
            {/*<Button
              size="xl"
              className="group w-5/6 rounded-xl bg-linear-to-r from-amber-500 to-amber-700 font-sans text-base text-white shadow-md shadow-amber-500/20 transition-all duration-200 hover:scale-[1.02] hover:from-amber-600 hover:to-amber-700 hover:shadow-lg hover:shadow-amber-500/30 sm:w-auto md:w-96 md:text-xl"
              onClick={scrollToCTA}
            >
              Get This for Your Fest
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>*/}
            <Button
              size="xl"
              className="group w-5/6 rounded-xl border border-amber-300/40 bg-[#25D366] font-sans text-base text-white shadow-md shadow-amber-500/20 transition-all duration-200 hover:scale-[1.02] hover:bg-[#20bd5a] hover:shadow-lg hover:shadow-amber-500/30 sm:w-auto md:w-96 md:text-xl"
              asChild
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
                <WhatsAppIcon />
                {/*<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />*/}
              </a>
            </Button>
            <Button
              size="xl"
              className="group w-5/6 rounded-xl bg-linear-to-r from-amber-500 to-amber-700 font-sans text-base text-white shadow-md shadow-amber-500/20 transition-all duration-200 hover:scale-[1.02] hover:from-amber-600 hover:to-amber-700 hover:shadow-lg hover:shadow-amber-500/30 sm:w-auto md:w-96 md:text-xl"
              asChild
            >
              <a
                href="https://www.tatvam2026.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Live Website
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Before/After Comparison */}
        <div className="mx-auto mt-12 flex max-w-5xl flex-col items-center gap-4 md:mt-16 xl:col-span-5 xl:mt-0">
          {/*<p className="font-sans text-sm font-medium text-stone-400">
            Drag the slider to compare
          </p>*/}
          <Compare
            firstImage="/old-tablet.webp"
            firstImageSrcSet="/old-mobile.webp 960w, /old-tablet.webp 1920w"
            firstImageSizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 900px"
            secondImage="/new-tablet.webp"
            secondImageSrcSet="/new-mobile.webp 960w, /new-tablet.webp 1920w"
            secondImageSizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 900px"
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            firstImageAlt="Before: spreadsheet-based manual registration process"
            secondImageAlt="After: Tatvam 2026 automated fest management platform"
            slideMode="hover"
            showHandlebar
            autoplay
            autoplayDuration={6000}
            className="h-55 w-full max-w-225 rounded-2xl border border-stone-200 bg-stone-100 shadow-xl sm:h-80 md:h-112.5 xl:aspect-video xl:h-auto xl:w-180"
          />
          <div className="flex w-full max-w-225 justify-between px-4 md:px-6">
            <span className="font-sans text-base font-medium text-stone-400 md:text-xl">
              BEFORE
            </span>
            <span className="font-sans text-base font-medium text-amber-700 md:text-xl">
              AFTER
            </span>
          </div>
        </div>

        {/* Quick trust stats */}
        {/*<div className="mx-auto mt-10 flex justify-center md:mt-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 font-sans text-xs font-medium text-amber-700">
            <ShieldCheck className="h-4 w-4" />
            Trusted by JSS Medical College, Mysuru
          </span>
        </div>*/}
      </div>
    </section>
  );
}
