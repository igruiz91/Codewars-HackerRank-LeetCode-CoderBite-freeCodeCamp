const FormInput = ({ children, textValue, onTextInput, disabled }) => {
    return (
        <>
            <label>{children}</label>
            <input
                type="text"
                disabled={disabled}
                value={textValue}
                onChange={(e) => onTextInput(e.target.value)}
            />
        </>
    );
};

export default FormInput;
