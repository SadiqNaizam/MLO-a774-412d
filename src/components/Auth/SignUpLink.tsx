import React from 'react';
import { cn } from '@/lib/utils';
// For actual routing, you might use Link from 'react-router-dom' or 'next/link'
// For this component, we'll use a standard <a> tag or a button if no href.

interface SignUpLinkProps {
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  children: React.ReactNode;
  className?: string;
}

const SignUpLink: React.FC<SignUpLinkProps> = ({ href, onClick, children, className }) => {
  const commonClasses = cn(
    "text-sm text-muted-foreground hover:text-primary hover:underline",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card rounded-sm", // Enhanced focus state
    className
  );

  if (href) {
    return (
      <a href={href} className={commonClasses} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={commonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default SignUpLink;