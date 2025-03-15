"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export default function PillarsPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="container py-24 px-4 md:px-6 mx-auto max-w-5xl">
      <div className="space-y-4 text-center mb-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">أركان الإسلام والإيمان</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground mt-4">
            استكشف العناصر الأساسية للعقيدة والممارسة الإسلامية
          </p>
        </motion.div>
      </div>

      <Tabs defaultValue="islam" className="space-y-8">
        <TabsList className="w-full max-w-md mx-auto grid grid-cols-2">
          <TabsTrigger value="islam" className="text-center py-3">
            أركان الإسلام
          </TabsTrigger>
          <TabsTrigger value="iman" className="text-center py-3">
            أركان الإيمان
          </TabsTrigger>
        </TabsList>

        <TabsContent value="islam" className="space-y-8">
          <div className="grid gap-6">
            {pillarsOfIslam.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden card-hover-effect">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="px-3 py-1">
                        الركن {index + 1}
                      </Badge>
                      <span className="text-xl text-primary">{pillar.arabic}</span>
                    </div>
                    <CardTitle className="text-2xl mt-3">{pillar.title}</CardTitle>
                    <CardDescription>{pillar.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="group-hover:bounce-in">
                    <div className="grid gap-3">
                      {pillar.keyPoints.map((point, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary ml-2 mt-0.5" />
                          <div>
                            <p className="font-medium">{point.title}</p>
                            <p className="text-sm text-muted-foreground">{point.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="iman" className="space-y-8">
          <div className="grid gap-6">
            {pillarsOfIman.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden card-hover-effect">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="px-3 py-1">
                        الركن {index + 1}
                      </Badge>
                      <span className="text-xl text-primary">{pillar.arabic}</span>
                    </div>
                    <CardTitle className="text-2xl mt-3">{pillar.title}</CardTitle>
                    <CardDescription>{pillar.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="group-hover:bounce-in">
                    <div className="grid gap-3">
                      {pillar.keyPoints.map((point, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary ml-2 mt-0.5" />
                          <div>
                            <p className="font-medium">{point.title}</p>
                            <p className="text-sm text-muted-foreground">{point.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const pillarsOfIslam = [
  {
    title: "الشهادة",
    arabic: "الشهادة",
    description: "شهادة أن لا إله إلا الله وأن محمداً رسول الله.",
    keyPoints: [
      {
        title: "الجزء الأول",
        description: '"لا إله إلا الله" (لا معبود بحق إلا الله)',
      },
      {
        title: "الجزء الثاني",
        description: '"محمد رسول الله" (محمد هو رسول الله)',
      },
      {
        title: "الأهمية",
        description: "هي التعبير الأساسي عن العقيدة الإسلامية وبوابة الدخول في الإسلام.",
      },
    ],
  },
  {
    title: "الصلاة",
    arabic: "الصلاة",
    description: "أداء الصلوات الخمس يومياً كصلة مباشرة بين العبد والله.",
    keyPoints: [
      {
        title: "الصلوات الخمس",
        description: "الفجر، الظهر، العصر، المغرب، والعشاء",
      },
      {
        title: "الطهارة",
        description: "الوضوء مطلوب قبل الصلاة للحصول على الطهارة الجسدية والروحية",
      },
      {
        title: "اتجاه الصلاة",
        description: "جميع الصلوات تؤدى باتجاه الكعبة في مكة (القبلة)",
      },
    ],
  },
  {
    title: "الزكاة",
    arabic: "الزكاة",
    description: "إعطاء جزء محدد من المال للصدقة، عادة للفقراء والمحتاجين.",
    keyPoints: [
      {
        title: "الصدقة الواجبة",
        description: "2.5٪ من المال المدخر سنوياً لمن يبلغ النصاب",
      },
      {
        title: "التطهير والنمو",
        description: "كلمة 'زكاة' تعني التطهير والنمو، تطهير المال والنفس",
      },
      {
        title: "المستحقون",
        description: "ثمانية أصناف من المستحقين محددة في القرآن، بما في ذلك الفقراء والمساكين",
      },
    ],
  },
  {
    title: "الصوم",
    arabic: "الصوم",
    description: "الصيام خلال شهر رمضان من الفجر حتى غروب الشمس.",
    keyPoints: [
      {
        title: "شهر رمضان",
        description: "شهر رمضان بأكمله، الشهر التاسع من التقويم القمري الإسلامي",
      },
      {
        title: "المتطلبات",
        description: "الامتناع عن الطعام والشراب وغيرها من الاحتياجات الجسدية خلال ساعات النهار",
      },
      {
        title: "الفوائد الروحية",
        description: "تنمية الانضباط الذاتي، وضبط النفس، والتضحية، والتعاطف مع الأقل حظاً",
      },
    ],
  },
  {
    title: "الحج",
    arabic: "الحج",
    description:
      "الحج إلى مكة خلال شهر ذي الحجة، والذي يجب على كل مسلم القيام به مرة واحدة على الأقل في حياته إذا كان قادراً.",
    keyPoints: [
      {
        title: "مرة في العمر",
        description: "واجب مرة واحدة في العمر لمن هو قادر جسدياً ومالياً",
      },
      {
        title: "الفترة الزمنية",
        description: "يؤدى خلال شهر ذي الحجة الإسلامي",
      },
      {
        title: "المناسك",
        description: "تشمل الطواف (الدوران حول الكعبة)، والسعي (المشي بين الصفا والمروة)، والوقوف بعرفة",
      },
    ],
  },
]

const pillarsOfIman = [
  {
    title: "الإيمان بالله",
    arabic: "الإيمان بالله",
    description: "الإيمان بوحدانية الله (التوحيد)، كإله واحد أحد، خالق ومدبر الكون.",
    keyPoints: [
      {
        title: "التوحيد",
        description: "تأكيد أن الله واحد، ليس له شريك، فريد في أسمائه وصفاته",
      },
      {
        title: "الخالق والمدبر",
        description: "الله خلق كل شيء ويحافظ على وجوده",
      },
      {
        title: "المستحق للعبادة",
        description: "الله وحده يستحق العبادة، وليس أي مخلوق",
      },
    ],
  },
  {
    title: "الإيمان بالملائكة",
    arabic: "الإيمان بالملائكة",
    description: "الإيمان بوجود الملائكة، مخلوقات الله المصنوعة من نور والتي تنفذ أوامره.",
    keyPoints: [
      {
        title: "خلقوا من نور",
        description: "الملائكة مخلوقات الله مصنوعة من نور",
      },
      {
        title: "واجبات محددة",
        description: "لكل ملك واجبات محددة، مثل جبريل الذي نقل الوحي",
      },
      {
        title: "دائماً مطيعون",
        description: "الملائكة لا يعصون الله أبداً وينفذون أوامره بشكل مثالي",
      },
    ],
  },
  {
    title: "الإيمان بالكتب",
    arabic: "الإيمان بالكتب",
    description: "الإيمان بالكتب الإلهية التي أرسلها الله إلى رسله، بما في ذلك القرآن، التوراة، الزبور، والإنجيل.",
    keyPoints: [
      {
        title: "الهداية الإلهية",
        description: "أرسلت الكتب كهداية للبشرية من خلال الأنبياء",
      },
      {
        title: "الكتب المنزلة",
        description: "القرآن، التوراة، الزبور، والإنجيل",
      },
      {
        title: "القرآن",
        description: "الوحي الأخير للنبي محمد، محفوظ في شكله الأصلي",
      },
    ],
  },
  {
    title: "الإيمان بالرسل",
    arabic: "الإيمان بالرسل",
    description: "الإيمان بجميع الأنبياء والرسل الذين أرسلهم الله لهداية البشرية.",
    keyPoints: [
      {
        title: "سلسلة الأنبياء",
        description: "من آدم إلى محمد، جميعهم جاءوا بنفس الرسالة الأساسية للتوحيد",
      },
      {
        title: "محمد ﷺ",
        description: "النبي والرسول الأخير، أرسل إلى البشرية جمعاء",
      },
      {
        title: "قدوة مثالية",
        description: "الأنبياء جسدوا أعلى المعايير الأخلاقية والأدبية",
      },
    ],
  },
  {
    title: "الإيمان باليوم الآخر",
    arabic: "الإيمان باليوم الآخر",
    description: "الإيمان بيوم القيامة والحساب، عندما يحاسب جميع الناس على أعمالهم.",
    keyPoints: [
      {
        title: "نهاية هذا العالم",
        description: "هذا العالم مؤقت وسينتهي في يوم القيامة",
      },
      {
        title: "البعث",
        description: "سيبعث جميع البشر ليواجهوا الحساب على أعمالهم الدنيوية",
      },
      {
        title: "الجنة والنار",
        description: "الوجهات النهائية بناءً على إيمان المرء وأعماله",
      },
    ],
  },
  {
    title: "الإيمان بالقدر",
    arabic: "الإيمان بالقدر",
    description: "الإيمان بإرادة الله وقضائه، وأنه لا يحدث شيء دون علمه وإذنه.",
    keyPoints: [
      {
        title: "العلم الإلهي",
        description: "علم الله يشمل كل شيء، الماضي والحاضر والمستقبل",
      },
      {
        title: "القضاء المكتوب",
        description: "كل ما سيحدث قد سجل في اللوح المحفوظ",
      },
      {
        title: "مسؤولية الإنسان",
        description: "البشر لديهم إرادة حرة وهم مسؤولون عن خياراتهم ضمن علم الله",
      },
    ],
  },
]

