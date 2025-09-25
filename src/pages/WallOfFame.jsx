import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';
import {
  Trophy,
  Medal,
  Crown,
  Star,
  TrendingUp,
  Award,
  Code,
  Users,
  Eye,
  MapPin,
  Zap,
  Filter,
  ChevronDown,
  Sparkles,
  Target,
  BookOpen,
  X,
  ExternalLink,
  Github,
  Heart,
  Flame,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Helper function to extract GitHub username from URL
const extractUsername = (url) => {
  try {
    const parsedUrl = new URL(url);
    const pathParts = parsedUrl.pathname.split('/').filter((part) => part);
    return pathParts[0] || '';
  } catch {
    return '';
  }
};

// Helper function to fetch GitHub stats
const fetchGitHubStats = async (username, token = '') => {
  try {
    const headers = token ? { Authorization: `token ${token}` } : {};
    const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
      headers,
      mode: 'cors',
    });
    if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
    const repos = await response.json();
    const repoCount = repos.length;
    const totalStars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
    return { repoCount, totalStars };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return { repoCount: 0, totalStars: 0 };
  }
};

// AI analysis for badges and suggestions
const analyzePortfolio = (skills, interests) => {
  const trendingSkills = ['AI/ML', 'Cloud Computing', 'DevOps', 'Python', 'TypeScript', 'Next.js', 'GraphQL'];
  const mappedSkills = skills.flatMap((role) => {
    const skillMap = {
      'react js developer': ['React', 'JavaScript', 'HTML', 'CSS'],
      'frontend developer': ['JavaScript', 'HTML', 'CSS', 'React', 'TypeScript', 'Vue.js', 'Angular'],
      'full stack developer': ['JavaScript', 'Node.js', 'React', 'TypeScript', 'SQL', 'NoSQL', 'AWS'],
    };
    return skillMap[role.toLowerCase()] || [role];
  });

  const badges = [];
  if (mappedSkills.length >= 5) badges.push('Skill Master');
  if (mappedSkills.some((skill) => trendingSkills.includes(skill))) badges.push('Trend Setter');

  const suggestions = [
    ...trendingSkills
      .filter((ts) => !mappedSkills.includes(ts))
      .map((ts) => `Learn ${ts} via Coursera or Udemy to align with 2025 trends.`),
    `Enhance ${mappedSkills.join(', ')} with open-source contributions.`,
    'Build a portfolio with live demos on GitHub.',
    'Network on LinkedIn with professionals in your field.',
  ];

  return { badges, suggestions, strongSkills: mappedSkills };
};

// Compute score based on portfolio data
const computeScore = (data, githubStats) => {
  let score = 0;
  const skills = [...(data.skills || []), ...(data.newSkill ? [data.newSkill] : [])];
  score += skills.length * 50;
  score += (data.projects?.split(',').filter(Boolean).length || 0) * 100;
  score += (data.certifications?.split(',').filter(Boolean).length || 0) * 75;
  score += githubStats.repoCount * 20;
  score += githubStats.totalStars * 10;
  score += data.interests?.toLowerCase().includes('ai') ? 50 : 0;
  return score;
};

