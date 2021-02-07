import camelcaseKeys from "camelcase-keys";
import _ from "lodash";
import buildSlug from "../utils/buildSlug";

export async function useCorona() {
  try {
    const url =
      "https://raw.githubusercontent.com/javierlopeza/datos-coronavirus-chile/production/data/chile.json";
    const response = await fetch(url);
    const result = await response.json();

    // Desde nuestra respuesta tomaremos el objeto regiones,
    // para convertirlo en arreglo y agregar un nuevo valor llamado slug
    const { regiones } = result;
    // Con lodash convertimos el objeto en arregloo
    const arrayRegion = _.values(regiones);
    // Recorreremos el arreglo y agregaremos una nueva propiedad llamada 'slug' dentro del objeto.
    // con la funcion 'buildSlug' convertiremos el valor 'complete_name'
    // en un valor sin caracteres especiales y quitamos los espacios por guines simples, para utilizarlos como url.
    // Esto nos ayudara a encontrar la region mas rapido
    const region = arrayRegion.map((region) => {
      region.slug = buildSlug(region.complete_name);
      return region;
    });

    // Creamos un nuevo objeto para presentar nuestro propio orden, (muy similar a la anterior pero con leves cambios)
    const data = {
      confirmados: result.confirmados,
      activos: result.activos,
      fallecidos: result.fallecidos,
      series: result.series,
      regiones: region,
    };

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getRegionBySlug(slug) {
  try {
    const { regiones } = await useCorona();
    // Recorremos el array buscando el indice que necesitamos
    // segun corresponda a nuestro slug
    const regionIndex = regiones.findIndex(
      ({ slug: slugitem }) => slugitem === slug
    );
    const region = regiones[regionIndex];
    const { comunas } = region;
    const comunasArray = _.values(comunas);

    const comuna = comunasArray.map((com) => {
      com.slug = buildSlug(com.name);
      return com;
    });

    const values = {
      activos: region.activos,
      complete_name: region.complete_name,
      confirmados: region.confirmados,
      fallecidos: region.fallecidos,
      poblacion: region.poblacion,
      series: region.series,
      slug: region.slug,
      comunas: comuna,
    };

    return values;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getComunasBySlug(slug) {
  try {
    const { regiones } = await useCorona();
    // Buscaremos el index que necesitamos
    const regionIndex = regiones.findIndex(
      ({ slug: slugitem }) => slugitem === slug
    );
    const res = regiones[regionIndex];
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
}
