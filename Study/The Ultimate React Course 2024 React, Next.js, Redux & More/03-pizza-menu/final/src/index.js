import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];



function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

const Pizza = ({ name, ingredients, price, photoName, soldOut }) => {
    return (
        <li className={soldOut ? "pizza sold-out" : "pizza"}>
            <img src={photoName} alt={photoName} />
            <div>
                <h3>{name}</h3>
                <p>{ingredients}</p>
                <span>${price}.00</span>
            </div>
        </li>
    );
};

const Header = () => {
    return (
        <header className="header">
            <h1> FAST REACT PIZZA CO.</h1>
        </header>
    );
};

const Menu = () => {
    return (
        <div className="menu">
            <h2>Our Menu</h2>
            <p>
                Authentic Italian cuisine. 6 creative dishes to choose from. All
                from our stone oven all organic, all delicious.
            </p>

            <ul className="pizzas">
                {pizzaData.map(
                    ({ name, ingredients, price, photoName, soldOut }) => {
                        return (
                            <Pizza
                                key={name}
                                name={name}
                                ingredients={ingredients}
                                price={price}
                                photoName={photoName}
                                soldOut={soldOut}
                            />
                        );
                    }
                )}
            </ul>
        </div>
    );
};

const Footer = () => {
    const openHour = 9;
    const closeHour = 22;
    const hour = new Date().getHours();
    const isOpen = openHour< hour && hour< closeHour 
    return (
        <footer className="footer">
            {isOpen && (
                <div className="order">
                    <p>
                        We're open until {closeHour}:00. Come visit us or order
                        online
                    </p>
                    <button className="btn">Order now</button>
                </div>
            )}
        </footer>
    );
};

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
