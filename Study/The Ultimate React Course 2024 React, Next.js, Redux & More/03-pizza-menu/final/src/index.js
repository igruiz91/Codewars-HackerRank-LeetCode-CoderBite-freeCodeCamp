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
        <div className="pizzas">
            <h3>{name}</h3>
            <p>{ingredients}</p>
            <img src={photoName} alt={photoName} />
            <span>{price}</span>
        </div>
    );
};

const Header = () => {
    return (
        <div className="header">
            <h1> FAST REACT PIZZA CO.</h1>
        </div>
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
            <div className="pizza">
                {pizzaData.map(
                    ({ name, ingredients, price, photoName, soldOut }) => {
                        return (
                            <Pizza
                                name={name}
                                ingredients={ingredients}
                                price={price}
                                photoName={photoName}
                                soldOut={soldOut}
                            />
                        );
                    }
                )}
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <div className="footer">
            <p>We're open until 22:00. Come visit us or order online</p>
            <button className="btn">Order now</button>
        </div>
    );
};

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"));
