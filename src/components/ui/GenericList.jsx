import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../utils/cn';

function GenericList({ 
  items, 
  renderItem, 
  className, 
  listClassName,
  emptyMessage = 'Aucun élément à afficher',
  bordered = true,
  divided = true
}) {
  if (!items || items.length === 0) {
    return (
      <div className={cn('text-center py-4 text-content-secondary', className)}>
        {emptyMessage}
      </div>
    );
  }

  return (
    <ul className={cn(
      'space-y-2',
      bordered && 'border border-surface-border rounded-md p-2',
      divided && 'divide-y divide-surface-border',
      listClassName
    )}>
      {items.map((item, index) => (
        <li key={index} className={cn(
          bordered && 'px-3 py-2',
          divided && 'py-2'
        )}>
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  );
}

GenericList.propTypes = {
  items: PropTypes.array,
  renderItem: PropTypes.func.isRequired,
  className: PropTypes.string,
  listClassName: PropTypes.string,
  emptyMessage: PropTypes.string,
  bordered: PropTypes.bool,
  divided: PropTypes.bool,
};

export default GenericList;
