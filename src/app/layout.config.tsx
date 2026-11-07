import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Globe, Mail } from "lucide-react";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <img
          src="/images/icon.svg"
          width={32}
          alt="ComfyDeploy"
          className="dark:block hidden"
        />
        <img
          src="/images/icon-light.svg"
          width={32}
          alt="ComfyDeploy"
          className="dark:hidden block"
        />
        <span className="font-bold text-lg">ComfyDeploy</span>
      </>
    ),
  },
  githubUrl: "https://github.com/comfy-deploy/comfydeploy",
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [
    {
      type: "icon",
      label: "Website",
      text: "Website",
      icon: <Globe />,
      url: "https://www.comfydeploy.com",
      external: true,
    },
    {
      type: "icon",
      label: "X (Twitter)",
      text: "X",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      url: "https://x.com/comfydeploy",
      external: true,
    },
    {
      type: "icon",
      label: "Email support",
      text: "Support",
      icon: <Mail />,
      url: "mailto:karrix@comfydeploy.com,nick@comfydeploy.com",
    },
  ],
};
