import { FooterGroup } from "@/components/contactSection/footerGroup";
import { links } from "@/data/data";
import { cn, getJoinedDate } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
export function Footer({ className }: { className?: string }) {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const options: Intl.DateTimeFormatOptions[] = [
      { month: "short", day: "numeric" },
      { hour: "numeric", minute: "numeric" },
    ];

    setCurrentTime(getJoinedDate(options));

    const interval = setInterval(() => {
      setCurrentTime(getJoinedDate(options));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <footer
      className={cn(
        "footer__links absolute flex  w-full flex-wrap   px-paddingX mix-blend-difference ",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-maxWidth gap-0 md:gap-12">
        <FooterGroup
          title="HORA LOCAL"
          className="hidden md:block"
          links={[{ href: "", text: currentTime }]}
        />
        <FooterGroup
          className="hidden md:block"
          title="TELÉFONO"
          links={[{ href: "", text: "+51 961 320 273" }]}
        />

        <FooterGroup
          title="REDES SOCIALES"
          className="md:ml-auto"
          isMagnetic={true}
          links={[
            { href: links.email, text: "Email" },
            { href: links.github, text: "Github" },
            { href: links.linkedin, text: "Linkedin" },
          ]}
        />
      </div>
    </footer>
  );
}
