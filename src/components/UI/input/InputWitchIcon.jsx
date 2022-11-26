import { ReactComponent as IconSearch } from "../../../assets/icon-search.svg";

function InputWitchIcon(props) {
    return(
        <div className="flex-auto flex items-center mr-[20px]">
            <IconSearch  className="w-[20px] h-[20px] md:w-[24.05px] md:h-[24px] mr-[8.95px] md:mr-[23.94px]"/>
            <input 
                {...props} 
                className="
                w-full bg-[#fff] dark:bg-darkBlue  
                font-mono font-normal text-[13px] leading-[1.92] md:text-[18px] md:leading-[1.38] text-[#222731] dark:text-[#fff]
                focus:outline-none placeholder:text-[#4B6A9B] dark:placeholder:text-[#fff]" 
                type="text" 
            />
        </div>
    );
}

export default InputWitchIcon;