function Footer() {
  return (
    <footer
      className="footer hidden-print bg-[#171717] text-white py-8"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="max-w-screen-lg mx-auto px-6">
        <span
          className="section__divide block border-t border-gray-600 my-6"
          aria-hidden="true"
        ></span>
        <article
          className="section__content flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start gap-y-6 sm:gap-y-0"
          role="region"
          aria-label="Footer Content"
        >
          <div
            className="footer__copyright text-center sm:text-left text-sm text-gray-400 md:text-base"
            aria-label="Copyright Information"
          >
            <p className="text-primary">
              Developed with ♥ from Barcelona to the world
            </p>
            <p>© 2025 Jessica Arroyo Lebrón</p>
          </div>

          <ul
            className="footer__nav-social flex gap-4 text-xl"
            aria-label="Social Links"
          >
            <li className="footer__nav-item">
              <a
                href="https://www.linkedin.com/in/jessica-arroyo-lebron/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li className="footer__nav-item">
              <a
                href="https://github.com/jess-ar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <i className="fa-brands fa-github" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </article>
      </div>
    </footer>
  );
}

export default Footer;