export default function Date({ dateString }) {
  if (!dateString) {
    return <time />;
  }

  const parts = dateString.split('-');
  const formatted = parts.length === 3 ? `${parts[2]}.${parts[1]}.${parts[0]}` : dateString;

  return <time dateTime={dateString}>{formatted}</time>;
}