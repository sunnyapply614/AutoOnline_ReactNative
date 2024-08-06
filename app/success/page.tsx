import PhoneIcon from "../components/PhoneIcon";
import { CALL_TO, PHONE_NUMBER } from "../config";

import Link from "next/link";
const Success = function () {
    return (
        <main className="flex flex-col bg-white mt-24">
            <PhoneIcon />
            <section className="bg-center bg-no-repeat bg-gray-300 bg-blend-multiply py-24 " style={{ backgroundImage: "url('/about-bg.webp')" }}>
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl text-center">Success</h1>
            </section>



        </main>
    )
}

export default Success;
