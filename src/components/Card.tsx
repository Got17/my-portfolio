import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  children,
  className = '',
  ...props
}) => {
  return (
    <div className={`card ${className}`} {...props}>
      {title && <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem' }}>{title}</h3>}
      {children}
    </div>
  );
};
