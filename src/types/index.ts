
export interface SectionProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface HeroContent {
  title: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  imageUrl?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export type Breakpoint = 'mobile' | 'tablet' | 'desktop';

