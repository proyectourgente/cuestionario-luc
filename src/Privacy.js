import "./App.css";

function Privacy() {
  return (
    <div className="p-10 mt-10 md:mt-16 flex flex-col max-w-2xl mx-auto">
      <h1 className="font-black text-3xl text-polisBlue">Privacidad y Datos</h1>

      <div>
        <p className="pt-5 my-2">
          El cuestionario puede responderse de forma anónima o logueandose con
          facebook o twitter.{" "}
        </p>
        <p className="my-2">
          Cuando un usuario se loguea con redes sociales Pol.is almacena algunos
          datos como el correo electrónico o el nombre de usuario.{" "}
        </p>
        <p className="my-2">
          Cuándo los usuarios responden de forma anónima se guardan en la sesión
          del navegador las respuestas ya contestadas.{" "}
        </p>
        <p className="my-2">
          En ningún caso estos datos serán usados con otro objetivo que no sea
          brindar una mejor experiencia de usuario.
        </p>
        <p className="my-2">
          {" "}
          La forma más segura y privada de contestar este cuestionario es desde
          una pestaña de incógnito.
        </p>
        <p className="my-2">
          Uno de los objetivos de este proyecto es el de disponibilizar, como
          datos abiertos, la matriz de opiniones para permitir que la comunidad
          realice análisis de estos datos, más allá de las visualizaciones que
          se presentan en el sitio web.{" "}
        </p>
        <p className="my-2">
          En todos los casos, cualquier información que se haga pública, ya sean
          visualizaciones, análisis o datos en crudo será disociada de la
          información de los participantes, aún si estos usaron redes sociales
          para responder.
        </p>
      </div>
    </div>
  );
}

export default Privacy;
