// // import React, { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import { 
// //   Heart, 
// //   MessageCircle, 
// //   Share2, 
// //   Trophy, 
// //   Award, 
// //   Code, 
// //   Calendar,
// //   MapPin,
// //   Eye,
// //   Bookmark,
// //   MoreHorizontal,
// //   Zap,
// //   Star,
// //   TrendingUp,
// //   Users,
// //   Filter,
// //   Plus
// // } from 'lucide-react';
// // import { Button } from '@/components/ui/button';
// // import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// // const Feed = () => {
// //   const [activeFilter, setActiveFilter] = useState('all');
// //   const [likedPosts, setLikedPosts] = useState(new Set());

// //   const filters = [
// //     { id: 'all', label: 'All Posts', icon: TrendingUp },
// //     { id: 'achievements', label: 'Achievements', icon: Trophy },
// //     { id: 'projects', label: 'Projects', icon: Code },
// //     { id: 'hackathons', label: 'Hackathons', icon: Calendar },
// //     { id: 'following', label: 'Following', icon: Users }
// //   ];

// //   const posts = [
// //     {
// //       id: 1,
// //       type: 'achievement',
// //       user: {
// //         name: 'Alex Johnson',
// //         username: '@alexj',
// //         avatar: '👨‍💻',
// //         university: 'MIT',
// //         verified: true
// //       },
// //       content: {
// //         title: 'Won First Place at MIT Hackathon 2024! 🏆',
// //         description: 'Just finished an incredible 48-hour hackathon building an AI-powered portfolio generator. Our team created a platform that helps students showcase their skills with personalized design suggestions.',
// //         image: null,
// //         achievement: {
// //           title: 'Hackathon Winner',
// //           issuer: 'MIT',
// //           date: '2024-01-15',
// //           verified: true
// //         }
// //       },
// //       stats: {
// //         likes: 234,
// //         comments: 45,
// //         shares: 12,
// //         views: 1200
// //       },
// //       timestamp: '2 hours ago',
// //       tags: ['hackathon', 'ai', 'react', 'nodejs']
// //     },
// //     {
// //       id: 2,
// //       type: 'project',
// //       user: {
// //         name: 'Sarah Chen',
// //         username: '@sarahc',
// //         avatar: '👩‍🎨',
// //         university: 'Stanford',
// //         verified: true
// //       },
// //       content: {
// //         title: 'Launched my new portfolio website! ✨',
// //         description: 'After months of work, I\'m excited to share my new portfolio showcasing my UI/UX design projects. Built with React and Framer Motion for smooth animations.',
// //         image: '/api/placeholder/600/300',
// //         project: {
// //           title: 'Personal Portfolio',
// //           tech: ['React', 'Framer Motion', 'Tailwind CSS'],
// //           github: 'https://github.com/sarahc/portfolio',
// //           live: 'https://sarahchen.design'
// //         }
// //       },
// //       stats: {
// //         likes: 189,
// //         comments: 32,
// //         shares: 8,
// //         views: 890
// //       },
// //       timestamp: '5 hours ago',
// //       tags: ['portfolio', 'design', 'react', 'animation']
// //     },
// //     {
// //       id: 3,
// //       type: 'achievement',
// //       user: {
// //         name: 'Marcus Rodriguez',
// //         username: '@marcusr',
// //         avatar: '👨‍🔬',
// //         university: 'UC Berkeley',
// //         verified: true
// //       },
// //       content: {
// //         title: 'Completed Google Cloud Professional Certificate! ☁️',
// //         description: 'Just earned my Google Cloud Professional Data Engineer certification. Excited to apply these skills to my upcoming machine learning projects.',
// //         image: null,
// //         achievement: {
// //           title: 'Google Cloud Professional Data Engineer',
// //           issuer: 'Google Cloud',
// //           date: '2024-01-14',
// //           verified: true
// //         }
// //       },
// //       stats: {
// //         likes: 156,
// //         comments: 28,
// //         shares: 15,
// //         views: 670
// //       },
// //       timestamp: '1 day ago',
// //       tags: ['certification', 'cloud', 'data', 'google']
// //     },
// //     {
// //       id: 4,
// //       type: 'project',
// //       user: {
// //         name: 'Emily Watson',
// //         username: '@emilyw',
// //         avatar: '👩‍💻',
// //         university: 'Carnegie Mellon',
// //         verified: true
// //       },
// //       content: {
// //         title: 'Open sourced my React Native component library! 📱',
// //         description: 'Created a comprehensive UI component library for React Native with 50+ components, TypeScript support, and extensive documentation.',
// //         image: '/api/placeholder/600/300',
// //         project: {
// //           title: 'RN-UI Components',
// //           tech: ['React Native', 'TypeScript', 'Storybook'],
// //           github: 'https://github.com/emilyw/rn-ui',
// //           npm: 'https://npmjs.com/package/rn-ui-components'
// //         }
// //       },
// //       stats: {
// //         likes: 298,
// //         comments: 67,
// //         shares: 34,
// //         views: 1500
// //       },
// //       timestamp: '2 days ago',
// //       tags: ['opensource', 'react-native', 'typescript', 'components']
// //     }
// //   ];

// //   const toggleLike = (postId) => {
// //     setLikedPosts(prev => {
// //       const newSet = new Set(prev);
// //       if (newSet.has(postId)) {
// //         newSet.delete(postId);
// //       } else {
// //         newSet.add(postId);
// //       }
// //       return newSet;
// //     });
// //   };

// //   const filteredPosts = activeFilter === 'all' 
// //     ? posts 
// //     : posts.filter(post => post.type === activeFilter || post.tags.includes(activeFilter));

// //   return (
// //     <div className="min-h-screen pt-20 pb-10">
// //       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
// //         {/* Header */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="mb-8"
// //         >
// //           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
// //             <div>
// //               <h1 className="text-3xl font-space font-bold mb-2">
// //                 Community <span className="neon-text">Feed</span>
// //               </h1>
// //               <p className="text-muted-foreground">
// //                 Discover achievements, projects, and updates from the community
// //               </p>
// //             </div>
            
// //             <Button className="gradient-purple-cyan hover-lift mt-4 md:mt-0">
// //               <Plus className="h-4 w-4 mr-2" />
// //               Create Post
// //             </Button>
// //           </div>

// //           {/* Filters */}
// //           <div className="flex space-x-1 glass rounded-lg p-1 overflow-x-auto">
// //             {filters.map((filter) => {
// //               const Icon = filter.icon;
// //               return (
// //                 <button
// //                   key={filter.id}
// //                   onClick={() => setActiveFilter(filter.id)}
// //                   className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 whitespace-nowrap ${
// //                     activeFilter === filter.id
// //                       ? 'bg-primary text-primary-foreground shadow-lg'
// //                       : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
// //                   }`}
// //                 >
// //                   <Icon className="h-4 w-4" />
// //                   <span>{filter.label}</span>
// //                 </button>
// //               );
// //             })}
// //           </div>
// //         </motion.div>

// //         {/* Posts */}
// //         <div className="space-y-6">
// //           {filteredPosts.map((post, index) => (
// //             <motion.article
// //               key={post.id}
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: index * 0.1 }}
// //               className="glass-card rounded-xl p-6 hover-lift"
// //             >
// //               {/* Post Header */}
// //               <div className="flex items-start justify-between mb-4">
// //                 <div className="flex items-center space-x-3">
// //                   <div className="text-3xl">{post.user.avatar}</div>
// //                   <div>
// //                     <div className="flex items-center space-x-2">
// //                       <h3 className="font-semibold">{post.user.name}</h3>
// //                       {post.user.verified && (
// //                         <Zap className="h-4 w-4 text-primary" />
// //                       )}
// //                     </div>
// //                     <p className="text-sm text-muted-foreground">
// //                       {post.user.username} • {post.user.university}
// //                     </p>
// //                   </div>
// //                 </div>
                
// //                 <div className="flex items-center space-x-2 text-muted-foreground">
// //                   <span className="text-sm">{post.timestamp}</span>
// //                   <Button variant="ghost" size="sm">
// //                     <MoreHorizontal className="h-4 w-4" />
// //                   </Button>
// //                 </div>
// //               </div>

// //               {/* Post Content */}
// //               <div className="mb-4">
// //                 <h2 className="text-lg font-semibold font-space mb-2">
// //                   {post.content.title}
// //                 </h2>
// //                 <p className="text-muted-foreground mb-4">
// //                   {post.content.description}
// //                 </p>

