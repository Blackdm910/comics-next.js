// 'use client';
// import { useState, useEffect, useMemo } from 'react';
// import KomikIndo from '@/app/komikindo/page';
// // import Komiku from '@/p/komiku/page';
// import Doujindesu from './komik/doujindesu/page';

// export default function Home() {
// const [activeTab, setActiveTab] = useState('komikindo');
// const [isTabVisible, setIsTabVisible] = useState(true);

// const tabs = useMemo(
// () => [
// {
// name: 'KomikIndo',
// route: 'komikindo',
// Component: KomikIndo,
// },
// // {
// //   name: 'Komiku',
// //   route: 'komiku',
// //   Component: Komiku,
// // },
// {
// name: 'Doujindesu',
// route: 'doujindesu',
// Component: Doujindesu,
// },
// ],
// [],
// );

// const ActiveComponent = useMemo(() => {
// const activeTabData = tabs.find((tab) => tab.route === activeTab);
// return activeTabData ? activeTabData.Component : null;
// }, [activeTab, tabs]);

// useEffect(() => {
// let lastScrollY = window.scrollY;
// const handleScroll = () => {
// const currentScrollY = window.scrollY;
// setIsTabVisible(currentScrollY <= lastScrollY);
// lastScrollY = currentScrollY;
// };

// window.addEventListener('scroll', handleScroll);
// return () => window.removeEventListener('scroll', handleScroll);
// }, []);

// return (
// <div className='z-999 min-h-screen bg-gray-100'>
// <div className='flex-grow'>{ActiveComponent && <ActiveComponent />}</div>

// <div
// className={`fixed bottom-0 left-0 right-0 transition-transform duration-300 ${isTabVisible ? 'translate-y-0' : 'translate-y-full'} shadow-t border-t border-gray-700 bg-white`}
// >
// <div className='z-50 flex h-11 items-center justify-around bg-gray-700'>
// {tabs.map((tab) => (
// <button
// key={tab.route}
// className={`z-50 flex-1 py-2 text-center ${activeTab === tab.route ? 'font-bold text-blue-500' : 'text-gray-500'}`}
// onClick={() => setActiveTab(tab.route)}
// >
// {tab.name}
// </button>
// ))}
// </div>
// </div>
// </div>
// );
// }
