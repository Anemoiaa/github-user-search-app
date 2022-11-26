
import StatsList from "./StatsList";
import LinksList from "./LinksList";
import UserBio from "./UserBio";
import UserJoinedAt from "./UserJoinedAt";
import UsernameAndLogin from "./UserNameAndLogin";

function User({ user, ...props }) {
    return (
        <div className="
            mt-[16px] md:mt-[24px] 
            px-[24px] pt-[32px] pb-[48px] md:p-[40px] lg:p-[48px] 
            rounded-[15px] bg-[#FEFEFE] dark:bg-darkBlue
            shadow-[0px_16px_30px_-10px_rgba(70,96,187,0.198567)] dark:shadow-none
        ">
            <div className="flex lg:block">
                <img className="lg:absolute w-[70px] h-[70px] md:w-[117px] md:h-[117px] rounded-[50%]" src={user.avatar_url} alt="avatar" />
                <div className="ml-[19px] md:ml-[41px] lg:flex lg:ml-[154px] justify-between items-baseline font-normal text-[13px] md:text-[16px] leading-[1.48]">
                    <UsernameAndLogin url={user.html_url} login={user.login} name={user.name}/>
                    <UserJoinedAt date={user.created_at} />
                </div>
            </div>
            <div className="lg:ml-[154px]">
                <UserBio bio={user.bio} />
                <StatsList repos={user.public_repos} followers={user.followers} following={user.following} />
                <LinksList user={user} />
            </div>
        </div>
    );
}



export default User;