// //                 {/* Achievement Badge */}
// //                 {post.content.achievement && (
// //                   <div className="glass rounded-lg p-4 mb-4 border border-primary/20">
// //                     <div className="flex items-center space-x-3">
// //                       <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 p-3">
// //                         <Trophy className="h-6 w-6 text-white" />
// //                       </div>
// //                       <div className="flex-1">
// //                         <div className="flex items-center space-x-2">
// //                           <h4 className="font-semibold">{post.content.achievement.title}</h4>
// //                           {post.content.achievement.verified && (
// //                             <Zap className="h-4 w-4 text-green-500" />
// //                           )}
// //                         </div>
// //                         <p className="text-sm text-muted-foreground">
// //                           Issued by {post.content.achievement.issuer} • {post.content.achievement.date}
// //                         </p>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 )}

// //                 {/* Project Card */}
// //                 {post.content.project && (
// //                   <div className="glass rounded-lg p-4 mb-4 border border-primary/20">
// //                     <div className="flex items-start space-x-3">
// //                       <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 p-3">
// //                         <Code className="h-6 w-6 text-white" />
// //                       </div>
// //                       <div className="flex-1">
// //                         <h4 className="font-semibold mb-2">{post.content.project.title}</h4>
// //                         <div className="flex flex-wrap gap-2 mb-3">
// //                           {post.content.project.tech.map((tech) => (
// //                             <span
// //                               key={tech}
// //                               className="px-2 py-1 bg-primary/20 text-primary rounded text-xs"
// //                             >
// //                               {tech}
// //                             </span>
// //                           ))}
// //                         </div>
// //                         <div className="flex space-x-4 text-sm">
// //                           {post.content.project.github && (
// //                             <a href="#" className="text-primary hover:text-accent transition-colors">
// //                               GitHub →
// //                             </a>
// //                           )}
// //                           {post.content.project.live && (
// //                             <a href="#" className="text-primary hover:text-accent transition-colors">
// //                               Live Demo →
// //                             </a>
// //                           )}
// //                           {post.content.project.npm && (
// //                             <a href="#" className="text-primary hover:text-accent transition-colors">
// //                               NPM →
// //                             </a>
// //                           )}
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 )}

// //                 {/* Tags */}
// //                 <div className="flex flex-wrap gap-2 mb-4">
// //                   {post.tags.map((tag) => (
// //                     <span
// //                       key={tag}
// //                       className="px-2 py-1 bg-muted/20 text-muted-foreground rounded text-xs hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer"
// //                     >
// //                       #{tag}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* Post Actions */}
// //               <div className="flex items-center justify-between pt-4 border-t border-border">
// //                 <div className="flex items-center space-x-6">
// //                   <button
// //                     onClick={() => toggleLike(post.id)}
// //                     className={`flex items-center space-x-2 transition-colors ${
// //                       likedPosts.has(post.id)
// //                         ? 'text-red-500'
// //                         : 'text-muted-foreground hover:text-red-500'
// //                     }`}
// //                   >
// //                     <Heart className={`h-5 w-5 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
// //                     <span className="text-sm">{post.stats.likes}</span>
// //                   </button>
                  
// //                   <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
// //                     <MessageCircle className="h-5 w-5" />
// //                     <span className="text-sm">{post.stats.comments}</span>
// //                   </button>
                  
// //                   <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
// //                     <Share2 className="h-5 w-5" />
// //                     <span className="text-sm">{post.stats.shares}</span>
// //                   </button>
// //                 </div>
                
// //                 <div className="flex items-center space-x-4">
// //                   <div className="flex items-center space-x-1 text-muted-foreground">
// //                     <Eye className="h-4 w-4" />
// //                     <span className="text-sm">{post.stats.views}</span>
// //                   </div>
                  
// //                   <Button variant="ghost" size="sm">
// //                     <Bookmark className="h-4 w-4" />
// //                   </Button>
// //                 </div>
// //               </div>
// //             </motion.article>
// //           ))}
// //         </div>

// //         {/* Load More */}
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ duration: 0.6, delay: 0.5 }}
// //           className="text-center mt-8"
// //         >
// //           <Button variant="outline" className="glass hover-glow">
// //             Load More Posts
// //           </Button>
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Feed;





// // import React, { useState, useEffect, useRef } from "react";
// // import { motion } from "framer-motion";
// // import Webcam from "react-webcam";
// // import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// // import {
// //   Heart,
// //   MessageCircle,
// //   Share2,
// //   Trophy,
// //   Award,
// //   Code,
// //   Calendar,
// //   MapPin,
// //   Eye,
// //   Bookmark,
// //   MoreHorizontal,
// //   Zap,
// //   Star,
// //   TrendingUp,
// //   Users,
// //   Filter,
// //   Plus,
// //   Camera,
// // } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// // import { getAuth, onAuthStateChanged } from "firebase/auth";
// // import { ref, onValue, push, set, update } from "firebase/database";
// // import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
// // import { db, storage } from "../firebase";

// // // Function to convert base64 to File
// // const base64ToFile = (base64, filename) => {
// //   const arr = base64.split(",");
// //   const mime = arr[0].match(/:(.*?);/)[1];
// //   const bstr = atob(arr[1]);
// //   let n = bstr.length;
// //   const u8arr = new Uint8Array(n);
// //   while (n--) {
// //     u8arr[n] = bstr.charCodeAt(n);
// //   }
// //   return new File([u8arr], filename, { type: mime });
// // };

// // const Feed = () => {
// //   const [activeFilter, setActiveFilter] = useState("all");
// //   const [likedPosts, setLikedPosts] = useState(new Set());
// //   const [posts, setPosts] = useState([]);
// //   const [user, setUser] = useState(null);
// //   const [newPost, setNewPost] = useState({ title: "", description: "", tags: "", image: null });
// //   const [newComment, setNewComment] = useState({});
// //   const [showPostForm, setShowPostForm] = useState(false);
// //   const [loading, setLoading] = useState(true);
// //   const [showCamera, setShowCamera] = useState(false);
// //   const fileInputRef = useRef(null);
// //   const webcamRef = useRef(null);

// //   const filters = [
// //     { id: "all", label: "All Posts", icon: TrendingUp },
// //     { id: "achievements", label: "Achievements", icon: Trophy },
// //     { id: "projects", label: "Projects", icon: Code },
// //     { id: "hackathons", label: "Hackathons", icon: Calendar },
// //     { id: "following", label: "Following", icon: Users },
// //   ];

// //   // Fetch posts from Firebase
// //   useEffect(() => {
// //     const postsRef = ref(db, "posts");
// //     const unsubscribe = onValue(
// //       postsRef,
// //       (snapshot) => {
// //         const data = snapshot.val();
// //         if (data) {
// //           let postsArray = Object.entries(data).map(([id, post]) => ({
// //             id,
// //             ...post,
// //             comments: post.comments ? Object.values(post.comments) : [],
// //           }));
// //           // Sort by timestamp descending
// //           postsArray = postsArray.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
// //           setPosts(postsArray);
// //         } else {
// //           setPosts([]);
// //         }
// //         setLoading(false);
// //       },
// //       (error) => {
// //         console.error("Error fetching posts:", error);
// //         setPosts([]);
// //         setLoading(false);
// //       }
// //     );
// //     return () => unsubscribe();
// //   }, []);

// //   // Track authenticated user
// //   useEffect(() => {
// //     const auth = getAuth();
// //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// //       setUser(currentUser);
// //     });
// //     return () => unsubscribe();
// //   }, []);

// //   // Handle like/unlike
// //   const toggleLike = async (postId) => {
// //     if (!user) return; // Require login to like
// //     setLikedPosts((prev) => {
// //       const newSet = new Set(prev);
// //       const post = posts.find((p) => p.id === postId);
// //       let newLikes = post.stats.likes;
// //       if (newSet.has(postId)) {
// //         newSet.delete(postId);
// //         newLikes -= 1;
// //       } else {
// //         newSet.add(postId);
// //         newLikes += 1;
// //       }
// //       // Update likes count in Firebase
// //       update(ref(db, `posts/${postId}/stats`), { likes: newLikes });
// //       return newSet;
// //     });
// //   };

// //   // Handle post creation
// //   const handlePostSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!user || !newPost.title || !newPost.description) return;

// //     try {
// //       const postsRef = ref(db, "posts");
// //       const newPostRef = push(postsRef);
// //       let imageUrl = null;

