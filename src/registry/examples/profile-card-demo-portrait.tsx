"use client";

import ProfileCard from "@/components/ProfileCard";
import { USER } from "@/features/profile/data/user";

export default function ProfileCardDemoPortrait() {
  return (
    <div className="flex w-full items-center justify-center py-8">
      {}
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
        cardAspectRatio={16 / 9}
        cardWidth="min(95vw, 700px)"
        className="pc-portrait-close"
        onContactClick={() => window.open(USER.website, "_blank")}
      />
    </div>
  );
}
