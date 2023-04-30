import { password } from "../../data";
export const Validator = (inPass) => {
  if (inPass === process.env.Password || password) return true;
  return false;
};
