import { BrainCogIcon, CloudIcon, FileTextIcon, GlobeIcon, MonitorSmartphoneIcon, ZapIcon } from 'lucide-react';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  const features = [
    {
      title: 'Store Your PDF Documents',
      description: 'Securely upload and manage your PDF files with ease, ensuring quick access whenever needed.',
      icon: GlobeIcon
    },
    {
      title: 'Blazing Fast Response',
      description: 'Experience lightning-fast interactions with your PDFs, powered by optimized AI processing.',
      icon: ZapIcon
    },
    {
      title: 'Chat Memorization',
      description: 'Our AI remembers your conversations, providing context-aware answers and seamless continuity.',
      icon: BrainCogIcon
    },
    {
      title: 'Interactive PDF Viewer',
      description: 'View, highlight, and annotate PDFs in a sleek, user-friendly interface designed for efficiency.',
      icon: FileTextIcon
    },
    {
      title: 'Cloud Backup',
      description: 'Your documents are automatically backed up in the cloud, ensuring safety and accessibility anytime, anywhere.',
      icon: CloudIcon
    },
    {
      title: 'Responsive Across Devices',
      description: 'Enjoy a smooth experience on desktops, tablets, and mobile devices with our fully responsive design.',
      icon: MonitorSmartphoneIcon
    }
  ];

  return (
    <main className='flex-1 bg-gradient-to-bl from-white to-indigo-600 p-2 lg:p-5 overflow-scroll'>
      <div className='bg-white py-24 sm:py-32 rounded-md drop-shadow-xl'>
        <div className='flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='text-base font-semibold text-indigo-700'>Your Interactive Document Companion</h2>
            <p className='mt-2 text-3xl sm:text-6xl leading-tight text-gray-900 font-bold'>
              Transform Your PDF into Interactive Documents
            </p>

            <p className='mt-6 leading-8 text-gray-600'>
              Introducing <span className='font-bold text-indigo-600'>PDF Sensei</span>
              <br />
              <br />
              Upload your documents, and our chatbot will answer questions, summarize content, and answer all your Qs. Ideal for everyone,{' '}
              <span className='font-bold text-indigo-600'>PDF Sensei</span> turns static documents into{' '}
              <br /> <span className='font-bold'>dynamic conversations</span>, enhancing productivity{' '}
              <span className='text-xl sm:text-2xl font-semibold'>10X</span> effortlessly.
            </p>
          </div>

          <Button asChild className='mt-10'>
            <Link href='/dashboard'>Get Started</Link>
          </Button>
        </div>

        <div className='relative overflow-hidden pt-16'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <Image
              alt=''
              src='/chatLanding.jpg'
              width={2432}
              height={1442}
              className='mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10'
            />

            <div aria-hidden='true' className='relative'>
              <div className='absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]' />
            </div>
          </div>
        </div>

        <div className='mt-16 px-6'>
          <dl className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {features.map((feature) => (
              <div key={feature.title} className='relative p-6 bg-gray-100 rounded-lg shadow-md'>
                <feature.icon aria-hidden='true' className='h-8 w-8 text-indigo-600 mb-4' />
                <dt className='font-semibold text-lg text-gray-900'>{feature.title}</dt>
                <dd className='mt-2 text-gray-600'>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
