import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

const AppViewButtons = () => {
  const navigate = useNavigate();

  const signUpButton = () => {
    navigate("/signUp");
  };

  const signInButton = () => {
    navigate("/signIn");
  };

  return (
    <div>
      <Button id="signUpInButton" variant="info" onClick={signUpButton}>
        SIGN UP
      </Button>
      <Button id="signUpInButton" variant="info" onClick={signInButton}>
        SIGN IN
      </Button>
    </div>
  );
};

export default AppViewButtons;
