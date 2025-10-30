import { NextResponse } from "next/server";
import {
  getAnnualSummary,
  getGeoRevenueSeries,
  getMonthlyRevenueSeries,
  getReportDescriptions,
  getTicketMedioSeries,
  getUnitsSoldSeries
} from "@/lib/reports";

export async function GET() {
  const payload = {
    summaries: getAnnualSummary(),
    descriptions: getReportDescriptions(),
    revenue: getMonthlyRevenueSeries(),
    ticketMedio: getTicketMedioSeries(),
    units: getUnitsSoldSeries(),
    geo: getGeoRevenueSeries()
  };

  return NextResponse.json(payload);
}
