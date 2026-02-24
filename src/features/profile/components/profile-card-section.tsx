"use client";

import dynamic from "next/dynamic";

import { USER } from "@/features/profile/data/user";

const ProfileCard = dynamic(() => import("@/components/ProfileCard"), {
  ssr: false,
});

export function ProfileCardSection() {
  return (
    <div className="my-8 flex justify-center">
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
        innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
        onContactClick={() => {
          window.open(USER.website, "_blank");
        }}
      />
    </div>
  );
}
