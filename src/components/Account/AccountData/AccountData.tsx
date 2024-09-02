import { lexendClass } from "styles/fonts";
import Tabs from "./Tabs";
import UpdateProfileForm from "./UpdateProfileForm";

export default function AccountData({
  firstName,
  lastName,
  phone,
  email,
}: {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}) {
  return (
    <section>
      <Tabs />
      <UpdateProfileForm
        font={lexendClass}
        firstName={firstName}
        lastName={lastName}
        phone={phone}
        email={email}
      />
    </section>
  );
}
