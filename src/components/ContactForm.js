import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

function ContactForm() {
  let [name, setName] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  //   const getName = (event) => {
  //     setName(event.target.value);
  //   };
  const dispatch = useDispatch();

  const createContact = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      //   payload: { name: name, phoneNumber: phoneNumber },
      payload: { name, phoneNumber },
    });
    setName("");
    setPhoneNumber("");
  };

  return (
    <Form onSubmit={(event) => createContact(event)}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        {/* <Form.Control type="text" placeholder="이름을 입력해주세요" onChange={getName} /> */}
        <Form.Control
          type="text"
          placeholder="이름을 입력해주세요"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>전화번호</Form.Label>
        <Form.Control
          type="text"
          placeholder="전화번호를 입력해주세요"
          onChange={(d) => setPhoneNumber(d.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        추가
      </Button>
    </Form>
  );
}

export default ContactForm;
