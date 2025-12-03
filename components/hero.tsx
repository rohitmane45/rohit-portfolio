import Image from "next/image";
import { FC } from "react";

export function Hero() {
  return (
    <section className="relative flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        {/* circular wrapper */}
        <div className="relative h-[260px] w-[260px] rounded-full overflow-hidden bg-black">
          <img
            src="/your-image.jpg"
            alt="profile"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}