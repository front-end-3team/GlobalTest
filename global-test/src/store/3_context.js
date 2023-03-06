import { createContext, useContext, useReducer } from 'react';
import { createAction } from '../utils/createAction';

const initialState = [{ id: 1, name: '홍길동', nickname: '히히' }];

// 비어 있는 저장소 만들기
export const UserContext = createContext();
export const UserDispatchContext = createContext();

export const useUserState = () => useContext(UserContext);
export const useUserDispatch = () => useContext(UserDispatchContext);

// reducer
export const userReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 100000),
                    name: action.payload.name,
                    nickname: action.payload.nickname,
                },
            ];
        case 'STATUS_ISEDIT':
            return;
        case 'REMOVE_ALL':
            return state.filter((user) => user.id == action.payload.id);
        default:
            return state;
    }
};

export const ADD_USER = createAction('ADD_USER');
export const STATUS_ISEDIT = createAction('STATUS_ISEDIT');
export const REMOVE_ALL = createAction('REMOVE_ALL');

// context
const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    return (
        <UserContext.Provider value={state}>
            <UserDispatchContext.Provider value={dispatch}>{children}</UserDispatchContext.Provider>
        </UserContext.Provider>
    );
};

export default UserContextProvider;
