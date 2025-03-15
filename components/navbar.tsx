"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Home, Book, Users, Sword, HandIcon as PrayingHands } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const routes = [
  { href: "/", label: "الرئيسية", icon: Home },
  { href: "/pillars", label: "الأركان", icon: Book },
  { href: "/companions", label: "الصحابة", icon: Users },
  { href: "/battles", label: "الغزوات", icon: Sword },
  { href: "/prayer", label: "الصلاة", icon: PrayingHands },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent",
      )}
    >
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-8 h-8 overflow-hidden">
            <div className="absolute inset-0 bg-primary rounded-full opacity-20 rotate"></div>
            <div
              className="absolute inset-1 bg-primary rounded-full opacity-40 counter-rotate"
              style={{ animationDuration: "15s" }}
            ></div>
            <div
              className="absolute inset-2 bg-primary rounded-full opacity-60 rotate"
              style={{ animationDuration: "20s" }}
            ></div>
            <div className="absolute inset-3 bg-primary rounded-full"></div>
          </div>
          <span className="font-bold text-xl mr-4">بوابة الإسلام</span>
        </Link>

        <nav className="hidden md:flex items-center">
          {routes.map((route, index) => {
            const Icon = route.icon
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary mr-8", // Increased margin-right from mr-4 to mr-8
                  pathname === route.href ? "text-primary" : "text-muted-foreground",
                )}
              >
                <Icon className="w-4 h-4 ml-1" />
                <span>{route.label}</span>
              </Link>
            )
          })}
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">فتح القائمة</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              {routes.map((route) => {
                const Icon = route.icon
                return (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary p-2 rounded-md",
                      pathname === route.href ? "bg-secondary text-primary" : "text-muted-foreground",
                    )}
                  >
                    <Icon className="w-5 h-5 ml-2" />
                    <span>{route.label}</span>
                  </Link>
                )
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

