import React, { useState } from 'react';

function Calculator () {
    const [amount, setAmount] = useState(0);
    const [years, setYears] = useState(1);
    const [totalAmount, setTotalAmount] = useState(0);
    const [amountPerMonth, setAmountPerMonth] = useState(0);
    const [rate, setRate] = useState(0);

    var onChangeHandler = (event) => {
        let { name, value } = event.target;
        value = Number(value);
        console.log(name, value);
        if (name === "amount"){
            let total = value + value * (rate/100) * years;
            total = total.toFixed(2)

            let perMonth = total / ( years * 12);
            perMonth = perMonth.toFixed(2);
            
            setAmount(value);
            setTotalAmount(total);
            setAmountPerMonth(perMonth);
        }

        else if (name === "years"){
            value = (value === 0 ? 1 : value);
            let total = amount + amount * (rate/100) * value;
            total = total.toFixed(2)

            let perMonth = total / (value * 12);
            perMonth = perMonth.toFixed(2);
            
            setTotalAmount(total);
            setYears(value);
            setAmountPerMonth(perMonth);
            
        }
        else{
            let total = amount + amount * (value/100) * years;
            total = total.toFixed(2);

            let perMonth = total / (years * 12);
            perMonth = perMonth.toFixed(2);

            setTotalAmount(total);
            setRate(value);
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
            <label>Rate</label>
            <input type="text" className="form-control w-25" name="rate" placeholder="Enter rate of interest" onChange={(e) => onChangeHandler(e)}></input>
            
            <div className="alert alert-success alert-dismissible fade show mt-3 w-25" role="alert">
                <h5>Total Amount: ₹ {totalAmount}</h5>
                <h5>Amount per month: ₹ {amountPerMonth}</h5>
            </div>

        </div>
    )
}

export default Calculator;