// import React, { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   Trophy, 
//   Code, 
//   Award, 
//   Briefcase, 
//   GraduationCap,
//   Calendar,
//   MapPin,
//   Clock,
//   ExternalLink,
//   Shield,
//   Star,
//   Zap,
//   Target,
//   Users,
//   BookOpen,
//   X,
//   ZoomIn,
//   ZoomOut,
//   RotateCcw,
//   Maximize2
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const Journey = ({ journeyData = [] }) => {
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [zoom, setZoom] = useState(1);
//   const [pan, setPan] = useState({ x: 0, y: 0 });
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
//   const containerRef = useRef(null);

//   // Sample journey data if none provided
//   const defaultJourneyData = [
//     {
//       id: 1,
//       title: "Started Computer Science",
//       type: "education",
//       date: "2023-09-01",
//       description: "Began my journey in Computer Science at University",
//       verified: true,
//       media: null,
//       position: { x: 100, y: 300 }
//     },
//     {
//       id: 2,
//       title: "First Hackathon",
//       type: "event",
//       date: "2023-10-15",
//       description: "Participated in TechCrunch Disrupt Hackathon",
//       verified: true,
//       media: null,
//       position: { x: 300, y: 200 }
//     },
//     {
//       id: 3,
//       title: "Built Portfolio Website",
//       type: "project",
//       date: "2023-11-20",
//       description: "Created a responsive portfolio website using React and Tailwind CSS",
//       verified: true,
//       media: null,
//       position: { x: 500, y: 250 }
//     },
//     {
//       id: 4,
//       title: "Won Best UI/UX Award",
//       type: "certificate",
//       date: "2023-12-10",
//       description: "Received Best UI/UX Design Award at Winter Hackathon",
//       verified: true,
//       media: null,
//       position: { x: 700, y: 150 }
//     },
//     {
//       id: 5,
//       title: "Internship at TechCorp",
//       type: "opportunity",
//       date: "2024-01-15",
//       description: "Secured summer internship as Frontend Developer",
//       verified: true,
//       media: null,
//       position: { x: 900, y: 200 }
//     },
//     {
//       id: 6,
//       title: "Open Source Contribution",
//       type: "project",
//       date: "2024-02-20",
//       description: "Contributed to React ecosystem with 500+ stars",
//       verified: true,
//       media: null,
//       position: { x: 650, y: 400 }
//     },
//     {
//       id: 7,
//       title: "Blockchain Certification",
//       type: "certificate",
//       date: "2024-03-15",
//       description: "Completed Ethereum Developer Certification",
//       verified: true,
//       media: null,
//       position: { x: 850, y: 350 }
//     }
//   ];

//   const data = journeyData.length > 0 ? journeyData : defaultJourneyData;

//   // Icon mapping for different milestone types
//   const getIcon = (type) => {
//     switch (type) {
//       case 'event': return Trophy;
//       case 'project': return Code;
//       case 'certificate': return Award;
//       case 'opportunity': return Briefcase;
//       case 'education': return GraduationCap;
//       default: return Star;
//     }
//   };

//   // Color mapping for different milestone types
//   const getColors = (type, verified) => {
//     const baseColors = {
//       event: verified ? 'from-yellow-400 to-orange-500' : 'from-yellow-400/50 to-orange-500/50',
//       project: verified ? 'from-blue-400 to-cyan-500' : 'from-blue-400/50 to-cyan-500/50',
//       certificate: verified ? 'from-purple-400 to-pink-500' : 'from-purple-400/50 to-pink-500/50',
//       opportunity: verified ? 'from-green-400 to-emerald-500' : 'from-green-400/50 to-emerald-500/50',
//       education: verified ? 'from-indigo-400 to-blue-500' : 'from-indigo-400/50 to-blue-500/50'
//     };
//     return baseColors[type] || (verified ? 'from-gray-400 to-gray-500' : 'from-gray-400/50 to-gray-500/50');
//   };

//   // Generate connections between nodes
//   const generateConnections = () => {
//     const connections = [];
//     const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
    
//     for (let i = 0; i < sortedData.length - 1; i++) {
//       connections.push({
//         from: sortedData[i],
//         to: sortedData[i + 1]
//       });
//     }
    
//     return connections;
//   };

//   const connections = generateConnections();

//   // Handle zoom
//   const handleZoom = (delta) => {
//     setZoom(prev => Math.max(0.5, Math.min(3, prev + delta)));
//   };

//   // Handle pan
//   const handleMouseDown = (e) => {
//     if (e.target.closest('.milestone-node')) return;
//     setIsDragging(true);
//     setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     setPan({
//       x: e.clientX - dragStart.x,
//       y: e.clientY - dragStart.y
//     });
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   // Reset view
//   const resetView = () => {
//     setZoom(1);
//     setPan({ x: 0, y: 0 });
//   };

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     container.addEventListener('mousemove', handleMouseMove);
//     container.addEventListener('mouseup', handleMouseUp);
//     container.addEventListener('mouseleave', handleMouseUp);

//     return () => {
//       container.removeEventListener('mousemove', handleMouseMove);
//       container.removeEventListener('mouseup', handleMouseUp);
//       container.removeEventListener('mouseleave', handleMouseUp);
//     };
//   }, [isDragging, dragStart]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
//       {/* Animated background */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]" />
        
//         {/* Constellation dots */}
//         {[...Array(50)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-white/20 rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               opacity: [0.2, 0.8, 0.2],
//               scale: [1, 1.5, 1],
//             }}
//             transition={{
//               duration: 2 + Math.random() * 3,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//             }}
//           />
//         ))}
//       </div>

//       {/* Header */}
//       <div className="relative z-10 pt-20 pb-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center"
//           >
//             <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
//               Your Journey Map
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Explore your achievements as an interactive constellation of milestones. 
//               Each node represents a step in your professional journey.
//             </p>
//           </motion.div>
//         </div>
//       </div>

//       {/* Controls */}
//       <div className="fixed top-24 right-4 z-20 flex flex-col space-y-2">
//         <Button
//           onClick={() => handleZoom(0.2)}
//           size="sm"
//           variant="outline"
//           className="glass-strong hover:bg-white/10"
//         >
//           <ZoomIn className="h-4 w-4" />
//         </Button>
//         <Button
//           onClick={() => handleZoom(-0.2)}
//           size="sm"
//           variant="outline"
//           className="glass-strong hover:bg-white/10"
//         >
//           <ZoomOut className="h-4 w-4" />
//         </Button>
//         <Button
//           onClick={resetView}
//           size="sm"
//           variant="outline"
//           className="glass-strong hover:bg-white/10"
//         >
//           <RotateCcw className="h-4 w-4" />
//         </Button>
//       </div>

//       {/* Journey Map Container */}
//       <div 
//         ref={containerRef}
//         className="relative h-[calc(100vh-200px)] overflow-hidden cursor-grab active:cursor-grabbing"
//         onMouseDown={handleMouseDown}
//       >
//         <motion.div
//           className="absolute inset-0"
//           style={{
//             transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
//             transformOrigin: 'center center'
//           }}
//           transition={{ type: "tween", duration: 0.1 }}
//         >
//           {/* Connection Lines */}
//           <svg className="absolute inset-0 w-full h-full pointer-events-none">
//             {connections.map((connection, index) => {
//               const { from, to } = connection;
//               return (
//                 <motion.g key={`connection-${index}`}>
//                   <defs>
//                     <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
//                       <stop offset="0%" stopColor="rgba(139, 92, 246, 0.6)" />
//                       <stop offset="50%" stopColor="rgba(59, 130, 246, 0.6)" />
//                       <stop offset="100%" stopColor="rgba(16, 185, 129, 0.6)" />
//                     </linearGradient>
//                     <filter id={`glow-${index}`}>
//                       <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
//                       <feMerge> 
//                         <feMergeNode in="coloredBlur"/>
//                         <feMergeNode in="SourceGraphic"/>
//                       </feMerge>
//                     </filter>
//                   </defs>
//                   <motion.line
//                     x1={from.position.x + 40}
//                     y1={from.position.y + 40}
//                     x2={to.position.x + 40}
//                     y2={to.position.y + 40}
//                     stroke={`url(#gradient-${index})`}
//                     strokeWidth="3"
//                     filter={`url(#glow-${index})`}
//                     initial={{ pathLength: 0, opacity: 0 }}
//                     animate={{ pathLength: 1, opacity: 1 }}
//                     transition={{ duration: 1, delay: index * 0.2 }}
//                   />
//                   {/* Arrow */}
//                   <motion.polygon
//                     points={`${to.position.x + 30},${to.position.y + 35} ${to.position.x + 30},${to.position.y + 45} ${to.position.x + 40},${to.position.y + 40}`}
//                     fill="rgba(59, 130, 246, 0.8)"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
//                   />
//                 </motion.g>
//               );
//             })}
//           </svg>

//           {/* Milestone Nodes */}
//           {data.map((milestone, index) => {
//             const Icon = getIcon(milestone.type);
//             const colors = getColors(milestone.type, milestone.verified);
            
//             return (
//               <motion.div
//                 key={milestone.id}
//                 className="milestone-node absolute cursor-pointer"
//                 style={{
//                   left: milestone.position.x,
//                   top: milestone.position.y,
//                 }}
//                 initial={{ scale: 0, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setSelectedNode(milestone)}
//               >
//                 <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${colors} p-1`}>
//                   {milestone.verified && (
//                     <motion.div
//                       className="absolute -inset-2 rounded-full border-2 border-yellow-400/50"
//                       animate={{
//                         scale: [1, 1.1, 1],
//                         opacity: [0.5, 1, 0.5],
//                       }}
//                       transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                       }}
//                     />
//                   )}
//                   <div className="w-full h-full rounded-full bg-slate-900/20 backdrop-blur-sm flex items-center justify-center">
//                     <Icon className="h-8 w-8 text-white" />
//                   </div>
//                   {milestone.verified && (
//                     <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
//                       <Shield className="h-3 w-3 text-slate-900" />
//                     </div>
//                   )}
//                 </div>
//                 <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-center">
//                   <div className="bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/10">
//                     <p className="text-sm font-medium text-white whitespace-nowrap">
//                       {milestone.title}
//                     </p>
//                     <p className="text-xs text-gray-400">
//                       {new Date(milestone.date).toLocaleDateString()}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>

//       {/* Milestone Detail Modal */}
//       <AnimatePresence>
//         {selectedNode && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//             onClick={() => setSelectedNode(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 max-w-md w-full"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex items-start justify-between mb-4">
//                 <div className="flex items-center space-x-3">
//                   <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getColors(selectedNode.type, selectedNode.verified)} p-1`}>
//                     <div className="w-full h-full rounded-full bg-slate-900/20 backdrop-blur-sm flex items-center justify-center">
//                       {React.createElement(getIcon(selectedNode.type), { className: "h-6 w-6 text-white" })}
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-white">{selectedNode.title}</h3>
//                     <p className="text-sm text-gray-400 capitalize">{selectedNode.type}</p>
//                   </div>
//                 </div>
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   onClick={() => setSelectedNode(null)}
//                   className="hover:bg-white/10"
//                 >
//                   <X className="h-4 w-4" />
//                 </Button>
//               </div>

//               <div className="space-y-4">
//                 <div className="flex items-center space-x-2 text-sm text-gray-400">
//                   <Calendar className="h-4 w-4" />
//                   <span>{new Date(selectedNode.date).toLocaleDateString('en-US', { 
//                     year: 'numeric', 
//                     month: 'long', 
//                     day: 'numeric' 
//                   })}</span>
//                 </div>

//                 {selectedNode.verified && (
//                   <div className="flex items-center space-x-2 text-sm text-yellow-400">
//                     <Shield className="h-4 w-4" />
//                     <span>Blockchain Verified</span>
//                   </div>
//                 )}

//                 <p className="text-gray-300 leading-relaxed">
//                   {selectedNode.description}
//                 </p>

//                 {selectedNode.media && (
//                   <div className="mt-4">
//                     <img 
//                       src={selectedNode.media} 
//                       alt={selectedNode.title}
//                       className="w-full h-48 object-cover rounded-lg"
//                     />
//                   </div>
//                 )}

//                 <div className="flex space-x-3 pt-4">
//                   <Button className="flex-1 gradient-purple-cyan">
//                     <ExternalLink className="h-4 w-4 mr-2" />
//                     View Details
//                   </Button>
//                   {selectedNode.verified && (
//                     <Button variant="outline" className="border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10">
//                       <Shield className="h-4 w-4 mr-2" />
//                       Verify
//                     </Button>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Instructions */}
//       <div className="fixed bottom-4 left-4 z-20">
//         <div className="bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-lg p-4 max-w-sm">
//           <h4 className="text-sm font-medium text-white mb-2">How to Navigate</h4>
//           <ul className="text-xs text-gray-400 space-y-1">
//             <li>• Click and drag to pan around the map</li>
//             <li>• Use zoom controls to get closer or further</li>
//             <li>• Click on any milestone to view details</li>
//             <li>• Gold borders indicate verified achievements</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Journey;


//int
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { ref, onValue } from "firebase/database";
// import { db } from "../firebase";
// import {
//   Trophy,
//   Code,
//   Award,
//   Briefcase,
//   GraduationCap,
//   Calendar,
//   Shield,
//   Star,
//   ExternalLink,
//   X,
//   ZoomIn,
//   ZoomOut,
//   RotateCcw,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// // Helper function to get icon based on milestone type
// const getIcon = (type) => {
//   switch (type) {
//     case "education":
//       return GraduationCap;
//     case "project":
//       return Code;
//     case "certificate":
//       return Award;
//     case "event":
//       return Star;
//     default:
//       return Trophy;
//   }
// };

// // Helper function to get gradient colors based on type and verification
// const getColors = (type, verified) => {
//   switch (type) {
//     case "education":
//       return verified
//         ? "from-blue-500 to-blue-700"
//         : "from-blue-300 to-blue-500";
//     case "project":
//       return verified
//         ? "from-purple-500 to-purple-700"
//         : "from-purple-300 to-purple-500";
//     case "certificate":
//       return verified
//         ? "from-green-500 to-green-700"
//         : "from-green-300 to-green-500";
//     case "event":
//       return verified
//         ? "from-pink-500 to-pink-700"
//         : "from-pink-300 to-pink-500";
//     default:
//       return verified
//         ? "from-gray-500 to-gray-700"
//         : "from-gray-300 to-gray-500";
//   }
// };

// // Helper function to create connections between nodes
// const createConnections = (data) => {
//   const connections = [];
//   for (let i = 0; i < data.length - 1; i++) {
//     connections.push({ from: data[i], to: data[i + 1] });
//   }
//   return connections;
// };

// const Journey = () => {
//   const [journeyData, setJourneyData] = useState([]);
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [zoom, setZoom] = useState(1);
//   const [pan, setPan] = useState({ x: 0, y: 0 });
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const userRef = ref(db, `students/${user.uid}`);
//         onValue(userRef, (snapshot) => {
//           if (snapshot.exists()) {
//             const data = snapshot.val();
//             // Generate journey data dynamically with varied positions
//             const journey = [
//               {
//                 id: 1,
//                 title: "Started University",
//                 type: "education",
//                 date: data.createdAt || new Date().toISOString(),
//                 description: `Pursuing ${data.major || "Unknown Major"} at ${
//                   data.university || "Unknown University"
//                 }`,
//                 verified: true,
//                 position: { x: 100, y: 300 },
//               },
//               {
//                 id: 2,
//                 title: "Skills Acquired",
//                 type: "project",
//                 date: data.createdAt || new Date().toISOString(),
//                 description: `Learned skills: ${
//                   data.skills?.join(", ") || "Not specified"
//                 }`,
//                 verified: true,
//                 position: { x: 300, y: 200 },
//               },
//               {
//                 id: 3,
//                 title: "GitHub Portfolio",
//                 type: "project",
//                 date: data.createdAt || new Date().toISOString(),
//                 description: `Check out projects on GitHub`,
//                 verified: true,
//                 position: { x: 500, y: 250 },
//                 link: data.github || "",
//               },
//               {
//                 id: 4,
//                 title: "Certifications",
//                 type: "certificate",
//                 date: data.createdAt || new Date().toISOString(),
//                 description: data.certifications || "No certifications yet",
//                 verified: true,
//                 position: { x: 700, y: 150 },
//               },
//               {
//                 id: 5,
//                 title: "Projects",
//                 type: "project",
//                 date: data.createdAt || new Date().toISOString(),
//                 description: data.projects || "No projects yet",
//                 verified: true,
//                 position: { x: 900, y: 200 },
//               },
//               {
//                 id: 6,
//                 title: "Interests",
//                 type: "event",
//                 date: data.createdAt || new Date().toISOString(),
//                 description: data.interests || "No interests added yet",
//                 verified: true,
//                 position: { x: 1100, y: 300 },
//               },
//             ];
//             setJourneyData(journey);
//           } else {
//             setJourneyData([]);
//           }
//           setLoading(false);
//         });
//       } else {
//         setJourneyData([]);
//         setLoading(false);
//       }
//     });
//     return () => unsubscribe();
//   }, []);

//   // Handle zoom
//   const handleZoom = (delta) => {
//     setZoom((prev) => Math.max(0.5, Math.min(3, prev + delta)));
//   };

//   // Handle pan
//   const handleMouseDown = (e) => {
//     if (e.target.closest(".milestone-node")) return;
//     setIsDragging(true);
//     setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     setPan({
//       x: e.clientX - dragStart.x,
//       y: e.clientY - dragStart.y,
//     });
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   // Reset view
//   const resetView = () => {
//     setZoom(1);
//     setPan({ x: 0, y: 0 });
//   };

//   // Add and clean up event listeners
//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     container.addEventListener("mousemove", handleMouseMove);
//     container.addEventListener("mouseup", handleMouseUp);
//     container.addEventListener("mouseleave", handleMouseUp);

//     return () => {
//       container.removeEventListener("mousemove", handleMouseMove);
//       container.removeEventListener("mouseup", handleMouseUp);
//       container.removeEventListener("mouseleave", handleMouseUp);
//     };
//   }, [isDragging, dragStart]);

//   if (loading) {
//     return (
//       <p className="text-white text-center mt-10">Loading your journey...</p>
//     );
//   }

//   if (!journeyData.length) {
//     return (
//       <p className="text-white text-center mt-10">
//         No journey data found. Please fill in your details.
//       </p>
//     );
//   }

//   // Generate connections for the SVG lines
//   const connections = createConnections(journeyData);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
//       {/* Animated background */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]" />
//         {/* Constellation dots */}
//         {[...Array(50)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-white/20 rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               opacity: [0.2, 0.8, 0.2],
//               scale: [1, 1.5, 1],
//             }}
//             transition={{
//               duration: 2 + Math.random() * 3,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//             }}
//           />
//         ))}
//       </div>

//       {/* Header */}
//       <div className="relative z-10 pt-20 pb-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center"
//           >
//             <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
//               Your Journey Map
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Explore your achievements as an interactive constellation of
//               milestones. Each node represents a step in your professional
//               journey.
//             </p>
//           </motion.div>
//         </div>
//       </div>

//       {/* Controls */}
//       <div className="fixed top-24 right-4 z-20 flex flex-col space-y-2">
//         <Button
//           onClick={() => handleZoom(0.2)}
//           size="sm"
//           variant="outline"
//           className="glass-strong hover:bg-white/10"
//         >
//           <ZoomIn className="h-4 w-4" />
//         </Button>
//         <Button
//           onClick={() => handleZoom(-0.2)}
//           size="sm"
//           variant="outline"
//           className="glass-strong hover:bg-white/10"
//         >
//           <ZoomOut className="h-4 w-4" />
//         </Button>
//         <Button
//           onClick={resetView}
//           size="sm"
//           variant="outline"
//           className="glass-strong hover:bg-white/10"
//         >
//           <RotateCcw className="h-4 w-4" />
//         </Button>
//       </div>

//       {/* Journey Map Container */}
//       <div
//         ref={containerRef}
//         className="relative h-[calc(100vh-200px)] overflow-hidden cursor-grab active:cursor-grabbing"
//         onMouseDown={handleMouseDown}
//       >
//         <motion.div
//           className="absolute inset-0"
//           style={{
//             transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
//             transformOrigin: "center center",
//           }}
//           transition={{ type: "tween", duration: 0.1 }}
//         >
//           {/* Connection Lines */}
//           <svg className="absolute inset-0 w-full h-full pointer-events-none">
//             {connections.map((connection, index) => {
//               const { from, to } = connection;
//               return (
//                 <motion.g key={`connection-${index}`}>
//                   <defs>
//                     <linearGradient
//                       id={`gradient-${index}`}
//                       x1="0%"
//                       y1="0%"
//                       x2="100%"
//                       y2="0%"
//                     >
//                       <stop offset="0%" stopColor="rgba(139, 92, 246, 0.6)" />
//                       <stop offset="50%" stopColor="rgba(59, 130, 246, 0.6)" />
//                       <stop
//                         offset="100%"
//                         stopColor="rgba(16, 185, 129, 0.6)"
//                       />
//                     </linearGradient>
//                     <filter id={`glow-${index}`}>
//                       <feGaussianBlur stdDeviation="3" result="coloredBlur" />
//                       <feMerge>
//                         <feMergeNode in="coloredBlur" />
//                         <feMergeNode in="SourceGraphic" />
//                       </feMerge>
//                     </filter>
//                   </defs>
//                   <motion.line
//                     x1={from.position.x + 40}
//                     y1={from.position.y + 40}
//                     x2={to.position.x + 40}
//                     y2={to.position.y + 40}
//                     stroke={`url(#gradient-${index})`}
//                     strokeWidth="3"
//                     filter={`url(#glow-${index})`}
//                     initial={{ pathLength: 0, opacity: 0 }}
//                     animate={{ pathLength: 1, opacity: 1 }}
//                     transition={{ duration: 1, delay: index * 0.2 }}
//                   />
//                   <motion.polygon
//                     points={`${to.position.x + 30},${to.position.y + 35} ${
//                       to.position.x + 30
//                     },${to.position.y + 45} ${to.position.x + 40},${
//                       to.position.y + 40
//                     }`}
//                     fill="rgba(59, 130, 246, 0.8)"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
//                   />
//                 </motion.g>
//               );
//             })}
//           </svg>

//           {/* Milestone Nodes */}
//           {journeyData.map((milestone, index) => {
//             const Icon = getIcon(milestone.type);
//             const colors = getColors(milestone.type, milestone.verified);
//             return (
//               <motion.div
//                 key={milestone.id}
//                 className="milestone-node absolute cursor-pointer"
//                 style={{
//                   left: milestone.position.x,
//                   top: milestone.position.y,
//                 }}
//                 initial={{ scale: 0, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setSelectedNode(milestone)}
//               >
//                 <div
//                   className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${colors} p-1`}
//                 >
//                   {milestone.verified && (
//                     <motion.div
//                       className="absolute -inset-2 rounded-full border-2 border-yellow-400/50"
//                       animate={{
//                         scale: [1, 1.1, 1],
//                         opacity: [0.5, 1, 0.5],
//                       }}
//                       transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                       }}
//                     />
//                   )}
//                   <div className="w-full h-full rounded-full bg-slate-900/20 backdrop-blur-sm flex items-center justify-center">
//                     <Icon className="h-8 w-8 text-white" />
//                   </div>
//                   {milestone.verified && (
//                     <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
//                       <Shield className="h-3 w-3 text-slate-900" />
//                     </div>
//                   )}
//                 </div>
//                 <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-center">
//                   <div className="bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/10">
//                     <p className="text-sm font-medium text-white whitespace-nowrap">
//                       {milestone.title}
//                     </p>
//                     <p className="text-xs text-gray-400">
//                       {new Date(milestone.date).toLocaleDateString()}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>

//       {/* Milestone Detail Modal */}
//       <AnimatePresence>
//         {selectedNode && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//             onClick={() => setSelectedNode(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 max-w-md w-full"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex items-start justify-between mb-4">
//                 <div className="flex items-center space-x-3">
//                   <div
//                     className={`w-12 h-12 rounded-full bg-gradient-to-br ${getColors(
//                       selectedNode.type,
//                       selectedNode.verified
//                     )} p-1`}
//                   >
//                     <div className="w-full h-full rounded-full bg-slate-900/20 backdrop-blur-sm flex items-center justify-center">
//                       {React.createElement(getIcon(selectedNode.type), {
//                         className: "h-6 w-6 text-white",
//                       })}
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-white">
//                       {selectedNode.title}
//                     </h3>
//                     <p className="text-sm text-gray-400 capitalize">
//                       {selectedNode.type}
//                     </p>
//                   </div>
//                 </div>
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   onClick={() => setSelectedNode(null)}
//                   className="hover:bg-white/10"
//                 >
//                   <X className="h-4 w-4" />
//                 </Button>
//               </div>
//               <div className="space-y-4">
//                 <div className="flex items-center space-x-2 text-sm text-gray-400">
//                   <Calendar className="h-4 w-4" />
//                   <span>
//                     {new Date(selectedNode.date).toLocaleDateString("en-US", {
//                       year: "numeric",
//                       month: "long",
//                       day: "numeric",
//                     })}
//                   </span>
//                 </div>
//                 {selectedNode.verified && (
//                   <div className="flex items-center space-x-2 text-sm text-yellow-400">
//                     <Shield className="h-4 w-4" />
//                     <span>Blockchain Verified</span>
//                   </div>
//                 )}
//                 <p className="text-gray-300 leading-relaxed">
//                   {selectedNode.description}
//                 </p>
//                 {selectedNode.media && (
//                   <div className="mt-4">
//                     <img
//                       src={selectedNode.media}
//                       alt={selectedNode.title}
//                       className="w-full h-48 object-cover rounded-lg"
//                     />
//                   </div>
//                 )}
//                 <div className="flex space-x-3 pt-4">
//                   {selectedNode.link && (
//                     <Button
//                       className="flex-1 gradient-purple-cyan"
//                       as="a"
//                       href={selectedNode.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <ExternalLink className="h-4 w-4 mr-2" />
//                       View Details
//                     </Button>
//                   )}
//                   {selectedNode.verified && (
//                     <Button
//                       variant="outline"
//                       className="border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10"
//                     >
//                       <Shield className="h-4 w-4 mr-2" />
//                       Verify
//                     </Button>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Instructions */}
//       <div className="fixed bottom-4 left-4 z-20">
//         <div className="bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-lg p-4 max-w-sm">
//           <h4 className="text-sm font-medium text-white mb-2">
//             How to Navigate
//           </h4>
//           <ul className="text-xs text-gray-400 space-y-1">
//             <li>• Click and drag to pan around the map</li>
//             <li>• Use zoom controls to get closer or further</li>
//             <li>• Click on any milestone to view details</li>
//             <li>• Gold borders indicate verified achievements</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Journey;
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { ref, onValue } from "firebase/database";
// import { db } from "../firebase";
// import {
//   Trophy,
//   Code,
//   Award,
//   Briefcase,
//   GraduationCap,
//   Calendar,
//   Shield,
//   Star,
//   ExternalLink,
//   X,
//   ZoomIn,
//   ZoomOut,
//   RotateCcw,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// // Helper function to get icon based on milestone type
// const getIcon = (type) => {
//   switch (type) {
//     case "education":
//       return GraduationCap;
//     case "project":
//       return Code;
//     case "certificate":
//       return Award;
//     case "event":
//       return Star;
//     default:
//       return Trophy;
//   }
// };

// // Helper function to get gradient colors based on type and verification
// const getColors = (type, verified) => {
//   switch (type) {
//     case "education":
//       return verified
//         ? "from-blue-500 to-blue-700"
//         : "from-blue-300 to-blue-500";
//     case "project":
//       return verified
//         ? "from-purple-500 to-purple-700"
//         : "from-purple-300 to-purple-500";
//     case "certificate":
//       return verified
//         ? "from-green-500 to-green-700"
//         : "from-green-300 to-green-500";
//     case "event":
//       return verified
//         ? "from-pink-500 to-pink-700"
//         : "from-pink-300 to-pink-500";
//     default:
//       return verified
//         ? "from-gray-500 to-gray-700"
//         : "from-gray-300 to-gray-500";
//   }
// };

// // Helper function to create connections between nodes
// const createConnections = (data) => {
//   const connections = [];
//   for (let i = 0; i < data.length - 1; i++) {
//     connections.push({ from: data[i], to: data[i + 1] });
//   }
//   return connections;
// };

// // Helper function to extract username from GitHub URL
// const extractUsername = (url) => {
//   try {
//     const parsedUrl = new URL(url);
//     const pathParts = parsedUrl.pathname.split("/").filter((part) => part);
//     return pathParts[0] || "";
//   } catch {
//     return "";
//   }
// };

// // Helper function to fetch top GitHub repositories
// const fetchTopRepos = async (username, token = "") => {
//   try {
//     const headers = token ? { Authorization: `token ${token}` } : {};
//     const response = await fetch(
//       `https://api.github.com/users/${username}/repos?per_page=100&sort=stars`,
//       { headers }
//     );
//     if (!response.ok) {
//       throw new Error(`GitHub API error: ${response.status}`);
//     }
//     const repos = await response.json();
//     return repos
//       .sort((a, b) => b.stargazers_count - a.stargazers_count)
//       .slice(0, 6)
//       .map((repo, index) => ({
//         id: `github-${index + 1}`,
//         title: repo.name,
//         type: "project",
//         date: repo.created_at || new Date().toISOString(),
//         description: repo.description || "No description provided",
//         verified: false,
//         position: { x: 1000 + index * 200, y: 250 + (index % 2) * 100 },
//         link: repo.html_url,
//       }));
//   } catch (error) {
//     console.error("Error fetching GitHub repos:", error);
//     return [];
//   }
// };

// // Helper function to map broad roles to specific skills
// const mapRolesToSkills = (roles) => {
//   const skillMap = {
//     "react js developer": ["React", "JavaScript", "HTML", "CSS"],
//     "frontend developer": ["JavaScript", "HTML", "CSS", "React", "TypeScript", "Vue.js", "Angular"],
//     "full stack developer": ["JavaScript", "Node.js", "React", "TypeScript", "SQL", "NoSQL", "AWS"],
//   };
//   const skills = new Set();
//   roles.forEach((role) => {
//     const roleKey = role.toLowerCase();
//     if (skillMap[roleKey]) {
//       skillMap[roleKey].forEach((skill) => skills.add(skill));
//     }
//   });
//   return Array.from(skills);
// };

// // Fallback analysis for when SerpAPI fails
// const fallbackAnalysis = (skills) => {
//   const marketSkills = [
//     "React", "JavaScript", "TypeScript", "Node.js", "SQL", "NoSQL", "AWS",
//     "Python", "AI/ML", "Cloud Computing", "DevOps", "Kubernetes", "Docker",
//     "Cybersecurity", "GraphQL", "Next.js",
//   ];
//   const matches = (a, b) => a.toLowerCase().includes(b.toLowerCase()) || b.toLowerCase().includes(a.toLowerCase());
//   const strong = skills.filter((s) => marketSkills.some((m) => matches(s, m)));
//   const improve = skills.filter((s) => !marketSkills.some((m) => matches(s, m)));
//   const missing = marketSkills.filter((m) => !skills.some((s) => matches(s, m)));
//   const suggestions = [
//     ...missing.map(
//       (m) => `- Learn ${m} through online courses (e.g., Coursera, Udemy) to align with 2025 market demands.`
//     ),
//     ...improve.map(
//       (i) => `- Enhance ${i} proficiency by contributing to open-source projects or obtaining certifications.`
//     ),
//     `- Build a portfolio showcasing projects with ${strong.join(", ") || "your core skills"}.`,
//     `- Network on LinkedIn with professionals in your field.`,
//   ].filter(Boolean);
//   return {
//     strong,
//     improve,
//     missing,
//     suggestions,
//     link: "https://www.google.com/search?q=Top+in-demand+skills+in+tech+job+market+2025",
//   };
// };

// // Enhanced AI portfolio analysis with CORS proxy
// const analyzePortfolioWithAI = async (roles, interests) => {
//   try {
//     const skills = mapRolesToSkills(roles);
//     const query = `Top in-demand skills in tech job market 2025 related to ${skills.join(", ")} and ${interests || ""}`;
//     const SERPAPI_KEY = "P4Lz67GUq8HFbHLBLpaG8QfM";
//     // Use CORS proxy for testing (request access at https://cors-anywhere.herokuapp.com/corsdemo)
//     const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
//     const response = await fetch(
//       `${CORS_PROXY}https://serpapi.com/search.json?q=${encodeURIComponent(query)}&engine=google&api_key=${SERPAPI_KEY}`,
//       { headers: { "X-Requested-With": "XMLHttpRequest" } }
//     );
//     if (!response.ok) {
//       throw new Error(`SerpAPI error: ${response.status}`);
//     }
//     const data = await response.json();
//     const results = (data.organic_results || []).slice(0, 10).map((r) => r.snippet?.toLowerCase() || "");
//     const marketSkills = [];
//     results.forEach((text) => {
//       if (text.includes("ai") || text.includes("machine learning") || text.includes("ml")) marketSkills.push("AI/ML");
//       if (text.includes("blockchain")) marketSkills.push("Blockchain");
//       if (text.includes("cloud")) marketSkills.push("Cloud Computing");
//       if (text.includes("cybersecurity") || text.includes("security")) marketSkills.push("Cybersecurity");
//       if (text.includes("data science") || text.includes("data analysis")) marketSkills.push("Data Science");
//       if (text.includes("devops")) marketSkills.push("DevOps");
//       if (text.includes("python")) marketSkills.push("Python");
//       if (text.includes("javascript") || text.includes("js")) marketSkills.push("JavaScript");
//       if (text.includes("typescript") || text.includes("ts")) marketSkills.push("TypeScript");
//       if (text.includes("react")) marketSkills.push("React");
//       if (text.includes("angular")) marketSkills.push("Angular");
//       if (text.includes("vue")) marketSkills.push("Vue.js");
//       if (text.includes("node")) marketSkills.push("Node.js");
//       if (text.includes("sql")) marketSkills.push("SQL");
//       if (text.includes("nosql") || text.includes("mongodb")) marketSkills.push("NoSQL");
//       if (text.includes("kubernetes") || text.includes("k8s")) marketSkills.push("Kubernetes");
//       if (text.includes("docker")) marketSkills.push("Docker");
//       if (text.includes("aws")) marketSkills.push("AWS");
//       if (text.includes("azure")) marketSkills.push("Azure");
//       if (text.includes("gcp") || text.includes("google cloud")) marketSkills.push("Google Cloud");
//       if (text.includes("graphql")) marketSkills.push("GraphQL");
//       if (text.includes("next")) marketSkills.push("Next.js");
//     });
//     const uniqueMarketSkills = [...new Set(marketSkills)];
//     const matches = (a, b) => a.toLowerCase().includes(b.toLowerCase()) || b.toLowerCase().includes(a.toLowerCase());
//     const strong = skills.filter((s) => uniqueMarketSkills.some((m) => matches(s, m)));
//     const improve = skills.filter((s) => !uniqueMarketSkills.some((m) => matches(s, m)));
//     const missing = uniqueMarketSkills.filter((m) => !skills.some((s) => matches(s, m)));
//     const suggestions = [
//       ...missing.map(
//         (m) => `- Learn ${m} through online courses (e.g., Coursera, Udemy) to align with 2025 market demands.`
//       ),
//       ...improve.map(
//         (i) => `- Enhance ${i} proficiency by contributing to open-source projects or obtaining certifications.`
//       ),
//       `- Build a portfolio showcasing projects with ${strong.join(", ") || "your core skills"}.`,
//       `- Network on LinkedIn with professionals in ${interests || "your field"}.`,
//     ].filter(Boolean);
//     const link = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
//     return { strong, improve, missing, suggestions, link };
//   } catch (error) {
//     console.error("Error analyzing with SerpAPI:", error);
//     // Fallback to predefined analysis
//     return fallbackAnalysis(mapRolesToSkills(roles));
//   }
// };

// const Journey = () => {
//   const [journeyData, setJourneyData] = useState([]);
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [zoom, setZoom] = useState(1);
//   const [pan, setPan] = useState({ x: 0, y: 0 });
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         const userRef = ref(db, `students/${user.uid}`);
//         onValue(
//           userRef,
//           async (snapshot) => {
//             try {
//               if (snapshot.exists()) {
//                 const data = snapshot.val();
//                 const githubUsername = data.github ? extractUsername(data.github) : "";
//                 const githubToken = import.meta.env.VITE_GITHUB_TOKEN || "";
//                 if (!githubToken) {
//                   console.warn(
//                     "GitHub token not found. Using unauthenticated API calls (60 requests/hour limit). Consider adding VITE_GITHUB_TOKEN to your .env file."
//                   );
//                 }
//                 const githubRepos = githubUsername ? await fetchTopRepos(githubUsername, githubToken) : [];
//                 const aiReport = await analyzePortfolioWithAI(data.skills || [], data.interests || "");
//                 const aiDescription = `
// 📊 **AI Portfolio Report**
// ✅ Strong Skills: ${aiReport.strong.join(", ") || "None"}
// ⚠️ Needs Improvement: ${aiReport.improve.join(", ") || "None"}
// ❌ Missing but In-Demand: ${aiReport.missing.join(", ") || "None"}
// 💡 Suggestions:
// ${aiReport.suggestions.join("\n") || "No suggestions at this time."}
//                 `;
//                 const journey = [
//                   {
//                     id: 1,
//                     title: "Started University",
//                     type: "education",
//                     date: data.createdAt || new Date().toISOString(),
//                     description: `Pursuing ${data.major || "Unknown Major"} at ${
//                       data.university || "Unknown University"
//                     }`,
//                     verified: true,
//                     position: { x: 100, y: 300 },
//                   },
//                   {
//                     id: 2,
//                     title: "Skills Acquired",
//                     type: "project",
//                     date: data.createdAt || new Date().toISOString(),
//                     description: `Learned skills: ${data.skills?.join(", ") || "Not specified"}`,
//                     verified: true,
//                     position: { x: 300, y: 200 },
//                   },
//                   {
//                     id: 3,
//                     title: "GitHub Portfolio",
//                     type: "project",
//                     date: data.createdAt || new Date().toISOString(),
//                     description: `Check out projects on GitHub: ${data.github || "No GitHub profile provided"}`,
//                     verified: true,
//                     position: { x: 500, y: 300 },
//                     link: data.github || "",
//                   },
//                   {
//                     id: 4,
//                     title: "Certifications",
//                     type: "certificate",
//                     date: data.createdAt || new Date().toISOString(),
//                     description: data.certifications || "No certifications yet",
//                     verified: true,
//                     position: { x: 700, y: 200 },
//                   },
//                   {
//                     id: 5,
//                     title: "Top GitHub Projects",
//                     type: "project",
//                     date: data.createdAt || new Date().toISOString(),
//                     description:
//                       githubRepos.length > 0
//                         ? `Top ${githubRepos.length} GitHub projects: ${githubRepos
//                             .map((repo) => repo.title)
//                             .join(", ")}`
//                         : "No GitHub projects found",
//                     verified: false,
//                     position: { x: 900, y: 300 },
//                     link: data.github || "",
//                   },
//                   ...githubRepos,
//                   {
//                     id: githubRepos.length + 6,
//                     title: "Interests",
//                     type: "event",
//                     date: data.createdAt || new Date().toISOString(),
//                     description: data.interests || "No interests added yet",
//                     verified: true,
//                     position: { x: 1100 + githubRepos.length * 200, y: 200 },
//                   },
//                   {
//                     id: githubRepos.length + 7,
//                     title: "AI Portfolio Analysis",
//                     type: "event",
//                     date: new Date().toISOString(),
//                     description: aiDescription,
//                     verified: false,
//                     position: { x: 1300 + githubRepos.length * 200, y: 400 },
//                     link: aiReport.link || "",
//                   },
//                 ];
//                 setJourneyData(journey);
//               } else {
//                 setJourneyData([]);
//               }
//               setLoading(false);
//             } catch (error) {
//               console.error("Error processing Firebase data:", error);
//               setJourneyData([]);
//               setLoading(false);
//             }
//           },
//           (error) => {
//             console.error("Firebase onValue error:", error);
//             setJourneyData([]);
//             setLoading(false);
//           }
//         );
//       } else {
//         setJourneyData([]);
//         setLoading(false);
//       }
//     });
//     return () => unsubscribe();
//   }, []);

//   const handleZoom = (delta) => {
//     setZoom((prev) => Math.max(0.5, Math.min(3, prev + delta)));
//   };

//   const handleMouseDown = (e) => {
//     if (e.target.closest(".milestone-node")) return;
//     setIsDragging(true);
//     setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     setPan({
//       x: e.clientX - dragStart.x,
//       y: e.clientY - dragStart.y,
//     });
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const resetView = () => {
//     setZoom(1);
//     setPan({ x: 0, y: 0 });
//   };

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;
//     container.addEventListener("mousemove", handleMouseMove);
//     container.addEventListener("mouseup", handleMouseUp);
//     container.addEventListener("mouseleave", handleMouseUp);
//     return () => {
//       container.removeEventListener("mousemove", handleMouseMove);
//       container.removeEventListener("mouseup", handleMouseUp);
//       container.removeEventListener("mouseleave", handleMouseUp);
//     };
//   }, [isDragging, dragStart]);

//   if (loading) {
//     return <p className="text-white text-center mt-10">Loading your journey...</p>;
//   }

//   if (!journeyData.length) {
//     return (
//       <p className="text-white text-center mt-10">
//         No journey data found. Please fill in your details.
//       </p>
//     );
//   }

//   const connections = createConnections(journeyData);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]" />
//         {[...Array(50)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-white/20 rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               opacity: [0.2, 0.8, 0.2],
//               scale: [1, 1.5, 1],
//             }}
//             transition={{
//               duration: 2 + Math.random() * 3,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative z-10 pt-20 pb-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center"
//           >
//             <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
//               Your Journey Map
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Explore your achievements as an interactive constellation of milestones. Each node represents a step in your professional journey.
//             </p>
//           </motion.div>
//         </div>
//       </div>

//       <div className="fixed top-24 right-4 z-20 flex flex-col space-y-2">
//         <Button
//           onClick={() => handleZoom(0.2)}
//           size="sm"
//           variant="outline"
//           className="glass-strong hover:bg-white/10"
//         >
//           <ZoomIn className="h-4 w-4" />
//         </Button>
//         <Button
//           onClick={() => handleZoom(-0.2)}
//           size="sm"
//           variant="outline"
//           className="glass-strong hover:bg-white/10"
//         >
//           <ZoomOut className="h-4 w-4" />
//         </Button>
//         <Button
//           onClick={resetView}
//           size="sm"
//           variant="outline"
//           className="glass-strong hover:bg-white/10"
//         >
//           <RotateCcw className="h-4 w-4" />
//         </Button>
//       </div>

//       <div
//         ref={containerRef}
//         className="relative h-[calc(100vh-200px)] overflow-hidden cursor-grab active:cursor-grabbing"
//         onMouseDown={handleMouseDown}
//       >
//         <motion.div
//           className="absolute inset-0"
//           style={{
//             transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
//             transformOrigin: "center center",
//           }}
//           transition={{ type: "tween", duration: 0.1 }}
//         >
//           <svg className="absolute inset-0 w-full h-full pointer-events-none">
//             {connections.map((connection, index) => {
//               const { from, to } = connection;
//               const startX = from.position.x + 40;
//               const startY = from.position.y + 40;
//               const endX = to.position.x + 40;
//               const endY = to.position.y + 40;
//               const midX = (startX + endX) / 2;
//               const midY = (startY + endY) / 2 - 100;
//               const path = `M${startX},${startY} Q${midX},${midY} ${endX},${endY}`;
//               return (
//                 <motion.g key={`connection-${index}`}>
//                   <defs>
//                     <linearGradient
//                       id={`gradient-${index}`}
//                       x1="0%"
//                       y1="0%"
//                       x2="100%"
//                       y2="0%"
//                     >
//                       <stop offset="0%" stopColor="rgba(139, 92, 246, 0.6)" />
//                       <stop offset="50%" stopColor="rgba(59, 130, 246, 0.6)" />
//                       <stop offset="100%" stopColor="rgba(16, 185, 129, 0.6)" />
//                     </linearGradient>
//                     <filter id={`glow-${index}`}>
//                       <feGaussianBlur stdDeviation="3" result="coloredBlur" />
//                       <feMerge>
//                         <feMergeNode in="coloredBlur" />
//                         <feMergeNode in="SourceGraphic" />
//                       </feMerge>
//                     </filter>
//                   </defs>
//                   <motion.path
//                     d={path}
//                     stroke={`url(#gradient-${index})`}
//                     strokeWidth="3"
//                     fill="none"
//                     filter={`url(#glow-${index})`}
//                     initial={{ pathLength: 0, opacity: 0 }}
//                     animate={{ pathLength: 1, opacity: 1 }}
//                     transition={{ duration: 1.5, delay: index * 0.2 }}
//                   />
//                   <motion.circle
//                     r="4"
//                     fill="white"
//                     animate={{ offsetDistance: ["0%", "100%"] }}
//                     transition={{ duration: 3, repeat: Infinity }}
//                     style={{
//                       offsetPath: `path("${path}")`,
//                       offsetRotate: "auto",
//                     }}
//                   />
//                   <motion.polygon
//                     points={`${to.position.x + 30},${to.position.y + 35} ${
//                       to.position.x + 30
//                     },${to.position.y + 45} ${to.position.x + 40},${
//                       to.position.y + 40
//                     }`}
//                     fill="rgba(59, 130, 246, 0.8)"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
//                   />
//                 </motion.g>
//               );
//             })}
//           </svg>

//           {journeyData.map((milestone, index) => {
//             const Icon = getIcon(milestone.type);
//             const colors = getColors(milestone.type, milestone.verified);
//             return (
//               <motion.div
//                 key={milestone.id}
//                 className="milestone-node absolute cursor-pointer"
//                 style={{
//                   left: milestone.position.x,
//                   top: milestone.position.y,
//                 }}
//                 initial={{ scale: 0, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setSelectedNode(milestone)}
//               >
//                 <div
//                   className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${colors} p-1`}
//                 >
//                   {milestone.verified && (
//                     <motion.div
//                       className="absolute -inset-2 rounded-full border-2 border-yellow-400/50"
//                       animate={{
//                         scale: [1, 1.1, 1],
//                         opacity: [0.5, 1, 0.5],
//                       }}
//                       transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                       }}
//                     />
//                   )}
//                   <div className="w-full h-full rounded-full bg-slate-900/20 backdrop-blur-sm flex items-center justify-center">
//                     <Icon className="h-8 w-8 text-white" />
//                   </div>
//                   {milestone.verified && (
//                     <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
//                       <Shield className="h-3 w-3 text-slate-900" />
//                     </div>
//                   )}
//                 </div>
//                 <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-center">
//                   <div className="bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/10">
//                     <p className="text-sm font-medium text-white whitespace-nowrap">
//                       {milestone.title}
//                     </p>
//                     <p className="text-xs text-gray-400">
//                       {new Date(milestone.date).toLocaleDateString()}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>

//       <AnimatePresence>
//         {selectedNode && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//             onClick={() => setSelectedNode(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 max-w-md w-full"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex items-start justify-between mb-4">
//                 <div className="flex items-center space-x-3">
//                   <div
//                     className={`w-12 h-12 rounded-full bg-gradient-to-br ${getColors(
//                       selectedNode.type,
//                       selectedNode.verified
//                     )} p-1`}
//                   >
//                     <div className="w-full h-full rounded-full bg-slate-900/20 backdrop-blur-sm flex items-center justify-center">
//                       {React.createElement(getIcon(selectedNode.type), {
//                         className: "h-6 w-6 text-white",
//                       })}
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-white">{selectedNode.title}</h3>
//                     <p className="text-sm text-gray-400 capitalize">{selectedNode.type}</p>
//                   </div>
//                 </div>
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   onClick={() => setSelectedNode(null)}
//                   className="hover:bg-white/10"
//                 >
//                   <X className="h-4 w-4" />
//                 </Button>
//               </div>
//               <div className="space-y-4">
//                 <div className="flex items-center space-x-2 text-sm text-gray-400">
//                   <Calendar className="h-4 w-4" />
//                   <span>
//                     {new Date(selectedNode.date).toLocaleDateString("en-US", {
//                       year: "numeric",
//                       month: "long",
//                       day: "numeric",
//                     })}
//                   </span>
//                 </div>
//                 {selectedNode.verified && (
//                   <div className="flex items-center space-x-2 text-sm text-yellow-400">
//                     <Shield className="h-4 w-4" />
//                     <span>Blockchain Verified</span>
//                   </div>
//                 )}
//                 <p className="text-gray-300 leading-relaxed">{selectedNode.description}</p>
//                 {selectedNode.media && (
//                   <div className="mt-4">
//                     <img
//                       src={selectedNode.media}
//                       alt={selectedNode.title}
//                       className="w-full h-48 object-cover rounded-lg"
//                     />
//                   </div>
//                 )}
//                 <div className="flex space-x-3 pt-4">
//                   {selectedNode.link && (
//                     <Button
//                       className="flex-1 gradient-purple-cyan"
//                       as="a"
//                       href={selectedNode.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <ExternalLink className="h-4 w-4 mr-2" />
//                       View Details
//                     </Button>
//                   )}
//                   {selectedNode.verified && (
//                     <Button
//                       variant="outline"
//                       className="border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10"
//                     >
//                       <Shield className="h-4 w-4 mr-2" />
//                       More Details
//                     </Button>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <div className="fixed bottom-4 left-4 z-20">
//         <div className="bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-lg p-4 max-w-sm">
//           <h4 className="text-sm font-medium text-white mb-2">How to Navigate</h4>
//           <ul className="text-xs text-gray-400 space-y-1">
//             <li>• Click and drag to pan around the map</li>
//             <li>• Use zoom controls to get closer or further</li>
//             <li>• Click on any milestone to view details</li>
//             <li>• Gold borders indicate verified achievements</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Journey;



//not
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { ref, onValue } from "firebase/database";
// import { db } from "../firebase";
// import {
//   Trophy,
//   Code,
//   Award,
//   Briefcase,
//   GraduationCap,
//   Calendar,
//   Shield,
//   Star,
//   ExternalLink,
//   X,
//   ZoomIn,
//   ZoomOut,
//   RotateCcw,
//   GitBranch,
//   Users,
//   Eye,
//   TrendingUp,
//   BookOpen,
//   Target,
//   Lightbulb,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// // Helper function to get icon based on milestone type
// const getIcon = (type) => {
//   switch (type) {
//     case "education": return GraduationCap;
//     case "project": return Code;
//     case "certificate": return Award;
//     case "event": return Star;
//     case "github": return GitBranch;
//     default: return Trophy;
//   }
// };

// // Helper function to get gradient colors based on type and verification
// const getColors = (type, verified) => {
//   switch (type) {
//     case "education": return verified ? "from-blue-500 to-blue-700" : "from-blue-300 to-blue-500";
//     case "project": return verified ? "from-purple-500 to-purple-700" : "from-purple-300 to-purple-500";
//     case "certificate": return verified ? "from-green-500 to-green-700" : "from-green-300 to-green-500";
//     case "event": return verified ? "from-pink-500 to-pink-700" : "from-pink-300 to-pink-500";
//     case "github": return verified ? "from-orange-500 to-orange-700" : "from-orange-300 to-orange-500";
//     default: return verified ? "from-gray-500 to-gray-700" : "from-gray-300 to-gray-500";
//   }
// };

// // Updated positioning function for alternating up/down layout
// const generateOptimalPositions = (nodeCount, containerWidth = 1400, containerHeight = 600) => {
//   const positions = [];
//   const startX = 150;
//   const spacing = Math.max(280, (containerWidth - 300) / Math.max(nodeCount - 1, 1));
//   const centerY = containerHeight / 2;
//   const offsetY = 80; // Vertical offset for alternating pattern

//   for (let i = 0; i < nodeCount; i++) {
//     const isEven = i % 2 === 0;
//     positions.push({
//       x: startX + i * spacing,
//       y: centerY + (isEven ? -offsetY : offsetY)
//     });
//   }

//   return positions;
// };

// // Helper function to create connections between nodes
// const createConnections = (data) => {
//   const connections = [];
//   const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
//   for (let i = 0; i < sortedData.length - 1; i++) {
//     connections.push({ from: sortedData[i], to: sortedData[i + 1] });
//   }
//   return connections;
// };

// // Helper function to extract username from GitHub URL
// const extractUsername = (url) => {
//   try {
//     const parsedUrl = new URL(url);
//     return parsedUrl.pathname.split("/")[1] || "";
//   } catch {
//     return "";
//   }
// };

// // Enhanced GitHub API integration
// const fetchGitHubData = async (username, token = "") => {
//   try {
//     const headers = token ? { Authorization: `token ${token}` } : {};
    
//     const userResponse = await fetch(`https://api.github.com/users/${username}`, { headers });
//     if (!userResponse.ok) throw new Error(`GitHub API error: ${userResponse.status}`);
//     const userProfile = await userResponse.json();
    
//     const reposResponse = await fetch(
//       `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
//       { headers }
//     );
//     if (!reposResponse.ok) throw new Error(`GitHub API error: ${reposResponse.status}`);
//     const repos = await reposResponse.json();
    
//     const topRepos = repos
//       .filter(repo => !repo.fork && repo.stargazers_count > 0)
//       .sort((a, b) => b.stargazers_count - a.stargazers_count)
//       .slice(0, 5);
    
//     const recentRepos = repos
//       .filter(repo => !repo.fork)
//       .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
//       .slice(0, 3);
    
//     return {
//       profile: userProfile,
//       topRepos,
//       recentRepos,
//       totalStars: repos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
//       totalForks: repos.reduce((sum, repo) => sum + repo.forks_count, 0),
//       languages: [...new Set(repos.map(repo => repo.language).filter(Boolean))],
//     };
//   } catch (error) {
//     console.error("Error fetching GitHub data:", error);
//     return null;
//   }
// };

// // Enhanced portfolio analysis
// const analyzePortfolioWithAI = async (skills, interests, githubData) => {
//   const marketSkills = [
//     "React", "JavaScript", "TypeScript", "Node.js", "Python", "Java", "C++", "Go",
//     "Docker", "Kubernetes", "AWS", "Azure", "GCP", "MongoDB", "PostgreSQL", "Redis",
//     "GraphQL", "REST API", "Microservices", "CI/CD", "DevOps", "Machine Learning",
//     "AI", "Blockchain", "Next.js", "Vue.js", "Angular", "Flutter", "React Native"
//   ];
  
//   const userSkills = skills || [];
//   const githubLanguages = githubData?.languages || [];
//   const allSkills = [...new Set([...userSkills, ...githubLanguages])];
  
//   const strongSkills = allSkills.filter(skill => 
//     marketSkills.some(market => 
//       market.toLowerCase().includes(skill.toLowerCase()) || 
//       skill.toLowerCase().includes(market.toLowerCase())
//     )
//   );
  
//   const missingSkills = marketSkills.filter(market => 
//     !allSkills.some(skill => 
//       market.toLowerCase().includes(skill.toLowerCase()) || 
//       skill.toLowerCase().includes(market.toLowerCase())
//     )
//   ).slice(0, 8);
  
//   const suggestions = [
//     ...missingSkills.slice(0, 3).map(skill => `Learn ${skill} through hands-on projects`),
//     `Build more projects with ${strongSkills.slice(0, 2).join(" and ")}`,
//     "Contribute to open-source projects to gain visibility",
//     "Create technical blog posts about your projects",
//     "Network with other developers in your field"
//   ];
  
//   return {
//     strongSkills,
//     missingSkills,
//     suggestions,
//     skillCoverage: Math.round((strongSkills.length / marketSkills.length) * 100),
//     githubScore: githubData ? Math.min(100, (githubData.totalStars * 2) + (githubData.profile.public_repos * 1)) : 0
//   };
// };

// const Journey = () => {
//   const [journeyData, setJourneyData] = useState([]);
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [zoom, setZoom] = useState(1);
//   const [pan, setPan] = useState({ x: 0, y: 0 });
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
//   const [githubData, setGithubData] = useState(null);
//   const containerRef = useRef(null);

//   // Fetch data from Firebase and GitHub
//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         const userRef = ref(db, `students/${user.uid}`);
//         onValue(
//           userRef,
//           async (snapshot) => {
//             try {
//               if (snapshot.exists()) {
//                 const data = snapshot.val();
//                 const githubUsername = data.github ? extractUsername(data.github) : "";
//                 const githubToken = import.meta.env.VITE_GITHUB_TOKEN || "";
                
//                 let fetchedGithubData = null;
//                 if (githubUsername) {
//                   fetchedGithubData = await fetchGitHubData(githubUsername, githubToken);
//                   setGithubData(fetchedGithubData);
//                 }
                
//                 const aiAnalysis = await analyzePortfolioWithAI(data.skills, data.interests, fetchedGithubData);
                
//                 const baseNodes = [
//                   {
//                     id: 1,
//                     title: "Academic Journey",
//                     type: "education",
//                     date: data.createdAt || new Date().toISOString(),
//                     description: `Pursuing ${data.major || "Computer Science"} at ${data.university || "University"}`,
//                     verified: true,
//                     keyFeatures: [
//                       `Major: ${data.major || "Not specified"}`,
//                       `University: ${data.university || "Not specified"}`,
//                       `Current Status: Active Student`,
//                     ],
//                     additionalDetails: {
//                       overview: "Academic foundation building phase with focus on theoretical knowledge and practical skills.",
//                       achievements: data.gpa ? [`GPA: ${data.gpa}`] : ["Academic performance tracking"],
//                       timeline: `Started: ${new Date(data.createdAt || Date.now()).getFullYear()}`,
//                       impact: "Building strong foundation for technical career"
//                     }
//                   },
//                   {
//                     id: 2,
//                     title: "Technical Skills",
//                     type: "project",
//                     date: data.createdAt || new Date().toISOString(),
//                     description: `Mastered: ${(data.skills || []).join(", ") || "Various programming languages"}`,
//                     verified: true,
//                     keyFeatures: (data.skills || ["Programming", "Web Development"]).map(skill => `✓ ${skill}`),
//                     additionalDetails: {
//                       overview: "Comprehensive skill development across multiple technology stacks.",
//                       achievements: aiAnalysis.strongSkills.map(skill => `Proficient in ${skill}`),
//                       metrics: `${aiAnalysis.skillCoverage}% market skill coverage`,
//                       recommendations: aiAnalysis.suggestions.slice(0, 3)
//                     }
//                   }
//                 ];

//                 if (fetchedGithubData) {
//                   baseNodes.push({
//                     id: 3,
//                     title: "GitHub Profile",
//                     type: "github",
//                     date: fetchedGithubData.profile.created_at,
//                     description: `Active developer with ${fetchedGithubData.profile.public_repos} repositories and ${fetchedGithubData.totalStars} total stars`,
//                     verified: true,
//                     link: fetchedGithubData.profile.html_url,
//                     keyFeatures: [
//                       `${fetchedGithubData.profile.public_repos} Public Repositories`,
//                       `${fetchedGithubData.totalStars} Total Stars`,
//                       `${fetchedGithubData.profile.followers} Followers`,
//                       `${fetchedGithubData.totalForks} Total Forks`
//                     ],
//                     additionalDetails: {
//                       overview: fetchedGithubData.profile.bio || "Active open-source contributor and developer",
//                       achievements: [
//                         `GitHub Score: ${aiAnalysis.githubScore}/100`,
//                         `Account Age: ${Math.floor((Date.now() - new Date(fetchedGithubData.profile.created_at)) / (1000 * 60 * 60 * 24 * 365))} years`,
//                         `Languages: ${fetchedGithubData.languages.join(", ")}`
//                       ],
//                       stats: {
//                         repositories: fetchedGithubData.profile.public_repos,
//                         stars: fetchedGithubData.totalStars,
//                         followers: fetchedGithubData.profile.followers,
//                         following: fetchedGithubData.profile.following
//                       }
//                     }
//                   });

//                   fetchedGithubData.topRepos.forEach((repo, index) => {
//                     baseNodes.push({
//                       id: `repo-${index + 1}`,
//                       title: repo.name,
//                       type: "project",
//                       date: repo.created_at,
//                       description: repo.description || "GitHub project",
//                       verified: false,
//                       link: repo.html_url,
//                       keyFeatures: [
//                         `⭐ ${repo.stargazers_count} Stars`,
//                         `🔀 ${repo.forks_count} Forks`,
//                         `💻 ${repo.language || "Mixed"} Language`,
//                         `📝 ${repo.size} KB Size`
//                       ],
//                       additionalDetails: {
//                         overview: repo.description || "Open source project showcasing technical expertise",
//                         achievements: [
//                           `Last Updated: ${new Date(repo.updated_at).toLocaleDateString()}`,
//                           `Default Branch: ${repo.default_branch}`,
//                           repo.license ? `License: ${repo.license.name}` : "No license specified"
//                         ],
//                         metrics: `${repo.watchers_count} watchers, ${repo.open_issues_count} open issues`,
//                         techStack: repo.topics || []
//                       }
//                     });
//                   });
//                 }

//                 if (data.certifications) {
//                   baseNodes.push({
//                     id: 'certifications',
//                     title: "Certifications",
//                     type: "certificate",
//                     date: data.createdAt || new Date().toISOString(),
//                     description: "Professional certifications earned",
//                     verified: true,
//                     keyFeatures: data.certifications.split("\n").map(cert => `🏆 ${cert.trim()}`),
//                     additionalDetails: {
//                       overview: "Industry-recognized certifications validating technical expertise",
//                       achievements: data.certifications.split("\n").map(cert => cert.trim()),
//                       impact: "Enhanced credibility and validated skills in the market"
//                     }
//                   });
//                 }

//                 if (data.interests) {
//                   baseNodes.push({
//                     id: 'interests',
//                     title: "Interests & Focus",
//                     type: "event",
//                     date: data.createdAt || new Date().toISOString(),
//                     description: "Areas of passion and exploration",
//                     verified: true,
//                     keyFeatures: data.interests.split(", ").map(interest => `🎯 ${interest.trim()}`),
//                     additionalDetails: {
//                       overview: "Personal interests driving continuous learning and project development",
//                       achievements: data.interests.split(", ").map(interest => `Exploring ${interest.trim()}`),
//                       alignment: "Interests align with current market trends and opportunities"
//                     }
//                   });
//                 }

//                 baseNodes.push({
//                   id: 'ai-analysis',
//                   title: "AI Portfolio Analysis",
//                   type: "event",
//                   date: new Date().toISOString(),
//                   description: "Comprehensive AI-driven insights and recommendations",
//                   verified: false,
//                   keyFeatures: [
//                     `${aiAnalysis.skillCoverage}% Market Skill Coverage`,
//                     `${aiAnalysis.strongSkills.length} Strong Skills Identified`,
//                     `${aiAnalysis.missingSkills.length} Growth Opportunities`,
//                     `GitHub Score: ${aiAnalysis.githubScore}/100`
//                   ],
//                   additionalDetails: {
//                     overview: "Real-time analysis of your portfolio strength and market alignment",
//                     strongSkills: aiAnalysis.strongSkills,
//                     missingSkills: aiAnalysis.missingSkills,
//                     recommendations: aiAnalysis.suggestions,
//                     metrics: {
//                       portfolioScore: aiAnalysis.skillCoverage,
//                       githubEngagement: aiAnalysis.githubScore,
//                       marketAlignment: "75% aligned with current trends"
//                     }
//                   }
//                 });

//                 const sortedForPosition = [...baseNodes].sort((a, b) => new Date(a.date) - new Date(b.date));
//                 const positions = generateOptimalPositions(
//                   sortedForPosition.length,
//                   Math.max(1400, sortedForPosition.length * 280),
//                   800
//                 );

//                 const positionedNodes = sortedForPosition.map((node, index) => ({
//                   ...node,
//                   position: positions[index]
//                 }));

//                 setJourneyData(positionedNodes);
//               } else {
//                 setJourneyData([]);
//               }
//               setLoading(false);
//             } catch (error) {
//               console.error("Error processing Firebase data:", error);
//               setJourneyData([]);
//               setLoading(false);
//             }
//           },
//           (error) => {
//             console.error("Firebase onValue error:", error);
//             setJourneyData([]);
//             setLoading(false);
//           }
//         );
//       } else {
//         setJourneyData([]);
//         setLoading(false);
//       }
//     });
//     return () => unsubscribe();
//   }, []);

//   // Handle window resize to reposition nodes
//   useEffect(() => {
//     const handleResize = () => {
//       if (journeyData.length && containerRef.current) {
//         const sortedForPosition = [...journeyData].sort((a, b) => new Date(a.date) - new Date(b.date));
//         const newPositions = generateOptimalPositions(
//           sortedForPosition.length,
//           Math.max(1400, sortedForPosition.length * 280),
//           800
//         );
//         const newData = sortedForPosition.map((node, index) => ({
//           ...node,
//           position: newPositions[index]
//         }));
//         setJourneyData(newData);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     handleResize();

//     return () => window.removeEventListener('resize', handleResize);
//   }, [journeyData.length]);

//   const handleZoom = (delta) => {
//     setZoom(prev => Math.max(0.5, Math.min(2, prev + delta)));
//   };

//   const handleMouseDown = (e) => {
//     if (e.target.closest(".milestone-node")) return;
//     setIsDragging(true);
//     setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     setPan({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const resetView = () => {
//     setZoom(1);
//     setPan({ x: 0, y: 0 });
//   };

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;
//     container.addEventListener("mousemove", handleMouseMove);
//     container.addEventListener("mouseup", handleMouseUp);
//     container.addEventListener("mouseleave", handleMouseUp);
//     return () => {
//       container.removeEventListener("mousemove", handleMouseMove);
//       container.removeEventListener("mouseup", handleMouseUp);
//       container.removeEventListener("mouseleave", handleMouseUp);
//     };
//   }, [isDragging, dragStart]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
//           <p className="text-white text-xl">Loading your journey...</p>
//           <p className="text-gray-400 text-sm mt-2">Fetching GitHub data and analyzing portfolio</p>
//         </div>
//       </div>
//     );
//   }

//   if (!journeyData.length) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
//         <div className="text-center max-w-md">
//           <BookOpen className="h-16 w-16 text-purple-400 mx-auto mb-4" />
//           <h2 className="text-2xl font-bold text-white mb-2">No Journey Data Found</h2>
//           <p className="text-gray-400">Please complete your profile to see your personalized journey map.</p>
//         </div>
//       </div>
//     );
//   }

//   const connections = createConnections(journeyData);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
//       {/* Background Effects */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]" />
//         {[...Array(30)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-white/20 rounded-full"
//             style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
//             animate={{ 
//               opacity: [0.2, 0.8, 0.2], 
//               scale: [1, 1.5, 1],
//               y: [0, -10, 0] 
//             }}
//             transition={{ 
//               duration: 3 + Math.random() * 2, 
//               repeat: Infinity, 
//               delay: Math.random() * 2 
//             }}
//           />
//         ))}
//       </div>

//       {/* Header */}
//       <div className="relative z-10 pt-20 pb-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
//             <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
//               Your Journey Timeline
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               An interactive visualization of your achievements, skills, and growth trajectory with real GitHub integration
//             </p>
//             {githubData && (
//               <div className="mt-4 flex justify-center items-center space-x-6 text-sm text-gray-400">
//                 <div className="flex items-center space-x-1">
//                   <Star className="h-4 w-4" />
//                   <span>{githubData.totalStars} GitHub Stars</span>
//                 </div>
//                 <div className="flex items-center space-x-1">
//                   <GitBranch className="h-4 w-4" />
//                   <span>{githubData.profile.public_repos} Repositories</span>
//                 </div>
//                 <div className="flex items-center space-x-1">
//                   <Users className="h-4 w-4" />
//                   <span>{githubData.profile.followers} Followers</span>
//                 </div>
//               </div>
//             )}
//           </motion.div>
//         </div>
//       </div>

//       {/* Controls */}
//       <div className="fixed top-24 right-4 z-20 flex flex-col space-y-2">
//         <Button
//           onClick={() => handleZoom(0.2)}
//           size="sm"
//           variant="outline"
//           className="glass-strong hover:bg-white/10 border-white/20"
//           title="Zoom In"
//         >
//           <ZoomIn className="h-4 w-4" />
//         </Button>
//         <Button
//           onClick={() => handleZoom(-0.2)}
//           size="sm"
//           variant="outline"
//           className="glass-strong hover:bg-white/10 border-white/20"
//           title="Zoom Out"
//         >
//           <ZoomOut className="h-4 w-4" />
//         </Button>
//         <Button
//           onClick={resetView}
//           size="sm"
//           variant="outline"
//           className="glass-strong hover:bg-white/10 border-white/20"
//           title="Reset View"
//         >
//           <RotateCcw className="h-4 w-4" />
//         </Button>
//       </div>

//       {/* Journey Map Container - Horizontal Scroll with Alternating Layout */}
//       <div
//         ref={containerRef}
//         className="relative h-[80vh] overflow-auto cursor-grab active:cursor-grabbing"
//         onMouseDown={handleMouseDown}
//       >
//         <motion.div
//           className="relative h-full"
//           style={{ 
//             width: `${Math.max(1400, journeyData.length * 280)}px`,
//             transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
//             transformOrigin: "top left"
//           }}
//         >
//           {/* Connection Lines with Curved Paths */}
//           <svg className="absolute inset-0 w-full h-full pointer-events-none">
//             {connections.map((connection, index) => {
//               const { from, to } = connection;
//               const startX = from.position.x + 40;
//               const startY = from.position.y + 40;
//               const endX = to.position.x + 40;
//               const endY = to.position.y + 40;
//               const midX = (startX + endX) / 2;
//               const midY = (startY + endY) / 2 - 100;
//               const path = `M${startX},${startY} Q${midX},${midY} ${endX},${endY}`;
              
//               return (
//                 <motion.g key={`connection-${index}`}>
//                   <defs>
//                     <linearGradient
//                       id={`gradient-${index}`}
//                       x1="0%"
//                       y1="0%"
//                       x2="100%"
//                       y2="0%"
//                     >
//                       <stop offset="0%" stopColor="rgba(139, 92, 246, 0.6)" />
//                       <stop offset="50%" stopColor="rgba(59, 130, 246, 0.6)" />
//                       <stop offset="100%" stopColor="rgba(16, 185, 129, 0.6)" />
//                     </linearGradient>
//                     <filter id={`glow-${index}`}>
//                       <feGaussianBlur stdDeviation="3" result="coloredBlur" />
//                       <feMerge>
//                         <feMergeNode in="coloredBlur" />
//                         <feMergeNode in="SourceGraphic" />
//                       </feMerge>
//                     </filter>
//                   </defs>
//                   <motion.path
//                     d={path}
//                     stroke={`url(#gradient-${index})`}
//                     strokeWidth="3"
//                     fill="none"
//                     filter={`url(#glow-${index})`}
//                     initial={{ pathLength: 0, opacity: 0 }}
//                     animate={{ pathLength: 1, opacity: 1 }}
//                     transition={{ duration: 1.5, delay: index * 0.2 }}
//                   />
//                   <motion.circle
//                     r="4"
//                     fill="white"
//                     animate={{ offsetDistance: ["0%", "100%"] }}
//                     transition={{ duration: 3, repeat: Infinity }}
//                     style={{
//                       offsetPath: `path("${path}")`,
//                       offsetRotate: "auto",
//                     }}
//                   />
//                   <motion.polygon
//                     points={`${to.position.x + 30},${to.position.y + 35} ${to.position.x + 30},${to.position.y + 45} ${to.position.x + 40},${to.position.y + 40}`}
//                     fill="rgba(59, 130, 246, 0.8)"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
//                   />
//                 </motion.g>
//               );
//             })}
//           </svg>

//           {/* Enhanced Milestone Nodes with Alternating Positions */}
//           {journeyData.map((milestone, index) => {
//             const Icon = getIcon(milestone.type);
//             const colors = getColors(milestone.type, milestone.verified);
//             return (
//               <motion.div
//                 key={milestone.id}
//                 className="milestone-node absolute cursor-pointer"
//                 style={{
//                   left: milestone.position.x,
//                   top: milestone.position.y,
//                 }}
//                 initial={{ scale: 0, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setSelectedNode(milestone)}
//               >
//                 <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${colors} p-1`}>
//                   {milestone.verified && (
//                     <motion.div
//                       className="absolute -inset-2 rounded-full border-2 border-yellow-400/50"
//                       animate={{
//                         scale: [1, 1.1, 1],
//                         opacity: [0.5, 1, 0.5],
//                       }}
//                       transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                       }}
//                     />
//                   )}
//                   <div className="w-full h-full rounded-full bg-slate-900/20 backdrop-blur-sm flex items-center justify-center">
//                     <Icon className="h-8 w-8 text-white" />
//                   </div>
//                   {milestone.verified && (
//                     <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
//                       <Shield className="h-3 w-3 text-slate-900" />
//                     </div>
//                   )}
//                 </div>
//                 <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-center">
//                   <div className="bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/10">
//                     <p className="text-sm font-medium text-white whitespace-nowrap">
//                       {milestone.title}
//                     </p>
//                     <p className="text-xs text-gray-400">
//                       {new Date(milestone.date).toLocaleDateString()}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>

//       {/* Enhanced Details Panel */}
//       <AnimatePresence>
//         {selectedNode && (
//           <motion.div
//             initial={{ x: "100%", opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: "100%", opacity: 0 }}
//             transition={{ type: "spring", stiffness: 100, damping: 25 }}
//             className="fixed top-0 right-0 h-full w-[480px] bg-slate-900/95 backdrop-blur-xl border-l border-white/10 z-50 overflow-hidden flex flex-col"
//           >
//             <div className="p-6 border-b border-white/10 flex-shrink-0">
//               <div className="flex items-start justify-between">
//                 <div className="flex items-center space-x-4">
//                   <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${getColors(selectedNode.type, selectedNode.verified)} p-1 shadow-lg`}>
//                     <div className="w-full h-full rounded-lg bg-slate-900/30 backdrop-blur-sm flex items-center justify-center">
//                       {React.createElement(getIcon(selectedNode.type), { 
//                         className: "h-7 w-7 text-white" 
//                       })}
//                     </div>
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-xl font-bold text-white mb-1">{selectedNode.title}</h3>
//                     <div className="flex items-center space-x-3 text-sm">
//                       <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getColors(selectedNode.type, selectedNode.verified)} text-white`}>
//                         {selectedNode.type}
//                       </span>
//                       {selectedNode.verified && (
//                         <div className="flex items-center space-x-1 text-yellow-400">
//                           <Shield className="h-3 w-3" />
//                           <span className="text-xs">Verified</span>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   onClick={() => setSelectedNode(null)}
//                   className="hover:bg-white/10 text-gray-400 hover:text-white"
//                 >
//                   <X className="h-5 w-5" />
//                 </Button>
//               </div>
//             </div>

//             <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-slate-800">
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-slate-800/50 rounded-lg p-4 border border-white/10 shadow-sm">
//                   <div className="flex items-center space-x-2 text-gray-300 mb-2">
//                     <Calendar className="h-4 w-4" />
//                     <span className="text-sm font-medium">Date</span>
//                   </div>
//                   <p className="text-base text-white font-medium">
//                     {new Date(selectedNode.date).toLocaleDateString("en-US", {
//                       year: "numeric",
//                       month: "long",
//                       day: "numeric",
//                     })}
//                   </p>
//                 </div>
                
//                 {selectedNode.link && (
//                   <div className="bg-slate-800/50 rounded-lg p-4 border border-white/10 shadow-sm">
//                     <div className="flex items-center space-x-2 text-gray-300 mb-2">
//                       <ExternalLink className="h-4 w-4" />
//                       <span className="text-sm font-medium">Link</span>
//                     </div>
//                     <Button
//                       variant="ghost"
//                       size="sm"
//                       className="h-auto p-0 text-blue-400 hover:text-blue-300 text-base"
//                       onClick={() => window.open(selectedNode.link, '_blank')}
//                     >
//                       View Resource
//                     </Button>
//                   </div>
//                 )}
//               </div>

//               <div className="space-y-3">
//                 <h4 className="text-base font-semibold text-white flex items-center space-x-2">
//                   <BookOpen className="h-5 w-5" />
//                   <span>Overview</span>
//                 </h4>
//                 <p className="text-gray-300 leading-relaxed text-base bg-slate-800/30 p-5 rounded-xl border border-white/5 shadow-sm">
//                   {selectedNode.description}
//                 </p>
//               </div>

//               <div className="space-y-3">
//                 <h4 className="text-base font-semibold text-white flex items-center space-x-2">
//                   <Target className="h-5 w-5" />
//                   <span>Key Highlights</span>
//                 </h4>
//                 <div className="grid gap-3">
//                   {selectedNode.keyFeatures?.map((feature, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       className="flex items-center space-x-3 p-4 bg-slate-800/30 rounded-xl border border-white/5 shadow-sm"
//                     >
//                       <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex-shrink-0" />
//                       <span className="text-base text-gray-300">{feature}</span>
//                     </motion.div>
//                   )) || (
//                     <p className="text-gray-500 text-base italic p-4 bg-slate-800/30 rounded-xl border border-white/5">No key features available</p>
//                   )}
//                 </div>
//               </div>

//               {selectedNode.additionalDetails && (
//                 <motion.div
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   className="space-y-4"
//                 >
//                   <h4 className="text-base font-semibold text-white flex items-center space-x-2">
//                     <Lightbulb className="h-5 w-5" />
//                     <span>Detailed Insights</span>
//                   </h4>
                  
//                   {typeof selectedNode.additionalDetails === 'object' ? (
//                     <div className="space-y-4">
//                       {selectedNode.additionalDetails.overview && (
//                         <div className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 p-5 rounded-xl border border-white/10 shadow-sm">
//                           <h5 className="text-base font-medium text-white mb-3">Overview</h5>
//                           <p className="text-base text-gray-300 leading-relaxed">
//                             {selectedNode.additionalDetails.overview}
//                           </p>
//                         </div>
//                       )}

//                       {selectedNode.additionalDetails.achievements && (
//                         <div className="bg-gradient-to-r from-emerald-900/20 to-emerald-800/20 p-5 rounded-xl border border-emerald-500/20 shadow-sm">
//                           <h5 className="text-base font-medium text-emerald-400 mb-3 flex items-center space-x-2">
//                             <Trophy className="h-5 w-5" />
//                             <span>Achievements</span>
//                           </h5>
//                           <div className="space-y-3">
//                             {selectedNode.additionalDetails.achievements.map((achievement, idx) => (
//                               <div key={idx} className="flex items-center space-x-3">
//                                 <div className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
//                                 <span className="text-base text-gray-300">{achievement}</span>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       )}

//                       {(selectedNode.additionalDetails.metrics || selectedNode.additionalDetails.stats) && (
//                         <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 p-5 rounded-xl border border-blue-500/20 shadow-sm">
//                           <h5 className="text-base font-medium text-blue-400 mb-3 flex items-center space-x-2">
//                             <TrendingUp className="h-5 w-5" />
//                             <span>Performance Metrics</span>
//                           </h5>
//                           {(() => {
//                             const metricsData = selectedNode.additionalDetails.metrics || selectedNode.additionalDetails.stats;
//                             return typeof metricsData === 'object' ? (
//                               <div className="grid grid-cols-2 gap-4">
//                                 {Object.entries(metricsData).map(([key, value]) => (
//                                   <div key={key} className="bg-slate-800/50 p-3 rounded-lg text-center shadow-inner">
//                                     <p className="text-xl font-bold text-white">{value}</p>
//                                     <p className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
//                                   </div>
//                                 ))}
//                               </div>
//                             ) : (
//                               <p className="text-base text-gray-300">{metricsData}</p>
//                             );
//                           })()}
//                         </div>
//                       )}

//                       {selectedNode.additionalDetails.recommendations && (
//                         <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 p-5 rounded-xl border border-purple-500/20 shadow-sm">
//                           <h5 className="text-base font-medium text-purple-400 mb-3 flex items-center space-x-2">
//                             <Lightbulb className="h-5 w-5" />
//                             <span>Recommendations</span>
//                           </h5>
//                           <div className="space-y-3">
//                             {selectedNode.additionalDetails.recommendations.map((rec, idx) => (
//                               <div key={idx} className="flex items-start space-x-3">
//                                 <div className="w-2 h-2 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
//                                 <span className="text-base text-gray-300 leading-relaxed">{rec}</span>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       )}

//                       {selectedNode.additionalDetails.strongSkills && (
//                         <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 p-5 rounded-xl border border-green-500/20 shadow-sm">
//                           <h5 className="text-base font-medium text-green-400 mb-3">Strong Skills</h5>
//                           <div className="flex flex-wrap gap-2">
//                             {selectedNode.additionalDetails.strongSkills.map((skill, idx) => (
//                               <span key={idx} className="px-3 py-1.5 bg-green-500/20 text-green-300 rounded-md text-base">
//                                 {skill}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                       )}

//                       {selectedNode.additionalDetails.missingSkills && (
//                         <div className="bg-gradient-to-r from-orange-900/20 to-orange-800/20 p-5 rounded-xl border border-orange-500/20 shadow-sm">
//                           <h5 className="text-base font-medium text-orange-400 mb-3">Growth Opportunities</h5>
//                           <div className="flex flex-wrap gap-2">
//                             {selectedNode.additionalDetails.missingSkills.map((skill, idx) => (
//                               <span key={idx} className="px-3 py-1.5 bg-orange-500/20 text-orange-300 rounded-md text-base">
//                                 {skill}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   ) : (
//                     <div className="bg-slate-800/30 p-5 rounded-xl border border-white/5 shadow-sm">
//                       <div className="prose prose-invert prose-base max-w-none">
//                         <div 
//                           dangerouslySetInnerHTML={{ 
//                             __html: selectedNode.additionalDetails.replace(/\n/g, "<br />") 
//                           }} 
//                         />
//                       </div>
//                     </div>
//                   )}
//                 </motion.div>
//               )}

//               <div className="flex space-x-3 pt-4 border-t border-white/10 flex-shrink-0">
//                 {selectedNode.link && (
//                   <Button
//                     className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 text-base py-6"
//                     onClick={() => window.open(selectedNode.link, '_blank')}
//                   >
//                     <ExternalLink className="h-5 w-5 mr-2" />
//                     View Resource
//                   </Button>
//                 )}
//                 <Button
//                   variant="outline"
//                   className="flex-1 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white text-base py-6"
//                   onClick={() => setSelectedNode(null)}
//                 >
//                   Close Details
//                 </Button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Instructions */}
//       <motion.div 
//         className="fixed bottom-4 left-4 z-20"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1 }}
//       >
//         <div className="bg-slate-900/90 backdrop-blur-md border border-white/20 rounded-xl p-4 max-w-sm shadow-2xl">
//           <h4 className="text-sm font-semibold text-white mb-3 flex items-center space-x-2">
//             <Eye className="h-4 w-4" />
//             <span>Navigation Guide</span>
//           </h4>
//           <ul className="text-xs text-gray-400 space-y-2">
//             <li className="flex items-center space-x-2">
//               <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
//               <span>Click and drag to explore the map</span>
//             </li>
//             <li className="flex items-center space-x-2">
//               <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
//               <span>Use zoom controls for better view</span>
//             </li>
//             <li className="flex items-center space-x-2">
//               <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
//               <span>Click nodes for detailed insights</span>
//             </li>
//             <li className="flex items-center space-x-2">
//               <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
//               <span>Gold badges indicate verified achievements</span>
//             </li>
//           </ul>
//         </div>
//       </motion.div>

//       {/* Stats Overlay */}
//       {githubData && (
//         <motion.div
//           className="fixed top-24 left-4 z-20"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.5 }}
//         >
//           <div className="bg-slate-900/90 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-2xl">
//             <h4 className="text-sm font-semibold text-white mb-3 flex items-center space-x-2">
//               <GitBranch className="h-4 w-4" />
//               <span>GitHub Overview</span>
//             </h4>
//             <div className="grid grid-cols-2 gap-3 text-xs">
//               <div className="text-center">
//                 <p className="text-yellow-400 font-bold text-lg">{githubData.totalStars}</p>
//                 <p className="text-gray-400">Stars</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-blue-400 font-bold text-lg">{githubData.profile.public_repos}</p>
//                 <p className="text-gray-400">Repos</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-green-400 font-bold text-lg">{githubData.totalForks}</p>
//                 <p className="text-gray-400">Forks</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-purple-400 font-bold text-lg">{githubData.profile.followers}</p>
//                 <p className="text-gray-400">Followers</p>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default Journey;


// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { ref, onValue } from "firebase/database";
// import { db } from "../firebase";
// import {
//   Trophy,
//   Code,
//   Award,
//   Briefcase,
//   GraduationCap,
//   Calendar,
//   Shield,
//   Star,
//   ExternalLink,
//   X,
//   ZoomIn,
//   ZoomOut,
//   RotateCcw,
//   GitBranch,
//   Users,
//   Eye,
//   TrendingUp,
//   BookOpen,
//   Target,
//   Lightbulb,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// // Helper function to get icon based on milestone type
// const getIcon = (type) => {
//   switch (type) {
//     case "education": return GraduationCap;
//     case "project": return Code;
//     case "certificate": return Award;
//     case "event": return Star;
//     case "github": return GitBranch;
//     default: return Trophy;
//   }
// };

// // Helper function to get gradient colors based on type and verification
// const getColors = (type, verified) => {
//   switch (type) {
//     case "education": return verified ? "from-blue-500 to-blue-700" : "from-blue-300 to-blue-500";
//     case "project": return verified ? "from-purple-500 to-purple-700" : "from-purple-300 to-purple-500";
//     case "certificate": return verified ? "from-green-500 to-green-700" : "from-green-300 to-green-500";
//     case "event": return verified ? "from-pink-500 to-pink-700" : "from-pink-300 to-pink-500";
//     case "github": return verified ? "from-orange-500 to-orange-700" : "from-orange-300 to-orange-500";
//     default: return verified ? "from-gray-500 to-gray-700" : "from-gray-300 to-gray-500";
//   }
// };

// // Updated positioning function for alternating up/down layout
// const generateOptimalPositions = (nodeCount, containerWidth = 1400, containerHeight = 600) => {
//   const positions = [];
//   const startX = 150;
//   const spacing = Math.max(280, (containerWidth - 300) / Math.max(nodeCount - 1, 1));
//   const centerY = containerHeight / 2;
//   const offsetY = 80; // Vertical offset for alternating pattern

//   for (let i = 0; i < nodeCount; i++) {
//     const isEven = i % 2 === 0;
//     positions.push({
//       x: startX + i * spacing,
//       y: centerY + (isEven ? -offsetY : offsetY)
//     });
//   }

//   return positions;
// };

// // Helper function to create connections between nodes
// const createConnections = (data) => {
//   const connections = [];
//   const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
//   for (let i = 0; i < sortedData.length - 1; i++) {
//     connections.push({ from: sortedData[i], to: sortedData[i + 1] });
//   }
//   return connections;
// };

// // Helper function to extract username from GitHub URL
// const extractUsername = (url) => {
//   try {
//     const parsedUrl = new URL(url);
//     return parsedUrl.pathname.split("/")[1] || "";
//   } catch {
//     return "";
//   }
// };

// // Enhanced GitHub API integration
// const fetchGitHubData = async (username, token = "") => {
//   try {
//     const headers = token ? { Authorization: `token ${token}` } : {};
    
//     const userResponse = await fetch(`https://api.github.com/users/${username}`, { headers });
//     if (!userResponse.ok) throw new Error(`GitHub API error: ${userResponse.status}`);
//     const userProfile = await userResponse.json();
    
//     const reposResponse = await fetch(
//       `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
//       { headers }
//     );
//     if (!reposResponse.ok) throw new Error(`GitHub API error: ${reposResponse.status}`);
//     const repos = await reposResponse.json();
    
//     const topRepos = repos
//       .filter(repo => !repo.fork && repo.stargazers_count > 0)
//       .sort((a, b) => b.stargazers_count - a.stargazers_count)
//       .slice(0, 5);
    
//     const recentRepos = repos
//       .filter(repo => !repo.fork)
//       .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
//       .slice(0, 3);
    
//     return {
//       profile: userProfile,
//       topRepos,
//       recentRepos,
//       totalStars: repos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
//       totalForks: repos.reduce((sum, repo) => sum + repo.forks_count, 0),
//       languages: [...new Set(repos.map(repo => repo.language).filter(Boolean))],
//     };
//   } catch (error) {
//     console.error("Error fetching GitHub data:", error);
//     return null;
//   }
// };

// // Enhanced portfolio analysis
// const analyzePortfolioWithAI = async (skills, interests, githubData) => {
//   const marketSkills = [
//     "React", "JavaScript", "TypeScript", "Node.js", "Python", "Java", "C++", "Go",
//     "Docker", "Kubernetes", "AWS", "Azure", "GCP", "MongoDB", "PostgreSQL", "Redis",
//     "GraphQL", "REST API", "Microservices", "CI/CD", "DevOps", "Machine Learning",
//     "AI", "Blockchain", "Next.js", "Vue.js", "Angular", "Flutter", "React Native"
//   ];
  
//   const userSkills = skills || [];
//   const githubLanguages = githubData?.languages || [];
//   const allSkills = [...new Set([...userSkills, ...githubLanguages])];
  
//   const strongSkills = allSkills.filter(skill => 
//     marketSkills.some(market => 
//       market.toLowerCase().includes(skill.toLowerCase()) || 
//       skill.toLowerCase().includes(market.toLowerCase())
//     )
//   );
  
//   const missingSkills = marketSkills.filter(market => 
//     !allSkills.some(skill => 
//       market.toLowerCase().includes(skill.toLowerCase()) || 
//       skill.toLowerCase().includes(market.toLowerCase())
//     )
//   ).slice(0, 8);
  
//   const suggestions = [
//     ...missingSkills.slice(0, 3).map(skill => `Learn ${skill} through hands-on projects`),
//     `Build more projects with ${strongSkills.slice(0, 2).join(" and ")}`,
//     "Contribute to open-source projects to gain visibility",
//     "Create technical blog posts about your projects",
//     "Network with other developers in your field"
//   ];
  
//   return {
//     strongSkills,
//     missingSkills,
//     suggestions,
//     skillCoverage: Math.round((strongSkills.length / marketSkills.length) * 100),
//     githubScore: githubData ? Math.min(100, (githubData.totalStars * 2) + (githubData.profile.public_repos * 1)) : 0
//   };
// };

// const Journey = () => {
//   const [journeyData, setJourneyData] = useState([]);
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [zoom, setZoom] = useState(1);
//   const [pan, setPan] = useState({ x: 0, y: 0 });
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
//   const [githubData, setGithubData] = useState(null);
//   const containerRef = useRef(null);

//   // Fetch data from Firebase and GitHub
//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         const userRef = ref(db, `students/${user.uid}`);
//         onValue(
//           userRef,
//           async (snapshot) => {
//             try {
//               if (snapshot.exists()) {
//                 const data = snapshot.val();
//                 const githubUsername = data.github ? extractUsername(data.github) : "";
//                 const githubToken = import.meta.env.VITE_GITHUB_TOKEN || "";
                
//                 let fetchedGithubData = null;
//                 if (githubUsername) {
//                   fetchedGithubData = await fetchGitHubData(githubUsername, githubToken);
//                   setGithubData(fetchedGithubData);
//                 }
                
//                 const aiAnalysis = await analyzePortfolioWithAI(data.skills, data.interests, fetchedGithubData);
                
//                 const baseNodes = [
//                   {
//                     id: 1,
//                     title: "Academic Journey",
//                     type: "education",
//                     date: data.createdAt || new Date().toISOString(),
//                     description: `Pursuing ${data.major || "Computer Science"} at ${data.university || "University"}`,
//                     verified: true,
//                     keyFeatures: [
//                       `Major: ${data.major || "Not specified"}`,
//                       `University: ${data.university || "Not specified"}`,
//                       `Current Status: Active Student`,
//                     ],
//                     additionalDetails: {
//                       overview: "Academic foundation building phase with focus on theoretical knowledge and practical skills.",
//                       achievements: data.gpa ? [`GPA: ${data.gpa}`] : ["Academic performance tracking"],
//                       timeline: `Started: ${new Date(data.createdAt || Date.now()).getFullYear()}`,
//                       impact: "Building strong foundation for technical career"
//                     }
//                   },
//                   {
//                     id: 2,
//                     title: "Technical Skills",
//                     type: "project",
//                     date: data.createdAt || new Date().toISOString(),
//                     description: `Mastered: ${(data.skills || []).join(", ") || "Various programming languages"}`,
//                     verified: true,
//                     keyFeatures: (data.skills || ["Programming", "Web Development"]).map(skill => `✓ ${skill}`),
//                     additionalDetails: {
//                       overview: "Comprehensive skill development across multiple technology stacks.",
//                       achievements: aiAnalysis.strongSkills.map(skill => `Proficient in ${skill}`),
//                       metrics: `${aiAnalysis.skillCoverage}% market skill coverage`,
//                       recommendations: aiAnalysis.suggestions.slice(0, 3)
//                     }
//                   }
//                 ];

//                 if (fetchedGithubData) {
//                   baseNodes.push({
//                     id: 3,
//                     title: "GitHub Profile",
//                     type: "github",
//                     date: fetchedGithubData.profile.created_at,
//                     description: `Active developer with ${fetchedGithubData.profile.public_repos} repositories and ${fetchedGithubData.totalStars} total stars`,
//                     verified: true,
//                     link: fetchedGithubData.profile.html_url,
//                     keyFeatures: [
//                       `${fetchedGithubData.profile.public_repos} Public Repositories`,
//                       `${fetchedGithubData.totalStars} Total Stars`,
//                       `${fetchedGithubData.profile.followers} Followers`,
//                       `${fetchedGithubData.totalForks} Total Forks`
//                     ],
//                     additionalDetails: {
//                       overview: fetchedGithubData.profile.bio || "Active open-source contributor and developer",
//                       achievements: [
//                         `GitHub Score: ${aiAnalysis.githubScore}/100`,
//                         `Account Age: ${Math.floor((Date.now() - new Date(fetchedGithubData.profile.created_at)) / (1000 * 60 * 60 * 24 * 365))} years`,
//                         `Languages: ${fetchedGithubData.languages.join(", ")}`
//                       ],
//                       stats: {
//                         repositories: fetchedGithubData.profile.public_repos,
//                         stars: fetchedGithubData.totalStars,
//                         followers: fetchedGithubData.profile.followers,
//                         following: fetchedGithubData.profile.following
//                       }
//                     }
//                   });

//                   fetchedGithubData.topRepos.forEach((repo, index) => {
//                     baseNodes.push({
//                       id: `repo-${index + 1}`,
//                       title: repo.name,
//                       type: "project",
//                       date: repo.created_at,
//                       description: repo.description || "GitHub project",
//                       verified: false,
//                       link: repo.html_url,
//                       keyFeatures: [
//                         `⭐ ${repo.stargazers_count} Stars`,
//                         `🔀 ${repo.forks_count} Forks`,
//                         `💻 ${repo.language || "Mixed"} Language`,
//                         `📝 ${repo.size} KB Size`
//                       ],
//                       additionalDetails: {
//                         overview: repo.description || "Open source project showcasing technical expertise",
//                         achievements: [
//                           `Last Updated: ${new Date(repo.updated_at).toLocaleDateString()}`,
//                           `Default Branch: ${repo.default_branch}`,
//                           repo.license ? `License: ${repo.license.name}` : "No license specified"
//                         ],
//                         metrics: `${repo.watchers_count} watchers, ${repo.open_issues_count} open issues`,
//                         techStack: repo.topics || []
//                       }
//                     });
//                   });
//                 }

//                 if (data.certifications) {
//                   baseNodes.push({
//                     id: 'certifications',
//                     title: "Certifications",
//                     type: "certificate",
//                     date: data.createdAt || new Date().toISOString(),
//                     description: "Professional certifications earned",
//                     verified: true,
//                     keyFeatures: data.certifications.split("\n").map(cert => `🏆 ${cert.trim()}`),
//                     additionalDetails: {
//                       overview: "Industry-recognized certifications validating technical expertise",
//                       achievements: data.certifications.split("\n").map(cert => cert.trim()),
//                       impact: "Enhanced credibility and validated skills in the market"
//                     }
//                   });
//                 }

//                 if (data.interests) {
//                   baseNodes.push({
//                     id: 'interests',
//                     title: "Interests & Focus",
//                     type: "event",
//                     date: data.createdAt || new Date().toISOString(),
//                     description: "Areas of passion and exploration",
//                     verified: true,
//                     keyFeatures: data.interests.split(", ").map(interest => `🎯 ${interest.trim()}`),
//                     additionalDetails: {
//                       overview: "Personal interests driving continuous learning and project development",
//                       achievements: data.interests.split(", ").map(interest => `Exploring ${interest.trim()}`),
//                       alignment: "Interests align with current market trends and opportunities"
//                     }
//                   });
//                 }

//                 baseNodes.push({
//                   id: 'ai-analysis',
//                   title: "AI Portfolio Analysis",
//                   type: "event",
//                   date: new Date().toISOString(),
//                   description: "Comprehensive AI-driven insights and recommendations",
//                   verified: false,
//                   keyFeatures: [
//                     `${aiAnalysis.skillCoverage}% Market Skill Coverage`,
//                     `${aiAnalysis.strongSkills.length} Strong Skills Identified`,
//                     `${aiAnalysis.missingSkills.length} Growth Opportunities`,
//                     `GitHub Score: ${aiAnalysis.githubScore}/100`
//                   ],
//                   additionalDetails: {
//                     overview: "Real-time analysis of your portfolio strength and market alignment",
//                     strongSkills: aiAnalysis.strongSkills,
//                     missingSkills: aiAnalysis.missingSkills,
//                     recommendations: aiAnalysis.suggestions,
//                     metrics: {
//                       portfolioScore: aiAnalysis.skillCoverage,
//                       githubEngagement: aiAnalysis.githubScore,
//                       marketAlignment: "75% aligned with current trends"
//                     }
//                   }
//                 });

//                 const sortedForPosition = [...baseNodes].sort((a, b) => new Date(a.date) - new Date(b.date));
//                 const positions = generateOptimalPositions(
//                   sortedForPosition.length,
//                   Math.max(1400, sortedForPosition.length * 280),
//                   800
//                 );

//                 const positionedNodes = sortedForPosition.map((node, index) => ({
//                   ...node,
//                   position: positions[index]
//                 }));

//                 setJourneyData(positionedNodes);
//               } else {
//                 setJourneyData([]);
//               }
//               setLoading(false);
//             } catch (error) {
//               console.error("Error processing Firebase data:", error);
//               setJourneyData([]);
//               setLoading(false);
//             }
//           },
//           (error) => {
//             console.error("Firebase onValue error:", error);
//             setJourneyData([]);
//             setLoading(false);
//           }
//         );
//       } else {
//         setJourneyData([]);
//         setLoading(false);
//       }
//     });
//     return () => unsubscribe();
//   }, []);

//   // Handle window resize to reposition nodes
//   useEffect(() => {
//     const handleResize = () => {
//       if (journeyData.length && containerRef.current) {
//         const sortedForPosition = [...journeyData].sort((a, b) => new Date(a.date) - new Date(b.date));
//         const newPositions = generateOptimalPositions(
//           sortedForPosition.length,
//           Math.max(1400, sortedForPosition.length * 280),
//           800
//         );
//         const newData = sortedForPosition.map((node, index) => ({
//           ...node,
//           position: newPositions[index]
//         }));
//         setJourneyData(newData);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     handleResize();

//     return () => window.removeEventListener('resize', handleResize);
//   }, [journeyData.length]);

//   const handleZoom = (delta) => {
//     setZoom(prev => Math.max(0.5, Math.min(2, prev + delta)));
//   };

//   const handleMouseDown = (e) => {
//     if (e.target.closest(".milestone-node")) return;
//     setIsDragging(true);
//     setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     setPan({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const resetView = () => {
//     setZoom(1);
//     setPan({ x: 0, y: 0 });
//   };

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;
//     container.addEventListener("mousemove", handleMouseMove);
//     container.addEventListener("mouseup", handleMouseUp);
//     container.addEventListener("mouseleave", handleMouseUp);
//     return () => {
//       container.removeEventListener("mousemove", handleMouseMove);
//       container.removeEventListener("mouseup", handleMouseUp);
//       container.removeEventListener("mouseleave", handleMouseUp);
//     };
//   }, [isDragging, dragStart]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
//           <p className="text-white text-xl">Loading your journey...</p>
//           <p className="text-gray-400 text-sm mt-2">Fetching GitHub data and analyzing portfolio</p>
//         </div>
//       </div>
//     );
//   }

//   if (!journeyData.length) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
//         <div className="text-center max-w-md">
//           <BookOpen className="h-16 w-16 text-purple-400 mx-auto mb-4" />
//           <h2 className="text-2xl font-bold text-white mb-2">No Journey Data Found</h2>
//           <p className="text-gray-400">Please complete your profile to see your personalized journey map.</p>
//         </div>
//       </div>
//     );
//   }

//   const connections = createConnections(journeyData);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
//       {/* Background Effects */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]" />
//         {[...Array(30)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-white/20 rounded-full"
//             style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
//             animate={{ 
//               opacity: [0.2, 0.8, 0.2], 
//               scale: [1, 1.5, 1],
//               y: [0, -10, 0] 
//             }}
//             transition={{ 
//               duration: 3 + Math.random() * 2, 
//               repeat: Infinity, 
//               delay: Math.random() * 2 
//             }}
//           />
//         ))}
//       </div>

//       {/* Header */}
//       <div className="relative z-10 pt-20 pb-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
//             <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
//               Your Journey Timeline
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               An interactive visualization of your achievements, skills, and growth trajectory with real GitHub integration
//             </p>
//             {githubData && (
//               <div className="mt-4 flex justify-center items-center space-x-6 text-sm text-gray-400">
//                 <div className="flex items-center space-x-1">
//                   <Star className="h-4 w-4" />
//                   <span>{githubData.totalStars} GitHub Stars</span>
//                 </div>
//                 <div className="flex items-center space-x-1">
//                   <GitBranch className="h-4 w-4" />
//                   <span>{githubData.profile.public_repos} Repositories</span>
//                 </div>
//                 <div className="flex items-center space-x-1">
//                   <Users className="h-4 w-4" />
//                   <span>{githubData.profile.followers} Followers</span>
//                 </div>
//               </div>
//             )}
//           </motion.div>
//         </div>
//       </div>

//       {/* Controls */}
//       <div className="fixed top-24 right-4 z-20 flex flex-col space-y-2">
//         <Button
//           onClick={() => handleZoom(0.2)}
//           size="sm"
//           variant="outline"
//           className="glass-strong hover:bg-white/10 border-white/20"
//           title="Zoom In"
//         >
//           <ZoomIn className="h-4 w-4" />
//         </Button>
//         <Button
//           onClick={() => handleZoom(-0.2)}
//           size="sm"
//           variant="outline"
//           className="glass-strong hover:bg-white/10 border-white/20"
//           title="Zoom Out"
//         >
//           <ZoomOut className="h-4 w-4" />
//         </Button>
//         <Button
//           onClick={resetView}
//           size="sm"
//           variant="outline"
//           className="glass-strong hover:bg-white/10 border-white/20"
//           title="Reset View"
//         >
//           <RotateCcw className="h-4 w-4" />
//         </Button>
//       </div>

//       {/* Journey Map Container - Horizontal Scroll with Alternating Layout */}
//       <div
//         ref={containerRef}
//         className="relative h-[80vh] overflow-auto cursor-grab active:cursor-grabbing"
//         onMouseDown={handleMouseDown}
//       >
//         <motion.div
//           className="relative h-full"
//           style={{ 
//             width: `${Math.max(1400, journeyData.length * 280)}px`,
//             transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
//             transformOrigin: "top left"
//           }}
//         >
//           {/* Connection Lines with Curved Paths */}
//           <svg className="absolute inset-0 w-full h-full pointer-events-none">
//             {connections.map((connection, index) => {
//               const { from, to } = connection;
//               const startX = from.position.x + 40;
//               const startY = from.position.y + 40;
//               const endX = to.position.x + 40;
//               const endY = to.position.y + 40;
//               const midX = (startX + endX) / 2;
//               const midY = (startY + endY) / 2 - 100;
//               const path = `M${startX},${startY} Q${midX},${midY} ${endX},${endY}`;
              
//               return (
//                 <motion.g key={`connection-${index}`}>
//                   <defs>
//                     <linearGradient
//                       id={`gradient-${index}`}
//                       x1="0%"
//                       y1="0%"
//                       x2="100%"
//                       y2="0%"
//                     >
//                       <stop offset="0%" stopColor="rgba(139, 92, 246, 0.6)" />
//                       <stop offset="50%" stopColor="rgba(59, 130, 246, 0.6)" />
//                       <stop offset="100%" stopColor="rgba(16, 185, 129, 0.6)" />
//                     </linearGradient>
//                     <filter id={`glow-${index}`}>
//                       <feGaussianBlur stdDeviation="3" result="coloredBlur" />
//                       <feMerge>
//                         <feMergeNode in="coloredBlur" />
//                         <feMergeNode in="SourceGraphic" />
//                       </feMerge>
//                     </filter>
//                   </defs>
//                   <motion.path
//                     d={path}
//                     stroke={`url(#gradient-${index})`}
//                     strokeWidth="3"
//                     fill="none"
//                     filter={`url(#glow-${index})`}
//                     initial={{ pathLength: 0, opacity: 0 }}
//                     animate={{ pathLength: 1, opacity: 1 }}
//                     transition={{ duration: 1.5, delay: index * 0.2 }}
//                   />
//                   <motion.circle
//                     r="4"
//                     fill="white"
//                     animate={{ offsetDistance: ["0%", "100%"] }}
//                     transition={{ duration: 3, repeat: Infinity }}
//                     style={{
//                       offsetPath: `path("${path}")`,
//                       offsetRotate: "auto",
//                     }}
//                   />
//                   <motion.polygon
//                     points={`${to.position.x + 30},${to.position.y + 35} ${to.position.x + 30},${to.position.y + 45} ${to.position.x + 40},${to.position.y + 40}`}
//                     fill="rgba(59, 130, 246, 0.8)"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
//                   />
//                 </motion.g>
//               );
//             })}
//           </svg>

//           {/* Enhanced Milestone Nodes with Alternating Positions */}
//           {journeyData.map((milestone, index) => {
//             const Icon = getIcon(milestone.type);
//             const colors = getColors(milestone.type, milestone.verified);
//             return (
//               <motion.div
//                 key={milestone.id}
//                 className="milestone-node absolute cursor-pointer"
//                 style={{
//                   left: milestone.position.x,
//                   top: milestone.position.y,
//                 }}
//                 initial={{ scale: 0, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setSelectedNode(milestone)}
//               >
//                 <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${colors} p-1`}>
//                   {milestone.verified && (
//                     <motion.div
//                       className="absolute -inset-2 rounded-full border-2 border-yellow-400/50"
//                       animate={{
//                         scale: [1, 1.1, 1],
//                         opacity: [0.5, 1, 0.5],
//                       }}
//                       transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                       }}
//                     />
//                   )}
//                   <div className="w-full h-full rounded-full bg-slate-900/20 backdrop-blur-sm flex items-center justify-center">
//                     <Icon className="h-8 w-8 text-white" />
//                   </div>
//                   {milestone.verified && (
//                     <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
//                       <Shield className="h-3 w-3 text-slate-900" />
//                     </div>
//                   )}
//                 </div>
//                 <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-center">
//                   <div className="bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/10">
//                     <p className="text-sm font-medium text-white whitespace-nowrap">
//                       {milestone.title}
//                     </p>
//                     <p className="text-xs text-gray-400">
//                       {new Date(milestone.date).toLocaleDateString()}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>

//       {/* Enhanced Details Panel */}
//       <AnimatePresence>
//         {selectedNode && (
//           <motion.div
//             initial={{ x: "100%", opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: "100%", opacity: 0 }}
//             transition={{ type: "spring", stiffness: 100, damping: 25 }}
//             className="fixed top-0 right-0 h-full w-[480px] bg-slate-900/95 backdrop-blur-xl border-l border-white/10 z-50 overflow-hidden flex flex-col"
//           >
//             <div className="p-6 border-b border-white/10 flex-shrink-0">
//               <div className="flex items-start justify-between">
//                 <div className="flex items-center space-x-4">
//                   <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${getColors(selectedNode.type, selectedNode.verified)} p-1 shadow-lg`}>
//                     <div className="w-full h-full rounded-lg bg-slate-900/30 backdrop-blur-sm flex items-center justify-center">
//                       {React.createElement(getIcon(selectedNode.type), { 
//                         className: "h-7 w-7 text-white" 
//                       })}
//                     </div>
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-xl font-bold text-white mb-1">{selectedNode.title}</h3>
//                     <div className="flex items-center space-x-3 text-sm">
//                       <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getColors(selectedNode.type, selectedNode.verified)} text-white`}>
//                         {selectedNode.type}
//                       </span>
//                       {selectedNode.verified && (
//                         <div className="flex items-center space-x-1 text-yellow-400">
//                           <Shield className="h-3 w-3" />
//                           <span className="text-xs">Verified</span>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   onClick={() => setSelectedNode(null)}
//                   className="hover:bg-white/10 text-gray-400 hover:text-white"
//                 >
//                   <X className="h-5 w-5" />
//                 </Button>
//               </div>
//             </div>

//             <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-slate-800">
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-slate-800/50 rounded-lg p-4 border border-white/10 shadow-sm">
//                   <div className="flex items-center space-x-2 text-gray-300 mb-2">
//                     <Calendar className="h-4 w-4" />
//                     <span className="text-sm font-medium">Date</span>
//                   </div>
//                   <p className="text-base text-white font-medium">
//                     {new Date(selectedNode.date).toLocaleDateString("en-US", {
//                       year: "numeric",
//                       month: "long",
//                       day: "numeric",
//                     })}
//                   </p>
//                 </div>
                
//                 {selectedNode.link && (
//                   <div className="bg-slate-800/50 rounded-lg p-4 border border-white/10 shadow-sm">
//                     <div className="flex items-center space-x-2 text-gray-300 mb-2">
//                       <ExternalLink className="h-4 w-4" />
//                       <span className="text-sm font-medium">Link</span>
//                     </div>
//                     <Button
//                       variant="ghost"
//                       size="sm"
//                       className="h-auto p-0 text-blue-400 hover:text-blue-300 text-base"
//                       onClick={() => window.open(selectedNode.link, '_blank')}
//                     >
//                       View Resource
//                     </Button>
//                   </div>
//                 )}
//               </div>

//               <div className="space-y-3">
//                 <h4 className="text-base font-semibold text-white flex items-center space-x-2">
//                   <BookOpen className="h-5 w-5" />
//                   <span>Overview</span>
//                 </h4>
//                 <p className="text-gray-300 leading-relaxed text-base bg-slate-800/30 p-5 rounded-xl border border-white/5 shadow-sm">
//                   {selectedNode.description}
//                 </p>
//               </div>

//               <div className="space-y-3">
//                 <h4 className="text-base font-semibold text-white flex items-center space-x-2">
//                   <Target className="h-5 w-5" />
//                   <span>Key Highlights</span>
//                 </h4>
//                 <div className="grid gap-3">
//                   {selectedNode.keyFeatures?.map((feature, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       className="flex items-center space-x-3 p-4 bg-slate-800/30 rounded-xl border border-white/5 shadow-sm"
//                     >
//                       <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex-shrink-0" />
//                       <span className="text-base text-gray-300">{feature}</span>
//                     </motion.div>
//                   )) || (
//                     <p className="text-gray-500 text-base italic p-4 bg-slate-800/30 rounded-xl border border-white/5">No key features available</p>
//                   )}
//                 </div>
//               </div>

//               {selectedNode.additionalDetails && (
//                 <motion.div
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   className="space-y-4"
//                 >
//                   <h4 className="text-base font-semibold text-white flex items-center space-x-2">
//                     <Lightbulb className="h-5 w-5" />
//                     <span>Detailed Insights</span>
//                   </h4>
                  
//                   {typeof selectedNode.additionalDetails === 'object' ? (
//                     <div className="space-y-4">
//                       {selectedNode.additionalDetails.overview && (
//                         <div className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 p-5 rounded-xl border border-white/10 shadow-sm">
//                           <h5 className="text-base font-medium text-white mb-3">Overview</h5>
//                           <p className="text-base text-gray-300 leading-relaxed">
//                             {selectedNode.additionalDetails.overview}
//                           </p>
//                         </div>
//                       )}

//                       {selectedNode.additionalDetails.achievements && (
//                         <div className="bg-gradient-to-r from-emerald-900/20 to-emerald-800/20 p-5 rounded-xl border border-emerald-500/20 shadow-sm">
//                           <h5 className="text-base font-medium text-emerald-400 mb-3 flex items-center space-x-2">
//                             <Trophy className="h-5 w-5" />
//                             <span>Achievements</span>
//                           </h5>
//                           <div className="space-y-3">
//                             {selectedNode.additionalDetails.achievements.map((achievement, idx) => (
//                               <div key={idx} className="flex items-center space-x-3">
//                                 <div className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
//                                 <span className="text-base text-gray-300">{achievement}</span>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       )}

//                       {(selectedNode.additionalDetails.metrics || selectedNode.additionalDetails.stats) && (
//                         <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 p-5 rounded-xl border border-blue-500/20 shadow-sm">
//                           <h5 className="text-base font-medium text-blue-400 mb-3 flex items-center space-x-2">
//                             <TrendingUp className="h-5 w-5" />
//                             <span>Performance Metrics</span>
//                           </h5>
//                           {(() => {
//                             const metricsData = selectedNode.additionalDetails.metrics || selectedNode.additionalDetails.stats;
//                             return typeof metricsData === 'object' ? (
//                               <div className="grid grid-cols-2 gap-4">
//                                 {Object.entries(metricsData).map(([key, value]) => (
//                                   <div key={key} className="bg-slate-800/50 p-3 rounded-lg text-center shadow-inner">
//                                     <p className="text-xl font-bold text-white">{value}</p>
//                                     <p className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
//                                   </div>
//                                 ))}
//                               </div>
//                             ) : (
//                               <p className="text-base text-gray-300">{metricsData}</p>
//                             );
//                           })()}
//                         </div>
//                       )}

//                       {selectedNode.additionalDetails.recommendations && (
//                         <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 p-5 rounded-xl border border-purple-500/20 shadow-sm">
//                           <h5 className="text-base font-medium text-purple-400 mb-3 flex items-center space-x-2">
//                             <Lightbulb className="h-5 w-5" />
//                             <span>Recommendations</span>
//                           </h5>
//                           <div className="space-y-3">
//                             {selectedNode.additionalDetails.recommendations.map((rec, idx) => (
//                               <div key={idx} className="flex items-start space-x-3">
//                                 <div className="w-2 h-2 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
//                                 <span className="text-base text-gray-300 leading-relaxed">{rec}</span>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       )}

//                       {selectedNode.additionalDetails.strongSkills && (
//                         <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 p-5 rounded-xl border border-green-500/20 shadow-sm">
//                           <h5 className="text-base font-medium text-green-400 mb-3">Strong Skills</h5>
//                           <div className="flex flex-wrap gap-2">
//                             {selectedNode.additionalDetails.strongSkills.map((skill, idx) => (
//                               <span key={idx} className="px-3 py-1.5 bg-green-500/20 text-green-300 rounded-md text-base">
//                                 {skill}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                       )}

//                       {selectedNode.additionalDetails.missingSkills && (
//                         <div className="bg-gradient-to-r from-orange-900/20 to-orange-800/20 p-5 rounded-xl border border-orange-500/20 shadow-sm">
//                           <h5 className="text-base font-medium text-orange-400 mb-3">Growth Opportunities</h5>
//                           <div className="flex flex-wrap gap-2">
//                             {selectedNode.additionalDetails.missingSkills.map((skill, idx) => (
//                               <span key={idx} className="px-3 py-1.5 bg-orange-500/20 text-orange-300 rounded-md text-base">
//                                 {skill}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   ) : (
//                     <div className="bg-slate-800/30 p-5 rounded-xl border border-white/5 shadow-sm">
//                       <div className="prose prose-invert prose-base max-w-none">
//                         <div 
//                           dangerouslySetInnerHTML={{ 
//                             __html: selectedNode.additionalDetails.replace(/\n/g, "<br />") 
//                           }} 
//                         />
//                       </div>
//                     </div>
//                   )}
//                 </motion.div>
//               )}

//               <div className="flex space-x-3 pt-4 border-t border-white/10 flex-shrink-0">
//                 {selectedNode.link && (
//                   <Button
//                     className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 text-base py-6"
//                     onClick={() => window.open(selectedNode.link, '_blank')}
//                   >
//                     <ExternalLink className="h-5 w-5 mr-2" />
//                     View Resource
//                   </Button>
//                 )}
//                 <Button
//                   variant="outline"
//                   className="flex-1 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white text-base py-6"
//                   onClick={() => setSelectedNode(null)}
//                 >
//                   Close Details
//                 </Button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Instructions */}
//       <motion.div 
//         className="fixed bottom-4 left-4 z-20"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1 }}
//       >
//         <div className="bg-slate-900/90 backdrop-blur-md border border-white/20 rounded-xl p-4 max-w-sm shadow-2xl">
//           <h4 className="text-sm font-semibold text-white mb-3 flex items-center space-x-2">
//             <Eye className="h-4 w-4" />
//             <span>Navigation Guide</span>
//           </h4>
//           <ul className="text-xs text-gray-400 space-y-2">
//             <li className="flex items-center space-x-2">
//               <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
//               <span>Click and drag to explore the map</span>
//             </li>
//             <li className="flex items-center space-x-2">
//               <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
//               <span>Use zoom controls for better view</span>
//             </li>
//             <li className="flex items-center space-x-2">
//               <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
//               <span>Click nodes for detailed insights</span>
//             </li>
//             <li className="flex items-center space-x-2">
//               <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
//               <span>Gold badges indicate verified achievements</span>
//             </li>
//           </ul>
//         </div>
//       </motion.div>

//       {/* Stats Overlay */}
//       {githubData && (
//         <motion.div
//           className="fixed top-24 left-4 z-20"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.5 }}
//         >
//           <div className="bg-slate-900/90 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-2xl">
//             <h4 className="text-sm font-semibold text-white mb-3 flex items-center space-x-2">
//               <GitBranch className="h-4 w-4" />
//               <span>GitHub Overview</span>
//             </h4>
//             <div className="grid grid-cols-2 gap-3 text-xs">
//               <div className="text-center">
//                 <p className="text-yellow-400 font-bold text-lg">{githubData.totalStars}</p>
//                 <p className="text-gray-400">Stars</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-blue-400 font-bold text-lg">{githubData.profile.public_repos}</p>
//                 <p className="text-gray-400">Repos</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-green-400 font-bold text-lg">{githubData.totalForks}</p>
//                 <p className="text-gray-400">Forks</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-purple-400 font-bold text-lg">{githubData.profile.followers}</p>
//                 <p className="text-gray-400">Followers</p>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default Journey;
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";
import {
  Trophy,
  Code,
  Award,
  Briefcase,
  GraduationCap,
  Calendar,
  Shield,
  Star,
  ExternalLink,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  GitBranch,
  Users,
  Eye,
  TrendingUp,
  BookOpen,
  Target,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Helper function to get icon based on milestone type
const getIcon = (type) => {
  switch (type) {
    case "education": return GraduationCap;
    case "project": return Code;
    case "certificate": return Award;
    case "event": return Star;
    case "github": return GitBranch;
    default: return Trophy;
  }
};

// Helper function to get gradient colors based on type and verification
const getColors = (type, verified) => {
  switch (type) {
    case "education": return verified ? "from-blue-500 to-blue-700" : "from-blue-300 to-blue-500";
    case "project": return verified ? "from-purple-500 to-purple-700" : "from-purple-300 to-purple-500";
    case "certificate": return verified ? "from-green-500 to-green-700" : "from-green-300 to-green-500";
    case "event": return verified ? "from-pink-500 to-pink-700" : "from-pink-300 to-pink-500";
    case "github": return verified ? "from-orange-500 to-orange-700" : "from-orange-300 to-orange-500";
    default: return verified ? "from-gray-500 to-gray-700" : "from-gray-300 to-gray-500";
  }
};

// Updated positioning function for alternating up/down layout
const generateOptimalPositions = (nodeCount, containerWidth = 1400, containerHeight = 600) => {
  const positions = [];
  const startX = 150;
  const spacing = Math.max(280, (containerWidth - 300) / Math.max(nodeCount - 1, 1));
  const centerY = containerHeight / 2;
  const offsetY = 80; // Vertical offset for alternating pattern

  for (let i = 0; i < nodeCount; i++) {
    const isEven = i % 2 === 0;
    positions.push({
      x: startX + i * spacing,
      y: centerY + (isEven ? -offsetY : offsetY)
    });
  }

  return positions;
};

// Helper function to create connections between nodes
const createConnections = (data) => {
  const connections = [];
  const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
  for (let i = 0; i < sortedData.length - 1; i++) {
    connections.push({ from: sortedData[i], to: sortedData[i + 1] });
  }
  return connections;
};

// Helper function to extract username from GitHub URL
const extractUsername = (url) => {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.pathname.split("/")[1] || "";
  } catch {
    return "";
  }
};

// Enhanced GitHub API integration
const fetchGitHubData = async (username, token = "") => {
  try {
    const headers = token ? { Authorization: `token ${token}` } : {};
    
    const userResponse = await fetch(`https://api.github.com/users/${username}`, { headers });
    if (!userResponse.ok) throw new Error(`GitHub API error: ${userResponse.status}`);
    const userProfile = await userResponse.json();
    
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      { headers }
    );
    if (!reposResponse.ok) throw new Error(`GitHub API error: ${reposResponse.status}`);
    const repos = await reposResponse.json();
    
    const topRepos = repos
      .filter(repo => !repo.fork && repo.stargazers_count > 0)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 5);
    
    const recentRepos = repos
      .filter(repo => !repo.fork)
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      .slice(0, 3);
    
    return {
      profile: userProfile,
      topRepos,
      recentRepos,
      totalStars: repos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
      totalForks: repos.reduce((sum, repo) => sum + repo.forks_count, 0),
      languages: [...new Set(repos.map(repo => repo.language).filter(Boolean))],
    };
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return null;
  }
};

