import React, {useState,useEffect} from "react";
import {NavLink} from "react-router-dom";
import cn from "classnames";
import './header.scss';
import BasketPopupBasketPopup from "./components/basket-popup";
import {useHeader} from "../useHeader";
import {debounce} from "../../../helpers/debounce";
import {useDispatch} from "react-redux";
import {measureHeight} from "../../../store/header-margin/actions";

export const Header = ({
                           display,
                           isActiveBasket,
                           basketTextContent,
                           handleMouseEnter,
                           handleMouseLeave,
                           basketItems,
                           closePopup,
                           togglePopup

                       }) => {

    const [isMobileWidth,setIsMobileWidth] = useState(window.innerWidth < 770)
    // useEffect(()=>{
    //    setIsMobileWidth(window.innerWidth > 320 && window.innerWidth < 770)
    // },[setIsMobileWidth,isMobileWidth]);
     console.log('isMobileWidth',isMobileWidth)
    const dispatch = useDispatch();
    // const [heightValue,setHeightValue] = useState(null);

    const [menuDisplay, setMenuDisplay] = useState('flex');
    console.log('menuDisplay',menuDisplay)
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    // const {visible,setVisible} = useHeader();
const [visible, setVisible] = useState(true);
    console.log('VISIBLE',visible)
    useEffect(()=>{
        if(isMobileWidth !== true) {
            setMenuDisplay('flex');
            setVisible(true)
        }
        // if(isMobileWidth === true) {

        // }

    },[isMobileWidth]);

    // useEffect(()=>{
    //     dispatch(measureHeight(heightValue))
    // },[heightValue]);

        React.useEffect(() => {
            const handleResize = debounce(() => {

                 // if(isMobileWidth === true) {
console.log('YOU HAVE RESIZED TO MOBILE WIDTH')
                // }
                   console.log('handleResize')
                   // show header when viewport bigger then mobile then scroll to top
                   setVisible(true);
                   setMenuDisplay('flex');
                   // window.scrollTo(0, 0)
              if(  window.innerWidth < 770) {
                  setIsMobileWidth(true)
              } else if(  window.innerWidth > 770) {
                    setIsMobileWidth(false)
                }

            },50);

            window.addEventListener('resize', handleResize)

            // if(window.innerWidth > 770) {


                return () => window.removeEventListener('resize', handleResize);
            // }

    }, []);

    const handleScroll = debounce(() => {

        if(window.innerWidth > 320 && window.innerWidth < 770) {
            setMenuDisplay('none');
            // find current scroll position
            const currentScrollPos = window.pageYOffset;
            // set state based on location info (explained in more detail below)
            setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 170) || currentScrollPos < 30);

            // set state to new scroll position
            setPrevScrollPos(currentScrollPos);
        }

    }, 50);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, visible, handleScroll]);

    const  handleToggleMenu = () => {
        if (menuDisplay === "none") {
            setMenuDisplay('flex');
        }
        if(menuDisplay === 'flex') {
            setMenuDisplay('none');
        }
    };

    // useEffect(()=>{
    //    setScrollPosition(scrollPosition)
    //     console.log('scrollPosition',scrollPosition)
    // },[]);
    const condition = () =>{
         console.log('CONDITION', 'CONDITION IS HERE')
        if(isMobileWidth === true) {
            if(window.pageYOffset < 400) {
                console.log('window.pageYOffset < 400', 'CONDITION IS HERE')

                return   {position: 'static', top: 0}
            } else console.log('window.pageYOffset > 400', 'CONDITION IS HERE')

                return {position: 'fixed',top: 0}
        }
        if(isMobileWidth === false) {
            return  null
        }
       // return null;
    }

    return (
        <>

        <div className="main-header"

              style={condition()}
             // ref={el => {
             //     if (!el) return;
             //     console.log("initial width", el.getBoundingClientRect().height);
             //     let prevValue = JSON.stringify(el.getBoundingClientRect());
             //     const start = Date.now();
             //     const handle = setInterval(() => {
             //         let nextValue = JSON.stringify(el.getBoundingClientRect());
             //         if (nextValue === prevValue) {
             //             clearInterval(handle);
             //             console.log(
             //                 `width stopped changing in ${Date.now() - start}ms. final width:`,
             //                 el.getBoundingClientRect().height
             //             );
             //              setHeightValue(el.getBoundingClientRect().height)
             //              //  dispatch(measureHeight(el.getBoundingClientRect().height))
             //         } else {
             //             prevValue = nextValue;
             //         }
             //     }, 100);
             // }}
        >

        <div className="main-header__wrapper"  style={{display: visible ? 'flex' : 'none'}} >

            <div className="nav-container" >
                <button onClick={handleToggleMenu}
                        className={cn(`nav-main--button`, {
                            [`nav-main--button-open`]: menuDisplay === 'flex'
                        })}
                />
                <ul className="nav-container container-two"  style={{display: menuDisplay}} >
                    <NavLink  to="/catalog" className="nav-container__item nav-catalog">
                        <div className="text-container"><p className="text-container__text">
                            Каталог товаров
                        </p></div>
                    </NavLink>

                    <NavLink to="/form" className="nav-container__item nav-form" >
                        <div className="text-container"><p className="text-container__text">
                            Вязание на заказ
                        </p></div>
                        </NavLink>
                </ul>

                <NavLink  to="/" exact className="nav-container__item nav-main">

                </NavLink>

            </div>


            <div className="helper-container">
                <div className="helper-container__search" style={{display: menuDisplay}}>
                    <div className="text-container text-search"><p className="text-container__text">
                        Поиск по сайту
                    </p></div>
                    </div>

                <div onClick={togglePopup}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                     className="helper-container__basket"
                >
                    <div className={cn(`text-container text-basket`,
                             {
                                 [`text-container text-basket-active`]:
                                 isActiveBasket
                             })}
                    >
                        <p className="text-container__text">
                            {/*{heightValue}*/}
                        {`Корзина: ${basketTextContent}`}
                    </p></div>
                </div>
                <BasketPopupBasketPopup
                    display={display}
                    basketItems={basketItems}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    closePopup={closePopup}
                />
                <br/>
                <div className="free-delivery-tablet">Бесплатная доставка по России</div>
            </div>

        </div>

        <div className="container-filter">
            <ul className="container-filter__filter">
                <li className="container-filter__filter__item new-arrivals">Новые поступления</li>
                <li className="container-filter__filter__item sale">Распродажа</li>
            </ul>

            <div className="free-delivery">Бесплатная доставка по России</div>
        </div>
    </div>
            </>
    );
};
export default Header;
