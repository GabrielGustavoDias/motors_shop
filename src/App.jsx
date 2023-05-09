import { RoutesMain } from "./routes";
import { AdProvider } from "./contexts";
import { UserProvider } from "./contexts";
import { GlobalStyle } from "./styles";
import { ToastContainer } from "react-toastify";
import { DivMain } from "./styles/global";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <UserProvider>
        <AdProvider>
          <DivMain>
            <RoutesMain />
            <ToastContainer
              position="bottom-right"
              autoClose={2500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </DivMain>
        </AdProvider>
      </UserProvider>
    </>
  );
}

export default App;
