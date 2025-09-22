import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Hackathons = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All', icon: Globe },
    { id: 'web', label: 'Web Dev', icon: Code },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
    { id: 'ai', label: 'AI/ML', icon: Brain },
    { id: 'design', label: 'Design', icon: Palette },
    { id: 'blockchain', label: 'Blockchain', icon: Shield }
  ];

  const hackathons = [
    {
      id: 1,
      title: 'MIT AI Innovation Challenge 2024',
      description: 'Build the next generation of AI-powered applications that solve real-world problems.',
      organizer: 'MIT',
      date: '2024-02-15',
      endDate: '2024-02-17',
      location: 'Cambridge, MA',
      type: 'In-Person',
      category: 'ai',
      participants: 1247,
      maxParticipants: 1500,
      prize: '$50,000',
      difficulty: 'Advanced',
      status: 'upcoming',
      image: '/api/placeholder/400/200',
      tags: ['AI', 'Machine Learning', 'Innovation'],
      sponsors: ['Google', 'Microsoft', 'OpenAI'],
      nftBadge: {
        name: 'AI Pioneer',
        rarity: 'Legendary',
        design: 'holographic'
      }
    },
    {
      id: 2,
      title: 'Stanford Design Thinking Hackathon',
      description: 'Create user-centered solutions using design thinking methodology.',
      organizer: 'Stanford University',
      date: '2024-02-22',
      endDate: '2024-02-24',
      location: 'Palo Alto, CA',
      type: 'Hybrid',
      category: 'design',
      participants: 892,
      maxParticipants: 1000,
      prize: '$25,000',
      difficulty: 'Intermediate',
      status: 'upcoming',
      image: '/api/placeholder/400/200',
      tags: ['Design', 'UX/UI', 'Innovation'],
      sponsors: ['Adobe', 'Figma', 'IDEO'],
      nftBadge: {
        name: 'Design Master',
        rarity: 'Epic',
        design: 'gradient'
      }
    },
    {
      id: 3,
      title: 'Berkeley Blockchain Summit',
      description: 'Develop decentralized applications and explore Web3 technologies.',
      organizer: 'UC Berkeley',
      date: '2024-01-20',
      endDate: '2024-01-22',
      location: 'Berkeley, CA',
      type: 'In-Person',
      category: 'blockchain',
      participants: 567,
      maxParticipants: 800,
      prize: '$30,000',
      difficulty: 'Advanced',
      status: 'completed',
      image: '/api/placeholder/400/200',
      tags: ['Blockchain', 'Web3', 'DeFi'],
      sponsors: ['Ethereum', 'Coinbase', 'Polygon'],
      nftBadge: {
        name: 'Blockchain Builder',
        rarity: 'Rare',
        design: 'animated'
      }
    }
  ];

  const participants = [
    {
      id: 1,
      name: 'Alex Johnson',
      avatar: '👨‍💻',
      university: 'MIT',
      skills: ['React', 'Python', 'AI'],
      achievements: 15,
      hackathonsWon: 3,
      verified: true,
      team: 'Team Alpha'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      avatar: '👩‍🎨',
      university: 'Stanford',
      skills: ['Design', 'Figma', 'React'],
      achievements: 12,
      hackathonsWon: 2,
      verified: true,
      team: 'Design Masters'
    },
    {
      id: 3,
      name: 'Marcus Rodriguez',
      avatar: '👨‍🔬',
      university: 'UC Berkeley',
      skills: ['Python', 'ML', 'Data'],
      achievements: 8,
      hackathonsWon: 1,
      verified: true,
      team: 'Data Wizards'
    }
  ];

  const nftCertificates = [
    {
      id: 1,
      name: 'Hackathon Champion',
      event: 'MIT AI Challenge 2024',
      rarity: 'Legendary',
      owner: 'Alex Johnson',
      mintDate: '2024-01-22',
      verified: true,
      design: 'holographic'
    },
    {
      id: 2,
      name: 'Innovation Award',
      event: 'Stanford Design Hackathon',
      rarity: 'Epic',
      owner: 'Sarah Chen',
      mintDate: '2024-01-15',
      verified: true,
      design: 'gradient'
    },
    {
      id: 3,
      name: 'Best Technical Implementation',
      event: 'Berkeley Blockchain Summit',
      rarity: 'Rare',
      owner: 'Marcus Rodriguez',
      mintDate: '2024-01-10',
      verified: true,
      design: 'animated'
    }
  ];

  const tabs = [
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'ongoing', label: 'Ongoing' },
    { id: 'completed', label: 'Completed' }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Intermediate':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Advanced':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'Legendary':
        return 'from-yellow-400 via-orange-500 to-red-500';
      case 'Epic':
        return 'from-purple-400 via-pink-500 to-red-500';
      case 'Rare':
        return 'from-blue-400 via-cyan-500 to-teal-500';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

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
            <Button className="gradient-purple-cyan hover-lift">
              <Plus className="h-4 w-4 mr-2" />
              Host Hackathon
            </Button>
            <Button variant="outline" className="glass hover-glow">
              <Calendar className="h-4 w-4 mr-2" />
              View Calendar
            </Button>
          </div>
        </motion.div>

        {/* Tabs and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col lg:flex-row justify-between items-center mb-8 space-y-4 lg:space-y-0"
        >
          {/* Tabs */}
          <div className="flex space-x-1 glass rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search and Category Filter */}
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
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground'
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

        {/* Hackathons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12"
        >
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-xl overflow-hidden hover-lift group"
            >
              {/* Event Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
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
                    <span>{hackathon.date} - {hackathon.endDate}</span>
                  </div>
                </div>
              </div>

              {/* Event Details */}
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
                      <span>{hackathon.participants}/{hackathon.maxParticipants}</span>
                    </div>
                    <div className="flex items-center text-primary">
                      <Trophy className="h-4 w-4 mr-1" />
                      <span className="font-semibold">{hackathon.prize}</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {hackathon.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary/20 text-primary rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* NFT Badge Preview */}
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

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button className="flex-1 gradient-purple-cyan hover-lift">
                    {hackathon.status === 'upcoming' ? 'Register' : 'View Results'}
                  </Button>
                  <Button variant="outline" className="glass hover-glow">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Participants Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-space font-bold mb-6">Featured Participants</h2>
          
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
                  {/* Front */}
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

                  {/* Back */}
                  <div className="flip-card-back absolute inset-0 glass-card rounded-xl p-6">
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <h4 className="font-semibold mb-3">Skills</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {participant.skills.map((skill) => (
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
                          <div className="text-lg font-bold">{participant.achievements}</div>
                          <div className="text-xs text-muted-foreground">Achievements</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold">{participant.hackathonsWon}</div>
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
                  <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-r ${getRarityColor(certificate.rarity)} p-4 mb-3`}>
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="font-semibold font-space mb-1">{certificate.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{certificate.event}</p>
                  
                  <Badge className={`bg-gradient-to-r ${getRarityColor(certificate.rarity)} text-white border-0`}>
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

