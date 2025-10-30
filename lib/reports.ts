import {
  geoRevenueSeries,
  monthlyRevenueSeries,
  reportDescriptions,
  ticketMedioSeries,
  transactions,
  unitsSoldSeries
} from "./data";

export const getMonthlyRevenueSeries = () => monthlyRevenueSeries;

export const getTicketMedioSeries = () => ticketMedioSeries;

export const getUnitsSoldSeries = () => unitsSoldSeries;

export const getGeoRevenueSeries = () => geoRevenueSeries;

export const getTransactions = () => transactions;

export const getReportDescriptions = () => reportDescriptions;

export const getChannelTotals = () => {
  return transactions.reduce<Record<string, number>>((acc, transaction) => {
    acc[transaction.channel] = (acc[transaction.channel] ?? 0) + transaction.amount;
    return acc;
  }, {});
};

export const getAnnualSummary = () => {
  const revenue = monthlyRevenueSeries.reduce((sum, item) => sum + item.value, 0);
  const ticket =
    ticketMedioSeries.reduce((sum, item) => sum + item.value, 0) /
    ticketMedioSeries.length;
  const units = unitsSoldSeries.reduce((sum, item) => sum + item.value, 0);
  return {
    revenue,
    ticket,
    units
  };
};
