function UsernameAndLogin(props) {
    return (
        <div>
            <div className="font-bold text-[16px] md:text-[26px] text-[#2B3442] dark:text-[#fff]">{props.name}</div>
            <div className="text-lightBlue">
                <a href={props.url}>@{props.login}</a>
            </div>
        </div>
    );
}

export default UsernameAndLogin;