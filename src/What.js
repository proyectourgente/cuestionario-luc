import "./App.css";

function What() {
  return (
    <div className="p-10 mt-10 md:mt-16 flex flex-col max-w-2xl mx-auto">
      <h1 className="font-black text-3xl text-polisBlue">¿Cómo Funciona?</h1>

      <div>
        <p className="pt-5 my-2">
          El software utilizado para el cuestionario y análisis de datos se basa
          en el proyecto open source{" "}
          <a
            href="https://pol.is/"
            target="_blank"
            rel="noreferrer"
            className="text-polisBlue"
          >
            Pol.is
          </a>
          .
        </p>{" "}
        <p className="my-2">
          Las opiniones de cada participante sobre cada afirmación se almacenan
          en una gran matriz (participantes * afirmaciones = matriz dispersa de
          opiniones). Decimos que la matriz es dispersa porque no es obligatorio
          que cada participante opine sobre todas las afirmaciones.
        </p>
        <p className="my-2">
          Luego, sobre esta matriz se computan indicadores y se aplican
          algoritmos. Entre éstos últimos se destaca el uso de{" "}
          <a
            className="text-polisBlue"
            href="https://en.wikipedia.org/wiki/Principal_component_analysis"
            target="_blank"
            rel="noreferrer"
          >
            Análisis de Componentes Principales
          </a>{" "}
          (PCA por sus siglas en inglés) para comparar y posicionar a cada
          participante respecto a los demás en el espacio de las opiniones.
          Quienes se encuentran cercanos en este espacio tienden a estar de
          acuerdo, y más alejados si tienden a estar en desacuerdo.
        </p>{" "}
        <p className="my-2">
          {" "}
          También se utilizan técnicas de agrupamiento (
          <a
            className="text-polisBlue"
            href="https://en.wikipedia.org/wiki/Cluster_analysis"
            target="_blank"
            rel="noreferrer"
          >
            clustering
          </a>
          ) para detectar grupos de participantes que opinan en forma similar.
        </p>
      </div>
    </div>
  );
}

export default What;
