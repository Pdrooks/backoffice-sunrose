export type UserRecord = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "Administrador" | "Analista" | "Financeiro";
};

export type TransactionRecord = {
  id: string;
  userId: string;
  amount: number;
  type: "Crédito" | "Débito";
  status: "Aprovada" | "Pendente" | "Recusada";
  date: string;
  channel: "E-commerce" | "Loja Física" | "Marketplace";
};

export type ReportDataPoint = {
  label: string;
  value: number;
};

export const users: UserRecord[] = [
  {
    id: "u-001",
    name: "Pedro Diniz Pires",
    email: "pedro.diniz@sunrose.com",
    password: "sunrose123",
    role: "Administrador"
  },
  {
    id: "u-002",
    name: "Teste",
    email: "teste@sunrose.com",
    password: "teste",
    role: "Analista"
  },
  {
    id: "u-003",
    name: "Isabela Prado",
    email: "isabela.prado@sunrose.com",
    password: "resortwear",
    role: "Financeiro"
  }
];

export const transactions: TransactionRecord[] = [
  {
    id: "t-20250101",
    userId: "u-001",
    amount: 4800,
    type: "Crédito",
    status: "Aprovada",
    date: "2025-01-15",
    channel: "E-commerce"
  },
  {
    id: "t-20250207",
    userId: "u-002",
    amount: 3250,
    type: "Crédito",
    status: "Aprovada",
    date: "2025-02-07",
    channel: "Loja Física"
  },
  {
    id: "t-20250314",
    userId: "u-001",
    amount: 910,
    type: "Débito",
    status: "Pendente",
    date: "2025-03-14",
    channel: "Marketplace"
  },
  {
    id: "t-20250422",
    userId: "u-003",
    amount: 6780,
    type: "Crédito",
    status: "Aprovada",
    date: "2025-04-22",
    channel: "E-commerce"
  },
  {
    id: "t-20250504",
    userId: "u-002",
    amount: 2540,
    type: "Crédito",
    status: "Aprovada",
    date: "2025-05-04",
    channel: "Marketplace"
  },
  {
    id: "t-20250618",
    userId: "u-001",
    amount: 3120,
    type: "Crédito",
    status: "Recusada",
    date: "2025-06-18",
    channel: "E-commerce"
  }
];

export const monthlyRevenueSeries: ReportDataPoint[] = [
  { label: "Jan", value: 18 },
  { label: "Fev", value: 22 },
  { label: "Mar", value: 28 },
  { label: "Abr", value: 33 },
  { label: "Mai", value: 42 },
  { label: "Jun", value: 45 },
  { label: "Jul", value: 52 },
  { label: "Ago", value: 58 },
  { label: "Set", value: 63 },
  { label: "Out", value: 70 },
  { label: "Nov", value: 82 },
  { label: "Dez", value: 95 }
];

export const ticketMedioSeries: ReportDataPoint[] = [
  { label: "Jan", value: 240 },
  { label: "Fev", value: 248 },
  { label: "Mar", value: 256 },
  { label: "Abr", value: 252 },
  { label: "Mai", value: 262 },
  { label: "Jun", value: 270 },
  { label: "Jul", value: 278 },
  { label: "Ago", value: 272 },
  { label: "Set", value: 250 },
  { label: "Out", value: 258 },
  { label: "Nov", value: 242 },
  { label: "Dez", value: 275 }
];

export const unitsSoldSeries: ReportDataPoint[] = [
  { label: "Jan", value: 48 },
  { label: "Fev", value: 60 },
  { label: "Mar", value: 72 },
  { label: "Abr", value: 86 },
  { label: "Mai", value: 105 },
  { label: "Jun", value: 120 },
  { label: "Jul", value: 138 },
  { label: "Ago", value: 154 },
  { label: "Set", value: 162 },
  { label: "Out", value: 174 },
  { label: "Nov", value: 228 },
  { label: "Dez", value: 260 }
];

export const geoRevenueSeries: ReportDataPoint[] = [
  { label: "Nordeste", value: 35 },
  { label: "Sudeste", value: 42 },
  { label: "Sul", value: 28 },
  { label: "Centro-Oeste", value: 18 },
  { label: "Norte", value: 12 }
];

export const reportDescriptions = {
  faturamento:
    "O faturamento mensal demonstra o crescimento consistente das vendas ao longo do ano, com destaque para os meses de alta temporada.",
  ticketMedio:
    "O ticket médio indica estabilidade nas estratégias comerciais, com picos em campanhas promocionais e lançamentos de coleções.",
  unidades:
    "As unidades vendidas evidenciam a expansão progressiva da base de clientes e o desempenho sólido dos canais digitais.",
  geografia:
    "A análise geográfica aponta forte presença no Sudeste e Nordeste, reforçando o potencial de expansão nas demais regiões."
};
