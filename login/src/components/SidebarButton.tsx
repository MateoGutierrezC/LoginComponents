import { createElement } from 'react';
import '../assets/css/SidebarButton.css'
import { IconType } from 'react-icons'; 

interface SBbutton {
    text?: string
    icon: IconType;
}

function SidebarButton({ text,icon, }:SBbutton){
    return (
        <div className="sbutton">
            {createElement(icon, {})}
            <a className="text">{text}</a>
        </div>
    );
};

export default SidebarButton;