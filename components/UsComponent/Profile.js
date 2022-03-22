import React from "react";
import Image from "next/image";
const Profile = ({ item }) => {
  const { label, position, image_profile, alt } = item;
  return (
    <div className="max-w-lg mx-20 mt-20">
      <div className="relative flex justify-center items-center w-80">
        <Image
          className="z-20 fixed -inset-6 object-cover"
          src={image_profile}
          quality={100}
          alt={alt}
        />
        <svg
          className="absolute"
          width="302"
          height="313"
          viewBox="0 0 302 313"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M302 174.98C302 260.8 242.606 310.779 149.33 310.779C56.0543 310.779 0 331.593 0 245.774C0 159.955 56.0543 0 149.33 0C242.606 0 302 89.161 302 174.98Z"
            fill="#FFA6EB"
          />
        </svg>
      </div>

      <div className="mt-12 text-lg text-indigoPrimary">
        <p>{label}</p>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default Profile;
