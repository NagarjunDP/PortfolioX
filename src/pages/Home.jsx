// import React, { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { 
//   ArrowRight, 
//   Sparkles, 
//   Brain, 
//   Shield, 
//   Users, 
//   Trophy, 
//   Calendar,
//   Zap,
//   Star,
//   ChevronRight,
//   Play,
//   CheckCircle
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const Home = () => {
//   const heroRef = useRef(null);

//   useEffect(() => {
//     // Create floating particles around the portfolio card
//     const createParticle = () => {
//       if (!heroRef.current) return;
      
//       const particle = document.createElement('div');
//       particle.className = 'absolute w-1 h-1 bg-primary rounded-full opacity-60';
//       particle.style.left = Math.random() * 100 + '%';
//       particle.style.top = Math.random() * 100 + '%';
      
//       heroRef.current.appendChild(particle);
      
//       // Animate particle
//       particle.animate([
//         { transform: 'translate(0, 0) scale(0)', opacity: 0 },
//         { transform: 'translate(20px, -20px) scale(1)', opacity: 0.6 },
//         { transform: 'translate(40px, -40px) scale(0)', opacity: 0 }
//       ], {
//         duration: 3000,
//         easing: 'ease-out'
//       }).onfinish = () => particle.remove();
//     };

//     const interval = setInterval(createParticle, 200);
//     return () => clearInterval(interval);
//   }, []);

//   const features = [
//     {
//       icon: Brain,
//       title: 'AI Portfolio Generator',
//       description: 'Create stunning portfolios with AI-powered design suggestions and content optimization.',
//       color: 'from-purple-500 to-pink-500',
//       delay: 0.1
//     },
//     {
//       icon: Shield,
//       title: 'Blockchain Verification',
//       description: 'Verify achievements with NFT badges and immutable blockchain certificates.',
//       color: 'from-cyan-500 to-blue-500',
//       delay: 0.2
//     },
//     {
//       icon: Users,
//       title: 'Recruiter Dashboard',
//       description: 'Advanced filtering and AI-powered matching for talent discovery.',
//       color: 'from-green-500 to-teal-500',
//       delay: 0.3
//     },
//     {
//       icon: Calendar,
//       title: 'Hackathon Certificates',
//       description: 'Showcase hackathon participation with verified digital certificates.',
//       color: 'from-orange-500 to-red-500',
//       delay: 0.4
//     },
//     {
//       icon: Trophy,
//       title: 'Wall of Fame',
//       description: 'Community leaderboard celebrating top performers and achievements.',
//       color: 'from-yellow-500 to-orange-500',
//       delay: 0.5
//     },
//     {
//       icon: Zap,
//       title: 'Real-time Updates',
//       description: 'Live portfolio updates with instant preview and collaborative features.',
//       color: 'from-indigo-500 to-purple-500',
//       delay: 0.6
//     }
//   ];

//   const stats = [
//     { number: '10K+', label: 'Students' },
//     { number: '500+', label: 'Recruiters' },
//     { number: '1M+', label: 'Verifications' },
//     { number: '50+', label: 'Universities' }
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
//         <div ref={heroRef} className="absolute inset-0 pointer-events-none" />
        
//         {/* Background Gradient */}
//         <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="mb-8"
//           >
//             <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6 hover-glow">
//               <Sparkles className="h-4 w-4 text-primary mr-2" />
//               <span className="text-sm font-medium">Powered by AI & Blockchain</span>
//             </div>
            
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-space font-bold mb-6">
//               <span className="neon-text">One Portfolio.</span>
//               <br />
//               <span className="gradient-purple-cyan bg-clip-text text-transparent">
//                 Endless Possibilities.
//               </span>
//             </h1>
            
//             <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
//               The future of student portfolios is here. Create, verify, and showcase your achievements 
//               with AI-powered tools and blockchain technology.
//             </p>
//           </motion.div>

//           {/* CTA Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
//           >
//             <Link to="/auth">
//               <Button size="lg" className="gradient-purple-cyan hover-lift text-lg px-8 py-4">
//                 Get Started Free
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//             </Link>
//             <Button 
//               variant="outline" 
//               size="lg" 
//               className="glass hover-glow text-lg px-8 py-4 group"
//             >
//               <Play className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
//               Watch Demo
//             </Button>
//           </motion.div>

//           {/* Portfolio Card Animation */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.4 }}
//             className="relative max-w-4xl mx-auto"
//           >
//             <div className="glass-card rounded-2xl p-8 hover-lift pulse-glow">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="space-y-4">
//                   <div className="h-4 bg-gradient-to-r from-primary to-accent rounded skeleton" />
//                   <div className="h-3 bg-muted rounded skeleton" />
//                   <div className="h-3 bg-muted rounded skeleton w-3/4" />
//                 </div>
//                 <div className="space-y-4">
//                   <div className="h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
//                     <Trophy className="h-8 w-8 text-primary" />
//                   </div>
//                   <div className="h-3 bg-muted rounded skeleton" />
//                 </div>
//                 <div className="space-y-4">
//                   <div className="flex space-x-2">
//                     {[...Array(3)].map((_, i) => (
//                       <div key={i} className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
//                         <Star className="h-4 w-4 text-primary" />
//                       </div>
//                     ))}
//                   </div>
//                   <div className="h-3 bg-muted rounded skeleton" />
//                   <div className="h-3 bg-muted rounded skeleton w-2/3" />
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Stats */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
//           >
//             {stats.map((stat, index) => (
//               <div key={stat.label} className="text-center">
//                 <div className="text-3xl md:text-4xl font-bold font-space neon-text mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-muted-foreground">{stat.label}</div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-20 relative">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-5xl font-space font-bold mb-6">
//               <span className="neon-text">Powerful Features</span>
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//               Everything you need to create, verify, and showcase your achievements 
//               in the digital age.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => {
//               const Icon = feature.icon;
//               return (
//                 <motion.div
//                   key={feature.title}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: feature.delay }}
//                   viewport={{ once: true }}
//                   className="group"
//                 >
//                   <div className="glass-card rounded-xl p-6 hover-lift hover-glow h-full">
//                     <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
//                       <Icon className="h-6 w-6 text-white" />
//                     </div>
                    
//                     <h3 className="text-xl font-semibold font-space mb-3 group-hover:text-primary transition-colors duration-300">
//                       {feature.title}
//                     </h3>
                    
//                     <p className="text-muted-foreground mb-4">
//                       {feature.description}
//                     </p>
                    
//                     <div className="flex items-center text-primary group-hover:text-accent transition-colors duration-300">
//                       <span className="text-sm font-medium">Learn more</span>
//                       <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 relative">
//         <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
//         <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-5xl font-space font-bold mb-6">
//               Ready to build your
//               <span className="gradient-purple-cyan bg-clip-text text-transparent"> future?</span>
//             </h2>
            
//             <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
//               Join thousands of students already using PortTrack to showcase their skills 
//               and connect with top recruiters worldwide.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link to="/auth">
//                 <Button size="lg" className="gradient-purple-cyan hover-lift text-lg px-8 py-4">
//                   Start Building Now
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Button>
//               </Link>
//               <Link to="/wall-of-fame">
//                 <Button 
//                   variant="outline" 
//                   size="lg" 
//                   className="glass hover-glow text-lg px-8 py-4"
//                 >
//                   Explore Portfolios
//                 </Button>
//               </Link>
//             </div>
            
//             <div className="flex items-center justify-center mt-8 space-x-4 text-sm text-muted-foreground">
//               <div className="flex items-center">
//                 <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                 Free to start
//               </div>
//               <div className="flex items-center">
//                 <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                 No credit card required
//               </div>
//               <div className="flex items-center">
//                 <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                 Setup in minutes
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

// //crazy
// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   ArrowRight, 
//   Sparkles, 
//   Zap, 
//   Shield, 
//   Trophy, 
//   Users, 
//   Brain,
//   Rocket,
//   Star,
//   Play,
//   ChevronRight,
//   Award,
//   Target,
//   TrendingUp,
//   Globe,
//   Code,
//   Palette,
//   Database,
//   Smartphone,
//   BookOpen,
//   Coffee,
//   Heart,
//   MessageCircle,
//   Share2,
//   Camera,
//   MapPin,
//   Calendar,
//   Clock,
//   Briefcase,
//   GraduationCap,
//   Building,
//   Github,
//   Linkedin,
//   Twitter,
//   Instagram,
//   Youtube,
//   Twitch,
//   CheckCircle,
//   X,
//   Volume2,
//   VolumeX,
//   RotateCcw,
//   Download,
//   ExternalLink,
//   Pause
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const Home = () => {
//   const [activeFeature, setActiveFeature] = useState(0);
//   const [currentStory, setCurrentStory] = useState(0);
//   const [isStoryPlaying, setIsStoryPlaying] = useState(false);
//   const [storyProgress, setStoryProgress] = useState(0);
//   const [showStoryModal, setShowStoryModal] = useState(false);
//   const [isMuted, setIsMuted] = useState(false);
//   const heroRef = useRef(null);
//   const storyIntervalRef = useRef(null);

//   // Student success stories data (Spotify Wrapped style)
//   const studentStories = [
//     {
//       id: 1,
//       name: "Alex Chen",
//       university: "MIT",
//       avatar: "👨‍💻",
//       year: "2024",
//       stats: {
//         hackathonsWon: 12,
//         projectsBuilt: 28,
//         skillsLearned: 15,
//         connectionsGained: 247
//       },
//       achievements: ["Google Intern", "Hackathon Champion", "Open Source Contributor"],
//       topSkill: "React & AI",
//       journey: "From zero coding experience to Google internship in 18 months",
//       color: "from-purple-500 to-pink-500"
//     },
//     {
//       id: 2,
//       name: "Sarah Rodriguez",
//       university: "Stanford",
//       avatar: "👩‍🎨",
//       year: "2024",
//       stats: {
//         hackathonsWon: 8,
//         projectsBuilt: 22,
//         skillsLearned: 12,
//         connectionsGained: 189
//       },
//       achievements: ["Design Lead", "Startup Founder", "Award Winner"],
//       topSkill: "UI/UX Design",
//       journey: "Built 3 successful startups while studying computer science",
//       color: "from-cyan-500 to-blue-500"
//     },
//     {
//       id: 3,
//       name: "Marcus Johnson",
//       university: "UC Berkeley",
//       avatar: "👨‍🔬",
//       year: "2024",
//       stats: {
//         hackathonsWon: 15,
//         projectsBuilt: 31,
//         skillsLearned: 18,
//         connectionsGained: 312
//       },
//       achievements: ["ML Engineer", "Research Published", "Conference Speaker"],
//       topSkill: "Machine Learning",
//       journey: "Published 5 research papers and landed ML role at top tech company",
//       color: "from-green-500 to-teal-500"
//     }
//   ];

//   // Enhanced features with more student-focused benefits
//   const features = [
//     {
//       icon: Brain,
//       title: "AI-Powered ",
//       description: "Your Journey To Build Your Future",
//       benefits: ["Connect Github", "Smart content suggestions", "Real-time Projects"],
//       color: "from-purple-500 to-pink-500",
//       demo: "Your Journey Matters"
//     },
//     {
//       icon: Users,
//       title: "Student Community Hub",
//       description: "Connect with fellow students, share your journey, and discover opportunities in your area.",
//       benefits: ["Find study buddies", "Join local hackathons", "Share achievements"],
//       color: "from-blue-500 to-cyan-500",
//       demo: "See how students connect and grow together"
//     },
//     {
//       icon: Trophy,
//       title: "Achievement Verification",
//       description: "Blockchain-verified certificates that employers trust. Your achievements, permanently recorded.",
//       benefits: ["Tamper-proof certificates", "Instant verification", "Global recognition"],
//       color: "from-yellow-500 to-orange-500",
//       demo: "Verify a certificate in real-time"
//     },
//     {
//       icon: Rocket,
//       title: "Career Acceleration",
//       description: "Get discovered by top recruiters and companies actively looking for talent like yours.",
//       benefits: ["Direct recruiter access", "Job matching", "Interview prep"],
//       color: "from-green-500 to-teal-500",
//       demo: "See how students land dream jobs"
//     },
//     {
//       icon: Zap,
//       title: "Real-Time Opportunities",
//       description: "Never miss a hackathon, internship, or networking event. Get notified about opportunities near you.",
//       benefits: ["Local event alerts", "Application deadlines", "Networking events"],
//       color: "from-red-500 to-pink-500",
//       demo: "Discover opportunities in your city"
//     },
//     {
//       icon: Shield,
//       title: "Privacy & Control",
//       description: "You own your data. Choose what to share, with whom, and when. Complete control over your digital presence.",
//       benefits: ["Granular privacy controls", "Data ownership", "Secure sharing"],
//       color: "from-indigo-500 to-purple-500",
//       demo: "Customize your privacy settings"
//     }
//   ];

//   // Real student testimonials
//   const testimonials = [
//     {
//       name: "Emma Thompson",
//       role: "CS Student at Harvard",
//       avatar: "👩‍💻",
//       quote: "PortTrack helped me land my dream internship at Google. The AI portfolio builder made me stand out!",
//       achievement: "Google SWE Intern"
//     },
//     {
//       name: "David Kim",
//       role: "Design Student at RISD",
//       avatar: "👨‍🎨",
//       quote: "The community feature is amazing. I found my co-founder through PortTrack and we're building something incredible.",
//       achievement: "Startup Co-founder"
//     },
//     {
//       name: "Priya Patel",
//       role: "Engineering Student at CMU",
//       avatar: "👩‍🔬",
//       quote: "Blockchain verification gave my achievements credibility. Recruiters actually trust my portfolio now.",
//       achievement: "Microsoft Intern"
//     }
//   ];

//   // Live stats that update
//   const [liveStats, setLiveStats] = useState({
//     students: 12847,
//     portfolios: 8934,
//     hackathons: 156,
//     jobOffers: 2341
//   });

//   useEffect(() => {
//     // Simulate live stats updates
//     const interval = setInterval(() => {
//       setLiveStats(prev => ({
//         students: prev.students + Math.floor(Math.random() * 3),
//         portfolios: prev.portfolios + Math.floor(Math.random() * 2),
//         hackathons: prev.hackathons + (Math.random() > 0.9 ? 1 : 0),
//         jobOffers: prev.jobOffers + Math.floor(Math.random() * 2)
//       }));
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   // Story modal functionality
//   useEffect(() => {
//     if (isStoryPlaying && showStoryModal) {
//       storyIntervalRef.current = setInterval(() => {
//         setStoryProgress(prev => {
//           if (prev >= 100) {
//             // Move to next story
//             setCurrentStory(prevStory => {
//               const nextStory = (prevStory + 1) % studentStories.length;
//               if (nextStory === 0) {
//                 // End of all stories
//                 setIsStoryPlaying(false);
//                 setShowStoryModal(false);
//                 return 0;
//               }
//               return nextStory;
//             });
//             return 0;
//           }
//           return prev + 2; // 5 seconds per story (100/20 = 5)
//         });
//       }, 100);
//     } else {
//       clearInterval(storyIntervalRef.current);
//     }

//     return () => clearInterval(storyIntervalRef.current);
//   }, [isStoryPlaying, showStoryModal, currentStory]);

//   // Particle animation
//   useEffect(() => {
//     const createParticle = () => {
//       if (!heroRef.current) return;
      
//       const particle = document.createElement('div');
//       particle.className = 'absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-70';
//       particle.style.left = Math.random() * 100 + '%';
//       particle.style.top = Math.random() * 100 + '%';
      
//       heroRef.current.appendChild(particle);
      
//       particle.animate([
//         { transform: 'translate(0, 0) scale(0)', opacity: 0 },
//         { transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1)`, opacity: 0.7 },
//         { transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(0)`, opacity: 0 }
//       ], {
//         duration: 4000,
//         easing: 'ease-out'
//       }).onfinish = () => particle.remove();
//     };

//     const interval = setInterval(createParticle, 300);
//     return () => clearInterval(interval);
//   }, []);

//   const startStoryMode = () => {
//     setShowStoryModal(true);
//     setCurrentStory(0);
//     setStoryProgress(0);
//     setIsStoryPlaying(true);
//   };

//   const closeStoryModal = () => {
//     setShowStoryModal(false);
//     setIsStoryPlaying(false);
//     setStoryProgress(0);
//     setCurrentStory(0);
//   };

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
//         <div ref={heroRef} className="absolute inset-0 overflow-hidden">
//           {/* Animated background grid */}
//           <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           {/* Live indicator */}
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center px-4 py-2 rounded-full glass mb-8 hover-glow"
//           >
//             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2" />
//             <span className="text-sm font-medium">
//               {liveStats.students.toLocaleString()}+ students building their future
//             </span>
//           </motion.div>

//           {/* Main headline */}
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-5xl md:text-7xl lg:text-8xl font-space font-bold mb-6"
//           >
//             <span className="neon-text">One Portfolio.</span>
//             <br />
//             <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
//               Endless Possibilities.
//             </span>
//           </motion.h1>

//           {/* Subheadline */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed"
//           >
//             The AI-powered platform where students showcase achievements, connect with peers, 
//             and get discovered by top companies. Your journey starts here.
//           </motion.p>

//           {/* CTA Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
//           >
//             <Button 
//               size="lg" 
//               className="gradient-purple-cyan hover-lift text-lg px-8 py-4 h-auto"
//               asChild
//             >
//               <Link to="/auth">
//                 <Rocket className="h-5 w-5 mr-2" />
//                 Start Your Journey
//                 <ArrowRight className="h-5 w-5 ml-2" />
//               </Link>
//             </Button>
            
//             <Button 
//               size="lg" 
//               variant="outline" 
//               className="glass hover-glow text-lg px-8 py-4 h-auto"
//               onClick={startStoryMode}
//             >
//               <Play className="h-5 w-5 mr-2" />
//               See Success Stories
//             </Button>
//           </motion.div>

//           {/* Live stats */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//             className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
//           >
//             {[
//               { label: "Active Students", value: liveStats.students, icon: Users },
//               { label: "Portfolios Created", value: liveStats.portfolios, icon: BookOpen },
//               { label: "Hackathons Hosted", value: liveStats.hackathons, icon: Trophy },
//               { label: "Job Offers", value: liveStats.jobOffers, icon: Briefcase }
//             ].map((stat, index) => {
//               const Icon = stat.icon;
//               return (
//                 <div key={stat.label} className="glass-card rounded-xl p-4 hover-lift">
//                   <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
//                   <div className="text-2xl font-bold font-space neon-text">
//                     {stat.value.toLocaleString()}+
//                   </div>
//                   <div className="text-sm text-muted-foreground">{stat.label}</div>
//                 </div>
//               );
//             })}
//           </motion.div>
//         </div>

//         {/* Floating portfolio preview */}
//         {/* <motion.div
//           initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
//           animate={{ opacity: 1, scale: 1, rotate: 0 }}
//           transition={{ duration: 1, delay: 1 }}
//           className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden xl:block"
//         >
//           <div className="glass-card rounded-2xl p-6 w-80 hover-lift">
//             <div className="flex items-center space-x-3 mb-4">
//               <div className="text-3xl">👨‍💻</div>
//               <div>
//                 <div className="font-semibold">Alex Chen</div>
//                 <div className="text-sm text-muted-foreground">MIT • CS Student</div>
//               </div>
//               <div className="ml-auto">
//                 <Zap className="h-5 w-5 text-green-500" />
//               </div>
//             </div>
//             <div className="space-y-3">
//               <div className="flex justify-between text-sm">
//                 <span>Portfolio Score</span>
//                 <span className="font-bold text-primary">94%</span>
//               </div>
//               <div className="w-full bg-muted rounded-full h-2">
//                 <div className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full w-[94%]" />
//               </div>
//               <div className="flex space-x-2">
//                 <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">React</span>
//                 <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">AI/ML</span>
//                 <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">Python</span>
//               </div>
//             </div>
//           </div>
//         </motion.div> */}
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-gradient-to-b from-background to-primary/5">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-6xl font-space font-bold mb-6">
//               Why Students <span className="neon-text">Choose PortTrack</span>
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//               Everything you need to showcase your skills, connect with peers, and land your dream opportunities.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => {
//               const Icon = feature.icon;
//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   className="glass-card rounded-xl p-8 hover-lift group cursor-pointer"
//                   onMouseEnter={() => setActiveFeature(index)}
//                 >
//                   <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
//                     <Icon className="h-8 w-8 text-white" />
//                   </div>
                  
//                   <h3 className="text-xl font-semibold font-space mb-3">{feature.title}</h3>
//                   <p className="text-muted-foreground mb-4">{feature.description}</p>
                  
//                   <ul className="space-y-2 mb-6">
//                     {feature.benefits.map((benefit, i) => (
//                       <li key={i} className="flex items-center text-sm">
//                         <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                         {benefit}
//                       </li>
//                     ))}
//                   </ul>
                  
//                   <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
//                     {feature.demo}
//                     <ChevronRight className="h-4 w-4 ml-1" />
//                   </Button>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-6xl font-space font-bold mb-6">
//               <span className="neon-text">Real Students.</span> Real Success.
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//               See how PortTrack is helping students around the world achieve their dreams.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 className="glass-card rounded-xl p-8 hover-lift"
//               >
//                 <div className="flex items-center space-x-4 mb-6">
//                   <div className="text-3xl">{testimonial.avatar}</div>
//                   <div>
//                     <div className="font-semibold">{testimonial.name}</div>
//                     <div className="text-sm text-muted-foreground">{testimonial.role}</div>
//                   </div>
//                 </div>
                
//                 <blockquote className="text-muted-foreground mb-4 italic">
//                   "{testimonial.quote}"
//                 </blockquote>
                
//                 <div className="flex items-center">
//                   <Award className="h-4 w-4 text-yellow-500 mr-2" />
//                   <span className="text-sm font-medium text-primary">{testimonial.achievement}</span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 relative overflow-hidden">
//         <div className="absolute inset-0 bg-black/20" />
//         <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl md:text-6xl font-space font-bold mb-6">
//               Ready to Build Your Future?
//             </h2>
//             <p className="text-xl mb-8 opacity-90">
//               Join thousands of students who are already using PortTrack to showcase their skills and land amazing opportunities.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button 
//                 size="lg" 
//                 className="bg-white text-purple-600 hover:bg-white/90 text-lg px-8 py-4 h-auto font-semibold"
//                 asChild
//               >
//                 <Link to="/auth">
//                   <Rocket className="h-5 w-5 mr-2" />
//                   Get Started Free
//                 </Link>
//               </Button>
              
//               <Button 
//                 size="lg" 
//                 variant="outline" 
//                 className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 h-auto"
//                 onClick={startStoryMode}
//               >
//                 <Play className="h-5 w-5 mr-2" />
//                 Watch Success Stories
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Story Modal (Spotify Wrapped Style) */}
//       <AnimatePresence>
//         {showStoryModal && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
//             onClick={closeStoryModal}
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               className="relative w-full max-w-md h-[80vh] rounded-2xl overflow-hidden"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Story Progress Bars */}
//               <div className="absolute top-4 left-4 right-4 z-20 flex space-x-1">
//                 {studentStories.map((_, index) => (
//                   <div key={index} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
//                     <div 
//                       className="h-full bg-white transition-all duration-100"
//                       style={{ 
//                         width: index < currentStory ? '100%' : 
//                                index === currentStory ? `${storyProgress}%` : '0%' 
//                       }}
//                     />
//                   </div>
//                 ))}
//               </div>

