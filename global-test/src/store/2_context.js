import { useState } from "react";
import { createContext } from "react";
export const myContext = createContext();

const ContextModalPage = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <myContext.Provider value={{ isModalOpen, setIsModalOpen }}>
                {children}
            </myContext.Provider>
        </>
    );
};
export default ContextModalPage;
