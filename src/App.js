import "bootstrap/dist/css/bootstrap.min.css";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
import "./App.css";
import "./assets/css/vendors.css";
import "./assets/css/aiz-core.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/Index";
import HeaderPage from "./pages/common/header/Index";
import FooterPage from "./pages/common/footer/Index";
import ActiveMembersPage from "./pages/activeMembers";
import SelectYourPackage from "./pages/selectYourPackage/SelectYourPackage";
import HappyStoriesPage from "./pages/happyStories/Index";
import StoryDetails from "./components/happystoriespage/storyDetails/StoryDetails";
import TermsAndConditionPage from "./pages/termAndCondition/Index";
import PrivacyPolicyPage from "./pages/privacyPolicy/Index";
import RequestRefundPage from "./pages/requestRefund/Index";
import RegistrationPage from "./pages/Registration/Index";
import BlogPage from "./pages/blog/Index";
import BlogDetails from "./components/blog/blogDetails/BlogDetails";
import MembersListingPage from "./pages/memberListing/Index";
import MemberProfile from "./components/memberListing/memberProfile/MemberProfile";
import DashboardPage from "./pages/dashboard/Index";
import DashBoardHome from "./pages/dashboard/dashBoardHome";
import GalleryImagePage from "./pages/dashboard/galleryImage/Index";
import HappyStoryPage from './pages/dashboard/happyStory/Index';
import MyProfilePage from './pages/dashboard/myProfile/Index';
import PackegePurchaseHistoryPage from './pages/dashboard/packages/packagePurchaseHistory/Index';
import PackagePaymentInvoice from './components/dashboard/packages/PackegePurchaseHistory/packagePaymentInvoice/PackagePaymentInvoice';
import MyInterestPage from './pages/myInterest/Index';
import InterestRequest from './components/dashboard/myInterest/InterestRequests/InterestRequests';

import MyWalletPage from "./pages/dashboard/myWallet/index"
import WalletRechargeMathod from "./components/dashboard/myWallet/walletRechargeMathod/WalletRechargemathod";
import MessagePage from "./pages/dashboard/message";
import ReferalUsersPage from "./pages/dashboard/referalSystem/ReferalUsers/Index";
import ReferalEarningPage from "./pages/dashboard/referalSystem/ReferalEarning/Index";
import WalletWithdrowRequestPage from "./pages/dashboard/referalSystem/walletWithdrowRequest";
import IgnoreUsreListPage from "./pages/dashboard/ignoreUserList/Index";
import ChangePasswordPage from "./pages/dashboard/changePassword";
import ManageProfilePage from "./pages/dashboard/manageProfile";
import MyShortListPage from "./pages/dashboard/my-ShortList/Index";
import SupportTicketHistoryPage from "./pages/dashboard/supportTicketHistory/Index";
import SupportTicketCreate from "./components/dashboard/supportTicketHistory/supportTicketCreate/SupportTicketCreate";
import SupportTicketViewDetails from "./components/dashboard/supportTicketHistory/supportTicketViewDetails/SupportTicketViewDetails";
import PurchaseThisPackage from "./pages/selectYourPackage/purchageThisPackage/PurchageThisPackage";


function App() {
  return (
    <div className="aiz-main-wrapper d-flex flex-column position-relative  bg-white">
      <HeaderPage />
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        {/* <Route path='/matrimonial' element={<HomePage />} > */}
        <Route path="home" element={<HomePage />} />
        <Route path="users/login" element={<ActiveMembersPage />} />
        <Route path="packages" element={<SelectYourPackage />} />
        <Route path="packages/purchage-package-methods" element={<PurchaseThisPackage />} />
        <Route path="happy-stories" element={<HappyStoriesPage />} />
        <Route path="story_details/:id" element={<StoryDetails />} />
        <Route path="terms-conditions" element={<TermsAndConditionPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="request-refund" element={<RequestRefundPage />} />
        <Route path="register" element={<RegistrationPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/blog-details" element={<BlogDetails />} />
        <Route path="member-listing" element={<MembersListingPage />} />
        <Route path="member-profile" element={<MemberProfile />} />

        <Route path="dashboard" element={<DashboardPage />}>
          <Route path="" element={<DashBoardHome />} />
          <Route path="gallery-image" element={<GalleryImagePage />} />
          <Route path='happy-story/create' element={<HappyStoryPage />} />
          <Route path='profile-settings' element={<MyProfilePage />} />
          <Route path='package-purchase-history' element={<PackegePurchaseHistoryPage />} />
          <Route path='package-payment-invoice' element={<PackagePaymentInvoice />} />
          <Route path='my-interests' element={<MyInterestPage />} />
          <Route path='interest/requests' element={<InterestRequest />} />
          <Route path="wallet" element={<MyWalletPage />} />
          <Route path="wallet-recharge-methods" element={<WalletRechargeMathod />} />
          <Route path="chat" element={<MessagePage />} />

          <Route path="referred-users" element={<ReferalUsersPage />} />
          <Route path="my-referral-earnings" element={<ReferalEarningPage />} />
          <Route path="wallet-withdraw-request-history" element={<WalletWithdrowRequestPage />} />
          <Route path="ignored-list" element={<IgnoreUsreListPage />} />

          <Route path="change-password" element={<ChangePasswordPage />} />
          <Route path="profile-settings" element={<ManageProfilePage />} />
          <Route path="my-shortlists" element={<MyShortListPage />} />
          <Route path="support-ticket/history" element={<SupportTicketHistoryPage />} />
          <Route path="support-ticket/create" element={<SupportTicketCreate />} />
          <Route path="support-ticket-view-details" element={<SupportTicketViewDetails />} />
        </Route>
        {/* </Route> */}
      </Routes>
      <FooterPage />
    </div>
  );
}

export default App;
