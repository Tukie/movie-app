import SectionTitle from "@/app/components/SectionTitle";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import api from "@/app/utils/api";
import { Alert, AlertTitle } from "@mui/material";

export default async function UpcomingSection() {
  const { results } = await api.get("/titles/x/upcoming");

  if (!results) {
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Failed to fetch data
      </Alert>
    );
  }

  return (
    <section>
      <div className="flex items-center justify-between gap-3 mb-10">
        <SectionTitle title="Upcoming" />
      </div>

      {/* List */}
      <div>
        <Marquee speed={30} autoFill pauseOnHover className="">
          <div className="flex gap-10 me-10">
            {results.map((item, index) => (
              <div key={index} className="w-52">
                <div className="h-52 mb-3 overflow-hidden rounded-xl w-full">
                  <Image
                    src={
                      item?.primaryImage?.url
                        ? item?.primaryImage?.url
                        : "/empty_img.jpg"
                    }
                    width={800}
                    height={1200}
                    className="object-cover object-top w-full h-full poster-shadow"
                    alt=""
                  />
                </div>
                <div>
                  <p className=" font-semibold text-white mb-2">
                    {item?.titleText?.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