// //       // Upload image to Firebase Storage if provided
// //       if (newPost.image) {
// //         const imageRef = storageRef(storage, `post-images/${newPostRef.key}/${newPost.image.name || "capture.jpeg"}`);
// //         await uploadBytes(imageRef, newPost.image);
// //         imageUrl = await getDownloadURL(imageRef);
// //       }

// //       // Create post object
// //       const postData = {
// //         user: {
// //           name: user.displayName || "Anonymous",
// //           username: user.email ? `@${user.email.split("@")[0]}` : "@anonymous",
// //           avatar: user.photoURL || "👤",
// //           university: "Unknown", // Replace with user profile data if available
// //           verified: false, // Replace with user verification logic if available
// //         },
// //         content: {
// //           title: newPost.title,
// //           description: newPost.description,
// //           image: imageUrl,
// //           // Add achievement/project fields if needed
// //         },
// //         stats: {
// //           likes: 0,
// //           comments: 0,
// //           shares: 0,
// //           views: 0,
// //         },
// //         timestamp: new Date().toISOString(),
// //         tags: newPost.tags.split(",").map((tag) => tag.trim()).filter((tag) => tag),
// //       };

// //       // Save post to Firebase
// //       await set(newPostRef, postData);
// //       setNewPost({ title: "", description: "", tags: "", image: null });
// //       setShowPostForm(false);
// //       setShowCamera(false);
// //       if (fileInputRef.current) fileInputRef.current.value = "";
// //     } catch (error) {
// //       console.error("Error creating post:", error);
// //     }
// //   };

// //   // Handle camera capture
// //   const capturePhoto = () => {
// //     const screenshot = webcamRef.current.getScreenshot();
// //     if (screenshot) {
// //       const file = base64ToFile(screenshot, "capture.jpeg");
// //       setNewPost({ ...newPost, image: file });
// //       setShowCamera(false);
// //     }
// //   };

// //   // Handle comment submission
// //   const handleCommentSubmit = async (postId) => {
// //     if (!user || !newComment[postId]) return;

// //     try {
// //       const commentRef = ref(db, `posts/${postId}/comments`);
// //       const newCommentRef = push(commentRef);
// //       const commentData = {
// //         userId: user.uid,
// //         username: user.email ? `@${user.email.split("@")[0]}` : "@anonymous",
// //         text: newComment[postId],
// //         timestamp: new Date().toISOString(),
// //       };
// //       await set(newCommentRef, commentData);
// //       // Update comments count
// //       const post = posts.find((p) => p.id === postId);
// //       await update(ref(db, `posts/${postId}/stats`), {
// //         comments: post.stats.comments + 1,
// //       });
// //       setNewComment((prev) => ({ ...prev, [postId]: "" }));
// //     } catch (error) {
// //       console.error("Error adding comment:", error);
// //     }
// //   };

// //   // Filter posts
// //   const filteredPosts = activeFilter === "all"
// //     ? posts
// //     : posts.filter((post) => post.type === activeFilter || post.tags.includes(activeFilter));

