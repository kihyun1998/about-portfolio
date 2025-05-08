import { cn } from '@/lib/utils';
import Link from 'next/link';
import ThemeToggleButton from './ThemeToggleButton';

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        className,
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          test
        </Link>
        <div className="border-l pl-4">
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
}
