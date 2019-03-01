export const REGEX_LIST = {
  REMOVE_EXTRA_HYPHEN: /-{2,}/g,
  REMOVE_NONE_CHARS: /[^a-zA-Z0-9]/g,
};

export const slugify = (title: string) => {
  title = title.replace(REGEX_LIST.REMOVE_NONE_CHARS, '-');
  title = title.replace(REGEX_LIST.REMOVE_EXTRA_HYPHEN, '-');
  return title;
};
