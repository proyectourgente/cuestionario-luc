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
    <main className="flex-auto mt-10 md:mt-16">
      <div className="px-5 pt-10 flex flex-col w-full">
        <h1 className="w-full text-center text-2xl md:text-4xl justify-center flex md:flex-col">
          <span className="mr-2  bg-gradient-to-b to-rosado from-azul text-gradient">y vos, </span>
          <span className="font-black bg-gradient-to-b to-rosado from-azul text-gradient  mt-1">¿QUÉ PENSÁS?</span>
        </h1>
        <h2 className="pt-3 text-center text-gray-600">Opiná sobre algunos comentarios sobre la LUC y descubrí en qué grupo de opinión estás.</h2>
      </div>
      {!loaded && <div>Cargando...</div>}
      {loaded && (
        <div
          id="polisDiv"
          data-page_id={pageId}
          data-site_id={siteId}
          data-parent_url={site}
          className={"polis h-full"}
          data-border={0}
        ></div>
      )}
    </main>
  );
};

export default Polis;
