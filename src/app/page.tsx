import Container from "./components/Container";

const HomePage = () => {
  return (
    <>
      <h1 className="text-center text-2xl font-bold text-white mt-16 uppercase md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
        Información de las tasa mas importantes del Dólar En Venezuela
      </h1>
      <br />
      <br />
      <br />
      <br />
      <main className="container mx-auto px-4">
        <Container />
      </main>
    </>
  );
};

export default HomePage;
