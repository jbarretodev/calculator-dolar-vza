import { ResponseExgange } from "../types";

export const fetchRateDolar = async (
  url: string,
  options?: RequestInit
): Promise<ResponseExgange[] | undefined> => {
  try {
    const response: Response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error al realizar la solicitud: ${response.statusText}`);
    }

    const listRate = (await response.json()) as ResponseExgange[];

    if (listRate.length < 1) return undefined;

    return listRate || undefined;
  } catch (error) {
    throw new Error(`Error en la solicitud: ${error}`);
  }
};
