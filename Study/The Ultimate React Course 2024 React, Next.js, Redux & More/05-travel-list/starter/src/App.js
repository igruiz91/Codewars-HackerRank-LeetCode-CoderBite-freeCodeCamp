import { useState } from "react";

const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Skirts", quantity: 6, packed: true },
];

function App() {
    return (
        <div className="app">
            <Logo />
            <Form />
            <PackingList />
            <Stats />
        </div>
    );
}

const Logo = () => {
    return <h1>🏖️ Far Away 💼</h1>;
};

const Form = () => {
    const [item, setItem] = useState("");
    const [quantity, setQuantity] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!item) return;
        const newItem= {item, quantity, packed:false, id:Date.now()}
        console.log(newItem)
        setItem("");
        setQuantity(1);
    };
    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip?</h3>
            <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>
                        {n}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Item..."
                value={item}
                onChange={(e) => setItem(e.target.value)}
            />
            <button>Add</button>
        </form>
    );
};
const PackingList = () => {
    return (
        <div className="list">
            <ul>
                {initialItems.map(({ id, ...item }) => {
                    return <Item key={id} item={item} />;
                })}
            </ul>
        </div>
    );
};
const Item = ({ item }) => {
    return (
        <li>
            <span className={item.packed && "underlined"}>
                {item.quantity} {item.description}
            </span>
            <button onClick="">❌</button>
        </li>
    );
};
const Stats = () => {
    return (
        <footer className="stats">
            <em>
                💼 You have X items on your list, and you already packed X (X%)
            </em>
        </footer>
    );
};
export default App;
