export default function Footer() {
  return (
    <footer>
      <div className="footer-contact">
        Contato:
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=edumaster.0990@gmail.com&su=Contato%20via%20Portfolio&body=Ola%20Lucas%2C%20vi%20seu%20portfolio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Enviar e-mail"
          className="social-icon-link"
        >
          <svg
            className="social-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M2 5h20a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm10 7 9-6H3l9 6zm0 2L3 8v9h18V8l-9 6z" />
          </svg>
        </a>
        <a
          href="https://wa.me/5579996463241"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp 79 99646-3241"
          className="whatsapp-link"
        >
          <svg
            className="social-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.88 11.88 0 0 0 12.06 0C5.5 0 .15 5.35.15 11.91c0 2.1.55 4.15 1.6 5.95L0 24l6.34-1.66a11.85 11.85 0 0 0 5.72 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.46-8.41zM12.07 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.76.99 1-3.67-.24-.38a9.88 9.88 0 0 1-1.52-5.24C2.14 6.44 6.6 2 12.07 2c2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.89 7c0 5.47-4.45 9.9-9.87 9.9zm5.43-7.43c-.3-.15-1.76-.87-2.03-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.63.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.34.44-.51.15-.17.2-.3.3-.49.1-.2.05-.37-.02-.52-.08-.15-.66-1.58-.91-2.17-.24-.57-.49-.49-.66-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.9 1.22 3.1.15.2 2.11 3.22 5.11 4.52.71.31 1.26.5 1.7.63.71.22 1.35.19 1.86.12.56-.08 1.76-.72 2.01-1.42.25-.69.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
          </svg>
          <span>79 99646-3241</span>
        </a>
      </div>
      <div className="footer-social">
        <a
          href="https://www.linkedin.com/in/lucasmacedodev/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="social-icon-link"
        >
          <svg
            className="social-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2 4.01 0 4.75 2.64 4.75 6.08V24h-4v-7.1c0-1.69-.03-3.87-2.36-3.87-2.37 0-2.73 1.85-2.73 3.75V24h-4V8z" />
          </svg>
        </a>
        <a
          href="https://github.com/Lucasntj"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="social-icon-link"
        >
          <svg
            className="social-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.4 7.86 10.92.57.1.77-.25.77-.56v-1.96c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.27-1.7-1.27-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.75.4-1.25.72-1.53-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.3-.51-1.52.11-3.18 0 0 .97-.31 3.18 1.18a10.94 10.94 0 0 1 5.78 0c2.21-1.5 3.18-1.18 3.18-1.18.62 1.66.23 2.88.11 3.18.73.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.28 5.69.41.35.77 1.03.77 2.07v3.07c0 .31.2.67.78.56a11.53 11.53 0 0 0 7.85-10.92C23.5 5.66 18.35.5 12 .5z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
