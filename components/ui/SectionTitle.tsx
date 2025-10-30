"use client";

import clsx from "clsx";
import styles from "./SectionTitle.module.css";

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return <span className={clsx(styles.wrapper, className)}>{children}</span>;
};
