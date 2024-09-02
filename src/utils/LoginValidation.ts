import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email")
    .required("email is required"),
  password: yup
    .string()
    .trim()
    .min(5, "Password must be at least 5 characters long")
    .max(20, "Password Must be less than 20 characters long")
    .required("Password is required"),
});

export const validateUser = async (data: FormData) => {
  try {
    await loginSchema.validate({
      email: data.get("email"),
      password: data.get("password"),
    });
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
