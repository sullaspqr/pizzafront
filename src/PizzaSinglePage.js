import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';

export function PizzaSinglePage(props) {
//itt veszi át a paramétereket az App.js-ből a pizzaId-alatt:
    const params = useParams();
    const id = params.pizzaId;
    const[pizza,setPizza] = useState([]);
    const[isPending, setPending] = useState(false);
    useEffect(() => {
        setPending(true);
        //átírtam async-await-esre "simáról":
        // lényege, hogy aszinkron küldi az adatokat, és míg betölt, kirajzolja a pörgettyűt,
        // ha betöltött, akkor pedig a pizza képet és a többi információt.
        (async () => {
            try {
                //itt újabb infó: ha nem ` ` között hanem " " között írjuk be az alábbi kódot,
                // akkor nem megy, mert egyszerűen nem átveszi az id-t, hanem
                // megpróbálja átkódolni html-kódra, ami nem sikerül és hibával tér vissza,
                // illetve a fetch-elés nem hajtódik végre...
        const res= await fetch(`https://pizza.sulla.hu/pizza/${id}`)
            const pizza = await res.json();
            setPizza(pizza);
        }
        catch(error) {
            console.log(error);
        }
        finally {
            setPending(false);
        }
    })
    ();
 }, [id]);
 // minden egyes id-változásra újra-rendereli az oldalt!
 // ha az id-nél üresen hagyjuk, akkor csak 1x renderelődik le az oldal és vége...

    return (
        <div className="p-5 m-auto text-center content bg-lavender">
            {isPending || !pizza.id ? (
                <div className="spinner-border"></div>
            ) : (
                            <div className="card p-3">
                                <div className="card-body">
                                <h5 className="card-title">{pizza.name}</h5>
                                    <img alt={pizza.name}
                                    className="img-fluid rounded"
                                    style={{maxHeight: "500px"}}
                                    src={pizza.image_url ? pizza.image_url : 
                                    "https://via.placeholder.com/400x800"} 
                                    />
                                  </div>
                                  <div><NavLink to="/"><i className="bi bi-backspace"></i></NavLink> &nbsp;&nbsp;&nbsp;
<NavLink key="y" to={"/mod-pizza/" + pizza.id}><i className="bi bi-pencil"></i></NavLink></div>   
                            </div>
                        
                    )}
                </div>
            );
}
export default PizzaSinglePage;
