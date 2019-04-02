export const createBlurb = (text: string, maxLen: number = 50) => {
  if (text.length <= maxLen) {
    return text;
  }
  const blurb = `${text.substr(0, maxLen)}...`;
  return blurb;
};