// //   return (
// //     <div className="min-h-screen pt-20 pb-10">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         {/* Header */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="mb-8"
// //         >
// //           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
// //             <div>
// //               <h1 className="text-3xl font-space font-bold mb-2">
// //                 Community <span className="neon-text">Feed</span>
// //               </h1>
// //               <p className="text-muted-foreground">
// //                 Discover achievements, projects, and updates in a dynamic masonry layout
// //               </p>
// //             </div>
// //             {user && (
// //               <Button
// //                 className="gradient-purple-cyan hover-lift mt-4 md:mt-0"
// //                 onClick={() => setShowPostForm(!showPostForm)}
// //               >
// //                 <Plus className="h-4 w-4 mr-2" />
// //                 Create Post
// //               </Button>
// //             )}
// //           </div>
// //           {/* Post Creation Form */}
// //           {user && showPostForm && (
// //             <motion.div
// //               initial={{ opacity: 0, height: 0 }}
// //               animate={{ opacity: 1, height: "auto" }}
// //               exit={{ opacity: 0, height: 0 }}
// //               className="glass-card rounded-xl p-6 mb-6"
// //             >
// //               <form onSubmit={handlePostSubmit}>
// //                 <div className="mb-4">
// //                   <input
// //                     type="text"
// //                     placeholder="Post Title"
// //                     value={newPost.title}
// //                     onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
// //                     className="w-full p-2 rounded bg-slate-900/50 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
// //                   />
// //                 </div>
// //                 <div className="mb-4">
// //                   <textarea
// //                     placeholder="What's on your mind?"
// //                     value={newPost.description}
// //                     onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
// //                     className="w-full p-2 rounded bg-slate-900/50 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
// //                     rows="4"
// //                   />
// //                 </div>
// //                 <div className="mb-4">
// //                   <input
// //                     type="text"
// //                     placeholder="Tags (comma-separated)"
// //                     value={newPost.tags}
// //                     onChange={(e) => setNewPost({ ...newPost, tags: e.target.value })}
// //                     className="w-full p-2 rounded bg-slate-900/50 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
// //                   />
// //                 </div>
// //                 <div className="mb-4 flex space-x-2">
// //                   <input
// //                     type="file"
// //                     accept="image/*"
// //                     ref={fileInputRef}
// //                     onChange={(e) => setNewPost({ ...newPost, image: e.target.files[0] })}
// //                     className="text-white"
// //                   />
// //                   <Button
// //                     type="button"
// //                     onClick={() => setShowCamera(!showCamera)}
// //                     className="flex items-center space-x-2"
// //                   >
// //                     <Camera className="h-4 w-4" />
// //                     Live Photo
// //                   </Button>
// //                 </div>
// //                 {showCamera && (
// //                   <div className="mb-4">
// //                     <Webcam
// //                       audio={false}
// //                       ref={webcamRef}
// //                       screenshotFormat="image/jpeg"
// //                       className="w-full h-auto rounded"
// //                     />
// //                     <Button type="button" onClick={capturePhoto} className="mt-2">
// //                       Capture
// //                     </Button>
// //                   </div>
// //                 )}
// //                 <div className="flex space-x-2">
// //                   <Button type="submit" className="gradient-purple-cyan">
// //                     Post
// //                   </Button>
// //                   <Button
// //                     variant="outline"
// //                     type="button"
// //                     onClick={() => {
// //                       setShowPostForm(false);
// //                       setShowCamera(false);
// //                       setNewPost({ title: "", description: "", tags: "", image: null });
// //                       if (fileInputRef.current) fileInputRef.current.value = "";
// //                     }}
// //                   >
// //                     Cancel
// //                   </Button>
// //                 </div>
// //               </form>
// //             </motion.div>
// //           )}
// //           {/* Filters */}
// //           <div className="flex space-x-1 glass rounded-lg p-1 overflow-x-auto mb-6">
// //             {filters.map((filter) => {
// //               const Icon = filter.icon;
// //               return (
// //                 <button
// //                   key={filter.id}
// //                   onClick={() => setActiveFilter(filter.id)}
// //                   className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 whitespace-nowrap ${
// //                     activeFilter === filter.id
// //                       ? "bg-primary text-primary-foreground shadow-lg"
// //                       : "text-muted-foreground hover:text-foreground hover:bg-white/5"
// //                   }`}
// //                 >
// //                   <Icon className="h-4 w-4" />
// //                   <span>{filter.label}</span>
// //                 </button>
// //               );
// //             })}
// //           </div>
// //         </motion.div>
// //         {/* Posts in Masonry Layout */}
// //         {loading ? (
// //           <p className="text-white text-center mt-10">Loading feed...</p>
// //         ) : filteredPosts.length === 0 ? (
// //           <p className="text-white text-center mt-10">No posts found. Be the first to post!</p>
// //         ) : (
// //           <ResponsiveMasonry
// //             columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
// //           >
// //             <Masonry gutter="1.5rem">
// //               {filteredPosts.map((post, index) => (
// //                 <motion.article
// //                   key={post.id}
// //                   initial={{ opacity: 0, scale: 0.95 }}
// //                   animate={{ opacity: 1, scale: 1 }}
// //                   transition={{ duration: 0.6, delay: index * 0.1 }}
// //                   className="glass-card rounded-xl p-6 hover-lift"
// //                 >
// //                   {/* Post Header */}
// //                   <div className="flex items-start justify-between mb-4">
// //                     <div className="flex items-center space-x-3">
// //                       <div className="text-3xl">{post.user.avatar}</div>
// //                       <div>
// //                         <div className="flex items-center space-x-2">
// //                           <h3 className="font-semibold">{post.user.name}</h3>
// //                           {post.user.verified && (
// //                             <Zap className="h-4 w-4 text-primary" />
// //                           )}
// //                         </div>
// //                         <p className="text-sm text-muted-foreground">
// //                           {post.user.username} • {post.user.university}
// //                         </p>
// //                       </div>
// //                     </div>
// //                     <div className="flex items-center space-x-2 text-muted-foreground">
// //                       <span className="text-sm">{new Date(post.timestamp).toLocaleString()}</span>
// //                       <Button variant="ghost" size="sm">
// //                         <MoreHorizontal className="h-4 w-4" />
// //                       </Button>
// //                     </div>
// //                   </div>
// //                   {/* Post Content */}
// //                   <div className="mb-4">
// //                     <h2 className="text-lg font-semibold font-space mb-2">
// //                       {post.content.title}
// //                     </h2>
// //                     <p className="text-muted-foreground mb-4">
// //                       {post.content.description}
// //                     </p>
// //                     {post.content.image && (
// //                       <img
// //                         src={post.content.image}
// //                         alt={post.content.title}
// //                         className="w-full h-auto object-cover rounded-lg mb-4"
// //                       />
// //                     )}
// //                     {/* Achievement Badge */}
// //                     {post.content.achievement && (
// //                       <div className="glass rounded-lg p-4 mb-4 border border-primary/20">
// //                         <div className="flex items-center space-x-3">
// //                           <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 p-3">
// //                             <Trophy className="h-6 w-6 text-white" />
// //                           </div>
// //                           <div className="flex-1">
// //                             <div className="flex items-center space-x-2">
// //                               <h4 className="font-semibold">{post.content.achievement.title}</h4>
// //                               {post.content.achievement.verified && (
// //                                 <Zap className="h-4 w-4 text-green-500" />
// //                               )}
// //                             </div>
// //                             <p className="text-sm text-muted-foreground">
// //                               Issued by {post.content.achievement.issuer} • {post.content.achievement.date}
// //                             </p>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     )}
// //                     {/* Project Card */}
// //                     {post.content.project && (
// //                       <div className="glass rounded-lg p-4 mb-4 border border-primary/20">
// //                         <div className="flex items-start space-x-3">
// //                           <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 p-3">
// //                             <Code className="h-6 w-6 text-white" />
// //                           </div>
// //                           <div className="flex-1">
// //                             <h4 className="font-semibold mb-2">{post.content.project.title}</h4>
// //                             <div className="flex flex-wrap gap-2 mb-3">
// //                               {post.content.project.tech.map((tech) => (
// //                                 <span
// //                                   key={tech}
// //                                   className="px-2 py-1 bg-primary/20 text-primary rounded text-xs"
// //                                 >
// //                                   {tech}
// //                                 </span>
// //                               ))}
// //                             </div>
// //                             <div className="flex space-x-4 text-sm">
// //                               {post.content.project.github && (
// //                                 <a
// //                                   href={post.content.project.github}
// //                                   className="text-primary hover:text-accent transition-colors"
// //                                   target="_blank"
// //                                   rel="noopener noreferrer"
// //                                 >
// //                                   GitHub →
// //                                 </a>
// //                               )}
// //                               {post.content.project.live && (
// //                                 <a
// //                                   href={post.content.project.live}
// //                                   className="text-primary hover:text-accent transition-colors"
// //                                   target="_blank"
// //                                   rel="noopener noreferrer"
// //                                 >
// //                                   Live Demo →
// //                                 </a>
// //                               )}
// //                               {post.content.project.npm && (
// //                                 <a
// //                                   href={post.content.project.npm}
// //                                   className="text-primary hover:text-accent transition-colors"
// //                                   target="_blank"
// //                                   rel="noopener noreferrer"
// //                                 >
// //                                   NPM →
// //                                 </a>
// //                               )}
// //                             </div>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     )}
// //                     {/* Tags */}
// //                     <div className="flex flex-wrap gap-2 mb-4">
// //                       {post.tags.map((tag) => (
// //                         <span
// //                           key={tag}
// //                           className="px-2 py-1 bg-muted/20 text-muted-foreground rounded text-xs hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer"
// //                         >
// //                           #{tag}
// //                         </span>
// //                       ))}
// //                     </div>
// //                   </div>
// //                   {/* Post Actions */}
// //                   <div className="flex items-center justify-between pt-4 border-t border-border">
// //                     <div className="flex items-center space-x-6">
// //                       <button
// //                         onClick={() => toggleLike(post.id)}
// //                         className={`flex items-center space-x-2 transition-colors ${
// //                           likedPosts.has(post.id)
// //                             ? "text-red-500"
// //                             : "text-muted-foreground hover:text-red-500"
// //                         }`}
// //                         disabled={!user}
// //                       >
// //                         <Heart className={`h-5 w-5 ${likedPosts.has(post.id) ? "fill-current" : ""}`} />
// //                         <span className="text-sm">{post.stats.likes}</span>
// //                       </button>
// //                       <button
// //                         className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
// //                         onClick={() => document.getElementById(`comment-${post.id}`).focus()}
// //                       >
// //                         <MessageCircle className="h-5 w-5" />
// //                         <span className="text-sm">{post.stats.comments}</span>
// //                       </button>
// //                       <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
// //                         <Share2 className="h-5 w-5" />
// //                         <span className="text-sm">{post.stats.shares}</span>
// //                       </button>
// //                     </div>
// //                     <div className="flex items-center space-x-4">
// //                       <div className="flex items-center space-x-1 text-muted-foreground">
// //                         <Eye className="h-4 w-4" />
// //                         <span className="text-sm">{post.stats.views}</span>
// //                       </div>
// //                       <Button variant="ghost" size="sm">
// //                         <Bookmark className="h-4 w-4" />
// //                       </Button>
// //                     </div>
// //                   </div>
// //                   {/* Comments Section */}
// //                   <div className="mt-4">
// //                     <h4 className="text-sm font-semibold mb-2">Comments</h4>
// //                     {post.comments && post.comments.length > 0 ? (
// //                       post.comments.map((comment, idx) => (
// //                         <div key={idx} className="mb-2 text-sm text-muted-foreground">
// //                           <span className="font-semibold">{comment.username}: </span>
// //                           {comment.text} <span className="text-xs">({new Date(comment.timestamp).toLocaleString()})</span>
// //                         </div>
// //                       ))
// //                     ) : (
// //                       <p className="text-sm text-muted-foreground">No comments yet.</p>
// //                     )}
// //                     {user && (
// //                       <div className="mt-2 flex items-center space-x-2">
// //                         <input
// //                           id={`comment-${post.id}`}
// //                           type="text"
// //                           placeholder="Add a comment..."
// //                           value={newComment[post.id] || ""}
// //                           onChange={(e) =>
// //                             setNewComment({ ...newComment, [post.id]: e.target.value })
// //                           }
// //                           className="flex-1 p-2 rounded bg-slate-900/50 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
// //                         />
// //                         <Button
// //                           onClick={() => handleCommentSubmit(post.id)}
// //                           className="gradient-purple-cyan"
// //                           disabled={!newComment[post.id]}
// //                         >
// //                           Comment
// //                         </Button>
// //                       </div>
// //                     )}
// //                   </div>
// //                 </motion.article>
// //               ))}
// //             </Masonry>
// //           </ResponsiveMasonry>
// //         )}
// //         {/* Load More (Placeholder - can be replaced with infinite scroll) */}
// //         {!loading && (
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ duration: 0.6, delay: 0.5 }}
// //             className="text-center mt-8"
// //           >
// //             <Button variant="outline" className="glass hover-glow">
// //               Load More Posts
// //             </Button>
// //           </motion.div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Feed;


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   Heart,
//   MessageCircle,
//   Share2,
//   Trophy,
//   Code,
//   Calendar,
//   Users,
//   TrendingUp,
//   Zap,
//   Eye,
//   Bookmark,
//   MoreHorizontal,
//   Plus,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { ref, push, onValue, update, serverTimestamp } from "firebase/database";
// import { db } from "../firebase";

// const Feed = () => {
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [likedPosts, setLikedPosts] = useState(new Set());
//   const [posts, setPosts] = useState([]);
//   const [user, setUser] = useState(null);
//   const [newPost, setNewPost] = useState("");
//   const [imageFile, setImageFile] = useState(null);

