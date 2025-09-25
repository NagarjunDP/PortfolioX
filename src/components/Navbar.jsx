// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { 
//   Menu, 
//   X, 
//   Zap, 
//   User, 
//   Users, 
//   Trophy, 
//   Calendar, 
//   Shield,
//   Home,
//   Activity
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Home', path: '/', icon: Home },
//     { name: 'Feed', path: '/feed', icon: Activity },
//     { name: 'Wall of Fame', path: '/wall-of-fame', icon: Trophy },
//     { name: 'Hackathons', path: '/hackathons', icon: Calendar },
//     { name: 'Verification', path: '/blockchain-verification', icon: Shield },
//     {name : 'Journey', path: '/journey' , icon: Activity}
//   ];

//   const isActive = (path) => location.pathname === path;

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? 'glass-strong' : 'glass'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2 group">
//             <div className="relative">
//               <Zap className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
//               <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:bg-accent/20 transition-colors duration-300" />
//             </div>
//             <span className="font-space font-bold text-xl neon-text">
//               PortTrack
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-1">
//             {navItems.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <Link
//                   key={item.name}
//                   to={item.path}
//                   className={`relative px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 group ${
//                     isActive(item.path)
//                       ? 'text-primary bg-primary/10'
//                       : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
//                   }`}
//                 >
//                   <Icon className="h-4 w-4" />
//                   <span className="text-sm font-medium">{item.name}</span>
//                   {isActive(item.path) && (
//                     <motion.div
//                       layoutId="activeTab"
//                       className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20"
//                       transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
//                     />
//                   )}
//                 </Link>
//               );
//             })}
//           </div>

//           {/* Auth Buttons */}
//           <div className="hidden md:flex items-center space-x-3">
//             <Link to="/auth">
//               <Button variant="ghost" size="sm" className="hover-glow">
//                 <User className="h-4 w-4 mr-2" />
//                 Sign In
//               </Button>
//             </Link>
//             <Link to="/auth">
//               <Button size="sm" className="gradient-purple-cyan hover-lift">
//                 Get Started
//               </Button>
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors duration-200"
//           >
//             {isOpen ? (
//               <X className="h-6 w-6" />
//             ) : (
//               <Menu className="h-6 w-6" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <motion.div
//         initial={{ opacity: 0, height: 0 }}
//         animate={{ 
//           opacity: isOpen ? 1 : 0, 
//           height: isOpen ? 'auto' : 0 
//         }}
//         transition={{ duration: 0.3 }}
//         className="md:hidden overflow-hidden glass-strong border-t border-white/10"
//       >
//         <div className="px-4 py-4 space-y-2">
//           {navItems.map((item) => {
//             const Icon = item.icon;
//             return (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 onClick={() => setIsOpen(false)}
//                 className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
//                   isActive(item.path)
//                     ? 'text-primary bg-primary/10 border border-primary/20'
//                     : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
//                 }`}
//               >
//                 <Icon className="h-5 w-5" />
//                 <span className="font-medium">{item.name}</span>
//               </Link>
//             );
//           })}
          
//           <div className="pt-4 border-t border-white/10 space-y-2">
//             <Link to="/auth" onClick={() => setIsOpen(false)}>
//               <Button variant="ghost" className="w-full justify-start">
//                 <User className="h-4 w-4 mr-2" />
//                 Sign In
//               </Button>
//             </Link>
//             <Link to="/auth" onClick={() => setIsOpen(false)}>
//               <Button className="w-full gradient-purple-cyan">
//                 Get Started
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </motion.div>
//     </motion.nav>
//   );
// };

// export default Navbar;


// //working
// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { 
//   Menu, 
//   X, 
//   Zap, 
//   User, 
//   Users, 
//   Trophy, 
//   Calendar, 
//   Shield,
//   Home,
//   Activity,
//   LogOut
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// // ✅ Import Firebase auth
// import { auth } from "../firebase";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import Feed from '@/pages/Feed';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [user, setUser] = useState(null); // ✅ Store user
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // ✅ Track Firebase user
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       setUser(null);
//     } catch (error) {
//       console.error("Logout error:", error.message);
//     }
//   };

