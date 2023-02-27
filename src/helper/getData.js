export const getData = async (urlQuery) => {
  const resp = await fetch(urlQuery);
  const data = await resp.json();
  return data;
};
