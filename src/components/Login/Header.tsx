import Image from "next/image";
import Logo from "assets/logo.png";

export default function Header() {
  return (
    <header className="pb-8">
      <h1 aria-label="Cyparta" className="pt-36">
        <Image src={Logo} alt="Cyparta logo" priority className="mx-auto" />
      </h1>
    </header>
  );
}
