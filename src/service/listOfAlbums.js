export const listOfAlbums = async () => {
    return await fetch(`https://jsonplaceholder.typicode.com/albums`)
    .then((responce) => {
        if (responce.status === 404) {
          throw new Error(responce.status)
      }

      return responce.json();
    })

        .catch((error) => {
        console.log(error);
    })
    
}