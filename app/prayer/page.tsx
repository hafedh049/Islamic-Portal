"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Play, Pause, Clock, Calendar, ArrowLeft } from "lucide-react"

export default function PrayerPage() {
  const [mounted, setMounted] = useState(false)
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setMounted(true)
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const playAnimation = () => {
    if (isPlaying) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      setIsPlaying(false)
      return
    }

    setIsPlaying(true)
    setActiveStep(0)

    intervalRef.current = setInterval(() => {
      setActiveStep((prev) => {
        if (prev === null || prev >= prayerSteps.length - 1) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current)
          }
          setIsPlaying(false)
          return 0
        }
        return prev + 1
      })
    }, 3000)
  }

  if (!mounted) return null

  return (
    <div className="container py-24 px-4 md:px-6 mx-auto max-w-6xl">
      <div className="space-y-4 text-center mb-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">الصلاة في الإسلام</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground mt-4">تعلم عن الصلاة، أحد أركان الإسلام الخمسة</p>
        </motion.div>
      </div>

      <Tabs defaultValue="howto" className="space-y-8">
        <TabsList className="w-full max-w-md mx-auto grid grid-cols-3">
          <TabsTrigger value="howto">كيفية الصلاة</TabsTrigger>
          <TabsTrigger value="times">أوقات الصلاة</TabsTrigger>
          <TabsTrigger value="supplications">الأدعية</TabsTrigger>
        </TabsList>

        <TabsContent value="howto" className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">كيفية أداء الصلاة</CardTitle>
                  <CardDescription>دليل خطوة بخطوة لأداء الصلاة الإسلامية</CardDescription>
                </div>
                <button
                  onClick={playAnimation}
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {prayerSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0.7 }}
                    animate={{
                      opacity: 1,
                      scale: activeStep === index ? 1.03 : 1,
                      backgroundColor: activeStep === index ? "hsl(var(--primary) / 0.1)" : "transparent",
                    }}
                    transition={{ duration: 0.3 }}
                    className={`p-4 rounded-md border cursor-pointer ${
                      activeStep === index ? "border-primary" : "border-border"
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-secondary text-secondary-foreground text-sm font-medium shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-base font-medium">{step.title}</h4>
                        <p className="text-sm text-muted-foreground mt-2">{step.description}</p>
                        {step.arabic && <p className="text-sm text-primary mt-2">{step.arabic}</p>}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>متطلبات ما قبل الصلاة</CardTitle>
                <CardDescription>الشروط التي يجب استيفاؤها قبل الصلاة</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {prayerPrerequisites.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-right">{item.title}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                        {item.arabic && <p className="text-sm text-primary mt-2">{item.arabic}</p>}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>أنواع الصلاة</CardTitle>
                <CardDescription>فئات مختلفة من الصلوات في الإسلام</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {prayerTypes.map((type, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{type.name}</h4>
                        <Badge variant="outline">{type.status}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{type.description}</p>
                      <p className="text-sm text-primary mt-2">{type.arabic}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>ركعات الصلاة</CardTitle>
              <CardDescription>عدد الوحدات في كل صلاة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-right py-3 px-4">الصلاة</th>
                      <th className="text-center py-3 px-4">الفرض</th>
                      <th className="text-center py-3 px-4">السنة قبل</th>
                      <th className="text-center py-3 px-4">السنة بعد</th>
                      <th className="text-center py-3 px-4">مجموع الركعات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prayers.map((prayer, index) => (
                      <tr key={index} className={index < prayers.length - 1 ? "border-b" : ""}>
                        <td className="py-3 px-4">
                          <div className="font-medium">{prayer.name}</div>
                          <div className="text-xs text-muted-foreground mt-1">{prayer.arabicName}</div>
                        </td>
                        <td className="text-center py-3 px-4">{prayer.fard}</td>
                        <td className="text-center py-3 px-4">{prayer.sunnahBefore || "-"}</td>
                        <td className="text-center py-3 px-4">{prayer.sunnahAfter || "-"}</td>
                        <td className="text-center py-3 px-4 font-medium">{prayer.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="times" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>أوقات الصلاة في الإسلام</CardTitle>
              <CardDescription>الصلوات الخمس اليومية وأوقاتها المحددة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {prayerTimes.map((prayer, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="h-2 bg-primary"></div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle>{prayer.name}</CardTitle>
                        <Badge variant="outline">{prayer.arabicName}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">التوقيت: {prayer.time}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">المدة: {prayer.duration}</span>
                        </div>

                        <p className="text-sm text-muted-foreground pt-2 border-t">{prayer.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>أوقات الصلاة الخاصة</CardTitle>
              <CardDescription>الأوقات التي تكره أو تحرم فيها الصلاة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {forbiddenTimes.map((time, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                    <div className="w-1 h-full min-h-[60px] bg-destructive/30 rounded-full"></div>
                    <div>
                      <h4 className="font-medium text-destructive">{time.period}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{time.description}</p>
                      <p className="text-sm mt-2">الاستثناء: {time.exception}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="supplications" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>الأدعية الأساسية في الصلاة</CardTitle>
              <CardDescription>الأدعية المهمة المستخدمة أثناء الصلاة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {prayerSupplications.map((dua, index) => (
                  <div key={index} className="p-5 border rounded-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{dua.name}</h3>
                      <Badge>{dua.when}</Badge>
                    </div>

                    <div className="pt-2 space-y-3">
                      <p className="text-base text-primary leading-relaxed">{dua.arabic}</p>

                      <div className="flex items-center gap-2 text-muted-foreground text-sm py-2">
                        <ArrowLeft className="h-3 w-3" />
                        <p className="italic">النطق: {dua.transliteration}</p>
                      </div>

                      <div className="pt-2 border-t">
                        <p className="text-sm">
                          <span className="font-medium">الترجمة:</span> {dua.translation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>أدعية مهمة أخرى</CardTitle>
              <CardDescription>أدعية لمختلف المناسبات</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {otherSupplications.map((dua, index) => (
                  <AccordionItem key={index} value={`dua-${index}`}>
                    <AccordionTrigger>
                      <div className="flex justify-between items-center w-full pl-4">
                        <span>{dua.occasion}</span>
                        <Badge variant="outline" className="mr-2">
                          {dua.category}
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pt-2">
                        <p className="text-base text-primary leading-relaxed">{dua.arabic}</p>

                        <div className="flex items-center gap-2 text-muted-foreground text-sm py-2">
                          <ArrowLeft className="h-3 w-3" />
                          <p className="italic">النطق: {dua.transliteration}</p>
                        </div>

                        <div className="pt-2 border-t">
                          <p className="text-sm">
                            <span className="font-medium">الترجمة:</span> {dua.translation}
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const prayerSteps = [
  {
    title: "النية",
    description: "ابدأ بالوقوف متجهاً نحو القبلة (اتجاه الكعبة في مكة) وانوِ الصلاة.",
    arabic: "نية الصلاة",
  },
  {
    title: "تكبيرة الإحرام",
    description: "ارفع يديك إلى الأذنين وقل 'الله أكبر' (الله أكبر).",
    arabic: "الله أكبر",
  },
  {
    title: "القيام",
    description: "قف ويداك مطويتان على الصدر، اليد اليمنى فوق اليسرى، واقرأ سورة الفاتحة متبوعة بسورة أخرى أو آيات.",
    arabic: "القيام",
  },
  {
    title: "الركوع",
    description:
      "انحنِ واضعاً يديك على ركبتيك، مع الحفاظ على استقامة الظهر، قائلاً 'سبحان ربي العظيم' (المجد لربي العظيم).",
    arabic: "الركوع",
  },
  {
    title: "القيام بعد الركوع",
    description: "ارتفع من الركوع قائلاً 'سمع الله لمن حمده، ربنا لك الحمد' (الله يسمع من يحمده؛ ربنا، لك الحمد).",
    arabic: "القيام بعد الركوع",
  },
  {
    title: "السجود",
    description:
      "اسجد بحيث تلمس الجبهة والأنف والكفان والركبتان وأصابع القدمين الأرض، قائلاً 'سبحان ربي الأعلى' (المجد لربي الأعلى).",
    arabic: "السجود",
  },
  {
    title: "الجلسة بين السجدتين",
    description: "اجلس بين السجدتين قائلاً 'رب اغفر لي' (ربي اغفر لي).",
    arabic: "الجلسة بين السجدتين",
  },
  {
    title: "السجدة الثانية",
    description: "قم بالسجدة الثانية مثل الأولى.",
    arabic: "السجدة الثانية",
  },
  {
    title: "التشهد",
    description: "في الركعة الأخيرة أو الثانية، اجلس للتشهد، تلاوة شهادة الإيمان.",
    arabic: "التشهد",
  },
  {
    title: "التسليم",
    description:
      "اختتم الصلاة بإدارة الرأس إلى اليمين ثم إلى اليسار، قائلاً 'السلام عليكم ورحمة الله' (السلام ورحمة الله عليكم).",
    arabic: "التسليم",
  },
]

const prayerPrerequisites = [
  {
    title: "الوضوء",
    description: "الغسل الطقسي لتطهير النفس قبل الصلاة، ويتضمن غسل أجزاء محددة من الجسم بترتيب معين.",
    arabic: "الوضوء",
  },
  {
    title: "نظافة الجسم والملابس والمكان",
    description: "ضمان الطهارة الجسدية للجسم والملابس ومكان الصلاة.",
    arabic: "نظافة البدن والثوب والمكان",
  },
  {
    title: "ستر العورة",
    description:
      "ارتداء ملابس محتشمة؛ للرجال، تغطية على الأقل من السرة إلى الركبتين؛ للنساء، تغطية كل شيء باستثناء الوجه واليدين أثناء الصلاة.",
    arabic: "ستر العورة",
  },
  {
    title: "استقبال القبلة",
    description: "التوجه نحو الكعبة في مكة للصلاة.",
    arabic: "استقبال القبلة",
  },
  {
    title: "النية",
    description: "وجود نية محددة في القلب للصلاة التي يتم أداؤها.",
    arabic: "النية",
  },
  {
    title: "وقت الصلاة",
    description: "التأكد من أداء الصلاة في وقتها المحدد.",
    arabic: "دخول وقت الصلاة",
  },
]

const prayerTypes = [
  {
    name: "الفرض",
    status: "واجب",
    description: "الصلوات الخمس اليومية التي تعتبر إلزامية لكل مسلم بالغ.",
    arabic: "الفرض",
  },
  {
    name: "الواجب",
    status: "ضروري",
    description: "صلوات شبه إلزامية لا ينبغي تفويتها دون سبب وجيه (مثل صلاة العيد في المذهب الحنفي).",
    arabic: "الواجب",
  },
  {
    name: "السنة المؤكدة",
    status: "مستحب",
    description: "صلوات كان النبي محمد يؤديها باستمرار ونادراً ما فاتته.",
    arabic: "السنة المؤكدة",
  },
  {
    name: "السنة غير المؤكدة",
    status: "تطوعي",
    description: "صلوات كان النبي محمد يؤديها أحياناً ولكنه كان يتركها أحياناً أيضاً.",
    arabic: "السنة غير المؤكدة",
  },
  {
    name: "النفل",
    status: "اختياري",
    description: "صلوات تطوعية إضافية تؤدى للحصول على ثواب إضافي واتصال روحي.",
    arabic: "النفل",
  },
]

const prayers = [
  {
    name: "الفجر",
    arabicName: "الفجر",
    fard: 2,
    sunnahBefore: 2,
    sunnahAfter: 0,
    total: 4,
  },
  {
    name: "الظهر",
    arabicName: "الظهر",
    fard: 4,
    sunnahBefore: 4,
    sunnahAfter: 2,
    total: 10,
  },
  {
    name: "العصر",
    arabicName: "العصر",
    fard: 4,
    sunnahBefore: 4,
    sunnahAfter: 0,
    total: 8,
  },
  {
    name: "المغرب",
    arabicName: "المغرب",
    fard: 3,
    sunnahBefore: 0,
    sunnahAfter: 2,
    total: 5,
  },
  {
    name: "العشاء",
    arabicName: "العشاء",
    fard: 4,
    sunnahBefore: 0,
    sunnahAfter: 2,
    total: 6,
  },
  {
    name: "الوتر",
    arabicName: "الوتر",
    fard: 0,
    sunnahBefore: 0,
    sunnahAfter: 3,
    total: 3,
  },
]

const prayerTimes = [
  {
    name: "الفجر",
    arabicName: "الفجر",
    time: "من الفجر حتى شروق الشمس",
    duration: "حوالي 1-1.5 ساعة حسب الموسم",
    description: "يبدأ عند الفجر الصادق (عندما ينتشر الضوء أفقياً عبر الأفق) وينتهي عند شروق الشمس.",
  },
  {
    name: "الظهر",
    arabicName: "الظهر",
    time: "بعد الزوال حتى منتصف العصر",
    duration: "حوالي 3-4 ساعات حسب الموسم",
    description:
      "يبدأ عندما تتجاوز الشمس ذروتها (أعلى نقطة) وينتهي عندما يصبح ظل الشيء مساوياً لارتفاعه بالإضافة إلى ظله عند الظهيرة.",
  },
  {
    name: "العصر",
    arabicName: "العصر",
    time: "منتصف العصر حتى غروب الشمس",
    duration: "تختلف حسب الموسم، عادة 3-4 ساعات",
    description: "يبدأ عندما يصبح ظل الشيء مساوياً لارتفاعه (بالإضافة إلى ظله عند الظهيرة) وينتهي عند غروب الشمس.",
  },
  {
    name: "المغرب",
    arabicName: "المغرب",
    time: "بعد غروب الشمس حتى الغسق",
    duration: "حوالي 1-1.5 ساعة",
    description: "يبدأ مباشرة بعد غروب الشمس ويستمر حتى يغادر الضوء الأحمر السماء (نهاية الشفق).",
  },
  {
    name: "العشاء",
    arabicName: "العشاء",
    time: "من الليل حتى الفجر",
    duration: "حوالي 8-10 ساعات حسب الموسم",
    description: "يبدأ عندما يختفي الضوء الأحمر من السماء الغربية (الظلام الكامل) ويستمر حتى بداية الفجر.",
  },
]

const forbiddenTimes = [
  {
    period: "أثناء شروق الشمس",
    description: "من بداية شروق الشمس حتى ترتفع الشمس تماماً (حوالي 15-20 دقيقة بعد بداية الشروق).",
    exception: "الصلوات الفائتة التي تحتاج إلى قضاء.",
  },
  {
    period: "عندما تكون الشمس في ذروتها",
    description: "الفترة القصيرة عندما تكون الشمس في أعلى نقطة في السماء، قبل بدء وقت الظهر مباشرة.",
    exception: "استعدادات صلاة الجمعة مثل الاغتسال المستحب والوصول المبكر إلى المسجد.",
  },
  {
    period: "أثناء غروب الشمس",
    description: "من عندما تبدأ الشمس بالغروب حتى تختفي تماماً تحت الأفق.",
    exception: "الصلوات الضرورية مثل صلاة الجنازة أو الصلوات التي ستفوت إذا تأخرت.",
  },
  {
    period: "بعد الفجر حتى شروق الشمس",
    description: "بعد إتمام صلاة الفجر حتى ترتفع الشمس تماماً.",
    exception: "قضاء الصلوات الفائتة أو الصلوات ذات الأسباب المحددة مثل ركعتي الطواف (الطواف حول الكعبة).",
  },
  {
    period: "بعد العصر حتى المغرب",
    description: "بعد إتمام صلاة العصر حتى تغرب الشمس تماماً.",
    exception: "قضاء الصلوات الفائتة أو الصلوات ذات الأسباب المحددة.",
  },
]

const prayerSupplications = [
  {
    name: "دعاء الاستفتاح",
    when: "البداية",
    arabic: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلَا إِلَهَ غَيْرُكَ",
    transliteration: "سبحانك اللهم وبحمدك، وتبارك اسمك، وتعالى جدك، ولا إله غيرك",
    translation: "سبحانك يا الله، والحمد لك. تبارك اسمك، وتعالى مجدك. لا إله يستحق العبادة سواك.",
  },
  {
    name: "سورة الفاتحة",
    when: "مطلوبة في كل ركعة",
    arabic:
      "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۝ الرَّحْمَٰنِ الرَّحِيمِ ۝ مَالِكِ يَوْمِ الدِّينِ ۝ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ۝ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
    transliteration:
      "بسم الله الرحمن الرحيم. الحمد لله رب العالمين. الرحمن الرحيم. مالك يوم الدين. إياك نعبد وإياك نستعين. اهدنا الصراط المستقيم. صراط الذين أنعمت عليهم، غير المغضوب عليهم ولا الضالين.",
    translation:
      "بسم الله الرحمن الرحيم. الحمد لله رب العالمين. الرحمن الرحيم. مالك يوم الدين. إياك نعبد وإياك نستعين. اهدنا الصراط المستقيم. صراط الذين أنعمت عليهم، غير المغضوب عليهم ولا الضالين.",
  },
  {
    name: "دعاء الركوع",
    when: "أثناء الركوع",
    arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
    transliteration: "سبحان ربي العظيم",
    translation: "المجد لربي العظيم",
  },
  {
    name: "الرفع من الركوع",
    when: "عند الرفع من الركوع",
    arabic: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ، رَبَّنَا وَلَكَ الْحَمْدُ",
    transliteration: "سمع الله لمن حمده، ربنا ولك الحمد",
    translation: "الله يسمع من يحمده. ربنا، لك كل الحمد",
  },
  {
    name: "دعاء السجود",
    when: "أثناء السجود",
    arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
    transliteration: "سبحان ربي الأعلى",
    translation: "المجد لربي الأعلى",
  },
  {
    name: "التشهد",
    when: "في وضعية الجلوس",
    arabic:
      "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
    transliteration:
      "التحيات لله والصلوات والطيبات، السلام عليك أيها النبي ورحمة الله وبركاته، السلام علينا وعلى عباد الله الصالحين. أشهد أن لا إله إلا الله وأشهد أن محمداً عبده ورسوله",
    translation:
      "جميع التحيات والصلوات والكلمات الطيبة لله. السلام عليك أيها النبي، ورحمة الله وبركاته. السلام علينا وعلى عباد الله الصالحين. أشهد أن لا إله يستحق العبادة إلا الله، وأشهد أن محمداً عبده ورسوله.",
  },
]

const otherSupplications = [
  {
    occasion: "أذكار الصباح والمساء",
    category: "يومي",
    arabic:
      "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration:
      "أصبحنا وأصبح الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير",
    translation:
      "أصبحنا وأصبح الملك لله. الحمد لله. لا إله يستحق العبادة إلا الله وحده، لا شريك له. له الملك، وله كل الحمد، وهو على كل شيء قدير.",
  },
  {
    occasion: "قبل النوم",
    category: "يومي",
    arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
    transliteration: "باسمك اللهم أموت وأحيا",
    translation: "باسمك يا الله، أموت وأحيا.",
  },
  {
    occasion: "عند دخول المسجد",
    category: "مناسبات",
    arabic: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
    transliteration: "اللهم افتح لي أبواب رحمتك",
    translation: "يا الله، افتح لي أبواب رحمتك.",
  },
  {
    occasion: "عند الإفطار",
    category: "موسمي",
    arabic: "ذَهَبَ الظَّمَأُ، وَابْتَلَّتِ الْعُرُوقُ، وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ",
    transliteration: "ذهب الظمأ، وابتلت العروق، وثبت الأجر إن شاء الله",
    translation: "ذهب الظمأ، وابتلت العروق، وثبت الأجر إن شاء الله.",
  },
  {
    occasion: "بعد الصلاة",
    category: "يومي",
    arabic: "أَسْتَغْفِرُ اللَّهَ (ثلاثاً) اللَّهُمَّ أَنْتَ السَّلَامُ، وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
    transliteration: "أستغفر الله (3 مرات). اللهم أنت السلام، ومنك السلام، تباركت يا ذا الجلال والإكرام",
    translation: "أستغفر الله (3 مرات). يا الله، أنت السلام ومنك يأتي السلام. تباركت يا صاحب الجلال والإكرام.",
  },
]

