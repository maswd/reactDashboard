import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from '../Router';
import Sidebar from '../SideBar/Sidebar';
import Topnav from '../topnav/TopNav';
import './layout.css'
import { useDispatch, useSelector } from 'react-redux';
import ThemeAction from '../../redux/actions/ThemeActions.js'

const Layout = () => {
    const themeReducer = useSelector(state => state.ThemeReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')
        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')
        dispatch(ThemeAction.setMode(themeClass))
        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch]);
    return (
        <BrowserRouter>
            <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                <Sidebar />
                <div className="layout_content">
                    <Topnav />
                    <div className="layout_content-main">
                        <Router />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Layout;
