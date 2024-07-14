import FormInput from "./components/FormInput";
import Button from "./components/Button";
import { useState } from "react";
import { initialFriends } from "./data";

export default function App() {
    const [friends, setFriends] = useState(initialFriends);
    const [selectFriend, setSelectFriend] = useState(null);

    const handleAddFriend = (friend) => {
        setFriends((friends) => [...friends, friend]);
    };

    const handleSelectFriend = (id) => {
        setSelectFriend((selectFriend) =>
            selectFriend.id === id ? null : selectFriend
        );
    };

    const handleSelection = (friend) => {
        setSelectFriend(friend);
    };
    const handleUpdateBalance = (updated_friend) => {
        setFriends((friends) =>
            friends.map((friend) =>
                friend.id === updated_friend.id ? updated_friend : friend
            )
        );
        setSelectFriend(null);
    };

    return (
        <div className="app">
            <div className="sidebar">
                <Sidebar
                    friends={friends}
                    onAddFriend={handleAddFriend}
                    selectFriend={selectFriend}
                    onSelectFriend={handleSelectFriend}
                    handleSelection={handleSelection}
                />
            </div>
            {selectFriend && (
                <FormSplitBill
                    selectFriend={selectFriend}
                    handleSelection={handleSelection}
                    friends={friends}
                    onAddFriend={handleUpdateBalance}
                />
            )}
        </div>
    );
}

const Sidebar = ({
    friends,
    onAddFriend,
    selectFriend,
    onSelectFriend,
    handleSelection,
}) => {
    const [showAddFriend, setShowAddFriend] = useState(false);

    const handleShowAddFriend = () => { 
        setShowAddFriend((showAddFriend) => !showAddFriend);
    }

    return (
        <>
            <ul>
                {friends.map((data) => (
                    <FriendSelect
                        key={data.id}
                        data={data}
                        selectFriend={selectFriend}
                        onSelectFriend={onSelectFriend}
                        handleSelection={handleSelection}
                    />
                ))}
            </ul>

            {showAddFriend ? (
                <FormAddFriend
                    addFriend={onAddFriend}
                    onSelectFriend={onSelectFriend}
                />

            ) : ""}

            <Button handleOnClick={handleShowAddFriend}>
                {showAddFriend ? "Close" : "Add Friend"}
            </Button>
        </>
    );
};

const FriendSelect = ({
    data,
    onSelectFriend,
    selectFriend,
    handleSelection,
}) => {
    const { id, name, image, balance } = data;

    return (
        <li className={selectFriend?.id === id && "selected"}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p className={balance > 0 ? "green" : balance < 0 ? "red" : ""}>
                {balance < 0
                    ? `You owe ${name} $${Math.abs(balance)}`
                    : balance > 0
                    ? `${name} owes you $${balance}`
                    : `You and ${name} are even`}
            </p>
            <Button handleOnClick={() => handleSelection(data)}>
                {selectFriend?.id === id ? "Close" : "Select"}
            </Button>
        </li>
    );
};

const FormSplitBill = ({ selectFriend, onAddFriend, handleSelection }) => {
    const [bill, setBill] = useState(null);
    const [yourExpense, setYourExpense] = useState(null);
    const [payer, setPayer] = useState("you");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!bill || !yourExpense) return;

        let new_balance = 0;

        if (payer === "you") {
            new_balance = selectFriend.balance + parseFloat(bill) - yourExpense;
        } else {
            new_balance = selectFriend.balance - parseFloat(yourExpense);
        }

        onAddFriend({ ...selectFriend, balance: new_balance });
        setBill(null);
        setYourExpense(null);
        setPayer("you");
    };

    return (
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Split a bill with {selectFriend.name}</h2>
            <FormInput textValue={bill} onTextInput={setBill}>
                💰 Bill value
            </FormInput>
            <FormInput
                textValue={yourExpense}
                onTextInput={setYourExpense}
            >
                🧍‍♀️ Your expense
            </FormInput>
            <FormInput
                textValue={bill ? bill - yourExpense : ""}
                disabled={true}
            >
                👫 Friend expense
            </FormInput>
            <label>🤑 Who is paying the bill</label>
            <select value={payer} onChange={(e) => setPayer(e.target.value)}>
                <option value="you">You</option>
                <option value="friend">{selectFriend.name}</option>
            </select>
            <Button>Split bill</Button>
        </form>
    );
};
const FormAddFriend = ({ addFriend, onSelectFriend }) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");
    const id = Date.now();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !image) return;
        const new_friend = { name, image, id, balance: 0 };
        addFriend(new_friend);
        setName("");
        setImage("https://i.pravatar.cc/48");
        onSelectFriend(false);
    };

    return (
        <form className="form-add-friend" onSubmit={handleSubmit}>
            <FormInput textValue={name} onTextInput={setName}>
                👫 Friend name
            </FormInput>
            <FormInput textValue={image} onTextInput={setImage}>
                🌄 Image URL
            </FormInput>
            <Button>Add</Button>
        </form>
    );
};
