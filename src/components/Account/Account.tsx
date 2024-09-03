import Cover from "./Cover/Cover";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import AccountData from "./AccountData/AccountData";
import { IProfileData } from "forms";
import EditingProvider from "src/providers/EditingProvider";

export default function Account({ profile }: { profile: IProfileData }) {
  return (
    <>
      <TopBar image={profile.image} />
      <main>
        <NavBar />
        <EditingProvider
          userData={{
            firstName: profile.first_name,
            lastName: profile.last_name,
            email: profile.email,
            phone: profile.phone,
          }}
        >
          <Cover image={profile.cover} />
          <AccountData />
        </EditingProvider>
      </main>
    </>
  );
}
