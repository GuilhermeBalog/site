import React from "react";

export default function ExternalLink(props: Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel">) {
  return <a {...props} target="_blank" rel="noopener noreferrer" />
}
