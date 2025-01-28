"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getNavigationItem } from "../utils/useNavigationItem";
import Tooltip from "@mui/material/Tooltip";

export default function TabBar() {
  const pathname = usePathname();
  const navItems = getNavigationItem();

  return (
    <div className="sm:hidden fixed bottom-0 left-0 w-full flex justify-center align-center z-30 mb-5">
      <div className="flex justify-center gap-12 align-center bg-black/50 rounded-full px-10 py-5 backdrop-blur">
        {navItems.map((item) => (
          <Tooltip title={item.name} placement="top" key={item.to}>
            <Link
              href={item.to}
              className={`flex gap-2 flex-col items-center hover:text-white rounded-3xl transition-all duration-150 ${
                pathname !== item.to ? "text-white/30" : "text-white"
              }`}
            >
              <item.icon size={24} />
            </Link>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
