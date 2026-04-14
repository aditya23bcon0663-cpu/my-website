import React from "react";

const logos = [
  "/assets/team/logo1.png",
  "/assets/team/logo2.png",
  "/assets/team/logo3.png",
  "/assets/team/logo4.png",
  "/assets/team/logo5.png",
];

const videos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
  "https://www.w3schools.com/html/movie.mp4",
];

const TrustedBy: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-semibold text-center mb-6">Trusted By</h3>

        {/* marquee logos */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee gap-8 py-4">
            {logos.concat(logos).map((src, i) => (
              <div key={i} className="flex-shrink-0 w-40 h-16 flex items-center justify-center opacity-90">
                <img src={src} alt={`logo-${i}`} className="max-h-12 object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* videos */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {videos.map((src, i) => (
            <div key={i} className="rounded-lg overflow-hidden border border-border/30">
              <video src={src} controls playsInline preload="metadata" className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 18s linear infinite; }
      `}</style>
    </section>
  );
};

export default TrustedBy;
