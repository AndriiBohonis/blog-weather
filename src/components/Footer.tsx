import Link from "next/link";
import { Fragment } from "react";

const footerLinks = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Subscription Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="mt-10">
      <div className="app-container mx-auto py-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col md:flex-row gap-2 ld:gap-6 items-center">
          {footerLinks.map((link, index) => (
            <Fragment key={link.label}>
              {index > 0 && (
                <span className="border-l border-accent-gray h-4 self-center hidden md:block" />
              )}
              <Link href={link.href} className="text-sm text-accent-gray px-2">
                {link.label}
              </Link>
            </Fragment>
          ))}
        </div>
        <div className="text-md flex flex-col items-center lg:flex-row text-accent-gray">
          <span>©Copyright © 2020 PlantIn.</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
