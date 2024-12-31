import logo from '@/assets/icons/logo.svg';

function Footer() {
  return (
    <>
      <div className="footer bg-[#171717]">
        <div className="wrap flex justify-between items-center px-8 text-white font-bold py-6 tl:px-4 tl:py-4 pl-0 md:pl-0 lg:pl-0 ">
          <img src={logo} alt="Jess-ar Logo" className="w-28 h-10" />
          <div className="flex gap-4 cursor-pointer ">
            <a href="https://www.linkedin.com/in/jessica-arroyo-lebron/" target="_blank">
              <i className="fa-brands fa-linkedin border-[1px] border-primary p-2 rounded-[100%] hover:bg-primary hover:text-secondary"></i>
            </a>
            <a href="https://github.com/jess-ar" target="_blank">
              <i className="fa-brands fa-github border-[1px] border-primary p-2 rounded-[100%] hover:bg-primary hover:text-secondary"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
