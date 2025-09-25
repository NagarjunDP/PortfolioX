// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Calendar, 
//   MapPin, 
//   Users, 
//   Trophy, 
//   Clock,
//   Star,
//   Award,
//   Zap,
//   ExternalLink,
//   Heart,
//   Share2,
//   Filter,
//   Search,
//   Plus,
//   Code,
//   Palette,
//   Brain,
//   Smartphone,
//   Globe,
//   Shield,
//   Sparkles,
//   Eye,
//   Download
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Badge } from '@/components/ui/badge';

// const Hackathons = () => {
//   const [activeTab, setActiveTab] = useState('upcoming');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('all');

//   const categories = [
//     { id: 'all', label: 'All', icon: Globe },
//     { id: 'web', label: 'Web Dev', icon: Code },
//     { id: 'mobile', label: 'Mobile', icon: Smartphone },
//     { id: 'ai', label: 'AI/ML', icon: Brain },
//     { id: 'design', label: 'Design', icon: Palette },
//     { id: 'blockchain', label: 'Blockchain', icon: Shield }
//   ];

//   const hackathons = [
//     {
//       id: 1,
//       title: 'MIT AI Innovation Challenge 2024',
//       description: 'Build the next generation of AI-powered applications that solve real-world problems.',
//       organizer: 'MIT',
//       date: '2024-02-15',
//       endDate: '2024-02-17',
//       location: 'Cambridge, MA',
//       type: 'In-Person',
//       category: 'ai',
//       participants: 1247,
//       maxParticipants: 1500,
//       prize: '$50,000',
//       difficulty: 'Advanced',
//       status: 'upcoming',
//       image: '/api/placeholder/400/200',
//       tags: ['AI', 'Machine Learning', 'Innovation'],
//       sponsors: ['Google', 'Microsoft', 'OpenAI'],
//       nftBadge: {
//         name: 'AI Pioneer',
//         rarity: 'Legendary',
//         design: 'holographic'
//       }
//     },
//     {
//       id: 2,
//       title: 'Stanford Design Thinking Hackathon',
//       description: 'Create user-centered solutions using design thinking methodology.',
//       organizer: 'Stanford University',
//       date: '2024-02-22',
//       endDate: '2024-02-24',
//       location: 'Palo Alto, CA',
//       type: 'Hybrid',
//       category: 'design',
//       participants: 892,
//       maxParticipants: 1000,
//       prize: '$25,000',
//       difficulty: 'Intermediate',
//       status: 'upcoming',
//       image: '/api/placeholder/400/200',
//       tags: ['Design', 'UX/UI', 'Innovation'],
//       sponsors: ['Adobe', 'Figma', 'IDEO'],
//       nftBadge: {
//         name: 'Design Master',
//         rarity: 'Epic',
//         design: 'gradient'
//       }
//     },
//     {
//       id: 3,
//       title: 'Berkeley Blockchain Summit',
//       description: 'Develop decentralized applications and explore Web3 technologies.',
//       organizer: 'UC Berkeley',
//       date: '2024-01-20',
//       endDate: '2024-01-22',
//       location: 'Berkeley, CA',
//       type: 'In-Person',
//       category: 'blockchain',
//       participants: 567,
//       maxParticipants: 800,
//       prize: '$30,000',
//       difficulty: 'Advanced',
//       status: 'completed',
//       image: '/api/placeholder/400/200',
//       tags: ['Blockchain', 'Web3', 'DeFi'],
//       sponsors: ['Ethereum', 'Coinbase', 'Polygon'],
//       nftBadge: {
//         name: 'Blockchain Builder',
//         rarity: 'Rare',
//         design: 'animated'
//       }
//     }
//   ];

//   const participants = [
//     {
//       id: 1,
//       name: 'Alex Johnson',
//       avatar: '👨‍💻',
//       university: 'MIT',
//       skills: ['React', 'Python', 'AI'],
//       achievements: 15,
//       hackathonsWon: 3,
//       verified: true,
//       team: 'Team Alpha'
//     },
//     {
//       id: 2,
//       name: 'Sarah Chen',
//       avatar: '👩‍🎨',
//       university: 'Stanford',
//       skills: ['Design', 'Figma', 'React'],
//       achievements: 12,
//       hackathonsWon: 2,
//       verified: true,
//       team: 'Design Masters'
//     },
//     {
//       id: 3,
//       name: 'Marcus Rodriguez',
//       avatar: '👨‍🔬',
//       university: 'UC Berkeley',
//       skills: ['Python', 'ML', 'Data'],
//       achievements: 8,
//       hackathonsWon: 1,
//       verified: true,
//       team: 'Data Wizards'
//     }
//   ];

//   const nftCertificates = [
//     {
//       id: 1,
//       name: 'Hackathon Champion',
//       event: 'MIT AI Challenge 2024',
//       rarity: 'Legendary',
//       owner: 'Alex Johnson',
//       mintDate: '2024-01-22',
//       verified: true,
//       design: 'holographic'
//     },
//     {
//       id: 2,
//       name: 'Innovation Award',
//       event: 'Stanford Design Hackathon',
//       rarity: 'Epic',
//       owner: 'Sarah Chen',
//       mintDate: '2024-01-15',
//       verified: true,
//       design: 'gradient'
//     },
//     {
//       id: 3,
//       name: 'Best Technical Implementation',
//       event: 'Berkeley Blockchain Summit',
//       rarity: 'Rare',
//       owner: 'Marcus Rodriguez',
//       mintDate: '2024-01-10',
//       verified: true,
//       design: 'animated'
//     }
//   ];

//   const tabs = [
//     { id: 'upcoming', label: 'Upcoming' },
//     { id: 'ongoing', label: 'Ongoing' },
//     { id: 'completed', label: 'Completed' }
//   ];

//   const getDifficultyColor = (difficulty) => {
//     switch (difficulty) {
//       case 'Beginner':
//         return 'bg-green-500/20 text-green-400 border-green-500/30';
//       case 'Intermediate':
//         return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
//       case 'Advanced':
//         return 'bg-red-500/20 text-red-400 border-red-500/30';
//       default:
//         return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
//     }
//   };

//   const getRarityColor = (rarity) => {
//     switch (rarity) {
//       case 'Legendary':
//         return 'from-yellow-400 via-orange-500 to-red-500';
//       case 'Epic':
//         return 'from-purple-400 via-pink-500 to-red-500';
//       case 'Rare':
//         return 'from-blue-400 via-cyan-500 to-teal-500';
//       default:
//         return 'from-gray-400 to-gray-600';
//     }
//   };

//   return (
//     <div className="min-h-screen pt-20 pb-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6 hover-glow">
//             <Sparkles className="h-4 w-4 text-primary mr-2" />
//             <span className="text-sm font-medium">Innovation Challenges</span>
//           </div>
          
//           <h1 className="text-4xl md:text-6xl font-space font-bold mb-6">
//             <span className="neon-text">Hackathons</span>
//           </h1>
          
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
//             Join exciting hackathons, showcase your skills, and earn verified NFT certificates 
//             for your achievements.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button className="gradient-purple-cyan hover-lift">
//               <Plus className="h-4 w-4 mr-2" />
//               Host Hackathon
//             </Button>
//             <Button variant="outline" className="glass hover-glow">
//               <Calendar className="h-4 w-4 mr-2" />
//               View Calendar
//             </Button>
//           </div>
//         </motion.div>

//         {/* Tabs and Filters */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="flex flex-col lg:flex-row justify-between items-center mb-8 space-y-4 lg:space-y-0"
//         >
//           {/* Tabs */}
//           <div className="flex space-x-1 glass rounded-lg p-1">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
//                   activeTab === tab.id
//                     ? 'bg-primary text-primary-foreground shadow-lg'
//                     : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>

