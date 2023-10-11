import "./navigation.styles.jsx";
import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../../util/firebase/firebase.util";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import {
    LogoContainer,
    NavLinks,
    NavLink,
    NavigationContainer,
} from "./navigation.styles.jsx";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrwnLogo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">Shop</NavLink>
                    {currentUser ? (
                        <NavLink as="span" onClick={signOutUser}>
                            Sign Out
                        </NavLink>
                    ) : (
                        <NavLink to="/auth">Sign In</NavLink>
                    )}
                    <Link>
                        <CartIcon />
                    </Link>
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;