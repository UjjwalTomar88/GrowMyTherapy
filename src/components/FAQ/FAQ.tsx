import FadeInSection from "../FadeInSection/FadeInSection";
import FAQAccordion from "../FAQAccordion/FAQAccordion"

const FAQ = () => {
    return (
        <section id="faq" className="py-10 flex flex-col items-center px-8">
            <FadeInSection>
                <h2 className="font-freight-display-pro md:font-freight-display-pro-light text-2xl xs:text-[clamp(1.875rem,3.7vw,3rem)] mb-2 exs:mb-4 xs:mb-6 text-dark text-center leading-tight">
                    Frequently Asked Questions
                </h2>
            </FadeInSection >
            <FadeInSection>
                <div className="">
                    <FAQAccordion />
                </div>
            </FadeInSection >
        </section>
    )
}

export default FAQ;