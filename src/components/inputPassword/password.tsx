import { StyledClosedEye, StyledDiv, StyledEye } from "../../styles";
import React, { useRef, useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface iPassWord {
  register: UseFormRegister<FieldValues>;
  errors: any;
}

export const PassWord = ({ register, errors }: iPassWord) => {
  const [passwordShow, setPasswordShow] = useState(false);

  const showPass = () => {
    setPasswordShow(!passwordShow);
  };

  return (
    <StyledDiv location="password">
      <input
        id="password"
        placeholder="Password"
        type={passwordShow ? "text" : "password"}
        {...register("password")}
      />
      <label htmlFor="password" className="test">
        Password
      </label>
      <p>{errors.password?.message}</p>
      {passwordShow ? (
        <StyledEye onClick={() => showPass()} />
      ) : (
        <StyledClosedEye onClick={() => showPass()} />
      )}
    </StyledDiv>
  );
};
