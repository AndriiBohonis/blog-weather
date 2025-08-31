import { FC, useEffect } from "react";
import Link from "next/link";
import { navLinks } from "@/utils/navLinks";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Sidebar: FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed z-50 top-[60px] right-0 h-screen w-full sm:w-full bg-white transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <nav className="flex flex-col">
        {navLinks.map(link => (
          <Link
            key={link.label}
            className="px-6 py-4 hover:bg-gray-100"
            href={link.href}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};
