'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = `
      relative flex items-center justify-center cursor-pointer
      outline-none border-none z-0
      bg-transparent rounded-full
      transition-all duration-300 ease-out
      hover:scale-105 active:scale-95
      focus:outline-none focus:ring-2 focus:ring-white/30
      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    `;

    const variants = {
      primary: `
        w-[70px] h-[70px] p-[15px]
        before:content-[''] before:absolute before:inset-0 before:z-0 before:overflow-hidden before:rounded-full
        before:shadow-[inset_2px_2px_0px_-2px_rgba(255,255,255,0.7),inset_0_0_3px_1px_rgba(255,255,255,0.7)]
        before:bg-[rgb(255_255_255_/_10%)]
        after:content-[''] after:absolute after:z-[-1] after:inset-0 after:rounded-full
        after:backdrop-blur-0 after:overflow-hidden after:isolate after:filter-[url('#btn-glass')]
      `,
      secondary: `
        w-16 h-16 p-4
        before:content-[''] before:absolute before:inset-0 before:z-0 before:overflow-hidden before:rounded-full
        before:shadow-[inset_1px_1px_0px_-1px_rgba(255,255,255,0.5),inset_0_0_2px_1px_rgba(255,255,255,0.5)]
        before:bg-white/5
        after:content-[''] after:absolute after:z-[-1] after:inset-0 after:rounded-full
        after:backdrop-blur-0 after:overflow-hidden after:isolate after:filter-[url('#btn-glass')]
      `,
      ghost: `
        w-14 h-14 p-3
        before:content-[''] before:absolute before:inset-0 before:z-0 before:overflow-hidden before:rounded-full
        before:shadow-[inset_1px_1px_0px_-1px_rgba(255,255,255,0.3),inset_0_0_1px_1px_rgba(255,255,255,0.3)]
        before:bg-white/5
        after:content-[''] after:absolute after:z-[-1] after:inset-0 after:rounded-full
        after:backdrop-blur-0 after:overflow-hidden after:isolate after:filter-[url('#btn-glass')]
      `,
    };

    const sizes = {
      sm: 'w-12 h-12 p-2',
      md: 'w-[70px] h-[70px] p-[15px]',
      lg: 'w-20 h-20 p-5',
    };

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        style={{
          
        }}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:stroke-white">
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };
