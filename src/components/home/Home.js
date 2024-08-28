import Banner from "./banner/Banner"
import Bannercopy from "./banner/Bannercopy"
import BlogSection from "./BlogSection/BlogSection"
import HappyStories from "./happyStories/HappyStories"
import HowItsWork from "./howItsWork/HowItsWork"
import NewMembers from "./NewMembers/NewMembers"
import Packages from "./packages/Packages"
import PremiumMembers from "./premiumMembers/PremiumMembers"
import SaveMembers from "./saveMembers/SaveMembers"
import Testimonial from "./testimonial/Testimonial"
import TrustedbyMillions from "./TrustedbyMillions/TrustedbyMillions"

function Home() {
    return (
        <>
        {/* <Banner/> */}
        <Bannercopy/>
        <PremiumMembers/>
        <SaveMembers/>
        <HowItsWork/>
        <TrustedbyMillions/>
        <NewMembers/>
        <HappyStories/>
        <Packages/>
        <Testimonial/>
        <BlogSection/>
        </>
    )
}
export default Home