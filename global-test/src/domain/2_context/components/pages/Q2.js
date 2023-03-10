import NavigateButton from "../../../../components/NavigateButton";
import {
  ADD_ISEDIT,
  ADD_USER,
  RESET_USER,
  useUserContext,
  useUserDispatchContext,
} from "../../../../store/3_context";
import ContextQ2Form from "../atom/Q2/Form";
import ContextQ2Form3 from "../atom/Q2/Form3";

const ContextQ2Page = () => {
  /*
    문제 2 - 2
      1. Form1에서 값을 입력하면 userList에 데이터가 추가되도록 구현해보세요
      2. Form2에서 버튼을 클릭하면 userList의 각 요소에 isEdit: true의 속성이 추가되도록 구현해보세요
      3. Form3에서 reset 버튼을 클릭하면 userList를 초기화 시키도록 구현해보세요
      4. 제출 버튼을 누르면 isEdit true인 userList만 console.log로 출력해보세요
        (단, isEdit이 true인 데이터도 전역으로 관리해주세요.)
  */

  // const [userList, setUserList] = useState([
  //   { id: 1, name: "홍길동", nickname: "히히" },
  // ]);

  /*
    단, userList 상태 관리는 전역으로 관리하고 비즈니스 로직도 분리하기 위해
    useReducer, useContext를 사용하여 구현해보세요

    (일반 state를 사용하는 문제가 아니기 때문에 전역으로 상태관리를 할 수 있도록 해주세요)

    관련 로직은 src/store/3_context.js에 구현해주세요
  */
  const userList = useUserContext();
  const dispatch = useUserDispatchContext();

  const onAddUser = (name, nickname) => {
    const id = Math.floor(Math.random() * 10000);
    dispatch({
      type: ADD_USER,
      payload: {
        id,
        name,
        nickname,
      },
    });
  };

  const onAddStatus = () => {
    dispatch({
      type: ADD_ISEDIT,
    });
  };

  const onResetUser = () => {
    dispatch({
      type: RESET_USER,
    });
  };

  const onSubmitList = () => {
    const showList = userList.filter((user) => user.isEdit === true);
    console.log(showList);
  };

  return (
    <>
      <h2>문제 2 - 2</h2>
      <ContextQ2Form onAddUser={onAddUser} onAddStatus={onAddStatus} />
      <ContextQ2Form3 onResetUser={onResetUser} />
      <div
        style={{
          marginTop: "32px",
        }}
      >
        <button onClick={onSubmitList}>SUBMIT</button>
      </div>
      <NavigateButton to={"/3_redux/q1"} />
    </>
  );
};
export default ContextQ2Page;
