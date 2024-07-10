import { useState } from "react";

const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Skirts", quantity: 6, packed: true },
];

function App() {
    const [items, setItems] = useState(initialItems);

    const handleDelete = (id) => {
        if (!id) setItems([]);
        setItems((items) => [...items].filter((item) => item.id !== id));
    };

    const handleCheck = (id) => {
        setItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item
            )
        );
    };

    const handleSort = (property) => {
        setItems((items) => items.sort((a, b) => a.property < b.property));
    };

    return (
        <div className="app">
            <Logo />
            <Form addItems={setItems} />
            <PackingList
                items={items}
                deleteItems={handleDelete}
                checkItem={handleCheck}
                sortItem={handleSort}
            />
            <Stats items={items} />
        </div>
    );
}

const Logo = () => {
    return <h1>🏖️ Far Away 💼</h1>;
};

const Form = ({ addItems }) => {
    const [quantity, setQuantity] = useState(0);
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description) return;
        const newItem = {
            quantity,
            description,
            id: Date.now(),
            packed: false,
        };

        addItems((items) => [...items, newItem]);

        setQuantity(0);
        setDescription("");
    };

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip?</h3>
            <select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>
                        {n}
                    </option>
                ))}
            </select>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Item..."
            />
            <button>Add</button>
        </form>
    );
};
const PackingList = ({ items, deleteItems, checkItem, handleSort }) => {
    const [sortBy, setSortBy] = useState("id");
    let sortedItems;
    sortBy === "id"
        ? (sortedItems = items)
        : sortBy === "description"
        ? (sortedItems = items
              .slice()
              .sort((a, b) => a.description.localeCompare(b.description)))
        : (sortedItems = items
              .slice()
              .sort((a, b) => Number(a.packed)- Number(b.packed)));
    return (
        <div className="list">
            <ul>
                {sortedItems.map(({ ...item }) => {
                    return (
                        <Item
                            item={item}
                            deleteItems={deleteItems}
                            checkItem={checkItem}
                        />
                    );
                })}
            </ul>
            <div className="actions">
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="id">SORT BY INPUT ORDER</option>
                    <option value="description">SORT BY DESCRIPTION</option>
                    <option value="packed">SORT BY PACKED STATUS</option>
                </select>
                <button onClick={() => deleteItems()}>CLEAR LIST</button>
            </div>
        </div>
    );
};
const Item = ({ item, deleteItems, checkItem }) => {
    return (
        <li key={item.id}>
            <input
                checked={item.packed}
                type="checkbox"
                onChange={() => checkItem(item.id)}
            ></input>
            <span className={item.packed && "underlined"}>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => deleteItems(item.id)}>❌</button>
        </li>
    );
};
const Stats = ({ items }) => {
    if (!items.length)
        return (
            <footer className="stats">
                <em>Start adding some items to your packing list 🚀.</em>
            </footer>
        );

    const numItem = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked * 100) / numItem, 2) || 0;

    return (
        <footer className="stats">
            <em>
                {percentage !== 100
                    ? `💼 You have ${numItem} items on your list, and you already packed ${numPacked} (${percentage}%)`
                    : "You got everything! Ready to go ✈️."}
            </em>
        </footer>
    );
};
export default App;
