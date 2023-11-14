import { useEffect, useState } from "react";
import { getRecipe } from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import Hola2 from "./Hola2";
const Hola = () => {
    const dispatch = useDispatch()
   const allRecipe = useSelector((state)=> state?.allRecipe)
   console.log(allRecipe);
  useEffect(() => {
    if(allRecipe?.length === undefined){
        dispatch(getRecipe())
    }
  }, []);
  return (
    <>
    <h1>Hola</h1>
    {
        allRecipe?.map(recipe => (
           <Hola2 key={recipe.id} recipe={recipe} />
        ))
    }
    </>
  )
};

export default Hola;