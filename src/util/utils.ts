
export function getJSTDate(): Date {
  const jstTime = new Date().getTime() + (1000*60*60*9);
  return new Date(jstTime);
}