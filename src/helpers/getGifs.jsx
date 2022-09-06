export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=wx4IGb8B5BBjT33W9hBA5I4OxtJYbmCb&q=${category}&limit=10`;
    const resp = await fetch(url)
    const {data} = await resp.json() // desestructuramos el objeto data del fetch y deserializamos resp con .json()
    // console.log(data);
    const gifs = data.map((gif)=>({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    })) // Estamos mapeando un array y devolviendo un objeto 
    // console.log(gifs);
    return gifs
  };
