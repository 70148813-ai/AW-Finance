export const toUpper = (str) => str.toUpperCase();

export const toLower = (str) => str.toLowerCase();

export const trimString = (str) => str.trim();

export const containsText = (str, searchTerm) => str.toLowerCase().includes(searchTerm.toLowerCase());

export const startsWithText = (str, prefix) => str.toLowerCase().startsWith(prefix.toLowerCase());

export const endsWithText = (str, suffix) => str.toLowerCase().endsWith(suffix.toLowerCase());

export const splitString = (str, delimiter) => str.split(delimiter);

export const joinArray = (arr, delimiter) => arr.join(delimiter);

export const replaceText = (str, search, replacement) => str.replace(search, replacement);

export const sliceString = (str, start, end) => str.slice(start, end);

export const padStartString = (str, length, char) => str.padStart(length, char);

export const padEndString = (str, length, char) => str.padEnd(length, char);

export const formatCurrency = (amount) => {
  const str = amount.toString();
  return `$${str.padStart(str.length + 1, ` `)}`;
};

export const formatCourseName = (name) => {
  const trimmed = trimString(name);
  const words = splitString(trimmed, ` `);
  const formatted = joinArray(words, ` - `);
  return toUpper(formatted);
};

export const searchInText = (text, query) => {
  const lowerText = toLower(text);
  const lowerQuery = toLower(trimString(query));
  return containsText(lowerText, lowerQuery);
};
