import { AppShell } from "@/components/layout/AppShell";
import { SidebarMenu } from "@/components/layout/SidebarMenu";
import { InfoCard } from "@/components/ui/InfoCard";
import { TransactionHighlights } from "@/components/dashboard/TransactionHighlights";
import styles from "./dashboard.module.css";

const menuItems = [
  { label: "Relatório mensal de faturamento", href: "/dashboard/relatorio-faturamento" },
  { label: "Relatório mensal do ticket médio", href: "/dashboard/relatorio-ticket-medio" },
  { label: "Relatório mensal de unidades de venda", href: "/dashboard/relatorio-unidades" },
  { label: "Relatório mensal de venda geográfica", href: "/dashboard/relatorio-geografico" },
  { label: "Visualizar todos", href: "/dashboard/relatorios-gerais" }
];

export default function DashboardHome() {
  return (
    <AppShell
      sidebar={<SidebarMenu items={menuItems} />}
    >
      <div className={styles.infoGrid}>
        <InfoCard title="IOREN IPSUN">
          <div>
            <p>
              Utilize os botões ao lado para navegar pelos relatórios disponibilizados
              para o backoffice da Sunrose. Cada painel foi projetado para replicar o
              visual enviado, com ênfase em clareza e consistência com a identidade da
              marca.
            </p>
            <TransactionHighlights />
          </div>
        </InfoCard>
        <div className={styles.emptyPanel}>IOREN IPSUN</div>
      </div>
    </AppShell>
  );
}
