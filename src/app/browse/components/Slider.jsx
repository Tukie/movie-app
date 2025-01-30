"use client";

import IconButton from "@mui/material/IconButton";
import { IconLanguage, IconEye } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import SliderLoader from "./loader/SliderLoader";

function Slider() {
  const [loading, setLoading] = useState(false);
  const [mediaList, setMediaList] = useState([]);

  const fetchMediaList = async () => {
    setLoading(true);

    try {
      const url = "https://imdb236.p.rapidapi.com/imdb/most-popular-movies";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
          "x-rapidapi-host": "imdb236.p.rapidapi.com",
        },
      };

      const response = await fetch(url, options);
      const result = await response.json();

      if (!result) {
        throw new Error("Failed to fetch data");
      }

      result.splice(10);
      setMediaList(result);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  // handle Slider
  let currentSlideIndex = 0;
  const [currentSlide, setCurrentSlide] = useState(null);

  const initSlider = () => {
    const items = mediaList;

    if (items.length === 0) return;

    currentSlideIndex = 0;

    if (items.length === 1) return;

    runSlider();
    setInterval(() => {
      runSlider();
    }, 5000);
  };

  const runSlider = () => {
    if (currentSlideIndex === mediaList.length - 1) {
      currentSlideIndex = 0;
    } else {
      currentSlideIndex++;
    }

    const item = mediaList[currentSlideIndex];
    const image = item?.primaryImage;

    if (!image) return;
    setCurrentSlide(item);
  };

  const [fade, setFade] = useState(false);
  useEffect(() => {
    setFade(true);

    const timeoutId = setTimeout(() => {
      setFade(false);
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, [currentSlide]);

  const handleSlider = (direction) => {};

  useEffect(() => {
    fetchMediaList();
  }, []);

  useEffect(() => {
    if (mediaList) {
      initSlider();
    }
  }, [mediaList]);

  return (
    <div>
      {/* Slider */}
      {loading && <SliderLoader />}

      {!loading && (
        <div className="p-12 rounded-2xl relative flex flex-col justify-between gap-10 overflow-hidden bg-gradient-to-r from-black to-transparent text-white min-h-[31rem] ">
          {/* Background */}
          <div className="absolute top-0 right-0 h-full -z-10 text-white w-full lg:w-2/4 xl:w-[28rem] lg:p-12">
            <Image
              src={
                currentSlide?.primaryImage
                  ? currentSlide?.primaryImage
                  : "/empty_img.jpg"
              }
              width={1200}
              height={1200}
              priority
              className={`w-full h-full object-cover object-top transition-all duration-300 ease-in-out fade-in overflow-hidden rounded-2xl  animate__animated ${
                fade ? "animate__fadeIn" : "animate__fadeOut"
              }`}
              style={{ objectPosition: "50% 35%", scale: 1.1 }}
              alt=""
            />
          </div>
          <div className="absolute top-0 right-0 h-full -z-20 w-full blur-lg opacity-80">
            <Image
              src={
                currentSlide?.primaryImage
                  ? currentSlide?.primaryImage
                  : "/empty_img.jpg"
              }
              width={1200}
              height={1200}
              className={`w-full h-full object-cover transition-all duration-300 ease-in-out fade-in  animate__animated ${
                fade ? "animate__fadeIn" : "animate__fadeOut"
              }`}
              style={{ objectPosition: "50% 35%", scale: 1.1 }}
              alt=""
              priority
            />
          </div>
          {/* Title & Info */}
          <div className="flex flex-col gap-10">
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl font-semibold mb-5">
                {currentSlide?.primaryTitle}
              </h1>
              <p className="text-sm">{currentSlide?.description}</p>
            </div>

            {/* IMDB RATING */}
            <div className="flex gap-3 items-center">
              <div className="flex items-center gap-3">
                <Image
                  src="/imdb.png"
                  width={200}
                  height={200}
                  className="object-cover  w-8 h-8"
                  alt="Picture of the author"
                />
                <span className="text-sm">{currentSlide?.averageRating}</span>
              </div>
              <div className="flex items-center gap-3">
                <IconLanguage size={20} />
                <span className="text-sm">English</span>
              </div>
            </div>

            {/* Rate Year Minute */}
            <div className="flex items-center gap-5">
              <div className="w-32 h-24 rounded-xl flex flex-col justify-center items-center border border-white/30 backdrop-blur">
                <p className="text-sm text-white mb-2">Rate</p>
                <p className="text-2xl">
                  {" "}
                  {currentSlide?.contentRating ?? "-"}
                </p>
              </div>
              <div className="w-32 h-24 rounded-xl flex flex-col justify-center items-center border border-white/30 backdrop-blur">
                <p className="text-sm text-white mb-2">Year</p>
                <p className="text-2xl"> {currentSlide?.startYear}</p>
              </div>
              <div className="w-32 h-24 rounded-xl flex flex-col justify-center items-center border border-white/30 backdrop-blur">
                <p className="text-sm text-white mb-2">Minute</p>
                <p className="text-2xl"> {currentSlide?.runtimeMinutes}</p>
              </div>
            </div>
          </div>

          {/* Watch */}
          <div className="flex gap-2 items-center">
            <Button variant="contained" color="primary">
              <IconEye size={20} />
              Watch
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Slider;
