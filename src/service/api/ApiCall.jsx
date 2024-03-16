import { useEffect, useState } from "react"

export const ApiCall = () => {

    const [character, setCharacter] = useState([])

    useEffect(()=>{
        const getCharacter = async () => {
            const  res = await fetch('https://rickandmortyapi.com/api/character')
            console.log(`Mi respuestat sin formatetar ${res}`);
            const resFormated = await res.json()
            console.log(`Mi respuesta formateada ${resFormated}`);
            setCharacter(resFormated.results);
        }
        getCharacter()
    },[])

return (
    <>
    {
        character.map((c)=>{
            <>
                <img src={c.image} alt="imagen" />
            </>
        })

    }
    </>
  )
}
