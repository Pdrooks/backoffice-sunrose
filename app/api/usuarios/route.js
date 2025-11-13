import { NextResponse } from "next/server";

export async function GET() {
  const usuarios = [
    { id_usuario: 1, nome: "Pedro", email: "pedro@email.com", cidade: "São Paulo", estado: "SP" },
    { id_usuario: 2, nome: "Maria", email: "maria@email.com", cidade: "Rio de Janeiro", estado: "RJ" },
    { id_usuario: 3, nome: "João", email: "joao@email.com", cidade: "Belo Horizonte", estado: "MG" },
  ];

  return NextResponse.json(usuarios);
}
