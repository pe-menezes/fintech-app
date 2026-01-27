export function PixIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect x="5.5" y="5.5" width="5.5" height="5.5" rx="1.2" transform="rotate(45 8.25 8.25)" />
      <rect x="13" y="5.5" width="5.5" height="5.5" rx="1.2" transform="rotate(45 15.75 8.25)" />
      <rect x="5.5" y="13" width="5.5" height="5.5" rx="1.2" transform="rotate(45 8.25 15.75)" />
      <rect x="13" y="13" width="5.5" height="5.5" rx="1.2" transform="rotate(45 15.75 15.75)" />
    </svg>
  );
}
