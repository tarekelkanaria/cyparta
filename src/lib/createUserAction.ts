"use server";

import { redirect } from "next/navigation";
import { validateUser } from "src/utils/LoginValidation";

export async function createUserAction(_prevState: any, formData: FormData) {
  const loginAPIUrl = process.env.LOGIN_API_URL!;
  const errors = await validateUser(formData);

  if (errors) {
    if (errors.email) return { message: errors.email };
    if (errors.password) return { message: errors.password };
  } else {
    const res = await fetch(loginAPIUrl, {
      method: "POST",
      body: formData,
    });
    if (!res.ok) {
      return {
        message:
          "Wrong credentials, Please enter a Valid user name and password",
      };
    }
    redirect("/profile");
  }
}
