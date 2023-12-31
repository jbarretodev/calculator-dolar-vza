"use client";
import { useState } from "react";
import { RateDolar } from "../types";
import { Button, TextInput } from "flowbite-react";
import { RateDolarCalculated } from "../types";

const InfoDolar = ({ rate }: { rate: RateDolar }) => {
  const [quantity, setQuantity] = useState<number>(0);
  const [result, setResult] = useState<RateDolarCalculated | undefined>();

  const calculateAmount = (quantity: number) => {
    if (quantity > 0) {
      setResult({
        dolarToday: quantity * rate.today_dolar,
        dolarBcv: quantity * rate.bcv_dolar,
        dolarMonitor: quantity * rate.monitor_dolar,
        dolarBinance: quantity * rate.binance_dolar,
      });
    }
  };

  return (
    <>
      <section>
        <h2 className="font-bold text-3xl">Calculador de Dolares</h2>
        <p className="text-xl">
          Ingresa la cantidad de dolares que deseas calcular
        </p>
        <br />
        <br />
        <form>
          <TextInput
            id="quantity"
            className="mb-3"
            placeholder="Cantidad de dolares a calcular"
            required
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            shadow
            type="text"
          />
          <Button
            onClick={(e) => {
              e.preventDefault();
              calculateAmount(quantity);
            }}
            className="font-bold text-xl w-full"
            gradientDuoTone="purpleToBlue"
            outline
          >
            <p>Calcular!</p>
          </Button>
        </form>
        <hr />
        {result && (
          <div className="font-bold">
            <p className="font-bold">
              Cantidad de dolares a calcular:
              <span className="text-2xl">{quantity}</span>
            </p>
            <br />
            <p>
              Tasa BCV:{" "}
              <span className="text-xl">
                {Number.parseFloat(result.dolarBcv.toString()).toFixed(2)}
              </span>
            </p>{" "}
            <p>
              Tasa Today:{" "}
              <span className="text-xl">
                {Number.parseFloat(result.dolarToday.toString()).toFixed(2)}
              </span>
            </p>{" "}
            <p>
              Tasa Binance:{" "}
              <span className="text-xl">
                {Number.parseFloat(result.dolarBinance.toString()).toFixed(2)}
              </span>
            </p>{" "}
            <p>
              Tasa Monitor:{" "}
              <span className="text-xl">
                {Number.parseFloat(result.dolarMonitor.toString()).toFixed(2)}
              </span>
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default InfoDolar;
