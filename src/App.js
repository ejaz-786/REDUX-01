import { AppProvider } from "@shopify/polaris";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./COMPONENTS/Dashboard";
import LoginContainer from "./COMPONENTS/LoginContainer";
import { store } from "./REDUX/Store";

function App() { 
  return (
    <Provider store={store}>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginContainer />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </Provider>
  );
}

export default App;
