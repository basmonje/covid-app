import camelcaseKeys from "camelcase-keys";

export async function useCorona() {
  try {
    const url =
      "https://raw.githubusercontent.com/javierlopeza/datos-coronavirus-chile/production/data/chile.json";
    const response = await fetch(url);
    const result = await response.json();
    return camelcaseKeys(result, { data: "nuevo " });
  } catch (error) {
    console.log(error);
    return null;
  }
}
