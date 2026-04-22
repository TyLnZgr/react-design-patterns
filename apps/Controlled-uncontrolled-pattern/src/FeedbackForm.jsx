import { useState, useRef } from "react";
import "./FeedbackForm.css";

export default function FeedbackForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) {
      nameRef.current.focus();
      return;
    }
    if (!form.email.includes("@") | !form.email) {
      emailRef.current.focus();
      return;
    }
    if (!form.message) {
      messageRef.current.focus();
      return;
    }
    console.log("Form submitted:", form);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        name="name"
        ref={nameRef}
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
      />

      <input
        className="input"
        type="email"
        name="email"
        value={form.email}
        ref={emailRef}
        onChange={handleChange}
        placeholder="Email"
      />

      <textarea
        className="textarea"
        ref={messageRef}
        name="message"
        value={form.message}
        placeholder="Your message"
        onChange={handleChange}
      />

      <button className="button" type="submit">
        Send Feedback
      </button>
    </form>
  );
}
