import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../utils/cn';

function GenericCard({ 
  children, 
  className, 
  title, 
  subtitle, 
  icon, 
  borderColor = 'border-surface-border',
  bgColor = 'bg-surface',
  hoverEffect = true 
}) {
  return (
    <div 
      className={cn(
        `rounded-lg p-4 border ${borderColor} ${bgColor} transition-all duration-200`,
        hoverEffect && 'hover:shadow-md hover:border-accent-muted',
        className
      )}
    >
      {(title || icon) && (
        <div className="flex items-center gap-3 mb-3">
          {icon && (
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-raised border border-surface-border">
              {icon}
            </div>
          )}
          {title && (
            <div>
              <h3 className="text-sm font-serif text-content">{title}</h3>
              {subtitle && (
                <p className="text-[11px] uppercase tracking-widest text-content-subtle">
                  {subtitle}
                </p>
              )}
            </div>
          )}
        </div>
      )}
      {children}
    </div>
  );
}

GenericCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.element,
  borderColor: PropTypes.string,
  bgColor: PropTypes.string,
  hoverEffect: PropTypes.bool,
};

export default GenericCard;
