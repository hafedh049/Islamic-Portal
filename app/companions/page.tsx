"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"
import { Search, Star, Users } from "lucide-react"

export default function CompanionsPage() {
  const [mounted, setMounted] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredCompanions, setFilteredCompanions] = useState(companions)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const filtered = companions.filter(
      (companion) => companion.name.includes(searchTerm) || companion.title.includes(searchTerm),
    )
    setFilteredCompanions(filtered)
  }, [searchTerm])

  if (!mounted) return null

  return (
    <div className="container py-24 px-4 md:px-6 mx-auto max-w-5xl">
      <div className="space-y-4 text-center mb-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">الصحابة</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground mt-4">
            تعرف على صحابة النبي محمد ﷺ الكرام، الذين لعبوا أدواراً محورية في تأسيس ونشر الإسلام
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="w-full md:w-1/3">
          <Card className="sticky top-20">
            <CardHeader>
              <CardTitle>البحث عن الصحابة</CardTitle>
              <CardDescription>ابحث عن الصحابة بالاسم</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="ابحث عن الصحابة..."
                    className="pr-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">الفئات</h4>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="text-xs" onClick={() => setSearchTerm("خليفة")}>
                      الخلفاء الراشدون
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs" onClick={() => setSearchTerm("العشرة")}>
                      العشرة المبشرون بالجنة
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs" onClick={() => setSearchTerm("بدر")}>
                      أهل بدر
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs" onClick={() => setSearchTerm("النساء")}>
                      الصحابيات
                    </Button>
                  </div>
                </div>

                <div className="pt-2">
                  <Button onClick={() => setSearchTerm("")} variant="ghost" className="w-full text-primary">
                    مسح الفلاتر
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-full md:w-2/3">
          <ScrollArea className="h-[800px] rounded-md pl-4">
            <div className="grid gap-6">
              {filteredCompanions.length > 0 ? (
                filteredCompanions.map((companion, index) => (
                  <motion.div
                    key={companion.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card className="card-hover-effect">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {companion.isKhalifah && (
                              <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/20">
                                خليفة
                              </Badge>
                            )}
                            {companion.isAsharah && (
                              <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                                العشرة المبشرون
                              </Badge>
                            )}
                            {companion.isFemale && (
                              <Badge variant="outline" className="bg-pink-500/10 text-pink-500 border-pink-500/20">
                                صحابية
                              </Badge>
                            )}
                          </div>
                        </div>
                        <CardTitle className="text-xl mt-2">{companion.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{companion.title}</p>
                      </CardHeader>
                      <CardContent className="group-hover:bounce-in">
                        <p className="text-sm">{companion.description}</p>

                        {companion.keyContributions && (
                          <div className="mt-4">
                            <h4 className="text-sm font-medium mb-2">المساهمات الرئيسية:</h4>
                            <ul className="text-sm space-y-1">
                              {companion.keyContributions.map((contribution, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <Star className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                  <span>{contribution}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {companion.battles && companion.battles.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            <h4 className="text-sm font-medium w-full">الغزوات التي شارك فيها:</h4>
                            {companion.battles.map((battle, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {battle}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Users className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">لم يتم العثور على صحابة</h3>
                  <p className="text-sm text-muted-foreground">حاول تعديل البحث أو الفلاتر</p>
                </div>
              )}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

const companions = [
  {
    name: "أبو بكر الصديق",
    title: "الصديق، أول خليفة في الإسلام",
    description:
      "كان أبو بكر أقرب صديق وحمو النبي محمد. كان أول رجل بالغ يعتنق الإسلام وظل داعماً ثابتاً طوال حياة النبي. بعد وفاة النبي، أصبح أول خليفة للأمة الإسلامية.",
    keyContributions: [
      "أول رجل بالغ يعتنق الإسلام",
      "رافق النبي خلال الهجرة إلى المدينة",
      "قاد المسلمين بعد وفاة النبي وحافظ على وحدة الإسلام",
      "جمع القرآن في مخطوطة واحدة",
      "حارب ضد الذين رفضوا دفع الزكاة (حروب الردة)",
    ],
    battles: ["بدر", "أحد", "الخندق"],
    isKhalifah: true,
    isAsharah: true,
    isFemale: false,
  },
  {
    name: "عمر بن الخطاب",
    title: "الفاروق، ثاني خليفة في الإسلام",
    description:
      "كان في البداية من أشد معارضي الإسلام، لكن تحوله شكل نقطة تحول للمسلمين في مكة. كخليفة ثاني، وسع الدولة الإسلامية بشكل كبير وأسس العديد من الأنظمة الإدارية التي لا تزال مستخدمة حتى اليوم.",
    keyContributions: [
      "أسس التقويم الإسلامي (الهجري)",
      "نظم الدولة الإسلامية بأنظمة إدارية",
      "وسع الأراضي الإسلامية لتشمل فارس ومصر وأجزاء من الإمبراطورية البيزنطية",
      "أنشأ بيت المال (الخزانة العامة)",
      "أنشأ النظام القضائي وعين القضاة",
    ],
    battles: ["أحد", "الخندق", "خيبر", "فتح مكة"],
    isKhalifah: true,
    isAsharah: true,
    isFemale: false,
  },
  {
    name: "عثمان بن عفان",
    title: "ذو النورين، ثالث خليفة في الإسلام",
    description:
      "عرف بتواضعه وكرمه، تزوج اثنتين من بنات النبي (ليس في وقت واحد)، مما أكسبه لقب 'ذو النورين'. كخليفة ثالث، وحد القرآن في نص موحد.",
    keyContributions: [
      "وحد القرآن في النص الموحد المستخدم اليوم",
      "وسع مسجد النبي في المدينة",
      "اشترى بئر رومة ووقفها للمسلمين",
      "واصل التوسع الإسلامي في أرمينيا وقبرص وشمال أفريقيا",
      "عرف بكرمه الاستثنائي في تمويل الجيوش الإسلامية",
    ],
    battles: ["شارك في جميع المعارك الرئيسية باستثناء بدر"],
    isKhalifah: true,
    isAsharah: true,
    isFemale: false,
  },
  {
    name: "علي بن أبي طالب",
    title: "أسد الله، رابع خليفة في الإسلام",
    description:
      "ابن عم وصهر النبي محمد، تربى في بيت النبي. عرف بمعرفته العميقة بالإسلام، وشجاعته في المعارك، وحكمته في القضاء. أصبح الخليفة الرابع بعد وفاة عثمان.",
    keyContributions: [
      "أول شاب يعتنق الإسلام",
      "نام في فراش النبي ليلة الهجرة، مخاطراً بحياته",
      "عرف بشجاعته الاستثنائية في المعارك",
      "تزوج من فاطمة، ابنة النبي",
      "أحد أعظم العلماء بين الصحابة بمعرفة عميقة",
    ],
    battles: ["بدر", "أحد", "الخندق", "خيبر", "حنين"],
    isKhalifah: true,
    isAsharah: true,
    isFemale: false,
  },
  {
    name: "عائشة بنت أبي بكر",
    title: "أم المؤمنين، عالمة الإسلام",
    description:
      "زوجة النبي محمد وابنة أبي بكر، عرفت بذكائها وذاكرتها الفوتوغرافية. تعتبر واحدة من أعظم علماء الإسلام المبكر، روت أكثر من 2200 حديث وقدمت رؤى قيمة في حياة النبي الخاصة.",
    keyContributions: [
      "روت أكثر من 2200 حديث",
      "قدمت رؤى فريدة في حياة النبي العائلية",
      "أصبحت عالمة رائدة بعد وفاة النبي",
      "علمت العديد من العلماء البارزين من الجيل التالي",
      "صححت سوء فهم حول الممارسات الإسلامية",
    ],
    battles: ["معركة الجمل"],
    isKhalifah: false,
    isAsharah: false,
    isFemale: true,
  },
  {
    name: "فاطمة بنت محمد",
    title: "الزهراء، ابنة النبي محمد",
    description:
      "أصغر بنات النبي محمد وخديجة، عرفت بتقواها وتواضعها وتشابهها مع والدها في الكلام والسلوك. تزوجت من علي بن أبي طالب وكانت أم الحسن والحسين.",
    keyContributions: [
      "عرفت بتقواها وتواضعها الاستثنائيين",
      "وصفها والدها بأنها 'سيدة نساء أهل الجنة'",
      "أم الحسن والحسين، حفيدي النبي",
      "جسدت دور المرأة المسلمة والابنة والأم",
      "نقلت العديد من الأحاديث عن والدها",
    ],
    battles: [],
    isKhalifah: false,
    isAsharah: false,
    isFemale: true,
  },
  {
    name: "طلحة بن عبيدالله",
    title: "الكريم، أحد العشرة المبشرين بالجنة",
    description:
      "أحد أوائل المعتنقين للإسلام ومن أكثر الصحابة كرماً. حمى النبي خلال معركة أحد، مستخدماً جسده كدرع وفقد استخدام يده في هذه العملية.",
    keyContributions: [
      "استخدم ثروته لتحرير العبيد المسلمين في مكة",
      "حمى النبي بجسده في أحد، وفقد استخدام يده",
      "أحد الستة الذين عينهم عمر لاختيار الخليفة التالي",
      "عرف بكرمه للفقراء والمحتاجين",
      "من أول ثمانية أشخاص اعتنقوا الإسلام",
    ],
    battles: ["أحد", "الخندق", "فتح مكة"],
    isKhalifah: false,
    isAsharah: true,
    isFemale: false,
  },
  {
    name: "الزبير بن العوام",
    title: "حواري النبي، أحد العشرة المبشرين بالجنة",
    description:
      "ابن عم النبي محمد وأحد أوائل المعتنقين للإسلام. عرف بشجاعته وسماه النبي نفسه 'الحواري'. شارك في جميع المعارك الرئيسية للإسلام المبكر تقريباً.",
    keyContributions: [
      "أول من سل سيفاً في سبيل الإسلام",
      "أحد الستة الذين اختارهم عمر لاختيار الخليفة التالي",
      "نفذ مهام استخباراتية للمسلمين",
      "حرر العديد من العبيد في الأيام الأولى للإسلام",
      "محارب ماهر قاتل ببسالة في العديد من المعارك",
    ],
    battles: ["بدر", "أحد", "الخندق", "فتح مكة"],
    isKhalifah: false,
    isAsharah: true,
    isFemale: false,
  },
  {
    name: "خديجة بنت خويلد",
    title: "أول زوجة للنبي محمد، أول مسلمة",
    description:
      "سيدة أعمال ناجحة وظفت محمداً قبل النبوة وأصبحت لاحقاً زوجته. كانت أول شخص يعتنق الإسلام ودعمت النبي عاطفياً ومالياً خلال السنوات الصعبة الأولى من دعوته.",
    keyContributions: [
      "أول شخص يعتنق الإسلام",
      "دعمت النبي مالياً خلال الأيام الأولى للإسلام",
      "قدمت الدعم العاطفي خلال أوقات الاضطهاد الصعبة",
      "أم جميع أبناء النبي باستثناء إبراهيم",
      "استخدمت ثروتها ونفوذها لحماية المسلمين الأوائل",
    ],
    battles: [],
    isKhalifah: false,
    isAsharah: false,
    isFemale: true,
  },
  {
    name: "خالد بن الوليد",
    title: "سيف الله، القائد العسكري",
    description:
      "كان في البداية معارضاً للإسلام وقاتل ضد المسلمين في أحد والخندق. بعد اعتناقه الإسلام، أصبح أحد أعظم القادة العسكريين في التاريخ الإسلامي، ولم يخسر معركة قادها قط.",
    keyContributions: [
      "قاد الجيوش الإسلامية إلى انتصارات عديدة ضد القوات الفارسية والبيزنطية",
      "لعب دوراً أساسياً في فتح سوريا والعراق",
      "طور تكتيكات واستراتيجيات عسكرية مبتكرة",
      "لعب دوراً رئيسياً في هزيمة حركات الردة بعد وفاة النبي",
      "سماه النبي نفسه 'سيف الله'",
    ],
    battles: ["مؤتة", "حنين", "فتح مكة", "حروب الردة", "اليرموك"],
    isKhalifah: false,
    isAsharah: false,
    isFemale: false,
  },
  {
    name: "سعد بن أبي وقاص",
    title: "أحد العشرة المبشرين بالجنة، قائد عسكري",
    description:
      "أحد أوائل المعتنقين للإسلام وأحد العشرة المبشرين بالجنة. كان قائداً عسكرياً بارزاً قاد المسلمين في معركة القادسية الحاسمة ضد الإمبراطورية الفارسية.",
    keyContributions: [
      "أحد أوائل المسلمين، أسلم في سن السابعة عشرة",
      "أول من رمى بسهم في سبيل الله",
      "قائد الجيش الإسلامي في معركة القادسية",
      "فتح العراق وأسس مدينة الكوفة",
      "أحد الستة الذين رشحهم عمر للخلافة",
    ],
    battles: ["بدر", "أحد", "الخندق", "القادسية"],
    isKhalifah: false,
    isAsharah: true,
    isFemale: false,
  },
  {
    name: "عبد الرحمن بن عوف",
    title: "التاجر الثري، أحد العشرة المبشرين بالجنة",
    description:
      "أحد أوائل المعتنقين للإسلام وأحد العشرة المبشرين بالجنة. كان تاجراً ناجحاً وثرياً استخدم ثروته لدعم قضية الإسلام. عرف بكرمه وتبرعاته السخية.",
    keyContributions: [
      "أحد أوائل المسلمين وأحد الثمانية الأوائل",
      "تبرع بنصف ثروته ثم لاحقاً بقافلة كاملة من 700 جمل محملة بالبضائع",
      "أحد الستة الذين رشحهم عمر للخلافة",
      "ترأس لجنة اختيار الخليفة بعد وفاة عمر",
      "أوصى بـ 50,000 دينار ذهبي للمجاهدين في سبيل الله",
    ],
    battles: ["بدر", "أحد", "الخندق"],
    isKhalifah: false,
    isAsharah: true,
    isFemale: false,
  },
  {
    name: "أبو عبيدة بن الجراح",
    title: "أمين الأمة، أحد العشرة المبشرين بالجنة",
    description:
      "لقبه النبي محمد بـ 'أمين الأمة' لأمانته وإخلاصه. كان قائداً عسكرياً ماهراً قاد فتح بلاد الشام وكان حاكماً عادلاً للمناطق المفتوحة.",
    keyContributions: [
      "أحد أوائل المسلمين وأحد العشرة المبشرين بالجنة",
      "قائد الجيوش الإسلامية في فتح بلاد الشام",
      "عينه عمر والياً على الشام بعد عزل خالد بن الوليد",
      "قاد المسلمين خلال طاعون عمواس وتوفي فيه",
      "عرف بتواضعه وزهده وبساطة عيشه رغم منصبه",
    ],
    battles: ["بدر", "أحد", "الخندق", "فتح دمشق", "اليرموك"],
    isKhalifah: false,
    isAsharah: true,
    isFemale: false,
  },
  {
    name: "سعيد بن زيد",
    title: "أحد العشرة المبشرين بالجنة",
    description:
      "أحد العشرة المبشرين بالجنة وابن عم عمر بن الخطاب. كان من أوائل المعتنقين للإسلام وتحمل الاضطهاد في مكة. شارك في معظم الغزوات باستثناء بدر.",
    keyContributions: [
      "أحد أوائل المسلمين وتحمل الاضطهاد في مكة",
      "زوج فاطمة بنت الخطاب، أخت عمر، التي كانت سبباً في إسلام عمر",
      "شارك في معظم الغزوات الإسلامية المبكرة",
      "شارك في فتح دمشق وحمص",
      "عرف بالزهد والتواضع وتجنب المناصب السياسية",
    ],
    battles: ["أحد", "الخندق", "فتح دمشق"],
    isKhalifah: false,
    isAsharah: true,
    isFemale: false,
  },
  {
    name: "أم سلمة",
    title: "أم المؤمنين، من أكثر زوجات النبي علماً",
    description:
      "إحدى زوجات النبي محمد وأم المؤمنين. كانت من أكثر زوجات النبي علماً وحكمة. لعبت دوراً مهماً في العديد من الأحداث التاريخية، بما في ذلك صلح الحديبية.",
    keyContributions: [
      "قدمت مشورة حكيمة للنبي خلال صلح الحديبية",
      "روت أكثر من 300 حديث",
      "علمت العديد من النساء أحكام الدين",
      "دافعت عن حقوق النساء في الإسلام",
      "عاشت حتى سن متقدمة وكانت مصدراً للمعرفة للأجيال اللاحقة",
    ],
    battles: [],
    isKhalifah: false,
    isAsharah: false,
    isFemale: true,
  },
  {
    name: "أبو ذر الغفاري",
    title: "الزاهد، من كبار الصحابة",
    description:
      "من أوائل المعتنقين للإسلام وكان الرابع أو الخامس. عرف بصدقه الشديد وزهده وبساطة عيشه. كان يجهر بالحق ولا يخشى في الله لومة لائم.",
    keyContributions: [
      "من أوائل المسلمين، أسلم قبل الهجرة",
      "عرف بصدقه الشديد حتى لقبه النبي بـ 'صادق هذه الأمة'",
      "دعا إلى العدالة الاجتماعية والمساواة",
      "انتقد تكديس الثروة وترف بعض المسلمين في العصر الأموي",
      "كان مثالاً للزهد والتقشف والالتزام بتعاليم الإسلام",
    ],
    battles: ["الخندق", "تبوك"],
    isKhalifah: false,
    isAsharah: false,
    isFemale: false,
  },
  {
    name: "سلمان الفارسي",
    title: "الباحث عن الحقيقة، مستشار النبي",
    description:
      "ولد في فارس (إيران) وكان مجوسياً ثم اعتنق المسيحية في رحلته للبحث عن الحقيقة، قبل أن يلتقي بالنبي محمد ويعتنق الإسلام. اشتهر باقتراحه حفر الخندق في غزوة الأحزاب.",
    keyContributions: [
      "اقترح حفر الخندق في غزوة الأحزاب مما أدى إلى نصر المسلمين",
      "أول حاكم فارسي للمدائن بعد الفتح الإسلامي",
      "جسر بين الثقافتين العربية والفارسية",
      "عرف بعلمه وحكمته وكان مستشاراً للنبي وللخلفاء من بعده",
      "قال عنه النبي: 'سلمان منا أهل البيت'",
    ],
    battles: ["الخندق", "فتح المدائن"],
    isKhalifah: false,
    isAsharah: false,
    isFemale: false,
  },
  {
    name: "أسماء بنت أبي بكر",
    title: "ذات النطاقين، بطلة الهجرة",
    description:
      "ابنة أبي بكر الصديق وأخت عائشة. لعبت دوراً حاسماً في هجرة النبي وأبي بكر إلى المدينة. سميت بذات النطاقين لأنها شقت نطاقها (حزامها) إلى قسمين لتعلق بهما الطعام والماء للنبي وأبيها أثناء اختبائهما في غار ثور.",
    keyContributions: [
      "ساعدت النبي وأباها أثناء الهجرة بنقل الطعام والماء إلى غار ثور",
      "تحملت تهديدات وإساءات أبي جهل عندما سألها عن مكان أبيها",
      "زوجة الزبير بن العوام وأم عبد الله بن الزبير",
      "عاشت حتى بلغت مائة سنة وشهدت استشهاد ابنها عبد الله",
      "مثال للشجاعة والصبر والثبات على المبادئ",
    ],
    battles: [],
    isKhalifah: false,
    isAsharah: false,
    isFemale: true,
  },
  {
    name: "بلال بن رباح",
    title: "المؤذن الأول، من السابقين للإسلام",
    description:
      "كان عبداً حبشياً أعتقه أبو بكر بعد أن تعرض للتعذيب الشديد بسبب إسلامه. اختاره النبي محمد ليكون أول مؤذن في الإسلام. عرف بصوته الجميل وإخلاصه.",
    keyContributions: [
      "أول مؤذن في الإسلام",
      "تحمل التعذيب الشديد في مكة ولم يتخل عن إيمانه",
      "كان من المقربين للنبي وخازن بيت المال",
      "شارك في جميع الغزوات مع النبي",
      "رمز للمساواة في الإسلام وتجاوز الحواجز العرقية",
    ],
    battles: ["بدر", "أحد", "الخندق", "خيبر", "فتح مكة"],
    isKhalifah: false,
    isAsharah: false,
    isFemale: false,
  },
  {
    name: "أبو هريرة",
    title: "راوي الحديث، حافظ السنة النبوية",
    description:
      "أسلم في السنة السابعة للهجرة ولازم النبي لمدة أربع سنوات. على الرغم من قصر صحبته، فقد روى أكبر عدد من الأحاديث النبوية (5374 حديثاً). كان ذا ذاكرة استثنائية.",
    keyContributions: [
      "روى أكبر عدد من الأحاديث النبوية",
      "كرس حياته لحفظ ونشر السنة النبوية",
      "علم المئات من التابعين",
      "عمل والياً على البحرين في عهد عمر",
      "عرف بتقواه وورعه وحبه الشديد للنبي",
    ],
    battles: ["خيبر", "فتح مكة"],
    isKhalifah: false,
    isAsharah: false,
    isFemale: false,
  },
]

