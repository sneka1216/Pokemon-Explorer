"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import pikachuLogo from "@/assests/Pikachu.png";

export default function BackHomeButton() {
  const router = useRouter();

  return (
    <div className="w-full mt-8 mb-6 px-4">
      <div
        className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-2 cursor-pointer"
        onClick={() => router.back()}
      >
        <Image src={pikachuLogo} alt="Pikachu Logo" height={40} width={40} />
        <p className="text-xl md:text-lg mt-2 font-semibold text-amber-500">
          Back to Home
        </p>
      </div>
    </div>
  );
}
