const loadPolis = (url, callback) => {
  const existingScript = document.getElementById("polisjs");
  if (!existingScript) {
    const script = document.createElement("script");
    script.src = url;
    script.id = "polisjs";
    document.body.appendChild(script);
    script.onload = () => {
      if (callback) callback();
    };
  }
  if (existingScript && callback) callback();
};
export default loadPolis;
