import './reviews.scss'
import {connect} from "react-redux"
import React, {Component} from "react";


 class Reviews extends Component {
    // state = {
    //     index:0,
    // };

render() {

    console.log( 'APP',this.props)
    const {comments,index,buttonLeftIsDisabled,buttonRightIsDisabled} = this.props;
    return (
        <article className="reviews">
            <div className="reviews__wrapper">
                <span className="reviews__headline">Отзывы</span>
                <button className="reviews__button">Написать</button>

                <p className="reviews__comment">Я молодая мама, но всё равно фотографии не набирали
                    и близко такого количества лайков,
                    как у популярных инстамамочек. В отчаянии,
                    я накупила аксессуаров и игрушек в Мишке,
                    и мои фотографии сразу стали более стильными,
                    а также набирают больше лайков!</p>

                <ul className="reviews__author">
                    <li  className="reviews__author__name">{comments[index].author}</li>
                    <li className="reviews__author__email">@misssssiskras</li>
                </ul>
                <section className="reviews__slider">
                    {/*<ButtonNext   commentsLength={comments.length} />*/}
                    {/*<ButtonPrev  commentsLength={comments.length}/>*/}
                    <button disabled={buttonLeftIsDisabled}   onClick={() => this.props.onNext()} className="reviews__slider__left"/>
                    <button  onClick={() => this.props.onSub()}  className="reviews__slider__right"/>
                </section>


            </div>
        </article>
    )
}
};

 function mapStateToProps(state,) {
     return {
         index: state.index,
         buttonLeftIsDisabled:state.buttonLeftIsDisabled,
         buttonRightIsDisabled:state.buttonRightIsDisabled,

     }
 }
 function mapDispatchToProps(dispatch) {
return {
    onNext: () => dispatch({type: 'NEXT'}),
    onSub: () => dispatch({type: 'PREV'})
}
 }
 export default connect(mapStateToProps,mapDispatchToProps) (Reviews);
