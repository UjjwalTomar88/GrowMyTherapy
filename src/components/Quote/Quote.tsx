import Image from "next/image";
import water from "@/../public/water-beside-beach.jpg"
import FadeInSection from "../FadeInSection/FadeInSection";

type QuoteProps = {
    text: string;
    author: string;
}

const Quote = ({ text, author }: QuoteProps) => {
    return (
        <section id="quote" className="relative h-full w-full">
            <div className="relative w-full h-[66vh]">
                <Image
                    src={water}
                    alt="..."
                    fill
                    style={{
                        objectFit: "cover",
                        objectPosition: "50% 50%",  // center the focal point
                    }}
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-light opacity-30" />

            <div className="absolute inset-0 flex flex-col items-center justify-start md:justify-center py-20 xl:pt-16 2xl:pt-10 px-6 md:px-[18vw] text-center">
                <FadeInSection delay={300}>
                    <p className="text-black text-2xl sm:text-[27px] mdlg:text-[29px] lg:text-[30px] xl:text-[35px] font-freight-display-pro-light mb-9 sm:mb-[34px] 2xl:mb-9 mt-2 md:mt-0 text-center max-w-5xl leading-snug">
                        “{text}”
                    </p>
                </FadeInSection>
                <FadeInSection delay={600}>
                    <p className="text-dark text-lg mdlg:text-[19px] lg:text-xl font-freight-sans-pro-light">—{author}</p>
                </FadeInSection>
            </div>
        </section>
    )
}

export default Quote;