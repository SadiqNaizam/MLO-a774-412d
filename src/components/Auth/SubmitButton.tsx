import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // children will be passed via props (e.g., "Log in" text)
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ children, className, ...props }) => {
  return (
    <Button
      type="submit"
      variant="default" // Leverages primary color scheme from tailwind.config.ts
      className={cn(
        "w-full rounded-full py-3 text-base font-semibold", // "Fully rounded corners", specific padding and font weight for appearance
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;