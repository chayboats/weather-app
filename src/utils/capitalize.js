export default function capitalize(phrase) {
  return phrase.replace(/\b\w/g, (match) => match.toUpperCase());
}