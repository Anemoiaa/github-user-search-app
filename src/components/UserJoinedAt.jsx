function UserJoinedAt(props) {
    const joinedDate = new Date(props.date)
        .toLocaleDateString('en', {
            year: 'numeric', month: 'long', day: '2-digit',
        });
    return (
        <div className="mt-[6px] md:mt-0 md:text-[15px] text-lightGrey dark:text-[#fff]">
            Joined {joinedDate}
        </div>
    );
}

export default UserJoinedAt;