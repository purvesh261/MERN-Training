import React, { useState, useEffect } from 'react';

function Calculator () {
    const [amount, setAmount] = useState(0);
    const [years, setYears] = useState(1);
    const [totalAmount, setTotalAmount] = useState(0);
    const [amountPerMonth, setAmountPerMonth] = useState(0);

    var onChangeHandler = (event) => {
        let { name, value } = event.target;
        value = Number(value);
        console.log(name, value);
        if (name === "amount"){
            let total = value + value * 0.09 * years;
            total = total.toFixed(2)

            let perMonth = total / ( years * 12);
            perMonth = perMonth.toFixed(2);
            
            setAmount(value);
            setTotalAmount(total);
            setAmountPerMonth(perMonth);
        }
        else {
            value = (value === 0 ? 1 : value);
            let total = amount + amount * 0.09 * value;
            total = total.toFixed(2)

            let perMonth = total / (value * 12);
            perMonth = perMonth.toFixed(2);
            
            setTotalAmount(total);
            setYears(value);
            setAmountPerMonth(perMonth);
            
        }
        
    }

    return (
        <div className='p-3'>
            <h1>Loan Calculator</h1>
            <label>Amount</label>
            <input type="text" className="form-control w-25" name="amount" placeholder="Enter loan amount" onChange={(e) => onChangeHandler(e)}></input>
            <label>Years</label>
            <input type="text" className="form-control w-25" name="years" placeholder="Enter years" onChange={(e) => onChangeHandler(e)}></input>
            
            <div className='mt-3'>
                <h4>Interest Rate: 9%</h4>
                <h4>Total Amount: ₹ {totalAmount}</h4>
                <h4>Amount per month: ₹ {amountPerMonth}</h4>
            </div>
            

        </div>
    )
}

export default Calculator;