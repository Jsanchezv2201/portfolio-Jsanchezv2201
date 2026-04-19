"use client";

import { motion } from "framer-motion";
import { GlobeIcon, MapPinIcon } from "lucide-react";

import { USER } from "@/features/profile/data/user";
import { urlToName } from "@/utils/url";

import { Panel, PanelContent } from "../panel";
import { EmailItem } from "./email-item";
import { IntroItem } from "./intro-item";
import { JobItem } from "./job-item";
import { PhoneItem } from "./phone-item";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export function Overview() {
  return (
    <Panel>
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="space-y-2">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
          className="space-y-2"
        >
          {USER.jobs.map((job, index) => (
            <motion.div key={index} variants={itemVariants}>
              <JobItem
                title={job.title}
                company={job.company}
                website={job.website}
                showAt={job.showAt}
              />
            </motion.div>
          ))}

          <motion.div variants={itemVariants}>
            <IntroItem icon={MapPinIcon} content={USER.address} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <PhoneItem phoneNumber={USER.phoneNumber} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <EmailItem email={USER.email} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <IntroItem
              icon={GlobeIcon}
              content={urlToName(USER.website)}
              href={USER.website}
            />
          </motion.div>
        </motion.div>
      </PanelContent>
    </Panel>
  );
}
