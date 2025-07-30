"use client";

import Link from "next/link";
import { AuthButtons } from "@/components/auth-buttons";
import { MobileNav } from "@/components/mobile-nav";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <img src="/logo.png" alt="E-Combinator logo" className="h-10 w-auto" />
        <nav className="hidden md:flex items-center space-x-8">
          {[
            "/",
            "/about",
            "/programs",
            "/news",
            "/contact",
            "/help",
            //"/admin/dashboard",
          ].map((href, i) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium ${
                pathname === href
                  ? "text-brand-blue-deep border-b-2 border-brand-blue-deep"
                  : "text-foreground hover:text-brand-blue-deep transition-colors"
              }`}
            >
              {
                [
                  "Home",
                  "About Us",
                  "Programs",
                  "News",
                  "Contact",
                  "Help",
                  //"Admin Dashboard",
                ][i]
              }
            </Link>
          ))}
        </nav>
        <AuthButtons
          currentPage={pathname.replace("/", "") == "apply" ? "apply" : "other"}
        />
        <MobileNav />
      </div>
    </header>
  );
};

export default NavBar;
