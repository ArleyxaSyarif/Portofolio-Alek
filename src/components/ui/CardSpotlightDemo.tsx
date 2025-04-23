import { CardSpotlight } from "@/components/ui/card-spotlight";
import Image from "next/image";

export function CardSpotlightDemo() {
  return (
    <CardSpotlight className="h-96  w-96">

      <Image
        src="/img/project1.png"
        alt="logo"
        width={900}
        height={200}/>

      <div className="p-4 relative ">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">
          Authentication steps
        </p>
        <div className="text-neutral-200 mt-4 relative z-20">
          Follow these steps to secure your account:
          <ul className="list-none mt-2">
        
          </ul>
        </div>
        <p className="text-neutral-300 mt-4 relative z-20 text-sm">
          Ensuring your account is properly secured helps protect your personal
          information and data.
        </p>
      </div>
    </CardSpotlight>
  );
}



