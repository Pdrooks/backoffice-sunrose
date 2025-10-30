"use client";

import clsx from "clsx";
import styles from "./InfoCard.module.css";

type InfoCardProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export const InfoCard = ({ title, children, className }: InfoCardProps) => {
  return (
    <article className={clsx(styles.card, className)}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>{children}</div>
    </article>
  );
};
