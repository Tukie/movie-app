"use client";

import SectionTitle from "@/app/components/SectionTitle";
import Marquee from "react-fast-marquee";
import api from "@/app/utils/api";
import WaitListCard from "@/app/components/WaitListCard";
import { useEffect, useState } from "react";
import {
  addToWaitList,
  checkIsInWaitList,
  removeFromWaitList,
} from "@/app/utils/useWaitList";
import { toast } from "react-toastify";
import UpcomingLoader from "./loader/UpcomingLoader";
import NotFound from "@/app/components/NotFound";

export default function UpcomingSection() {
  const [upcoming, setUpcoming] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUpcoming = async () => {
    setLoading(true);

    try {
      const { results } = await api.get(`/titles/x/upcoming`);

      if (!results) {
        throw new Error("Failed to fetch data");
      }

      setUpcoming(results);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUpcoming();
  }, []);

  const handleAddToWaitList = (mediaDetails) => {
    addToWaitList(mediaDetails);
  };

  const handleRemoveFromWaitList = (mediaDetails) => {
    removeFromWaitList(mediaDetails);
  };

  return (
    <section>
      <div className="flex items-center justify-between gap-3 mb-10">
        <SectionTitle title="Upcoming" />
      </div>

      {/* Loading */}
      {loading && <UpcomingLoader />}

      {/* List */}
      {!loading && (
        <div>
          <Marquee speed={30} autoFill pauseOnHover className="">
            <div className="flex gap-10 me-10">
              {upcoming.map((item) => (
                <div key={item.id} className="w-52">
                  <WaitListCard
                    image={item?.primaryImage?.url}
                    onAddToWaitList={() => handleAddToWaitList(item)}
                    onRemoveFromWaitList={() => handleRemoveFromWaitList(item)}
                    inWaitList={checkIsInWaitList(item)}
                    title={item.titleText.text}
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      )}

      {/* Empty */}
      {!loading && !upcoming.length && (
        <div className="w-full mx-auto">
          <NotFound />
        </div>
      )}
    </section>
  );
}
