function User({user, ...props}) {
    return(
        <div>
            {user.login}
        </div>
    );
}

export default User;