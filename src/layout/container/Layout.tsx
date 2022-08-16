import { Fragment, Suspense, useMemo, useState } from "react";
import { Routes } from "layout/components";
import { Header, Sidebar } from "../../components";
import { LayoutStyled } from "../style/Layout";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const [collapse, setCollapse] = useState(true);
  const { pathname } = useLocation();

  const isFullWidth = useMemo(() => {
    return pathname.includes("/login");
  }, [pathname]);

  return (
    <Fragment>
      {!isFullWidth ? (
        <LayoutStyled collapse={collapse}>
          <div className="sidebar-content">
            <Sidebar />
          </div>
          <div className={`wrapper`}>
            <Header />
            <div className="wrapper-content">
              <Suspense fallback="Loading...">
                <Routes />
              </Suspense>
            </div>
          </div>
        </LayoutStyled>
      ) : (
        <Suspense fallback="Loading">
          <Routes />
        </Suspense>
      )}
    </Fragment>
  );
};

export default Layout;
