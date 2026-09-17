export type ExperiencePositionIcon =
  /** Icon key used to render the position category in the UI. */
  "code" | "design" | "education" | "business" | "idea";

/** A value that can be a plain string or a localized {en, es} object. */
export type Localizable<T = string> = T | { en: T; es: T };

export type ExperiencePosition = {
  id: string;
  /** Position title – can be a plain string or localized {en, es}. */
  title: Localizable;
  /**
   * Employment period of the position.
   * Use "MM.YYYY" or "YYYY" format. Omit `end` for current roles.
   */
  employmentPeriod: {
    /** Start date (e.g., "10.2022" or "2020"). */
    start: string;
    /** End date; leave undefined for "Present". */
    end?: string;
  };
  /** Full-time | Part-time | Contract | Internship, etc. Can be localized {en, es}. */
  employmentType?: Localizable;
  /** Description text. Can be a plain string or localized {en, es}. */
  description?: Localizable;
  /** UI icon to represent the role type. */
  icon?: ExperiencePositionIcon;
  skills?: string[];
  /** Whether the position is expanded by default in the UI. */
  isExpanded?: boolean;
};

export type Experience = {
  id: string;
  companyName: string;
  /** URL to the company logo (absolute URL or path under /public). */
  companyLogo?: string;
  /** Roles held at this company; keep newest first for display. */
  positions: ExperiencePosition[];
  /** Marks the company as the current employer for highlighting. */
  isCurrentEmployer?: boolean;
};
