"use client";

import { useEffect, useMemo, useState } from "react";

type Transaction = {
  id: string;
  userId: string;
  amount: number;
  type: string;
  status: string;
  date: string;
  channel: string;
};

type TransactionResponse = {
  transactions: Transaction[];
};

export const TransactionHighlights = () => {
  const [data, setData] = useState<Transaction[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("/api/transactions");
        if (!response.ok) {
          throw new Error("Falha ao recuperar transações.");
        }
        const payload: TransactionResponse = await response.json();
        setData(payload.transactions);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro inesperado.");
      }
    };

    fetchTransactions();
  }, []);

  const approvedTotal = useMemo(
    () =>
      data
        .filter((item) => item.status === "Aprovada")
        .reduce((sum, item) => sum + item.amount, 0),
    [data]
  );

  const pendingCount = useMemo(
    () => data.filter((item) => item.status === "Pendente").length,
    [data]
  );

  const latestDate = useMemo(() => {
    if (!data.length) {
      return null;
    }
    return data.reduce<Date | null>((latest, item) => {
      const candidate = new Date(item.date);
      if (!latest || candidate > latest) {
        return candidate;
      }
      return latest;
    }, null);
  }, [data]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!data.length) {
    return <p>Carregando dados financeiros...</p>;
  }

  return (
    <div>
      <p>
        Total aprovado: <strong>R$ {approvedTotal.toLocaleString("pt-BR")}</strong>
      </p>
      <p>
        Transações pendentes: <strong>{pendingCount}</strong>
      </p>
      <p>
        Última atualização:{" "}
        {latestDate ? latestDate.toLocaleDateString("pt-BR") : "Sem registros"}
      </p>
    </div>
  );
};
