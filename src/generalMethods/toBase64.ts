export default function toBase64(str: string) {
  return Buffer.from(str).toString('base64');
}