//               {/* Story Controls */}
//               <div className="absolute top-4 right-4 z-20 flex space-x-2">
//                 <button
//                   onClick={() => setIsMuted(!isMuted)}
//                   className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white"
//                 >
//                   {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
//                 </button>
//                 <button
//                   onClick={() => setIsStoryPlaying(!isStoryPlaying)}
//                   className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white"
//                 >
//                   {isStoryPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
//                 </button>
//                 <button
//                   onClick={closeStoryModal}
//                   className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white"
//                 >
//                   <X className="h-4 w-4" />
//                 </button>
//               </div>

//               {/* Story Content */}
//               <div className={`w-full h-full bg-gradient-to-br ${studentStories[currentStory].color} relative overflow-hidden`}>
//                 {/* Background Pattern */}
//                 <div className="absolute inset-0 opacity-10">
//                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
//                 </div>

//                 <div className="relative z-10 h-full flex flex-col justify-center items-center text-white p-8 text-center">
//                   {/* Student Avatar */}
//                   <div className="text-6xl mb-4">{studentStories[currentStory].avatar}</div>
                  
//                   {/* Student Info */}
//                   <h2 className="text-2xl font-bold font-space mb-2">{studentStories[currentStory].name}</h2>
//                   <p className="text-lg opacity-90 mb-2">{studentStories[currentStory].university}</p>
//                   <p className="text-sm opacity-75 mb-8">Class of {studentStories[currentStory].year}</p>

