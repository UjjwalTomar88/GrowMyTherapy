import FadeInSection from "../FadeInSection/FadeInSection";
import VideoContainer from "../VideoContainer/VideoContainer";

const Hero = () => {
    return (
        <section
            id="hero"
            className="w-full min-h-screen md:min-h-[88vh] grid grid-rows-[1fr] grid-cols-1 place-items-center pb-[4vw]"
        >
            <div className="row-start-1 col-start-1 w-full h-full px-4 xs:px-[4vw]">
                <VideoContainer />
            </div>

            <div
                className="
            row-start-1 col-start-1
            flex flex-col items-center justify-start md:justify-center
            w-full 2k:container 2k:mx-auto
            py-12 md:py-12
            z-10 text-white font-freight-display-pro text-center
            px-4 xs2:px-6 sm:px-8 md:px-[4vw] h-full
            gap-2
            ">
                <div className="pt-20 xs2:pt-20 xs2:-mt-2 sm:mt-2 md:pt-0 md:-mt-0 mdlg:-mt-4 lg:-mt-6 2xl:-mt-24"></div>
                <div className="pt-2 xs:pt-2 sm:pt-0">
                    <h1 className="flex flex-col items-center justify-start gap-[clamp(1.5rem,2vw,3rem)] sm:gap-[clamp(1.5rem,2vw,3rem)] xl:gap-[clamp(0rem,0.1vw,1.2rem)] text-[clamp(2.375rem,5vw,3.75rem)] sm:text-[clamp(2.5rem,4vw,4.5rem)] md:text-[43px] mdlg:text-[49px] lg:text-[53px] xl:text-[62px] 2xl:text-[69px]">
                        <strong className="px-4 sm:px-8 md:px-16">Psychological Care for </strong>
                        <strong className="px-4 sm:px-8 md:px-16">Change, Insight, and Well-Being</strong>
                    </h1>
                    <h2 className="min-h-16 mt-[clamp(1.5rem,2vw,3rem)] sm:mt-[clamp(1.5rem,2vw,3rem)] mb-[clamp(0.25rem,0.42vw,0.5rem)] text-[clamp(1.3rem,1.2vw,1.2rem)] sm:text-[clamp(1.3rem,1.5vw,1.8rem)] md:text-[23px] px-4 sm:px-8 md:px-16">
                        Offering individual psychotherapy for adults via telehealth in Michigan and <u>most U.S. states </u> through PSYPACT participation
                    </h2>
                </div>
                <div className="px-4 sm:px-8 md:px-16 text-md md:text-[16px]">
                    <FadeInSection>
                        <button
                            className="mt-[clamp(0.75rem,2vw,1.5rem)] sm:mt-[clamp(1rem,3vw,3rem)] lg:mt-4 xl:mt-0 xl:mb-3 bg-primary hover:bg-[#8EAAAA] shadow-md tracking-widest rounded-full hover:bg-opacity-85 transition-colors duration-100 font-freight-sans-pro px-4"
                            style={{ clipPath: "ellipse(50% 50% at 50% 50%)" }}
                        >
                            <p className="p-[2.7vw] lg:px-[1.6vw] text-center break-words max-w-[70vw] sm:max-w-none">
                                SCHEDULE A CONSULTATION
                            </p>
                        </button>
                    </FadeInSection>
                </div>
            </div>
        </section>
    );
};

export default Hero;
