import React from 'react'
import classes from './input.css'

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

const Input = props => {
    const inputType = props.type || 'text';
    const cls = [classes.Input];
console.log(cls)
    if (isInvalid(props)) {
        cls.push(classes.invalid)
    }
console.log(classes.invalid)
    if (true) {
        cls.push(classes.invalid)
    }
    return (
        <>
            <label className={props.classNameLabel} htmlFor={props.id}>{props.value}</label>
            <input
                className={cls.join('')}
                // className={[props.classNameInput]}
                required={props.required}
                type={inputType}
                id={props.id}
                placeholder={props.placeholder}
                onChange={props.onChange}
            />

            {/*{*/}
            {/*    isInvalid(props)*/}
            {/*        ? <span>{props.errorMessage || 'Введите верное значение'}</span>*/}
            {/*        : null*/}
            {/*}*/}
            </>

    )
}

export default Input



// import React from "react";
// import classes from './input.css'
//
// const Input = (props) => {
//     const inputType = props.type || 'text';
//     const cls = [classes.input];
//     const htmlFor = `${inputType}-${Math.random()}`;
//
//     return (
//         <>
//         <label htmlFor={htmlFor}>{props.label}</label>
//        <input className={cls.join('')}
//         type={inputType}
//         id={htmlFor}
//         value={props.value}
//         onChange={props.onChange}
//         />
//             </>
//     )
// };
//
// export default Input;
