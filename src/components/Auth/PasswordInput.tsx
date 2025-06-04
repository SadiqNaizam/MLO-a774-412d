import React from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // No explicit label prop, placeholder is used as per design.
  // Pass id, name, value, onChange, disabled, aria-label, etc. via props.
}

const PasswordInput: React.FC<PasswordInputProps> = ({ className, id = "password", placeholder = "Password", ...props }) => {
  return (
    <Input
      id={id}
      type="password"
      placeholder={placeholder}
      className={cn(
        "bg-card placeholder:text-muted-foreground", // Ensure white background on white card, and standard placeholder color
        className
      )}
      {...props}
    />
  );
};

export default PasswordInput;