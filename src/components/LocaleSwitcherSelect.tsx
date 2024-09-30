"use client";

import { useLocale } from "next-intl";
import { Link, Locale, usePathname } from "@/i18n/routing";

// Map locale codes to full language names
const localeNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch"
};

export default function LocaleSwitcherSelect() {
  return (
    <div className="flex gap-3 py-5">
      <LocaleLink locale="en" />
      <LocaleLink locale="de" />
    </div>
  );
}

function LocaleLink({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const isActive = useLocale() === locale;

  return (
    <Link
      className={
        isActive
          ? "bg-tertiary text-primary px-4 py-1 rounded-lg mr-2 hover:bg-primary hover:text-tertiary"
          : "bg-tertiary text-primary px-4 py-1 rounded-lg mr-2 hover:bg-primary hover:text-tertiary"
      }
      href={pathname}
      locale={locale}
    >
      {localeNames[locale]} {/* Display the full language name */}
    </Link>
  );
}
