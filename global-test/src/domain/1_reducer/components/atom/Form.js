const Q1Form = ({ onSubmit }) => {
    const onSubmitList = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;

        onSubmit(name, price);
    };

    return (
        <form onSubmit={onSubmitList}>
            <label>
                <input type="text" name="name" placeholder="재료" />
            </label>
            <label>
                <input type="number" name="price" placeholder="가격" />
            </label>
            <button type="submit">추가</button>
        </form>
    );
};
export default Q1Form;
