import Stack from "react-bootstrap/esm/Stack";
import AppFooter from "../components/AppFooter";
import AppTitle from "../components/AppTitle";
import AppViewButtons from "../components/AppViewButtons";

const AppView = () => {
  return (
    <Stack className="appContainer">
      <AppTitle />
      <AppViewButtons />
      <AppFooter />
    </Stack>
  );
};

export default AppView;
