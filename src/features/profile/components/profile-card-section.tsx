"use client";

import dynamic from "next/dynamic";

import { USER } from "@/features/profile/data/user";
import { decodeEmail } from "@/utils/string";

const ProfileCard = dynamic(() => import("@/components/ProfileCard"), {
  ssr: false,
  loading: () => (
    <div
      style={{ width: "min(80vw, 400px)", aspectRatio: "1" }}
      className="animate-pulse rounded-3xl bg-muted"
    />
  ),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const smallCardProps: any = {
  cardAspectRatio: 1,
  cardWidth: "min(80vw, 400px)",
};

export function ProfileCardSection() {
  return (
    <div className="screen-line-before screen-line-after my-8 flex min-h-[200px] flex-col items-center gap-16 border-x border-edge py-8">
      <ProfileCard
        name={USER.displayName}
        title={USER.jobTitle}
        handle={USER.username}
        status="Online"
        contactText="Contact Me"
        avatarUrl="/avatar3.jpg"
        showUserInfo
        miniAvatarUrl="/avatar3.jpg"
        enableTilt={true}
        enableMobileTilt={false}
        behindGlowColor="rgba(125, 190, 255, 0.67)"
        behindGlowEnabled
        behindGlowSize="50%"
        innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
        {...smallCardProps}
        onContactClick={() => {
          window.location.href = `mailto:${decodeEmail(USER.email)}`;
        }}
      />
    </div>
  );
}
