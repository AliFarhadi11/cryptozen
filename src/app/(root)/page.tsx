import FadeWrapper from "@/components/fx/FadeWrapper";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section
      id="hero"
      className="relative pt-10 md:pt-20 lg:pt-42 2xl:min-h-screen"
    >
      <Container>
        <div className="flex-between relative z-10 flex-col gap-13 md:flex-row">
          <div className="w-full lg:basis-3/5">
            <FadeWrapper triggerOnce>
              <h1 className="text-white-500 leading-slug text-center text-[32px] font-bold md:text-left md:text-4xl lg:text-[64px]">
                Master Crypto, <br /> Achieve Zen
              </h1>
            </FadeWrapper>
            <FadeWrapper triggerOnce delay={1e3}>
              <p className="mt-6 text-center text-2xl leading-8 text-gray-100 md:text-left">
                Take control of your crypto future with proven insights and
                sustainable strategies.
              </p>
            </FadeWrapper>
            <FadeWrapper triggerOnce delay={1e3} direction="left">
              <div className="mt-10 flex flex-col flex-wrap items-center gap-6 md:flex-row">
                <Link
                  href="/vip-club"
                  title="VIP Club"
                  className="gradient-border hero-cta group"
                >
                  <span className="bg-primary-gradient relative z-10 bg-clip-text font-medium text-transparent group-hover:bg-transparent group-hover:text-white">
                    Free and VIP access
                  </span>
                </Link>

                <p className="text-warn flex-1 text-lg font-bold">
                  Time-Limited Discount! 🙂
                </p>
              </div>
            </FadeWrapper>
          </div>
          <FadeWrapper className="backdrop-blur-xl">
            <div className="hero-card relative z-10 rounded-[20px] bg-white/5 px-5 py-6 backdrop-blur-[20px]">
              {/* DOT */}
              <div className="bg-primary absolute -top-5 right-0 size-3 animate-pulse rounded-full"></div>
              {/* CONTNET */}
              <div className="flex-center gap-1.5">
                <div className="bg-primary-gradient size-14 overflow-hidden rounded-full p-0.25">
                  <div className="flex-center size-full rounded-full bg-[#121212]">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.17285 15H9.17285C9.17285 16.08 10.5429 17 12.1729 17C13.8029 17 15.1729 16.08 15.1729 15C15.1729 13.9 14.1329 13.5 11.9329 12.97C9.81285 12.44 7.17285 11.78 7.17285 9C7.17285 7.21 8.64285 5.69 10.6729 5.18V3H13.6729V5.18C15.7029 5.69 17.1729 7.21 17.1729 9H15.1729C15.1729 7.92 13.8029 7 12.1729 7C10.5429 7 9.17285 7.92 9.17285 9C9.17285 10.1 10.2129 10.5 12.4129 11.03C14.5329 11.56 17.1729 12.22 17.1729 15C17.1729 16.79 15.7029 18.31 13.6729 18.82V21H10.6729V18.82C8.64285 18.31 7.17285 16.79 7.17285 15Z"
                        fill="#0B7999"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-white-500 flex-1 text-xs leading-6">
                  Level Up Your Crypto Game with CryptoZen! <br />
                  <span className="text-warn text-sm">
                    $10M+ in Profits Generated
                  </span>
                </p>
              </div>
              <Link
                href="/vip-club"
                className="bg-white-500 flex-center relative z-10 mt-10 w-full rounded-full py-3 text-lg font-bold text-black transition duration-300 hover:scale-95"
              >
                Join to VIP Club
              </Link>
            </div>
          </FadeWrapper>
        </div>
      </Container>

      <div className="pointer-events-none absolute top-2/3 z-0 w-full sm:top-1/2 md:top-10 lg:top-0 2xl:-top-30 2xl:h-full">
        {/* SHADOWS */}
        <div className="pointer-events-none absolute bottom-0 left-0 z-2 hidden h-1/3 w-2/3 bg-gradient-to-r from-black to-transparent 2xl:block"></div>
        <div className="pointer-events-none absolute right-0 bottom-0 z-2 hidden h-1/4 w-2/3 bg-gradient-to-l from-black to-transparent 2xl:block"></div>
        <Image
          src="/images/hero-bg.svg"
          alt="bg-line"
          fill
          className="!h-auto 2xl:!h-full"
        />
      </div>

      {/* BG ELEMENTS */}
      <div className="absolute top-0 z-0 h-100 w-170 rounded-full bg-gradient-to-r from-[#00FF99]/50 to-[#0077CC]/50 blur-[200px]"></div>
    </section>
  );
}
