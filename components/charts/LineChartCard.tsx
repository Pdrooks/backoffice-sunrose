"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import styles from "./chart-card.module.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type LineChartCardProps = {
  title: string;
  labels: string[];
  values: number[];
  accentColor?: string;
};

export const LineChartCard = ({
  title,
  labels,
  values,
  accentColor = "var(--accent-amber)"
}: LineChartCardProps) => {
  const data = {
    labels,
    datasets: [
      {
        label: title,
        data: values,
        borderColor: accentColor,
        tension: 0.35,
        fill: false,
        pointBackgroundColor: accentColor,
        pointBorderColor: "#fff",
        pointBorderWidth: 3,
        pointRadius: 6
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
        borderWidth: 1
      }
    },
    scales: {
      x: {
        grid: {
          color: "rgba(155, 128, 103, 0.2)"
        }
      },
      y: {
        grid: {
          color: "rgba(155, 128, 103, 0.2)"
        },
        ticks: {
          callback: (value: string | number) => `R$ ${value}`
        }
      }
    }
  } as const;

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.chartWrapper}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};
