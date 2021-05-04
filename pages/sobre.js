import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

import Lottie from 'react-lottie'
import animationData from '../src/lotties/doc-animation.json'

export default function Sobre (){
    const defaultOptionLottie = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        renderSettings:{
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
            <Header/>
            <div className="contentSobre">
                <div className='sobreArticle'>
                    <h1>Sobre</h1>
                    <Lottie
                        options={defaultOptionLottie}
                        width={200}
                        height={200}
                    />
                </div>
            
            </div>
            <Footer/>
            <script src="https://kit.fontawesome.com/9cc6fa156c.js" crossOrigin="anonymous"></script>
        </div>
    )
}