import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import UrlHighlight from "../components/buttons/UrlHighlight";
import LandingPage from "../pages/landingPage/LandingPage";
import Missing from "../components/missing/Missing";
import ValidProductRoute from "./ValidProductRoute";
import Footer from "../components/footer/Footer";

const Overview = lazy(
  () => import("../pages/productTemplate/overview/Overview")
);
const Consumers = lazy(
  () => import("../pages/productTemplate/consumers/Consumers")
);
const References = lazy(
  () => import("../pages/productTemplate/references/References")
);
const TeamMembers = lazy(
  () => import("../pages/productTemplate/teamMembers/TeamMembers")
);

const Routing = () => {
  return (
    <div>
      <UrlHighlight>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<LandingPage />} />
            <Route
              path="/product/:productId"
              element={<ValidProductRoute component={Overview} />}
            />
            <Route
              path="/product/:productId/overview"
              element={<ValidProductRoute component={Overview} />}
            />
            <Route
              path="/product/:productId/consumers"
              element={<ValidProductRoute component={Consumers} />}
            />
            <Route
              path="/product/:productId/references"
              element={<ValidProductRoute component={References} />}
            />
            <Route
              path="/product/:productId/team-members"
              element={<ValidProductRoute component={TeamMembers} />}
            />
            <Route path="*" element={<Missing />} />
          </Routes>
        </Suspense>
      </UrlHighlight>
      <Footer />
    </div>
  );
};

export default Routing;
