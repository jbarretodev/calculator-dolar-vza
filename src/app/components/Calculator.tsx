"use client";
import { useState } from "react";
import { RateDolar, TypeOperation } from "../types";
import { Button, TextInput } from "flowbite-react";
import { RateDolarCalculated } from "../types";
import toast from "react-hot-toast";

const InfoDolar = ({
  operation,
  rate,
}: {
  rate: RateDolar;
  operation: TypeOperation;
}) => {
  const [quantity, setQuantity] = useState<string>("");
  const [result, setResult] = useState<RateDolarCalculated | undefined>();

  const calculateAmount = (quantity: number) => {
    if (operation.operation === "-") {
      toast.error("Error! Debe Seleccionar una operacion!");
      return false;
    }

    if (quantity > 0 && operation.operation === "0") {
      setResult({
        dolarToday: quantity * rate.today_dolar,
        dolarBcv: quantity * rate.bcv_dolar,
        dolarMonitor: quantity * rate.monitor_dolar,
        dolarBinance: quantity * rate.binance_dolar,
      });
    } else {
      setResult({
        dolarToday: quantity / rate.today_dolar,
        dolarBcv: quantity / rate.bcv_dolar,
        dolarMonitor: quantity / rate.monitor_dolar,
        dolarBinance: quantity / rate.binance_dolar,
      });
    }
  };

  return (
    <>
      <section>
        <br />
        <h2 className="font-bold text-3xl">Calculador de Dólares</h2>
        <p className="text-xl">Ingresa la cantidad que deseas calcular</p>
        <br />
        <br />
        <form>
          <TextInput
            id="quantity"
            className="mb-3"
            placeholder="Cantidad de dolares a calcular"
            required
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            shadow
            type="text"
          />
          <Button
            onClick={(e) => {
              e.preventDefault();
              calculateAmount(Number(quantity));
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
              Cantidad de dólares a calcular:
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
