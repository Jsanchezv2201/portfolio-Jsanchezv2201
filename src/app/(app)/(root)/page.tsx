import dayjs from "dayjs";
import type { ProfilePage as PageSchema, WithContext } from "schema-dts";

import { About } from "@/features/profile/components/about";
import { Awards } from "@/features/profile/components/awards";
// import { Blog } from "@/features/profile/components/blog";
import { Brand } from "@/features/profile/components/brand";
import { Certifications } from "@/features/profile/components/certifications";
import { Education } from "@/features/profile/components/education";
import { Experiences } from "@/features/profile/components/experiences";
import { GitHubContributions } from "@/features/profile/components/github-contributions";
import { Overview } from "@/features/profile/components/overview";
import { ProfileCardSection } from "@/features/profile/components/profile-card-section";
import { ProfileCover } from "@/features/profile/components/profile-cover";
import { ProfileHeader } from "@/features/profile/components/profile-header";
import { Projects } from "@/features/profile/components/projects";
import { SocialLinks } from "@/features/profile/components/social-links";
import { TeckStack } from "@/features/profile/components/teck-stack";
import { USER } from "@/features/profile/data/user";

import { Separator } from "./_separator";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto md:max-w-3xl">
        <ProfileCover />
        <ProfileHeader />
        <ProfileCardSection />
        <Separator />

        <Overview />
        <Separator />

        <SocialLinks />
        <Separator />

        <About />
        <Separator />

        <TeckStack />
        <Separator />

        <GitHubContributions />
        <Separator />

        {/* <Blog />
        <Separator /> */}

        <Experiences />
        <Separator />

        <Education />
        <Separator />

        <Projects />
        <Separator />

        {/* <Awards />
        <Separator /> */}

        <Certifications />
        <Separator />

        <Brand />
        <Separator />
      </div>
    </>
  );
}

function getPageJsonLd(): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: dayjs(USER.dateCreated).toISOString(),
    dateModified: dayjs().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: USER.avatar,
    },
  };
}