//           {/* Search and Category Filter */}
//           <div className="flex space-x-4">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//               <Input
//                 placeholder="Search hackathons..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="pl-10 glass"
//               />
//             </div>
            
//             <div className="flex space-x-1 glass rounded-lg p-1">
//               {categories.map((category) => {
//                 const Icon = category.icon;
//                 return (
//                   <button
//                     key={category.id}
//                     onClick={() => setSelectedCategory(category.id)}
//                     className={`flex items-center space-x-1 px-3 py-2 rounded-md text-xs font-medium transition-all duration-300 ${
//                       selectedCategory === category.id
//                         ? 'bg-primary text-primary-foreground'
//                         : 'text-muted-foreground hover:text-foreground'
//                     }`}
//                   >
//                     <Icon className="h-3 w-3" />
//                     <span>{category.label}</span>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </motion.div>

//         {/* Hackathons Grid */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12"
//         >
//           {hackathons.map((hackathon, index) => (
//             <motion.div
//               key={hackathon.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="glass-card rounded-xl overflow-hidden hover-lift group"
//             >
//               {/* Event Image */}
//               <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//                 <div className="absolute top-4 left-4">
//                   <Badge className={`${getDifficultyColor(hackathon.difficulty)} border`}>
//                     {hackathon.difficulty}
//                   </Badge>
//                 </div>
//                 <div className="absolute top-4 right-4">
//                   <div className="flex space-x-2">
//                     <Button variant="ghost" size="sm" className="glass">
//                       <Heart className="h-4 w-4" />
//                     </Button>
//                     <Button variant="ghost" size="sm" className="glass">
//                       <Share2 className="h-4 w-4" />
//                     </Button>
//                   </div>
//                 </div>
//                 <div className="absolute bottom-4 left-4 right-4">
//                   <h3 className="text-lg font-semibold font-space text-white mb-2">
//                     {hackathon.title}
//                   </h3>
//                   <div className="flex items-center text-white/80 text-sm">
//                     <Calendar className="h-4 w-4 mr-1" />
//                     <span>{hackathon.date} - {hackathon.endDate}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Event Details */}
//               <div className="p-6">
//                 <p className="text-muted-foreground text-sm mb-4">
//                   {hackathon.description}
//                 </p>

//                 <div className="space-y-3 mb-4">
//                   <div className="flex items-center justify-between text-sm">
//                     <div className="flex items-center text-muted-foreground">
//                       <MapPin className="h-4 w-4 mr-1" />
//                       <span>{hackathon.location}</span>
//                     </div>
//                     <Badge variant="outline">{hackathon.type}</Badge>
//                   </div>

