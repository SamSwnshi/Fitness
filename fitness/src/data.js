export const exerciseOption = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/status",
  headers: {
    "x-rapidapi-key": "c7c46534camsh51d7de57da8e200p19a316jsnf77cb5e31fdb",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const data = async (url, options) => {
    const res = await fetch(url, options);
    const resultData = await res.json();
  
    return resultData;
};
