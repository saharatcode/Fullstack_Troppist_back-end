import { Outlet } from "react-router-dom";

function PublicLayout() {
    return(
    <div className="container">
        <div className="align-items-center justify-content-center vh-100">
            {/* <div className="rol-lg-5 border" >
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" className="w-50" alt="trippost-logo"/>
                <h3>Trippost vry very very good Blog.</h3>
            </div> */}
            <div className="rol-lg-7 border ">
                <Outlet/>
                
            </div>
        </div>
    </div>
    );
}

export default PublicLayout;