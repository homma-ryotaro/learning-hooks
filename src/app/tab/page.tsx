'use client';
import React, { useRef } from 'react';

function TabComponent() {
  const activeTab = useRef(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (index: number) => {
    activeTab.current = index;
    updateTabContent();
  };

  const updateTabContent = () => {
    if (contentRef.current) {
      const children = contentRef.current.children;
      for (let i = 0; i < children.length; i++) {
        const child = children[i] as HTMLElement;
        if (i === activeTab.current) {
          child.style.display = 'block';
        } else {
          child.style.display = 'hidden';
        }
      }
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => handleTabClick(0)}>Tab 1</button>
        <button onClick={() => handleTabClick(1)}>Tab 2</button>
        <button onClick={() => handleTabClick(2)}>Tab 3</button>
      </div>
      <div ref={contentRef}>
        <div>Tab 1 content</div>
        <div>Tab 2 content</div>
        <div>Tab 3 content</div>
      </div>
    </div>
  );
}

export default TabComponent;
