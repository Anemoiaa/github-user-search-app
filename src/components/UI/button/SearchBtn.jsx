
function SearchBtn(props) {
    return(
        <button 
            {...props}
            className="
            bg-lightBlue rounded-[10px] 
            px-[24px] pt-[12.5px] pb-[13.5px]
            text-[#fff] text-[13px] lg:text-[16px] font-bold leading-[1.48]
            hover:bg-[#60ABFF]"
        >
            Search
        </button>
    );
}

export default SearchBtn;