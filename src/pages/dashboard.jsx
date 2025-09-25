// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { 
//   Users, 
//   Zap, 
//   Trophy, 
//   Calendar, 
//   Shield, 
//   Activity, 
//   FileText, 
//   BarChart3,
//   Github,
//   Award,
//   Brain,
//   Rocket,
//   Sparkles,
//   School
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Badge } from '@/components/ui/badge';
// import { auth } from '../firebase';
// import { getDatabase, ref, push, onValue } from 'firebase/database';
// import { db } from '../firebase';

// const Dashboard = () => {
//   const [user, setUser] = useState(null);
//   const [loadingAuth, setLoadingAuth] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [details, setDetails] = useState({
//     major: '',
//     university: '',
//     skills: [],
//     newSkill: '',
//     github: '',
//     certifications: '',
//     projects: '',
//     interests: ''
//   });

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((currentUser) => {
//       console.log('Dashboard: Current user:', currentUser);
//       setUser(currentUser);
//       setLoadingAuth(false);
//       if (currentUser) {
//         const dbRef = ref(db, `students/${currentUser.uid}/profile`);
//         onValue(dbRef, (snapshot) => {
//           const data = snapshot.val();
//           console.log('Dashboard: Profile data:', data);
//           if (data) {
//             const latestProfile = Object.values(data)[Object.values(data).length - 1];
//             setDetails({
//               major: latestProfile.major || '',
//               university: latestProfile.university || '',
//               skills: latestProfile.skills || [],
//               github: latestProfile.github || '',
//               certifications: latestProfile.certifications || '',
//               projects: latestProfile.projects || '',
//               interests: latestProfile.interests || '',
//               newSkill: ''
//             });
//           }
//         }, (error) => {
//           console.error('Dashboard: Error fetching profile:', error);
//           setError('Failed to load profile data.');
//         });
//       }
//     }, (error) => {
//       console.error('Dashboard: Auth error:', error);
//       setError('Authentication error.');
//       setLoadingAuth(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   const handleDetailsChange = (e) => {
//     setDetails({ ...details, [e.target.name]: e.target.value });
//   };

//   const addSkill = () => {
//     if (details.newSkill.trim()) {
//       setDetails({
//         ...details,
//         skills: [...details.skills, details.newSkill],
//         newSkill: ''
//       });
//     }
//   };

//   const removeSkill = (skill) => {
//     setDetails({
//       ...details,
//       skills: details.skills.filter((s) => s !== skill)
//     });
//   };

//   const handleDetailsSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       await push(ref(db, `students/${user?.uid}/profile`), {
//         major: details.major,
//         university: details.university,
//         skills: details.skills,
//         github: details.github,
//         certifications: details.certifications,
//         projects: details.projects,
//         interests: details.interests,
//         createdAt: new Date().toISOString()
//       });
//       alert('🎉 Profile updated successfully!');
//     } catch (error) {
//       console.error('Dashboard: Error saving profile:', error);
//       setError('Failed to save profile.');
//     }

//     setLoading(false);
//   };

//   const stats = [
//     { title: 'Projects Verified', value: '12', icon: Shield, change: '+2' },
//     { title: 'Hackathons Won', value: '3', icon: Trophy, change: '+1' },
//     { title: 'Connections', value: '156', icon: Users, change: '+12' },
//     { title: 'Portfolio Views', value: '2.4k', icon: BarChart3, change: '+15%' }
//   ];

//   const quickActions = [
//     { name: 'Add New Project', path: '/portfolio/new', icon: FileText },
//     { name: 'Join Hackathon', path: '/hackathons/join', icon: Calendar },
//     { name: 'View Applications', path: '/applications', icon: FileText },
//     { name: 'Blockchain Verify', path: '/blockchain-verification', icon: Shield }
//   ];

//   const recentActivity = [
//     { title: 'Project "AI Chatbot" Verified on Blockchain', date: 'Sep 23, 2025', type: 'verification' },
//     { title: 'Applied to Tech Innovators Hackathon', date: 'Sep 22, 2025', type: 'application' },
//     { title: 'New Connection: Jane Doe, Recruiter at TechCorp', date: 'Sep 21, 2025', type: 'connection' },
//     { title: 'Portfolio Viewed by 5 Recruiters', date: 'Sep 20, 2025', type: 'view' }
//   ];

//   if (loadingAuth) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-background">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="text-foreground text-lg"
//         >
//           Loading dashboard...
//         </motion.div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-background">
//         <Card className="glass-strong border-white/10">
//           <CardHeader>
//             <CardTitle className="text-primary">Error</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-muted-foreground">{error}</p>
//             <Link to="/auth">
//               <Button className="mt-4 gradient-purple-cyan">Go to Sign In</Button>
//             </Link>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
//             <div className="flex items-center space-x-3">
//               <Users className="h-8 w-8 text-primary" />
//               <h1 className="text-3xl font-bold text-foreground neon-text">
//                 {user ? `${user.displayName || user.email}'s Dashboard` : 'Dashboard'}
//               </h1>
//             </div>
//           </div>

//           <div className="glass-strong p-6 rounded-lg border border-white/10 mb-8">
//             <h2 className="text-xl font-semibold text-foreground mb-2">
//               Welcome back, {user ? (user.displayName || user.email) : 'Developer'}!
//             </h2>
//             <p className="text-muted-foreground">
//               Showcase your projects, connect with recruiters, and verify your achievements on the blockchain.
//             </p>
//           </div>

//           <div className="glass p-6 rounded-lg border border-white/10 mb-8">
//             <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
//               <Zap className="h-5 w-5 text-primary" />
//               <span>Quick Actions</span>
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//               {quickActions.map((action, index) => {
//                 const Icon = action.icon;
//                 return (
//                   <motion.div
//                     key={action.name}
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 0.2 + index * 0.1 }}
//                   >
//                     <Link to={action.path}>
//                       <Button
//                         variant="outline"
//                         size="sm"
//                         className="w-full h-12 justify-start space-x-2 hover-glow glass-strong hover:bg-white/10"
//                       >
//                         <Icon className="h-4 w-4" />
//                         <span>{action.name}</span>
//                       </Button>
//                     </Link>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             <Card className="glass-strong border-white/10">
//               <CardHeader>
//                 <CardTitle className="flex items-center space-x-2 text-primary">
//                   <Zap className="h-5 w-5" />
//                   <span>Your Stats</span>
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-2 gap-4">
//                   {stats.map((stat, index) => {
//                     const Icon = stat.icon;
//                     return (
//                       <motion.div
//                         key={stat.title}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.1 }}
//                         className="glass p-4 rounded-lg text-center"
//                       >
//                         <Icon className="h-6 w-6 mx-auto mb-2 text-primary" />
//                         <div className="text-2xl font-bold text-foreground">{stat.value}</div>
//                         <div className="text-xs text-muted-foreground">{stat.title}</div>
//                         <div className={`text-xs ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
//                           {stat.change}
//                         </div>
//                       </motion.div>
//                     );
//                   })}
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="glass-strong border-white/10">
//               <CardHeader>
//                 <CardTitle className="flex items-center space-x-2 text-primary">
//                   <Activity className="h-5 w-5" />
//                   <span>Recent Activity</span>
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-3">
//                   {recentActivity.map((item, index) => (
//                     <motion.div
//                       key={item.title}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
//                     >
//                       <div className={`w-2 h-2 rounded-full ${item.type === 'verification' ? 'bg-primary' : item.type === 'application' ? 'bg-blue-400' : item.type === 'connection' ? 'bg-green-400' : 'bg-purple-400'}`} />
//                       <div className="flex-1">
//                         <p className="text-sm font-medium text-foreground">{item.title}</p>
//                         <p className="text-xs text-muted-foreground">{item.date}</p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//                 <Button variant="ghost" size="sm" className="mt-4 w-full hover-glow">
//                   View All Activity
//                 </Button>
//               </CardContent>
//             </Card>

