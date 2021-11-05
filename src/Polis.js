import { useEffect, useState } from "react";

const Polis = ({ urlLoader, pageId, siteId, site }) => {
  const [loaded, setLoaded] = useState(false);
  console.log(urlLoader, pageId, siteId, site);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = urlLoader;
    script.async = true;
    document.body.appendChild(script);
    setLoaded(true);
    return () => {
      document.body.removeChild(script);
      setLoaded(false);
    };
  }, []);

  return (
    <main className="flex-auto">
      <div className="p-5 flex flex-col w-full">
        <h1 className="w-full text-center text-polisBlue text-4xl flex flex-col">
          <span>y vos, </span>
          <span className="font-black mt-1">¿QUÉ PENSÁS?</span>
        </h1>
        <h2 className="pt-3 text-center text-gray-600">Te invitamos a responder estas preguntas y al finalizar vas a poder conocer en qué grupo de opinión estás.</h2>
      </div>
      {!loaded && <div>Cargando...</div>}
      {loaded && (
        <div
          id="polisDiv"
          data-page_id={pageId}
          data-site_id={siteId}
          data-parent_url={site}
          className={"polis pb-10 h-full"}
          data-border={0}
        ></div>
      )}
    </main>
  );
};

export default Polis;
