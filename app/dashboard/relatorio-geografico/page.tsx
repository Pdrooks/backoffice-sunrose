import { AppShell } from "@/components/layout/AppShell";
import { BarChartCard } from "@/components/charts/BarChartCard";
import { InfoCard } from "@/components/ui/InfoCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getGeoRevenueSeries, getReportDescriptions } from "@/lib/reports";
import styles from "../report.module.css";

const series = getGeoRevenueSeries();
const labels = series.map((item) => item.label);
const values = series.map((item) => item.value);
const total = values.reduce((sum, value) => sum + value, 0);
const descriptions = getReportDescriptions();

export default function GeograficoReport() {
  return (
    <AppShell backHref="/dashboard">
      <SectionTitle>Relatório mensal de venda geográfica</SectionTitle>
      <div className={styles.layout}>
        <div>
          <BarChartCard
            title="Participação por Região (mil R$)"
            labels={labels}
            values={values}
            accentColor="var(--sand-600)"
            currency
          />
        </div>
        <div className={styles.infoStack}>
          <InfoCard title="IOREN IPSUN">
            <p>{descriptions.geografia}</p>
          </InfoCard>
          <InfoCard title="Participação no total">
            <ul>
              {series.map((item) => (
                <li key={item.label}>
                  {item.label}: {(item.value / total * 100).toFixed(1)}%
                </li>
              ))}
            </ul>
          </InfoCard>
        </div>
      </div>
    </AppShell>
  );
}
