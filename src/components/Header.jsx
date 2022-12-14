function Header(props) {
    return (
        <header className="flex justify-between items-center pt-[31px] md:pt-[140px] lg:pt-[144px] font-bold leading-[1.48]">
            <h1 className="text-[26px] text-[#222731] dark:text-[#fff]">devfinder</h1>
            {props.children}
        </header>
    );
}

export default Header;