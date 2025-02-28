"use client";

import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
import DesktopNavList from "./DesktopNavList";
import { FaUser } from "react-icons/fa6";
import MobileNavList from "./MobileNavList";

const Header = () => {
  return (
    <header className="w-full py-6">
      {/* Container | Box Width */}
      <Container>
        <nav className="flex-between">
          {/* Mobile Menu Opener */}
          <MobileNavList />

          {/* LOGO */}
          <Link href="/" title="Cryptozen">
            <Image
              src={"/images/text-logo.png"}
              alt="logo"
              width={170}
              height={50}
              className="hidden md:block"
            />
            <Image
              src={"/images/logo.png"}
              alt="logo"
              width={61}
              height={61}
              className="md:hidden"
            />
          </Link>

          {/* NAV LIST */}
          <DesktopNavList />

          {/* LOGIN BUTTON - DESKTOP */}
          <button
            type="button"
            className="hidden cursor-pointer rounded-full bg-gradient-to-b from-[#00FF99] to-[#0077CC] px-8 py-3 text-white shadow-[0px_10px_50px_0px_#00FF994D] transition hover:shadow-none md:block"
          >
            Log in / Join
          </button>
          {/* LOGIN BUTTON - MOBILE */}
          <button
            type="button"
            className="bg-primary-gradient flex size-7 cursor-pointer items-center justify-center rounded-full md:hidden"
          >
            <FaUser className="text-white" />
          </button>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
