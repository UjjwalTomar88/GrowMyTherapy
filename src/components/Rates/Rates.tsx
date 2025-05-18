import FadeInSection from "../FadeInSection/FadeInSection";

const Rates = () => {
    return (
        <section id="rates" className="
            w-full h-full flex flex-col items-center text-center bg-primary
            gap-4
            pb-16 md:pb-18 lg:pb-20 xl:pb-24 pt-5 sm:pt-6 lg:pt-7 xl:pt-8 2xl:pt-10 
            px-[4vw]"
        >
            <FadeInSection>
                <h3 className="font-freight-display-pro lg:font-freight-display-pro-light text-[clamp(1.5rem,3vw,2.3rem)] mb-4">
                    Rates and Insurance
                </h3>
            </FadeInSection>
            <FadeInSection delay={200}>
                <div className="flex flex-col gap-4 font-freight-sans-pro-light">
                    <h4 className="text-xl sm:text-2xl">
                        Session Fees
                    </h4>
                    <p className="text-xl">individual session - $200</p>
                    <p className="text-xl">couples session - $240 </p>
                </div>
            </FadeInSection >
            <FadeInSection delay={400}>
                <p className="font-freight-sans-pro-light text-xl">I accept both private pay and insurance. I am in-network with BCBS and Aetna.</p>
                <p className="font-freight-sans-pro-light text-xl">For out-of-network plans, I’ve partnered with Mentaya using this tool to help you check your eligibility for reimbursement for my services.</p>
            </FadeInSection>
        </section>
    )
}
export default Rates;