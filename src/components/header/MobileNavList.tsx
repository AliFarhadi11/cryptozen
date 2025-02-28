import { navItems } from "@/constants";
import { useClickAway } from "@uidotdev/usehooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";

const MobileNavList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const ref = useClickAway(() => setIsOpen(false));

  return (
    <div className="relative block md:hidden">
      <button
        type="button"
        className="cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <FaBars className="text-white" size={28} />
      </button>
      {/* @ts-expect-error "ignore" */}
      <div ref={ref} className={`${isOpen && "open"} mobile-nav`}>
        <ul className="flex-center size-full flex-col gap-5">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                title={item.label}
                className={`${pathname === item.href ? "bg-primary-gradient bg-clip-text text-transparent" : "text-white"} hover:bg-primary-gradient hover:text-transparent} transition-all hover:bg-clip-text`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNavList;