// Enhanced portfolio analysis
const analyzePortfolioWithAI = async (skills, interests, githubData) => {
  const marketSkills = [
    "React", "JavaScript", "TypeScript", "Node.js", "Python", "Java", "C++", "Go",
    "Docker", "Kubernetes", "AWS", "Azure", "GCP", "MongoDB", "PostgreSQL", "Redis",
    "GraphQL", "REST API", "Microservices", "CI/CD", "DevOps", "Machine Learning",
    "AI", "Blockchain", "Next.js", "Vue.js", "Angular", "Flutter", "React Native"
  ];
  
  const userSkills = skills || [];
  const githubLanguages = githubData?.languages || [];
  const allSkills = [...new Set([...userSkills, ...githubLanguages])];
  
  const strongSkills = allSkills.filter(skill => 
    marketSkills.some(market => 
      market.toLowerCase().includes(skill.toLowerCase()) || 
      skill.toLowerCase().includes(market.toLowerCase())
    )
  );
  
  const missingSkills = marketSkills.filter(market => 
    !allSkills.some(skill => 
      market.toLowerCase().includes(skill.toLowerCase()) || 
      skill.toLowerCase().includes(market.toLowerCase())
    )
  ).slice(0, 8);
  
  const suggestions = [
    ...missingSkills.slice(0, 3).map(skill => `Learn ${skill} through hands-on projects`),
    `Build more projects with ${strongSkills.slice(0, 2).join(" and ")}`,
    "Contribute to open-source projects to gain visibility",
    "Create technical blog posts about your projects",
    "Network with other developers in your field"
  ];
  
  return {
    strongSkills,
    missingSkills,
    suggestions,
    skillCoverage: Math.round((strongSkills.length / marketSkills.length) * 100),
    githubScore: githubData ? Math.min(100, (githubData.totalStars * 2) + (githubData.profile.public_repos * 1)) : 0
  };
};

