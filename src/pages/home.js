import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const HomePage = () => {
  return (
    <div>
      <Layout pageTitle="Brisbane Full Gospel">
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../assets/bfgc_cam.jpg"
          width="900"
          height="400"
        />
      </Layout>
    </div>
  );
};

export default HomePage;
