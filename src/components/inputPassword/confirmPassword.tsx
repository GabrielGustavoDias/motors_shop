import { StyledClosedEye, StyledDiv, StyledEye } from "../../styles";
import React, { useRef, useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface iPassWord {
  register: UseFormRegister<FieldValues>;
  errors: any;
}

export const ConfirmPassword = ({ register, errors }: iPassWord) => {
  const [passwordShow, setPasswordShow] = useState(false);

  const showPass = () => {
    setPasswordShow(!passwordShow);
  };

  return (
    <StyledDiv location="password">
      <input
        id="confirmPassword"
        placeholder="Confirm Password"
        type={passwordShow ? "text" : "password"}
        {...register("confirmPassword")}
      />
      <label htmlFor="confirmPassword" className="test">
        Confirm Password
      </label>
      <p>{errors.confirmPassword?.message}</p>
      {passwordShow ? (
        <StyledEye onClick={() => showPass()} />
      ) : (
        <StyledClosedEye onClick={() => showPass()} />
      )}
    </StyledDiv>
  );
};
