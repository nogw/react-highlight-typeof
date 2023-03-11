import React, { useCallback, useEffect } from "react";
import Hover from "./data/typeDefinitions";
import "./HoverWrapper.css";

interface HoverWrapperProps {
  children: React.ReactNode;
  workspace: string;
  codeblock?: string;
}

const HoverWrapper = ({
  children,
  workspace,
  codeblock = "shared",
}: HoverWrapperProps) => {
  const handleSpanHover = useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLSpanElement;
      const lookup = target.innerText.trim();

      if (Hover[workspace][codeblock].hasOwnProperty(lookup)) {
        const typeDefinition = Hover[workspace][codeblock][lookup];
        const rule = `.hovered:hover::before { content: '${typeDefinition}'; }`;

        const styleElement = document.createElement("style");
        document.head.appendChild(styleElement);

        const sheet = styleElement.sheet as CSSStyleSheet;
        sheet.insertRule(rule);

        target.classList.add("hovered");
      }
    },
    [Hover]
  );

  useEffect(() => {
    const spanElements = document.querySelectorAll("span");

    spanElements.forEach((span: HTMLSpanElement) => {
      span.addEventListener("mouseover", handleSpanHover);
    });

    return () => {
      spanElements.forEach((span: HTMLSpanElement) => {
        span.removeEventListener("mouseover", handleSpanHover);
      });
    };
  }, [handleSpanHover]);

  return <div className="hoverWrapperContainer">{children}</div>;
};

export default HoverWrapper;
