import { useLocation } from "react-router-dom";
import React from "react";

const NotFound404 = () => {
    let {pathname} = useLocation()
    return(
        <div>
            <h1 className="display-1 text-center">Page not Found {pathname}</h1>
        </div>
    )
}

export default NotFound404;