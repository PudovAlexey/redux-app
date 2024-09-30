import { RootState } from "../store/store";

const chatSelector = (state: RootState) => state.chatSlice;

const inputSelector = (state: RootState) => chatSelector(state).input;

const MessagesSelector = (state: RootState) => chatSelector(state).messages;

const PeopleSelector = (state: RootState) => chatSelector(state).people;

export {
    inputSelector,
    MessagesSelector,
    PeopleSelector,
}