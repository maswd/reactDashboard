import React from 'react';
import './sidebar.css';
import logo from '../../assets/image/logo.png'
import sidebar_items from '../../assets/JsonData/sidebar_routes.json';
import { Link, useLocation } from 'react-router-dom';


const SidebarItem = props => {
    const active = props.active ? 'active' : ''
    return (
        <div className="sidebar_item">
            <div className={`sidebar_item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}
const Sidebar = () => {
    let location = useLocation()
    const activeItem = sidebar_items.findIndex(item => item.route === location.pathname)
    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <img src={logo} alt="company logo" />
            </div>
            {
                sidebar_items.map((item, index) => (
                    <Link to={item.route} key={index}>
                        <SidebarItem
                            title={item.display_name}
                            icon={item.icon}
                            active={index === activeItem} />
                    </Link>
                ))
            }
        </div>
    );
}

export default Sidebar;
