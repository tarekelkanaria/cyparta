import Cover from "./Cover";
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
        <EditingProvider>
          <Cover
            image={profile.cover}
            name={profile.name}
            email={profile.email}
          />
          <AccountData
            firstName={profile.first_name}
            lastName={profile.last_name}
            phone={profile.phone}
            email={profile.email}
          />
        </EditingProvider>
      </main>
    </>
  );
}
