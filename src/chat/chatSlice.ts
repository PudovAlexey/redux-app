import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { myPeopleThunk } from "./thunks"

type People = {
    id: string
    name: string
}

type PeopleQuery =  {
    results: People[]
}

type Message = {
    id: string
    message: string
}


type ChatSchema = {
    input: string
    messages: Message[]
    people: People[]
}

const initialState: ChatSchema = {
    input: "",
    messages: [],
    people: [],

}

const chatSlice = createSlice(({
    name: 'chatSlice',
    initialState,
    reducers: {
        onInputChange: (state, { payload }: PayloadAction<string>) => {
            state.input = payload;
        },

        onInsertMessage: (state, { payload }: PayloadAction<Message>) => {
            state.messages.push(payload);
            state.input = ''
        }
    },
    extraReducers: (builder) => {
        builder.addCase(myPeopleThunk.fulfilled, (state, {payload}: PayloadAction<PeopleQuery>) => {
            payload.results.forEach(people => {
                state.people.push({
                    id: people.name,
                    name: people.name,
                })
            })
            // state.people.push();
        })
    }
}))

export {
    chatSlice
}

export const {
    reducer: ChatSliceReducer,
    actions: ChatSliceActions
} = chatSlice