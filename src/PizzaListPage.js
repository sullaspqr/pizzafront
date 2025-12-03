import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export function PizzaListPage() {

    const[pizzas,setPizzas] = useState([]);
    const[isFetchPending, setFetchPending] = useState(false);
    
    useEffect(() => {
        setFetchPending(true);
        fetch("https://pizza.sulla.hu/pizza")
            .then((res) => res.json())
            .then((pizzak) => setPizzas(pizzak))
            .catch(console.log)
            .finally(() => {
                setFetchPending(false);
            });
    }, []);
    return (
        <div className="p-5 m-auto text-center content bg-ivory">
            {isFetchPending ? (
                <div className="spinner-border" key="1"></div>
            ) : (
                <div>
                    <h2>Pizzák</h2>
                    {pizzas.map((pizza, index) => (
                        <div className="card col-sm-3 d-inline-block m-1 p-2" key={index}>
                            <p className="text-dark">{pizza.name}</p>
                            <div className="card-body">
                                <NavLink key={pizza.id} to={"/pizza/" + pizza.id}>
                                    <img alt={pizza.name}
                                        className="img-fluid"
                                        style={{ maxHeight: 200 }}
                                        src={pizza.image_url ? pizza.image_url :
                                            "https://via.placeholder.com/400x800"} /></NavLink>
                                <br />
                                <NavLink key="y" to={"/mod-pizza/" + pizza.id}>
                                    <i className="bi bi-pencil"></i></NavLink> &nbsp;&nbsp;
                                    <NavLink key="x" to={"/del-pizza/" + pizza.id}><i className="bi bi-trash3"></i></NavLink>
                            </div>
                        </div>


                    ))}
                </div>
            )}
        </div>
    );
}
export default PizzaListPage;
