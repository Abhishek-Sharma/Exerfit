
export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': "1eaa072285msh045510ccdfe11f4p14e1d2jsn371c04300737",
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': "youtube-search-and-download.p.rapidapi.com",
    'X-RapidAPI-Key': "1eaa072285msh045510ccdfe11f4p14e1d2jsn371c04300737",
  },
};

export const fetchData= async (url, options)=>{
    const response = await fetch(url, options);
    const data = response.json();

    return data;
}