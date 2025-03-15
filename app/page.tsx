"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Book, Users, Sword, HandIcon as PrayingHands } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-36 lg:pt-40 overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center space-y-6 relative z-10"
          >
            <Badge variant="outline" className="px-3 py-1 bg-secondary text-foreground">
              تعليم إسلامي
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">مرحباً بكم في بوابة التعليم الإسلامي</h1>
            <p className="max-w-[700px] text-lg md:text-xl text-muted-foreground">
              استكشف جمال الإسلام من خلال دروس تفاعلية عن أركان الإسلام والإيمان، الصحابة، الغزوات التاريخية، وإرشادات
              الصلاة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button asChild size="lg" className="gap-1">
                <Link href="/pillars">
                  ابدأ التعلم <ChevronLeft className="h-4 w-4 mr-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/prayer">دليل الصلاة</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">ماذا ستتعلم</h2>
            <p className="mt-2 text-muted-foreground">تعليم إسلامي شامل في مكان واحد</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden group border border-border/50 hover:border-primary/50 transition-colors duration-300 card-hover-effect">
                  <CardContent className="p-6 flex flex-col h-full group-hover:bounce-in">
                    <div
                      className={cn(
                        "flex items-center justify-center w-12 h-12 rounded-full mb-4 text-primary",
                        featureColors[index].bg,
                      )}
                    >
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground flex-grow">{feature.description}</p>
                    <div className="mt-4 pt-4 border-t border-border/50 flex justify-between items-center">
                      <Link href={feature.href} className="text-primary hover:underline text-sm flex items-center">
                        اقرأ المزيد <ChevronLeft className="mr-1 h-3 w-3" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-accent/50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <svg
                className="absolute top-0 right-0 -mt-6 -mr-6 text-primary opacity-20"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.61 9.72C23.52 9.72 21.83 10.55 20.54 12.21C19.27 13.86 18.64 16.16 18.64 19.09C18.64 22.02 19.27 24.35 20.54 26.07C21.83 27.78 23.52 28.63 25.61 28.63C27.72 28.63 29.43 27.78 30.73 26.07C32.03 24.35 32.68 22.02 32.68 19.09C32.68 16.16 32.03 13.86 30.73 12.21C29.43 10.55 27.72 9.72 25.61 9.72ZM10.77 9.72C8.68 9.72 6.98 10.55 5.66 12.21C4.37 13.86 3.72 16.16 3.72 19.09C3.72 22.02 4.37 24.35 5.66 26.07C6.98 27.78 8.68 28.63 10.77 28.63C12.89 28.63 14.6 27.78 15.9 26.07C17.2 24.35 17.85 22.02 17.85 19.09C17.85 16.16 17.2 13.86 15.9 12.21C14.6 10.55 12.89 9.72 10.77 9.72Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote className="text-xl md:text-2xl font-medium">"اطلبوا العلم من المهد إلى اللحد"</blockquote>
              <p className="mt-4 text-base text-muted-foreground">- النبي محمد ﷺ</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter mb-4">هل أنت مستعد لبدء رحلتك؟</h2>
            <p className="text-muted-foreground mb-8">
              ابدأ باستكشاف نسيج المعرفة الإسلامية الغني، من الأركان الأساسية إلى الأحداث التاريخية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-1">
                <Link href="/pillars">
                  استكشف الأركان <ChevronLeft className="h-4 w-4 mr-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/companions">تعرف على الصحابة</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    title: "أركان الإسلام والإيمان",
    description: "تعلم عن أركان الإسلام الخمسة وأركان الإيمان الستة التي تشكل أساس العقيدة الإسلامية.",
    icon: Book,
    href: "/pillars",
  },
  {
    title: "الصحابة",
    description: "اكتشف حياة ومساهمات صحابة النبي محمد الذين شكلوا التاريخ الإسلامي المبكر.",
    icon: Users,
    href: "/companions",
  },
  {
    title: "الغزوات الإسلامية",
    description: "استكشف المعارك المهمة عبر التاريخ الإسلامي وتأثيرها على انتشار الإسلام.",
    icon: Sword,
    href: "/battles",
  },
  {
    title: "دليل الصلاة",
    description: "تعلم كيفية أداء الصلاة بشكل صحيح مع تعليمات خطوة بخطوة باللغة العربية.",
    icon: PrayingHands,
    href: "/prayer",
  },
]

const featureColors = [
  { bg: "bg-primary/10" },
  { bg: "bg-blue-500/10" },
  { bg: "bg-amber-500/10" },
  { bg: "bg-rose-500/10" },
]

function ChevronLeft(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

