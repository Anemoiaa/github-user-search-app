function LinkWithIcon(props) {
    const color = props.value ? "text-[#4B6A9B] dark:text-[#fff]" : "text-lightGrey dark:text-lightGrey";
    const href = props.value ? props.link : "#";
    return (
        <div className={`${color} mt-[16px] md:mt-[19px]`}>
            {props.children}
            <a href={href} className="text-[13px] leading-[1.48] hover:underline">
                {props.value || "Not Avalibale"}
            </a>
        </div>
    );
}

export default LinkWithIcon;
