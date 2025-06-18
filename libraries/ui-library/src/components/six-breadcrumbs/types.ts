export interface SixBreadcrumbsData
  extends Array<{
    name: string;
    disabled?: boolean;
    onSixClick?: () => void;
  }> {}
