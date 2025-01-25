import { IconLanguage, IconEye, IconHeart } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

function Slider() {
  return (
    <div>
      <div className="p-8 rounded-xl relative flex flex-col gap-10 overflow-hidden bg-gradient-to-r from-black to-transparent text-white">
        {/* Background */}
        <div className="absolute top-0 right-0 w-full h-full -z-10">
          <Image
            src={
              "https://www.matichon.co.th/wp-content/uploads/2016/02/deadpool-gallery-03-gallery-image.jpg"
            }
            width={500}
            height={500}
            className="object-cover object-top w-full h-full"
            alt="Picture of the author"
          />
        </div>

        {/* Title & Info */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold">Dead Pool</h1>
          <div className="flex gap-3 items-center">
            <div className="flex items-center gap-3">
              <Image
                src="/imdb.png"
                width={200}
                height={200}
                className="object-cover w-8 h-8"
                alt="Picture of the author"
              />
              <span className="text-sm">8.5</span>
            </div>
            <div className="flex items-center gap-3">
              <IconLanguage size={20} />
              <span className="text-sm">English</span>
            </div>
          </div>
        </div>

        {/* Watch */}
        <div className="flex gap-2 items-center">
          <button className="bg-[var(--primary)] text-white py-2 px-5 rounded-full flex items-center gap-2">
            <IconEye size={20} />
            Watch
          </button>
          <button className="py-2 px-5 rounded-full flex items-center gap-2">
            <IconHeart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
