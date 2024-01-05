"use client";

import Link from "next/link"
import Image from "next/image";
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
    weight: "600", 
    subsets: ["latin"]
})

const Sidebar = () => {
    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative h-8 w-8 mr-4">
                        <Image fill alt="Logo" src="/logo.png" />
                    </div>
                    <h1 className="text=2xl font-bold">Nitin Dabi</h1>
                </Link>

            </div>

        </div>
    );
}

export default Sidebar;
