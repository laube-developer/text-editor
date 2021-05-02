import style from './style.module.css'
import { useState } from 'react';


export default function ButtonClose(props){
    return (
        <div className={style.ButtonClose}>
            <i className="fas fa-times">a</i>
        </div>
    )
}