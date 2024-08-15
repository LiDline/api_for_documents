export default function parseJWTPayload(
  token: string,
): Record<string, number | string> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_header, payload, _signature] = token.split('.');
  return decodePayload(payload);
}

function decodeBase64(data: string): string {
  if (typeof window !== 'undefined') {
    return window.atob(data);
  }
  if (typeof Buffer !== 'undefined') {
    return Buffer.from(data, 'base64').toString('binary');
  }
  throw new Error('Unable to decode base64');
}

function decodePayload(payload: string): Record<string, number | string> {
  const cleanedPayload = payload.replace(/-/g, '+').replace(/_/g, '/');

  const decodedPayload = decodeBase64(cleanedPayload);

  const uriEncodedPayload = Array.from(decodedPayload).reduce((acc, char) => {
    const uriEncodedChar = ('00' + char.charCodeAt(0).toString(16)).slice(-2);

    return `${acc}%${uriEncodedChar}`;
  }, '');

  const jsonPayload = decodeURIComponent(uriEncodedPayload);

  return JSON.parse(jsonPayload);
}
