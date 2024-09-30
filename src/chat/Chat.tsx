import { useSelector } from "react-redux";
import { ChatSliceActions } from "./chatSlice";
import { inputSelector, MessagesSelector, PeopleSelector } from "./chatSelectors";
import { useAppDispatch } from "../store/store";
import { useEffect } from "react";
import { myPeopleThunk } from "./thunks";

const {onInputChange, onInsertMessage} = ChatSliceActions;

function Chat() {
    const dispatch = useAppDispatch();
    const inputValue = useSelector(inputSelector);
    const messages = useSelector(MessagesSelector);
    const people = useSelector(PeopleSelector);


    useEffect(() => {
        dispatch(myPeopleThunk())
    }, [])

    return (
        <div>
           <div style={{
            display: 'flex',
            flexDirection: 'column-reverse',

           }}>
           {messages.map(({id, message}) => (
                <div key={id}>{message}</div>
            ))}
           </div>
            My users
           <div style={{
            display: 'flex',
            flexDirection: 'column-reverse',

           }}>
           {people.map(({id, name}) => (
                <div key={id}>{name}</div>
            ))}
           </div>
            <div>
            <input value={inputValue} onChange={(e) => dispatch(onInputChange(e.target.value))}/>
            <button onClick={() => {
                dispatch(onInsertMessage({
                    id: `${Date.now()}`,
                    message: inputValue,
                }))
            }}/>
            </div>
        </div>
    )
}

export {
    Chat
}