//                   <div className="flex items-center justify-between text-sm">
//                     <div className="flex items-center text-muted-foreground">
//                       <Users className="h-4 w-4 mr-1" />
//                       <span>{hackathon.participants}/{hackathon.maxParticipants}</span>
//                     </div>
//                     <div className="flex items-center text-primary">
//                       <Trophy className="h-4 w-4 mr-1" />
//                       <span className="font-semibold">{hackathon.prize}</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Tags */}
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {hackathon.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="px-2 py-1 bg-primary/20 text-primary rounded text-xs"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {/* NFT Badge Preview */}
//                 <div className="glass rounded-lg p-3 mb-4 holographic">
//                   <div className="flex items-center space-x-3">
//                     <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 p-2">
//                       <Award className="h-6 w-6 text-white" />
//                     </div>
//                     <div>
//                       <p className="text-sm font-medium">NFT Certificate</p>
//                       <p className="text-xs text-muted-foreground">
//                         {hackathon.nftBadge.name} • {hackathon.nftBadge.rarity}
//                       </p>
//                     </div>
//                     <Zap className="h-4 w-4 text-primary ml-auto" />
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex space-x-2">
//                   <Button className="flex-1 gradient-purple-cyan hover-lift">
//                     {hackathon.status === 'upcoming' ? 'Register' : 'View Results'}
//                   </Button>
//                   <Button variant="outline" className="glass hover-glow">
//                     <Eye className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Participants Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="mb-12"
//         >
//           <h2 className="text-2xl font-space font-bold mb-6">Featured Participants</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {participants.map((participant, index) => (
//               <motion.div
//                 key={participant.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="flip-card h-64"
//               >
//                 <div className="flip-card-inner h-full">
//                   {/* Front */}
//                   <div className="flip-card-front absolute inset-0 glass-card rounded-xl p-6 flex flex-col items-center justify-center text-center">
//                     <div className="text-4xl mb-3">{participant.avatar}</div>
//                     <h3 className="font-semibold font-space mb-1">{participant.name}</h3>
//                     <p className="text-sm text-muted-foreground mb-2">{participant.university}</p>
//                     <p className="text-xs text-muted-foreground mb-4">{participant.team}</p>
                    
//                     {participant.verified && (
//                       <div className="flex items-center text-primary">
//                         <Zap className="h-4 w-4 mr-1" />
//                         <span className="text-xs">Verified</span>
//                       </div>
//                     )}
//                   </div>

//                   {/* Back */}
//                   <div className="flip-card-back absolute inset-0 glass-card rounded-xl p-6">
//                     <div className="h-full flex flex-col justify-between">
//                       <div>
//                         <h4 className="font-semibold mb-3">Skills</h4>
//                         <div className="flex flex-wrap gap-2 mb-4">
//                           {participant.skills.map((skill) => (
//                             <span
//                               key={skill}
//                               className="px-2 py-1 bg-primary/20 text-primary rounded text-xs"
//                             >
//                               {skill}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
                      
//                       <div className="grid grid-cols-2 gap-4 text-center">
//                         <div>
//                           <div className="text-lg font-bold">{participant.achievements}</div>
//                           <div className="text-xs text-muted-foreground">Achievements</div>
//                         </div>
//                         <div>
//                           <div className="text-lg font-bold">{participant.hackathonsWon}</div>
//                           <div className="text-xs text-muted-foreground">Wins</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* NFT Certificates */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           <h2 className="text-2xl font-space font-bold mb-6">NFT Certificates</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {nftCertificates.map((certificate, index) => (
//               <motion.div
//                 key={certificate.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="glass-card rounded-xl p-6 hover-lift holographic"
//               >
//                 <div className="text-center mb-4">
//                   <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-r ${getRarityColor(certificate.rarity)} p-4 mb-3`}>
//                     <Award className="h-8 w-8 text-white" />
//                   </div>
                  
//                   <h3 className="font-semibold font-space mb-1">{certificate.name}</h3>
//                   <p className="text-sm text-muted-foreground mb-2">{certificate.event}</p>
                  
//                   <Badge className={`bg-gradient-to-r ${getRarityColor(certificate.rarity)} text-white border-0`}>
//                     {certificate.rarity}
//                   </Badge>
//                 </div>

//                 <div className="space-y-2 text-sm">
//                   <div className="flex justify-between">
//                     <span className="text-muted-foreground">Owner:</span>
//                     <span>{certificate.owner}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-muted-foreground">Minted:</span>
//                     <span>{certificate.mintDate}</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-muted-foreground">Status:</span>
//                     <div className="flex items-center text-green-500">
//                       <Zap className="h-3 w-3 mr-1" />
//                       <span className="text-xs">Verified</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex space-x-2 mt-4">
//                   <Button variant="outline" size="sm" className="flex-1 glass hover-glow">
//                     <Eye className="h-4 w-4 mr-2" />
//                     View
//                   </Button>
//                   <Button variant="outline" size="sm" className="glass hover-glow">
//                     <Download className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Hackathons;



// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   Calendar,
//   MapPin,
//   Users,
//   Trophy,
//   Clock,
//   Star,
//   Award,
//   Zap,
//   ExternalLink,
//   Heart,
//   Share2,
//   Filter,
//   Search,
//   Plus,
//   Code,
//   Palette,
//   Brain,
//   Smartphone,
//   Globe,
//   Shield,
//   Sparkles,
//   Eye,
//   Download,
//   X,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Badge } from "@/components/ui/badge";
// import { getAuth } from "firebase/auth";
// import { ref as dbRef, onValue, set } from "firebase/database";
// import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
// import { db } from "../firebase";

// const Hackathons = () => {
//   const [activeTab, setActiveTab] = useState("ongoing");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [hackathons, setHackathons] = useState([]);
//   const [participants, setParticipants] = useState([]);
//   const [nftCertificates, setNftCertificates] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showHostForm, setShowHostForm] = useState(false);
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     organizer: "",
//     date: "",
//     endDate: "",
//     location: "",
//     type: "In-Person",
//     category: "all",
//     participants: 0,
//     maxParticipants: 100,
//     prize: "",
//     difficulty: "Intermediate",
//     status: "ongoing",
//     image: null,
//     tags: [],
//     sponsors: [],
//     nftBadge: { name: "Hackathon Badge", rarity: "Rare", design: "gradient" },
//   });
//   const [imageFile, setImageFile] = useState(null);

//   const categories = [
//     { id: "all", label: "All", icon: Globe },
//     { id: "web", label: "Web Dev", icon: Code },
//     { id: "mobile", label: "Mobile", icon: Smartphone },
//     { id: "ai", label: "AI/ML", icon: Brain },
//     { id: "design", label: "Design", icon: Palette },
//     { id: "blockchain", label: "Blockchain", icon: Shield },
//   ];

//   const tabs = [
//     { id: "upcoming", label: "Upcoming" },
//     { id: "ongoing", label: "Ongoing" },
//     { id: "completed", label: "Completed" },
//   ];

//   // Add HACC-IT hackathon to Firebase on component mount
//   useEffect(() => {
//     const haccItData = {
//       title: "HACC-IT Hackathon 2025",
//       description:
//         "Innovate with AI in Education, Agriculture, Fintech, and Student Innovation at REVA University.",
//       organizer: "C&IT Department, REVA University",
//       date: "2025-09-25",
//       endDate: "2025-09-27",
//       location: "Reva Rangasthala, Bangalore, India",
//       type: "In-Person",
//       category: "ai",
//       participants: 40,
//       maxParticipants: 40,
//       prize: "₹10,000",
//       difficulty: "Intermediate",
//       status: "ongoing",
//       image: "https://i.postimg.cc/d0fbVQ80/temp-Imagei-Wf-Ox-F.avif", // Will be updated after image upload
//       tags: ["AI in Education", "AI in Agriculture", "AI in Fintech", "Student Innovation"],
//       sponsors: ["REVA University", "HACC"],
//       nftBadge: {
//         name: "HACC-IT Innovator",
//         rarity: "Epic",
//         design: "holographic",
//       },
//     };

//     const haccItRef = dbRef(db, "hackathons/hacc-it-2025");
//     set(haccItRef, haccItData).catch((err) =>
//       console.error("Error adding HACC-IT hackathon:", err)
//     );

//     // Optionally upload an image for HACC-IT
//     // Since you mentioned you'll upload an image, this is handled in the form below
//   }, []);

//   // Fetch hackathons, participants, and NFT certificates from Firebase
//   useEffect(() => {
//     setLoading(true);
//     setError(null);

//     // Fetch hackathons
//     const hackathonsRef = dbRef(db, "hackathons");
//     onValue(
//       hackathonsRef,
//       (snapshot) => {
//         if (snapshot.exists()) {
//           const data = snapshot.val();
//           const loadedHackathons = Object.entries(data)
//             .map(([id, value]) => ({ id, ...value }))
//             .sort((a, b) => (b.date || 0) - (a.date || 0));
//           setHackathons(loadedHackathons);
//         } else {
//           setHackathons([]);
//         }
//         setLoading(false);
//       },
//       (err) => {
//         setError("Failed to fetch hackathons");
//         setLoading(false);
//         console.error("Error fetching hackathons:", err);
//       }
//     );
    
//     const handleCreatePost = async () => {
//       if (!newPost.trim() && !imageFile) return;
//       setUploading(true);
    
//       try {
//         let imageUrl = null;
//         if (imageFile) {
//           const formData = new FormData();
//           formData.append("upload", imageFile);
//           const response = await fetch("https://postimg.cc/yJFQfHpq", {
//             method: "POST",
//             body: formData,
//           });
//           const data = await response.json();
//           if (data.status === "OK") {
//             imageUrl = data.url;
//           } else {
//             throw new Error("Postimages upload failed");
//           }
//         }
    
//         const postRef = push(dbRef(db, "posts"));
//         await update(postRef, {
//           user: {
//             name: githubUsername ? `@${githubUsername}` : `@${user.uid.slice(0, 8)}`,
//             username: user.email || "",
//             avatar: user.photoURL || "👤",
//           },
//           content: {
//             description: newPost,
//             image: imageUrl,
//           },
//           stats: { likes: 0, comments: 0, shares: 0, views: 0 },
//           createdAt: Date.now(),
//           type: "post",
//         });
    
//         setNewPost("");
//         setImageFile(null);
//       } catch (error) {
//         console.error("Error creating post:", error);
//       } finally {
//         setUploading(false);
//       }
//     };
//     // Fetch participants
//     const participantsRef = dbRef(db, "participants");
//     onValue(
//       participantsRef,
//       (snapshot) => {
//         if (snapshot.exists()) {
//           const data = snapshot.val();
//           const loadedParticipants = Object.entries(data).map(([id, value]) => ({
//             id,
//             ...value,
//           }));
//           setParticipants(loadedParticipants);
//         } else {
//           setParticipants([]);
//         }
//       },
//       (err) => {
//         console.error("Error fetching participants:", err);
//       }
//     );

//     // Fetch NFT certificates
//     const nftCertificatesRef = dbRef(db, "nftCertificates");
//     onValue(
//       nftCertificatesRef,
//       (snapshot) => {
//         if (snapshot.exists()) {
//           const data = snapshot.val();
//           const loadedCertificates = Object.entries(data).map(([id, value]) => ({
//             id,
//             ...value,
//           }));
//           setNftCertificates(loadedCertificates);
//         } else {
//           setNftCertificates([]);
//         }
//       },
//       (err) => {
//         console.error("Error fetching NFT certificates:", err);
//       }
//     );
//   }, []);

//   const getDifficultyColor = (difficulty) => {
//     switch (difficulty) {
//       case "Beginner":
//         return "bg-green-500/20 text-green-400 border-green-500/30";
//       case "Intermediate":
//         return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
//       case "Advanced":
//         return "bg-red-500/20 text-red-400 border-red-500/30";
//       default:
//         return "bg-gray-500/20 text-gray-400 border-gray-500/30";
//     }
//   };

//   const getRarityColor = (rarity) => {
//     switch (rarity) {
//       case "Legendary":
//         return "from-yellow-400 via-orange-500 to-red-500";
//       case "Epic":
//         return "from-purple-400 via-pink-500 to-red-500";
//       case "Rare":
//         return "from-blue-400 via-cyan-500 to-teal-500";
//       default:
//         return "from-gray-400 to-gray-600";
//     }
//   };

//   // Handle form input changes
//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: name === "tags" || name === "sponsors" ? value.split(",").map((item) => item.trim()) : value,
//     }));
//   };

//   // Handle image file selection
//   const handleImageChange = (e) => {
//     setImageFile(e.target.files[0]);
//   };

//   // Handle form submission
//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.title || !formData.description || !formData.organizer || !formData.date) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     try {
//       const hackathonId = formData.title.toLowerCase().replace(/\s+/g, "-") + "-" + Date.now();
//       let imageUrl = "";
//       if (imageFile) {
//         const imageRef = storageRef(storage, `hackathon_images/${hackathonId}_${imageFile.name}`);
//         await uploadBytes(imageRef, imageFile);
//         imageUrl = await getDownloadURL(imageRef);
//       }

//       const newHackathon = {
//         ...formData,
//         image: imageUrl,
//         participants: parseInt(formData.participants) || 0,
//         maxParticipants: parseInt(formData.maxParticipants) || 100,
//       };

//       await set(dbRef(db, `hackathons/${hackathonId}`), newHackathon);
//       setShowHostForm(false);
//       setFormData({
//         title: "",
//         description: "",
//         organizer: "",
//         date: "",
//         endDate: "",
//         location: "",
//         type: "In-Person",
//         category: "all",
//         participants: 0,
//         maxParticipants: 100,
//         prize: "",
//         difficulty: "Intermediate",
//         status: "ongoing",
//         image: null,
//         tags: [],
//         sponsors: [],
//         nftBadge: { name: "Hackathon Badge", rarity: "Rare", design: "gradient" },
//       });
//       setImageFile(null);
//       alert("Hackathon submitted successfully!");
//     } catch (err) {
//       console.error("Error submitting hackathon:", err);
//       alert("Failed to submit hackathon. Please try again.");
//     }
//   };

//   // Filter hackathons based on tab, category, and search query
//   const filteredHackathons = hackathons.filter((hackathon) => {
//     const matchesTab = activeTab === "all" || hackathon.status === activeTab;
//     const matchesCategory =
//       selectedCategory === "all" || hackathon.category === selectedCategory;
//     const matchesSearch = hackathon.title
//       ?.toLowerCase()
//       .includes(searchQuery.toLowerCase());
//     return matchesTab && matchesCategory && matchesSearch;
//   });

//   return (
//     <div className="min-h-screen pt-20 pb-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6 hover-glow">
//             <Sparkles className="h-4 w-4 text-primary mr-2" />
//             <span className="text-sm font-medium">Innovation Challenges</span>
//           </div>

//           <h1 className="text-4xl md:text-6xl font-space font-bold mb-6">
//             <span className="neon-text">Hackathons</span>
//           </h1>

//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
//             Join exciting hackathons, showcase your skills, and earn verified NFT certificates
//             for your achievements.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button
//               className="gradient-purple-cyan hover-lift"
//               onClick={() => setShowHostForm(true)}
//             >
//               <Plus className="h-4 w-4 mr-2" />
//               Host Hackathon
//             </Button>
//             <Button variant="outline" className="glass hover-glow">
//               <Calendar className="h-4 w-4 mr-2" />
//               View Calendar
//             </Button>
//           </div>
//         </motion.div>

//         {/* Host Hackathon Form */}
//         {showHostForm && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
//           >
//             <div className="glass-card rounded-xl p-6 max-w-lg w-full">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-2xl font-space font-bold">Host a Hackathon</h2>
//                 <Button
//                   variant="ghost"
//                   onClick={() => setShowHostForm(false)}
//                   className="text-muted-foreground"
//                 >
//                   <X className="h-5 w-5" />
//                 </Button>
//               </div>
//               <form onSubmit={handleFormSubmit} className="space-y-4">
//                 <div>
//                   <label className="text-sm font-medium">Title *</label>
//                   <Input
//                     name="title"
//                     value={formData.title}
//                     onChange={handleFormChange}
//                     placeholder="Hackathon Title"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="text-sm font-medium">Description *</label>
//                   <Input
//                     name="description"
//                     value={formData.description}
//                     onChange={handleFormChange}
//                     placeholder="Brief description of the hackathon"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="text-sm font-medium">Organizer *</label>
//                   <Input
//                     name="organizer"
//                     value={formData.organizer}
//                     onChange={handleFormChange}
//                     placeholder="Organizer Name"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="text-sm font-medium">Start Date *</label>
//                   <Input
//                     type="date"
//                     name="date"
//                     value={formData.date}
//                     onChange={handleFormChange}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="text-sm font-medium">End Date</label>
//                   <Input
//                     type="date"
//                     name="endDate"
//                     value={formData.endDate}
//                     onChange={handleFormChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="text-sm font-medium">Location</label>
//                   <Input
//                     name="location"
//                     value={formData.location}
//                     onChange={handleFormChange}
//                     placeholder="Venue or 'Online'"
//                   />
//                 </div>
//                 <div>
//                   <label className="text-sm font-medium">Type</label>
//                   <select
//                     name="type"
//                     value={formData.type}
//                     onChange={handleFormChange}
//                     className="w-full p-2 rounded-md bg-background border border-input"
//                   >
//                     <option value="In-Person">In-Person</option>
//                     <option value="Online">Online</option>
//                     <option value="Hybrid">Hybrid</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="text-sm font-medium">Category</label>
//                   <select
//                     name="category"
//                     value={formData.category}
//                     onChange={handleFormChange}
//                     className="w-full p-2 rounded-md bg-background border border-input"
//                   >
//                     {categories.map((cat) => (
//                       <option key={cat.id} value={cat.id}>
//                         {cat.label}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <div>
//                   <label className="text-sm font-medium">Participants</label>
//                   <Input
//                     type="number"
//                     name="participants"
//                     value={formData.participants}
//                     onChange={handleFormChange}
//                     placeholder="Current participants"
//                   />
//                 </div>
//                 <div>
//                   <label className="text-sm font-medium">Max Participants</label>
//                   <Input
//                     type="number"
//                     name="maxParticipants"
//                     value={formData.maxParticipants}
//                     onChange={handleFormChange}
//                     placeholder="Maximum participants"
//                   />
//                 </div>
//                 <div>
//                   <label className="text-sm font-medium">Prize Pool</label>
//                   <Input
//                     name="prize"
//                     value={formData.prize}
//                     onChange={handleFormChange}
//                     placeholder="e.g., ₹10,000"
//                   />
//                 </div>
//                 <div>
//                   <label className="text-sm font-medium">Difficulty</label>
//                   <select
//                     name="difficulty"
//                     value={formData.difficulty}
//                     onChange={handleFormChange}
//                     className="w-full p-2 rounded-md bg-background border border-input"
//                   >
//                     <option value="Beginner">Beginner</option>
//                     <option value="Intermediate">Intermediate</option>
//                     <option value="Advanced">Advanced</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="text-sm font-medium">Tags (comma-separated)</label>
//                   <Input
//                     name="tags"
//                     value={formData.tags.join(", ")}
//                     onChange={handleFormChange}
//                     placeholder="e.g., AI, Education, Fintech"
//                   />
//                 </div>
//                 <div>
//                   <label className="text-sm font-medium">Sponsors (comma-separated)</label>
//                   <Input
//                     name="sponsors"
//                     value={formData.sponsors.join(", ")}
//                     onChange={handleFormChange}
//                     placeholder="e.g., Google, Microsoft"
//                   />
//                 </div>
//                 <div>
//                   <label className="text-sm font-medium">Image</label>
//                   <Input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageChange}
//                   />
//                 </div>
//                 <Button type="submit" className="w-full gradient-purple-cyan hover-lift">
//                   Submit Hackathon
//                 </Button>
//               </form>
//             </div>
//           </motion.div>
//         )}

//         {/* Tabs and Filters */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="flex flex-col lg:flex-row justify-between items-center mb-8 space-y-4 lg:space-y-0"
//         >
//           <div className="flex space-x-1 glass rounded-lg p-1">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
//                   activeTab === tab.id
//                     ? "bg-primary text-primary-foreground shadow-lg"
//                     : "text-muted-foreground hover:text-foreground hover:bg-white/5"
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>

//           <div className="flex space-x-4">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//               <Input
//                 placeholder="Search hackathons..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="pl-10 glass"
//               />
//             </div>

//             <div className="flex space-x-1 glass rounded-lg p-1">
//               {categories.map((category) => {
//                 const Icon = category.icon;
//                 return (
//                   <button
//                     key={category.id}
//                     onClick={() => setSelectedCategory(category.id)}
//                     className={`flex items-center space-x-1 px-3 py-2 rounded-md text-xs font-medium transition-all duration-300 ${
//                       selectedCategory === category.id
//                         ? "bg-primary text-primary-foreground"
//                         : "text-muted-foreground hover:text-foreground"
//                     }`}
//                   >
//                     <Icon className="h-3 w-3" />
//                     <span>{category.label}</span>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </motion.div>

//         {/* Loading and Error States */}
//         {loading && (
//           <div className="text-center text-muted-foreground">Loading hackathons...</div>
//         )}
//         {error && (
//           <div className="text-center text-red-500">{error}</div>
//         )}

//         {/* Hackathons Grid */}
//         {!loading && !error && filteredHackathons.length === 0 && (
//           <div className="text-center text-muted-foreground">
//             No hackathons found for the selected filters.
//           </div>
//         )}
//         {!loading && !error && filteredHackathons.length > 0 && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12"
//           >
//             {filteredHackathons.map((hackathon, index) => (
//               <motion.div
//                 key={hackathon.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="glass-card rounded-xl overflow-hidden hover-lift group"
//               >
//                 <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
//                   {hackathon.image && (
//                     <img
//                       src={hackathon.image}
//                       alt={hackathon.title}
//                       className="absolute inset-0 w-full h-full object-cover"
//                       onError={(e) => console.error("Error loading hackathon image:", hackathon.image, e)}
//                     />
//                   )}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//                   <div className="absolute top-4 left-4">
//                     <Badge className={`${getDifficultyColor(hackathon.difficulty)} border`}>
//                       {hackathon.difficulty}
//                     </Badge>
//                   </div>
//                   <div className="absolute top-4 right-4">
//                     <div className="flex space-x-2">
//                       <Button variant="ghost" size="sm" className="glass">
//                         <Heart className="h-4 w-4" />
//                       </Button>
//                       <Button variant="ghost" size="sm" className="glass">
//                         <Share2 className="h-4 w-4" />
//                       </Button>
//                     </div>
//                   </div>
//                   <div className="absolute bottom-4 left-4 right-4">
//                     <h3 className="text-lg font-semibold font-space text-white mb-2">
//                       {hackathon.title}
//                     </h3>
//                     <div className="flex items-center text-white/80 text-sm">
//                       <Calendar className="h-4 w-4 mr-1" />
//                       <span>
//                         {hackathon.date} - {hackathon.endDate}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <p className="text-muted-foreground text-sm mb-4">
//                     {hackathon.description}
//                   </p>

//                   <div className="space-y-3 mb-4">
//                     <div className="flex items-center justify-between text-sm">
//                       <div className="flex items-center text-muted-foreground">
//                         <MapPin className="h-4 w-4 mr-1" />
//                         <span>{hackathon.location}</span>
//                       </div>
//                       <Badge variant="outline">{hackathon.type}</Badge>
//                     </div>

//                     <div className="flex items-center justify-between text-sm">
//                       <div className="flex items-center text-muted-foreground">
//                         <Users className="h-4 w-4 mr-1" />
//                         <span>
//                           {hackathon.participants}/{hackathon.maxParticipants}
//                         </span>
//                       </div>
//                       <div className="flex items-center text-primary">
//                         <Trophy className="h-4 w-4 mr-1" />
//                         <span className="font-semibold">{hackathon.prize}</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {hackathon.tags?.map((tag) => (
//                       <span
//                         key={tag}
//                         className="px-2 py-1 bg-primary/20 text-primary rounded text-xs"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   {hackathon.nftBadge && (
//                     <div className="glass rounded-lg p-3 mb-4 holographic">
//                       <div className="flex items-center space-x-3">
//                         <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 p-2">
//                           <Award className="h-6 w-6 text-white" />
//                         </div>
//                         <div>
//                           <p className="text-sm font-medium">NFT Certificate</p>
//                           <p className="text-xs text-muted-foreground">
//                             {hackathon.nftBadge.name} • {hackathon.nftBadge.rarity}
//                           </p>
//                         </div>
//                         <Zap className="h-4 w-4 text-primary ml-auto" />
//                       </div>
//                     </div>
//                   )}

//                   <div className="flex space-x-2">
//                     <Button className="flex-1 gradient-purple-cyan hover-lift">
//                       {hackathon.status === "upcoming" ? "Register" : "View Results"}
//                     </Button>
//                     <Button variant="outline" className="glass hover-glow">
//                       <Eye className="h-4 w-4" />
//                     </Button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}

//         {/* Participants Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="mb-12"
//         >
//           <h2 className="text-2xl font-space font-bold mb-6">Featured Participants</h2>
//           {participants.length === 0 && (
//             <div className="text-center text-muted-foreground">
//               No participants found.
//             </div>
//           )}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {participants.map((participant, index) => (
//               <motion.div
//                 key={participant.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="flip-card h-64"
//               >
//                 <div className="flip-card-inner h-full">
//                   <div className="flip-card-front absolute inset-0 glass-card rounded-xl p-6 flex flex-col items-center justify-center text-center">
//                     <div className="text-4xl mb-3">{participant.avatar}</div>
//                     <h3 className="font-semibold font-space mb-1">{participant.name}</h3>
//                     <p className="text-sm text-muted-foreground mb-2">{participant.university}</p>
//                     <p className="text-xs text-muted-foreground mb-4">{participant.team}</p>

//                     {participant.verified && (
//                       <div className="flex items-center text-primary">
//                         <Zap className="h-4 w-4 mr-1" />
//                         <span className="text-xs">Verified</span>
//                       </div>
//                     )}
//                   </div>

//                   <div className="flip-card-back absolute inset-0 glass-card rounded-xl p-6">
//                     <div className="h-full flex flex-col justify-between">
//                       <div>
//                         <h4 className="font-semibold mb-3">Skills</h4>
//                         <div className="flex flex-wrap gap-2 mb-4">
//                           {participant.skills?.map((skill) => (
//                             <span
//                               key={skill}
//                               className="px-2 py-1 bg-primary/20 text-primary rounded text-xs"
//                             >
//                               {skill}
//                             </span>
//                           ))}
//                         </div>
//                       </div>

//                       <div className="grid grid-cols-2 gap-4 text-center">
//                         <div>
//                           <div className="text-lg font-bold">{participant.achievements || 0}</div>
//                           <div className="text-xs text-muted-foreground">Achievements</div>
//                         </div>
//                         <div>
//                           <div className="text-lg font-bold">{participant.hackathonsWon || 0}</div>
//                           <div className="text-xs text-muted-foreground">Wins</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* NFT Certificates */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           <h2 className="text-2xl font-space font-bold mb-6">NFT Certificates</h2>
//           {nftCertificates.length === 0 && (
//             <div className="text-center text-muted-foreground">
//               No NFT certificates found.
//             </div>
//           )}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {nftCertificates.map((certificate, index) => (
//               <motion.div
//                 key={certificate.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="glass-card rounded-xl p-6 hover-lift holographic"
//               >
//                 <div className="text-center mb-4">
//                   <div
//                     className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-r ${getRarityColor(
//                       certificate.rarity
//                     )} p-4 mb-3`}
//                   >
//                     <Award className="h-8 w-8 text-white" />
//                   </div>

//                   <h3 className="font-semibold font-space mb-1">{certificate.name}</h3>
//                   <p className="text-sm text-muted-foreground mb-2">{certificate.event}</p>

//                   <Badge
//                     className={`bg-gradient-to-r ${getRarityColor(certificate.rarity)} text-white border-0`}
//                   >
//                     {certificate.rarity}
//                   </Badge>
//                 </div>

//                 <div className="space-y-2 text-sm">
//                   <div className="flex justify-between">
//                     <span className="text-muted-foreground">Owner:</span>
//                     <span>{certificate.owner}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-muted-foreground">Minted:</span>
//                     <span>{certificate.mintDate}</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-muted-foreground">Status:</span>
//                     <div className="flex items-center text-green-500">
//                       <Zap className="h-3 w-3 mr-1" />
//                       <span className="text-xs">Verified</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex space-x-2 mt-4">
//                   <Button variant="outline" size="sm" className="flex-1 glass hover-glow">
//                     <Eye className="h-4 w-4 mr-2" />
//                     View
//                   </Button>
//                   <Button variant="outline" size="sm" className="glass hover-glow">
//                     <Download className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Hackathons;
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Users,
  Trophy,
  Clock,
  Star,
  Award,
  Zap,
  ExternalLink,
  Heart,
  Share2,
  Filter,
  Search,
  Plus,
  Code,
  Palette,
  Brain,
  Smartphone,
  Globe,
  Shield,
  Sparkles,
  Eye,
  Download,
  X,
  ChevronLeft,
  ChevronRight,
  Tag,
  Image as ImageIcon,
} from "lucide-react";

