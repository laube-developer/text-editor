import style from './style.module.css'
import Link from 'next/link'

export default function Header (props){
    return (
        <div className={style.Header}>
            <div className={style.title}>
                <i className="fas fa-file-alt"></i>
                <Link href='/'><h1>Editor de texto </h1></Link>
            </div>
            <Link href="https://github.com/laube-developer"><a target='_blank'>github.com/laube-developer</a></Link>
            <a href=""></a>
        </div>
    )
}