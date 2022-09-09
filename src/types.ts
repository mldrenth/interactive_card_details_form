export type CardFormInputs = {
    name: string,
    cardNumber: string,
    month: Month,
    year: number,
    cvc: number
}

export type Month = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12'