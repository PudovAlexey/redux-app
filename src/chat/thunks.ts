import { createAsyncThunk } from "@reduxjs/toolkit";

const myPeopleThunk = createAsyncThunk(
    'https://swapi.dev/api/people',
    async () => {
        const people = await fetch("https://swapi.dev/api/people")
        .then((res) => res.json());

        return people
    }
)

export {
    myPeopleThunk
}