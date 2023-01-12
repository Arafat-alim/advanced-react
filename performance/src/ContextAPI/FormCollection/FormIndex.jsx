import React from "react";
import FormApp from "./FormApp";
import { FormContextProvider } from "./userForm";

function FormIndex() {
  return (
    <FormContextProvider>
      <FormApp />
    </FormContextProvider>
  );
}

export default FormIndex;
