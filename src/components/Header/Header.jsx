import {useEffect, useState, useContext} from "react";
import { useNavigate } from "react-router-dom";

import {TbSearch} from "react-icons/tb";
import {CgShopingCart} from "react-icons/cg";
import {AiOutlineHeadr} from "react-icons/ai";

import Search from "../Header/Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

import "./Header.scss";
const Header = () => {
    const[scrolled, setScrolled] = useState(false);

    const handScroll = () =>{
        const offset = window.scrollY;
        if(offset > 200){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", handScroll);
    }, []);
    return(
        <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
            <ul className="left">
                <li>Home</li>
                <li>About</li>
                <li>Categories</li>
            </ul>
            <div className="center">JSDEVSTORE.</div>
            <div className="right">
                <TbSearch />
                <TbSearch />
                {/* <AiOutlineHeadr /> */}
                <span className="cart-icon">
                    {/* <CgShopingCart /> */}
                    <TbSearch />
                    <span>3</span>
                </span>
            </div>
        </div>
    </header>
    );
};

export default Header;
