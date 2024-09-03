"use client";

import { createContext, useContext, useState } from "react";
import type { IUpdateFormValues } from "forms";

const initialState = {
  isEditing: false,
  toggleEditing: () => {},
  userData: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
  setUserData: (userData: IUpdateFormValues) => {},
};
const EditingContext = createContext(initialState);
export default function EditingProvider({
  children,
  userData,
}: {
  children: React.ReactNode;
  userData: IUpdateFormValues;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState(userData);
  const toggleEditing = () => setIsEditing((edit) => !edit);
  const setUserData = (userData: IUpdateFormValues) => {
    setData(userData);
  };
  return (
    <EditingContext.Provider
      value={{ isEditing, toggleEditing, userData: data, setUserData }}
    >
      {children}
    </EditingContext.Provider>
  );
}

export const useIsEditing = () => useContext(EditingContext);
