import Image from "next/image";
const PasswordValidationItem = ({ isValid, text }) => (
  <div className="flex items-center py-1">
    <Image
      src={isValid ? tick : cross}
      alt=""
      width={14}
      height={14}
      className="mr-2"
    />
    <span className="flex text-base font-normal leading-[130%] text-[#666]">
      {text}
    </span>
  </div>
);
