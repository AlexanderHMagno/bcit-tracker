const uppercase = (text: string) => {
  return text.toUpperCase();
};

const capitalize = (text:string) => {

  return text.slice(0,1).toUpperCase() + text.slice(1).toLowerCase();
}

export { uppercase, capitalize};
