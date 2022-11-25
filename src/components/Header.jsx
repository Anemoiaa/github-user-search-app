function Header(props) {
    return (
        <header className="flex justify-between font-bold leading-[1.48]">
            <h1 className="text-[26px]">devfinder</h1>
            {props.children}
        </header>
    );
}

export default Header;