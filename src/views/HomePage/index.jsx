import React, { useRef } from "react";
import './HomePage.scss';
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../app/testSlice";
function HomePage () {
    const dataRef = useRef();
    const dispatch = useDispatch();
    const data = useSelector(state => state.todos);
    function handleSubmit(){
        let t = dataRef.current.value;
        const action = addPost(t);
        dispatch(action);
    }
    return (
        <>
            <h1> { data } </h1>
            <input ref = {dataRef}  onBlur={handleSubmit} type = 'text'/>
        </> 
    )
}
export default HomePage;

