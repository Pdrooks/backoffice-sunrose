import { AppShell } from "@/components/layout/AppShell";
import { BarChartCard } from "@/components/charts/BarChartCard";
import { InfoCard } from "@/components/ui/InfoCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getReportDescriptions, getUnitsSoldSeries } from "@/lib/reports";
import styles from "../report.module.css";

const series = getUnitsSoldSeries();
const descriptions = getReportDescriptions();
const labels = series.map((item) => item.label);
const values = series.map((item) => item.value);

const growth = values[values.length - 1] - values[0];
const average = Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);

export default function UnidadesReport() {
  return (
    <AppShell backHref="/dashboard">
      <SectionTitle>Relatório mensal de unidades de venda</SectionTitle>
      <div className={styles.layout}>
        <div>
          <BarChartCard title="Unidades Vendidas por Mês" labels={labels} values={values} />
        </div>
        <div className={styles.infoStack}>
          <InfoCard title="IOREN IPSUN">
            <p>{descriptions.unidades}</p>
          </InfoCard>
          <InfoCard title="Resumo rápido">
            <ul>
              <li>Crescimento anual: +{growth.toLocaleString("pt-BR")} peças</li>
              <li>Média mensal: {average.toLocaleString("pt-BR")} unidades</li>
              <li>Mês de pico: {labels[labels.length - 1]}</li>
            </ul>
          </InfoCard>
        </div>
      </div>
    </AppShell>
  );
}
