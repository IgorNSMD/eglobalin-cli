import { useState } from 'react'

export const categorias = () => {

  const [data, setData] = useState(null)

  fetch("http://localhost:3000/categorias")
  .then((res) => { res.json()})
    .then((res) => {setData(res.data)})
    .catch((err) => console.log(err))

  // fetch("http://localhost:3000/categorias")
  // .then(function(response){return response.json()})
  //   .then(function(myJson){console.log(myJson)})

  // async function logJSONData() {
  //   const response = await fetch("http://localhost:3000/categorias");
  //   const jsonData = await response.json();
  //   console.log(jsonData);
  // }


  return (
    <div>
        {data.map((userData) => {
          return <div>userData.nombre </div>
        })
        }
    </div>

  )
}
