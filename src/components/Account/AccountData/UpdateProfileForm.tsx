"use client";

export default function UpdateProfileForm({
  font,
  firstName,
  lastName,
  phone,
  email,
}: {
  font: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}) {
  return (
    <form className="grid grid-cols-2 md:grid-cols-4 gap-y-2 mb-8">
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
          value={firstName}
          readOnly
          className={`${font} font-light text-stone-200 bg-transparent`}
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
          value={lastName}
          readOnly
          className={`${font} font-light text-stone-200 bg-transparent`}
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
          value={phone}
          readOnly
          className={`${font} font-light text-stone-200 bg-transparent`}
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
          value={email}
          readOnly
          className={`${font} font-light text-stone-200 bg-transparent`}
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
      <div className="text-center max-md:col-span-2">
        <button
          type="submit"
          className={`${font} text-base py-4 px-5 rounded bg-stone-100 text-light-300`}
        >
          Confirm
        </button>
      </div>
    </form>
  );
}
