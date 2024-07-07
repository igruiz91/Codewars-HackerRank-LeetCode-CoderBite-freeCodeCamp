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
    return (
        <form className="add-form">
            <h3>What do you need for your trip?</h3>
            <select>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select>
            <input type="text" placeholder="Item..." />
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
            <span className={item.packed && "underlined" }>
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
