import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => (
  <UserProfile path="/user" routing="path" hideNavigation />
);

export default UserProfilePage;
