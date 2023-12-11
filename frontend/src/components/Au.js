import React from "react";
import img1 from "../components/images/230940320009.jpg"
import img3 from "../components/images/230940320128.jpg"
import img2 from "../components/images/230940520084.jpg"
import QuoraHeader from "./QuoraHeader";

const Au = () => {
  return (
    <>
    <QuoraHeader></QuoraHeader>
      <div className="p-5" style={{ backgroundColor: "#E0C3FC" }}>
        <div className="heading text-center">
          <h1>About Us</h1>
          <p>
          Why D-Forum exists?
D-Forum mission is to share and grow the world’s knowledge. Not all knowledge can be written down, but much of that which can be, still isn't. It remains in people’s heads or only accessible if you know the right people. We want to connect the people who have knowledge to the people who need it, to bring together people with different perspectives so they can understand each other better, and to empower everyone to share their knowledge for the benefit of the rest of the world.{" "}
          </p>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4 text-center">
                <img
                  src={img1}
                  className="img-fluid"
                  style={{width:'300px', height: '400px' }}
                />
                <div className="mt-2">
                  <p>Ajinkya Jadhav</p>
                </div>
              </div>

              <div className="col-md-4 text-center">
                <img
                  src={img2}
                  className="img-fluid"
                  style={{width:'300px', height: '400px' }}
                />
                <div className="mt-2">
                  <p>Shubhangini Sonawane</p>
                </div>
              </div>

              <div className="col-md-4 text-center">
                <img
                  src={img3}
                  className="img-fluid"
                  style={{width:'300px', height: '400px' }}
                />
                <div className="mt-2">
                  <p>Vikrant Gawale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Au;