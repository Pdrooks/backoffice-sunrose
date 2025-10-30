import { NextResponse } from "next/server";
import { authenticateUser } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Informe e-mail e senha para continuar." },
        { status: 400 }
      );
    }

    const user = authenticateUser(email, password);

    if (!user) {
      return NextResponse.json(
        { message: "Credenciais inválidas. Verifique os dados e tente novamente." },
        { status: 401 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Erro na rota de login", error);
    return NextResponse.json(
      { message: "Não foi possível processar o login." },
      { status: 500 }
    );
  }
}
