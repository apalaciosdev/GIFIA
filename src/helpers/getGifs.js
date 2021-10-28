


export const getGifs = async (category, quantity) => {


    
  const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${quantity}&api_key=hDm0YS8mDCW5xwwsI56jVlhI2UF2rtji`
  const response = await fetch(url)
  const {data} =  await response.json()

  const gifs = data.map( img => {
    return{
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
      url_gif: img.images.original.url,
      url_download: img.images.fixed_height.url
    }
  })


  return gifs
}