import React from 'react';
import { cn } from '@/lib/utils';
import UsernameInput from './UsernameInput';
import PasswordInput from './PasswordInput';
import SubmitButton from './SubmitButton';
import SignUpLink from './SignUpLink';

interface AuthCardProps {
  className?: string;
  onLoginSubmit?: (data: { username: string; password: string }) => void | Promise<void>;
  initialUsername?: string;
  initialPassword?: string;
  signupHref?: string;
}

const AuthCard: React.FC<AuthCardProps> = ({
  className,
  onLoginSubmit,
  initialUsername = '',
  initialPassword = '',
  signupHref = '/signup',
}) => {
  const [username, setUsername] = React.useState<string>(initialUsername);
  const [password, setPassword] = React.useState<string>(initialPassword);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    if (onLoginSubmit) {
      try {
        await onLoginSubmit({ username, password });
      } catch (error) {
        console.error("Login failed:", error);
        // Optionally, handle error display here (e.g., toast notification)
      }
    } else {
      // Default behavior if no onLoginSubmit is provided
      console.log('Login submitted:', { username, password });
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    setIsLoading(false);
  };

  return (
    <div
      className={cn(
        "w-[375px] bg-card text-card-foreground p-8 rounded-lg shadow-md",
        className
      )}
    >
      <form 
        onSubmit={handleSubmit} 
        className="flex flex-col gap-6" // Consistent gap for all elements in the card
      >
        <h2 className="text-3xl font-bold text-center text-card-foreground">
          Log in
        </h2>
        
        <UsernameInput
          id="login-username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={isLoading}
          aria-label="Username" // For accessibility as placeholder acts as visual label
        />
        
        <PasswordInput
          id="login-password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
          aria-label="Password" // For accessibility
        />
        
        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Log in'}
        </SubmitButton>
        
        <SignUpLink 
          href={signupHref}
          className="text-center" // Center the link text
        >
          or, sign up
        </SignUpLink>
      </form>
    </div>
  );
};

export default AuthCard;