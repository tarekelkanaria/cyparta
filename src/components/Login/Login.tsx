"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useShowPassword from "hooks/useShowPassword";
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { ILoginFormValues } from "forms";
import { loginSchema } from "src/utils/loginValidation";
import { createUserAction } from "src/lib/createUserAction";
import SubmitLoginBtn from "./SubmitLoginBtn";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { lexendClass } from "styles/fonts";

const initialState = {
  message: "",
};

export default function Login() {
  const [state, formAction] = useFormState(createUserAction, initialState);
  const { isPasswordVisible, togglePasswordVisibility } = useShowPassword();
  const {
    register,
    formState: { errors, isDirty },
  } = useForm<ILoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onTouched",
    resolver: yupResolver(loginSchema),
  });
  if (state?.message) {
    toast.error(state.message, {
      duration: 3000,
      classNames: {
        toast: lexendClass,
      },
    });
  }

  return (
    <form
      className="w-full xs:w-[90%] md:w-4/5 xl:w-[42.8%] border-0.6 border-light-200 rounded-2xl mx-auto px-2 md:pr-6 md:pl-[3rem] pt-[5.25rem] mb-[12.5rem] max-w-[38.5rem]"
      noValidate
      action={formAction}
    >
      <fieldset className="mb-6">
        <label
          htmlFor="user-mail"
          className="block text-slate-900 text-base font-semibold mb-2 "
        >
          Email Address
        </label>
        <input
          type="email"
          id="user-mail"
          {...register("email")}
          autoComplete="email"
          placeholder="nouran@cyparta.com"
          className="w-full md:w-[88.3%] p-4 bg-transparent border border-stone-50 focus:border-slate-800 rounded-xl placeholder:text-neutral-100 invalid:border-red-600"
        />
        {errors && errors.email?.message && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </fieldset>
      <fieldset className="mb-[5.25rem]">
        <label
          htmlFor="user-password"
          className="block text-slate-900 text-base font-semibold mb-2"
        >
          Password
        </label>
        <div className="md:w-[88.3%] relative">
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="user-password"
            {...register("password")}
            autoComplete="current-password"
            placeholder="Password"
            className="w-full p-4 bg-transparent border border-stone-50 focus:border-slate-800 rounded-xl placeholder:text-slate-700 invalid:border-red-600"
          />
          {isPasswordVisible ? (
            <MdOutlineVisibilityOff
              size={24}
              className="text-gray-400 absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <MdOutlineVisibility
              size={24}
              className="text-gray-400 absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          )}
        </div>
        {errors && errors.password?.message && (
          <p className="text-sm text-red-600">{errors.password.message}</p>
        )}
      </fieldset>
      <SubmitLoginBtn errors={errors} isDirty={isDirty} />
    </form>
  );
}
