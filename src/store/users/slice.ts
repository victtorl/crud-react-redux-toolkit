import { createSlice } from "@reduxjs/toolkit";

export interface User{
  name:string;
  email:string;
  github:string;
}

export interface UserWithId extends User{
     id:string;
}

const initialState:UserWithId[]=[
    {
        id:'1',
        name:"Yazmani Rodriguez",
        email:'hola@gmail.com',
        github:'yazmanito',
    },
    {
        id:'2',
        name:"Tazmania Bertha",
        email:'tazbertha@gmail.com',
        github:'tazvertha',
    },
    {
        id:'3',
        name:"Juana de Arco",
        email:'juana@gmail.com',
        github:'juanaman',
    },
]

export const userSlice=createSlice({
    name:'users',
    initialState,
    reducers:{}
})

export default userSlice.reducer