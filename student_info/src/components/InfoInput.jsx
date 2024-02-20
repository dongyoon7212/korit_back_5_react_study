function InfoInput({ name, onChange, value, placeholder }) {
    return (
        <>
            <input
                type="text"
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                value={value}
            />
        </>
    );
}

export default InfoInput;
