import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import FadeInSection from "../FadeInSection/FadeInSection";

type ServiceCardProps = {
    imgSrc: string | StaticImport;
    imgAlt: string;
    headingText: string;
    paraText: string;
}

const ServiceCard = ({ imgSrc, imgAlt, headingText, paraText }: ServiceCardProps) => {
    return (
        <div className="flex flex-col items-center gap-4 p-4 sm:p-6 md:p-[1.68vw] w-full md:w-[24.7vw]">
            <FadeInSection>
                <div className="relative h-[81vw] w-[81vw] xsm:h-[36vw] xsm:w-[36vw] md:h-[22.5vw] md:w-[22.5vw] mdlg:h-[23.4vw] mdlg:w-[23.4vw] xl:h-[24.7vw] xl:w-[24.7vw]">

                    <Image
                        src={imgSrc}
                        alt={imgAlt}
                        className="w-full h-full rounded-full object-cover object-center"
                    />

                </div>
            </FadeInSection>
            <FadeInSection delay={50}>
                <h2 className="font-freight-display-pro md:font-freight-display-pro-light text-dark text-xl md:text-[22px] lg:text-3xl xl:text-3xl mb-2 md:mb-0">
                    {headingText}
                </h2>
            </FadeInSection >
            <FadeInSection delay={100}>
                <p className="font-freight-sans-pro-light leading-loose">
                    {paraText}
                </p>
            </FadeInSection >
        </div>
    )
}

export default ServiceCard;