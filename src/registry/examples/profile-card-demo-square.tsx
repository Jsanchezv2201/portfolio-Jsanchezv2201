"use client";

import ProfileCard from "@/components/ProfileCard";
import { USER } from "@/features/profile/data/user";

export default function ProfileCardDemoSquare() {
  return (
    <div className="flex w-full items-center justify-center py-8">
      {}
      <ProfileCard
        name={USER.displayName}
        title={USER.jobTitle}
        handle={USER.username}
        status="Online"
        contactText="Contact Me"
        avatarUrl={USER.avatar}
        showUserInfo
        miniAvatarUrl={USER.avatar}
        enableTilt={true}
        enableMobileTilt={false}
        behindGlowColor="rgba(125, 190, 255, 0.67)"
        behindGlowEnabled
        behindGlowSize="50%"
        innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
        cardAspectRatio={1}
        cardWidth="min(80vw, 400px)"
        onContactClick={(event: unknown) => window.open(USER.website, "_blank")}
      />
    </div>
  );
}
