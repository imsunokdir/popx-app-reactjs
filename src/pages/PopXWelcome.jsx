import { useNavigate } from "react-router-dom";

export default function PopXWelcome() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full w-full">
      {/* Spacer pushes content to bottom - flex-none with fixed height to control position */}
      <div style={{ flex: "0 0 55%" }} />

      {/* content */}
      <div className="px-8">
        <h1
          className="text-3xl font-bold mb-3"
          style={{ color: "var(--color-text-main)" }}
        >
          Welcome to PopX
        </h1>
        <p
          className="text-sm leading-relaxed mb-8"
          style={{ color: "var(--color-text-muted)" }}
        >
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        {/* Create Account Button */}
        <button
          onClick={() => navigate("/register")}
          className="w-full py-4 rounded-lg text-white font-semibold text-base mb-4 transition-opacity hover:opacity-90 cursor-pointer"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          Create Account
        </button>

        {/* Already Registered Button */}
        <button
          onClick={() => navigate("/login")}
          className="w-full py-4 rounded-lg font-semibold text-base mb-2 transition-opacity hover:opacity-90 cursor-pointer"
          style={{
            backgroundColor: "var(--color-primary-light)",
            color: "var(--color-primary-dark)",
          }}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}
