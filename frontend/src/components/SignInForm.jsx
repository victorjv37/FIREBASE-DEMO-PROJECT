import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/esm/Badge";
import Stack from "react-bootstrap/Stack";
import { ErrorMessage } from "@hookform/error-message";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../backend/index";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState(null);

  const onSubmit = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log("User signed in:", userCredential.user);
      setFirebaseError(null);
      navigate("/appDashboard");
    } catch (error) {
      console.error("Error signing in:", error);
      setFirebaseError(error.message);
    }
  };

  return (
    <Form className="signInUpForm" onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={3}>
        <div className="p-2">
          <h4>
            <Badge>SIGN IN</Badge>
          </h4>
        </div>
        <div className="p-2">
          <input
            type="text"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Do u know how to write @s?",
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => (
              <p className="error" style={{ color: "red" }}>
                {message}
              </p>
            )}
          />

          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required,obviously",
            })}
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => (
              <p className="error" style={{ color: "red" }}>
                {message}
              </p>
            )}
          />
        </div>
        {firebaseError && (
          <p className="error" style={{ color: "red" }}>
            {firebaseError}
          </p>
        )}
        <div className="p-2">
          <Button id="submitButton" variant="primary" type="submit">
            SUBMIT
          </Button>
        </div>
      </Stack>
    </Form>
  );
};

export default SignInForm;
