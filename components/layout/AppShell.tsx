"use client";

import clsx from "clsx";
import styles from "./AppShell.module.css";
import { DashboardHeader } from "./DashboardHeader";

type AppShellProps = {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  backHref?: string;
};

export const AppShell = ({ children, sidebar, backHref }: AppShellProps) => {
  return (
    <div className={styles.layout}>
      <DashboardHeader backHref={backHref} />
      <div className={styles.inner}>
        {sidebar ? (
          <div className={styles.withSidebar}>
            <aside className={styles.sidebar}>{sidebar}</aside>
            <section className={clsx(styles.content)}>{children}</section>
          </div>
        ) : (
          <div className={styles.content}>{children}</div>
        )}
      </div>
    </div>
  );
};
