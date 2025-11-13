import { NextResponse } from "next/server";

export async function GET() {
  const vendas = [
    { id_pedido: 101, nome_cliente: "José", email: "jose@email.com", data_compra: "2025-11-01", valor_total: 350.75, status: "Pago", id_usuario: 1 },
    { id_pedido: 102, nome_cliente: "Ana", email: "ana@email.com", data_compra: "2025-11-03", valor_total: 210.00, status: "Pendente", id_usuario: 2 },
    { id_pedido: 103, nome_cliente: "Carlos", email: "carlos@email.com", data_compra: "2025-11-04", valor_total: 499.90, status: "Pago", id_usuario: 3 },
  ];

  return NextResponse.json(vendas);
}
