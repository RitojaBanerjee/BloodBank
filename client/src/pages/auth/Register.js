import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="container-auto  px-2">
          <div className="container col-xxl-8 px-4 ">
            <div className="row flex-lg-row align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <h1 className="text-center">Welcome!</h1>
                <p className="text-center">
                  A trusted assosiation of Government. We are available 24 x 7
                  at your service.
                </p>
                <img
                  src="./assets/images/re.jpg"
                  className="d-block mx-lg-auto img-fluid"
                  alt="loginImage"
                  width={700}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6">
                <div className="form-container">
                  <Form
                    formTitle={"Register"}
                    submitBtn={"Register"}
                    formType={"register"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
