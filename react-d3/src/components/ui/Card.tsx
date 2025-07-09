import React from 'react';
import { cn } from '../../utils';
import type { CardProps } from '../../types';

export const Card: React.FC<CardProps> = ({
  children,
  className,
  title,
  description,
  ...props
}) => {
  return (
    <div
      className={cn(
        'rounded-lg border border-gray-200 bg-white p-6 shadow-sm',
        className
      )}
      {...props}
    >
      {title && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {description && (
            <p className="mt-1 text-sm text-gray-600">{description}</p>
          )}
        </div>
      )}
      {children}
    </div>
  );
};
