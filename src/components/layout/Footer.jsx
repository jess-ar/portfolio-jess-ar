function Footer() {
  return (
    <footer className="footer hidden-print bg-[#171717] text-white py-8">
      <div className="footer__container mx-auto px-6 max-w-7xl mt-20">
        {/* Divisor */}
        <span className="section__divide block border-t border-gray-600 my-6"></span>
        <article className="section__content flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start gap-y-6 sm:gap-y-0">

          <div className="footer__copyright text-center sm:text-left text-sm text-gray-400 md:text-base">
            Developed with ♥ from Barcelona to the world
            <br />
            <a href="https://moure.dev" className="text-primary hover:underline">
              © 2025 Jessica Arroyo Lebrón
            </a>
          </div>

          <ul className="footer__nav-social flex gap-4 text-xl">
            <li className="footer__nav-item">
              <a href="https://www.linkedin.com/in/jessica-arroyo-lebron/" target="_blank" className="hover:text-primary transition-colors">
                <i className="fa-brands fa-linkedin" />
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="https://github.com/jess-ar" target="_blank" className="hover:text-primary transition-colors">
                <i className="fa-brands fa-github" />
              </a>
            </li>
          </ul>
        </article>
      </div>
    </footer>
  );
}

export default Footer;