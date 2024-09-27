import React from "react";
import { useTranslations } from "next-intl";
// import LocaleSwitcher from "./LocaleSwitcher";
import NavigationLink from "./NavigationLink";
import LocaleSwitcher from "./LocaleSwitcher";

const Navigation = () => {
  const t = useTranslations("Navigation");

  return (
    <div className="bg-slate-850">
      <nav className="container flex justify-between p-2 text-white">
        <div>
          <NavigationLink href="/">{t("home")}</NavigationLink>
          <NavigationLink href="/pathnames">{t("pathnames")}</NavigationLink>
        </div>
        <LocaleSwitcher />
      </nav>
    </div>
  );
};

export default Navigation;
