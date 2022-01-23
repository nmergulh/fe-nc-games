export const firstNameOnly = (fullName) => {
  let names = fullName.Split(" ");
  return names[0];
};

export const lastNameOnly = (fullName) => {
  let names = fullName.split(" ");
  return names[1];
};
