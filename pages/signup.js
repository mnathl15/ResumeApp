import Button from "../components/Button";

import { useEffect, useState } from "react";
import UserProvider from "../UserProvider";
import UserContext from "../UserContext";

export default function Signup() {
  const [fields, setFields] = useState({
    email: { value: "", error: "" },
    password: { value: "", error: "" },
  });

  const onChangeField = (e) => {
    setFields({
      ...fields,
      [e.target.name]: { ...fields[e.target.name], value: e.target.value },
    });
  };

  return (
    <UserContext.Consumer>
      {(userContext) => {
        return (
          <div className="form-signup h-full flex flex-col justify-center items-center">
            <div className="h-3/5 w-1/4 bg-white rounded-xl text-center flex flex-col justify-between">
              <h1 className="my-6 text-3xl">Sign up!</h1>
              <div className="w-100">
                <input
                  placeholder="email"
                  name="email"
                  type="email"
                  value={fields.email.value}
                  onChange={onChangeField}
                />
                <input
                  placeholder="password"
                  name="password"
                  type="password"
                  value={fields.password.value}
                  onChange={onChangeField}
                />
                <Button
                  onClick={() =>
                    userContext.signUp(
                      fields.email.value,
                      fields.password.value
                    )
                  }
                  text="Sign up!"
                />
              </div>
            </div>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}
