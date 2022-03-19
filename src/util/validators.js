export const required = value => {
  if (value) return undefined;
  return "Required field";
};

export const maxLength = maxNumber => value => {
  if (value?.length > maxNumber) return `Must be ${maxNumber} characters or less`;
  return undefined
};
