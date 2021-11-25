import "./App.css";

function Who() {
  return (
    <div className="p-10 mt-10 md:mt-16 flex flex-col max-w-2xl mx-auto flex-grow">
      <h1 className="font-black text-3xl text-polisBlue">¿Quiénes Somos?</h1>
      <h2 className="py-5 font-bold text-xl text-polisBlue">Proyecto Urgente</h2>
      <div>
      
      <p className="my-2">
        Somos un grupo de mujeres y hombres del ámbito académico y profesional
        que buscan aplicar ciencia y tecnología al debate público con acciones
        que sin ser urgentes, nos parecen importantes.
      </p>
      <p className="my-2">
        La primera iniciativa del grupo fue disponibilizar un sitio web que
        comparaba palabra a palabra los cambios introducidos por la Ley de
        Urgente Consideración para transparentar las consecuencias de una ley
        extensa y compleja.
      </p>
      <p className="my-2">
        Ahora nos planteamos recolectar, mediante un cuestionario en internet,
        las opiniones de las y los uruguayos sobre los diferentes temas de la
        LUC, intentando comprender las complejidades que construyen posiciones
        en un debate que nos afecta a todas y todos.
      </p>
      </div>
      <h2 className="pt-5 pb-3 font-bold text-xl text-polisBlue">Nosotros</h2>
      <ul>
        <li className="my-2">Cecilia Passalacqua</li>
        <li className="my-2">Cristian Callero</li>
        <li className="my-2">Damián Pintos</li>
        <li className="my-2">Ivana Otero</li>
        <li className="my-2">Lorena Etcheverry</li>
        <li className="my-2">Marcelo Fiori</li>
        <li className="my-2">Matías Rodales</li>
        <li className="my-2">Raúl Speroni</li>
        <li className="my-2">Sebastián Aguiar</li>
        <li className="my-2">Sebastián Gadea</li>
        <li className="my-2">Verónica Nin</li>
      </ul>
    </div>
  );
}

export default Who;
