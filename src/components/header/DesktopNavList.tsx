import { navItems } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DesktopNavList = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex items-center justify-center hidden gap-10 font-medium">
      {navItems.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            title={item.label}
            className={`${pathname === item.href ? "bg-primary-gradient bg-clip-text text-transparent" : "text-white"} hover:bg-primary-gradient transition-all hover:bg-clip-text hover:text-transparent`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNavList;
