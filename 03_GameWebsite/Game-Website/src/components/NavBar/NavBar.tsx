// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
 
// const NavBar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
 
//   const navLinks = [
//     { name: 'NEWS', href: '#news' },
//     { name: 'DEPLOY', href: '#deploy' }
//   ];
 
//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <a href="#home" className="flex items-center space-x-2 group">
//               <div className="relative">
//                 <div className="absolute inset-0 bg-cyan-500/20 blur-xl group-hover:bg-cyan-500/30 transition-all duration-300"></div>
//                 <span className="relative text-2xl md:text-3xl font-bold tracking-wider">
//                   <span className="text-cyan-400">HELIX</span>
//                   <br />
//                   <span className="text-orange-500">OUTRIDERS</span>
//                 </span>
//               </div>
//             </a>
//           </div>
 
//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="relative text-gray-300 hover:text-cyan-400 font-semibold tracking-wider text-sm transition-colors duration-200 group"
//               >
//                 {link.name}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
//               </a>
//             ))}
//             <a
//               href="#deploy"
//               className="relative px-6 py-2.5 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold tracking-wider text-sm rounded overflow-hidden group"
//             >
//               <span className="relative z-10">PLAY NOW</span>
//               <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </a>
//           </div>
 
//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
//           >
//             {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>
 
//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden transition-all duration-300 overflow-hidden ${
//           isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
//         }`}
//       >
//         <div className="px-4 pt-2 pb-6 space-y-3 bg-slate-950/98 backdrop-blur-md border-t border-cyan-900/30">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-900/20 rounded font-semibold tracking-wider text-sm transition-all duration-200"
//             >
//               {link.name}
//             </a>
//           ))}
//           <a
//             href="#deploy"
//             onClick={() => setIsMobileMenuOpen(false)}
//             className="block px-4 py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold tracking-wider text-sm rounded text-center"
//           >
//             PLAY NOW
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };
 
// // Demo wrapper with sample content
// export default function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
//       <NavBar />
     
//       {/* Demo Hero Section */}
//       <div className="h-screen flex items-center justify-center relative overflow-hidden">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
//         <div className="text-center z-10 px-4">
//           <h1 className="text-5xl md:text-7xl font-bold mb-6">
//             <span className="text-cyan-400">HELIX</span>
//             <br />
//             <span className="text-orange-500">OUTRIDERS</span>
//           </h1>
//           <p className="text-gray-400 text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
//             Squads drop into quarantined city blocks to splice helix augments,
//             harvest undead genomes, and fight to earn the evac
//           </p>
//           <div className="inline-block px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-lg rounded-lg">
//             AVAILABLE NOW
//           </div>
//           <div className="mt-4 text-cyan-400 text-sm tracking-wider">
//             ONLY ON PLAYSTATION 5
//           </div>
//         </div>
//       </div>
 
//       {/* Demo sections for scrolling */}
//       <div id="news" className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-4xl font-bold text-cyan-400 mb-4">NEWS</h2>
//           <p className="text-gray-400">Latest updates and announcements</p>
//         </div>
//       </div>
 
//       <div id="deploy" className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-4xl font-bold text-orange-500 mb-4">DEPLOY</h2>
//           <p className="text-gray-400">Ready to drop into the action?</p>
//         </div>
//       </div>
//     </div>
//   );
// }