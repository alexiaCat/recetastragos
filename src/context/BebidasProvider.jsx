import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const BebidasContext = createContext()

const BebidasProvider = ({ children }) => {
    const [bebidas, setBebidas] = useState([])
    const [open, setOpen] = useState(false)
    const [bebidaId, setbebidaId] = useState(null)
    const [receta, setReceta] = useState({})

    useEffect(() => {
      const obtenerReceta = async () => {
        if(!bebidaId) return
        try {
            const url= `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`
        
            const {data} = await axios (url)
            console.log(data.drinks[0])
            setReceta(data.drinks[0])
        } catch (error) {
            console.log(error)
        }
      }
      obtenerReceta()
    }, [bebidaId])
    

    const consultarBebida = async datos => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`

            const { data } = await axios(url)
            console.log(data.drinks)
            setBebidas(data.drinks)

        } catch (error) {
            console.log(error)
        }
    }

    const handleModalClick = () => {
        setOpen(!open)
    }

    const handleBebidaIdClick = id => {
        setbebidaId(id)
    }

    return (
        <BebidasContext.Provider
            value={{
                consultarBebida,
                bebidas,
                handleModalClick,
                open,
                handleBebidaIdClick,
                receta,
                setReceta
            }}
        >
            {children}
        </BebidasContext.Provider>
    )
}

export {
    BebidasProvider
}

export default BebidasContext