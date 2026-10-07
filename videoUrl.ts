const VIDEO_BASE_URL = process.env.NEXT_PUBLIC_VIDEO_BASE_URL;

export function videoUrl(path: string) {
  return `${VIDEO_BASE_URL}/${path}`;
}