import { AppShell } from "@/components/layout/AppShell";
import { LineChartCard } from "@/components/charts/LineChartCard";
import { InfoCard } from "@/components/ui/InfoCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getReportDescriptions, getTicketMedioSeries } from "@/lib/reports";
import styles from "../report.module.css";

const series = getTicketMedioSeries();
const descriptions = getReportDescriptions();
const labels = series.map((item) => item.label);
const values = series.map((item) => item.value);

const topMonths = [...series]
  .sort((a, b) => b.value - a.value)
  .slice(0, 3);

export default function TicketMedioReport() {
  return (
    <AppShell backHref="/dashboard">
      <SectionTitle>Relatório mensal do ticket médio</SectionTitle>
      <div className={styles.layout}>
        <div>
          <LineChartCard
            title="Ticket Médio Mensal (R$)"
            labels={labels}
            values={values}
            accentColor="var(--accent-amber)"
          />
        </div>
        <div className={styles.infoStack}>
          <InfoCard title="IOREN IPSUN">
            <p>{descriptions.ticketMedio}</p>
          </InfoCard>
          <InfoCard title="Meses com melhor ticket">
            <ul>
              {topMonths.map((month) => (
                <li key={month.label}>
                  {month.label}: R$ {month.value.toLocaleString("pt-BR")}
                </li>
              ))}
            </ul>
          </InfoCard>
        </div>
      </div>
    </AppShell>
  );
}
