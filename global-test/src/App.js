import { RouterProvider } from 'react-router-dom';
import router from './adapters/router';
import ModalContextProvider from '../src/store/2_context.js';
import UserContextProvider from './store/3_context';

function App() {
    return (
        <ModalContextProvider>
            <UserContextProvider>
                <RouterProvider router={router} />
            </UserContextProvider>
        </ModalContextProvider>
    );
}

export default App;