//   const filters = [
//     { id: "all", label: "All Posts", icon: TrendingUp },
//     { id: "achievements", label: "Achievements", icon: Trophy },
//     { id: "projects", label: "Projects", icon: Code },
//     { id: "hackathons", label: "Hackathons", icon: Calendar },
//     { id: "following", label: "Following", icon: Users },
//   ];

//   // track auth
//   useEffect(() => {
//     const auth = getAuth();
//     return onAuthStateChanged(auth, (u) => {
//       setUser(u || null);
//     });
//   }, []);

//   // load posts realtime
//   useEffect(() => {
//     const postsRef = ref(db, "posts");
//     return onValue(postsRef, (snapshot) => {
//       if (snapshot.exists()) {
//         const data = snapshot.val();
//         const loaded = Object.entries(data)
//           .map(([id, value]) => ({ id, ...value }))
//           .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0)); // newest first
//         setPosts(loaded);
//       } else {
//         setPosts([]);
//       }
//     });
//   }, []);

//   const toggleLike = (postId, currentLikes = 0) => {
//     setLikedPosts((prev) => {
//       const newSet = new Set(prev);
//       if (newSet.has(postId)) {
//         newSet.delete(postId);
//         update(ref(db, `posts/${postId}/stats`), { likes: currentLikes - 1 });
//       } else {
//         newSet.add(postId);
//         update(ref(db, `posts/${postId}/stats`), { likes: currentLikes + 1 });
//       }
//       return newSet;
//     });
//   };

//   const handleCreatePost = async () => {
//     if (!newPost.trim() && !imageFile) return;

//     const postRef = push(ref(db, "posts"));
//     await update(postRef, {
//       user: {
//         name: user.displayName || "Anonymous",
//         username: user.email || "",
//         avatar: user.photoURL || "👤",
//       },
//       content: {
//         description: newPost,
//         image: imageFile ? URL.createObjectURL(imageFile) : null, // TODO: replace with Firebase Storage
//       },
//       stats: { likes: 0, comments: 0, shares: 0, views: 0 },
//       createdAt: Date.now(),
//       type: "post",
//     });

//     setNewPost("");
//     setImageFile(null);
//   };

//   const filteredPosts =
//     activeFilter === "all"
//       ? posts
//       : posts.filter(
//           (post) =>
//             post.type === activeFilter ||
//             post.tags?.includes(activeFilter)
//         );

//   return (
//     <div className="min-h-screen pt-20 pb-10">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-8"
//         >
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
//             <div>
//               <h1 className="text-3xl font-space font-bold mb-2">
//                 Community <span className="neon-text">Feed</span>
//               </h1>
//               <p className="text-muted-foreground">
//                 Discover achievements, projects, and updates from the community
//               </p>
//             </div>
//             {user && (
//               <Button
//                 className="gradient-purple-cyan hover-lift mt-4 md:mt-0"
//                 onClick={handleCreatePost}
//               >
//                 <Plus className="h-4 w-4 mr-2" />
//                 Create Post
//               </Button>
//             )}
//           </div>

//           {/* Post Create Box */}
//           {user && (
//             <div className="glass-card rounded-xl p-4 mb-6">
//               <textarea
//                 placeholder="What's on your mind?"
//                 className="w-full p-2 rounded bg-transparent border border-gray-600"
//                 value={newPost}
//                 onChange={(e) => setNewPost(e.target.value)}
//               />
//               <div className="flex items-center justify-between mt-3">
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(e) => setImageFile(e.target.files[0])}
//                 />
//                 <Button onClick={handleCreatePost} disabled={!newPost && !imageFile}>
//                   Post
//                 </Button>
//               </div>
//             </div>
//           )}

//           {/* Filters */}
//           <div className="flex space-x-1 glass rounded-lg p-1 overflow-x-auto">
//             {filters.map((filter) => {
//               const Icon = filter.icon;
//               return (
//                 <button
//                   key={filter.id}
//                   onClick={() => setActiveFilter(filter.id)}
//                   className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 whitespace-nowrap ${
//                     activeFilter === filter.id
//                       ? "bg-primary text-primary-foreground shadow-lg"
//                       : "text-muted-foreground hover:text-foreground hover:bg-white/5"
//                   }`}
//                 >
//                   <Icon className="h-4 w-4" />
//                   <span>{filter.label}</span>
//                 </button>
//               );
//             })}
//           </div>
//         </motion.div>

//         {/* Posts */}
//         <div className="space-y-6">
//           {filteredPosts.map((post, index) => (
//             <motion.article
//               key={post.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="glass-card rounded-xl p-6 hover-lift"
//             >
//               {/* Post Header */}
//               <div className="flex items-start justify-between mb-4">
//                 <div className="flex items-center space-x-3">
//                   <Avatar>
//                     <AvatarImage src={post.user?.avatar} />
//                     <AvatarFallback>{post.user?.name?.[0]}</AvatarFallback>
//                   </Avatar>
//                   <div>
//                     <div className="flex items-center space-x-2">
//                       <h3 className="font-semibold">{post.user?.name}</h3>
//                       <Zap className="h-4 w-4 text-primary" />
//                     </div>
//                     <p className="text-sm text-muted-foreground">
//                       {post.user?.username}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-2 text-muted-foreground">
//                   <span className="text-sm">
//                     {new Date(post.createdAt).toLocaleString()}
//                   </span>
//                   <Button variant="ghost" size="sm">
//                     <MoreHorizontal className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </div>

//               {/* Post Content */}
//               <div className="mb-4">
//                 <p className="text-muted-foreground mb-4">
//                   {post.content?.description}
//                 </p>
//                 {post.content?.image && (
//                   <img
//                     src={post.content.image}
//                     alt="Post"
//                     className="rounded-lg mb-3"
//                   />
//                 )}
//               </div>

//               {/* Post Actions */}
//               <div className="flex items-center justify-between pt-4 border-t border-border">
//                 <div className="flex items-center space-x-6">
//                   <button
//                     onClick={() =>
//                       toggleLike(post.id, post.stats?.likes || 0)
//                     }
//                     className={`flex items-center space-x-2 transition-colors ${
//                       likedPosts.has(post.id)
//                         ? "text-red-500"
//                         : "text-muted-foreground hover:text-red-500"
//                     }`}
//                   >
//                     <Heart
//                       className={`h-5 w-5 ${
//                         likedPosts.has(post.id) ? "fill-current" : ""
//                       }`}
//                     />
//                     <span className="text-sm">{post.stats?.likes || 0}</span>
//                   </button>
//                   <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
//                     <MessageCircle className="h-5 w-5" />
//                     <span className="text-sm">{post.stats?.comments || 0}</span>
//                   </button>
//                   <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
//                     <Share2 className="h-5 w-5" />
//                     <span className="text-sm">{post.stats?.shares || 0}</span>
//                   </button>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <div className="flex items-center space-x-1 text-muted-foreground">
//                     <Eye className="h-4 w-4" />
//                     <span className="text-sm">{post.stats?.views || 0}</span>
//                   </div>
//                   <Button variant="ghost" size="sm">
//                     <Bookmark className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Feed;
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   Heart,
//   MessageCircle,
//   Share2,
//   Trophy,
//   Code,
//   Calendar,
//   Users,
//   TrendingUp,
//   Zap,
//   Eye,
//   Bookmark,
//   MoreHorizontal,
//   Plus,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { ref as dbRef, push, onValue, update } from "firebase/database";
// import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
// import { db } from "../firebase";

// // Helper function to extract GitHub username from URL
// const extractUsername = (url) => {
//   if (!url) return "";
//   try {
//     const parsedUrl = new URL(url);
//     const pathParts = parsedUrl.pathname.split("/").filter((part) => part);
//     return pathParts[0] || "";
//   } catch {
//     return "";
//   }
// };

// const Feed = () => {
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [sparkedPosts, setSparkedPosts] = useState(new Set());
//   const [sparkedComments, setSparkedComments] = useState(new Set());
//   const [likedPosts, setLikedPosts] = useState(new Set());
//   const [posts, setPosts] = useState([]);
//   const [user, setUser] = useState(null);
//   const [newPost, setNewPost] = useState("");
//   const [imageFile, setImageFile] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [githubUsername, setGithubUsername] = useState("");

//   const filters = [
//     { id: "all", label: "All Posts", icon: TrendingUp },
//     { id: "achievements", label: "Achievements", icon: Trophy },
//     { id: "projects", label: "Projects", icon: Code },
//     { id: "hackathons", label: "Hackathons", icon: Calendar },
//     { id: "following", label: "Following", icon: Users },
//   ];

