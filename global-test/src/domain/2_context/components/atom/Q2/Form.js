import ContextQ2Form2 from './Form2';

const ContextQ2Form = ({ onSubmit, user }) => {
    const onSubmitUser = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const nickname = e.target.nickname.value;

        onSubmit(name, nickname);

        console.log(name, nickname);
    };

    return (
        <form onSubmit={onSubmitUser}>
            <h1>Q2Form</h1>
            <input name="name" placeholder="name" />
            <input name="nickname" placeholder="nick-name" />
            <button>추가</button>
            <ContextQ2Form2 />
        </form>
    );
};

export default ContextQ2Form;
