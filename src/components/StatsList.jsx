import Stats from "./Stats";

function StatsList({repos, followers, following}) {
    return (
        <div className="
        flex justify-evenly md:justify-between
        mt-[41px] md:mt-[32px] py-[18px] px-[15px] md:pt-[15px] md:pb-[17px] md:pl-[32px] md:pr-[83px]
        bg-lightMain dark:bg-darkMain rounded-[10px]
    ">
            <Stats title={"Repos"} value={repos} />
            <Stats title={"Followers"} value={followers} />
            <Stats title={"Following"} value={following} />
        </div>
    );
}

export default StatsList;