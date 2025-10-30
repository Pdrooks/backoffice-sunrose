import { NextResponse } from "next/server";
import { getTransactions } from "@/lib/reports";

export async function GET() {
  return NextResponse.json({
    transactions: getTransactions()
  });
}
