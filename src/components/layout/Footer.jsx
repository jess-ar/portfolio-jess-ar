function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/jessica-arroyo-lebron/",
      label: "LinkedIn Profile",
      icon: "fa-linkedin",
    },
    {
      href: "https://github.com/jess-ar",
      label: "GitHub Profile",
      icon: "fa-github",
    },
  ];

  const trackClick = ({ action, category, label }) => {
    window.gtag?.("event", action, {
      event_category: category,
      event_label: label,
    });
  };

  return (
    <footer className="footer hidden-print bg-[#171717] text-white py-8">
      <div className="max-w-screen-lg mx-auto px-6">
        <span
          className="section__divide block border-t border-gray-600 my-6"
          aria-hidden="true"
        ></span>

        <section
          className="section__content flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start gap-y-6 sm:gap-y-0"
          aria-label="Footer Content"
        >
          <div className="footer__copyright text-center sm:text-left text-sm text-gray-400 md:text-base">
            <p className="text-primary">
              Developed with ♥ from Barcelona to the world
            </p>
            <p>© {currentYear} Jessica Arroyo Lebrón</p>
          </div>

          <ul
            className="footer__nav-social flex gap-4 text-xl"
            aria-label="Social Links"
          >
            {socialLinks.map(({ href, label, icon }) => (
              <li key={label} className="footer__nav-item">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label={label}
                  onClick={() =>
                    trackClick({
                      action: "click_social_link",
                      category: "Footer",
                      label,
                    })
                  }
                >
                  <i className={`fa-brands ${icon}`} aria-hidden="true"></i>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
