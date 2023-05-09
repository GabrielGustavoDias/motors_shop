import { RoutesMain } from "./routes";
import { AdProvider } from "./contexts";
import { UserProvider } from "./contexts";
import { GlobalStyle } from "./styles";
import { AdDetailPage } from "./pages/adDetail";
import { CarCard } from "./components";
import { RecoverPass } from "./pages/recoverPassPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <UserProvider>
        <AdProvider>
          <RoutesMain />
        </AdProvider>
      </UserProvider>
    </>
  );
}

export default App;
