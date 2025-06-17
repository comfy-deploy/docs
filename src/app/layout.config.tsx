import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

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
        <svg
          width="24"
          height="24"
          viewBox="0 0 236 236"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="ComfyDeploy Logo"
        >
          <path fillRule="evenodd" clipRule="evenodd" d="M106.965 82.5931C106.965 88.4131 102.247 93.1312 96.4269 93.1312H70.3845C56.6153 93.1312 45.4532 104.293 45.4532 118.062C45.4532 131.832 56.6153 142.994 70.3845 142.994H96.4269C102.247 142.994 106.965 147.712 106.965 153.532V177.587C106.965 183.407 102.247 188.125 96.4269 188.125H70.3845C31.6901 188.125 0.322021 156.757 0.322021 118.062C0.322021 79.3681 31.6901 48 70.3845 48H96.4269C102.247 48 106.965 52.718 106.965 58.5381V82.5931Z" fill="url(#paint0_linear)"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M129.232 153.532C129.232 147.712 133.951 142.994 139.771 142.994H165.813C179.582 142.994 190.744 131.832 190.744 118.063C190.744 104.293 179.582 93.1311 165.813 93.1311H139.771C133.951 93.1311 129.232 88.4132 129.232 82.5932V58.538C129.232 52.718 133.951 48 139.771 48L165.813 48C204.507 48 235.875 79.368 235.875 118.063C235.875 156.757 204.507 188.125 165.813 188.125H139.771C133.951 188.125 129.232 183.407 129.232 177.587V153.532Z" fill="currentColor"/>
          <defs>
            <linearGradient id="paint0_linear" x1="0.322021" y1="118.051" x2="106.949" y2="118.051" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0075FF"/>
              <stop offset="1" stopColor="#BE34FF"/>
            </linearGradient>
          </defs>
        </svg>
        ComfyDeploy
      </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [],
};
