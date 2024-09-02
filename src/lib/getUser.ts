import { redirect } from "next/navigation";

export default async function getUser() {
  const profileAPIUrl = process.env.PROFILE_API_URL!;
  const userToken = process.env.USER_TOKEN;
  const res = await fetch(profileAPIUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${userToken}`,
    },
  });
  if (!res.ok) redirect("/");
  const data = await res.json();

  return data;
}
