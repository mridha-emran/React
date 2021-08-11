import {useContext} from "react";
import{useForm} from 'react-hook-form'
import { UserContext } from "../App";


function Login (){
    const ContextState = useContext(UserContext);
    const { register,handleSubmit,formState: { errors }} = useForm();

    const onSubmit = () =>  ContextState.setAuth() ;
    return(
        <div>
           <h1>LOGIN</h1> 
           <form onSubmit={handleSubmit(onSubmit)}>
           <input type="text" {...register("userName", { required: true, maxLength:  15 })} />
           {errors.useForm && <span>userName is required.</span>}
           <input type="password" {...register("password", { required: true, minLength:  6 })} />
           {errors.useForm && <span>userName is required.</span>}
           
           {!ContextState.isLogged ? <input  type="submit" value="login"/> 
        : <input  type="submit" value="signout" /> }

           </form>
        </div>
    )
}

export default Login;