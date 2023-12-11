import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon,
  } from "mdb-react-ui-kit";
  import axios from "axios";
  import React, { useState } from "react";
  
  function Signup3() {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState(""); // Added state for lastName
    const [email, setEmail] = useState(""); // Added state for email
    const [password, setPassword] = useState(""); // Added state for password
  
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevents the default form submission behavior
      axios
        .post("http://localhost:80/api/auth/signup", {
         name : name,
         lastname : lastname,
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res);

         
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    return (
      <MDBContainer fluid className="p-4">
        <MDBRow>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1 className="my-5 display-3 fw-bold ls-tight px-3">
             D-FORUM Sign up<br />
             
            </h1>
  
            <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
            Why D-Forum exists? D-Forum mission is to share and grow the world’s knowledge. Not all knowledge can be written down, but much of that which can be, still isn't. It remains in people’s heads or only accessible if you know the right people. We want to connect the people who have knowledge to the people who need it, to bring together people with different perspectives so they can understand each other better, and to empower everyone to share their knowledge for the benefit of the rest of the world.
            </p>
          </MDBCol>
  
          <MDBCol md="6">
            <MDBCard className="my-5">
              <MDBCardBody className="p-5">
                <MDBRow>
                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="First name"
                      id="form1"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </MDBCol>
  
                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Last name"
                      id="form1"
                      type="text"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </MDBCol>
                </MDBRow>
  
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="form1"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form1"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
  
                <div className="d-flex justify-content-center mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Subscribe to our newsletter"
                  />
                </div>
  
                <MDBBtn className="w-100 mb-4" size="md" onClick={handleSubmit}>
                  sign up
                </MDBBtn>
  
                <div className="text-center">
                  <p>or sign up with:</p>
  
                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="facebook-f" size="sm" />
                  </MDBBtn>
  
                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="twitter" size="sm" />
                  </MDBBtn>
  
                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="google" size="sm" />
                  </MDBBtn>
  
                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="github" size="sm" />
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
  
  export default Signup3;