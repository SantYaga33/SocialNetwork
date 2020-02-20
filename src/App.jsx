import React from 'react';
import './App.css';
import TimeLine from "./Components/TimeLine/TimeLine";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {BrowserRouter } from "react-router-dom";


import { faCoffee ,faSearch,faHome ,faCommentAlt,
    faClipboard,faMouse, faFile,faUser,faImages,
    faVideo,faSms,faBell, faStreetView,faChartLine,
    faPowerOff,faGlobeAsia,faAlignRight, faEye, faComments,
    faHeart, faHeartbeat,faShareAltSquare, faReply , faMusic,faImage,
    faFileVideo, faCamera, faAddressCard, faMobileAlt} from '@fortawesome/free-solid-svg-icons'



library.add(fab, faCoffee ,faSearch,faHome ,faCommentAlt,
    faGlobeAsia,  faClipboard,faMouse, faFile,faUser,faImages,
    faVideo,faSms,faBell, faStreetView,faChartLine,faPowerOff,
    faAlignRight, faEye, faComments, faHeart, faHeartbeat,
    faShareAltSquare,faReply,faMusic,faImage, faFileVideo, faCamera,
    faAddressCard, faMobileAlt);


const  App = (props) => {
    return (
       <BrowserRouter>
           <TimeLine headerNavLinks={props.headerNavLinks}/>
       </BrowserRouter>

    );
};



export default App;
