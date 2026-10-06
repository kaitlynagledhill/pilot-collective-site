"use client";

type ProtectedVideoProps = React.VideoHTMLAttributes<HTMLVideoElement>;

export default function ProtectedVideo(props: ProtectedVideoProps) {
  return (
    <video
      {...props}
      controlsList="nodownload"
      disablePictureInPicture
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
    />
  );
}