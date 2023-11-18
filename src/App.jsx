import "./App.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import store from "@/store";
import LayoutContainer from "./layout";
function App() {
    return (
        <>
            <Provider store={store}>
                <LayoutContainer>
                    <h2>Children</h2>
                </LayoutContainer>
            </Provider>
            <ToastContainer></ToastContainer>
        </>
    );
}

export default App;
