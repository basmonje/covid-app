export default function HeadingRender(texto) {
  // const text = texto.reduce(flatten, "");
  const withing = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const slug = withing.toLowerCase().replace(/\W/g, "-");
  return slug;
}
