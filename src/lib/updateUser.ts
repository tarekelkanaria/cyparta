"use server";

import { cookies } from "next/headers";
import { validateUpdatedUser } from "src/utils/updateValidation";

export default async function updateUserAction(
  _prevState: any,
  formData: FormData
) {
  const profileAPIUrl = process.env.PROFILE_API_URL!;
  const authToken = cookies().get("authToken")?.value;
  const errors = await validateUpdatedUser(formData);

  if (errors) {
    return { message: Object.values(errors).join(" "), status: "error" };
  }

  const res = await fetch(profileAPIUrl, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify({
      first_name: formData.get("firstName"),
      last_name: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    }),
  });

  if (!res.ok) {
    return {
      message: "Error has happened, please try again",
      status: "error",
    };
  }

  return { message: "Profile Updated successfully", status: "success" };
}
