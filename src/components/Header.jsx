function Header(props) {
    return (
        <header className="flex justify-between items-center mt-[31px] md:mt-[140px] lg:mt-[144px] font-bold leading-[1.48]">
            <h1 className="text-[26px] text-[#222731] dark:text-[#fff]">devfinder</h1>
            {props.children}
        </header>
    );
}

export default Header;