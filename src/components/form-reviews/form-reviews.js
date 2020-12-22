import React, {useEffect, useState} from "react";
import './form-reviews.scss';
import {useDispatch} from "react-redux";
import {createReview} from "../../store/comments/actions";
import Input from "../input/input";

export const FormReviews = ({isOpened, closePopup,openSuccessPopup}) => {
    const dispatch = useDispatch();
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const onSubmit =  (evt) => {
        evt.preventDefault();
        evt.currentTarget.reset();
            const review = { name, email, comment };
            dispatch(createReview(review));
            closePopup();
            openSuccessPopup();
    };

    useEffect(() => {
        const onEscKeyDown = (evt) => {
            if (evt.key === `Escape`) {
                   closePopup();
            }
        };
        document.addEventListener(`keydown`, onEscKeyDown);
        return () => document.removeEventListener(`keydown`, onEscKeyDown);
    }, [closePopup]);

    const onConfirmClick = (evt) => {
        evt.stopPropagation();
        if (evt.target === evt.currentTarget) {
            closePopup();
        }
    };


const errorMessage = (evt) => {
    const minLength = 6;

    if (evt.target.value.length < minLength) {
        return 'Слишком короткое имя'
    }
};
    const validInput = "2px solid green";
    const inValidInput = "2px solid red";

    const minLength = 6;

  const  state = {
        formControls: {
            userName: {
                type: "text",
                classNameLabel: "label-review-name",
                classNameInput: "review-name",
                labelValue: "Имя:",
                required: true,
                id: "review-name",
                placeholder: "Введите ваше имя*",
                errorMessage: 'Введите корректное имя',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            email: {
                type: "text",
                classNameLabel: "label-review-email",
                classNameInput: "review-email",
                labelValue: "Email:",
                required: true,
                id: "review-email",
                placeholder: "Введите ваш email*",
                onChange: (evt) => {
                    if(evt.target.value < minLength) {
                        console.log('слишком коротко')
                    }
                    if (!evt.target.value.includes('@')) {
                        console.log('некорректный адрес')
                    }},
                errorMessage: (evt) => {
                    if(evt.target.value < minLength) {
                       return  'слишком коротко'
                    }
                    if (!evt.target.value.includes('@')) {
                       return 'некорректный адрес'
                    }},
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    };

   const renderInputs = () => {
        return Object.keys(state.formControls).map((controlName, index) => {
            const control = state.formControls[controlName];
            return (
                <>
                <li key={control.id} className="form-reviews__personal-data__list__item">
                <Input
                    onChange={control.onChange}
                    type={control.type}
                    classNameLabel={control.classNameLabel}
                    classNameInput={control.classNameInput}
                    value={control.labelValue}
                    required={control.required}
                    id={control.id}
                    placeholder={control.placeholder}
                    errorMessage={control.errorMessage}
                />
                    {console.log(control.errorMessage)}
                    </li>
                <span className="error-message">{control.errorMessage}</span>
                    </>
            )
        })
    }

    return (
        <>
            <div style={{display: isOpened}} onClick={onConfirmClick}  className="popup">
        <form className="form-popup" onSubmit={onSubmit} >
        <section className="form-reviews__personal-data">
            <div className="form-reviews__personal-data__wrapper">
                <ul className="form-reviews__personal-data__list">

                    {/*<li className="form-reviews__personal-data__list__item">*/}
                    {/*    <label className="label-name " htmlFor="review-name">Имя: </label>*/}
                    {/*    <input required={true}*/}
                    {/*         // style={{border:inValidInput}}*/}
                    {/*         // onChange={inputState.onChange}*/}
                    {/*        type="text"*/}
                    {/*           id="review-name"*/}
                    {/*        // className="validInput"*/}
                    {/*        placeholder="Введите ваше имя*" />*/}

                    {/*</li>*/}
                    {/*{isInvalid(props) ? <span>{props.erroMessage || ''}</span>*/}
                    {/*: null*/}
                    {/*}*/}

                    {/*<li className="form-reviews__personal-data__list__item">*/}
                    {/*    <label className="label-family-name" htmlFor="family-name">email: </label>*/}
                    {/*    <input*/}
                    {/*        onChange={(evt) => setEmail(evt.target.value)}*/}
                    {/*        type="text" id="family-name" placeholder="Укажите фамилию*"/>*/}
                    {/*</li>*/}
                    {renderInputs()}
                        <textarea
                            onChange={(evt) => setComment(evt.target.value)}
                            className="form-reviews__textarea" id="patronymic" placeholder="Пожалуйста, оставьте отзыв!"/>
                    <div className="form-reviews__button-container">
                        <input type="submit" className="form-reviews__button-container__button" value="Оставить отзыв"/>
                        <strong className="form-reviews__button-container__span">*Поля обязательны для заполнения</strong>
                    </div>

                </ul>
            </div>
        </section>
        </form>

            </div>
            </>
    )
};
