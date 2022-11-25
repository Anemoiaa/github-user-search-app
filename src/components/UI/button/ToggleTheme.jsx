
function ToggleTheme({title, icon, ...props}) {
    return (
        <button {...props}>
            <span className="inline mr-[16px] text-[13px] tracking-[2.5px]">{title}</span>
            <img className="inline" src={icon} />
        </button>
    );
}

export default ToggleTheme;