//             {user ? (
//               <Card className="glass-strong border-white/10 col-span-2">
//                 <CardHeader>
//                   <CardTitle className="flex items-center space-x-2 text-primary">
//                     <Sparkles className="h-5 w-5" />
//                     <span>Update Your Profile</span>
//                   </CardTitle>
//                   <p className="text-sm text-muted-foreground">
//                     Build your professional portfolio to showcase to recruiters.
//                   </p>
//                 </CardHeader>
//                 <CardContent>
//                   <form onSubmit={handleDetailsSubmit} className="space-y-6">
//                     <div>
//                       <label className="text-sm font-medium flex items-center gap-1">
//                         <School className="w-4 h-4" /> Major
//                       </label>
//                       <Input
//                         type="text"
//                         name="major"
//                         placeholder="Ex: Computer Science"
//                         value={details.major}
//                         onChange={handleDetailsChange}
//                       />
//                     </div>
//                     <div>
//                       <label className="text-sm font-medium flex items-center gap-1">
//                         <School className="w-4 h-4" /> University
//                       </label>
//                       <Input
//                         type="text"
//                         name="university"
//                         placeholder="Ex: DSU Bangalore"
//                         value={details.university}
//                         onChange={handleDetailsChange}
//                       />
//                     </div>
//                     <div>
//                       <label className="text-sm font-medium">Skills</label>
//                       <div className="flex gap-2">
//                         <Input
//                           type="text"
//                           name="newSkill"
//                           placeholder="Add a skill"
//                           value={details.newSkill}
//                           onChange={handleDetailsChange}
//                         />
//                         <Button type="button" onClick={addSkill}>Add</Button>
//                       </div>
//                       <div className="flex flex-wrap gap-2 mt-2">
//                         {details.skills.map((skill, idx) => (
//                           <Badge
//                             key={idx}
//                             onClick={() => removeSkill(skill)}
//                             className="cursor-pointer hover:bg-red-500/20"
//                           >
//                             {skill} ✕
//                           </Badge>
//                         ))}
//                       </div>
//                     </div>
//                     <div>
//                       <label className="text-sm font-medium flex items-center gap-1">
//                         <Github className="w-4 h-4" /> GitHub Profile
//                       </label>
//                       <Input
//                         type="url"
//                         name="github"
//                         placeholder="https://github.com/username"
//                         value={details.github}
//                         onChange={handleDetailsChange}
//                       />
//                     </div>
//                     <div>
//                       <label className="text-sm font-medium flex items-center gap-1">
//                         <Award className="w-4 h-4" /> Certifications
//                       </label>
//                       <Textarea
//                         name="certifications"
//                         placeholder="List your certifications..."
//                         value={details.certifications}
//                         onChange={handleDetailsChange}
//                       />
//                     </div>
//                     <div>
//                       <label className="text-sm font-medium flex items-center gap-1">
//                         <Rocket className="w-4 h-4" /> Projects
//                       </label>
//                       <Textarea
//                         name="projects"
//                         placeholder="Describe your projects..."
//                         value={details.projects}
//                         onChange={handleDetailsChange}
//                       />
//                     </div>
//                     <div>
//                       <label className="text-sm font-medium flex items-center gap-1">
//                         <Brain className="w-4 h-4" /> Interests
//                       </label>
//                       <Input
//                         type="text"
//                         name="interests"
//                         placeholder="AI, Blockchain, Design..."
//                         value={details.interests}
//                         onChange={handleDetailsChange}
//                       />
//                     </div>
//                     <Button
//                       type="submit"
//                       className="w-full gradient-purple-cyan hover-lift"
//                       disabled={loading || !user}
//                     >
//                       {loading ? 'Saving...' : 'Update Profile'}
//                     </Button>
//                   </form>
//                 </CardContent>
//               </Card>
//             ) : (
//               <Card className="glass-strong border-white/10 col-span-2">
//                 <CardHeader>
//                   <CardTitle className="flex items-center space-x-2 text-primary">
//                     <Sparkles className="h-5 w-5" />
//                     <span>Please Sign In</span>
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground">Sign in to update your profile.</p>
//                   <Link to="/auth">
//                     <Button className="mt-4 gradient-purple-cyan">Sign In</Button>
//                   </Link>
//                 </CardContent>
//               </Card>
//             )}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };
// export default Dashboard;


// //crazy
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import {
//   Users,
//   Zap,
//   Trophy,
//   Calendar,
//   Shield,
//   Activity,
//   FileText,
//   BarChart3,
//   Github,
//   Award,
//   Brain,
//   Rocket,
//   Sparkles,
//   School
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Badge } from '@/components/ui/badge';
// import { auth, db } from '../firebase';
// import { get, ref, set, onValue } from 'firebase/database';
// import toast, { Toaster } from 'react-hot-toast'; // Requires `npm i react-hot-toast`

