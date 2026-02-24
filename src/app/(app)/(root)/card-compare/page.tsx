"use client";

import dynamic from "next/dynamic";

import { USER } from "@/features/profile/data/user";

const ProfileCard = dynamic(() => import("@/components/ProfileCard"), {
  ssr: false,
});

const CARDS = [
  {
    label: "Original · 1:1",
    avatarUrl: "/avatar.jpg",
    cardAspectRatio: undefined as number | undefined,
    cardWidth: undefined as string | undefined,
    className: undefined as string | undefined,
  },
  {
    label: "Panorámica · 2.36:1",
    avatarUrl: "/avatar2.jpg",
    // Landscape 1280×543
    cardAspectRatio: (1280 / 543) as number | undefined,
    cardWidth: "min(95vw, 900px)" as string | undefined,
    className: "pc-panoramic" as string | undefined,
  },
  // Añade avatar3.jpg a /public y descomenta esto:
  {
    label: "Retrato cercano · 16:9",
    avatarUrl: "/avatar3.jpg",
    cardAspectRatio: (16 / 9) as number | undefined,
    cardWidth: "min(95vw, 700px)" as string | undefined,
    className: "pc-portrait-close" as string | undefined,
  },
];

export default function CardComparePage() {
  return (
    <div className="min-h-screen bg-background px-4 py-12">
      <h1 className="mb-2 text-center text-2xl font-bold text-foreground">
        Comparativa Profile Card
      </h1>
      <p className="mb-10 text-center text-sm text-muted-foreground">
        Elige la que más te guste
      </p>

      <div className="flex flex-col items-center gap-16">
        {CARDS.map((card) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const extraProps: any = {
            cardAspectRatio: card.cardAspectRatio,
            cardWidth: card.cardWidth,
            className: card.className,
          };
          return (
            <div key={card.label} className="flex flex-col items-center gap-3">
              <span className="font-mono text-xs text-muted-foreground">
                {card.label}
              </span>
              <ProfileCard
                name={USER.displayName}
                title={USER.jobTitle}
                handle={USER.username}
                status="Online"
                contactText="Contact Me"
                avatarUrl={card.avatarUrl}
                showUserInfo
                miniAvatarUrl={card.avatarUrl}
                enableTilt={true}
                enableMobileTilt={false}
                behindGlowColor="rgba(125, 190, 255, 0.67)"
                behindGlowEnabled
                behindGlowSize="50%"
                innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                {...extraProps}
                onContactClick={() => window.open(USER.website, "_blank")}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
