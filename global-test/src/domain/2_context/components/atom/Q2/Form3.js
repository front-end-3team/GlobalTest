const ContextQ2Form3 = ({ user, onRemoveAll }) => {
    return (
        <div>
            <h1>Q2Form3</h1>
            <button onClick={() => onRemoveAll(user.id)}>RESET</button>
        </div>
    );
};

export default ContextQ2Form3;