//   // Track auth and fetch GitHub username
//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, (u) => {
//       if (u) {
//         setUser(u);
//         // Fetch GitHub username from Realtime Database
//         const userRef = dbRef(db, `students/${u.uid}`);
//         onValue(
//           userRef,
//           (snapshot) => {
//             if (snapshot.exists()) {
//               const userData = snapshot.val();
//               const githubUrl = userData.github || "";
//               const username = githubUrl ? extractUsername(githubUrl) : u.uid.slice(0, 8);
//               setGithubUsername(username);
//             } else {
//               setGithubUsername(u.uid.slice(0, 8));
//             }
//           },
//           { onlyOnce: true }
//         );
//       } else {
//         setUser(null);
//         setGithubUsername("");
//       }
//     });
//     return () => unsubscribe();
//   }, []);

//   // Load posts realtime
//   useEffect(() => {
//     const postsRef = dbRef(db, "posts");
//     return onValue(postsRef, (snapshot) => {
//       if (snapshot.exists()) {
//         const data = snapshot.val();
//         const loaded = Object.entries(data)
//           .map(([id, value]) => ({ id, ...value }))
//           .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
//         setPosts(loaded);
//       } else {
//         setPosts([]);
//       }
//     });
//   }, []);

//   const toggleSpark = (postId, currentSparks = 0) => {
//     if (!user) return;
//     setSparkedPosts((prev) => {
//       const newSet = new Set(prev);
//       if (newSet.has(postId)) {
//         newSet.delete(postId);
//         update(ref(db, `posts/${postId}/stats`), { sparks: currentSparks - 1 });
//       } else {
//         newSet.add(postId);
//         update(ref(db, `posts/${postId}/stats`), { sparks: currentSparks + 1 });
//       }
//       return newSet;
//     });
//   };

//   const toggleCommentSpark = (postId, commentId, currentSparks = 0) => {
//     if (!user) return;
//     setSparkedComments((prev) => {
//       const commentKey = `${postId}_${commentId}`;
//       const newSet = new Set(prev);
//       if (newSet.has(commentKey)) {
//         newSet.delete(commentKey);
//         update(ref(db, `posts/${postId}/comments/${commentId}/stats`), {
//           sparks: currentSparks - 1,
//         });
//       } else {
//         newSet.add(commentKey);
//         update(ref(db, `posts/${postId}/comments/${commentId}/stats`), {
//           sparks: currentSparks + 1,
//         });
//       }
//       return newSet;
//     });
//   };

//   const handleCreatePost = async () => {
//     if (!newPost.trim() && !imageFile) return;
//     setUploading(true);

//     try {
//       let imageUrl = null;
//       if (imageFile) {
//         const storage = getStorage();
//         const imageRef = storageRef(storage, `images/${Date.now()}_${imageFile.name}`);
//         await uploadBytes(imageRef, imageFile);
//         imageUrl = await getDownloadURL(imageRef);
//       }

//       const postRef = push(dbRef(db, "posts"));
//       await update(postRef, {
//         user: {
//           name: githubUsername ? `@${githubUsername}` : `@${user.uid.slice(0, 8)}`,
//           username: user.email || "",
//           avatar: user.photoURL || "👤",
//         },
//         content: {
//           description: newPost,
//           image: imageUrl,
//         },
//         stats: { likes: 0, comments: 0, shares: 0, views: 0 },
//         createdAt: Date.now(),
//         type: "post",
//       });

//       setNewPost("");
//       setImageFile(null);
//     } catch (error) {
//       console.error("Error creating post:", error);
//     } finally {
//       setUploading(false);
//     }
//   };

//   const filteredPosts =
//     activeFilter === "all"
//       ? posts
//       : posts.filter((post) => post.type === activeFilter || post.tags?.includes(activeFilter));

//   return (
//     <div className="min-h-screen pt-20 pb-10">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-8"
//         >
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
//             <div>
//               <h1 className="text-3xl font-space font-bold mb-2">
//                 Community <span className="neon-text">Feed</span>
//               </h1>
//               <p className="text-muted-foreground">
//                 Discover achievements, projects, and updates from the community
//               </p>
//             </div>
//             {user && (
//               <Button
//                 className="gradient-purple-cyan hover-lift mt-4 md:mt-0"
//                 onClick={handleCreatePost}
//                 disabled={uploading}
//               >
//                 <Plus className="h-4 w-4 mr-2" />
//                 Create Post
//               </Button>
//             )}
//           </div>
//           {/* Post Create Box */}
//           {user && (
//             <div className="glass-card rounded-xl p-4 mb-6">
//               <textarea
//                 placeholder="What's on your mind?"
//                 className="w-full p-2 rounded bg-transparent border border-gray-600"
//                 value={newPost}
//                 onChange={(e) => setNewPost(e.target.value)}
//                 disabled={uploading}
//               />
//               <div className="flex items-center justify-between mt-3">
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(e) => setImageFile(e.target.files[0])}
//                   disabled={uploading}
//                 />
//                 <Button onClick={handleCreatePost} disabled={!newPost && !imageFile || uploading}>
//                   {uploading ? "Uploading..." : "Post"}
//                 </Button>
//               </div>
//             </div>
//           )}
//           {/* Filters */}
//           <div className="flex space-x-1 glass rounded-lg p-1 overflow-x-auto">
//             {filters.map((filter) => {
//               const Icon = filter.icon;
//               return (
//                 <button
//                   key={filter.id}
//                   onClick={() => setActiveFilter(filter.id)}
//                   className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 whitespace-nowrap ${
//                     activeFilter === filter.id
//                       ? "bg-primary text-primary-foreground shadow-lg"
//                       : "text-muted-foreground hover:text-foreground hover:bg-white/5"
//                   }`}
//                 >
//                   <Icon className="h-4 w-4" />
//                   <span>{filter.label}</span>
//                 </button>
//               );
//             })}
//           </div>
//         </motion.div>
//         {/* Posts */}
//         <div className="space-y-6">
//           {filteredPosts.map((post, index) => (
//             <motion.article
//               key={post.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="glass-card rounded-xl p-6 hover-lift"
//             >
//               {/* Post Header */}
//               <div className="flex items-start justify-between mb-4">
//                 <div className="flex items-center space-x-3">
//                   <Avatar>
//                     <AvatarImage src={post.user?.avatar} />
//                     <AvatarFallback>{post.user?.name?.[0]}</AvatarFallback>
//                   </Avatar>
//                   <div>
//                     <div className="flex items-center space-x-2">
//                       <h3 className="font-semibold">{post.user?.name}</h3>
//                       <Zap className="h-4 w-4 text-primary" />
//                     </div>
//                     <p className="text-sm text-muted-foreground">{post.user?.username}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-2 text-muted-foreground">
//                   <span className="text-sm">{new Date(post.createdAt).toLocaleString()}</span>
//                   <Button variant="ghost" size="sm">
//                     <MoreHorizontal className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </div>
//               {/* Post Content */}
//               <div className="mb-4">
//                 <p className="text-muted-foreground mb-4">{post.content?.description}</p>
//                 {post.content?.image && !post.content.image.startsWith("blob:") && (
//                   <img
//                     src={post.content.image}
//                     alt="Post"
//                     className="rounded-lg mb-3 max-w-full h-auto"
//                     onError={(e) => console.error("Error loading image:", post.content.image, e)}
//                   />
//                 )}
//               </div>
//               {/* Post Actions */}
//               <div className="flex items-center justify-between pt-4 border-t border-border">
//       <div className="flex items-center space-x-6">
//         <button
//           onClick={() => {
//             if (!user) {
//               toast.error("Please sign in to spark posts.");
//               return;
//             }
//             toggleSpark(post.id, post.stats?.sparks || 0);
//           }}
//           className={`flex items-center space-x-2 transition-colors ${
//             sparkedPosts.has(post.id)
//               ? "text-yellow-400"
//               : "text-muted-foreground hover:text-yellow-400"
//           }`}
//           disabled={!user}
//           aria-label={`Spark post by ${post.user?.name}`}
//         >
//           <Zap className="h-5 w-5" />
//           <span className="text-sm">{post.stats?.sparks || 0} Spark</span>
//         </button>
//         <button
//           className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
//           onClick={() => setOpenCommentFor(openCommentFor === post.id ? null : post.id)}
//           aria-label={`View comments for post by ${post.user?.name}`}
//         >
//           <MessageCircle className="h-5 w-5" />
//           <span className="text-sm">{post.stats?.comments || 0}</span>
//         </button>
//         <button
//           className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
//           aria-label={`Share post by ${post.user?.name}`}
//         >
//           <Share2 className="h-5 w-5" />
//           <span className="text-sm">{post.stats?.shares || 0}</span>
//         </button>
//       </div>
//       <div className="flex items-center space-x-4">
//         <div className="flex items-center space-x-1 text-muted-foreground">
//           <Eye className="h-4 w-4" />
//           <span className="text-sm">{post.stats?.views || 0}</span>
//         </div>
//         <Button variant="ghost" size="sm" aria-label="Bookmark post">
//           <Bookmark className="h-4 w-4" />
//         </Button>
//       </div>
//     </div>
//     {/* Comment Section */}
//     {openCommentFor === post.id && (
//       <div className="mt-4 p-4 border rounded-lg bg-secondary">
//         {/* Emoji picker */}
//         <div className="flex space-x-2 mb-2">
//           {["😊", "👏", "⚡", "❤️", "😂"].map((emoji) => (
//             <button
//               key={emoji}
//               className="text-lg hover:scale-125 transition-transform"
//               onClick={() => {
//                 if (!user) {
//                   toast.error("Please sign in to comment.");
//                   return;
//                 }
//                 const commentRef = push(ref(db, `posts/${post.id}/comments`));
//                 update(commentRef, {
//                   user: {
//                     name: user.displayName || "Anonymous",
//                     username: user.email || "",
//                     avatar: user.photoURL || "👤",
//                   },
//                   text: emoji,
//                   createdAt: Date.now(),
//                   stats: { sparks: 0 },
//                 });
//                 update(ref(db, `posts/${post.id}/stats`), {
//                   comments: (post.stats?.comments || 0) + 1,
//                 });
//               }}
//               disabled={!user}
//               aria-label={`Comment with ${emoji} emoji`}
//             >
//               {emoji}
//             </button>
//           ))}
//         </div>
//         {/* Text comment input */}
//         <div className="flex mt-2 items-center">
//           <input
//             type="text"
//             ref={commentInputRef}
//             placeholder="Write a comment..."
//             className="flex-1 p-2 rounded border border-border bg-background"
//             value={commentText}
//             onChange={(e) => setCommentText(e.target.value)}
//             onKeyDown={(e) => {
//               if (e.key === "Enter" && user && commentText.trim()) {
//                 handleAddComment(post.id);
//               }
//             }}
//             disabled={!user}
//             aria-label="Write a comment"
//             aria-describedby="comment-instructions"
//           />
//           <Button
//             className="ml-2 p-2"
//             onClick={() => {
//               if (!user) {
//                 toast.error("Please sign in to comment.");
//                 return;
//               }
//               handleAddComment(post.id);
//             }}
//             disabled={!user || !commentText.trim()}
//             aria-label="Submit comment"
//           >
//             <ArrowRight className="h-5 w-5" />
//           </Button>
//         </div>
//         <p id="comment-instructions" className="sr-only">
//           Enter your comment and press Enter or click the arrow to submit.
//         </p>
//         {/* Existing comments */}
//         <div className="mt-4 max-h-64 overflow-y-auto">
//           {post.comments && post.comments.length > 0 ? (
//             post.comments.map((comment) => (
//               <div key={comment.id} className="flex items-start space-x-2 mt-2">
//                 <Avatar className="h-6 w-6">
//                   <AvatarImage src={comment.user.avatar} />
//                   <AvatarFallback>{comment.user.name?.[0]}</AvatarFallback>
//                 </Avatar>
//                 <div className="bg-background p-2 rounded-lg flex-1">
//                   <p className="text-sm font-semibold">{comment.user.name}</p>
//                   <p className="text-sm">{comment.text}</p>
//                   <button
//                     onClick={() => {
//                       if (!user) {
//                         toast.error("Please sign in to spark comments.");
//                         return;
//                       }
//                       toggleCommentSpark(post.id, comment.id, comment.stats?.sparks || 0);
//                     }}
//                     className={`flex items-center space-x-1 mt-1 text-sm transition-colors ${
//                       sparkedComments.has(`${post.id}_${comment.id}`)
//                         ? "text-yellow-400"
//                         : "text-muted-foreground hover:text-yellow-400"
//                     }`}
//                     disabled={!user}
//                     aria-label={`Spark comment by ${comment.user.name}`}
//                   >
//                     <Zap className="h-4 w-4" />
//                     <span>{comment.stats?.sparks || 0} Spark</span>
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-sm text-muted-foreground">No comments yet.</p>
//           )}
//         </div>
//       </div>
//     )}
//   </motion.article>
// ))}
// </div>
//       </div>
//     </div>
//   );
// };
// export default Feed;