// const Dashboard = () => {
//   const [user, setUser] = useState(null);
//   const [loadingAuth, setLoadingAuth] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [details, setDetails] = useState({
//     major: '',
//     university: '',
//     skills: [],
//     newSkill: '',
//     github: '',
//     certifications: '',
//     projects: '',
//     interests: ''
//   });

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((currentUser) => {
//       console.log('Dashboard: Current user:', currentUser);
//       setUser(currentUser);
//       setLoadingAuth(false);
//       if (currentUser) {
//         // Fetch data from students/{uid}
//         const profileRef = ref(db, `students/${currentUser.uid}`);
//         onValue(
//           profileRef,
//           (snapshot) => {
//             const data = snapshot.val();
//             console.log('Dashboard: Profile data:', data);
//             if (data) {
//               setDetails({
//                 major: data.major || '',
//                 university: data.university || '',
//                 skills: data.skills || [],
//                 github: data.github || '',
//                 certifications: data.certifications || '',
//                 projects: data.projects || '',
//                 interests: data.interests || '',
//                 newSkill: ''
//               });
//             } else {
//               // Initialize with empty values if no data exists
//               setDetails({
//                 major: '',
//                 university: '',
//                 skills: [],
//                 github: '',
//                 certifications: '',
//                 projects: '',
//                 interests: '',
//                 newSkill: ''
//               });
//             }
//           },
//           (error) => {
//             console.error('Dashboard: Error fetching profile:', error);
//             setError('Failed to load profile data.');
//             toast.error('Failed to load profile data.');
//           }
//         );
//       }
//     }, (error) => {
//       console.error('Dashboard: Auth error:', error);
//       setError('Authentication error.');
//       toast.error('Authentication error.');
//       setLoadingAuth(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   const handleDetailsChange = (e) => {
//     setDetails({ ...details, [e.target.name]: e.target.value });
//   };

//   const addSkill = () => {
//     if (details.newSkill.trim()) {
//       setDetails({
//         ...details,
//         skills: [...details.skills, details.newSkill.trim()],
//         newSkill: ''
//       });
//     }
//   };

//   const removeSkill = (skill) => {
//     setDetails({
//       ...details,
//       skills: details.skills.filter((s) => s !== skill)
//     });
//   };

//   const handleDetailsSubmit = async (e) => {
//     e.preventDefault();
//     if (!user) {
//       setError('You must be signed in to update your profile.');
//       toast.error('You must be signed in to update your profile.');
//       return;
//     }
//     // Basic validation
//     if (
//       !details.major.trim() &&
//       !details.university.trim() &&
//       !details.skills.length &&
//       !details.github.trim() &&
//       !details.certifications.trim() &&
//       !details.projects.trim() &&
//       !details.interests.trim()
//     ) {
//       setError('Please fill in at least one field.');
//       toast.error('Please fill in at least one field.');
//       return;
//     }
//     setLoading(true);
//     setError(null);
//     try {
//       // Overwrite data at students/{uid}
      // await set(ref(db, `students/${user.uid}`), {
      //   major: details.major.trim(),
      //   university: details.university.trim(),
      //   skills: details.skills,
      //   github: details.github.trim(),
      //   certifications: details.certifications.trim(),
      //   projects: details.projects.trim(),
      //   interests: details.interests.trim(),
      //   createdAt: new Date().toISOString()
      // });
//       toast.success('🎉 Profile updated successfully!');
//     } catch (error) {
//       console.error('Dashboard: Error saving profile:', error);
//       setError('Failed to save profile.');
//       toast.error('Failed to save profile.');
//     }
//     setLoading(false);
//   };

//   const stats = [
//     { title: 'Projects Verified', value: '12', icon: Shield, change: '+2' },
//     { title: 'Hackathons Won', value: '3', icon: Trophy, change: '+1' },
//     { title: 'Connections', value: '156', icon: Users, change: '+12' },
//     { title: 'Portfolio Views', value: '2.4k', icon: BarChart3, change: '+15%' }
//   ];

//   const quickActions = [
//     { name: 'Add New Project', path: '/portfolio/new', icon: FileText },
//     { name: 'Join Hackathon', path: '/hackathons/join', icon: Calendar },
//     { name: 'View Applications', path: '/applications', icon: FileText },
//     { name: 'Blockchain Verify', path: '/blockchain-verification', icon: Shield }
//   ];

//   const recentActivity = [
//     { title: 'Project "AI Chatbot" Verified on Blockchain', date: 'Sep 23, 2025', type: 'verification' },
//     { title: 'Applied to Tech Innovators Hackathon', date: 'Sep 22, 2025', type: 'application' },
//     { title: 'New Connection: Jane Doe, Recruiter at TechCorp', date: 'Sep 21, 2025', type: 'connection' },
//     { title: 'Portfolio Viewed by 5 Recruiters', date: 'Sep 20, 2025', type: 'view' }
//   ];

//   if (loadingAuth) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-background">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="text-foreground text-lg"
//         >
//           Loading dashboard...
//         </motion.div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-background">
//         <Card className="glass-strong border-white/10">
//           <CardHeader>
//             <CardTitle className="text-primary">Error</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-muted-foreground">{error}</p>
//             <Link to="/auth">
//               <Button className="mt-4 gradient-purple-cyan">Go to Sign In</Button>
//             </Link>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       <Toaster position="top-right" />
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
//             <div className="flex items-center space-x-3">
//               <Users className="h-8 w-8 text-primary" />
//               <h1 className="text-3xl font-bold text-foreground neon-text">
//                 {user ? `${user.displayName || user.email}'s Dashboard` : 'Dashboard'}
//               </h1>
//             </div>
//           </div>
//           <div className="glass-strong p-6 rounded-lg border border-white/10 mb-8">
//             <h2 className="text-xl font-semibold text-foreground mb-2">
//               Welcome back, {user ? (user.displayName || user.email) : 'Developer'}!
//             </h2>
//             <p className="text-muted-foreground">
//               Showcase your projects, connect with recruiters, and verify your achievements on the blockchain.
//             </p>
//           </div>
//           <div className="glass p-6 rounded-lg border border-white/10 mb-8">
//             <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
//               <Zap className="h-5 w-5 text-primary" />
//               <span>Quick Actions</span>
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//               {quickActions.map((action, index) => {
//                 const Icon = action.icon;
//                 return (
//                   <motion.div
//                     key={action.name}
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 0.2 + index * 0.1 }}
//                   >
//                     <Link to={action.path}>
//                       <Button
//                         variant="outline"
//                         size="sm"
//                         className="w-full h-12 justify-start space-x-2 hover-glow glass-strong hover:bg-white/10"
//                       >
//                         <Icon className="h-4 w-4" />
//                         <span>{action.name}</span>
//                       </Button>
//                     </Link>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             <Card className="glass-strong border-white/10">
//               <CardHeader>
//                 <CardTitle className="flex items-center space-x-2 text-primary">
//                   <Zap className="h-5 w-5" />
//                   <span>Your Stats</span>
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-2 gap-4">
//                   {stats.map((stat, index) => {
//                     const Icon = stat.icon;
//                     return (
//                       <motion.div
//                         key={stat.title}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.1 }}
//                         className="glass p-4 rounded-lg text-center"
//                       >
//                         <Icon className="h-6 w-6 mx-auto mb-2 text-primary" />
//                         <div className="text-2xl font-bold text-foreground">{stat.value}</div>
//                         <div className="text-xs text-muted-foreground">{stat.title}</div>
//                         <div className={`text-xs ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
//                           {stat.change}
//                         </div>
//                       </motion.div>
//                     );
//                   })}
//                 </div>
//               </CardContent>
//             </Card>
//             <Card className="glass-strong border-white/10">
//               <CardHeader>
//                 <CardTitle className="flex items-center space-x-2 text-primary">
//                   <Activity className="h-5 w-5" />
//                   <span>Recent Activity</span>
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-3">
//                   {recentActivity.map((item, index) => (
//                     <motion.div
//                       key={item.title}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
//                     >
//                       <div className={`w-2 h-2 rounded-full ${item.type === 'verification' ? 'bg-primary' : item.type === 'application' ? 'bg-blue-400' : item.type === 'connection' ? 'bg-green-400' : 'bg-purple-400'}`} />
//                       <div className="flex-1">
//                         <p className="text-sm font-medium text-foreground">{item.title}</p>
//                         <p className="text-xs text-muted-foreground">{item.date}</p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//                 <Button variant="ghost" size="sm" className="mt-4 w-full hover-glow">
//                   View All Activity
//                 </Button>
//               </CardContent>
//             </Card>
//             {user ? (
//               <Card className="glass-strong border-white/10 col-span-2">
//                 <CardHeader>
//                   <CardTitle className="flex items-center space-x-2 text-primary">
//                     <Sparkles className="h-5 w-5" />
//                     <span>Your Profile Details</span>
//                   </CardTitle>
//                   <p className="text-sm text-muted-foreground">
//                     Update your professional portfolio to showcase to recruiters.
//                   </p>
//                 </CardHeader>
//                 <CardContent>
//                   <form onSubmit={handleDetailsSubmit} className="space-y-6">
//                     <div>
//                       <label className="text-sm font-medium flex items-center gap-1">
//                         <School className="w-4 h-4" /> Major
//                       </label>
//                       <Input
//                         type="text"
//                         name="major"
//                         placeholder="Ex: Computer Science"
//                         value={details.major}
//                         onChange={handleDetailsChange}
//                       />
//                     </div>
//                     <div>
//                       <label className="text-sm font-medium flex items-center gap-1">
//                         <School className="w-4 h-4" /> University
//                       </label>
//                       <Input
//                         type="text"
//                         name="university"
//                         placeholder="Ex: DSU Bangalore"
//                         value={details.university}
//                         onChange={handleDetailsChange}
//                       />
//                     </div>
//                     <div>
//                       <label className="text-sm font-medium">Skills</label>
//                       <div className="flex gap-2">
//                         <Input
//                           type="text"
//                           name="newSkill"
//                           placeholder="Add a skill"
//                           value={details.newSkill}
//                           onChange={handleDetailsChange}
//                         />
//                         <Button type="button" onClick={addSkill}>Add</Button>
//                       </div>
//                       <div className="flex flex-wrap gap-2 mt-2">
//                         {details.skills.map((skill, idx) => (
//                           <Badge
//                             key={idx}
//                             onClick={() => removeSkill(skill)}
//                             className="cursor-pointer hover:bg-red-500/20"
//                           >
//                             {skill} ✕
//                           </Badge>
//                         ))}
//                       </div>
//                     </div>
//                     <div>
//                       <label className="text-sm font-medium flex items-center gap-1">
//                         <Github className="w-4 h-4" /> GitHub Profile
//                       </label>
//                       <Input
//                         type="url"
//                         name="github"
//                         placeholder="https://github.com/username"
//                         value={details.github}
//                         onChange={handleDetailsChange}
//                       />
//                     </div>
//                     <div>
//                       <label className="text-sm font-medium flex items-center gap-1">
//                         <Award className="w-4 h-4" /> Certifications
//                       </label>
//                       <Textarea
//                         name="certifications"
//                         placeholder="List your certifications..."
//                         value={details.certifications}
//                         onChange={handleDetailsChange}
//                       />
//                     </div>
//                     <div>
//                       <label className="text-sm font-medium flex items-center gap-1">
//                         <Rocket className="w-4 h-4" /> Projects
//                       </label>
//                       <Textarea
//                         name="projects"
//                         placeholder="Describe your projects..."
//                         value={details.projects}
//                         onChange={handleDetailsChange}
//                       />
//                     </div>
//                     <div>
//                       <label className="text-sm font-medium flex items-center gap-1">
//                         <Brain className="w-4 h-4" /> Interests
//                       </label>
//                       <Input
//                         type="text"
//                         name="interests"
//                         placeholder="AI, Blockchain, Design..."
//                         value={details.interests}
//                         onChange={handleDetailsChange}
//                       />
//                     </div>
//                     <Button
//                       type="submit"
//                       className="w-full gradient-purple-cyan hover-lift"
//                       disabled={loading || !user}
//                     >
//                       {loading ? 'Saving...' : 'Update Profile'}
//                     </Button>
//                   </form>
//                 </CardContent>
//               </Card>
//             ) : (
//               <Card className="glass-strong border-white/10 col-span-2">
//                 <CardHeader>
//                   <CardTitle className="flex items-center space-x-2 text-primary">
//                     <Sparkles className="h-5 w-5" />
//                     <span>Please Sign In</span>
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground">Sign in to update your profile.</p>
//                   <Link to="/auth">
//                     <Button className="mt-4 gradient-purple-cyan">Sign In</Button>
//                   </Link>
//                 </CardContent>
//               </Card>
//             )}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




