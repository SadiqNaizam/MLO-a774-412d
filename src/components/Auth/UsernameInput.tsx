import React from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface UsernameInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // No explicit label prop, placeholder is used as per design.
  // Pass id, name, value, onChange, disabled, aria-label, etc. via props.
}

const UsernameInput: React.FC<UsernameInputProps> = ({ className, id = "username", placeholder = "Username", ...props }) => {
  return (
    <Input
      id={id}
      type="text"
      placeholder={placeholder}
      className={cn(
        "bg-card placeholder:text-muted-foreground", // Ensure white background on white card, and standard placeholder color
        className
      )}
      {...props}
    />
  );
};

export default UsernameInput;