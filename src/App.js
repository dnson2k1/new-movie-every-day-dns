import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { publicRoutes } from "./routes/router";
import "~/assets/boxicons-2.0.7/css/boxicons.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes &&
          publicRoutes.map((item, index) => {
            const Page = item.component;
            const Layout = MainLayout;
            return (
              <Route
                key={index}
                path={item.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
                exact={item.exact ? true : false}
              />
            );
          })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
