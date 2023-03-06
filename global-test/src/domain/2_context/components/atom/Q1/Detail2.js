import { myContext } from "../../../../../store/2_context";
import { useContext } from "react";

const ContextQ1Detail2 = () => {
    const { isModalOpen, setIsModalOpen } = useContext(myContext);

    return (
        <>
            <h2>ContextQ1Detail2</h2>
            <button onClick={() => setIsModalOpen((prev) => !prev)}>
                {isModalOpen ? "숨기기" : "보이기"}
            </button>
        </>
    );
};
export default ContextQ1Detail2;
