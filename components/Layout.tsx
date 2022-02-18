import { ReactChild, ReactChildren } from "react";
import Footer from "./Footer";
import Navbar from "./NavBar/Navbar";

export interface AuxProps {
  children: ReactChild | ReactChildren;
}

const Layout = ({ children }: AuxProps) => {
  return (
    <>
      <Navbar />
      <div style={{ height: 64 }}></div>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
