"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TooltipItem
} from "chart.js";
import { Bar } from "react-chartjs-2";
import styles from "./chart-card.module.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type BarChartCardProps = {
  title: string;
  labels: string[];
  values: number[];
  accentColor?: string;
  currency?: boolean;
};

export const BarChartCard = ({
  title,
  labels,
  values,
  accentColor = "var(--accent-green)",
  currency = false
}: BarChartCardProps) => {
  const data = {
    labels,
    datasets: [
      {
        label: title,
        data: values,
        backgroundColor: accentColor,
        borderRadius: 12,
        borderSkipped: false
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: "rgba(95, 75, 59, 0.92)",
        borderColor: "rgba(95, 75, 59, 0.6)",
        borderWidth: 1,
        callbacks: {
          label: (tooltipItem: TooltipItem<"bar">) => {
            const value = tooltipItem.raw as number;
            return currency ? `R$ ${value.toLocaleString("pt-BR")}` : value.toString();
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          color: "rgba(155, 128, 103, 0.2)"
        },
        ticks: {
          callback: (value: string | number) =>
            currency ? `R$ ${Number(value).toLocaleString("pt-BR")}` : value
        }
      }
    }
  } as const;

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.chartWrapper}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};
