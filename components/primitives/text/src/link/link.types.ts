import type { FlavorType, TargetType } from "@phoenix-ui/types/attributes";
import type { TextProperties } from "../text.types.ts";
import type { ComponentAttributes } from "@phoenix-ui/types/components";

export interface LinkAttributes extends ComponentAttributes {
  target?: string;
  rel?: string;
  href?: string;
}

export interface RemixNavLinkAttributes extends ComponentAttributes {
  target?: string;
  rel?: string;
  to?: string;
}

export interface LinkProperties extends TextProperties {
  href?: string;
  target?: TargetType;
  flavor?: FlavorType;
}