//                   {/* Stats Grid */}
//                   <div className="grid grid-cols-2 gap-4 w-full mb-8">
//                     {Object.entries(studentStories[currentStory].stats).map(([key, value]) => (
//                       <div key={key} className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
//                         <div className="text-2xl font-bold">{value}</div>
//                         <div className="text-xs opacity-75 capitalize">
//                           {key.replace(/([A-Z])/g, ' $1').trim()}
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Top Achievement */}
//                   <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm w-full mb-6">
//                     <div className="text-sm opacity-75 mb-1">Top Skill</div>
//                     <div className="text-lg font-semibold">{studentStories[currentStory].topSkill}</div>
//                   </div>

//                   {/* Journey */}
//                   <p className="text-sm opacity-90 italic">"{studentStories[currentStory].journey}"</p>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Home;
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { onAuthStateChanged } from 'firebase/auth';
import { get, ref } from 'firebase/database';
import { auth, db } from '@/firebase';
import {
  ArrowRight, Sparkles, Zap, Shield, Trophy, Users, Brain, Rocket, Play, ChevronRight,
  Award, CheckCircle, X, Volume2, VolumeX, MapPin, Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Typewriter from 'typewriter-effect';
import Confetti from 'react-confetti'; // Install via `npm i react-confetti`

const Home = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [currentStory, setCurrentStory] = useState(0);
  const [isStoryPlaying, setIsStoryPlaying] = useState(false);
  const [storyProgress, setStoryProgress] = useState(0);
  const [showStoryModal, setShowStoryModal] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [user, setUser] = useState(null);
  const [portfolioProgress, setPortfolioProgress] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const heroRef = useRef(null);
  const storyIntervalRef = useRef(null);
  const navigate = useNavigate();

  // Dummy data for student stories
  const studentStories = [
    {
      id: 1,
      name: "Alex Chen",
      university: "MIT",
      avatar: "👨‍💻",
      year: "2024",
      stats: { hackathonsWon: 12, projectsBuilt: 28, skillsLearned: 15, connectionsGained: 247 },
      achievements: ["Google Intern", "Hackathon Champion"],
      topSkill: "React & AI",
      journey: "From zero coding to Google internship in 18 months",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      name: "Aisha Khan",
      university: "Caltech",
      avatar: "👩‍🔬",
      year: "2025",
      stats: { hackathonsWon: 5, projectsBuilt: 15, skillsLearned: 10, connectionsGained: 120 },
      achievements: ["Research Fellow", "AI Conference Speaker"],
      topSkill: "Data Science",
      journey: "Built an AI model for climate research",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "Sofia Alvarez",
      university: "University of Tokyo",
      avatar: "👩‍💻",
      year: "2023",
      stats: { hackathonsWon: 7, projectsBuilt: 20, skillsLearned: 12, connectionsGained: 180 },
      achievements: ["Startup Founder", "Global Hackathon Winner"],
      topSkill: "Full-Stack Development",
      journey: "Launched a startup that empowers women in tech",
      color: "from-green-500 to-teal-500"
    }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Portfolio",
      description: "Create a professional portfolio with AI-driven insights and GitHub integration.",
      benefits: ["Smart project suggestions", "GitHub integration", "Portfolio optimization"],
      color: "from-purple-500 to-pink-500",
      demo: "Try the AI builder",
      gif: "/gifs/ai-portfolio.gif" // Placeholder for demo GIF
    },
    {
      icon: Users,
      title: "Student Community",
      description: "Connect with peers, join local events, and collaborate on projects.",
      benefits: ["Find collaborators", "Join hackathons", "Networking events"],
      color: "from-blue-500 to-cyan-500",
      demo: "Explore the community",
      gif: "/gifs/community.gif"
    },
    {
      icon: Trophy,
      title: "Verified Achievements",
      description: "Showcase trusted, blockchain-verified certificates to impress employers.",
      benefits: ["Employer trust", "Global recognition", "Secure credentials"],
      color: "from-yellow-500 to-orange-500",
      demo: "Verify a certificate",
      gif: "/gifs/verification.gif"
    }
  ];

  const liveStats = [
    { label: "Why PortTrack?", value: "AI-driven portfolio builder", icon: Brain },
    { label: "", value: "Join 10K+ students", icon: Users },
    { label: "", value: "Land your dream job", icon: Briefcase }
  ];

  // Firebase Authentication
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const userRef = ref(db, `users/${currentUser.uid}`);
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          setPortfolioProgress(data.portfolioProgress || 0);
        }
      } else {
        setUser(null);
        setPortfolioProgress(0);
        // Show onboarding modal for unauthenticated users after 5 seconds
        const timer = setTimeout(() => setShowOnboarding(true), 5000);
        return () => clearTimeout(timer);
      }
    });
    return () => unsubscribe();
  }, []);

  // Story modal logic
  useEffect(() => {
    if (isStoryPlaying && showStoryModal) {
      storyIntervalRef.current = setInterval(() => {
        setStoryProgress(prev => {
          if (prev >= 100) {
            setCurrentStory(prevStory => (prevStory + 1) % studentStories.length);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
    } else {
      clearInterval(storyIntervalRef.current);
    }
    return () => clearInterval(storyIntervalRef.current);
  }, [isStoryPlaying, showStoryModal, currentStory]);

  // Particle animation
  useEffect(() => {
    const createParticle = () => {
      if (!heroRef.current) return;
      const particle = document.createElement('div');
      particle.className = 'absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-50';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      heroRef.current.appendChild(particle);
      particle.animate([
        { transform: 'translate(0, 0) scale(0)', opacity: 0 },
        { transform: `translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) scale(1)`, opacity: 0.5 },
        { transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0)`, opacity: 0 }
      ], { duration: 3000, easing: 'ease-out' }).onfinish = () => particle.remove();
    };
    const interval = setInterval(createParticle, 500);
    return () => clearInterval(interval);
  }, []);

  const startStoryMode = () => {
    setShowStoryModal(true);
    setCurrentStory(0);
    setStoryProgress(0);
    setIsStoryPlaying(true);
    if (user) setShowConfetti(true); // Trigger confetti for authenticated users
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const closeStoryModal = () => {
    setShowStoryModal(false);
    setIsStoryPlaying(false);
    setStoryProgress(0);
    setCurrentStory(0);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Existing Navbar (Unchanged) */}
      {/* <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <div className="text-2xl font-bold font-space text-primary">PortTrack</div>
          <div className="flex space-x-4">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <Link to="#features" className="text-muted-foreground hover:text-primary">Features</Link>
            <Link to="#stories" className="text-muted-foreground hover:text-primary">Stories</Link>
            {user ? (
              <Link to="/dashboard" className="text-muted-foreground hover:text-primary">Profile</Link>
            ) : (
              <Link to="/auth" className="text-muted-foreground hover:text-primary">Sign In</Link>
            )}
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-primary/5 overflow-hidden">
        {/* Background Video/GIF */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 object-cover w-full h-full opacity-20"
        >
          <source src="/videos/portfolio-bg.mp4" type="video/mp4" /> {/* Placeholder path */}
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Typewriter Tagline */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Typewriter
              options={{
                strings: ["Create Your Portfolio", "Connect with Peers", "Launch Your Career"],
                autoStart: true,
                loop: true
              }}
              className="text-xl md:text-2xl text-primary font-semibold"
            />
          </motion.div>
          {/* Personalized Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-space font-bold mb-6"
          >
            {user ? (
              <>
                Welcome, <span className="neon-text">{user.displayName || user.email.split('@')[0]}</span>!
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Build Your Future
                </span>
              </>
            ) : (
              <>
                <span className="neon-text">One Portfolio.</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Endless Possibilities.
                </span>
              </>
            )}
          </motion.h1>
          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            {user
              ? `Your portfolio is ${portfolioProgress}% complete. Add projects to stand out!`
              : "Build a portfolio, connect with peers, and get hired by top companies."}
          </motion.p>
          {/* Progress Bar for Authenticated Users */}
          {user && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '100%' }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-64 mx-auto mb-8"
            >
              <div className="text-sm text-muted-foreground mb-2">Portfolio Progress</div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full"
                  style={{ width: `${portfolioProgress}%` }}
                />
              </div>
            </motion.div>
          )}
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              className="gradient-purple-cyan hover-lift text-lg px-8 py-4 h-auto"
              asChild
            >
              <Link to={user ? "/profile" : "/auth"}>
                <Rocket className="h-5 w-5 mr-2" />
                {user ? "Add a Project" : "Start Building Now"}
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass hover-glow text-lg px-8 py-4 h-auto"
              asChild
            >
              {user ? (
                <Link to="#features">
                  <Play className="h-5 w-5 mr-2" />
                  Explore Features
                </Link>
              ) : (
                <Link to="#features">
                  <Play className="h-5 w-5 mr-2" />
                  Take a Tour
                </Link>
              )}
            </Button>
          </motion.div>
          {/* Why PortTrack Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-4"
          >
            {liveStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 }}
                  className="glass-card rounded-xl p-4 hover-lift"
                >
                  <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">{stat.value}</div>
                </motion.div>
              );
            })}
          </motion.div>
          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronRight className="h-6 w-6 text-primary rotate-90" />
          </motion.div>
        </div>
      </section>

      {/* Your Next Steps Section (Authenticated Users Only) */}
      {user && (
        <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-space font-bold mb-4">
                Your Next Steps, <span className="neon-text">{user.displayName || user.email.split('@')[0]}</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Take these actions to boost your portfolio and career.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Connect GitHub", description: "Import your projects automatically.", icon: Brain, action: "Connect Now", link: "/profile/github" },
                { title: "Join a Hackathon", description: "Find local events to showcase your skills.", icon: Trophy, action: "Find Events", link: "/events" },
                { title: "Add a Skill", description: "Highlight your expertise to recruiters.", icon: Zap, action: "Add Skill", link: "/profile/skills" }
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-xl p-6 hover-lift"
                  >
                    <Icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <Button variant="ghost" asChild>
                      <Link to={step.link}>{step.action} <ChevronRight className="h-4 w-4 ml-1" /></Link>
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-space font-bold mb-6">
              Why <span className="neon-text">PortTrack</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to shine as a student and launch your career.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl p-8 hover-lift group cursor-pointer relative"
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  {/* Demo GIF on Hover */}
                  {activeFeature === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden z-10"
                    >
                      <img src={feature.gif} alt={`${feature.title} demo`} className="w-full h-full object-cover opacity-80" />
                    </motion.div>
                  )}
                  <h3 className="text-xl font-semibold font-space mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-2 mb-6">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                    {feature.demo}
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Modal */}
      <AnimatePresence>
        {showStoryModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeStoryModal}
          >
            {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-md h-[80vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-4 left-4 right-4 z-20 flex space-x-1">
                {studentStories.map((_, index) => (
                  <div key={index} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white transition-all duration-100"
                      style={{ width: index < currentStory ? '100%' : index === currentStory ? `${storyProgress}%` : '0%' }}
                    />
                  </div>
                ))}
              </div>
              <div className="absolute top-4 right-4 z-20 flex space-x-2">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white"
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => setIsStoryPlaying(!isStoryPlaying)}
                  className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white"
                >
                  {isStoryPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </button>
                <button
                  onClick={closeStoryModal}
                  className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              {user && (
                <div className="absolute bottom-4 left-4 right-4 z-20 flex space-x-2">
                  <Button
                    onClick={() => {
                      navigate('/profile');
                      setShowConfetti(true);
                      setTimeout(() => setShowConfetti(false), 3000);
                    }}
                    className="bg-white text-purple-600 hover:bg-white/90"
                  >
                    Skip to My Journey
                  </Button>
                  <Button
                    onClick={() => navigate('/share-story')}
                    className="bg-white text-purple-600 hover:bg-white/90"
                  >
                    Share Your Story
                  </Button>
                </div>
              )}
              <div className={`w-full h-full bg-gradient-to-br ${studentStories[currentStory].color} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-white p-8 text-center">
                  <div className="text-6xl mb-4">{studentStories[currentStory].avatar}</div>
                  <h2 className="text-2xl font-bold font-space mb-2">{studentStories[currentStory].name}</h2>
                  <p className="text-lg opacity-90 mb-2">{studentStories[currentStory].university}</p>
                  <p className="text-sm opacity-75 mb-8">Class of {studentStories[currentStory].year}</p>
                  <div className="grid grid-cols-2 gap-4 w-full mb-8">
                    {Object.entries(studentStories[currentStory].stats).map(([key, value]) => (
                      <div key={key} className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                        <div className="text-2xl font-bold">{value}</div>
                        <div className="text-xs opacity-75 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm w-full mb-6">
                    <div className="text-sm opacity-75 mb-1">Top Skill</div>
                    <div className="text-lg font-semibold">{studentStories[currentStory].topSkill}</div>
                  </div>
                  <p className="text-sm opacity-90 italic">"{studentStories[currentStory].journey}"</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Onboarding Modal for Unauthenticated Users */}
      <AnimatePresence>
        {!user && showOnboarding && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowOnboarding(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-background rounded-xl p-8 max-w-md text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold font-space mb-4">Welcome to PortTrack!</h2>
              <p className="text-muted-foreground mb-6">
                Build a standout portfolio, connect with peers, and launch your career. Ready to start?
              </p>
              <div className="flex justify-center gap-4">
                <Button asChild>
                  <Link to="/auth">Get Started</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="#features">Take a Tour</Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;