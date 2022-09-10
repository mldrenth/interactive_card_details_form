import '../styles/components/CardFront.scss'
import logo from '../images/card-logo.svg'
import { CardFormInputs } from '../types'

const CardFront = ({cardNumber, name, month, year} : CardFormInputs) => {
    const number = "1234567891230000"

    function format(numbers: string) : string {
        return numbers.replace(/\d{4}(?=.)/g, '$& ')
    }

    let formated:string =format(number)

    return (
        <div id='card-front-container' className='text-white p-1'>
            <img src={logo} alt='card logo'></img>
            <p className='mt-1 text-center font-large word-space letter-space'>{formated}</p>
            <div className='flex flex-row justify-content-between font-small mt-1'><p className='text-upper'>Jane Appleseed</p><p>00/00</p></div>

        </div>
    )
}

export default CardFront