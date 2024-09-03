import * as yup from "yup";

export const updateSchema = yup.object({
  first_name: yup.string().trim().required("First name is required"),
  last_name: yup.string().trim().required("Last name is required"),
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email")
    .required("email is required"),
  phone: yup
    .string()
    .trim()
    .min(6, "Phone must be at least 6 characters long")
    .required("Phone is required"),
});

export const validateUpdatedUser = async (data: FormData) => {
  try {
    await updateSchema.validate(
      {
        first_name: data.get("firstName") || "",
        last_name: data.get("lastName") || "",
        email: data.get("email") || "",
        phone: data.get("phone") || "",
      },
      { abortEarly: false }
    );

    return null;
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      const errors = error.inner.reduce((acc: Record<string, string>, curr) => {
        if (curr.path) {
          acc[curr.path] = curr.message;
        }
        return acc;
      }, {});

      return errors;
    }
    throw error;
  }
};
