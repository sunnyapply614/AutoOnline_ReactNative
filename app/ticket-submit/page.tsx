import PhoneIcon from '../components/PhoneIcon'
import Link from 'next/link'
import {CUSTOM_PHONE_ADDR, CALL_TO_CUSTOMER } from '../config'

export const metadata = {
    title: 'Submit a Ticket - Streamline Your Support Experience Today',
    description: "Submit a ticket for quick and effective assistance. Our dedicated support team is ready to address your inquiries, resolve issues, and provide timely solutions.",
    alternates: {
        canonical: 'https://usedautoparts.pro/ticket-submit'
      }
}

export default function FAQ() {
    return (
        <main className="flex flex-col min-h-screen bg-white mt-24">
            <section className="bg-center bg-no-repeat bg-gray-300 bg-blend-multiply" style={{ backgroundImage: "url('/faq-logo.webp ')" }}>
                <div className="mx-auto max-w-screen-xl py-24 lg:py-32 px-12 lg:px-2 md:px-2">
                    <h1 className="mb-4 text-6xl font-extrabold text-white lg:w-1/2 md:w-1/2 w-full">Streamline Your Support: Submit a Ticket for Quick and Effective Assistance</h1>
                    <h2 className="mb-4 text-lg font-normal text-gray-300">Fast-track Solutions with Our Ticket Submission Process for Prompt Support</h2>
                </div>
            </section>
            <PhoneIcon />

            <div className='py-10 w-full bg-cover bg-no-repeat flex flex-col items-center max-w-screen-xl mx-auto'>
                {/* <span className=' font-sans text-[13px] text-[#777777] text-center'>PRIVACY POLICY</span> */}
                <h3 className="font-sans font-bold text-[36px] mt-5 text-[#002E5B] text-center">Exceptional Customer Service: Your Satisfaction, Our Priority</h3>
                <div className='w-[50px] h-[4.5px] bg-primary mt-5 mb-10'></div>

                
           
            </div>
        </main >
    )
}