//details
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import {
//   Users,
//   Zap,
//   Trophy,
//   Calendar,
//   Shield,
//   Activity,
//   FileText,
//   BarChart3,
//   Github,
//   Award,
//   Brain,
//   Rocket,
//   Sparkles,
//   School,
//   ExternalLink
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Badge } from '@/components/ui/badge';
// import { auth, db } from '../firebase';
// import { get, ref, set, onValue } from 'firebase/database';
// import toast, { Toaster } from 'react-hot-toast';

// const Dashboard = () => {
//   const [user, setUser] = useState(null);
//   const [loadingAuth, setLoadingAuth] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [details, setDetails] = useState({
//     major: '',
//     university: '',
//     skills: [],
//     newSkill: '',
//     github: '',
//     certifications: '',
//     projects: '',
//     interests: ''
//   });
//   const [userProjects, setUserProjects] = useState([]);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((currentUser) => {
//       console.log('Dashboard: Current user:', currentUser);
//       setUser(currentUser);
//       setLoadingAuth(false);
//       if (currentUser) {
//         // Fetch profile data from students/{uid}/profile
//         const profileRef = ref(db, `students/${currentUser.uid}/profile`);
//         onValue(
//           profileRef,
//           (snapshot) => {
//             const data = snapshot.val();
//             console.log('Dashboard: Profile data:', data);
//             if (data) {
//               setDetails({
//                 major: data.major || '',
//                 university: data.university || '',
//                 skills: data.skills || [],
//                 github: data.github || '',
//                 certifications: data.certifications || '',
//                 projects: data.projects || '',
//                 interests: data.interests || '',
//                 newSkill: ''
//               });
//             } else {
//               setDetails({
//                 major: '',
//                 university: '',
//                 skills: [],
//                 github: '',
//                 certifications: '',
//                 projects: '',
//                 interests: '',
//                 newSkill: ''
//               });
//             }
//           },
//           (error) => {
//             console.error('Dashboard: Error fetching profile:', error);
//             setError('Failed to load profile data.');
//             toast.error('Failed to load profile data.');
//           }
//         );

