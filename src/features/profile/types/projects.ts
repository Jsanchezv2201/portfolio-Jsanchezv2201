import type { Localizable } from "./experiences";

export type Project = {
  /** Stable unique identifier (used as list key/anchor). */
  id: string;
  /** Project title – can be a plain string or localized {en, es}. */
  title: Localizable;
  /**
   * Project period for display and sorting.
   * Use "MM.YYYY" format. Omit `end` for ongoing projects.
   */
  period: {
    /** Start date (e.g., "05.2025"). */
    start: string;
    /** End date; leave undefined for "Present". */
    end?: string;
  };
  /** Public URL (site, repository, demo, or video). */
  link: string;
  /** Tags/technologies for chips or filtering. */
  skills: string[];
  /** Optional rich description; Markdown and line breaks supported. Can be localized {en, es}. */
  description?: Localizable;
  /** Logo image URL (absolute or path under /public). */
  logo?: string;
  /** Preview/banner image URL shown inside the expanded card. */
  image?: string;
  /** CSS object-position for the preview image crop. Defaults to 'center'. */
  imagePosition?: string;
  /** Whether the project card is expanded by default in the UI. */
  isExpanded?: boolean;
};
