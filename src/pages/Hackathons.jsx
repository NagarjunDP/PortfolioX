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



import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { getAuth } from "firebase/auth";
import { ref as dbRef, onValue, set } from "firebase/database";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../firebase";

const Hackathons = () => {
  const [activeTab, setActiveTab] = useState("ongoing");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hackathons, setHackathons] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [nftCertificates, setNftCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showHostForm, setShowHostForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    organizer: "",
    date: "",
    endDate: "",
    location: "",
    type: "In-Person",
    category: "all",
    participants: 0,
    maxParticipants: 100,
    prize: "",
    difficulty: "Intermediate",
    status: "ongoing",
    image: null,
    tags: [],
    sponsors: [],
    nftBadge: { name: "Hackathon Badge", rarity: "Rare", design: "gradient" },
  });
  const [imageFile, setImageFile] = useState(null);

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

  // Add HACC-IT hackathon to Firebase on component mount
  useEffect(() => {
    const haccItData = {
      title: "HACC-IT Hackathon 2025",
      description:
        "Innovate with AI in Education, Agriculture, Fintech, and Student Innovation at REVA University.",
      organizer: "C&IT Department, REVA University",
      date: "2025-09-25",
      endDate: "2025-09-27",
      location: "Reva Rangasthala, Bangalore, India",
      type: "In-Person",
      category: "ai",
      participants: 40,
      maxParticipants: 40,
      prize: "₹10,000",
      difficulty: "Intermediate",
      status: "ongoing",
      image: "https://i.postimg.cc/d0fbVQ80/temp-Imagei-Wf-Ox-F.avif", // Will be updated after image upload
      tags: ["AI in Education", "AI in Agriculture", "AI in Fintech", "Student Innovation"],
      sponsors: ["REVA University", "HACC"],
      nftBadge: {
        name: "HACC-IT Innovator",
        rarity: "Epic",
        design: "holographic",
      },
    };

    const haccItRef = dbRef(db, "hackathons/hacc-it-2025");
    set(haccItRef, haccItData).catch((err) =>
      console.error("Error adding HACC-IT hackathon:", err)
    );

    // Optionally upload an image for HACC-IT
    // Since you mentioned you'll upload an image, this is handled in the form below
  }, []);

  // Fetch hackathons, participants, and NFT certificates from Firebase
  useEffect(() => {
    setLoading(true);
    setError(null);

    // Fetch hackathons
    const hackathonsRef = dbRef(db, "hackathons");
    onValue(
      hackathonsRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const loadedHackathons = Object.entries(data)
            .map(([id, value]) => ({ id, ...value }))
            .sort((a, b) => (b.date || 0) - (a.date || 0));
          setHackathons(loadedHackathons);
        } else {
          setHackathons([]);
        }
        setLoading(false);
      },
      (err) => {
        setError("Failed to fetch hackathons");
        setLoading(false);
        console.error("Error fetching hackathons:", err);
      }
    );
    
    const handleCreatePost = async () => {
      if (!newPost.trim() && !imageFile) return;
      setUploading(true);
    
      try {
        let imageUrl = null;
        if (imageFile) {
          const formData = new FormData();
          formData.append("upload", imageFile);
          const response = await fetch("https://postimg.cc/yJFQfHpq", {
            method: "POST",
            body: formData,
          });
          const data = await response.json();
          if (data.status === "OK") {
            imageUrl = data.url;
          } else {
            throw new Error("Postimages upload failed");
          }
        }
    
        const postRef = push(dbRef(db, "posts"));
        await update(postRef, {
          user: {
            name: githubUsername ? `@${githubUsername}` : `@${user.uid.slice(0, 8)}`,
            username: user.email || "",
            avatar: user.photoURL || "👤",
          },
          content: {
            description: newPost,
            image: imageUrl,
          },
          stats: { likes: 0, comments: 0, shares: 0, views: 0 },
          createdAt: Date.now(),
          type: "post",
        });
    
        setNewPost("");
        setImageFile(null);
      } catch (error) {
        console.error("Error creating post:", error);
      } finally {
        setUploading(false);
      }
    };
    // Fetch participants
    const participantsRef = dbRef(db, "participants");
    onValue(
      participantsRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const loadedParticipants = Object.entries(data).map(([id, value]) => ({
            id,
            ...value,
          }));
          setParticipants(loadedParticipants);
        } else {
          setParticipants([]);
        }
      },
      (err) => {
        console.error("Error fetching participants:", err);
      }
    );

    // Fetch NFT certificates
    const nftCertificatesRef = dbRef(db, "nftCertificates");
    onValue(
      nftCertificatesRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const loadedCertificates = Object.entries(data).map(([id, value]) => ({
            id,
            ...value,
          }));
          setNftCertificates(loadedCertificates);
        } else {
          setNftCertificates([]);
        }
      },
      (err) => {
        console.error("Error fetching NFT certificates:", err);
      }
    );
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
    setFormData((prev) => ({
      ...prev,
      [name]: name === "tags" || name === "sponsors" ? value.split(",").map((item) => item.trim()) : value,
    }));
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.organizer || !formData.date) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const hackathonId = formData.title.toLowerCase().replace(/\s+/g, "-") + "-" + Date.now();
      let imageUrl = "";
      if (imageFile) {
        const imageRef = storageRef(storage, `hackathon_images/${hackathonId}_${imageFile.name}`);
        await uploadBytes(imageRef, imageFile);
        imageUrl = await getDownloadURL(imageRef);
      }

      const newHackathon = {
        ...formData,
        image: imageUrl,
        participants: parseInt(formData.participants) || 0,
        maxParticipants: parseInt(formData.maxParticipants) || 100,
      };

      await set(dbRef(db, `hackathons/${hackathonId}`), newHackathon);
      setShowHostForm(false);
      setFormData({
        title: "",
        description: "",
        organizer: "",
        date: "",
        endDate: "",
        location: "",
        type: "In-Person",
        category: "all",
        participants: 0,
        maxParticipants: 100,
        prize: "",
        difficulty: "Intermediate",
        status: "ongoing",
        image: null,
        tags: [],
        sponsors: [],
        nftBadge: { name: "Hackathon Badge", rarity: "Rare", design: "gradient" },
      });
      setImageFile(null);
      alert("Hackathon submitted successfully!");
    } catch (err) {
      console.error("Error submitting hackathon:", err);
      alert("Failed to submit hackathon. Please try again.");
    }
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
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6 hover-glow">
            <Sparkles className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium">Innovation Challenges</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-space font-bold mb-6">
            <span className="neon-text">Hackathons</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join exciting hackathons, showcase your skills, and earn verified NFT certificates
            for your achievements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="gradient-purple-cyan hover-lift"
              onClick={() => setShowHostForm(true)}
            >
              <Plus className="h-4 w-4 mr-2" />
              Host Hackathon
            </Button>
            <Button variant="outline" className="glass hover-glow">
              <Calendar className="h-4 w-4 mr-2" />
              View Calendar
            </Button>
          </div>
        </motion.div>

        {/* Host Hackathon Form */}
        {showHostForm && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <div className="glass-card rounded-xl p-6 max-w-lg w-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-space font-bold">Host a Hackathon</h2>
                <Button
                  variant="ghost"
                  onClick={() => setShowHostForm(false)}
                  className="text-muted-foreground"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Title *</label>
                  <Input
                    name="title"
                    value={formData.title}
                    onChange={handleFormChange}
                    placeholder="Hackathon Title"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Description *</label>
                  <Input
                    name="description"
                    value={formData.description}
                    onChange={handleFormChange}
                    placeholder="Brief description of the hackathon"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Organizer *</label>
                  <Input
                    name="organizer"
                    value={formData.organizer}
                    onChange={handleFormChange}
                    placeholder="Organizer Name"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Start Date *</label>
                  <Input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">End Date</label>
                  <Input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleFormChange}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Location</label>
                  <Input
                    name="location"
                    value={formData.location}
                    onChange={handleFormChange}
                    placeholder="Venue or 'Online'"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Type</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleFormChange}
                    className="w-full p-2 rounded-md bg-background border border-input"
                  >
                    <option value="In-Person">In-Person</option>
                    <option value="Online">Online</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleFormChange}
                    className="w-full p-2 rounded-md bg-background border border-input"
                  >
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Participants</label>
                  <Input
                    type="number"
                    name="participants"
                    value={formData.participants}
                    onChange={handleFormChange}
                    placeholder="Current participants"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Max Participants</label>
                  <Input
                    type="number"
                    name="maxParticipants"
                    value={formData.maxParticipants}
                    onChange={handleFormChange}
                    placeholder="Maximum participants"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Prize Pool</label>
                  <Input
                    name="prize"
                    value={formData.prize}
                    onChange={handleFormChange}
                    placeholder="e.g., ₹10,000"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Difficulty</label>
                  <select
                    name="difficulty"
                    value={formData.difficulty}
                    onChange={handleFormChange}
                    className="w-full p-2 rounded-md bg-background border border-input"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Tags (comma-separated)</label>
                  <Input
                    name="tags"
                    value={formData.tags.join(", ")}
                    onChange={handleFormChange}
                    placeholder="e.g., AI, Education, Fintech"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Sponsors (comma-separated)</label>
                  <Input
                    name="sponsors"
                    value={formData.sponsors.join(", ")}
                    onChange={handleFormChange}
                    placeholder="e.g., Google, Microsoft"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Image</label>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
                <Button type="submit" className="w-full gradient-purple-cyan hover-lift">
                  Submit Hackathon
                </Button>
              </form>
            </div>
          </motion.div>
        )}

        {/* Tabs and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col lg:flex-row justify-between items-center mb-8 space-y-4 lg:space-y-0"
        >
          <div className="flex space-x-1 glass rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search hackathons..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 glass"
              />
            </div>

            <div className="flex space-x-1 glass rounded-lg p-1">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-xs font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
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
          <div className="text-center text-muted-foreground">Loading hackathons...</div>
        )}
        {error && (
          <div className="text-center text-red-500">{error}</div>
        )}

        {/* Hackathons Grid */}
        {!loading && !error && filteredHackathons.length === 0 && (
          <div className="text-center text-muted-foreground">
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
                className="glass-card rounded-xl overflow-hidden hover-lift group"
              >
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                  {hackathon.image && (
                    <img
                      src={hackathon.image}
                      alt={hackathon.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => console.error("Error loading hackathon image:", hackathon.image, e)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getDifficultyColor(hackathon.difficulty)} border`}>
                      {hackathon.difficulty}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="glass">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="glass">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold font-space text-white mb-2">
                      {hackathon.title}
                    </h3>
                    <div className="flex items-center text-white/80 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>
                        {hackathon.date} - {hackathon.endDate}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-muted-foreground text-sm mb-4">
                    {hackathon.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{hackathon.location}</span>
                      </div>
                      <Badge variant="outline">{hackathon.type}</Badge>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        <span>
                          {hackathon.participants}/{hackathon.maxParticipants}
                        </span>
                      </div>
                      <div className="flex items-center text-primary">
                        <Trophy className="h-4 w-4 mr-1" />
                        <span className="font-semibold">{hackathon.prize}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {hackathon.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/20 text-primary rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {hackathon.nftBadge && (
                    <div className="glass rounded-lg p-3 mb-4 holographic">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 p-2">
                          <Award className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">NFT Certificate</p>
                          <p className="text-xs text-muted-foreground">
                            {hackathon.nftBadge.name} • {hackathon.nftBadge.rarity}
                          </p>
                        </div>
                        <Zap className="h-4 w-4 text-primary ml-auto" />
                      </div>
                    </div>
                  )}

                  <div className="flex space-x-2">
                    <Button className="flex-1 gradient-purple-cyan hover-lift">
                      {hackathon.status === "upcoming" ? "Register" : "View Results"}
                    </Button>
                    <Button variant="outline" className="glass hover-glow">
                      <Eye className="h-4 w-4" />
                    </Button>
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
          <h2 className="text-2xl font-space font-bold mb-6">Featured Participants</h2>
          {participants.length === 0 && (
            <div className="text-center text-muted-foreground">
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
                className="flip-card h-64"
              >
                <div className="flip-card-inner h-full">
                  <div className="flip-card-front absolute inset-0 glass-card rounded-xl p-6 flex flex-col items-center justify-center text-center">
                    <div className="text-4xl mb-3">{participant.avatar}</div>
                    <h3 className="font-semibold font-space mb-1">{participant.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{participant.university}</p>
                    <p className="text-xs text-muted-foreground mb-4">{participant.team}</p>

                    {participant.verified && (
                      <div className="flex items-center text-primary">
                        <Zap className="h-4 w-4 mr-1" />
                        <span className="text-xs">Verified</span>
                      </div>
                    )}
                  </div>

                  <div className="flip-card-back absolute inset-0 glass-card rounded-xl p-6">
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <h4 className="font-semibold mb-3">Skills</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {participant.skills?.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 bg-primary/20 text-primary rounded text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold">{participant.achievements || 0}</div>
                          <div className="text-xs text-muted-foreground">Achievements</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold">{participant.hackathonsWon || 0}</div>
                          <div className="text-xs text-muted-foreground">Wins</div>
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
          <h2 className="text-2xl font-space font-bold mb-6">NFT Certificates</h2>
          {nftCertificates.length === 0 && (
            <div className="text-center text-muted-foreground">
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
                className="glass-card rounded-xl p-6 hover-lift holographic"
              >
                <div className="text-center mb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-r ${getRarityColor(
                      certificate.rarity
                    )} p-4 mb-3`}
                  >
                    <Award className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="font-semibold font-space mb-1">{certificate.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{certificate.event}</p>

                  <Badge
                    className={`bg-gradient-to-r ${getRarityColor(certificate.rarity)} text-white border-0`}
                  >
                    {certificate.rarity}
                  </Badge>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Owner:</span>
                    <span>{certificate.owner}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Minted:</span>
                    <span>{certificate.mintDate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Status:</span>
                    <div className="flex items-center text-green-500">
                      <Zap className="h-3 w-3 mr-1" />
                      <span className="text-xs">Verified</span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2 mt-4">
                  <Button variant="outline" size="sm" className="flex-1 glass hover-glow">
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="glass hover-glow">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hackathons;