const Hackathons = () => {
  const [activeTab, setActiveTab] = useState("ongoing");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hackathons, setHackathons] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [nftCertificates, setNftCertificates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showHostForm, setShowHostForm] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [hoveredDate, setHoveredDate] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    organizer: "",
    date: "",
    time: "",
    endDate: "",
    endTime: "",
    location: "",
    type: "In-Person",
    category: "all",
    participants: 0,
    maxParticipants: 100,
    prize: "",
    difficulty: "Intermediate",
    status: "upcoming",
    image: "",
    tags: [],
    sponsors: [],
    nftBadge: { name: "Hackathon Badge", rarity: "Rare", design: "gradient" },
  });

  const categories = [
    { id: "all", label: "All", icon: Globe },
    { id: "web", label: "Web Dev", icon: Code },
    { id: "mobile", label: "Mobile", icon: Smartphone },
    { id: "ai", label: "AI/ML", icon: Brain },
    { id: "design", label: "Design", icon: Palette },
    { id: "blockchain", label: "Blockchain", icon: Shield },
  ];

  const tabs = [
    { id: "upcoming", label: "Upcoming" },
    { id: "ongoing", label: "Ongoing" },
    { id: "completed", label: "Completed" },
  ];

  // Sample hackathons
  const sampleHackathons = [
    {
      id: "hacc-it-2025",
      title: "HACC-IT Hackathon 2025",
      description: "Innovate with AI in Education, Agriculture, Fintech, and Student Innovation at REVA University.",
      organizer: "C&IT Department, REVA University",
      date: "2025-09-25",
      time: "09:00",
      endDate: "2025-09-27",
      endTime: "17:00",
      location: "Reva Rangasthala, Bangalore, India",
      type: "In-Person",
      category: "ai",
      participants: 40,
      maxParticipants: 40,
      prize: "₹10,000",
      difficulty: "Intermediate",
      status: "ongoing",
      image: "https://i.postimg.cc/d0fbVQ80/temp-Imagei-Wf-Ox-F.avif",
      tags: ["AI in Education", "AI in Agriculture", "AI in Fintech", "Student Innovation"],
      sponsors: ["REVA University", "HACC"],
      nftBadge: { name: "HACC-IT Innovator", rarity: "Epic", design: "holographic" },
    },
    {
      id: "future-tech-2025",
      title: "Future Tech Challenge 2025",
      description: "Build the next generation of technology solutions for tomorrow's problems.",
      organizer: "Tech Innovators Inc.",
      date: "2025-10-15",
      time: "10:00",
      endDate: "2025-10-17",
      endTime: "18:00",
      location: "Online",
      type: "Online",
      category: "web",
      participants: 85,
      maxParticipants: 100,
      prize: "₹25,000",
      difficulty: "Advanced",
      status: "upcoming",
      image: "https://via.placeholder.com/400x200",
      tags: ["Future Tech", "Innovation", "AI", "Blockchain"],
      sponsors: ["Google", "Microsoft"],
      nftBadge: { name: "Future Tech Pioneer", rarity: "Legendary", design: "animated" },
    },
    {
      id: "green-code-2025",
      title: "Green Code Hackathon",
      description: "Develop sustainable solutions for environmental challenges through technology.",
      organizer: "EcoTech Foundation",
      date: "2025-08-20",
      time: "08:00",
      endDate: "2025-08-22",
      endTime: "16:00",
      location: "Hybrid - Bangalore & Online",
      type: "Hybrid",
      category: "design",
      participants: 60,
      maxParticipants: 75,
      prize: "₹15,000",
      difficulty: "Intermediate",
      status: "completed",
      image: "https://via.placeholder.com/400x200",
      tags: ["Sustainability", "Environment", "Green Tech"],
      sponsors: ["WWF", "Greenpeace"],
      nftBadge: { name: "Eco Warrior", rarity: "Rare", design: "nature" },
    },
  ];

  // Initialize hackathons and update status automatically
  useEffect(() => {
    const updateHackathonStatus = (hackathon) => {
      const now = new Date();
      const startDateTime = new Date(`${hackathon.date}T${hackathon.time || '00:00'}`);
      const endDateTime = hackathon.endDate
        ? new Date(`${hackathon.endDate}T${hackathon.endTime || '23:59'}`)
        : new Date(`${hackathon.date}T23:59`);
      
      if (now < startDateTime) {
        return { ...hackathon, status: "upcoming" };
      } else if (now >= startDateTime && now <= endDateTime) {
        return { ...hackathon, status: "ongoing" };
      } else {
        return { ...hackathon, status: "completed" };
      }
    };

    const updatedHackathons = sampleHackathons.map(updateHackathonStatus);
    setHackathons(updatedHackathons);

    // Sample participants
    setParticipants([
      {
        id: "1",
        name: "Alex Chen",
        university: "MIT",
        team: "Code Warriors",
        avatar: "👨‍💻",
        skills: ["React", "Python", "AI/ML"],
        achievements: 12,
        hackathonsWon: 3,
        verified: true,
      },
      {
        id: "2",
        name: "Priya Sharma",
        university: "IIT Bangalore",
        team: "Tech Innovators",
        avatar: "👩‍💻",
        skills: ["Flutter", "Dart", "Firebase"],
        achievements: 8,
        hackathonsWon: 2,
        verified: true,
      },
      {
        id: "3",
        name: "Michael Johnson",
        university: "Stanford",
        team: "Future Builders",
        avatar: "👨‍🎓",
        skills: ["JavaScript", "Node.js", "MongoDB"],
        achievements: 15,
        hackathonsWon: 5,
        verified: true,
      },
    ]);

    // Sample NFT certificates
    setNftCertificates([
      {
        id: "1",
        name: "Innovation Master",
        event: "Tech Summit 2024",
        owner: "Alex Chen",
        mintDate: "2024-12-15",
        rarity: "Legendary",
      },
      {
        id: "2",
        name: "Code Champion",
        event: "DevFest 2024",
        owner: "Priya Sharma",
        mintDate: "2024-11-20",
        rarity: "Epic",
      },
      {
        id: "3",
        name: "Problem Solver",
        event: "Hack4Good",
        owner: "Michael Johnson",
        mintDate: "2024-10-10",
        rarity: "Rare",
      },
    ]);
  }, []);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Advanced":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case "Legendary":
        return "from-yellow-400 via-orange-500 to-red-500";
      case "Epic":
        return "from-purple-400 via-pink-500 to-red-500";
      case "Rare":
        return "from-blue-400 via-cyan-500 to-teal-500";
      default:
        return "from-gray-400 to-gray-600";
    }
  };

  // Handle form input changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("nftBadge.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        nftBadge: { ...prev.nftBadge, [field]: value },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: name === "tags" || name === "sponsors" ? value.split(",").map((item) => item.trim()) : value,
      }));
    }
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.organizer || !formData.date) {
      alert("Please fill in all required fields.");
      return;
    }

    const startDateTime = new Date(`${formData.date}T${formData.time || '00:00'}`);
    const endDateTime = formData.endDate
      ? new Date(`${formData.endDate}T${formData.endTime || '23:59'}`)
      : new Date(`${formData.date}T23:59`);

    const newHackathon = {
      id: formData.title.toLowerCase().replace(/\s+/g, "-") + "-" + Date.now(),
      ...formData,
      participants: parseInt(formData.participants) || 0,
      maxParticipants: parseInt(formData.maxParticipants) || 100,
      status: getHackathonStatus(startDateTime, endDateTime),
    };

    setHackathons((prev) => [...prev, newHackathon]);
    setShowHostForm(false);
    setFormData({
      title: "",
      description: "",
      organizer: "",
      date: "",
      time: "",
      endDate: "",
      endTime: "",
      location: "",
      type: "In-Person",
      category: "all",
      participants: 0,
      maxParticipants: 100,
      prize: "",
      difficulty: "Intermediate",
      status: "upcoming",
      image: "",
      tags: [],
      sponsors: [],
      nftBadge: { name: "Hackathon Badge", rarity: "Rare", design: "gradient" },
    });
    alert("Hackathon submitted successfully!");
  };

  // Helper function to determine hackathon status
  const getHackathonStatus = (startDateTime, endDateTime) => {
    const now = new Date();
    if (now < startDateTime) return "upcoming";
    if (now >= startDateTime && now <= endDateTime) return "ongoing";
    return "completed";
  };

  // Calendar functions
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getHackathonsForDate = (date) => {
    const dateString = date.toISOString().split('T')[0];
    return hackathons.filter(h => h.date === dateString && h.status === "upcoming");
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-12"></div>);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const hackathons = getHackathonsForDate(date);
      const isToday = date.toDateString() === new Date().toDateString();

      days.push(
        <div
          key={day}
          className={`relative h-12 flex items-center justify-center text-sm cursor-pointer rounded-md transition-all duration-200 group ${
            isToday
              ? "bg-blue-500 text-white font-bold"
              : hackathons.length > 0
              ? "bg-purple-500/20 text-purple-400 hover:bg-purple-500/30"
              : "hover:bg-white/5"
          }`}
          onMouseEnter={() => hackathons.length > 0 && setHoveredDate({ date, hackathons })}
          onMouseLeave={() => setHoveredDate(null)}
        >
          {day}
          {hackathons.length > 0 && (
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-purple-400 rounded-full"></div>
          )}
        </div>
      );
    }

    return days;
  };

  // Filter hackathons based on tab, category, and search query
  const filteredHackathons = hackathons.filter((hackathon) => {
    const matchesTab = activeTab === "all" || hackathon.status === activeTab;
    const matchesCategory =
      selectedCategory === "all" || hackathon.category === selectedCategory;
    const matchesSearch = hackathon.title
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesTab && matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20 pb-10 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6 hover:bg-white/15 transition-all duration-300">
            <Sparkles className="h-4 w-4 text-purple-400 mr-2" />
            <span className="text-sm font-medium text-white">Innovation Challenges</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Hackathons
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join exciting hackathons, showcase your skills, and earn verified NFT certificates for your achievements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowHostForm(true)}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Plus className="h-4 w-4 mr-2" />
              Host Hackathon
            </button>
            <button
              onClick={() => setShowCalendar(true)}
              className="px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
            >
              <Calendar className="h-4 w-4 mr-2" />
              View Calendar
            </button>
          </div>
        </motion.div>

        {/* Calendar Modal */}
        <AnimatePresence>
          {showCalendar && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
              onClick={() => setShowCalendar(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-slate-800/90 backdrop-blur-xl border border-white/20 rounded-xl p-6 max-w-lg w-full mx-4 max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-white">
                    {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </h2>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <ChevronLeft className="h-4 w-4 text-white" />
                    </button>
                    <button
                      onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <ChevronRight className="h-4 w-4 text-white" />
                    </button>
                    <button
                      onClick={() => setShowCalendar(false)}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <X className="h-4 w-4 text-white" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="h-8 flex items-center justify-center text-xs font-semibold text-gray-400">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {renderCalendar()}
                </div>

                {hoveredDate && (
                  <div className="mt-4 space-y-2">
                    {hoveredDate.hackathons.map((hackathon, idx) => (
                      <div key={idx} className="p-3 bg-purple-500/20 rounded-lg border border-purple-500/30">
                        <h3 className="font-semibold text-purple-300 mb-1">{hackathon.title}</h3>
                        <p className="text-xs text-gray-300">{hackathon.description}</p>
                        <p className="text-xs text-purple-400 mt-1">
                          {hackathon.date} {hackathon.time} - {hackathon.endDate || hackathon.date} {hackathon.endTime || ''}
                        </p>
                        <p className="text-xs text-gray-300">{hackathon.location}</p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced Host Hackathon Form */}
        <AnimatePresence>
          {showHostForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setShowHostForm(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-slate-800/90 backdrop-blur-xl border border-white/20 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-slate-800"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6 sticky top-0 bg-slate-800/90 pb-4 border-b border-white/10">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-purple-400" />
                    Host a Hackathon
                  </h2>
                  <button
                    onClick={() => setShowHostForm(false)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="h-5 w-5 text-white" />
                  </button>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2 flex items-center gap-1">
                        <Code className="h-4 w-4 text-purple-400" />
                        Title *
                      </label>
                      <input
                        name="title"
                        value={formData.title}
                        onChange={handleFormChange}
                        placeholder="Hackathon Title"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2 flex items-center gap-1">
                        <Users className="h-4 w-4 text-purple-400" />
                        Organizer *
                      </label>
                      <input
                        name="organizer"
                        value={formData.organizer}
                        onChange={handleFormChange}
                        placeholder="Organizer Name"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2 flex items-center gap-1">
                      <Sparkles className="h-4 w-4 text-purple-400" />
                      Description *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleFormChange}
                      placeholder="Brief description of the hackathon"
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2 flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-purple-400" />
                        Start Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleFormChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2 flex items-center gap-1">
                        <Clock className="h-4 w-4 text-purple-400" />
                        Start Time
                      </label>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2 flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-purple-400" />
                        End Date
                      </label>
                      <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2 flex items-center gap-1">
                        <Clock className="h-4 w-4 text-purple-400" />
                        End Time
                      </label>
                      <input
                        type="time"
                        name="endTime"
                        value={formData.endTime}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2 flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-purple-400" />
                        Location
                      </label>
                      <input
                        name="location"
                        value={formData.location}
                        onChange={handleFormChange}
                        placeholder="Venue or 'Online'"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2 flex items-center gap-1">
                        <Globe className="h-4 w-4 text-purple-400" />
                        Type
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="In-Person">In-Person</option>
                        <option value="Online">Online</option>
                        <option value="Hybrid">Hybrid</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2 flex items-center gap-1">
                        <Brain className="h-4 w-4 text-purple-400" />
                        Category
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        {categories.map((cat) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2 flex items-center gap-1">
                        <Star className="h-4 w-4 text-purple-400" />
                        Difficulty
                      </label>
                      <select
                        name="difficulty"
                        value={formData.difficulty}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2 flex items-center gap-1">
                        <Trophy className="h-4 w-4 text-purple-400" />
                        Prize Pool
                      </label>
                      <input
                        name="prize"
                        value={formData.prize}
                        onChange={handleFormChange}
                        placeholder="e.g., ₹10,000"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2 flex items-center gap-1">
                        <Users className="h-4 w-4 text-purple-400" />
                        Participants
                      </label>
                      <input
                        type="number"
                        name="participants"
                        value={formData.participants}
                        onChange={handleFormChange}
                        placeholder="Current participants"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2 flex items-center gap-1">
                        <Users className="h-4 w-4 text-purple-400" />
                        Max Participants
                      </label>
                      <input
                        type="number"
                        name="maxParticipants"
                        value={formData.maxParticipants}
                        onChange={handleFormChange}
                        placeholder="Maximum participants"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2 flex items-center gap-1">
                      <Tag className="h-4 w-4 text-purple-400" />
                      Tags (comma-separated)
                    </label>
                    <input
                      name="tags"
                      value={formData.tags.join(", ")}
                      onChange={handleFormChange}
                      placeholder="e.g., AI, Education, Fintech"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2 flex items-center gap-1">
                      <Users className="h-4 w-4 text-purple-400" />
                      Sponsors (comma-separated)
                    </label>
                    <input
                      name="sponsors"
                      value={formData.sponsors.join(", ")}
                      onChange={handleFormChange}
                      placeholder="e.g., Google, Microsoft"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2 flex items-center gap-1">
                      <ImageIcon className="h-4 w-4 text-purple-400" />
                      Image URL
                    </label>
                    <input
                      name="image"
                      value={formData.image}
                      onChange={handleFormChange}
                      placeholder="https://example.com/image.jpg"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2 flex items-center gap-1">
                        <Award className="h-4 w-4 text-purple-400" />
                        NFT Badge Name
                      </label>
                      <input
                        name="nftBadge.name"
                        value={formData.nftBadge.name}
                        onChange={handleFormChange}
                        placeholder="e.g., Hackathon Innovator"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2 flex items-center gap-1">
                        <Star className="h-4 w-4 text-purple-400" />
                        NFT Badge Rarity
                      </label>
                      <select
                        name="nftBadge.rarity"
                        value={formData.nftBadge.rarity}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="Common">Common</option>
                        <option value="Rare">Rare</option>
                        <option value="Epic">Epic</option>
                        <option value="Legendary">Legendary</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Submit Hackathon
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tabs and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col lg:flex-row justify-between items-center mb-8 space-y-4 lg:space-y-0"
        >
          <div className="flex space-x-1 bg-white/10 backdrop-blur-sm rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-purple-500 text-white shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                placeholder="Search hackathons..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="flex space-x-1 bg-white/10 backdrop-blur-sm rounded-lg p-1">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-xs font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-purple-500 text-white"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Icon className="h-3 w-3" />
                    <span>{category.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Loading and Error States */}
        {loading && (
          <div className="text-center text-gray-400 py-12">Loading hackathons...</div>
        )}
        {error && (
          <div className="text-center text-red-400 py-12">{error}</div>
        )}

        {/* Hackathons Grid */}
        {!loading && !error && filteredHackathons.length === 0 && (
          <div className="text-center text-gray-400 py-12">
            No hackathons found for the selected filters.
          </div>
        )}
        {!loading && !error && filteredHackathons.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12"
          >
            {filteredHackathons.map((hackathon, index) => (
              <motion.div
                key={hackathon.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 overflow-hidden">
                  {hackathon.image && (
                    <img
                      src={hackathon.image}
                      alt={hackathon.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium border ${getDifficultyColor(hackathon.difficulty)}`}>
                      {hackathon.difficulty}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex space-x-2">
                      <button className="p-2 bg-black/20 backdrop-blur-sm rounded-lg hover:bg-black/40 transition-colors">
                        <Heart className="h-4 w-4 text-white" />
                      </button>
                      <button className="p-2 bg-black/20 backdrop-blur-sm rounded-lg hover:bg-black/40 transition-colors">
                        <Share2 className="h-4 w-4 text-white" />
                      </button>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold text-white mb-2">{hackathon.title}</h3>
                    <div className="flex items-center text-white/80 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>
                        {hackathon.date} {hackathon.time || ''} - {hackathon.endDate || hackathon.date} {hackathon.endTime || ''}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-300 text-sm mb-4">{hackathon.description}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-400">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{hackathon.location}</span>
                      </div>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                        {hackathon.type}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-400">
                        <Users className="h-4 w-4 mr-1" />
                        <span>
                          {hackathon.participants}/{hackathon.maxParticipants}
                        </span>
                      </div>
                      <div className="flex items-center text-yellow-400">
                        <Trophy className="h-4 w-4 mr-1" />
                        <span className="font-semibold">{hackathon.prize}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {hackathon.tags?.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {hackathon.tags?.length > 3 && (
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs">
                        +{hackathon.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {hackathon.nftBadge && (
                    <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-lg p-3 mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 p-2">
                          <Award className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">NFT Certificate</p>
                          <p className="text-xs text-gray-300">
                            {hackathon.nftBadge.name} • {hackathon.nftBadge.rarity}
                          </p>
                        </div>
                        <Zap className="h-4 w-4 text-yellow-400 ml-auto" />
                      </div>
                    </div>
                  )}

                  <div className="flex space-x-2">
                    <button className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                      {hackathon.status === "upcoming" ? "Register" : hackathon.status === "ongoing" ? "Join Now" : "View Results"}
                    </button>
                    <button className="px-4 py-2 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Participants Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-white">Featured Participants</h2>
          {participants.length === 0 && (
            <div className="text-center text-gray-400 py-12">
              No participants found.
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {participants.map((participant, index) => (
              <motion.div
                key={participant.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group h-64 perspective-1000"
              >
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 flex flex-col items-center justify-center text-center backface-hidden">
                    <div className="text-4xl mb-3">{participant.avatar}</div>
                    <h3 className="font-semibold mb-1 text-white">{participant.name}</h3>
                    <p className="text-sm text-gray-300 mb-2">{participant.university}</p>
                    <p className="text-xs text-gray-400 mb-4">{participant.team}</p>
                    {participant.verified && (
                      <div className="flex items-center text-green-400">
                        <Zap className="h-4 w-4 mr-1" />
                        <span className="text-xs">Verified</span>
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 rotate-y-180 backface-hidden">
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <h4 className="font-semibold mb-3 text-white">Skills</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {participant.skills?.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-white">{participant.achievements || 0}</div>
                          <div className="text-xs text-gray-400">Achievements</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-white">{participant.hackathonsWon || 0}</div>
                          <div className="text-xs text-gray-400">Wins</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* NFT Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-white">NFT Certificates</h2>
          {nftCertificates.length === 0 && (
            <div className="text-center text-gray-400 py-12">
              No NFT certificates found.
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nftCertificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center mb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-r ${getRarityColor(
                      certificate.rarity
                    )} p-4 mb-3`}
                  >
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1 text-white">{certificate.name}</h3>
                  <p className="text-sm text-gray-300 mb-2">{certificate.event}</p>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-white text-xs font-medium bg-gradient-to-r ${getRarityColor(certificate.rarity)}`}
                  >
                    {certificate.rarity}
                  </span>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Owner:</span>
                    <span className="text-white">{certificate.owner}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Minted:</span>
                    <span className="text-white">{certificate.mintDate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Status:</span>
                    <div className="flex items-center text-green-400">
                      <Zap className="h-3 w-3 mr-1" />
                      <span className="text-xs">Verified</span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2 mt-4">
                  <button className="flex-1 px-4 py-2 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors text-sm">
                    <Eye className="h-4 w-4 mr-2 inline" />
                    View
                  </button>
                  <button className="px-4 py-2 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors">
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: rgba(168, 85, 247, 0.5) rgba(30, 41, 59, 0.8);
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: rgba(30, 41, 59, 0.8);
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: rgba(168, 85, 247, 0.5);
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default Hackathons;
