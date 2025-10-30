"use client";

import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useAuth } from "@/components/providers/AuthProvider";
import styles from "./DashboardHeader.module.css";

type DashboardHeaderProps = {
  backHref?: string;
};

export const DashboardHeader = ({ backHref }: DashboardHeaderProps) => {
  const { user } = useAuth();
  const displayName = user?.name ?? "Nome do Usuário";

  return (
    <header className={styles.header}>
      {backHref ? (
        <Link href={backHref} className={styles.backButton} aria-label="Voltar">
          <FiArrowLeft />
        </Link>
      ) : null}
      <div className={styles.brand}>
        <span>SUN ROSE</span>
        <span className={styles.brandSubtitle}>Beach & Resort Wear</span>
      </div>
      <div className={styles.user}>
        <span className={styles.userAvatar}>
          <HiOutlineUserCircle />
        </span>
        <span>{displayName}</span>
      </div>
      <div className={styles.right}>POWER BI</div>
    </header>
  );
};
