import { NextPage } from "next";
import Navbar from "../navbar";
import Footer from "../footer";

const Layout: NextPage = ({ children }) => {
    return (
        <div className="layout-container">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;