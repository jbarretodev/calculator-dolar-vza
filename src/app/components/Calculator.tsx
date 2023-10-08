"use client";

import { RateDolar } from "../types";
import { Button, TextInput } from "flowbite-react";

const InfoDolar = ( { rate }: { rate: RateDolar } ) =>
{
  
  return (
    <>
      <section>
        <TextInput
          id="quantity"
          className="mb-3"
          placeholder="Cantidad de dolares a calcular"
          required
          shadow
          type="text"
        />
        <Button className="font-bold text-xl   w-full" gradientDuoTone="purpleToBlue" outline>
          <p>Calcular!</p>
        </Button>
      </section>
    </>
  );
};

export default InfoDolar;