//         // Fetch projects from students/{uid}/projects
//         const projectsRef = ref(db, `students/${currentUser.uid}/projects`);
//         onValue(
//           projectsRef,
//           (snapshot) => {
//             const data = snapshot.val();
//             console.log('Dashboard: Projects data:', data);
//             if (data) {
//               const projectsArray = Object.entries(data).map(([id, project]) => ({
//                 id,
//                 ...project
//               }));
//               setUserProjects(projectsArray);
//             } else {
//               setUserProjects([]);
//             }
//           },
//           (error) => {
//             console.error('Dashboard: Error fetching projects:', error);
//             toast.error('Failed to load projects.');
//           }
//         );
//       }
//     }, (error) => {
//       console.error('Dashboard: Auth error:', error);
//       setError('Authentication error.');
//       toast.error('Authentication error.');
//       setLoadingAuth(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   const handleDetailsChange = (e) => {
//     setDetails({ ...details, [e.target.name]: e.target.value });
//   };

//   const addSkill = () => {
//     if (details.newSkill.trim()) {
//       setDetails({
//         ...details,
//         skills: [...details.skills, details.newSkill.trim()],
//         newSkill: ''
//       });
//     }
//   };

//   const removeSkill = (skill) => {
//     setDetails({
//       ...details,
//       skills: details.skills.filter((s) => s !== skill)
//     });
//   };

//   const handleDetailsSubmit = async (e) => {
//     e.preventDefault();
//     if (!user) {
//       setError('You must be signed in to update your profile.');
//       toast.error('You must be signed in to update your profile.');
//       return;
//     }
//     if (
//       !details.major.trim() &&
//       !details.university.trim() &&
//       !details.skills.length &&
//       !details.github.trim() &&
//       !details.certifications.trim() &&
//       !details.projects.trim() &&
//       !details.interests.trim()
//     ) {
//       setError('Please fill in at least one field.');
//       toast.error('Please fill in at least one field.');
//       return;
//     }
//     setLoading(true);
//     setError(null);
//     try {
//       await set(ref(db, `students/${user.uid}`), {
//         major: details.major.trim(),
//         university: details.university.trim(),
//         skills: details.skills,
//         github: details.github.trim(),
//         certifications: details.certifications.trim(),
//         projects: details.projects.trim(),
//         interests: details.interests.trim(),
//         createdAt: new Date().toISOString()
//       });
//       toast.success('🎉 Profile updated successfully!');
//     } catch (error) {
//       console.error('Dashboard: Error saving profile:', error);
//       setError('Failed to save profile.');
//       toast.error('Failed to save profile.');
//     }
//     setLoading(false);
//   };

//   const stats = [
//     { title: 'Projects Verified', value: '12', icon: Shield, change: '+2' },
//     { title: 'Hackathons Won', value: '3', icon: Trophy, change: '+1' },
//     { title: 'Connections', value: '156', icon: Users, change: '+12' },
//     { title: 'Portfolio Views', value: '2.4k', icon: BarChart3, change: '+15%' }
//   ];

//   const quickActions = [
//     { name: 'Add New Project', path: '/portfolio/new', icon: FileText },
//     { name: 'Join Hackathon', path: '/hackathons/join', icon: Calendar },
//     { name: 'View Applications', path: '/applications', icon: FileText },
//     { name: 'Blockchain Verify', path: '/blockchain-verification', icon: Shield }
//   ];

//   const recentActivity = [
//     { title: 'Project "AI Chatbot" Verified on Blockchain', date: 'Sep 23, 2025', type: 'verification' },
//     { title: 'Applied to Tech Innovators Hackathon', date: 'Sep 22, 2025', type: 'application' },
//     { title: 'New Connection: Jane Doe, Recruiter at TechCorp', date: 'Sep 21, 2025', type: 'connection' },
//     { title: 'Portfolio Viewed by 5 Recruiters', date: 'Sep 20, 2025', type: 'view' }
//   ];

