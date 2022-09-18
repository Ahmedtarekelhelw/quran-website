import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillLock } from "react-icons/ai";

import "./style.scss";

const Auth = ({ setUser: loginUser }) => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (user.userName && user.password && form.checkValidity()) {
      console.log("true");

      //this come from App.js to set user
      loginUser(true);

      //make request to login api

      //set error if the request not success
      setError(true);
    }
    setValidated(true);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="login d-flex">
      <div className="left bg-primary">
        <Container className="d-flex align-items-center justify-content-center h-100">
          <Form
            onSubmit={handleLogin}
            noValidate
            validated={validated}
            className="bg-white p-4 rounded-4"
          >
            <h4 className="mb-3 text-center fw-bold">تسجيل الدخول</h4>
            {error && (
              <span className="text-danger text-center d-block fw-bold">
                .خطأ في اسم المستخدم أو كلمة مرور
              </span>
            )}

            <Form.Group className="mb-3 text-end w-100">
              <Form.Label htmlFor="userName" className="fw-bold">
                اسم المستخدم
              </Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <HiOutlineMail size={20} color="#169b88" />
                </InputGroup.Text>
                <Form.Control
                  required
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="ادخل اسم المستخدم"
                  onChange={handleChange}
                  value={user.userName}
                  className="text-end login-input"
                ></Form.Control>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3 text-end w-100">
              <Form.Label htmlFor="password" className="fw-bold">
                كلمه المرور
              </Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <AiFillLock size={20} color="#169b88" />
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="ادخل كلمه المرور"
                  onChange={handleChange}
                  value={user.password}
                  className="text-end login-input"
                ></Form.Control>
              </InputGroup>
            </Form.Group>

            <Button
              type="submit"
              className="d-block ms-auto mb-4 px-4 text-white fw-bold"
              variant="secondary"
            >
              تسجيل الدخول
            </Button>
          </Form>
        </Container>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Auth;
