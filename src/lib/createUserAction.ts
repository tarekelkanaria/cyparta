"use server";

import { redirect } from "next/navigation";
import { validateUser } from "src/utils/loginValidations";
import { cookies } from "next/headers";

export async function createUserAction(_prevState: any, formData: FormData) {
  const loginAPIUrl = process.env.LOGIN_API_URL!;
  const errors = await validateUser(formData);

  if (errors) {
    return { message: Object.values(errors).join(" ") };
  }

  const res = await fetch(loginAPIUrl, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    return {
      message: "Wrong credentials, Please enter a Valid user name and password",
    };
  }

  const data = await res.json();

  const token = data.access;

  if (token) {
    cookies().set({
      name: "authToken",
      value: token,
      path: "/",
      httpOnly: true,
      secure: true,
    });
  }

  redirect("/profile");
}
