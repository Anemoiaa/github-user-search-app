
function ToggleTheme({title, ...props}) {
    return (
        <button {...props} className="text-lightGrey dark:text-[#fff] hover:text-[#222731] dark:hover:text-[#90A4D4]">
            <span className="inline mr-[16px] text-[13px] tracking-[2.5px]">
                {title}
            </span>
            {props.children}
        </button>
    );
}

export default ToggleTheme;