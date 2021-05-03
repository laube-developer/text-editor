import style from './style.module.css'

export default function Footer (props){
    return (
        <div className={style.Footer}>
            <div>
                <h2>Contato</h2>
                <p><i className="fas fa-envelope-open"></i>laube.developer@gmail.com</p>
            </div>
        </div>
    )
}