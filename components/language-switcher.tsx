"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "hi" : "en")}
      className="text-xs px-3 min-h-9 bg-transparent hover:bg-muted"
    >
      {language === "en" ? "हिंदी" : "English"}
    </Button>
  )
}
