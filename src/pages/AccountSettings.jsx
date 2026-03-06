export default function AccountSettings() {
  return (
    <div className="flex flex-col h-full w-full">
      {/* Header */}
      <div className="px-6 py-5" style={{ borderBottom: "1px solid #e5e7eb" }}>
        <h1
          className="text-lg font-semibold"
          style={{ color: "var(--color-text-main)" }}
        >
          Account Settings
        </h1>
      </div>

      {/* Profile section */}
      <div
        className="px-6 py-5"
        style={{
          borderBottom: "2px dashed #d1d5db",
          backgroundColor: "#f9fafb",
        }}
      >
        {/* Avatar + Info */}
        <div className="flex items-center gap-4 mb-5">
          <div className="relative" style={{ width: "64px", height: "64px" }}>
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
            {/* Camera badge */}
            <div
              className="absolute bottom-0 right-0 w-5 h-5 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M12 15.2A3.2 3.2 0 1 0 12 8.8a3.2 3.2 0 0 0 0 6.4z" />
                <path d="M9 3L7.17 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.17L15 3H9zm3 14a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
              </svg>
            </div>
          </div>

          {/* Name and email */}
          <div>
            <p
              className="font-semibold text-base"
              style={{ color: "var(--color-text-main)" }}
            >
              Marry Doe
            </p>
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              Marry@Gmail.Com
            </p>
          </div>
        </div>

        {/* Lorem ipsum text */}
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--color-text-main)" }}
        >
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Dashed line moved up from bottom */}
      <div className="mb-16" style={{ borderTop: "2px dashed #d1d5db" }} />
    </div>
  );
}