const WallOfFame = () => {
  const [activeCategory, setActiveCategory] = useState('overall');
  const [timeframe, setTimeframe] = useState('all-time');
  const [leaderboard, setLeaderboard] = useState([]);
  const [aiAnalysis, setAiAnalysis] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);

  const categories = [
    { id: 'overall', label: 'Overall', icon: Trophy },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'community', label: 'Community', icon: Users },
  ];

  const timeframes = [
    { id: 'all-time', label: 'All Time' },
    { id: 'this-year', label: 'This Year' },
    { id: 'this-month', label: 'This Month' },
    { id: 'this-week', label: 'This Week' },
  ];

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async () => {
      const studentsRef = ref(db, 'students');
      onValue(
        studentsRef,
        async (snapshot) => {
          try {
            if (snapshot.exists()) {
              const data = snapshot.val();
              const githubToken = import.meta.env.VITE_GITHUB_TOKEN || '';
              if (!githubToken) {
                console.warn(
                  'GitHub token not found. Using unauthenticated API calls (60 requests/hour limit). Add VITE_GITHUB_TOKEN to .env.'
                );
              }

              const leaderboardData = [];
              let allSkills = [];
              let allInterests = '';

              for (const [uid, student] of Object.entries(data)) {
                const githubUsername = student.github ? extractUsername(student.github) : '';
                const githubStats = githubUsername
                  ? await fetchGitHubStats(githubUsername, githubToken)
                  : { repoCount: 0, totalStars: 0 };
                const skills = [...(student.skills || []), ...(student.newSkill ? [student.newSkill] : [])];
                const { badges, suggestions, strongSkills } = analyzePortfolio(skills, student.interests || '');

                if (student.projects?.split(',').filter(Boolean).length >= 3) badges.push('Project Pro');
                if (student.certifications?.split(',').filter(Boolean).length >= 2) badges.push('Certified Expert');

                const score = computeScore(student, githubStats);
                leaderboardData.push({
                  uid,
                  rank: 0,
                  name: githubUsername ? `@${githubUsername}` : `@${uid.slice(0, 8)}`,
                  avatar: '🌟',
                  university: student.university || 'Unknown University',
                  location: student.location || 'Unknown Location',
                  score,
                  achievements: student.certifications?.split(',').filter(Boolean).length || 0,
                  projects: student.projects?.split(',').filter(Boolean).length || 0,
                  hackathons: 0,
                  followers: githubStats.totalStars || 0,
                  verified: true,
                  badges,
                  streak: Math.floor(Math.random() * 50),
                  level: score > 2000 ? 'Expert' : score > 1000 ? 'Advanced' : 'Intermediate',
                  details: { ...student, skills, aiSuggestions: suggestions },
                });

                allSkills = [...allSkills, ...skills];
                allInterests += (student.interests || '') + ',';
              }

              leaderboardData.sort((a, b) => b.score - a.score);
              leaderboardData.forEach((user, index) => (user.rank = index + 1));

              setLeaderboard(leaderboardData);

              const topSkills = [...new Set(allSkills)]
                .sort((a, b) => allSkills.filter((s) => s === b).length - allSkills.filter((s) => s === a).length)
                .slice(0, 5);
              setAiAnalysis({
                topSkills,
                suggestions: analyzePortfolio(allSkills, allInterests).suggestions,
              });

              setLoading(false);
            } else {
              setLeaderboard([]);
              setLoading(false);
            }
          } catch (error) {
            console.error('Error fetching Firebase data:', error);
            setLeaderboard([]);
            setLoading(false);
          }
        },
        (error) => {
          console.error('Firebase onValue error:', error);
          setLeaderboard([]);
          setLoading(false);
        }
      );
    });

    return () => unsubscribe();
  }, []);

  // Helper to render rank icons
  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Crown className="h-8 w-8 text-yellow-400 drop-shadow-lg" />;
      case 2:
        return <Medal className="h-8 w-8 text-gray-300 drop-shadow-lg" />;
      case 3:
        return <Award className="h-8 w-8 text-amber-500 drop-shadow-lg" />;
      default:
        return <span className="text-3xl font-bold text-primary drop-shadow-lg">#{rank}</span>;
    }
  };

  // Helper to determine rank background gradient
  const getRankColor = (rank) => {
    switch (rank) {
      case 1:
        return 'from-yellow-500/30 to-orange-600/30 border-yellow-500/40 backdrop-blur-sm';
      case 2:
        return 'from-gray-400/30 to-gray-600/30 border-gray-400/40 backdrop-blur-sm';
      case 3:
        return 'from-amber-500/30 to-amber-700/30 border-amber-500/40 backdrop-blur-sm';
      default:
        return 'from-primary/20 to-accent/20 border-primary/30 backdrop-blur-sm';
    }
  };

  // Helper to determine level badge color
  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'bg-gradient-to-r from-purple-600/30 to-indigo-600/30 text-purple-300 border-purple-500/50';
      case 'Advanced':
        return 'bg-gradient-to-r from-blue-600/30 to-cyan-600/30 text-blue-300 border-blue-500/50';
      case 'Intermediate':
        return 'bg-gradient-to-r from-green-600/30 to-emerald-600/30 text-green-300 border-green-500/50';
      default:
        return 'bg-gray-600/30 text-gray-300 border-gray-500/50';
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 animate-pulse"></div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="relative z-10"
        >
          <Sparkles className="h-16 w-16 text-primary drop-shadow-2xl" />
        </motion.div>
      </div>
    );
  }

  // Empty state
  if (!leaderboard.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5"></div>
        <p className="text-white text-center text-xl relative z-10 drop-shadow-lg">
          No student portfolios found. Encourage students to add their details!
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-10 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 relative overflow-hidden">
      {/* Parallax Starfield */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(150)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-white to-primary rounded-full shadow-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -1000],
              opacity: [0.3, 0.9, 0.3],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 15 + Math.random() * 25,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',
            }}
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-40 blur-sm"
            style={{
              left: `${20 + i * 20}%`,
              top: `${10 + i * 15}%`,
            }}
            animate={{
              x: [-20, 20],
              y: [-10, 10],
              rotate: 360,
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* AI Portfolio Analysis Section */}
        {aiAnalysis && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="glass-card rounded-2xl p-6 mb-12 border border-primary/40 bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-xl shadow-xl"
          >
            <div className="flex items-center mb-6">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="h-6 w-6 text-primary mr-3 drop-shadow-lg" />
              </motion.div>
              <h2 className="text-2xl font-space font-bold text-white">AI Portfolio Insights</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <TrendingUp className="h-5 w-5 text-green-400 mr-2" />
                  Top Community Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {aiAnalysis.topSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative"
                    >
                      <Badge className="bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-blue-300 border-blue-500/50 px-3 py-1 text-sm backdrop-blur-sm shadow-lg hover:shadow-primary/20 transition-all duration-300">
                        {skill}
                        <Star className="h-3 w-3 ml-1 group-hover:animate-pulse" />
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <Target className="h-5 w-5 text-orange-400 mr-2" />
                  Growth Suggestions
                </h3>
                <ul className="text-gray-200 space-y-2">
                  {aiAnalysis.suggestions.map((suggestion, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start p-2 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-colors"
                    >
                      <Flame className="h-4 w-4 text-orange-400 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm">{suggestion}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center mb-12 relative"
        >
          <motion.div
            className="inline-flex items-center px-6 py-2 rounded-full glass mb-6 hover-glow backdrop-blur-xl border border-primary/30 shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="h-5 w-5 text-primary mr-2 animate-pulse" />
            <span className="text-sm font-semibold text-primary">🚀 Community Champions</span>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-space font-bold mb-6 relative"
            animate={{ textShadow: ['0 0 10px rgba(139,92,246,0.5)', '0 0 20px rgba(59,130,246,0.5)', '0 0 10px rgba(139,92,246,0.5)'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl animate-glitch">
              Wall of Fame
            </span>
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm">
            Celebrating stellar student portfolios with cutting-edge AI insights. Rise through the ranks with skills, projects, and innovation in 2025!
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col lg:flex-row justify-between items-center mb-12 space-y-4 lg:space-y-0"
        >
          <div className="flex space-x-1 glass rounded-xl p-1 overflow-hidden backdrop-blur-xl border border-primary/20 shadow-xl">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-500 whitespace-nowrap relative overflow-hidden ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg shadow-primary/25'
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className={`h-5 w-5 transition-colors ${activeCategory === category.id ? 'text-white' : 'group-hover:text-primary'}`} />
                  <span>{category.label}</span>
                  {activeCategory === category.id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20"
                      layoutId="filter-glow"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
          <div className="relative group">
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="appearance-none glass rounded-xl px-4 py-2 pr-8 text-sm font-semibold bg-transparent border border-primary/30 focus:border-primary/50 text-white focus:outline-none backdrop-blur-xl"
            >
              {timeframes.map((tf) => (
                <option key={tf.id} value={tf.id} className="bg-slate-800 text-white">
                  {tf.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary group-hover:animate-bounce pointer-events-none" />
          </div>
        </motion.div>

        {/* Fixed Podium Layout */}
        <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.3 }}
  className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 perspective-1200 relative max-w-6xl mx-auto"
>
  {leaderboard.slice(0, 3).map((user, index) => {
    const positions = [1, 0, 2]; // Center #1, left #2, right #3
    const actualIndex = positions[index];
    const actualUser = leaderboard[actualIndex];
    return (
      <motion.div
        key={actualUser.rank}
        initial={{ opacity: 0, y: 50, rotateX: 45 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
        className={`glass-card rounded-2xl p-4 text-center hover-lift transform shadow-xl relative overflow-hidden min-h-[320px] flex flex-col justify-between ${
          actualUser.rank === 1 ? 'md:order-2 translate-z-40' :
          actualUser.rank === 2 ? 'md:order-1 translate-z-20' : 'md:order-3 translate-z-20'
        } ${getRankColor(actualUser.rank)}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse rounded-2xl"></div>
        <div className="relative z-10 space-y-3">
          <div className="mb-3">{getRankIcon(actualUser.rank)}</div>
          <div className="relative w-12 h-12 mx-auto">
            <motion.div
              className="text-3xl absolute inset-0 flex items-center justify-center drop-shadow-xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              {actualUser.avatar}
            </motion.div>
          </div>
          <h3 className="text-lg font-bold font-space text-white drop-shadow-lg">{actualUser.name}</h3>
          <div className="flex flex-wrap justify-center gap-1">
            {actualUser.details.skills.slice(0, 3).map((skill) => (
              <Badge
                key={skill}
                className="bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-blue-300 border-blue-500/50 px-2 py-0.5 text-xs"
              >
                {skill}
              </Badge>
            ))}
          </div>
          <div className="text-2xl font-bold font-space bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-xl">
            {actualUser.score.toLocaleString()}
          </div>
          <div className={`inline-flex px-2 py-1 rounded-full text-xs font-bold border-2 shadow-lg ${getLevelColor(actualUser.level)}`}>
            <Star className="h-3 w-3 mr-1" />
            {actualUser.level}
          </div>
          <div className="grid grid-cols-2 gap-3 text-center">
            <motion.div whileHover={{ scale: 1.1 }} className="space-y-1">
              <div className="text-base font-bold text-purple-400">{actualUser.achievements}</div>
              <div className="text-xs text-gray-300">Achievements</div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="space-y-1">
              <div className="text-base font-bold text-blue-400">{actualUser.projects}</div>
              <div className="text-xs text-gray-300">Projects</div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  })}
</motion.div>

        {/* Full Leaderboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-space font-bold mb-8 flex items-center justify-center">
            <Trophy className="h-6 w-6 text-yellow-400 mr-2" />
            Full Leaderboard
          </h2>
          {leaderboard.map((user, index) => (
            <motion.div
              key={user.rank}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.03 }}
              className={`glass-card rounded-2xl p-6 hover-lift shadow-xl relative overflow-hidden ${getRankColor(user.rank)}`}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm">
                    {getRankIcon(user.rank)}
                  </div>
                  <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm">
                    <div className="text-3xl absolute inset-0 flex items-center justify-center drop-shadow-lg">{user.avatar}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-bold font-space text-white">{user.name}</h3>
                      {user.verified && <Zap className="h-4 w-4 text-green-400 animate-pulse" />}
                      <div className={`px-2 py-1 rounded-full text-xs font-bold border-2 shadow-md ${getLevelColor(user.level)}`}>
                        {user.level}
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-300 mb-2">
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1 text-purple-400" />
                        {user.university}
                      </div>
                      <span>•</span>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-pink-400" />
                        {user.location}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {user.details.skills.map((skill) => (
                        <motion.div
                          key={skill}
                          whileHover={{ scale: 1.05, rotate: 5 }}
                          className="bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-blue-300 border border-blue-500/50 px-2 py-1 rounded-full text-xs font-medium shadow-lg"
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold font-space bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
                      {user.score.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">Score</div>
                  </div>
                  <div className="hidden md:grid grid-cols-4 gap-4 text-center">
                    <motion.div whileHover={{ scale: 1.1 }} className="space-y-1">
                      <div className="text-lg font-bold text-purple-400">{user.achievements}</div>
                      <div className="text-xs text-gray-400">Achievements</div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className="space-y-1">
                      <div className="text-lg font-bold text-blue-400">{user.projects}</div>
                      <div className="text-xs text-gray-400">Projects</div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className="space-y-1">
                      <div className="text-lg font-bold text-orange-400">{user.hackathons}</div>
                      <div className="text-xs text-gray-400">Hackathons</div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} className="space-y-1">
                      <div className="text-lg font-bold text-pink-400">{user.followers}</div>
                      <div className="text-xs text-gray-400">Tracks</div>
                    </motion.div>
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Button
                      variant="outline"
                      className="glass hover-glow border-primary/50 bg-gradient-to-r from-transparent to-primary/10 backdrop-blur-xl px-4 py-2 font-semibold"
                      onClick={() => setSelectedUser(user)}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Portfolio
                    </Button>
                  </motion.div>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between mt-4 pt-4 border-t border-white/10 relative z-10">
                <div className="flex flex-wrap gap-2">
                  {user.badges.map((badge) => (
                    <motion.div
                      key={badge}
                      whileHover={{ scale: 1.15, rotate: 10, y: -5 }}
                      className="bg-gradient-to-r from-primary/30 to-purple-600/30 text-primary border border-primary/50 px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm"
                    >
                      <Heart className="h-3 w-3 inline mr-1" />
                      {badge}
                    </motion.div>
                  ))}
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-300">
                  <div className="flex items-center bg-red-500/20 px-2 py-1 rounded-full border border-red-500/30">
                    <Flame className="h-4 w-4 mr-2 text-red-400 animate-pulse" />
                    <span className="font-semibold">{user.streak} day streak</span>
                  </div>
                  <Github className="h-5 w-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Portfolio Modal */}
        <AnimatePresence>
          {selectedUser && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-2xl z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedUser(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateY: 90 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="glass-card bg-slate-900/95 backdrop-blur-3xl border border-primary/60 rounded-2xl p-6 max-w-lg w-full relative overflow-hidden shadow-xl"
                onClick={(e) => e.stopPropagation()}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 animate-pulse rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        className="text-4xl drop-shadow-xl"
                        animate={{ scale: [1, 1.2, 1], y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        {selectedUser.avatar}
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-white bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">{selectedUser.name}</h3>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedUser(null)}
                      className="hover:bg-white/20 text-white backdrop-blur-sm"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-4 text-gray-200">
                    <div className="flex items-center space-x-2 p-2 bg-white/5 rounded-lg border border-white/10">
                      <BookOpen className="h-4 w-4 text-purple-400" />
                      <span className="font-semibold">{selectedUser.university}</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 bg-white/5 rounded-lg border border-white/10">
                      <MapPin className="h-4 w-4 text-pink-400" />
                      <span className="font-semibold">{selectedUser.location}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
                        <Target className="h-4 w-4 mr-2" />
                        Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedUser.details.skills.map((skill, index) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-blue-300 border border-blue-500/50 px-2 py-1 rounded-full text-xs font-medium shadow-lg hover:scale-105 transition-transform"
                          >
                            {skill}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Projects</h4>
                      <p className="text-gray-300 bg-white/5 p-2 rounded-lg border border-white/10">{selectedUser.details.projects || 'None listed'}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Certifications</h4>
                      <p className="text-gray-300 bg-white/5 p-2 rounded-lg border border-white/10">{selectedUser.details.certifications || 'None listed'}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Interests</h4>
                      <p className="text-gray-300 bg-white/5 p-2 rounded-lg border border-white/10 italic">{selectedUser.details.interests || 'Not specified'}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
                        <Sparkles className="h-4 w-4 mr-2 text-yellow-400" />
                        AI Suggestions
                      </h4>
                      <ul className="space-y-2">
                        {selectedUser.details.aiSuggestions.map((suggestion, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center p-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg border border-orange-500/30 text-sm"
                          >
                            <Target className="h-4 w-4 text-orange-400 mr-2 flex-shrink-0" />
                            {suggestion}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    {selectedUser.details.github && (
                      <motion.div whileHover={{ scale: 1.02 }} className="pt-4">
                        <Button
                          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold shadow-lg shadow-purple-500/25 backdrop-blur-sm"
                          as="a"
                          href={selectedUser.details.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Explore GitHub
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              className="glass hover-glow border-primary/50 bg-gradient-to-r from-transparent to-primary/10 text-primary font-semibold px-6 py-2 backdrop-blur-xl shadow-xl"
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Load More Rankings
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .perspective-1200 {
          perspective: 1200px;
        }
        .translate-z-20 {
          transform: translateZ(20px);
        }
        .translate-z-40 {
          transform: translateZ(40px);
        }
        .animate-glitch {
          animation: glitch 1.5s infinite;
        }
        @keyframes glitch {
          0%, 100% { transform: translate(0); border-color: rgba(139, 92, 246, 0.4); }
          10% { transform: translate(-2px, -2px); border-color: rgba(59, 130, 246, 0.6); }
          20% { transform: translate(2px, 2px); border-color: rgba(16, 185, 129, 0.4); }
          30% { transform: translate(-2px, 2px); border-color: rgba(139, 92, 246, 0.6); }
          40% { transform: translate(2px, -2px); border-color: rgba(59, 130, 246, 0.4); }
        }
        .neon-text {
          text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .hover-glow:hover {
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3);
        }
        .hover-lift:hover {
          transform: translateY(-10px) !important;
        }
      `}</style>
    </div>
  );
};

export default WallOfFame;