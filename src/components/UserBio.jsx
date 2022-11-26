function UserBio({bio, ...props}) {
    return (
        <div className="mt-[33px] md:mt-[20px] text-[13px] md:text-[15px] leading-[1.92] md:leading-[1.66] text-[#4B6A9B] dark:text-[#fff]">
            {bio || "This profile has no bio"}
        </div>
    );
}

export default UserBio;