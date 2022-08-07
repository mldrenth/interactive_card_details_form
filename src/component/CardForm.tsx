import { useFormContext } from 'react-hook-form';


const CardForm = () => {
    const { register } = useFormContext();

    return (
        <form>
            <label>Cardholder Name</label>
            <input {...register('name')}/>
            <label>Card Number</label>
            <input {...register('cardNumber')}/>
            <label>Exp. Date (MM/YY)</label>
            <input {...register('month')}/>
            <input {...register('year')}/>
            <label>CVC</label>
            <input {...register('cvc')}/>
        </form>
    )
}

export default CardForm