//   const navItems = [
//     { name: 'Home', path: '/', icon: Home },
//     {name : 'Feed', path :'/feed',icon:Activity},
//     { name: 'Journey', path: '/journey', icon: Activity },
//     { name: 'Wall of Fame', path: '/wall-of-fame', icon: Trophy },
//     { name: 'Hackathons', path: '/hackathons', icon: Calendar },
//     { name: 'Verification', path: '/blockchain-verification', icon: Shield },
//   ];

//   const isActive = (path) => location.pathname === path;

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? 'glass-strong' : 'glass'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2 group">
//             <div className="relative">
//               <Zap className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
//               <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:bg-accent/20 transition-colors duration-300" />
//             </div>
//             <span className="font-space font-bold text-xl neon-text">
//               PortTrack
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-1">
//             {navItems.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <Link
//                   key={item.name}
//                   to={item.path}
//                   className={`relative px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 group ${
//                     isActive(item.path)
//                       ? 'text-primary bg-primary/10'
//                       : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
//                   }`}
//                 >
//                   <Icon className="h-4 w-4" />
//                   <span className="text-sm font-medium">{item.name}</span>
//                   {isActive(item.path) && (
//                     <motion.div
//                       layoutId="activeTab"
//                       className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20"
//                       transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
//                     />
//                   )}
//                 </Link>
//               );
//             })}
//           </div>

//           {/* Auth/User Section */}
//           <div className="hidden md:flex items-center space-x-3">
//             {user ? (
//               <>
//                 <span className="text-sm font-medium">
//                   👋 {user.displayName || user.email}
//                 </span>
//                 <Button variant="ghost" size="sm" onClick={handleLogout}>
//                   <LogOut className="h-4 w-4 mr-2" />
//                   Logout
//                 </Button>
//               </>
//             ) : (
//               <>
//                 <Link to="/auth">
//                   <Button variant="ghost" size="sm" className="hover-glow">
//                     <User className="h-4 w-4 mr-2" />
//                     Sign In
//                   </Button>
//                 </Link>
//                 <Link to="/auth">
//                   <Button size="sm" className="gradient-purple-cyan hover-lift">
//                     Get Started
//                   </Button>
//                 </Link>
//               </>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors duration-200"
//           >
//             {isOpen ? (
//               <X className="h-6 w-6" />
//             ) : (
//               <Menu className="h-6 w-6" />
//             )}
//           </button>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LogOut, Home, Trophy, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { auth } from '../firebase';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      console.log('Navbar: Current user:', currentUser);
      setUser(currentUser);
    }, (error) => {
      console.error('Navbar: Auth error:', error);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate('/auth');
    } catch (error) {
      console.error('Navbar: Sign out error:', error);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Wall of Fame', path: '/wall-of-fame', icon: Trophy },
    { name: 'Hackathons', path: '/hackathons', icon: Zap },
    { name: 'Feed', path: '/feed', icon: Users },
    { name: 'Journey', path: '/journey', icon: Users }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              >
                <Zap className="h-8 w-8 text-primary" />
              </motion.div>
              <span className="text-xl font-bold text-foreground neon-text">PortTrack</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium hover-glow"
              >
                <item.icon className="inline-block h-4 w-4 mr-1" />
                {item.name}
              </Link>
            ))}
            {user ? (
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  className="text-foreground hover:text-primary neon-text hover-glow"
                  onClick={() => navigate('/dashboard')}
                >
                  {user.displayName || user.email}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover-glow"
                  onClick={handleSignOut}
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  Log Out
                </Button>
              </div>
            ) : (
              <Link to="/auth">
                <Button className="gradient-purple-cyan">Sign In</Button>
              </Link>
            )}
          </div>

          <div className="md:hidden flex items-center">
            {user && (
              <Button
                variant="ghost"
                className="text-foreground hover:text-primary neon-text hover-glow mr-2"
                onClick={() => navigate('/dashboard')}
              >
                {user.displayName || user.email}
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="hover-glow"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-strong"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium hover-glow"
                  onClick={toggleMenu}
                >
                  <item.icon className="inline-block h-4 w-4 mr-1" />
                  {item.name}
                </Link>
              ))}
              {user ? (
                <Button
                  variant="ghost"
                  className="w-full text-left hover-glow"
                  onClick={() => {
                    handleSignOut();
                    toggleMenu();
                  }}
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  Log Out
                </Button>
              ) : (
                <Link
                  to="/auth"
                  className="block"
                  onClick={toggleMenu}
                >
                  <Button className="w-full gradient-purple-cyan">Sign In</Button>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;