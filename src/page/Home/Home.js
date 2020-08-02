/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import BasicLayout from "../../layouts/BasicLayout";

import "./Home.scss";
export default function Home(props) {
    const {setRefreshCheckLogin} = props
    
    return (
    
        <BasicLayout className="home" setRefreshCheckLogin={setRefreshCheckLogin}>
         <h2>Home 😀🐪</h2>
        </BasicLayout>
   
    )
}
