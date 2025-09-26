import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

const faqs = [
  {
    question: 'How accurate are your AI predictions?',
    answer:
      'Our AI model maintains a 73% win rate across all major sports. We track and publish all results transparently, and our algorithm continuously learns and improves from new data.',
  },
  {
    question: 'What sports do you cover?',
    answer:
      'We provide predictions for NFL, NBA, MLB, NHL, college football, college basketball, and major soccer leagues including Premier League, Champions League, and MLS.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer:
      "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. You'll continue to have access until the end of your current billing period.",
  },
  {
    question: 'Do you offer a money-back guarantee?',
    answer:
      "We offer a 30-day money-back guarantee for all new subscribers. If you're not satisfied with our service within the first 30 days, we'll provide a full refund.",
  },
  {
    question: 'How do I receive the picks?',
    answer:
      'Picks are delivered through our mobile app, email notifications, and web dashboard. You\'ll receive picks typically 2-4 hours before game time with detailed analysis and confidence ratings.',
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about MySports.ai
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Disclosure key={idx}>
              {({ open }) => (
                <div className="bg-card border border-border/50 rounded-lg px-6">
                  <Disclosure.Button className="flex justify-between w-full py-4 text-left text-sm font-medium text-left text-gray-900 hover:underline focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>{faq.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-muted-foreground`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="pt-2 pb-4 text-sm text-muted-foreground">
                    {faq.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
