const pageTitle1 = "some amazing title";
const pageTitle2 = "Another Amazing Title";
const pageTitle3 = "A rEAlY weIrd TiTLE";
const pageTitle4 = "";

const capitalizeWord = (str: string) => {
  const firstChar = str.charAt(0).toLocaleUpperCase();
  const restOfStr = str.substring(1).toLocaleLowerCase();

  return `${firstChar}${restOfStr}`;
};

const capitalizeEachWord = (str: string) =>
  str
    .split(" ")
    .map((word: string) => capitalizeWord(word))
    .join(" ");

capitalizeEachWord(pageTitle1); //?
capitalizeEachWord(pageTitle2); //?
capitalizeEachWord(pageTitle3); //?
capitalizeEachWord(pageTitle4); //?
