import namine from "@/assets/images/namine.jpg";
import jessAboutSvg from "@/assets/icons/jess-about.svg";
import jessAboutPng from "@/assets/images/jess-about.png";

function ProfileCard() {
    return (
        <div className="relative flex flex-col items-center md:items-start rounded-xl p-4 shadow-md">
            <div className="flex mb-4">
                <h1 className="flex items-center bg-black text-white font-bold text-xl md:text-2xl px-4 py-1 rounded-md border-2 border-stats-grey">
                    <svg
                        width="27"
                        height="23"
                        viewBox="0 0 27 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2"
                    >
                        <path
                            d="M13.484 21.8057L3.0815 12.2635C-2.58789 6.61554 5.68212 -4.31936 13.484 4.52657C21.2859 -4.29357 29.6339 6.64133 23.8866 12.2635L13.484 21.8057Z"
                            fill="#CA0010"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.08715 3.8003C2.12585 5.76152 1.663 9.13837 3.91939 11.405L13.4841 20.1786L23.0528 11.4013C25.3406 9.14884 24.8826 5.78395 22.9119 3.82156C21.9527 2.86642 20.6893 2.31589 19.2953 2.41506C17.9032 2.51409 16.1962 3.27602 14.399 5.30406C14.3888 5.31579 14.3783 5.32735 14.3676 5.33874C13.965 5.76939 13.3112 5.84139 12.8261 5.52739C12.7799 5.49757 12.7354 5.46431 12.693 5.42769L12.6897 5.42478C12.6421 5.38354 12.5987 5.33941 12.5593 5.29289C10.7635 3.26417 9.06375 2.50139 7.68114 2.40019C6.29592 2.29883 5.04139 2.84609 4.08715 3.8003ZM13.4856 2.79613C11.6521 1.04493 9.72873 0.155504 7.85872 0.0186436C5.67619 -0.141096 3.75471 0.739754 2.37487 2.11953C-0.327145 4.82145 -1.16717 9.72429 2.22693 13.1056C2.23862 13.1172 2.25054 13.1286 2.26268 13.1397L12.6499 22.6679C13.0702 23.0678 13.7179 23.1094 14.1854 22.7772C14.2179 22.7541 14.2495 22.729 14.2801 22.7025C14.2877 22.6958 14.2953 22.6889 14.3028 22.6821L24.7054 13.1399C24.7148 13.1312 24.7241 13.1224 24.7333 13.1134C28.1781 9.7437 27.3338 4.8391 24.6205 2.13726C23.236 0.758439 21.3087 -0.122379 19.1227 0.0331324C17.249 0.166431 15.3212 1.0502 13.4856 2.79613Z"
                            fill="white"
                        />
                    </svg>
                    Stats
                </h1>
            </div>

            {/* SVG Jess encima de la imagen */}
            <picture className="absolute top-[250px] z-10">
            <source srcSet={jessAboutSvg} type="image/svg+xml" />
            <img src={jessAboutPng} alt="Jess label" width="199" height="43" />
        </picture>

            <img
                src={namine}
                alt="Naminé, Avatar of Jess, a character from Kingdom Hearts"
                className="relative w-[199px] h-[199px] rounded-t-lg border-4 border-stats-blue z-0 mb-4"
            />

            <div className="mt-4 flex flex-col items-center md:items-start gap-2">
                <div className="flex justify-between w-[203px] h-[41px] bg-black rounded-full border-2 border-stats-red px-4 py-1">
                    <span className="text-white font-bold">LV</span>
                    <span className="text-white font-bold">1</span>
                </div>
                <div className="flex justify-between w-[203px] h-[41px] bg-black rounded-full border-2 border-stats-red px-4 py-1">
                    <span className="text-white font-bold">HP</span>
                    <span className="text-white font-bold">128 / 128</span>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;