import LinkWithIcon from "./UI/link/LinkWithIcon";
import { ReactComponent as IconLocation } from "../assets/icon-location.svg";
import { ReactComponent as IconWebsite } from "../assets/icon-website.svg";
import { ReactComponent as IconTwitter } from "../assets/icon-twitter.svg";
import { ReactComponent as IconCompany } from "../assets/icon-company.svg";

function LinksList({user, ...props}) {
    return (
        <div className="mt-[8px] md:mt-[37px]">
            <div className="md:grid grid-cols-[1fr,1fr]">
                <LinkWithIcon link={"#"} value={user.location}>
                    <IconLocation className="inline w-[33px] fill-current" />
                </LinkWithIcon>
                <LinkWithIcon link={user.blog} value={user.blog}>
                    <IconWebsite className="inline w-[33px] fill-current" />
                </LinkWithIcon>
            </div>
            <div className="md:grid grid-cols-[1fr,1fr]">
                <LinkWithIcon link={`https://twitter.com/${user.twitter_username}`} value={user.twitter_username}>
                    <IconTwitter className="inline w-[33px] fill-current" />
                </LinkWithIcon>
                <LinkWithIcon link={'#'} value={user.company}>
                    <IconCompany className="inline w-[33px] fill-current" />
                </LinkWithIcon>
            </div>
        </div>
    );
}

export default LinksList;