function Stats(props) {
    return (
        <div className="flex flex-col items-center md:items-start gap-[8px] md:gap-[1px] leading-[1.48]">
            <div className="text-[11px] text-[#4B6A9B] dark:text-[#fff]">{props.title}</div>
            <div className="font-bold text-[16px] text-[#2B3442] dark:text-[#fff]">{props.value}</div>
        </div>
    );
}

export default Stats;