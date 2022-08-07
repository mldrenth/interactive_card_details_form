import '../styles/components/CardFront.scss'
import logo from '../images/card-logo.svg'

const CardFront = () => {
    return (
        <div id='card-front-container'>
            <img src={logo} alt='card logo'></img>
        </div>
    )
}

export default CardFront