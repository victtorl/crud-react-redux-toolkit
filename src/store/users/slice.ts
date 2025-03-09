import { createSlice,type PayloadAction } from "@reduxjs/toolkit";

type UserId= string;

export interface User{
  name:string;
  email:string;
  github:string;
}

export interface UserWithId extends User{
     id:UserId;
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
    reducers:{
        deletedUsersById:(state,action:PayloadAction<UserId>)=>{
            const id=action.payload;
            return state.filter((user)=>user.id!=id)
        }
    }
})


export default userSlice.reducer;
export const {deletedUsersById}=userSlice.actions