const Journey = () => {
  const [journeyData, setJourneyData] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [githubData, setGithubData] = useState(null);
  const containerRef = useRef(null);

  // Fetch data from Firebase and GitHub
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = ref(db, `students/${user.uid}`);
        onValue(
          userRef,
          async (snapshot) => {
            try {
              if (snapshot.exists()) {
                const data = snapshot.val();
                const githubUsername = data.github ? extractUsername(data.github) : "";
                const githubToken = import.meta.env.VITE_GITHUB_TOKEN || "";
                
                let fetchedGithubData = null;
                if (githubUsername) {
                  fetchedGithubData = await fetchGitHubData(githubUsername, githubToken);
                  setGithubData(fetchedGithubData);
                }
                
                const aiAnalysis = await analyzePortfolioWithAI(data.skills, data.interests, fetchedGithubData);
                
                const baseNodes = [
                  {
                    id: 1,
                    title: "Academic Journey",
                    type: "education",
                    date: data.createdAt || new Date().toISOString(),
                    description: `Pursuing ${data.major || "Computer Science"} at ${data.university || "University"}`,
                    verified: true,
                    keyFeatures: [
                      `Major: ${data.major || "Not specified"}`,
                      `University: ${data.university || "Not specified"}`,
                      `Current Status: Active Student`,
                    ],
                    additionalDetails: {
                      overview: "Academic foundation building phase with focus on theoretical knowledge and practical skills.",
                      achievements: data.gpa ? [`GPA: ${data.gpa}`] : ["Academic performance tracking"],
                      timeline: `Started: ${new Date(data.createdAt || Date.now()).getFullYear()}`,
                      impact: "Building strong foundation for technical career"
                    }
                  },
                  {
                    id: 2,
                    title: "Technical Skills",
                    type: "project",
                    date: data.createdAt || new Date().toISOString(),
                    description: `Mastered: ${(data.skills || []).join(", ") || "Various programming languages"}`,
                    verified: true,
                    keyFeatures: (data.skills || ["Programming", "Web Development"]).map(skill => `✓ ${skill}`),
                    additionalDetails: {
                      overview: "Comprehensive skill development across multiple technology stacks.",
                      achievements: aiAnalysis.strongSkills.map(skill => `Proficient in ${skill}`),
                      metrics: `${aiAnalysis.skillCoverage}% market skill coverage`,
                      recommendations: aiAnalysis.suggestions.slice(0, 3)
                    }
                  }
                ];

                if (fetchedGithubData) {
                  baseNodes.push({
                    id: 3,
                    title: "GitHub Profile",
                    type: "github",
                    date: fetchedGithubData.profile.created_at,
                    description: `Active developer with ${fetchedGithubData.profile.public_repos} repositories and ${fetchedGithubData.totalStars} total stars`,
                    verified: true,
                    link: fetchedGithubData.profile.html_url,
                    keyFeatures: [
                      `${fetchedGithubData.profile.public_repos} Public Repositories`,
                      `${fetchedGithubData.totalStars} Total Stars`,
                      `${fetchedGithubData.profile.followers} Followers`,
                      `${fetchedGithubData.totalForks} Total Forks`
                    ],
                    additionalDetails: {
                      overview: fetchedGithubData.profile.bio || "Active open-source contributor and developer",
                      achievements: [
                        `GitHub Score: ${aiAnalysis.githubScore}/100`,
                        `Account Age: ${Math.floor((Date.now() - new Date(fetchedGithubData.profile.created_at)) / (1000 * 60 * 60 * 24 * 365))} years`,
                        `Languages: ${fetchedGithubData.languages.join(", ")}`
                      ],
                      stats: {
                        repositories: fetchedGithubData.profile.public_repos,
                        stars: fetchedGithubData.totalStars,
                        followers: fetchedGithubData.profile.followers,
                        following: fetchedGithubData.profile.following
                      }
                    }
                  });

                  fetchedGithubData.topRepos.forEach((repo, index) => {
                    baseNodes.push({
                      id: `repo-${index + 1}`,
                      title: repo.name,
                      type: "project",
                      date: repo.created_at,
                      description: repo.description || "GitHub project",
                      verified: false,
                      link: repo.html_url,
                      keyFeatures: [
                        `⭐ ${repo.stargazers_count} Stars`,
                        `🔀 ${repo.forks_count} Forks`,
                        `💻 ${repo.language || "Mixed"} Language`,
                        `📝 ${repo.size} KB Size`
                      ],
                      additionalDetails: {
                        overview: repo.description || "Open source project showcasing technical expertise",
                        achievements: [
                          `Last Updated: ${new Date(repo.updated_at).toLocaleDateString()}`,
                          `Default Branch: ${repo.default_branch}`,
                          repo.license ? `License: ${repo.license.name}` : "No license specified"
                        ],
                        metrics: `${repo.watchers_count} watchers, ${repo.open_issues_count} open issues`,
                        techStack: repo.topics || []
                      }
                    });
                  });
                }

                if (data.certifications) {
                  baseNodes.push({
                    id: 'certifications',
                    title: "Certifications",
                    type: "certificate",
                    date: data.createdAt || new Date().toISOString(),
                    description: "Professional certifications earned",
                    verified: true,
                    keyFeatures: data.certifications.split("\n").map(cert => `🏆 ${cert.trim()}`),
                    additionalDetails: {
                      overview: "Industry-recognized certifications validating technical expertise",
                      achievements: data.certifications.split("\n").map(cert => cert.trim()),
                      impact: "Enhanced credibility and validated skills in the market"
                    }
                  });
                }

                if (data.interests) {
                  baseNodes.push({
                    id: 'interests',
                    title: "Interests & Focus",
                    type: "event",
                    date: data.createdAt || new Date().toISOString(),
                    description: "Areas of passion and exploration",
                    verified: true,
                    keyFeatures: data.interests.split(", ").map(interest => `🎯 ${interest.trim()}`),
                    additionalDetails: {
                      overview: "Personal interests driving continuous learning and project development",
                      achievements: data.interests.split(", ").map(interest => `Exploring ${interest.trim()}`),
                      alignment: "Interests align with current market trends and opportunities"
                    }
                  });
                }

                baseNodes.push({
                  id: 'ai-analysis',
                  title: "AI Portfolio Analysis",
                  type: "event",
                  date: new Date().toISOString(),
                  description: "Comprehensive AI-driven insights and recommendations",
                  verified: false,
                  keyFeatures: [
                    `${aiAnalysis.skillCoverage}% Market Skill Coverage`,
                    `${aiAnalysis.strongSkills.length} Strong Skills Identified`,
                    `${aiAnalysis.missingSkills.length} Growth Opportunities`,
                    `GitHub Score: ${aiAnalysis.githubScore}/100`
                  ],
                  additionalDetails: {
                    overview: "Real-time analysis of your portfolio strength and market alignment",
                    strongSkills: aiAnalysis.strongSkills,
                    missingSkills: aiAnalysis.missingSkills,
                    recommendations: aiAnalysis.suggestions,
                    metrics: {
                      portfolioScore: aiAnalysis.skillCoverage,
                      githubEngagement: aiAnalysis.githubScore,
                      marketAlignment: "75% aligned with current trends"
                    }
                  }
                });

                const sortedForPosition = [...baseNodes].sort((a, b) => new Date(a.date) - new Date(b.date));
                const positions = generateOptimalPositions(
                  sortedForPosition.length,
                  Math.max(1400, sortedForPosition.length * 280),
                  800
                );

                const positionedNodes = sortedForPosition.map((node, index) => ({
                  ...node,
                  position: positions[index]
                }));

                setJourneyData(positionedNodes);
              } else {
                setJourneyData([]);
              }
              setLoading(false);
            } catch (error) {
              console.error("Error processing Firebase data:", error);
              setJourneyData([]);
              setLoading(false);
            }
          },
          (error) => {
            console.error("Firebase onValue error:", error);
            setJourneyData([]);
            setLoading(false);
          }
        );
      } else {
        setJourneyData([]);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  // Handle window resize to reposition nodes
  useEffect(() => {
    const handleResize = () => {
      if (journeyData.length && containerRef.current) {
        const sortedForPosition = [...journeyData].sort((a, b) => new Date(a.date) - new Date(b.date));
        const newPositions = generateOptimalPositions(
          sortedForPosition.length,
          Math.max(1400, sortedForPosition.length * 280),
          800
        );
        const newData = sortedForPosition.map((node, index) => ({
          ...node,
          position: newPositions[index]
        }));
        setJourneyData(newData);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [journeyData.length]);

  const handleZoom = (delta) => {
    setZoom(prev => Math.max(0.5, Math.min(2, prev + delta)));
  };

  const handleMouseDown = (e) => {
    if (e.target.closest(".milestone-node")) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPan({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetView = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mouseleave", handleMouseUp);
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mouseleave", handleMouseUp);
    };
  }, [isDragging, dragStart]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
          <p className="text-white text-xl">Loading your journey...</p>
          <p className="text-gray-400 text-sm mt-2">Fetching GitHub data and analyzing portfolio</p>
        </div>
      </div>
    );
  }

  if (!journeyData.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center max-w-md">
          <BookOpen className="h-16 w-16 text-purple-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">No Journey Data Found</h2>
          <p className="text-gray-400">Please complete your profile to see your personalized journey map.</p>
        </div>
      </div>
    );
  }

  const connections = createConnections(journeyData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]" />
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ 
              opacity: [0.2, 0.8, 0.2], 
              scale: [1, 1.5, 1],
              y: [0, -10, 0] 
            }}
            transition={{ 
              duration: 3 + Math.random() * 2, 
              repeat: Infinity, 
              delay: Math.random() * 2 
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Your Journey Timeline
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              An interactive visualization of your achievements, skills, and growth trajectory with real GitHub integration
            </p>
            {githubData && (
              <div className="mt-4 flex justify-center items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4" />
                  <span>{githubData.totalStars} GitHub Stars</span>
                </div>
                <div className="flex items-center space-x-1">
                  <GitBranch className="h-4 w-4" />
                  <span>{githubData.profile.public_repos} Repositories</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{githubData.profile.followers} Followers</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Controls */}
      <div className="fixed top-24 right-4 z-20 flex flex-col space-y-2">
        <Button
          onClick={() => handleZoom(0.2)}
          size="sm"
          variant="outline"
          className="glass-strong hover:bg-white/10 border-white/20"
          title="Zoom In"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button
          onClick={() => handleZoom(-0.2)}
          size="sm"
          variant="outline"
          className="glass-strong hover:bg-white/10 border-white/20"
          title="Zoom Out"
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button
          onClick={resetView}
          size="sm"
          variant="outline"
          className="glass-strong hover:bg-white/10 border-white/20"
          title="Reset View"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>

      {/* Journey Map Container - Horizontal Scroll with Alternating Layout */}
      <div
        ref={containerRef}
        className="relative h-[80vh] overflow-auto cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
      >
        <motion.div
          className="relative h-full"
          style={{ 
            width: `${Math.max(1400, journeyData.length * 280)}px`,
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: "top left"
          }}
        >
          {/* Connection Lines with Curved Paths */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {connections.map((connection, index) => {
              const { from, to } = connection;
              const startX = from.position.x + 40;
              const startY = from.position.y + 40;
              const endX = to.position.x + 40;
              const endY = to.position.y + 40;
              const midX = (startX + endX) / 2;
              const midY = (startY + endY) / 2 - 100;
              const path = `M${startX},${startY} Q${midX},${midY} ${endX},${endY}`;
              
              return (
                <motion.g key={`connection-${index}`}>
                  <defs>
                    <linearGradient
                      id={`gradient-${index}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="rgba(139, 92, 246, 0.6)" />
                      <stop offset="50%" stopColor="rgba(59, 130, 246, 0.6)" />
                      <stop offset="100%" stopColor="rgba(16, 185, 129, 0.6)" />
                    </linearGradient>
                    <filter id={`glow-${index}`}>
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <motion.path
                    d={path}
                    stroke={`url(#gradient-${index})`}
                    strokeWidth="3"
                    fill="none"
                    filter={`url(#glow-${index})`}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                  />
                  <motion.circle
                    r="4"
                    fill="white"
                    animate={{ offsetDistance: ["0%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{
                      offsetPath: `path("${path}")`,
                      offsetRotate: "auto",
                    }}
                  />
                  <motion.polygon
                    points={`${to.position.x + 30},${to.position.y + 35} ${to.position.x + 30},${to.position.y + 45} ${to.position.x + 40},${to.position.y + 40}`}
                    fill="rgba(59, 130, 246, 0.8)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  />
                </motion.g>
              );
            })}
          </svg>

          {/* Enhanced Milestone Nodes with Alternating Positions */}
          {journeyData.map((milestone, index) => {
            const Icon = getIcon(milestone.type);
            const colors = getColors(milestone.type, milestone.verified);
            return (
              <motion.div
                key={milestone.id}
                className="milestone-node absolute cursor-pointer"
                style={{
                  left: milestone.position.x,
                  top: milestone.position.y,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedNode(milestone)}
              >
                <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${colors} p-1`}>
                  {milestone.verified && (
                    <motion.div
                      className="absolute -inset-2 rounded-full border-2 border-yellow-400/50"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  )}
                  <div className="w-full h-full rounded-full bg-slate-900/20 backdrop-blur-sm flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  {milestone.verified && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Shield className="h-3 w-3 text-slate-900" />
                    </div>
                  )}
                </div>
                <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/10">
                    <p className="text-sm font-medium text-white whitespace-nowrap">
                      {milestone.title}
                    </p>
                    <p className="text-xs text-gray-400">
                      {new Date(milestone.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Enhanced Details Panel */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 25 }}
            className="fixed top-0 right-0 h-full w-[480px] bg-slate-900/95 backdrop-blur-xl border-l border-white/10 z-50 overflow-hidden flex flex-col"
          >
            <div className="p-6 border-b border-white/10 flex-shrink-0">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${getColors(selectedNode.type, selectedNode.verified)} p-1 shadow-lg`}>
                    <div className="w-full h-full rounded-lg bg-slate-900/30 backdrop-blur-sm flex items-center justify-center">
                      {React.createElement(getIcon(selectedNode.type), { 
                        className: "h-7 w-7 text-white" 
                      })}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{selectedNode.title}</h3>
                    <div className="flex items-center space-x-3 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getColors(selectedNode.type, selectedNode.verified)} text-white`}>
                        {selectedNode.type}
                      </span>
                      {selectedNode.verified && (
                        <div className="flex items-center space-x-1 text-yellow-400">
                          <Shield className="h-3 w-3" />
                          <span className="text-xs">Verified</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedNode(null)}
                  className="hover:bg-white/10 text-gray-400 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-slate-800">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4 border border-white/10 shadow-sm">
                  <div className="flex items-center space-x-2 text-gray-300 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">Date</span>
                  </div>
                  <p className="text-base text-white font-medium">
                    {new Date(selectedNode.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                
                {selectedNode.link && (
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-white/10 shadow-sm">
                    <div className="flex items-center space-x-2 text-gray-300 mb-2">
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm font-medium">Link</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 text-blue-400 hover:text-blue-300 text-base"
                      onClick={() => window.open(selectedNode.link, '_blank')}
                    >
                      View Resource
                    </Button>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white flex items-center space-x-2">
                  <BookOpen className="h-5 w-5" />
                  <span>Overview</span>
                </h4>
                <p className="text-gray-300 leading-relaxed text-base bg-slate-800/30 p-5 rounded-xl border border-white/5 shadow-sm">
                  {selectedNode.description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>Key Highlights</span>
                </h4>
                <div className="grid gap-3">
                  {selectedNode.keyFeatures?.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-4 bg-slate-800/30 rounded-xl border border-white/5 shadow-sm"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex-shrink-0" />
                      <span className="text-base text-gray-300">{feature}</span>
                    </motion.div>
                  )) || (
                    <p className="text-gray-500 text-base italic p-4 bg-slate-800/30 rounded-xl border border-white/5">No key features available</p>
                  )}
                </div>
              </div>

              {selectedNode.additionalDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="space-y-4"
                >
                  <h4 className="text-base font-semibold text-white flex items-center space-x-2">
                    <Lightbulb className="h-5 w-5" />
                    <span>Detailed Insights</span>
                  </h4>
                  
                  {typeof selectedNode.additionalDetails === 'object' ? (
                    <div className="space-y-4">
                      {selectedNode.additionalDetails.overview && (
                        <div className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 p-5 rounded-xl border border-white/10 shadow-sm">
                          <h5 className="text-base font-medium text-white mb-3">Overview</h5>
                          <p className="text-base text-gray-300 leading-relaxed">
                            {selectedNode.additionalDetails.overview}
                          </p>
                        </div>
                      )}

                      {selectedNode.additionalDetails.achievements && (
                        <div className="bg-gradient-to-r from-emerald-900/20 to-emerald-800/20 p-5 rounded-xl border border-emerald-500/20 shadow-sm">
                          <h5 className="text-base font-medium text-emerald-400 mb-3 flex items-center space-x-2">
                            <Trophy className="h-5 w-5" />
                            <span>Achievements</span>
                          </h5>
                          <div className="space-y-3">
                            {selectedNode.additionalDetails.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-center space-x-3">
                                <div className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                                <span className="text-base text-gray-300">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {(selectedNode.additionalDetails.metrics || selectedNode.additionalDetails.stats) && (
                        <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 p-5 rounded-xl border border-blue-500/20 shadow-sm">
                          <h5 className="text-base font-medium text-blue-400 mb-3 flex items-center space-x-2">
                            <TrendingUp className="h-5 w-5" />
                            <span>Performance Metrics</span>
                          </h5>
                          {(() => {
                            const metricsData = selectedNode.additionalDetails.metrics || selectedNode.additionalDetails.stats;
                            return typeof metricsData === 'object' ? (
                              <div className="grid grid-cols-2 gap-4">
                                {Object.entries(metricsData).map(([key, value]) => (
                                  <div key={key} className="bg-slate-800/50 p-3 rounded-lg text-center shadow-inner">
                                    <p className="text-xl font-bold text-white">{value}</p>
                                    <p className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p className="text-base text-gray-300">{metricsData}</p>
                            );
                          })()}
                        </div>
                      )}

                      {selectedNode.additionalDetails.recommendations && (
                        <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 p-5 rounded-xl border border-purple-500/20 shadow-sm">
                          <h5 className="text-base font-medium text-purple-400 mb-3 flex items-center space-x-2">
                            <Lightbulb className="h-5 w-5" />
                            <span>Recommendations</span>
                          </h5>
                          <div className="space-y-3">
                            {selectedNode.additionalDetails.recommendations.map((rec, idx) => (
                              <div key={idx} className="flex items-start space-x-3">
                                <div className="w-2 h-2 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                                <span className="text-base text-gray-300 leading-relaxed">{rec}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedNode.additionalDetails.strongSkills && (
                        <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 p-5 rounded-xl border border-green-500/20 shadow-sm">
                          <h5 className="text-base font-medium text-green-400 mb-3">Strong Skills</h5>
                          <div className="flex flex-wrap gap-2">
                            {selectedNode.additionalDetails.strongSkills.map((skill, idx) => (
                              <span key={idx} className="px-3 py-1.5 bg-green-500/20 text-green-300 rounded-md text-base">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedNode.additionalDetails.missingSkills && (
                        <div className="bg-gradient-to-r from-orange-900/20 to-orange-800/20 p-5 rounded-xl border border-orange-500/20 shadow-sm">
                          <h5 className="text-base font-medium text-orange-400 mb-3">Growth Opportunities</h5>
                          <div className="flex flex-wrap gap-2">
                            {selectedNode.additionalDetails.missingSkills.map((skill, idx) => (
                              <span key={idx} className="px-3 py-1.5 bg-orange-500/20 text-orange-300 rounded-md text-base">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="bg-slate-800/30 p-5 rounded-xl border border-white/5 shadow-sm">
                      <div className="prose prose-invert prose-base max-w-none">
                        <div 
                          dangerouslySetInnerHTML={{ 
                            __html: selectedNode.additionalDetails.replace(/\n/g, "<br />") 
                          }} 
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              <div className="flex space-x-3 pt-4 border-t border-white/10 flex-shrink-0">
                {selectedNode.link && (
                  <Button
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 text-base py-6"
                    onClick={() => window.open(selectedNode.link, '_blank')}
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    View Resource
                  </Button>
                )}
                <Button
                  variant="outline"
                  className="flex-1 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white text-base py-6"
                  onClick={() => setSelectedNode(null)}
                >
                  Close Details
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instructions */}
      <motion.div 
        className="fixed bottom-4 left-4 z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="bg-slate-900/90 backdrop-blur-md border border-white/20 rounded-xl p-4 max-w-sm shadow-2xl">
          <h4 className="text-sm font-semibold text-white mb-3 flex items-center space-x-2">
            <Eye className="h-4 w-4" />
            <span>Navigation Guide</span>
          </h4>
          <ul className="text-xs text-gray-400 space-y-2">
            <li className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>Click and drag to explore the map</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>Use zoom controls for better view</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span>Click nodes for detailed insights</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <span>Gold badges indicate verified achievements</span>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Stats Overlay */}
      {githubData && (
        <motion.div
          className="fixed top-24 left-4 z-20"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-slate-900/90 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-2xl">
            <h4 className="text-sm font-semibold text-white mb-3 flex items-center space-x-2">
              <GitBranch className="h-4 w-4" />
              <span>GitHub Overview</span>
            </h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="text-center">
                <p className="text-yellow-400 font-bold text-lg">{githubData.totalStars}</p>
                <p className="text-gray-400">Stars</p>
              </div>
              <div className="text-center">
                <p className="text-blue-400 font-bold text-lg">{githubData.profile.public_repos}</p>
                <p className="text-gray-400">Repos</p>
              </div>
              <div className="text-center">
                <p className="text-green-400 font-bold text-lg">{githubData.totalForks}</p>
                <p className="text-gray-400">Forks</p>
              </div>
              <div className="text-center">
                <p className="text-purple-400 font-bold text-lg">{githubData.profile.followers}</p>
                <p className="text-gray-400">Followers</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Journey;
