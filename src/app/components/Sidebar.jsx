"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getNavigationItem } from "../utils/useNavigationItem";

export default function Sidebar() {
  const pathname = usePathname();
  const navItems = getNavigationItem();

  return (
    <>
    {/* Sidebar */}
      <div className="w-30 py-10 min-h-dvh">
        <ul className="flex flex-col gap-12 w-30 fixed justify-center align-center">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                href={item.to}
                className={`flex flex-col gap-2 items-center hover:text-white rounded-3xl transition-all duration-150 ${
                  pathname !== item.to ? "text-white/30" : "text-white"
                }`}
              >
                <item.icon />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
