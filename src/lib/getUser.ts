import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function getUser() {
  const profileAPIUrl = process.env.PROFILE_API_URL!;
  const authToken = cookies().get("authToken")?.value;

  const res = await fetch(profileAPIUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${authToken}`,
    },
  });
  if (!res.ok) {
    redirect("/");
  }
  const data = await res.json();

  return data;
}
