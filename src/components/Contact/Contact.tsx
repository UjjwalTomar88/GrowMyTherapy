'use client'

import ContactForm from "../ContactForm/ContactForm";
import FadeInSection from "../FadeInSection/FadeInSection";

const Contact = () => {
    return (
        <section
            id="contact"
            className="flex flex-col items-center text-dark w-full
            pb-14 px-[6vw] md:px-[4vw]"
        >
        
            <FadeInSection delay={300} className="w-full">
                <div className="flex flex-col items-center lg:flex-row lg:items-start w-full justify-center gap-8 md:gap-12 lg:pt-8">
                    <FadeInSection delay={400}>
                        <ContactForm />
                    </FadeInSection>
                </div>
            </FadeInSection >

        </section >
    );
};

export default Contact;