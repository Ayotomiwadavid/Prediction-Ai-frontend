import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from 'lucide-react';

// Simple className merger
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Accordion Root
function Accordion({ type = 'single', collapsible = true, children, className, ...props }) {
  return (
    <AccordionPrimitive.Root type={type} collapsible={collapsible} className={className} {...props}>
      {React.Children.toArray(children)}
    </AccordionPrimitive.Root>
  );
}

// Accordion Item
function AccordionItem({ value, className, children, ...props }) {
  return (
    <AccordionPrimitive.Item value={value} className={cn('border-b last:border-b-0', className)} {...props}>
      {React.Children.toArray(children)}
    </AccordionPrimitive.Item>
  );
}

// Accordion Trigger
function AccordionTrigger({ className, children, ...props }) {
  const safeChildren = React.Children.toArray(children);
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          'flex flex-1 justify-between items-center py-4 px-2 text-left text-sm font-medium rounded-md outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 [&[data-state=open]>svg]:rotate-180',
          className
        )}
        {...props}
      >
        {safeChildren}
        <ChevronDownIcon className="w-4 h-4 text-muted-foreground" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

// Accordion Content
function AccordionContent({ className, children, ...props }) {
  const safeChildren = React.Children.toArray(children);
  return (
    <AccordionPrimitive.Content
      className={cn(
        'overflow-hidden text-sm transition-all data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up',
        className
      )}
      {...props}
    >
      <div>{safeChildren}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
