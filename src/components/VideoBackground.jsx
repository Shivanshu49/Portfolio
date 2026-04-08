"use client";

export default function VideoBackground() {
  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none" aria-hidden="true">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        style={{ opacity: 0.35 }}
      >
        <source src="/tech-bg.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/65" />
      {/* Top and bottom gradient fade to pure black for seamless blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      {/* Subtle blue radial glow matching Framer design */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,_rgba(30,100,180,0.08)_0%,_transparent_60%)]" />
    </div>
  );
}
