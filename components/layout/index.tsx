import { NextPage } from "next";
import Navbar from "../navbar";
import Footer from "../footer";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { useEffect } from "react";
import { addUser } from "../../redux/actions/user.action";
import FloatingButton from "../floatingbtn";

const Layout: NextPage = ({ children }) => {
  const state = useAppSelector(state => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const userData = window?.localStorage?.getItem('user');
    const tokenData = window?.localStorage?.getItem('token');
    if (userData && tokenData) {
      const user = JSON.parse(userData);
      const token = JSON.parse(tokenData);
      dispatch(addUser({ user, token }))
    }
  }, [])


  return (
    <div className="layout-container">
      <Navbar />
      {children}
      <Footer />

      {
        state?.userData?.user ?
          <>
            <FloatingButton path='/blog.png' bottom={100} route='me'/>
            <FloatingButton path='/logout.png' bottom={40} route='logout'/>
          </> : null
      }

    </div>
  );
}

export default Layout;