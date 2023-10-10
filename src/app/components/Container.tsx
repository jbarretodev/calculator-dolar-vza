"use client";
import { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import dayjs from "dayjs";
import { RateDolar } from "../types";
import { fetchRateDolar } from "../request";
import { ResponseExgange } from "../types";
import Calculator from "./Calculator";

const Container = () => {
  const day = dayjs();
  const [rateDolar, setRateDolar] = useState<RateDolar>({
    today_dolar: 0,
    monitor_dolar: 0,
    bcv_dolar: 0,
    binance_dolar: 0,
  });

  useEffect(() => {
    fetchRateDolar("https://exchange.vcoud.com/coins/latest", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res: ResponseExgange[] | undefined) => {
      if (res) {
        const listIdPlatformValid: string[] = [
          "5d5dfaa6639f395c7fd11d13",
          "5d5dfaa6639f395c7fd11d16",
          "5d5e08bb639f395c7fd11da9",
          "6074ce4911a4ee4648eb7e92",
        ];

        const platformValidRates = res.filter((item: ResponseExgange) => {
          return listIdPlatformValid.includes(item._id as string);
        });

        const state: RateDolar = {
          bcv_dolar: 0,
          binance_dolar: 0,
          monitor_dolar: 0,
          today_dolar: 0,
        };

        for (let platform of platformValidRates) {
          if (platform._id === "5d5dfaa6639f395c7fd11d13") {
            state.monitor_dolar = platform.price as number;
          }

          if (platform._id === "5d5dfaa6639f395c7fd11d16") {
            state.today_dolar = platform.price as number;
          }

          if (platform._id === "5d5e08bb639f395c7fd11da9") {
            state.bcv_dolar = platform.price as number;
          }

          if (platform._id === "6074ce4911a4ee4648eb7e92") {
            state.binance_dolar = platform.price as number;
          }
        }

        setRateDolar(state);
      }
    });
  }, []);

  return (
    <>
      <Card className="w-3/4 mx-auto">
        <div className="grid xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 ">
          <section>
            <h5 className="text-2xl text-center tracking-tight text-gray-900">
              <p>
                Resultado de las diferentes tasas del Dolar en Venzuela para
                fecha:{" "}
                <span className="font-bold"> {day.format("DD/MM/YYYY")}</span>
              </p>
            </h5>
            <div className="mt-2 text-3xl text-black">
              <p>
                <span className="font-bold">Tasa BCV: </span>
                {rateDolar.bcv_dolar}
              </p>
              <p>
                <span className="font-bold">Tasa Today: </span>
                {rateDolar.today_dolar}
              </p>
              <p>
                <span className="font-bold">Tasa Binance: </span>
                {rateDolar.binance_dolar}
              </p>
              <p>
                <span className="font-bold">Tasa Monitor: </span>
                {rateDolar.monitor_dolar}
              </p>
            </div>
          </section>
          <section className="text-black">
            <Calculator rate={rateDolar} />
          </section>
        </div>
      </Card>
    </>
  );
};

export default Container;
