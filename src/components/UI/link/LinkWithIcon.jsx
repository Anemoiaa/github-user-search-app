function LinkWithIcon(props) {
    let value = props.value;
    if(value && value.length > 21) {
        value = value.slice(0, 21) + "...";
    }
    const color = props.value ? "text-[#4B6A9B] dark:text-[#fff]" : "text-lightGrey dark:text-lightGrey";
    const href = props.value ? props.link : "#";
    return (
        <div className={`${color} mt-[16px] md:mt-[19px]`}>
            {props.children}
            <a href={href} className="text-[13px] leading-[1.48] hover:underline">
                {value || "Not Avalibale"}
            </a>
        </div>
    );
}

export default LinkWithIcon;
