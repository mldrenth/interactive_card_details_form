import { useFormContext } from 'react-hook-form';
import '../styles/components/CardForm.scss'


const CardForm = () => {
    const { register } = useFormContext();

    return (
        <form id='card-form' >
            <div className='full-width'>
                <label htmlFor='name' className='text-upper'>Cardholder Name</label>
                <input id="name" placeholder='e.g. Jane Appleseed' {...register('name')} />
            </div>
            <div className='full-width'>
                <label className='text-upper'>Card Number</label>
                <input placeholder='e.g. 1234 5678 9123 0000' {...register('cardNumber')} />
            </div>

            <div id='group-container'  >


                <div className='small-input'>
                    <label htmlFor='month' className='text-upper'>Exp. Date</label>
                    <input className='small-input'  id="month" placeholder='MM' {...register('month')} />
                </div>
                <div   className='small-input'>
                    <label htmlFor='year'>(MM/YY)</label>
                    <input id="year" placeholder='YY' {...register('year')} />
                </div>
                <div className='half-input'>
                    <label htmlFor='cvc' className='text-upper'>CVC</label>
                    <input id='cvc' placeholder='e.g. 123'{...register('cvc')} />
                </div>
            </div>
        </form>
    )
}

export default CardForm