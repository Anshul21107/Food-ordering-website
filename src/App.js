import React, { useEffect } from 'react'
import {Header,MainContainer,CreateContainer} from "./components";
import {Route,Routes} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { useStateValue } from './context/StateProvider';
import { getAllFoodItems } from './utils/firebaseFunction';
import { actionType } from './context/reducer';
const App = () => {
  const [{foodItems},dispatch] = useStateValue();

  const fetchData =async ()=>{
    await getAllFoodItems().then((data) =>{
      dispatch({
        type : actionType.SET_FOOD_ITEMS,
        foodItems : data,
      });
    });
  };


  useEffect(()=>{
    fetchData();
  },[]);

  return (
     <AnimatePresence>
        <div className='w-screen h-auto flex flex-col bg-red-50'>
            <Header/>
            <main className='mt-14 md:mt-20 px-4 md:px-14 py-4 w-full'>
             <Routes>
                 <Route path="/*" element={<MainContainer/>} />
                 <Route path="/createItem" element={<CreateContainer/>}/>
             </Routes>
            </main>
        </div>
     </AnimatePresence>
  )
}

export default App