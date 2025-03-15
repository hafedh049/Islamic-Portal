"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Sword, Calendar, MapPin, Users } from "lucide-react"

export default function BattlesPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="container py-24 px-4 md:px-6 mx-auto max-w-6xl">
      <div className="space-y-4 text-center mb-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">الغزوات الإسلامية عبر التاريخ</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground mt-4">
            استكشف الصراعات العسكرية المهمة التي شكلت التاريخ الإسلامي
          </p>
        </motion.div>
      </div>

      <Tabs defaultValue="early" className="space-y-8">
        <TabsList className="w-full max-w-md mx-auto grid grid-cols-3">
          <TabsTrigger value="early">العصر المبكر</TabsTrigger>
          <TabsTrigger value="medieval">العصور الوسطى</TabsTrigger>
          <TabsTrigger value="modern">الفترات المتأخرة</TabsTrigger>
        </TabsList>

        <TabsContent value="early" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {earlyBattles.map((battle, index) => (
              <motion.div
                key={battle.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col overflow-hidden card-hover-effect">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20">
                        {battle.category}
                      </Badge>
                      <span className="text-lg text-primary">{battle.arabicName}</span>
                    </div>
                    <CardTitle className="text-xl mt-2">{battle.name}</CardTitle>
                    <CardDescription>{battle.year}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm">{battle.description}</p>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{battle.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{battle.location}</span>
                      </div>
                      {battle.participants && (
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4 text-muted-foreground ml-2" />
                          <span className="text-muted-foreground text-right">{battle.participants}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-1">
                        <Sword className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{battle.outcome}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {battle.type}
                      </Badge>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="medieval" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {medievalBattles.map((battle, index) => (
              <motion.div
                key={battle.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col overflow-hidden card-hover-effect">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                        {battle.category}
                      </Badge>
                      <span className="text-lg text-primary">{battle.arabicName}</span>
                    </div>
                    <CardTitle className="text-xl mt-2">{battle.name}</CardTitle>
                    <CardDescription>{battle.year}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm">{battle.description}</p>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{battle.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{battle.location}</span>
                      </div>
                      {battle.participants && (
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4 text-muted-foreground ml-2" />
                          <span className="text-muted-foreground text-right">{battle.participants}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-1">
                        <Sword className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{battle.outcome}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {battle.type}
                      </Badge>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="modern" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modernBattles.map((battle, index) => (
              <motion.div
                key={battle.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col overflow-hidden card-hover-effect">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/20">
                        {battle.category}
                      </Badge>
                      <span className="text-lg text-primary">{battle.arabicName}</span>
                    </div>
                    <CardTitle className="text-xl mt-2">{battle.name}</CardTitle>
                    <CardDescription>{battle.year}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm">{battle.description}</p>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{battle.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{battle.location}</span>
                      </div>
                      {battle.participants && (
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4 text-muted-foreground ml-2" />
                          <span className="text-muted-foreground text-right">{battle.participants}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-1">
                        <Sword className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{battle.outcome}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {battle.type}
                      </Badge>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const earlyBattles = [
  {
    name: "غزوة بدر",
    arabicName: "غزوة بدر",
    year: "2 هـ (624 م)",
    date: "17 رمضان، 2 هـ",
    location: "بدر، قرب المدينة",
    participants: "313 مسلم مقابل 1000 من قريش",
    description:
      "أول معركة كبرى بين المسلمين وقريش مكة. على الرغم من كونهم أقل عدداً بكثير، حقق المسلمون نصراً حاسماً، الذي اعتبر تأكيداً إلهياً لرسالة النبي محمد.",
    outcome: "انتصار المسلمين",
    type: "معركة كبرى",
    category: "العصر النبوي",
  },
  {
    name: "غزوة أحد",
    arabicName: "غزوة أحد",
    year: "3 هـ (625 م)",
    date: "7 شوال، 3 هـ",
    location: "جبل أحد، شمال المدينة",
    participants: "700 مسلم مقابل 3000 من قريش",
    description:
      "المعركة الكبرى الثانية بين المسلمين وقريش. في البداية، كان المسلمون متفوقين، لكن عندما ترك الرماة مواقعهم ضد أوامر النبي، تحولت الأمور، مما أدى إلى انتكاسة للمسلمين.",
    outcome: "انتصار تكتيكي لقريش",
    type: "معركة كبرى",
    category: "العصر النبوي",
  },
  {
    name: "غزوة الخندق",
    arabicName: "غزوة الخندق",
    year: "5 هـ (627 م)",
    date: "شوال، 5 هـ",
    location: "المدينة",
    participants: "3000 مسلم مقابل 10000 من قريش وحلفائها",
    description:
      "تعرف أيضاً باسم غزوة الأحزاب. حفر المسلمون خندقاً حول المدينة كاستراتيجية دفاعية اقترحها سلمان الفارسي. بعد حصار استمر شهراً، انسحب المتحالفون دون غزو المدينة.",
    outcome: "انتصار المسلمين",
    type: "حصار",
    category: "العصر النبوي",
  },
  {
    name: "غزوة خيبر",
    arabicName: "غزوة خيبر",
    year: "7 هـ (628 م)",
    date: "محرم، 7 هـ",
    location: "واحة خيبر، شمال المدينة",
    participants: "1500 مسلم مقابل قوات يهود خيبر",
    description:
      "قاد النبي المسلمين ضد مجتمع خيبر اليهودي، الذي كان يتآمر مع أعداء آخرين ضد المسلمين. بعد الفتح، سمح لليهود بمواصلة زراعة الأرض مقابل إعطاء نصف إنتاجهم للمسلمين.",
    outcome: "انتصار المسلمين",
    type: "فتح",
    category: "العصر النبوي",
  },
  {
    name: "فتح مكة",
    arabicName: "فتح مكة",
    year: "8 هـ (630 م)",
    date: "20 رمضان، 8 هـ",
    location: "مكة",
    participants: "10000 مسلم مقابل مدافعي مكة",
    description:
      "بعد انتهاك قريش لصلح الحديبية، سار النبي على مكة مع 10000 من أتباعه. استسلمت المدينة مع إراقة دماء قليلة. سامح النبي أعداءه السابقين ودمر الأصنام في الكعبة.",
    outcome: "انتصار المسلمين بدون إراقة دماء",
    type: "فتح",
    category: "العصر النبوي",
  },
  {
    name: "غزوة حنين",
    arabicName: "غزوة حنين",
    year: "8 هـ (630 م)",
    date: "شوال، 8 هـ",
    location: "وادي حنين، بين مكة والطائف",
    participants: "12000 مسلم مقابل 4000 من هوازن وثقيف",
    description:
      "بعد فتح مكة بفترة وجيزة، واجه المسلمون قبائل هوازن وثقيف. على الرغم من الانتكاسات الأولية بسبب كمين، تجمع المسلمون وحققوا النصر، واستولوا على غنائم حرب كبيرة.",
    outcome: "انتصار المسلمين",
    type: "معركة كبرى",
    category: "العصر النبوي",
  },
  {
    name: "غزوة مؤتة",
    arabicName: "غزوة مؤتة",
    year: "8 هـ (629 م)",
    date: "جمادى الأولى، 8 هـ",
    location: "مؤتة، الأردن حالياً",
    participants: "3000 مسلم مقابل أكثر من 100000 من القوات البيزنطية",
    description:
      "أول معركة بين المسلمين والإمبراطورية البيزنطية. على الرغم من كونهم أقل عدداً بكثير، قاتل المسلمون بشجاعة. استشهد ثلاثة قادة مسلمين قبل أن يتولى خالد بن الوليد القيادة وينفذ انسحاباً استراتيجياً.",
    outcome: "انسحاب استراتيجي",
    type: "معركة كبرى",
    category: "العصر النبوي",
  },
  {
    name: "غزوة تبوك",
    arabicName: "غزوة تبوك",
    year: "9 هـ (630 م)",
    date: "رجب، 9 هـ",
    location: "تبوك، شمال الجزيرة العربية",
    participants: "30000 مسلم مقابل قوات بيزنطية متوقعة",
    description:
      "قاد النبي جيشاً إسلامياً كبيراً إلى تبوك بعد تلقي تقارير عن استعدادات بيزنطية للغزو. عند الوصول، لم يجدوا أي قوات بيزنطية. أظهرت الحملة القوة العسكرية الإسلامية وأمنت العديد من المعاهدات.",
    outcome: "لا قتال، نجاح دبلوماسي",
    type: "حملة",
    category: "العصر النبوي",
  },
  {
    name: "معركة اليمامة",
    arabicName: "معركة اليمامة",
    year: "11 هـ (632 م)",
    date: "ربيع الأول أو ربيع الثاني، 11 هـ",
    location: "اليمامة، وسط الجزيرة العربية",
    participants: "قوات المسلمين مقابل أتباع مسيلمة",
    description:
      "خلال خلافة أبي بكر، قاتل المسلمون ضد مسيلمة الكذاب الذي ادعى النبوة. كانت المعركة شرسة، مع استشهاد العديد من حفظة القرآن، مما دفع إلى تجميع القرآن.",
    outcome: "انتصار المسلمين",
    type: "معركة كبرى",
    category: "حروب الردة",
  },
]

const medievalBattles = [
  {
    name: "معركة اليرموك",
    arabicName: "معركة اليرموك",
    year: "15 هـ (636 م)",
    date: "رجب، 15 هـ",
    location: "وادي نهر اليرموك، حدود سوريا والأردن",
    participants: "30000-40000 مسلم مقابل أكثر من 100000 من القوات البيزنطية",
    description:
      "واحدة من أكثر المعارك حسماً في التاريخ، حيث هزمت القوات الإسلامية بقيادة خالد بن الوليد الجيش البيزنطي. أدى هذا النصر إلى الفتح الإسلامي لبلاد الشام.",
    outcome: "انتصار حاسم للمسلمين",
    type: "معركة كبرى",
    category: "الخلافة المبكرة",
  },
  {
    name: "معركة القادسية",
    arabicName: "معركة القادسية",
    year: "16 هـ (636 م)",
    date: "16 هـ",
    location: "القادسية، العراق",
    participants: "30000 مسلم مقابل 60000 من القوات الساسانية",
    description:
      "معركة حاسمة بين الخلافة الراشدة والإمبراطورية الساسانية الفارسية، تحت قيادة سعد بن أبي وقاص. أدى النصر إلى الفتح الإسلامي لفارس.",
    outcome: "انتصار المسلمين",
    type: "معركة كبرى",
    category: "الخلافة المبكرة",
  },
  {
    name: "فتح مصر",
    arabicName: "فتح مصر",
    year: "20-21 هـ (641-642 م)",
    date: "20-21 هـ",
    location: "مصر",
    participants: "4000-12000 مسلم مقابل القوات البيزنطية المصرية",
    description:
      "بقيادة عمرو بن العاص، فتحت القوات الإسلامية مصر من الإمبراطورية البيزنطية، مؤسسة الحكم الإسلامي هناك لقرون قادمة.",
    outcome: "انتصار المسلمين",
    type: "فتح",
    category: "الخلافة المبكرة",
  },
  {
    name: "معركة نهاوند",
    arabicName: "معركة نهاوند",
    year: "21 هـ (642 م)",
    date: "21 هـ",
    location: "نهاوند، إيران",
    participants: "30000 مسلم مقابل 150000 من القوات الساسانية",
    description:
      "المعروفة باسم 'فتح الفتوح'، أنهت هذه المعركة بشكل فعال المقاومة الساسانية وأمنت فارس للخلافة الإسلامية.",
    outcome: "انتصار حاسم للمسلمين",
    type: "معركة كبرى",
    category: "الخلافة المبكرة",
  },
  {
    name: "معركة صفين",
    arabicName: "معركة صفين",
    year: "37 هـ (657 م)",
    date: "صفر، 37 هـ",
    location: "ضفاف الفرات، سوريا",
    participants: "قوات علي بن أبي طالب مقابل قوات معاوية",
    description:
      "معركة رئيسية خلال الفتنة الأولى (الحرب الأهلية) بين الخليفة علي ومعاوية. انتهت المعركة بالتحكيم، الذي عمل في النهاية ضد مصالح علي.",
    outcome: "غير حاسمة/تحكيم",
    type: "حرب أهلية",
    category: "الفتنة الأولى",
  },
  {
    name: "معركة كربلاء",
    arabicName: "معركة كربلاء",
    year: "61 هـ (680 م)",
    date: "10 محرم، 61 هـ",
    location: "كربلاء، العراق",
    participants: "الحسين بن علي و72 من أصحابه مقابل الجيش الأموي",
    description:
      "المعركة المأساوية حيث استشهد الحسين بن علي، حفيد النبي محمد، ومجموعته الصغيرة من الأتباع على يد القوات الأموية. لهذا الحدث أهمية عميقة في التاريخ الإسلامي، خاصة للمسلمين الشيعة.",
    outcome: "استشهاد الحسين",
    type: "مأساة",
    category: "العصر الأموي",
  },
  {
    name: "معركة بلاط الشهداء",
    arabicName: "معركة بلاط الشهداء",
    year: "114 هـ (732 م)",
    date: "رمضان، 114 هـ",
    location: "تور/بواتييه، فرنسا",
    participants: "القوات الأموية مقابل القوات الفرنجية بقيادة شارل مارتل",
    description:
      "معركة مهمة أوقفت التقدم الشمالي للخلافة الأموية في أوروبا الغربية. غالباً ما يشار إليها كنقطة تحول في التاريخ الأوروبي.",
    outcome: "انتصار الفرنجة",
    type: "معركة كبرى",
    category: "العصر الأموي",
  },
  {
    name: "معركة طلاس",
    arabicName: "معركة طلاس",
    year: "133 هـ (751 م)",
    date: "133 هـ",
    location: "نهر طلاس، آسيا الوسطى",
    participants: "القوات العباسية مقابل قوات سلالة تانغ الصينية",
    description:
      "معركة مهمة بين الخلافة العباسية وسلالة تانغ الصينية، وضعت حداً للتوسع الصيني غرباً وأدت إلى انتشار تقنية صناعة الورق إلى العالم الإسلامي ومن ثم إلى أوروبا.",
    outcome: "انتصار المسلمين",
    type: "معركة كبرى",
    category: "العصر العباسي",
  },
  {
    name: "معركة حطين",
    arabicName: "معركة حطين",
    year: "583 هـ (1187 م)",
    date: "24 ربيع الثاني، 583 هـ",
    location: "قرب بحيرة طبريا، إسرائيل حالياً",
    participants: "القوات الأيوبية بقيادة صلاح الدين مقابل قوات الصليبيين",
    description:
      "معركة حاسمة حيث هزم صلاح الدين جيوش الصليبيين، مما أدى إلى استعادة القدس ومعظم الأراضي المقدسة من الصليبيين.",
    outcome: "انتصار حاسم للمسلمين",
    type: "معركة كبرى",
    category: "الحروب الصليبية",
  },
]

const modernBattles = [
  {
    name: "فتح القسطنطينية",
    arabicName: "فتح القسطنطينية",
    year: "857 هـ (1453 م)",
    date: "20 جمادى الأولى، 857 هـ",
    location: "القسطنطينية (إسطنبول)",
    participants: "القوات العثمانية بقيادة محمد الثاني مقابل المدافعين البيزنطيين",
    description:
      "فتح القسطنطينية على يد السلطان محمد الثاني، الذي وضع حداً للإمبراطورية البيزنطية وحول الدولة العثمانية إلى إمبراطورية.",
    outcome: "انتصار عثماني",
    type: "حصار",
    category: "العصر العثماني",
  },
  {
    name: "معركة موهاكس",
    arabicName: "معركة موهاكس",
    year: "932 هـ (1526 م)",
    date: "29 شوال، 932 هـ",
    location: "موهاكس، المجر",
    participants: "القوات العثمانية بقيادة سليمان القانوني مقابل القوات المجرية",
    description:
      "معركة حاسمة حيث هزمت الإمبراطورية العثمانية مملكة المجر، مما أدى إلى تقسيم المجر وهيمنة عثمانية في شرق أوروبا.",
    outcome: "انتصار عثماني",
    type: "معركة كبرى",
    category: "العصر العثماني",
  },
  {
    name: "حصار فيينا",
    arabicName: "حصار فيينا",
    year: "1094 هـ (1683 م)",
    date: "14 رجب - 21 رمضان، 1094 هـ",
    location: "فيينا، النمسا",
    participants: "القوات العثمانية مقابل الحلف المقدس",
    description: "المحاولة العثمانية الفاشلة للاستيلاء على فيينا، والتي وضعت بداية انحدار القوة العثمانية في أوروبا.",
    outcome: "هزيمة عثمانية",
    type: "حصار",
    category: "العصر العثماني",
  },
  {
    name: "معركة بلاسي",
    arabicName: "معركة بلاسي",
    year: "1170 هـ (1757 م)",
    date: "3 شوال، 1170 هـ",
    location: "بلاسي، البنغال",
    participants: "شركة الهند الشرقية البريطانية مقابل نواب البنغال وحلفائه الفرنسيين",
    description:
      "انتصار حاسم لشركة الهند الشرقية البريطانية على نواب البنغال وحلفائه الفرنسيين، مما أسس الحكم البريطاني في الهند.",
    outcome: "انتصار بريطاني",
    type: "معركة استعمارية",
    category: "العصر الاستعماري",
  },
  {
    name: "حصار عكا",
    arabicName: "حصار عكا",
    year: "1213 هـ (1799 م)",
    date: "شعبان، 1213 هـ",
    location: "عكا، سوريا العثمانية (إسرائيل حالياً)",
    participants: "القوات العثمانية والبريطانية مقابل القوات الفرنسية بقيادة نابليون",
    description:
      "الدفاع الناجح عن عكا من قبل القوات العثمانية والبريطانية ضد جيش نابليون الفرنسي الغازي، مما وضع حداً لطموحات نابليون في الشرق.",
    outcome: "انتصار عثماني-بريطاني",
    type: "حصار",
    category: "العصر النابليوني",
  },
  {
    name: "معركة أم درمان",
    arabicName: "معركة أم درمان",
    year: "1316 هـ (1898 م)",
    date: "13 ربيع الثاني، 1316 هـ",
    location: "أم درمان، السودان",
    participants: "القوات الأنجلو-مصرية مقابل قوات المهدية",
    description:
      "معركة كبرى حيث هزمت القوات الأنجلو-مصرية بقيادة هربرت كتشنر قوات المهدية، مما أسس الهيمنة البريطانية في السودان.",
    outcome: "انتصار أنجلو-مصري",
    type: "معركة استعمارية",
    category: "العصر الاستعماري",
  },
  {
    name: "معركة جاليبولي",
    arabicName: "معركة جاليبولي",
    year: "1333-1334 هـ (1915-1916 م)",
    date: "1333-1334 هـ",
    location: "شبه جزيرة جاليبولي، الإمبراطورية العثمانية",
    participants: "القوات العثمانية مقابل قوات الحلفاء",
    description:
      "انتصار عثماني مهم ضد قوات الحلفاء خلال الحرب العالمية الأولى، مما أخر سقوط الإمبراطورية العثمانية ورفع مصطفى كمال (أتاتورك لاحقاً) إلى مكانة بارزة.",
    outcome: "انتصار عثماني",
    type: "حملة الحرب العالمية الأولى",
    category: "الحروب العالمية",
  },
  {
    name: "الثورة العربية",
    arabicName: "الثورة العربية",
    year: "1334-1337 هـ (1916-1918 م)",
    date: "1334-1337 هـ",
    location: "الحجاز، شبه الجزيرة العربية",
    participants: "القوات العربية بدعم بريطاني مقابل القوات العثمانية",
    description:
      "تمرد ضد الحكم العثماني بقيادة الشريف حسين من مكة، مما ساهم في سقوط الإمبراطورية العثمانية وشكل الشرق الأوسط الحديث.",
    outcome: "انتصار عربي-بريطاني",
    type: "انتفاضة",
    category: "الحروب العالمية",
  },
]

