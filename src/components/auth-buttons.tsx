import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu } from "lucide-react"

interface AuthButtonsProps {
  currentPage: "signup" | "signin" | "other"
}

export function AuthButtons({ currentPage }: AuthButtonsProps) {
  return (
    <div className="flex items-center space-x-4">
      {currentPage === "signup" ? (
        <Link href="/auth/signin">
          <Button variant="outline" className="hidden md:inline-flex border-2 hover:bg-gray-50 bg-transparent">
            Sign In
          </Button>
        </Link>
      ) : (
        <Link href="/auth/signup">
          <Button variant="outline" className="hidden md:inline-flex border-2 hover:bg-gray-50 bg-transparent">
            Sign Up
          </Button>
        </Link>
      )}
      <Button className="hidden md:inline-flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
        Get Started
      </Button>
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="h-5 w-5" />
      </Button>
    </div>
  )
}
