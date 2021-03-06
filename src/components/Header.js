import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toggleDarkMode, convertUnits } from '../actions'

const Header = () => {
    const favorites = useSelector(state => state.favoritesData)
    const isMetric = useSelector(state => state.isMetric)
    const dispatch = useDispatch()

    return (
        <header className="header">
            <div className="container">
                <nav className="header__navbar">
                    <h1 className="header__logo">
                        <Link to="/">Weather App</Link>
                    </h1>
                    <ul className="header__list">
                        <li>
                            <Link to="/favorites">
                                <i className="header__favorite-icon fas fa-heart">
                                    <div className="header__favorite-num">{favorites.length}</div>
                                </i>
                            </Link>
                        </li>
                        <li>
                            <button onClick={(e) => dispatch(toggleDarkMode())}><i className="fas fa-adjust"></i></button>
                        </li>
                        <li>
                            <button onClick={e => dispatch(convertUnits())}><div className="header__unit-icon">{isMetric ? '\xB0C' : '\xB0F'}</div></button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header