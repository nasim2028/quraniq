import { cn } from "@/lib/utils";

const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2L14.1213 6.87868L19 9L14.1213 11.1213L12 16L9.87868 11.1213L5 9L9.87868 6.87868L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2L14.1213 6.87868L19 9L14.1213 11.1213L12 16L9.87868 11.1213L5 9L9.87868 6.87868L12 2Z" transform="rotate(45 12 12)" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <StarIcon className="text-primary h-6 w-6" />
      <span className="text-xl font-bold font-headline text-foreground">
        Quraniq
      </span>
    </div>
  );
}
