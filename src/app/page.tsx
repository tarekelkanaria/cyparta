import Header from "login/Header";
import Login from "login/Login";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex justify-center">
        <Login />
      </main>
    </>
  );
}
