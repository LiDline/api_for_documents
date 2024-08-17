import { TokenPayload } from './interfaces.middleware';

export default function parseJWTPayload(token: string): TokenPayload {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_header, payload, _signature] = token.split('.');

  const res = decodePayload(payload) as TokenPayload;

  return res;
}

function decodePayload(payload: string): TokenPayload {
  const cleanedPayload = payload.replace(/-/g, '+').replace(/_/g, '/');

  const decodedPayload = decodeBase64(cleanedPayload);

  const uriEncodedPayload = Array.from(decodedPayload).reduce((acc, char) => {
    const uriEncodedChar = ('00' + char.charCodeAt(0).toString(16)).slice(-2);

    return `${acc}%${uriEncodedChar}`;
  }, '');

  const jsonPayload = decodeURIComponent(uriEncodedPayload);

  return JSON.parse(jsonPayload);
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
