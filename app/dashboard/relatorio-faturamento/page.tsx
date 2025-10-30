import { AppShell } from "@/components/layout/AppShell";
import { InfoCard } from "@/components/ui/InfoCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { BarChartCard } from "@/components/charts/BarChartCard";
import {
  getChannelTotals,
  getMonthlyRevenueSeries,
  getReportDescriptions
} from "@/lib/reports";
import styles from "../report.module.css";

const revenueSeries = getMonthlyRevenueSeries();
const labels = revenueSeries.map((item) => item.label);
const values = revenueSeries.map((item) => item.value);
const channels = getChannelTotals();
const descriptions = getReportDescriptions();

const topChannels = Object.entries(channels)
  .sort(([, a], [, b]) => b - a)
  .slice(0, 3);

export default function FaturamentoReport() {
  return (
    <AppShell backHref="/dashboard">
      <SectionTitle>Relatório mensal de faturamento</SectionTitle>
      <div className={styles.layout}>
        <div>
          <BarChartCard
            title="Relatório Mensal de Faturamento (mil R$)"
            labels={labels}
            values={values}
            accentColor="var(--accent-blue)"
            currency
          />
        </div>
        <div className={styles.infoStack}>
          <InfoCard title="IOREN IPSUN">
            <p>{descriptions.faturamento}</p>
          </InfoCard>
          <InfoCard title="Canais em Destaque">
            <ul>
              {topChannels.map(([channel, amount]) => (
                <li key={channel}>
                  <strong>{channel}</strong>: R$ {amount.toLocaleString("pt-BR")}
                </li>
              ))}
            </ul>
          </InfoCard>
        </div>
      </div>
    </AppShell>
  );
}
