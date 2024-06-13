import { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/esm/Badge";
import Stack from "react-bootstrap/Stack";
import { ErrorMessage } from "@hookform/error-message";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../backend/index";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [passwordError, setPasswordError] = useState(false);
  const [firebaseError, setFirebaseError] = useState(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (data.password === data.repeatPassword) {
      setPasswordError(false);
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        console.log("User signed up:", userCredential.user);
        setFirebaseError(null);
        navigate("/appDashboard");
      } catch (error) {
        console.error("Error signing up:", error);
        setFirebaseError(error.message);
      }
      return;
    }
    setPasswordError(true);
  };

  return (
    <Form className="signInUpForm" onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={3}>
        <div className="p-2">
          <h4>
            <Badge>SIGN UP</Badge>
          </h4>
        </div>
        <div className="p-2">
          <input
            type="text"
            placeholder="First name"
            {...register("firstName", {
              required: "Are u a noname?",
              maxLength: { value: 80, message: "Max length is 80" },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="firstName"
            render={({ message }) => (
              <p className="error" style={{ color: "red" }}>
                {message}
              </p>
            )}
          />

          <input
            type="text"
            placeholder="Last name"
            {...register("lastName", {
              required: "This is required too",
              maxLength: { value: 100, message: "Max length is 100" },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="lastName"
            render={({ message }) => (
              <p className="error" style={{ color: "red" }}>
                {message}
              </p>
            )}
          />

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
            type="tel"
            placeholder="Mobile number (optional)"
            {...register("mobileNumber", {})}
          />
          <ErrorMessage
            errors={errors}
            name="mobileNumber"
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

          <input
            type="password"
            placeholder="Repeat your password"
            {...register("repeatPassword", {
              required: "Repeat your password, its not that hard...",
            })}
          />
          <ErrorMessage
            errors={errors}
            name="repeatPassword"
            render={({ message }) => (
              <p className="error" style={{ color: "red" }}>
                {message}
              </p>
            )}
          />
        </div>
        {passwordError && (
          <p className="error" style={{ color: "red" }}>
            SAME P A S W O R D PLEASE
          </p>
        )}
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

export default SignUpForm;
