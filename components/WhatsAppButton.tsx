"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919525500039"
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Chat on WhatsApp"
    >
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M16 2C8.268 2 2 8.268 2 16C2 18.68 2.77 21.19 4.1 23.32L2 30L9.04 27.94C11.1 29.23 13.47 29.97 16 29.97C23.732 29.97 30 23.7 30 15.97C30 8.268 23.732 2 16 2Z"
          fill="currentColor"
        />
        <path
          d="M11.2 11.5C11.2 11.5 11.5 13 12.8 14.3C14.1 15.6 15.8 16.4 15.8 16.4L18.2 14.2C18.2 14.2 19.1 14.6 20.7 15.5C20.7 15.5 21.1 17.3 19.8 18.2C18.5 19.1 14.8 18.4 12 15.6C9.2 12.8 8.5 9.2 9.5 8C10.1 7.3 11.8 7.5 11.8 7.5L13.6 10L11.2 11.5Z"
          fill="white"
          strokeLinejoin="round"
        />
      </svg>
      <span className="wa-float-label">Chat with us</span>
    </a>
  );
}
