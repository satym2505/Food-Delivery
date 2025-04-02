import React,{useState} from 'react'
import './Home.css'
import Header from '../../Header/Header'
import Exploremenu from '../../Exploremenu/Exploremenu'
import Fooddisplay from '../../Fooddisplay/Fooddisplay'
import AppDownload from '../../AppDownload/AppDownload'

const Home = () => {

   const [category,setCategory] =useState("All");


  return (
    <div>
     <Header/>
     <Exploremenu category={category}  setCategory={setCategory}/>
     <Fooddisplay category={category} />
     <AppDownload/>
    </div>
  )
}

export default Home