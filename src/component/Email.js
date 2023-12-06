import React from "react";
import emailjs from "emailjs-com";

const Email = () => {

    const data={
        name:"mamu",
        prof:"doctor",
        email:"vikashtiwaristorage@gmail.com",
        message:"cooooool"
    }
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_01rrq5s",
        "template_mr47osa",
        e.target,
        "uH1iNFihQ_KnOTW4y"
      )

      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const send=()=>{
    emailjs
      .send(
        "service_01rrq5s",
        "template_t3e9gec",
        data,
        "uH1iNFihQ_KnOTW4y"
      )

      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <h1>Contact form</h1>
      <form onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" />
        <br />
        <label>Email</label>
        <input type="email" name="user_email" />
        <br />
        <label>Message</label>
        <textarea name="message" />
        <br />
        <input type="submit" value="Send" />
      </form>
      <button onClick={send}>Click</button>
    </div>
  );
};

export default Email;
