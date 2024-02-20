function InfoInput({ name, onChange, value, placeholder, inputRef }) {
    return (
        <>
            <input
                
                type="text"
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                value={value}
                ref={inputRef}
            />
        </>
    );
}

export default InfoInput;