import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  MessageCircle,
  Share2,
  Trophy,
  Code,
  Calendar,
  Users,
  TrendingUp,
  Eye,
  Bookmark,
  MoreHorizontal,
  Plus,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref, push, onValue, update } from "firebase/database";
import { db } from "../firebase";
import toast, { Toaster } from "react-hot-toast";

// Error Boundary Component
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center p-4 text-red-500">
          <p>Something went wrong: {this.state.error?.message}</p>
          <p>Please refresh the page or try again later.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

const Feed = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [sparkedPosts, setSparkedPosts] = useState(new Set());
  const [sparkedComments, setSparkedComments] = useState(new Set());
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [newPost, setNewPost] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [openCommentFor, setOpenCommentFor] = useState(null);
  const [commentText, setCommentText] = useState("");
  const commentInputRef = useRef(null);

  const filters = [
    { id: "all", label: "All Posts", icon: TrendingUp },
    { id: "achievements", label: "Achievements", icon: Trophy },
    { id: "projects", label: "Projects", icon: Code },
    { id: "hackathons", label: "Hackathons", icon: Calendar },
    { id: "following", label: "Tracking", icon: Users },
  ];

  // Track auth
  useEffect(() => {
    const auth = getAuth();
    return onAuthStateChanged(auth, (u) => {
      console.log("Feed: Current user:", u);
      setUser(u || null);
    });
  }, []);

  // Load posts and comments in real-time
  useEffect(() => {
    console.log("Feed: Fetching posts...");
    const postsRef = ref(db, "posts");
    return onValue(
      postsRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const loaded = Object.entries(data)
            .map(([id, value]) => ({
              id,
              user: value.user || { name: "Anonymous", username: "", avatar: "👤" },
              content: value.content || { description: "", image: null },
              stats: value.stats || { sparks: 0, comments: 0, shares: 0, views: 0 },
              comments: value.comments
                ? Object.entries(value.comments)
                    .map(([cid, comment]) => ({
                      id: cid,
                      ...comment,
                      stats: comment.stats || { sparks: 0 },
                    }))
                    .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))
                : [],
              createdAt: value.createdAt || Date.now(),
              type: value.type || "post",
              tags: Array.isArray(value.tags) ? value.tags : [],
            }))
            .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
          console.log("Feed: Loaded posts:", loaded);
          setPosts(loaded);
        } else {
          console.log("Feed: No posts found.");
          setPosts([]);
        }
      },
      (error) => {
        console.error("Feed: Error fetching posts:", error);
        toast.error("Failed to load posts.");
      }
    );
  }, []);

  const toggleSpark = (postId, currentSparks = 0) => {
    if (!user) return;
    setSparkedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
        update(ref(db, `posts/${postId}/stats`), { sparks: currentSparks - 1 });
      } else {
        newSet.add(postId);
        update(ref(db, `posts/${postId}/stats`), { sparks: currentSparks + 1 });
      }
      return newSet;
    });
  };

  const toggleCommentSpark = (postId, commentId, currentSparks = 0) => {
    if (!user) return;
    setSparkedComments((prev) => {
      const commentKey = `${postId}_${commentId}`;
      const newSet = new Set(prev);
      if (newSet.has(commentKey)) {
        newSet.delete(commentKey);
        update(ref(db, `posts/${postId}/comments/${commentId}/stats`), {
          sparks: currentSparks - 1,
        });
      } else {
        newSet.add(commentKey);
        update(ref(db, `posts/${postId}/comments/${commentId}/stats`), {
          sparks: currentSparks + 1,
        });
      }
      return newSet;
    });
  };

  const handleCreatePost = async () => {
    if (!user || (!newPost.trim() && !imageFile)) return;
    try {
      const postRef = push(ref(db, "posts"));
      await update(postRef, {
        user: {
          name: user.displayName || "Anonymous",
          username: user.email || "",
          avatar: user.photoURL || "👤",
        },
        content: {
          description: newPost,
          image: imageFile ? URL.createObjectURL(imageFile) : null,
        },
        stats: { sparks: 0, comments: 0, shares: 0, views: 0 },
        comments: {},
        createdAt: Date.now(),
        type: "post",
      });
      toast.success("Post created successfully!");
      setNewPost("");
      setImageFile(null);
    } catch (error) {
      console.error("Feed: Error creating post:", error);
      toast.error("Failed to create post.");
    }
  };

  const handleAddComment = (postId) => {
    if (!user || !commentText.trim()) return;
    try {
      const commentRef = push(ref(db, `posts/${postId}/comments`));
      update(commentRef, {
        user: {
          name: user.displayName || "Anonymous",
          username: user.email || "",
          avatar: user.photoURL || "👤",
        },
        text: commentText,
        createdAt: Date.now(),
        stats: { sparks: 0 },
      });
      update(ref(db, `posts/${postId}/stats`), {
        comments: (posts.find((p) => p.id === postId)?.stats?.comments || 0) + 1,
      });
      toast.success("Comment added!");
      setCommentText("");
    } catch (error) {
      console.error("Feed: Error adding comment:", error);
      toast.error("Failed to add comment.");
    }
  };

  const filteredPosts =
    activeFilter === "all"
      ? posts
      : posts.filter(
          (post) =>
            post.type === activeFilter || post.tags?.includes(activeFilter)
        );

  // Focus input when comment opens
  useEffect(() => {
    console.log("Feed: openCommentFor changed:", openCommentFor);
    if (openCommentFor && commentInputRef.current) {
      commentInputRef.current.focus();
    }
  }, [openCommentFor]);

  return (
    <ErrorBoundary>
      <div className="min-h-screen pt-20 pb-10">
        <Toaster position="top-right" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h1 className="text-3xl font-space font-bold mb-2">
                  Community <span className="neon-text">Feed</span>
                </h1>
                <p className="text-muted-foreground">
                  Discover achievements, projects, and updates from the community
                </p>
              </div>
              {user && (
                <Button
                  className="gradient-purple-cyan hover-lift mt-4 md:mt-0"
                  onClick={handleCreatePost}
                  disabled={!newPost.trim() && !imageFile}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create Post
                </Button>
              )}
            </div>
            {/* Post Create Box */}
            {user && (
              <div className="glass-card rounded-xl p-4 mb-6">
                <textarea
                  placeholder="What's on your mind?"
                  className="w-full p-2 rounded bg-transparent border border-gray-600"
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                />
                <div className="flex items-center justify-between mt-3">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImageFile(e.target.files[0])}
                  />
                  <Button
                    onClick={handleCreatePost}
                    disabled={!newPost.trim() && !imageFile}
                  >
                    Post
                  </Button>
                </div>
              </div>
            )}
            {/* Filters */}
            <div className="flex space-x-1 glass rounded-lg p-1 overflow-x-auto">
              {filters.map((filter) => {
                const Icon = filter.icon;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                      activeFilter === filter.id
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    }`}
                    aria-label={`Filter by ${filter.label}`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{filter.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
          {/* Posts */}
          <div className="space-y-6">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 hover-lift"
              >
                {/* Post Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={post.user?.avatar} />
                      <AvatarFallback>{post.user?.name?.[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold">{post.user?.name}</h3>
                        <Zap className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">{post.user?.username}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <span className="text-sm">{new Date(post.createdAt).toLocaleString()}</span>
                    <Button variant="ghost" size="sm" aria-label="More options">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                {/* Post Content */}
                <div className="mb-4">
                  <p className="text-muted-foreground mb-4">{post.content?.description}</p>
                  {post.content?.image && (
                    <img src={post.content.image} alt="Post image" className="rounded-lg mb-3" />
                  )}
                </div>
                {/* Post Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-6">
                    <button
                      onClick={() => {
                        if (!user) {
                          toast.error("Please sign in to spark posts.");
                          return;
                        }
                        toggleSpark(post.id, post.stats?.sparks || 0);
                      }}
                      className={`flex items-center space-x-2 transition-colors ${
                        sparkedPosts.has(post.id)
                          ? "text-yellow-400"
                          : "text-muted-foreground hover:text-yellow-400"
                      }`}
                      disabled={!user}
                      aria-label={`Spark post by ${post.user?.name}`}
                    >
                      <Zap className="h-5 w-5" />
                      <span className="text-sm">{post.stats?.sparks || 0} Spark</span>
                    </button>
                    <button
                      className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setOpenCommentFor(openCommentFor === post.id ? null : post.id)}
                      aria-label={`View comments for post by ${post.user?.name}`}
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span className="text-sm">{post.stats?.comments || 0}</span>
                    </button>
                    <button
                      className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Share post by ${post.user?.name}`}
                    >
                      <Share2 className="h-5 w-5" />
                      <span className="text-sm">{post.stats?.shares || 0}</span>
                    </button>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Eye className="h-4 w-4" />
                      <span className="text-sm">{post.stats?.views || 0}</span>
                    </div>
                    <Button variant="ghost" size="sm" aria-label="Bookmark post">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                {/* Comment Section */}
                {openCommentFor === post.id && (
                  <div className="mt-4 p-4 border rounded-lg bg-secondary">
                    {/* Emoji picker */}
                    <div className="flex space-x-2 mb-2">
                      {["😊", "👏", "⚡", "❤️", "😂"].map((emoji) => (
                        <button
                          key={emoji}
                          className="text-lg hover:scale-125 transition-transform"
                          onClick={() => {
                            if (!user) {
                              toast.error("Please sign in to comment.");
                              return;
                            }
                            const commentRef = push(ref(db, `posts/${post.id}/comments`));
                            update(commentRef, {
                              user: {
                                name: user.displayName || "Anonymous",
                                username: user.email || "",
                                avatar: user.photoURL || "👤",
                              },
                              text: emoji,
                              createdAt: Date.now(),
                              stats: { sparks: 0 },
                            });
                            update(ref(db, `posts/${post.id}/stats`), {
                              comments: (post.stats?.comments || 0) + 1,
                            });
                          }}
                          disabled={!user}
                          aria-label={`Comment with ${emoji} emoji`}
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                    {/* Text comment input */}
                    <div className="flex mt-2 items-center">
                      <input
                        type="text"
                        ref={commentInputRef}
                        placeholder="Write a comment..."
                        className="flex-1 p-2 rounded border border-border bg-background"
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && user && commentText.trim()) {
                            handleAddComment(post.id);
                          }
                        }}
                        disabled={!user}
                        aria-label="Write a comment"
                        aria-describedby="comment-instructions"
                      />
                      <Button
                        className="ml-2 p-2"
                        onClick={() => {
                          if (!user) {
                            toast.error("Please sign in to comment.");
                            return;
                          }
                          handleAddComment(post.id);
                        }}
                        disabled={!user || !commentText.trim()}
                        aria-label="Submit comment"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </div>
                    <p id="comment-instructions" className="sr-only">
                      Enter your comment and press Enter or click the arrow to submit.
                    </p>
                    {/* Existing comments */}
                    <div className="mt-4 max-h-64 overflow-y-auto">
                      {post.comments && post.comments.length > 0 ? (
                        post.comments.map((comment) => (
                          <div key={comment.id} className="flex items-start space-x-2 mt-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={comment.user.avatar} />
                              <AvatarFallback>{comment.user.name?.[0]}</AvatarFallback>
                            </Avatar>
                            <div className="bg-background p-2 rounded-lg flex-1">
                              <p className="text-sm font-semibold">{comment.user.name}</p>
                              <p className="text-sm">{comment.text}</p>
                              <button
                                onClick={() => {
                                  if (!user) {
                                    toast.error("Please sign in to spark comments.");
                                    return;
                                  }
                                  toggleCommentSpark(post.id, comment.id, comment.stats?.sparks || 0);
                                }}
                                className={`flex items-center space-x-1 mt-1 text-sm transition-colors ${
                                  sparkedComments.has(`${post.id}_${comment.id}`)
                                    ? "text-yellow-400"
                                    : "text-muted-foreground hover:text-yellow-400"
                                }`}
                                disabled={!user}
                                aria-label={`Spark comment by ${comment.user.name}`}
                              >
                                <Zap className="h-4 w-4" />
                                <span>{comment.stats?.sparks || 0} Spark</span>
                              </button>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-sm text-muted-foreground">No comments yet.</p>
                      )}
                    </div>
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Feed;
