import React, { useRef } from 'react';
import './dropdown.css'
export const clickOutSideRef = (content_ref, toggles_ref) => {
    document.addEventListener('mousedown', (e) => {
        //user click toggle
        if (toggles_ref.current && toggles_ref.current.contains(e.target)) {
            content_ref.current.classList.toggle("active")
        }
        else {
            //user click outSide
            if (content_ref.current && !content_ref.current.contains(e.target)) {
                content_ref.current.classList.remove("active")
            }
        }

    })
}
const Dropdown = props => {
    const dropdown__content_el = useRef(null);
    const dropdown__toggle_el = useRef(null)

    clickOutSideRef(dropdown__content_el, dropdown__toggle_el)
    return (
        <div className='dropdown'>
            <button ref={dropdown__toggle_el} className="dropdown__toggle">
                {
                    props.icon ? <i className={props.icon}></i> : ''}
                {
                    props.badge ?
                        <span className='dropdown__toggle-badge'>
                            {props.badge}
                        </span> : ''
                }
                {
                    props.customToggle ? props.customToggle() : ''
                }
            </button>
            <div ref={dropdown__content_el} className="dropdown__content">
                {
                    props.contentData && props.renderItems ?
                        props.contentData.map((item, index) =>
                            props.renderItems(item, index)) : ""
                }
                {
                    props.renderFooter ? (
                        <div className="dropdown__footer">
                            {props.renderFooter()}
                        </div>) : ""
                }
            </div>
        </div>
    );
}

export default Dropdown;
