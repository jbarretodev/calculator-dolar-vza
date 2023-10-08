export interface RateDolar {
  today_dolar: number;
  monitor_dolar: number;
  bcv_dolar: number;
  binance_dolar: number;
}

export interface CheckRate
{
  amount: number,
  action: string
}

export interface RateDolarCalculated {
  dToday: number;
  dBcv: number;
  dCucuta: number;
}

export type ResponseExgange = {
  _id?: string;
  createdAt?: Date;
  currency?: string;
  icon?: string;
  name?: string;
  nameBase?: string;
  negativeVotes?: number;
  positiveVotes?: number;
  price?: number;
  price24H?: number;
  rank?: number;
  slug?: string;
  symbol?: string;
  type?: string;
  updatedAt?: Date;
};
