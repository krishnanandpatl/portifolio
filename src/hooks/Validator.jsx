export const Validator = (inPass) => {
  if (inPass === import.meta.env.VITE_PASSWORD) return true;
  return false;
};
