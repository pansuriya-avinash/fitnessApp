import { PropsWithChildren } from "react";
import Header from "shared/components/navigation/header";
import Sidenavigation from "shared/components/navigation/sidenavigation";

const Layout: React.FC<PropsWithChildren> = (props) => {
  return (
    <div id="wrapper">
      <div id="page-wrapper" className="full--width">
        <div className="page-container">
          <Header />
          <div className="d-flex">
            <Sidenavigation />
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
