import { Heart } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-card">
      <div className="container mx-auto py-6 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">بوابة الإسلام</h3>
            <p className="text-sm text-muted-foreground">مصدر شامل لتعلم الإسلام، أركانه، الصحابة، التاريخ والصلاة.</p>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">المصادر</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/pillars" className="text-sm text-muted-foreground hover:text-foreground">
                  أركان الإسلام
                </Link>
              </li>
              <li>
                <Link href="/pillars#faith" className="text-sm text-muted-foreground hover:text-foreground">
                  أركان الإيمان
                </Link>
              </li>
              <li>
                <Link href="/companions" className="text-sm text-muted-foreground hover:text-foreground">
                  الصحابة
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">التاريخ</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/battles" className="text-sm text-muted-foreground hover:text-foreground">
                  الغزوات الإسلامية
                </Link>
              </li>
              <li>
                <Link href="/battles#early" className="text-sm text-muted-foreground hover:text-foreground">
                  العصر الإسلامي المبكر
                </Link>
              </li>
              <li>
                <Link href="/battles#medieval" className="text-sm text-muted-foreground hover:text-foreground">
                  العصور الوسطى
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">الصلاة</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/prayer" className="text-sm text-muted-foreground hover:text-foreground">
                  كيفية الصلاة
                </Link>
              </li>
              <li>
                <Link href="/prayer#times" className="text-sm text-muted-foreground hover:text-foreground">
                  أوقات الصلاة
                </Link>
              </li>
              <li>
                <Link href="/prayer#supplications" className="text-sm text-muted-foreground hover:text-foreground">
                  الأدعية
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 pt-4 border-t">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} بوابة التعليم الإسلامي</p>
          <p className="flex items-center text-sm text-muted-foreground mt-2 sm:mt-0">
            صنع بـ <Heart className="w-4 h-4 mx-1 text-primary" /> للأمة الإسلامية
          </p>
        </div>
      </div>
    </footer>
  )
}

