import "./verify.css";
import Photo from "../../Assets/login.jpg";
import Input from "../../Components/Input/input";
import Button from "../../Components/Button/button";

export default function Verify() {
  return (
    <div className="form">
      <div className="verify">
        <div className="verify-left">
          <h1>Verify your email</h1>
          <p>Check your inbox for a verification email.</p>
          <div className="inputs">
            <Input type="text" placeholder="Code" />
            <Input type="text" placeholder="Code" />
            <Input type="text" placeholder="Code" />
            <Input type="text" placeholder="Code" />    
          </div>
          <Button text="Submit" />
        </div>
        <div className="verify-right">
          <img src={Photo} alt="login" />
        </div>
      </div>
    </div>
  );
}
