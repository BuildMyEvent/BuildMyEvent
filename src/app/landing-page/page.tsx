import ShimmerButton from "@/components/magicui/shimmer-button"
import { AnimatedBeamMultipleOutputDemo } from "@/components/Beam"
import { AnimatedList } from ""

export default function LandingPage() {
    return (
        <>
            <section className="flex flex-col md:flex-row w-full mt-[4rem] justify-evenly items-center">
                <div className="flex w-[40%] flex-col gap-7">
                    <h1 className="text-strong-blue  font-medium text-3xl text-center">
                        Con <strong className="text-light-blue">BuildMyEvent</strong> ¡Nunca
                        había sido tan sencillo que las personas creen sus  propios <strong className="text-light-blue">eventos</strong>!
                    </h1>

                    <div className="flex items-center justify-center">
                        <ShimmerButton className="shadow-2xl">
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                ¡Crea el tuyo ya mismo!
                            </span>
                        </ShimmerButton>
                    </div>
                </div>
                <div className="flex animate-float">

                </div>
            </section>

            <section className="mt-[22rem] flex gap-16 flex-col">
                <h2 className="text-3xl text-center font-medium text-strong-blue">
                    Con <strong className="text-light-blue">BuildMyEvent </strong>puedes crear tus diferentes {" "}
                    <strong className="text-light-blue">eventos</strong> fácilmente!
                </h2>
                <AnimatedBeamMultipleOutputDemo />
            </section>
        </>
    )
}
