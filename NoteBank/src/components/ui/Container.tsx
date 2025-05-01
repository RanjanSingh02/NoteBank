import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '', 
  as: Component = 'div'
}) => {
  return (
    <Component className={`container mx-auto px-4 md:px-6 max-w-7xl ${className}`}>
      {children}
    </Component>
  );
};

export default Container;