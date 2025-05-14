import Link from "next/link";
import FadeInSection from "../FadeInSection/FadeInSection";

const Footer = () => {
    return (
        <footer id="footer" className="pb-3 xs:pb-8 xsm:pb-9 md:pb-4 2xl:pb-5 px-[4vw] flex flex-col items-center justify-center text-center gap-0 font-freight-sans-pro-light">
            <div className="flex flex-col items-center justify-center gap-8 2xl:gap-10 py-5 sm:py-7 md:px-[25vw] xl:px-[24vw] md:py-8 mdlg:pt-9 mdlg:pb-5 xl:pt-12 xl:pb-4 2xl:pb-5">
                <FadeInSection>
                    <h3 className="font-freight-display-pro-light leading-snug text-[25px] sm:text-[26px] md:text-[27px] mdlg:text-[29px] lg:text-[31px] xl:text-4xl 2xl:mt-2">Serena Blake, Psy.D., Clinical Psychologist</h3>
                </FadeInSection>
                <div className="flex flex-col gap-4 mdlg:gap-5 lg:gap-6">
                    <FadeInSection delay={100}>
                        <div className="text-lg 2xl:text-xl flex flex-col gap-2 px-2">
                            <Link href={"mailto:serena@blakepsychology.com"} className="text-black underline underline-offset-[5px] decoration-1">
                                serena@blakepsychology.com
                            </Link>
                            <p>
                                <span>Phone: </span>
                                <Link href={"tel:+13235550192"} className="text-black underline underline-offset-[5px] decoration-1">
                                    (323) 555-0192
                                </Link>
                                <span> Fax: (323) 555-0192</span>
                            </p>
                        </div>
                    </FadeInSection>
                    <FadeInSection delay={200}>
                        <p className="text-lg 2xl:text-xl">
                            1287 Maplewood Drive, Los Angeles, CA 90026
                        </p>
                    </FadeInSection>
                    <ul className="flex flex-row items-center justify-center gap-2 text-md text-center 2xl:-mt-2">
                        <li>
                            <FadeInSection delay={300}>
                                <Link href={"/"} className="text-black underline underline-offset-[5px] decoration-1">Home</Link>
                            </FadeInSection>
                        </li>
                        <li>
                            <FadeInSection delay={400}>
                                <Link href={"/privacy-policy"} className="text-black underline underline-offset-[5px] decoration-1">Privacy Policy</Link>
                            </FadeInSection>
                        </li>
                        <li>
                            <FadeInSection delay={500}>
                                <Link href={"/good-faith-estimate"} className="text-black underline underline-offset-[5px] decoration-1">Good Faith Estimate</Link>
                            </FadeInSection>
                        </li>
                    </ul>
                </div>
            </div>


            <Link href={"/client-portal"} className="text-black underline underline-offset-[5px] decoration-1 text-lg 2xl:text-[19px] mt-10 mb-10 md:mt-0 md:mb-8 mdlg:mt-1 lg:mt-2 lg:mb-10 xl:mt-10 xl:mb-12 2xl:mt-[72px] 2xl:mb-16">
                <FadeInSection delay={600}>
                    <p>
                        Client Portal
                    </p>
                </FadeInSection >
            </Link>


            <div className="text-lg lg:text-xl px-2">
                <FadeInSection delay={700}>
                    <p>
                        © 2025 Serena Blake Psy.D. Clinical Psychology, PLLC. All rights reserved.
                    </p>
                </FadeInSection>
            </div>
        </footer>
    )
}

export default Footer;