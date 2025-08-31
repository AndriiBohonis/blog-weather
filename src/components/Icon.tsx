"use client";

import Profile from "@/icons/profile.svg";
import Logo from "@/icons/logo.svg";
import Search from "@/icons/search.svg";
import Arrow from "@/icons/arrow.svg";
import NewBadge from "@/icons/new_badge.svg";
import Menu from "@/icons/menu.svg";
import { SVGProps } from "react";

const icons = {
  profile: Profile,
  logo: Logo,
  search: Search,
  arrow: Arrow,
  new_badge: NewBadge,
  menu: Menu,
};

export type IconName = keyof typeof icons;

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
  className?: string;
}

export default function Icon({ name, className, ...props }: IconProps) {
  const Component = icons[name];
  if (!Component) return null;

  return <Component className={className} {...props} />;
}
