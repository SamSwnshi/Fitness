export const exerciseOption = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/status",
  headers: {
    "x-rapidapi-key": "b5edd42dbbmsh228a3e3b509b403p130742jsn1efa66cff3bf",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
//api from sameer account if its limit exceed use upper api
  headers: {
    "x-rapidapi-key": "c7c46534camsh51d7de57da8e200p19a316jsnf77cb5e31fdb",
    "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const resultData = await res.json();

  return resultData;
};
