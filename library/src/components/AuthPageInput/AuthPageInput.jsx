/** @jsxImportSource @emotion/react */
import * as s from "./style";

function AuthPageInput({ type, name, placeholder, onChange, ref, message }) {
    return (
        <div css={s.inputBox}>
            <input
                css={s.input}
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                ref={ref}
            />
            {!!message && (
                <div css={s.messageBox(message.type)}>{message.text}</div>
            )}
        </div>
    );
}

export default AuthPageInput;
