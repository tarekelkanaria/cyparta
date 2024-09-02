import Account from "profile/Account";
import getUser from "src/lib/getUser";

export default async function Profile() {
  const profileData = await getUser();

  return <Account profile={profileData} />;
}
