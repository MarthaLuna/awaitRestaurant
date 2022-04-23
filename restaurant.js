const fs = require('fs');
const cookCowboyEggs = async () => {

    const ingredient = "Huevos"

    // Pedir orden de comida
    // El mesero captura nuestra orden
    // El mesero pasa las ordenes a la cocina
    // El/los chefs preparan las ordenes
    // El mesero la entrega a la mesas
    const open = (ingredient) => {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if (ingredient === "Huevos") {
                    const result = `${ingredient} abiertos`
                    console.log(result);
                    resolve(result);
                }
                else {
                    reject("Ingrediente inválido");
                }

            }, 1000);

        });

    }
    const freir = (ingredient) => {

        return new Promise((resolve, reject) => {
            setTimeout(() => {

                if (ingredient == "Huevos abiertos") {
                    // Freirlos
                    const result = "Huevos fritos"
                    console.log(result);
                    resolve(result);
                }
                else {
                    reject("No se puede freir")
                }
            }, 3000);
        });
    }

    const placeSauce = (ingredient) => {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (ingredient === "Huevos fritos") {

                    const result = "Huevos rancheros"
                    // Bañado
                    console.log(result);
                    resolve(result);
                }
                else {
                    reject("Ingrediente inválido")
                }

            }, 2000);
        });
    }

    try 
    {

        const openedEggs = await open(ingredient);
        const friedEggs = await freir(openedEggs);
        return await placeSauce(friedEggs);
    } catch (error) {
        console.log("Ocurrió un error", error)
    }



    /*open(ingredient)
        .then(freir)
        .then(placeSauce)
        .then((result) => { console.log(`${ingredient} servido`) })
        .catch((err) => {
            console.log(err)
        }).finally(() => { console.log("Cowboy eggs process complete!!!") }); */


}


const cookMolletations = async () => {

    // Molletes
    // Partir el pan
    // Colocar frijoles
    // Colocar queso
    // Hornear
    // Servir

    const ingredient = "Pan"

    const partirPan = (ingredient) => {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if (ingredient === "Pan") {
                    const result = "Pan partido"
                    console.log(result);
                    resolve(result);
                }
                else {
                    reject("Ingrediente inválidco")
                }
            }, 1000);

        });

    }

    const colocarFrijoles = (ingredient) => {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if (ingredient === "Pan partido") {
                    const result = "Pan con frijoles"
                    console.log(result);
                    resolve(result);
                }
                else {
                    reject("El pan no esta partido")
                }

            }, 1000);

        });

    }

    const colocarQueso = (ingredient) => {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if (ingredient === "Pan con frijoles") {
                    const result = "Pan con queso"
                    console.log(result);
                    resolve(result);
                }
                else {
                    reject("El pan no tiene frijoles")
                }
            }, 1000);

        });

    }

    const hornearPan = (ingredient) => {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if (ingredient === "Pan con queso") {
                    const result = "Mollete horneado"
                    console.log(result);
                    resolve(result);
                }
                else {
                    reject("El pan le falta queso")
                }
            }, 1000);

        });

    }

    try 
    {

        const panPartido = await partirPan(ingredient);
        const frijolesPuestos = await colocarFrijoles(panPartido);
        const quesoPuesto = await colocarQueso(frijolesPuestos);
        return await hornearPan(quesoPuesto)
       
    } catch (error) {
        console.log("Ocurrió un error", error)
    }

   /* partirPan(ingredient)
        .then(colocarFrijoles)
        .then(colocarQueso)
        .then(hornearPan)
        .then((result) => { console.log(`${ingredient} servido`) })
        .catch((err) => {
            console.log(err)
        }).finally(() => { console.log("Molletations process complete!!!") }); */

      
}




const cookChilakilations = async () => {
    // Chilaquiles
    // Colocar tortilla a freir
    // Colocar la salsa
    // Servir

    const ingredient = "Tortilla"

    const freirT = (ingredient) => {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if (ingredient === "Tortilla") {
                    const result = "Tortilla frita"
                    console.log(result);
                    resolve(result);
                }
                else {
                    reject("Ingrediente inválido");
                }

            }, 1000);

        });

    }

    const salsaT = (ingredient) => {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if (ingredient === "Tortilla frita") {
                    const result = "Chilaquiles con salsa"
                    console.log(result);
                    resolve(result);
                }
                else {
                    reject("La tortilla no esta lista")
                }
            }, 1000);

        });

    }

    try 
    {

        const tortillaFreida = await freirT(ingredient);
        return await salsaT(tortillaFreida);
       
    } catch (error) {
        console.log("Ocurrió un error", error)
    }

    /*freirT(ingredient)
        .then(salsaT)
        .then((result) => { console.log(`${ingredient} servido`) })
        .catch((err) => {
            console.log(err)
        }).finally(() => { console.log("Chilakilations process complete!!!") });

    */
}

const atenderMesa= async (mesa) =>
{
    console.log(`Atendiendo la orden de la mesa:  ${mesa.mesanumber}`)
                                mesa.orders.forEach(async(order)=>
                                {
                                        console.log(order)
                                        if(order.order === "cowboyeggs")
                                        {
                                            for(let i = 1; i <= order.cantidad; i++)
                                            {
                                                cookCowboyEggs();
                                            }
                                        }
                                        else if(order.order === "molletations")
                                        {
                                            for(let i = 1; i <= order.cantidad; i++)
                                            {
                                                 cookMolletations();
                                            }

                                        }
                                        else if(order.order === "chilaquillation"){
                                             for(let i = 1; i <= order.cantidad; i++)
                                            {
                                                cookChilakilations();
                                            }

                                        }
                                })

   

}


const placeOrder = async () => {

    let mesas;
    fs.readFile(`orders.txt`,(error, data) => {
        if(error){
                console.log("Hubo un error", error)
        }
        else{
                
                mesas = JSON.parse(data.toString());

                        const val = Object.values(mesas)
                        val.forEach(async (val1)=>{
                            val1.forEach(async (val2)=>{
                                const platillo = await atenderMesa(val2)
                                
                        })
                        
                        
                        });
             
                    
                    
                
        }
    }) 

    

  /*  const order1 = await cookCowboyEggs();
    const order2 = await cookMolletations();
    const order3 = await cookChilakilations();

    console.log("Orden 1: ", order1)
    console.log("Orden 2: ", order2)
    console.log("Orden 3: ", order3) */

}



placeOrder();




