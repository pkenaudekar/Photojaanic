import React from 'react';

const Link = ({ className, href, children, style, setTabSelected, num }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    setTabSelected(num);

    event.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href} style={style}>
      {children}
    </a>
  );
};

export default Link;
