import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const validateEmail = (value) => {
    if (!value) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return "Enter a valid email address";
    return "";
  };

  const validatePassword = (value) => {
    if (!value) return "Password is required";
    if (value.length < 6) return "Password must be at least 6 characters";
    return "";
  };

  const handleEmailChange = (e) => {
    const val = e.target.value;
    setEmail(val);
    if (emailTouched) setEmailError(validateEmail(val));
  };

  const handlePasswordChange = (e) => {
    const val = e.target.value;
    setPassword(val);
    if (passwordTouched) setPasswordError(validatePassword(val));
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    setEmailError(validateEmail(email));
  };

  const handlePasswordBlur = () => {
    setPasswordTouched(true);
    setPasswordError(validatePassword(password));
  };

  const isFormValid = !validateEmail(email) && !validatePassword(password);

  const handleLogin = () => {
    if (isFormValid) navigate("/account");
  };

  return (
    <div className="flex flex-col h-full w-full px-8 pt-10">
      {/* Heading */}
      <h1
        className="text-3xl font-bold mb-3 leading-tight"
        style={{ color: "var(--color-text-main)" }}
      >
        Signin to your
        <br />
        PopX account
      </h1>

      <p
        className="text-sm leading-relaxed mb-8"
        style={{ color: "var(--color-text-muted)" }}
      >
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit,
      </p>

      {/* Email Field */}
      <div className="relative mb-6">
        <label
          className="absolute -top-2 left-3 text-xs font-medium px-1"
          style={{
            color: emailError && emailTouched ? "red" : "var(--color-primary)",
            backgroundColor: "var(--color-surface)",
          }}
        >
          Email Address
        </label>
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          className="w-full px-4 py-3 rounded-lg text-sm outline-none"
          style={{
            border: `1.5px solid ${emailError && emailTouched ? "red" : "#d1d5db"}`,
            color: "var(--color-text-main)",
            backgroundColor: "var(--color-surface)",
          }}
        />
        {emailTouched && emailError && (
          <p className="text-xs mt-1 ml-1" style={{ color: "red" }}>
            {emailError}
          </p>
        )}
      </div>

      {/* Password Field */}
      <div className="relative mb-8">
        <label
          className="absolute -top-2 left-3 text-xs font-medium px-1"
          style={{
            color:
              passwordError && passwordTouched ? "red" : "var(--color-primary)",
            backgroundColor: "var(--color-surface)",
          }}
        >
          Password
        </label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          className="w-full px-4 py-3 rounded-lg text-sm outline-none"
          style={{
            border: `1.5px solid ${passwordError && passwordTouched ? "red" : "#d1d5db"}`,
            color: "var(--color-text-main)",
            backgroundColor: "var(--color-surface)",
          }}
        />
        {passwordTouched && passwordError && (
          <p className="text-xs mt-1 ml-1" style={{ color: "red" }}>
            {passwordError}
          </p>
        )}
      </div>

      {/* Login Button */}
      <button
        onClick={handleLogin}
        disabled={!isFormValid}
        className="w-full py-4 rounded-lg text-white font-semibold text-base transition-all cursor-pointer"
        style={{
          backgroundColor: isFormValid ? "var(--color-primary)" : "#b0b0b0",
          cursor: isFormValid ? "pointer" : "not-allowed",
        }}
      >
        Login
      </button>
    </div>
  );
}
