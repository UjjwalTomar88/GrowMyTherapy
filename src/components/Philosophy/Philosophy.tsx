import FadeInSection from "../FadeInSection/FadeInSection"

const Philosophy = () => {
    return (
        <section id="philosophy" className="min-h-[400px] md:min-h-fit px-[6vw] md:px-[18vw] pt-5 sm:pt-8 lg:pt-10 xl:pt-12 pb-6 flex flex-col items-center text-dark text-center 2k:container 2k:mx-auto">
            <FadeInSection>
                <h2 className="font-freight-display-pro-light text-[clamp(1.875rem,3.7vw,3rem)] mb-4 leading-tight">
                    Therapy can be a space where you invest in yourself—one of the highest forms of self-care.
                </h2>
            </FadeInSection >
            <FadeInSection delay={300}>
                <p className="font-freight-sans-pro-light mt-4 text-md sm:text-lg leading-loose md:leading-8">
                    You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma, grief and loss, self-esteem issues, or challenges with family, parenting, or parental relationships. Whatever the source of your stress, you don&apos;t have to face it alone. Therapy offers you the time and space to work toward wellness and peace.
                </p>
            </FadeInSection >
        </section>
    )
}

export default Philosophy