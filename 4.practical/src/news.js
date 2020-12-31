const url =
  "https://newsapi.org/v2/top-headlines?country=lv&apiKey=b81b500fbc3f4c9ebaa866d5eef69090";

export async function getLVNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}