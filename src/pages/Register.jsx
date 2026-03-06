import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fields = [
    {
      label: "Full Name",
      name: "fullName",
      type: "text",
      placeholder: "Marry Doe",
      required: true,
    },
    {
      label: "Phone number",
      name: "phone",
      type: "tel",
      placeholder: "Marry Doe",
      required: true,
    },
    {
      label: "Email address",
      name: "email",
      type: "email",
      placeholder: "Marry Doe",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Marry Doe",
      required: true,
    },
    {
      label: "Company name",
      name: "company",
      type: "text",
      placeholder: "Marry Doe",
      required: false,
    },
  ];

  return (
    <div className="flex flex-col h-full w-full px-8 pt-10 overflow-y-auto">
      {/* Heading */}
      <h1
        className="text-3xl font-bold mb-6 leading-tight"
        style={{ color: "var(--color-text-main)" }}
      >
        Create your
        <br />
        PopX account
      </h1>

      {/* Fields */}
      <div className="flex flex-col gap-6">
        {fields.map((field) => (
          <div key={field.name} className="relative">
            <label
              className="absolute -top-2 left-3 text-xs font-medium px-1"
              style={{
                color: "var(--color-primary)",
                backgroundColor: "var(--color-surface)",
              }}
            >
              {field.label}
              {field.required && <span style={{ color: "red" }}> *</span>}
            </label>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={form[field.name]}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg text-sm outline-none"
              style={{
                border: "1.5px solid #d1d5db",
                color: "var(--color-text-main)",
                backgroundColor: "var(--color-surface)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Are you an Agency? */}
      <div className="mt-6">
        <p className="text-sm mb-3" style={{ color: "var(--color-text-main)" }}>
          Are you an Agency?<span style={{ color: "red" }}>*</span>
        </p>
        <div className="flex items-center gap-6">
          {["yes", "no"].map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center"
                style={{
                  border: `2px solid ${form.isAgency === option ? "var(--color-primary)" : "#d1d5db"}`,
                  backgroundColor:
                    form.isAgency === option
                      ? "var(--color-primary)"
                      : "transparent",
                }}
                onClick={() => setForm({ ...form, isAgency: option })}
              >
                {form.isAgency === option && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
              <span
                className="text-sm"
                style={{ color: "var(--color-text-main)" }}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Create Account Button */}
      <button
        onClick={() => navigate("/login")}
        className="w-full py-4 rounded-lg text-white font-semibold text-base transition-opacity hover:opacity-90 mb-2"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        Create Account
      </button>
    </div>
  );
}
