import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

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
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [],
};
