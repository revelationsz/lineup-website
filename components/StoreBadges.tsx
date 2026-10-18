const APP_STORE_URL = 'https://apps.apple.com/app/id6743187492';
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.swhatmore.barApp&hl=en_US';

type Variant = 'light' | 'dark';
type Size = 'sm' | 'md';

const variantClasses: Record<Variant, string> = {
  light: 'bg-white text-[#0A0A0A] hover:bg-white/90 hover:shadow-[0_4px_20px_rgba(255,255,255,0.2)]',
  dark: 'bg-[#0A0A0A] text-white border border-white/15 hover:bg-[#1a1a1a] hover:border-white/25 hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]',
};

const sizeClasses: Record<Size, string> = {
  sm: 'h-10 px-4 gap-2',
  md: 'h-14 min-w-[11.5rem] px-6 gap-3',
};

const iconSizeClasses: Record<Size, string> = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
};

function AppleIcon({ className }: { className: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function GooglePlayIcon({ className }: { className: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
    </svg>
  );
}

const stores = [
  { href: APP_STORE_URL, Icon: AppleIcon, eyebrow: 'Download on the', name: 'App Store' },
  { href: GOOGLE_PLAY_URL, Icon: GooglePlayIcon, eyebrow: 'Get it on', name: 'Google Play' },
];

export default function StoreBadges({
  variant = 'light',
  size = 'md',
  stretch = false,
  className = '',
  onClick,
}: {
  variant?: Variant;
  size?: Size;
  /** Buttons share the full container width (e.g. in the mobile menu). */
  stretch?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  const layout = size === 'sm' ? 'flex-row gap-2' : 'flex-col sm:flex-row gap-3';

  return (
    <div className={`flex items-center justify-center ${layout} ${stretch ? 'w-full' : ''} ${className}`}>
      {stores.map(({ href, Icon, eyebrow, name }) => (
        <a
          key={name}
          href={href}
          onClick={onClick}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${eyebrow} ${name}`}
          className={`inline-flex items-center justify-center rounded-full transition-all duration-200 hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6] ${sizeClasses[size]} ${variantClasses[variant]} ${stretch ? 'flex-1' : ''}`}
        >
          <Icon className={`${iconSizeClasses[size]} shrink-0`} />
          {size === 'sm' ? (
            <span className="text-sm font-semibold whitespace-nowrap">{name}</span>
          ) : (
            <span className="flex flex-col items-start text-left leading-none">
              <span className="text-[11px] font-medium opacity-70">{eyebrow}</span>
              <span className="text-lg font-bold tracking-tight mt-0.5">{name}</span>
            </span>
          )}
        </a>
      ))}
    </div>
  );
}
