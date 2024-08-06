import SubHeadComponent from "../components/SubHeadComponent"
import Image from "next/image"
import PhoneIcon from "../components/PhoneIcon"

export const metadata = {
    title: "Revive Your Vehicle's Performance with Reliable Power",
    description: "Revive performance with budget-friendly used engines. Expert guidance, quality assured. Drive confidently and unlock your ride's full potential. Get back on the road confidently.",
    alternates: {
        canonical: 'https://usedautoparts.pro/used-engines'
      }
}
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-white mt-24">
            <SubHeadComponent title={"Revive Your Vehicle's Performance: Explore Reliable Used Engines"} subTitle={"Unlock Power and Savings with High-Quality Used Engines for Sale"}
                bgImageUrl={'/used engines.webp?q=50'} selectedMake='Choose Your Car' selectedPart='Choose Part'
            />
            <PhoneIcon />

            <div className="mx-auto w-full max-w-screen-xl flex lg:flex-row md:flex-row flex-col my-10">
                <div className="px-5">
                    <h2 className="font-sans text-[#002E5B] text-[28px] font-extrabold ">Unlock the Heart of Performance: Used Engine Assemblies for Sale</h2>
                    <p className="text-text-primary text-[17px] mt-8">Immerse yourself in the symphony of power with our complete <span className="font-bold italic">Engine Assembly</span> offerings. Beyond being just parts, these assemblies encompass a world of potential. Think manifolds, oil pan, timing belts and covers, and fuel injection or carburetor – but here&apos;s the magic: we guarantee only the long block.</p>
                    <p className="text-text-primary text-[17px] mt-8"><span className="font-bold italic">Manifolds</span>, <span className="font-bold italic">gaskets</span>, <span className="font-bold italic">seals</span>, <span className="font-bold italic">hoses</span>, <span className="font-bold italic">oil pan</span>, <span className="font-bold italic">timing belts</span>, and <span className="font-bold italic">covers</span>, along with <span className="font-bold italic">fuel injection</span> or <span className="font-bold italic">carburetor</span>, aren&apos;t in the guarantee. And let&apos;s talk accessories: items like Turbo, Starters, air compressors, alternator, power steering pumps, optical distributors, wiring harnesses, and electrical water pumps typically aren&apos;t part of the deal. They might not dance under the warranty spotlight.</p>
                    <p className="text-text-primary text-[17px] mt-8">Rest easy; engines in our world are more than metal and gears. They&apos;re meticulously inspected and rigorously tested for peak performance. <span className="font-bold italic">Water damage</span>? We&apos;ve got that covered, ensuring you only embrace the finest.</p>
                    <p className="text-text-primary text-[17px] mt-8">Picture this: an engine ready to roar, yet small fixes might be needed. Think water pumps, distributor caps, spark plugs, wires, and the possibility of a timing chain. As for liability, certain high-wear parts fall outside our sphere.</p>
                    <p className="text-text-primary text-[17px] mt-8">Whether you&apos;re dreaming of <span className="font-bold italic">used car engines for sale</span>, hunting for <span className="font-bold italic">junkyard engines for sale</span>, or on the prowl for <span className="font-bold italic">cheap engines for sale</span>, we&apos;re your compass. Engine sales near me? We&apos;re a heartbeat away. Feel the rhythm of a used car engine near me search, punctuated by the beats of a <span className="font-bold italic">junkyard search engine</span> quest and the dance of engine salvage.</p>
                    <p className="text-text-primary text-[17px] mt-8">For those seeking excellence, let <span className="font-bold italic">Used Auto Parts Pro</span> be your guide. Trust the journey; trust the ride. When it comes to <span className="font-bold italic">used engine Houston</span> can rely on, we&apos;re the destination. Ready to revitalize? Discover the future of performance today!</p>
                </div>

                <Image src="/engine.webp" width={203} height={231} alt="used car engines for sale" className="self-start"/>

                {/* <h2 className="font-sans text-[#002E5B] text-[25px] font-extrabold uppercase mt-10">Top Quality Used Engines</h2>
                            
                <ul className="grid lg:grid-cols-3 grid-cols-2 gap-2 mt-8 ml-4 list-disc list-inside">
                    {
                        ENGINES.map((item, index) => (
                            <li className="text-[#686868] text-[17px]" key={index}>{item}</li>
                        ))
                    }
                </ul> */}
            </div>
        </main>
    )
}

