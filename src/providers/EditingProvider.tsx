"use client";

import { createContext, useContext, useState } from "react";

const initialState = {
  isEditing: false,
  toggleEditing: () => {},
};
const EditingContext = createContext(initialState);
export default function EditingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEditing = () => setIsEditing((edit) => !edit);
  return (
    <EditingContext.Provider value={{ isEditing, toggleEditing }}>
      {children}
    </EditingContext.Provider>
  );
}

export const useIsEditing = () => useContext(EditingContext);
