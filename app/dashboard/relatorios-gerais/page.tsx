import { AppShell } from "@/components/layout/AppShell";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { LineChartCard } from "@/components/charts/LineChartCard";
import { BarChartCard } from "@/components/charts/BarChartCard";
import {
  getAnnualSummary,
  getMonthlyRevenueSeries,
  getReportDescriptions,
  getTicketMedioSeries,
  getUnitsSoldSeries
} from "@/lib/reports";
import styles from "./overview.module.css";

const descriptions = getReportDescriptions();
const revenueSeries = getMonthlyRevenueSeries();
const ticketSeries = getTicketMedioSeries();
const unitsSeries = getUnitsSoldSeries();
const revenueLabels = revenueSeries.map((item) => item.label);
const revenueValues = revenueSeries.map((item) => item.value);
const ticketValues = ticketSeries.map((item) => item.value);
const unitsValues = unitsSeries.map((item) => item.value);
const annualSummary = getAnnualSummary();
const revenueTotal = annualSummary.revenue;
const ticketAverage = Math.round(annualSummary.ticket);
const unitsTotal = annualSummary.units;

export default function RelatoriosGerais() {
  return (
    <AppShell backHref="/dashboard">
      <SectionTitle>Relatórios consolidados</SectionTitle>
      <div className={styles.heroGrid}>
        <div className={styles.heroCard}>
          <span className={styles.heroSubtitle}>Sunrose Beachwear Ltda</span>
          <h2 className={styles.heroTitle}>Relatório Mensal de Faturamento</h2>
          <div className={styles.heroBadges}>
            <span className={styles.badge}>Produto: Biquínis</span>
            <span className={styles.badge}>Ano: 2025</span>
            <span className={styles.badge}>
              Total: R$ {revenueTotal.toLocaleString("pt-BR")}
            </span>
          </div>
        </div>
        <div className={styles.analysisCard}>
          <h3>Análise dos Gráficos</h3>
          <ul>
            <li>{descriptions.faturamento}</li>
            <li>{descriptions.ticketMedio}</li>
            <li>{descriptions.unidades}</li>
          </ul>
        </div>
      </div>
      <div className={styles.chartsRow}>
        <LineChartCard
          title="Faturamento Mensal (mil R$)"
          labels={revenueLabels}
          values={revenueValues}
          accentColor="var(--accent-amber)"
        />
        <LineChartCard
          title="Ticket Médio (R$)"
          labels={ticketSeries.map((item) => item.label)}
          values={ticketValues}
          accentColor="var(--accent-blue)"
        />
        <BarChartCard
          title="Unidades Vendidas"
          labels={unitsSeries.map((item) => item.label)}
          values={unitsValues}
          accentColor="var(--accent-green)"
        />
      </div>
      <div className={styles.summary}>
        <div className={styles.summaryItem}>
          <strong>R$ {revenueTotal.toLocaleString("pt-BR")}</strong>
          <span>Faturamento total no período</span>
        </div>
        <div className={styles.summaryItem}>
          <strong>R$ {ticketAverage.toLocaleString("pt-BR")}</strong>
          <span>Ticket médio anual</span>
        </div>
        <div className={styles.summaryItem}>
          <strong>{unitsTotal.toLocaleString("pt-BR")}</strong>
          <span>Unidades comercializadas</span>
        </div>
      </div>
    </AppShell>
  );
}
