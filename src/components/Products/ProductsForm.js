import { useState, useRef } from "react"
import classes from './ProductForm.module.css'

const ProductsItemForm = (props)=>{

    const [amountIsValid, setAmountIsValid] = useState(true)

    const amountInputRef = useRef()

    const submitHandler = (event)=>{
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount

        if(enteredAmount.trim().length === 0 || enteredAmount<1||enteredAmountNumber.length>5){
            setAmountIsValid(false);
            return
        }

        props.onAddCart(enteredAmountNumber)
    }
    return (
        <form onSubmit={submitHandler} action="">
            <div className={classes.form}>
                <label htmlFor={`amount_${props.id}`}>Amount</label>
                <input id={`amount_${props.id}`} type="number" min='1' max='5'defaultValue='1' step='1' ref={amountInputRef}/>
                <button>+</button>
                {!amountIsValid && <p>Kindly enter a valid amount</p>}
            </div>
        </form>
    )
}

export default ProductsItemForm