//   if (loadingAuth) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-background">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="text-foreground text-lg"
//         >
//           Loading dashboard...
//         </motion.div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-background">
//         <Card className="glass-strong border-white/10">
//           <CardHeader>
//             <CardTitle className="text-primary">Error</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-muted-foreground">{error}</p>
//             <Link to="/auth">
//               <Button className="mt-4 gradient-purple-cyan">Go to Sign In</Button>
//             </Link>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       <Toaster position="top-right" />
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
//             <div className="flex items-center space-x-3">
//               <Users className="h-8 w-8 text-primary" />
//               <h1 className="text-3xl font-bold text-foreground neon-text">
//                 {user ? `${user.displayName || user.email}'s Dashboard` : 'Dashboard'}
//               </h1>
//             </div>
//           </div>
//           <div className="glass-strong p-6 rounded-lg border border-white/10 mb-8">
//             <h2 className="text-xl font-semibold text-foreground mb-2">
//               Welcome back, {user ? (user.displayName || user.email) : 'Developer'}!
//             </h2>
//             <p className="text-muted-foreground">
//               Showcase your projects, connect with recruiters, and verify your achievements on the blockchain.
//             </p>
//           </div>
//           <div className="glass p-6 rounded-lg border border-white/10 mb-8">
//             <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
//               <Zap className="h-5 w-5 text-primary" />
//               <span>Quick Actions</span>
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//               {quickActions.map((action, index) => {
//                 const Icon = action.icon;
//                 return (
//                   <motion.div
//                     key={action.name}
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 0.2 + index * 0.1 }}
//                   >
//                     <Link to={action.path}>
//                       <Button
//                         variant="outline"
//                         size="sm"
//                         className="w-full h-12 justify-start space-x-2 hover-glow glass-strong hover:bg-white/10"
//                       >
//                         <Icon className="h-4 w-4" />
//                         <span>{action.name}</span>
//                       </Button>
//                     </Link>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             <Card className="glass-strong border-white/10">
//               <CardHeader>
//                 <CardTitle className="flex items-center space-x-2 text-primary">
//                   <Zap className="h-5 w-5" />
//                   <span>Your Stats</span>
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-2 gap-4">
//                   {stats.map((stat, index) => {
//                     const Icon = stat.icon;
//                     return (
//                       <motion.div
//                         key={stat.title}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.1 }}
//                         className="glass p-4 rounded-lg text-center"
//                       >
//                         <Icon className="h-6 w-6 mx-auto mb-2 text-primary" />
//                         <div className="text-2xl font-bold text-foreground">{stat.value}</div>
//                         <div className="text-xs text-muted-foreground">{stat.title}</div>
//                         <div className={`text-xs ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
//                           {stat.change}
//                         </div>
//                       </motion.div>
//                     );
//                   })}
//                 </div>
//               </CardContent>
//             </Card>
//             <Card className="glass-strong border-white/10">
//               <CardHeader>
//                 <CardTitle className="flex items-center space-x-2 text-primary">
//                   <Activity className="h-5 w-5" />
//                   <span>Recent Activity</span>
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-3">
//                   {recentActivity.map((item, index) => (
//                     <motion.div
//                       key={item.title}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
//                     >
//                       <div className={`w-2 h-2 rounded-full ${item.type === 'verification' ? 'bg-primary' : item.type === 'application' ? 'bg-blue-400' : item.type === 'connection' ? 'bg-green-400' : 'bg-purple-400'}`} />
//                       <div className="flex-1">
//                         <p className="text-sm font-medium text-foreground">{item.title}</p>
//                         <p className="text-xs text-muted-foreground">{item.date}</p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//                 <Button variant="ghost" size="sm" className="mt-4 w-full hover-glow">
//                   View All Activity
//                 </Button>
//               </CardContent>
//             </Card>
//             {user && (
//               <Card className="glass-strong border-white/10 col-span-2">
//                 <CardHeader>
//                   <CardTitle className="flex items-center space-x-2 text-primary">
//                     <Rocket className="h-5 w-5" />
//                     <span>Your Projects</span>
//                   </CardTitle>
//                   <p className="text-sm text-muted-foreground">
//                     Showcase your projects to recruiters and peers.
//                   </p>
//                 </CardHeader>
//                 <CardContent>
//                   {userProjects.length > 0 ? (
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       {userProjects.map((project, index) => (
//                         <motion.div
//                           key={project.id}
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: index * 0.1 }}
//                           className="glass p-4 rounded-lg"
//                         >
//                           <h4 className="text-lg font-semibold text-foreground">{project.title}</h4>
//                           <p className="text-sm text-muted-foreground mt-2">{project.description}</p>
//                           <div className="flex flex-wrap gap-2 mt-2">
//                             {project.tools.map((tool, idx) => (
//                               <Badge key={idx} className="bg-primary/20 text-primary">
//                                 {tool}
//                               </Badge>
//                             ))}
//                           </div>
//                           {project.liveWebsite && (
//                             <a
//                               href={project.liveWebsite}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="text-primary text-sm flex items-center gap-1 mt-2 hover:underline"
//                             >
//                               <ExternalLink className="w-4 h-4" />
//                               Visit Live Website
//                             </a>
//                           )}
//                           <p className="text-xs text-muted-foreground mt-2">
//                             Added: {new Date(project.createdAt).toLocaleDateString()}
//                           </p>
//                         </motion.div>
//                       ))}
//                     </div>
//                   ) : (
//                     <p className="text-muted-foreground">No projects yet. Add one to get started!</p>
//                   )}
//                 </CardContent>
//               </Card>
//             )}
//             {user ? (
//               <Card className="glass-strong border-white/10 col-span-2">
//                 <CardHeader>
//                   <CardTitle className="flex items-center space-x-2 text-primary">
//                     <Sparkles className="h-5 w-5" />
//                     <span>Your Profile Details</span>
//                   </CardTitle>
//                   <p className="text-sm text-muted-foreground">
//                     Update your professional portfolio to showcase to recruiters.
//                   </p>
//                 </CardHeader>
//                 <CardContent>
//                   <form onSubmit={handleDetailsSubmit} className="space-y-6">
//                     <div>
//                       <label className="text-sm font-medium flex items-center gap-1">
//                         <School className="w-4 h-4" /> Major
//                       </label>
//                       <Input
//                         type="text"
//                         name="major"
//                         placeholder="Ex: Computer Science"
//                         value={details.major}
//                         onChange={handleDetailsChange}
//                       />
//                     </div>
//                     <div>
//                       <label className="text-sm font-medium flex items-center gap-1">
//                         <School className="w-4 h-4" /> University
//                       </label>
//                       <Input
//                         type="text"
//                         name="university"
//                         placeholder="Ex: DSU Bangalore"
//                         value={details.university}
//                         onChange={handleDetailsChange}
//                       />
//                     </div>
//                     <div>
//                       <label className="text-sm font-medium">Skills</label>
//                       <div className="flex gap-2">
//                         <Input
//                           type="text"
//                           name="newSkill"
//                           placeholder="Add a skill"
//                           value={details.newSkill}
//                           onChange={handleDetailsChange}
//                         />
//                         <Button type="button" onClick={addSkill}>Add</Button>
//                       </div>
//                       <div className="flex flex-wrap gap-2 mt-2">
//                         {details.skills.map((skill, idx) => (
//                           <Badge
//                             key={idx}
//                             onClick={() => removeSkill(skill)}
//                             className="cursor-pointer hover:bg-red-500/20"
//                           >
//                             {skill} ✕
//                           </Badge>
//                         ))}
//                       </div>
//                     </div>
//                     <div>
//                       <label className="text-sm font-medium flex items-center gap-1">
//                         <Github className="w-4 h-4" /> GitHub Profile
//                       </label>
//                       <Input
//                         type="url"
//                         name="github"
//                         placeholder="https://github.com/username"
//                         value={details.github}
//                         onChange={handleDetailsChange}
//                       />
//                     </div>
//                     <div>
//                       <label className="text-sm font-medium flex items-center gap-1">
//                         <Award className="w-4 h-4" /> Certifications
//                       </label>
//                       <Textarea
//                         name="certifications"
//                         placeholder="List your certifications..."
//                         value={details.certifications}
//                         onChange={handleDetailsChange}
//                       />
//                     </div>
//                     <div>
//                       <label className="text-sm font-medium flex items-center gap-1">
//                         <Rocket className="w-4 h-4" /> Projects
//                       </label>
//                       <Textarea
//                         name="projects"
//                         placeholder="Describe your projects..."
//                         value={details.projects}
//                         onChange={handleDetailsChange}
//                       />
//                     </div>
//                     <div>
//                       <label className="text-sm font-medium flex items-center gap-1">
//                         <Brain className="w-4 h-4" /> Interests
//                       </label>
//                       <Input
//                         type="text"
//                         name="interests"
//                         placeholder="AI, Blockchain, Design..."
//                         value={details.interests}
//                         onChange={handleDetailsChange}
//                       />
//                     </div>
//                     <Button
//                       type="submit"
//                       className="w-full gradient-purple-cyan hover-lift"
//                       disabled={loading || !user}
//                     >
//                       {loading ? 'Saving...' : 'Update Profile'}
//                     </Button>
//                   </form>
//                 </CardContent>
//               </Card>
//             ) : (
//               <Card className="glass-strong border-white/10 col-span-2">
//                 <CardHeader>
//                   <CardTitle className="flex items-center space-x-2 text-primary">
//                     <Sparkles className="h-5 w-5" />
//                     <span>Please Sign In</span>
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground">Sign in to update your profile.</p>
//                   <Link to="/auth">
//                     <Button className="mt-4 gradient-purple-cyan">Sign In</Button>
//                   </Link>
//                 </CardContent>
//               </Card>
//             )}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users,
  Zap,
  Trophy,
  Calendar,
  Shield,
  Activity,
  FileText,
  BarChart3,
  Github,
  Award,
  Brain,
  Rocket,
  Sparkles,
  School,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { auth, db } from '../firebase';
import { get, ref, set, onValue } from 'firebase/database';
import toast, { Toaster } from 'react-hot-toast';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [details, setDetails] = useState({
    major: '',
    university: '',
    skills: [],
    newSkill: '',
    github: '',
    certifications: '',
    projects: '',
    interests: ''
  });
  const [userProjects, setUserProjects] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      console.log('Dashboard: Current user:', currentUser);
      setUser(currentUser);
      setLoadingAuth(false);
      if (currentUser) {
        // Try fetching from students/{uid}/profile first
        const profileRef = ref(db, `students/${currentUser.uid}/profile`);
        onValue(
          profileRef,
          (snapshot) => {
            const data = snapshot.val();
            console.log('Dashboard: Profile data from students/{uid}/profile:', data);
            if (data) {
              setDetails({
                major: data.major || '',
                university: data.university || '',
                skills: Array.isArray(data.skills) ? data.skills : [],
                github: data.github || '',
                certifications: data.certifications || '',
                projects: data.projects || '',
                interests: data.interests || '',
                newSkill: ''
              });
            } else {
              // Fallback to students/{uid} if no data at /profile
              const fallbackRef = ref(db, `students/${currentUser.uid}`);
              onValue(
                fallbackRef,
                (snapshot) => {
                  const fallbackData = snapshot.val();
                  console.log('Dashboard: Profile data from students/{uid}:', fallbackData);
                  if (fallbackData) {
                    setDetails({
                      major: fallbackData.major || '',
                      university: fallbackData.university || '',
                      skills: Array.isArray(fallbackData.skills) ? fallbackData.skills : [],
                      github: fallbackData.github || '',
                      certifications: fallbackData.certifications || '',
                      projects: fallbackData.projects || '',
                      interests: fallbackData.interests || '',
                      newSkill: ''
                    });
                  } else {
                    setDetails({
                      major: '',
                      university: '',
                      skills: [],
                      github: '',
                      certifications: '',
                      projects: '',
                      interests: '',
                      newSkill: ''
                    });
                    console.log('Dashboard: No profile data found at either path.');
                    toast.error('No profile data found. Please update your profile.');
                  }
                },
                (error) => {
                  console.error('Dashboard: Error fetching fallback profile:', error);
                  setError('Failed to load profile data from fallback path.');
                  toast.error('Failed to load profile data.');
                }
              );
            }
          },
          (error) => {
            console.error('Dashboard: Error fetching profile:', error);
            setError('Failed to load profile data.');
            toast.error('Failed to load profile data.');
          }
        );

        // Fetch projects from students/{uid}/projects
        const projectsRef = ref(db, `students/${currentUser.uid}/projects`);
        onValue(
          projectsRef,
          (snapshot) => {
            const data = snapshot.val();
            console.log('Dashboard: Projects data:', data);
            if (data) {
              const projectsArray = Object.entries(data)
                .map(([id, project]) => ({
                  id,
                  title: project.title || 'Untitled Project',
                  description: project.description || '',
                  tools: Array.isArray(project.tools) ? project.tools : [],
                  liveWebsite: project.liveWebsite || '',
                  createdAt: project.createdAt || new Date().toISOString()
                }))
                .filter(project => project.title);
              setUserProjects(projectsArray);
            } else {
              setUserProjects([]);
            }
          },
          (error) => {
            console.error('Dashboard: Error fetching projects:', error);
            toast.error('Failed to load projects.');
          }
        );
      }
    }, (error) => {
      console.error('Dashboard: Auth error:', error);
      setError('Authentication error.');
      toast.error('Authentication error.');
      setLoadingAuth(false);
    });
    return () => unsubscribe();
  }, []);

  const handleDetailsChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const addSkill = () => {
    if (details.newSkill.trim()) {
      setDetails({
        ...details,
        skills: [...details.skills, details.newSkill.trim()],
        newSkill: ''
      });
    }
  };

  const removeSkill = (skill) => {
    setDetails({
      ...details,
      skills: details.skills.filter((s) => s !== skill)
    });
  };

  const handleDetailsSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError('You must be signed in to update your profile.');
      toast.error('You must be signed in to update your profile.');
      return;
    }
    if (
      !details.major.trim() &&
      !details.university.trim() &&
      !details.skills.length &&
      !details.github.trim() &&
      !details.certifications.trim() &&
      !details.projects.trim() &&
      !details.interests.trim()
    ) {
      setError('Please fill in at least one field.');
      toast.error('Please fill in at least one field.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await set(ref(db, `students/${user.uid}/profile`), {
        major: details.major.trim(),
        university: details.university.trim(),
        skills: details.skills,
        github: details.github.trim(),
        certifications: details.certifications.trim(),
        projects: details.projects.trim(),
        interests: details.interests.trim(),
        createdAt: new Date().toISOString()
      });
      toast.success('🎉 Profile updated successfully!');
    } catch (error) {
      console.error('Dashboard: Error saving profile:', error);
      setError('Failed to save profile.');
      toast.error('Failed to save profile.');
    }
    setLoading(false);
  };

  const stats = [
    { title: 'Projects Verified', value: '12', icon: Shield, change: '+2' },
    { title: 'Hackathons Won', value: '3', icon: Trophy, change: '+1' },
    { title: 'Connections', value: '156', icon: Users, change: '+12' },
    { title: 'Portfolio Views', value: '2.4k', icon: BarChart3, change: '+15%' }
  ];

  const quickActions = [
    { name: 'Add New Project', path: '/portfolio/new', icon: FileText },
    { name: 'Join Hackathon', path: '/hackathons/join', icon: Calendar },
    { name: 'View Applications', path: '/applications', icon: FileText },
    { name: 'Blockchain Verify', path: '/blockchain-verification', icon: Shield }
  ];

  const recentActivity = [
    { title: 'Project "AI Chatbot" Verified on Blockchain', date: 'Sep 23, 2025', type: 'verification' },
    { title: 'Applied to Tech Innovators Hackathon', date: 'Sep 22, 2025', type: 'application' },
    { title: 'New Connection: Jane Doe, Recruiter at TechCorp', date: 'Sep 21, 2025', type: 'connection' },
    { title: 'Portfolio Viewed by 5 Recruiters', date: 'Sep 20, 2025', type: 'view' }
  ];

  if (loadingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-foreground text-lg"
        >
          Loading dashboard...
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="glass-strong border-white/10">
          <CardHeader>
            <CardTitle className="text-primary">Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{error}</p>
            <Link to="/auth">
              <Button className="mt-4 gradient-purple-cyan">Go to Sign In</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div className="flex items-center space-x-3">
              <Users className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold text-foreground neon-text">
                {user ? `${user.displayName || user.email}'s Dashboard` : 'Dashboard'}
              </h1>
            </div>
          </div>
          <div className="glass-strong p-6 rounded-lg border border-white/10 mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Welcome back, {user ? (user.displayName || user.email) : 'Developer'}!
            </h2>
            <p className="text-muted-foreground">
              Showcase your projects, connect with recruiters, and verify your achievements on the blockchain.
            </p>
          </div>
          <div className="glass p-6 rounded-lg border border-white/10 mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
              <Zap className="h-5 w-5 text-primary" />
              <span>Quick Actions</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <motion.div
                    key={action.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <Link to={action.path}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full h-12 justify-start space-x-2 hover-glow glass-strong hover:bg-white/10"
                      >
                        <Icon className="h-4 w-4" />
                        <span>{action.name}</span>
                      </Button>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="glass-strong border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-primary">
                  <Zap className="h-5 w-5" />
                  <span>Your Stats</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={stat.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass p-4 rounded-lg text-center"
                      >
                        <Icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                        <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.title}</div>
                        <div className={`text-xs ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                          {stat.change}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
            <Card className="glass-strong border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-primary">
                  <Activity className="h-5 w-5" />
                  <span>Recent Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivity.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <div className={`w-2 h-2 rounded-full ${item.type === 'verification' ? 'bg-primary' : item.type === 'application' ? 'bg-blue-400' : item.type === 'connection' ? 'bg-green-400' : 'bg-purple-400'}`} />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.date}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="mt-4 w-full hover-glow">
                  View All Activity
                </Button>
              </CardContent>
            </Card>
            {user && (
              <Card className="glass-strong border-white/10 col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-primary">
                    <Rocket className="h-5 w-5" />
                    <span>Your Projects</span>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Showcase your projects to recruiters and peers.
                  </p>
                </CardHeader>
                <CardContent>
                  {userProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {userProjects.map((project, index) => (
                        <motion.div
                          key={project.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="glass p-4 rounded-lg"
                        >
                          <h4 className="text-lg font-semibold text-foreground">{project.title}</h4>
                          <p className="text-sm text-muted-foreground mt-2">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {Array.isArray(project.tools) && project.tools.length > 0 ? (
                              project.tools.map((tool, idx) => (
                                <Badge key={idx} className="bg-primary/20 text-primary">
                                  {tool}
                                </Badge>
                              ))
                            ) : (
                              <p className="text-xs text-muted-foreground">No tools specified</p>
                            )}
                          </div>
                          {project.liveWebsite && (
                            <a
                              href={project.liveWebsite}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary text-sm flex items-center gap-1 mt-2 hover:underline"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Visit Live Website
                            </a>
                          )}
                          <p className="text-xs text-muted-foreground mt-2">
                            Added: {new Date(project.createdAt).toLocaleDateString()}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No projects yet. Add one to get started!</p>
                  )}
                </CardContent>
              </Card>
            )}
            {user ? (
              <Card className="glass-strong border-white/10 col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-primary">
                    <Sparkles className="h-5 w-5" />
                    <span>Your Profile Details</span>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Update your professional portfolio to showcase to recruiters.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleDetailsSubmit} className="space-y-6">
                    <div>
                      <label className="text-sm font-medium flex items-center gap-1">
                        <School className="w-4 h-4" /> Major
                      </label>
                      <Input
                        type="text"
                        name="major"
                        placeholder="Ex: Computer Science"
                        value={details.major}
                        onChange={handleDetailsChange}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium flex items-center gap-1">
                        <School className="w-4 h-4" /> University
                      </label>
                      <Input
                        type="text"
                        name="university"
                        placeholder="Ex: DSU Bangalore"
                        value={details.university}
                        onChange={handleDetailsChange}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Skills</label>
                      <div className="flex gap-2">
                        <Input
                          type="text"
                          name="newSkill"
                          placeholder="Add a skill"
                          value={details.newSkill}
                          onChange={handleDetailsChange}
                        />
                        <Button type="button" onClick={addSkill}>Add</Button>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {details.skills.map((skill, idx) => (
                          <Badge
                            key={idx}
                            onClick={() => removeSkill(skill)}
                            className="cursor-pointer hover:bg-red-500/20"
                          >
                            {skill} ✕
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium flex items-center gap-1">
                        <Github className="w-4 h-4" /> GitHub Profile
                      </label>
                      <Input
                        type="url"
                        name="github"
                        placeholder="https://github.com/username"
                        value={details.github}
                        onChange={handleDetailsChange}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium flex items-center gap-1">
                        <Award className="w-4 h-4" /> Certifications
                      </label>
                      <Textarea
                        name="certifications"
                        placeholder="List your certifications..."
                        value={details.certifications}
                        onChange={handleDetailsChange}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium flex items-center gap-1">
                        <Rocket className="w-4 h-4" /> Projects
                      </label>
                      <Textarea
                        name="projects"
                        placeholder="Describe your projects..."
                        value={details.projects}
                        onChange={handleDetailsChange}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium flex items-center gap-1">
                        <Brain className="w-4 h-4" /> Interests
                      </label>
                      <Input
                        type="text"
                        name="interests"
                        placeholder="AI, Blockchain, Design..."
                        value={details.interests}
                        onChange={handleDetailsChange}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full gradient-purple-cyan hover-lift"
                      disabled={loading || !user}
                    >
                      {loading ? 'Saving...' : 'Update Profile'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="glass-strong border-white/10 col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-primary">
                    <Sparkles className="h-5 w-5" />
                    <span>Please Sign In</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Sign in to update your profile.</p>
                  <Link to="/auth">
                    <Button className="mt-4 gradient-purple-cyan">Sign In</Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
