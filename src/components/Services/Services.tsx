import anxiousPic from "@/../public/service1.jpg"
import relationship from "@/../public/service2.jpg"
import trauma from "@/../public/service3.jpg"
import ServiceCard from "../ServiceCard/ServiceCard";
import FadeInSection from "../FadeInSection/FadeInSection";

const Services = () => {

    return (
        <section id="services" className="
            py-6 lg:py-7 xl:py-10 2xl:py-12 flex flex-col items-center text-center text-dark w-full px-4 xsm:px-[4vw] "
        >
            <FadeInSection>
                <p className="font-freight-display-pro-light text-[clamp(1.875rem,3.7vw,3rem)] mdlg:text-[clamp(1.875rem,4vw,2.8rem)] mb-[76px] xs:mb-20 xsm:mb-[72px] md:mb-[76px] mt-0.5">
                    Areas of Focus
                </p>
            </FadeInSection >
            <FadeInSection className="w-full">
                <ul
                    className="flex flex-col gap-16 xs:gap-[74px]
                xsm:grid xsm:grid-cols-2 xsm:grid-rows-2 xsm:gap-14 xsm:-mb-8
                md:flex md:flex-row md:flex-wrap md:gap-16 md:mb-0 md:justify-between
                items-start justify-center w-full text-center "
                >
                    <li className="flex items-center">
                        <FadeInSection>
                            {/* Original source: https://www.freepik.com/free-photo/medium-shot-anxious-man-indoors_32407652.htm */}
                            <ServiceCard
                                imgSrc={anxiousPic}
                                imgAlt=""
                                headingText="Anxiety & Stress Management"
                                paraText="Life can often feel overwhelming—mentally, emotionally, and physically. Through personalized strategies like mindfulness, cognitive reframing, and grounding exercises, we help you manage anxious thoughts and reduce stress so you can regain control and feel more at ease."
                            />
                        </FadeInSection>
                    </li>
                    <li className="flex items-center">
                        <FadeInSection delay={200}>
                            {/* Original source: https://www.freepik.com/free-photo/young-couple-psychologist-looking-each-other-with-hate_3938477.htm */}
                            <ServiceCard
                                imgSrc={relationship}
                                imgAlt=""
                                headingText="Relationship Counseling"
                                paraText="Healthy relationships take work—but they shouldn’t feel impossible. Whether you&apos;re navigating conflict, recovering from betrayal, or simply feeling distant, we offer guidance to improve communication, restore trust, and rebuild meaningful connection between partners, families, or friends."
                            />
                        </FadeInSection>
                    </li>
                    <li className="flex items-center">
                        <FadeInSection delay={400}>
                            {/* Original source: https://www.freepik.com/free-photo/stressed-teenager-sitting-sofa_19085993.htm */}
                            <ServiceCard
                                imgSrc={trauma}
                                imgAlt=""
                                headingText="Trauma Recovery"
                                paraText="Trauma can leave lasting effects on how we think, feel, and relate to others. Our trauma-informed approach gently helps you process difficult experiences at your pace. We work to rebuild safety, resilience, and emotional strength—so you can move forward with confidence."
                            />
                        </FadeInSection>
                    </li>
                </ul>
            </FadeInSection >
        </section>
    )
}

export default Services;