export const MAX_BLURB_LEN = 250;

export const createBlurb = (text: string, maxLen: number = MAX_BLURB_LEN) => {
  if (text.length <= maxLen) {
    return text;
  }
  let blurb = text.substr(0, maxLen);
  const lastSpace = blurb.lastIndexOf(' ');
  blurb = `${blurb.substr(0, lastSpace)}...`;

  return blurb;
};
