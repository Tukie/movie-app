import {
    IconCompass,
    IconHeart,
    IconClockHour10,
    IconSearch,
  } from "@tabler/icons-react";

export const getNavigationItem = () => {
    const navItems = [
        {
          to: "/browse",
          name: "Browse",
          icon: IconCompass,
        },
        {
          to: "/favorites",
          name: "Favorites",
          icon: IconHeart,
        },
        {
          to: "/waiting",
          name: "Waiting",
          icon: IconClockHour10,
        },
        {
          to: "/search",
          name: "Search",
          icon: IconSearch,
        },
      ];

      return navItems;
};