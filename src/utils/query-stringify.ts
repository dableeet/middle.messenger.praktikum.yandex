export default function queryStringify(data: Record<string, string>) {
  return new URLSearchParams(data).toString();
}
