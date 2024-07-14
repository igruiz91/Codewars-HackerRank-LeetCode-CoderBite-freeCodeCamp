export default function Button({ children, handleOnClick }) {
    return (
        <button className="button" onClick={handleOnClick}>
            {children}
        </button>
    );
}