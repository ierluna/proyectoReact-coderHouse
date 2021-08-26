import { stock } from "../data/stock"

export const pedirDatos = () => {
    
    //Delay de 2 segundos para simular retrasos de red
    return new Promise((resolve, reject) => {

            setTimeout(()=>{
                resolve(stock)
            }, 2000)

    })
}   