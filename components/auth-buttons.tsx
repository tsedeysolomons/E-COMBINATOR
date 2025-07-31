import { Button } from "@/components/ui/button";
import { betterFetch } from "@better-fetch/fetch";
import { Session } from "better-auth";

import Link from "next/link";

interface AuthButtonsProps {
  currentPage: "signup" | "signin" | "apply" | "other";
}

export function AuthButtons({ currentPage }: AuthButtonsProps) {
  return (
    <div className="flex items-center space-x-4">
      {currentPage !== "apply" &&
        (currentPage === "signin" ? (
          <Link href="/auth/signup">
            <Button
              variant="outline"
              className="hidden md:inline-flex border-2 hover:bg-muted bg-transparent"
            >
              Sign Up
            </Button>
          </Link>
        ) : (
          <Link href="/auth/signin">
            <Button
              variant="outline"
              className="hidden md:inline-flex border-2 hover:bg-muted bg-transparent"
            >
              Sign In
            </Button>
          </Link>
        ))}
      <Button
        className="hidden md:inline-flex bg-gradient-to-r from-brand-blue-deep to-brand-orange hover:from-brand-blue-deep/90 hover:to-brand-orange/90"
        asChild
      >
        <Link href="/apply">Get Started</Link>
      </Button>
    </div>
  );
}
