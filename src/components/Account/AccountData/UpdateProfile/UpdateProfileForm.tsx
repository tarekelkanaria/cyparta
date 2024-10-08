"use client";

import { useIsEditing } from "src/providers/EditingProvider";
import { useFormState } from "react-dom";
import updateUserAction from "src/lib/updateUser";
import ConfirmBtn from "./ConfirmBtn";
import { toast } from "sonner";

const initialState = {
  message: "",
  status: "initial",
};

export default function UpdateProfileForm({ font }: { font: string }) {
  const { userData, isEditing, toggleEditing, setUserData } = useIsEditing();
  const [state, formAction] = useFormState(updateUserAction, initialState);
  if (state?.message && state.status === "error") {
    toast.error(state.message, {
      duration: 3000,
      classNames: {
        toast: font,
      },
    });
  }
  if (state.message && state.status === "success") {
    toast.success(state.message, {
      duration: 3000,
      classNames: {
        toast: font,
      },
    });
  }
  return (
    <form
      className="grid grid-cols-2 md:grid-cols-4 gap-y-2 mb-8"
      action={(e) => {
        toggleEditing();
        formAction(e);
      }}
    >
      <fieldset className="col-span-2 flex flex-col gap-1">
        <label
          htmlFor="first-name"
          className={`${font} font-light text-gray-500 text-sm`}
        >
          First Name
        </label>
        <input
          type="text"
          id="first-name"
          name="firstName"
          value={userData.firstName}
          onChange={(e) =>
            setUserData({ ...userData, firstName: e.target.value })
          }
          readOnly={!isEditing}
          className={`${font} font-light text-stone-200 ${
            isEditing ? "bg-light-300" : "bg-transparent"
          }`}
        />
      </fieldset>
      <fieldset className="col-span-2 flex flex-col gap-1">
        <label
          htmlFor="last-name"
          className={`${font} font-light text-gray-500 text-sm`}
        >
          Last Name
        </label>
        <input
          type="text"
          id="last-name"
          name="lastName"
          value={userData.lastName}
          readOnly={!isEditing}
          onChange={(e) =>
            setUserData({ ...userData, lastName: e.target.value })
          }
          className={`${font} font-light text-stone-200 ${
            isEditing ? "bg-light-300" : "bg-transparent"
          }`}
        />
      </fieldset>
      <fieldset className="col-span-2 flex flex-col gap-1">
        <label
          htmlFor="mobile-number"
          className={`${font} font-light text-gray-500 text-sm`}
        >
          Mobile Number
        </label>
        <input
          type="text"
          id="mobile-number"
          name="phone"
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
          readOnly={!isEditing}
          className={`${font} font-light text-stone-200 ${
            isEditing ? "bg-light-300" : "bg-transparent"
          }`}
        />
      </fieldset>
      <fieldset className="col-span-2 flex flex-col gap-1">
        <label
          htmlFor="email-address"
          className={`${font} font-light text-gray-500 text-sm`}
        >
          Email Address
        </label>
        <input
          type="text"
          id="email-address"
          name="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          readOnly={!isEditing}
          className={`${font} font-light text-stone-200 ${
            isEditing ? "bg-light-300" : "bg-transparent"
          }`}
        />
      </fieldset>
      <fieldset className="col-span-2 flex flex-col gap-1">
        <label
          htmlFor="birth-date"
          className={`${font} font-light text-gray-500 text-sm`}
        >
          Date of Birth
        </label>
        <input
          type="text"
          id="birth-date"
          value="July 14, 1995"
          readOnly
          className={`${font} font-light text-stone-200 bg-transparent`}
        />
      </fieldset>
      <fieldset className="col-span-2 flex flex-col gap-1">
        <label
          htmlFor="marital-status"
          className={`${font} font-light text-gray-500 text-sm`}
        >
          Marital Status
        </label>
        <input
          type="text"
          id="marital-status"
          value="Single"
          readOnly
          className={`${font} font-light text-stone-200 bg-transparent`}
        />
      </fieldset>
      <fieldset className="col-span-2 flex flex-col gap-1">
        <label
          htmlFor="gender"
          className={`${font} font-light text-gray-500 text-sm`}
        >
          Gender
        </label>
        <input
          type="text"
          id="gender"
          value="Female"
          readOnly
          className={`${font} font-light text-stone-200 bg-transparent`}
        />
      </fieldset>
      <fieldset className="col-span-2 flex flex-col gap-1">
        <label
          htmlFor="nationality"
          className={`${font} font-light text-gray-500 text-sm`}
        >
          Nationality
        </label>
        <input
          type="text"
          id="nationality"
          value="Egypt"
          readOnly
          className={`${font} font-light text-stone-200 bg-transparent`}
        />
      </fieldset>
      <fieldset className="col-span-2 flex flex-col gap-1">
        <label
          htmlFor="address"
          className={`${font} font-light text-gray-500 text-sm`}
        >
          Address
        </label>
        <input
          type="text"
          id="address"
          value="Maadi"
          readOnly
          className={`${font} font-light text-stone-200 bg-transparent`}
        />
      </fieldset>
      <fieldset className="col-span-2 flex flex-col gap-1">
        <label
          htmlFor="city"
          className={`${font} font-light text-gray-500 text-sm`}
        >
          City
        </label>
        <input
          type="text"
          id="city"
          value="Cairo"
          readOnly
          className={`${font} font-light text-stone-200 bg-transparent`}
        />
      </fieldset>
      <fieldset className="col-span-2 flex flex-col gap-1">
        <label
          htmlFor="state"
          className={`${font} font-light text-gray-500 text-sm`}
        >
          State
        </label>
        <input
          type="text"
          id="state"
          value="Cairo"
          readOnly
          className={`${font} font-light text-stone-200 bg-transparent`}
        />
      </fieldset>
      <fieldset className="col-span-2 flex flex-col gap-1">
        <label
          htmlFor="zip-code"
          className={`${font} font-light text-gray-500 text-sm`}
        >
          Zip Code
        </label>
        <input
          type="text"
          id="zip-code"
          value="35624"
          readOnly
          className={`${font} font-light text-stone-200 bg-transparent`}
        />
      </fieldset>
      <fieldset className="max-md:col-span-2 flex flex-col gap-y-1">
        <label
          htmlFor="work-hours"
          className={`${font} font-normal text-gray-500 text-sm`}
        >
          Work’s hours
        </label>
        <input
          type="text"
          id="work-hours"
          value="180 hour"
          readOnly
          className={`${font} font-light text-stone-200 bg-transparent`}
        />
      </fieldset>
      <fieldset className="max-md:col-span-2 flex flex-col gap-y-1">
        <label
          htmlFor="salary-hour"
          className={`${font} font-normal text-gray-500 text-sm`}
        >
          Salary/hour
        </label>
        <input
          type="text"
          id="salary-hour"
          value="300 EGP"
          readOnly
          className={`${font} font-light text-stone-200 bg-transparent`}
        />
      </fieldset>
      <fieldset className="max-md:col-span-2 flex flex-col gap-y-1">
        <label
          htmlFor="total-salary"
          className={`${font} font-normal text-orange-500 text-sm`}
        >
          Total Salary
        </label>
        <input
          type="text"
          id="total-salary"
          value="54000 EGP"
          readOnly
          className={`${font} font-light text-stone-200 bg-transparent`}
        />
      </fieldset>
      <ConfirmBtn isEditing={isEditing} font={font} />
    </form>
  );
}
