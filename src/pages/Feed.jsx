import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Trophy, 
  Award, 
  Code, 
  Calendar,
  MapPin,
  Eye,
  Bookmark,
  MoreHorizontal,
  Zap,
  Star,
  TrendingUp,
  Users,
  Filter,
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Feed = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [likedPosts, setLikedPosts] = useState(new Set());

  const filters = [
    { id: 'all', label: 'All Posts', icon: TrendingUp },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'hackathons', label: 'Hackathons', icon: Calendar },
    { id: 'following', label: 'Following', icon: Users }
  ];

  const posts = [
    {
      id: 1,
      type: 'achievement',
      user: {
        name: 'Alex Johnson',
        username: '@alexj',
        avatar: '👨‍💻',
        university: 'MIT',
        verified: true
      },
      content: {
        title: 'Won First Place at MIT Hackathon 2024! 🏆',
        description: 'Just finished an incredible 48-hour hackathon building an AI-powered portfolio generator. Our team created a platform that helps students showcase their skills with personalized design suggestions.',
        image: null,
        achievement: {
          title: 'Hackathon Winner',
          issuer: 'MIT',
          date: '2024-01-15',
          verified: true
        }
      },
      stats: {
        likes: 234,
        comments: 45,
        shares: 12,
        views: 1200
      },
      timestamp: '2 hours ago',
      tags: ['hackathon', 'ai', 'react', 'nodejs']
    },
    {
      id: 2,
      type: 'project',
      user: {
        name: 'Sarah Chen',
        username: '@sarahc',
        avatar: '👩‍🎨',
        university: 'Stanford',
        verified: true
      },
      content: {
        title: 'Launched my new portfolio website! ✨',
        description: 'After months of work, I\'m excited to share my new portfolio showcasing my UI/UX design projects. Built with React and Framer Motion for smooth animations.',
        image: '/api/placeholder/600/300',
        project: {
          title: 'Personal Portfolio',
          tech: ['React', 'Framer Motion', 'Tailwind CSS'],
          github: 'https://github.com/sarahc/portfolio',
          live: 'https://sarahchen.design'
        }
      },
      stats: {
        likes: 189,
        comments: 32,
        shares: 8,
        views: 890
      },
      timestamp: '5 hours ago',
      tags: ['portfolio', 'design', 'react', 'animation']
    },
    {
      id: 3,
      type: 'achievement',
      user: {
        name: 'Marcus Rodriguez',
        username: '@marcusr',
        avatar: '👨‍🔬',
        university: 'UC Berkeley',
        verified: true
      },
      content: {
        title: 'Completed Google Cloud Professional Certificate! ☁️',
        description: 'Just earned my Google Cloud Professional Data Engineer certification. Excited to apply these skills to my upcoming machine learning projects.',
        image: null,
        achievement: {
          title: 'Google Cloud Professional Data Engineer',
          issuer: 'Google Cloud',
          date: '2024-01-14',
          verified: true
        }
      },
      stats: {
        likes: 156,
        comments: 28,
        shares: 15,
        views: 670
      },
      timestamp: '1 day ago',
      tags: ['certification', 'cloud', 'data', 'google']
    },
    {
      id: 4,
      type: 'project',
      user: {
        name: 'Emily Watson',
        username: '@emilyw',
        avatar: '👩‍💻',
        university: 'Carnegie Mellon',
        verified: true
      },
      content: {
        title: 'Open sourced my React Native component library! 📱',
        description: 'Created a comprehensive UI component library for React Native with 50+ components, TypeScript support, and extensive documentation.',
        image: '/api/placeholder/600/300',
        project: {
          title: 'RN-UI Components',
          tech: ['React Native', 'TypeScript', 'Storybook'],
          github: 'https://github.com/emilyw/rn-ui',
          npm: 'https://npmjs.com/package/rn-ui-components'
        }
      },
      stats: {
        likes: 298,
        comments: 67,
        shares: 34,
        views: 1500
      },
      timestamp: '2 days ago',
      tags: ['opensource', 'react-native', 'typescript', 'components']
    }
  ];

  const toggleLike = (postId) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const filteredPosts = activeFilter === 'all' 
    ? posts 
    : posts.filter(post => post.type === activeFilter || post.tags.includes(activeFilter));

  return (
    <div className="min-h-screen pt-20 pb-10">
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
            
            <Button className="gradient-purple-cyan hover-lift mt-4 md:mt-0">
              <Plus className="h-4 w-4 mr-2" />
              Create Post
            </Button>
          </div>

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
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`}
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
                  <div className="text-3xl">{post.user.avatar}</div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold">{post.user.name}</h3>
                      {post.user.verified && (
                        <Zap className="h-4 w-4 text-primary" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {post.user.username} • {post.user.university}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <span className="text-sm">{post.timestamp}</span>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Post Content */}
              <div className="mb-4">
                <h2 className="text-lg font-semibold font-space mb-2">
                  {post.content.title}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {post.content.description}
                </p>

                {/* Achievement Badge */}
                {post.content.achievement && (
                  <div className="glass rounded-lg p-4 mb-4 border border-primary/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 p-3">
                        <Trophy className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold">{post.content.achievement.title}</h4>
                          {post.content.achievement.verified && (
                            <Zap className="h-4 w-4 text-green-500" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Issued by {post.content.achievement.issuer} • {post.content.achievement.date}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Project Card */}
                {post.content.project && (
                  <div className="glass rounded-lg p-4 mb-4 border border-primary/20">
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 p-3">
                        <Code className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2">{post.content.project.title}</h4>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.content.project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-primary/20 text-primary rounded text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex space-x-4 text-sm">
                          {post.content.project.github && (
                            <a href="#" className="text-primary hover:text-accent transition-colors">
                              GitHub →
                            </a>
                          )}
                          {post.content.project.live && (
                            <a href="#" className="text-primary hover:text-accent transition-colors">
                              Live Demo →
                            </a>
                          )}
                          {post.content.project.npm && (
                            <a href="#" className="text-primary hover:text-accent transition-colors">
                              NPM →
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-muted/20 text-muted-foreground rounded text-xs hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Post Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center space-x-6">
                  <button
                    onClick={() => toggleLike(post.id)}
                    className={`flex items-center space-x-2 transition-colors ${
                      likedPosts.has(post.id)
                        ? 'text-red-500'
                        : 'text-muted-foreground hover:text-red-500'
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                    <span className="text-sm">{post.stats.likes}</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                    <MessageCircle className="h-5 w-5" />
                    <span className="text-sm">{post.stats.comments}</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                    <Share2 className="h-5 w-5" />
                    <span className="text-sm">{post.stats.shares}</span>
                  </button>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Eye className="h-4 w-4" />
                    <span className="text-sm">{post.stats.views}</span>
                  </div>
                  
                  <Button variant="ghost" size="sm">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8"
        >
          <Button variant="outline" className="glass hover-glow">
            Load More Posts
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Feed;

