import { lexendClass } from "styles/fonts";
import Tabs from "./Tabs";
import UpdateProfileForm from "./UpdateProfile/UpdateProfileForm";

export default function AccountData() {
  return (
    <section>
      <Tabs />
      <UpdateProfileForm font={lexendClass} />
    </section>
  );
}
