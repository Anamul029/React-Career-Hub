import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";


const Root = () => {
    return (
        <div>
            <div className="w-4/5 container mx-auto">
                <Header></Header>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Root;