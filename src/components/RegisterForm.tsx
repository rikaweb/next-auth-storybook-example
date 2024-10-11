// components/RegisterForm.tsx
import React, { useState, useEffect } from "react";

type RegisterFormProps = {
  onSubmit: (data: { name: string; email: string; password: string }) => void;
};

export default function RegisterForm({ onSubmit }: RegisterFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    // Clear name error when name changes
    if (name.trim() !== "") {
      setErrors((prev) => ({ ...prev, name: "" }));
    }
  }, [name]);

  useEffect(() => {
    // Clear email error when email changes
    if (email.trim() !== "" && /\S+@\S+\.\S+/.test(email)) {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  }, [email]);

  useEffect(() => {
    // Clear password error when password changes
    if (password.length >= 6) {
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  }, [password]);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", password: "" };

    if (name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({ name, email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          data-testid="name-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          data-testid="email-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          data-testid="password-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <button type="submit" data-testid="submit-button">
        Register
      </button>
    </form>
  );
}
