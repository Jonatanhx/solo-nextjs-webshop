"use client";
export default function videocard() {
  return (
    <div className="flex justify-center">
      <video autoPlay loop className="w-3/5">
        <source src="/assets/tools.mp4" type="video/mp4"></source>
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
