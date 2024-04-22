import "./input.css";

export default function Input(prop) {
    return <input className="input" type={prop.type} placeholder={prop.placeholder} />;
}