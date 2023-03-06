import { RouterProvider } from "react-router-dom";
import router from "./adapters/router";
import UserContextProvider from "./store/3_context";
import ContextModalPage from "../src/store/2_context.js";

function App() {
    return (
        <ContextModalPage>
            <UserContextProvider>
                <RouterProvider router={router} />
            </UserContextProvider>
        </ContextModalPage>
    );
}

export default App;
