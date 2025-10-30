"use client";

import clsx from "clsx";
import Link from "next/link";
import styles from "./MenuButton.module.css";

type MenuButtonProps = {
  label: string;
  href: string;
  className?: string;
};

export const MenuButton = ({ label, href, className }: MenuButtonProps) => {
  return (
    <Link href={href} className={clsx(styles.button, className)}>
      {label}
    </Link>
  );
};
