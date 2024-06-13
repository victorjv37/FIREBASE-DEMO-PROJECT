import AppTitle from "../components/AppTitle";
import SignInForm from "../components/SignInForm";
import Stack from "react-bootstrap/Stack";
import AppFooter from "../components/AppFooter";

export default function SignInView() {
  return (
    <Stack className="appContainer" gap={3}>
      <div className="p-2">
        <AppTitle />
      </div>
      <div className="p-2">
        <SignInForm />
      </div>
      <div className="p-1 ">
        <AppFooter />
      </div>
    </Stack>
  );
}
