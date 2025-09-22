import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Search, 
  CheckCircle, 
  XCircle, 
  Clock,
  Zap,
  Award,
  Trophy,
  Code,
  Calendar,
  User,
  Hash,
  ExternalLink,
  Copy,
  Download,
  Eye,
  AlertTriangle,
  Sparkles,
  FileText,
  Link,
  QrCode
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const BlockchainVerification = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  const verificationMethods = [
    {
      id: 'hash',
      title: 'Certificate Hash',
      description: 'Verify using the unique certificate hash',
      icon: Hash,
      placeholder: '0x1a2b3c4d5e6f...'
    },
    {
      id: 'qr',
      title: 'QR Code',
      description: 'Scan the QR code from your certificate',
      icon: QrCode,
      placeholder: 'Scan QR Code'
    },
    {
      id: 'url',
      title: 'Certificate URL',
      description: 'Enter the certificate verification URL',
      icon: Link,
      placeholder: 'https://verify.porttrack.ai/...'
    }
  ];

  const [selectedMethod, setSelectedMethod] = useState('hash');

  const sampleVerifications = [
    {
      id: 1,
      certificateHash: '0x1a2b3c4d5e6f7890abcdef1234567890abcdef12',
      title: 'MIT Hackathon Winner 2024',
      recipient: 'Alex Johnson',
      issuer: 'MIT',
      issueDate: '2024-01-15',
      blockNumber: 18945672,
      transactionHash: '0xabcdef1234567890abcdef1234567890abcdef12',
      status: 'verified',
      type: 'hackathon',
      metadata: {
        event: 'MIT AI Innovation Challenge',
        placement: '1st Place',
        category: 'AI/ML',
        teamSize: 4
      }
    },
    {
      id: 2,
      certificateHash: '0x2b3c4d5e6f7890abcdef1234567890abcdef1234',
      title: 'Google Cloud Professional Certificate',
      recipient: 'Sarah Chen',
      issuer: 'Google Cloud',
      issueDate: '2024-01-10',
      blockNumber: 18943521,
      transactionHash: '0xbcdef1234567890abcdef1234567890abcdef123',
      status: 'verified',
      type: 'certification',
      metadata: {
        certification: 'Professional Data Engineer',
        validUntil: '2027-01-10',
        credentialId: 'GCP-PDE-2024-001'
      }
    },
    {
      id: 3,
      certificateHash: '0x3c4d5e6f7890abcdef1234567890abcdef123456',
      title: 'Open Source Contribution Award',
      recipient: 'Marcus Rodriguez',
      issuer: 'GitHub',
      issueDate: '2024-01-05',
      blockNumber: 18941234,
      transactionHash: '0xcdef1234567890abcdef1234567890abcdef1234',
      status: 'verified',
      type: 'achievement',
      metadata: {
        repository: 'tensorflow/tensorflow',
        contributions: 25,
        impact: 'High'
      }
    }
  ];

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    
    // Simulate API call
    setTimeout(() => {
      const result = sampleVerifications.find(v => 
        v.certificateHash.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.recipient.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      setVerificationResult(result || { status: 'not_found' });
      setIsSearching(false);
    }, 1500);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // Could add toast notification here
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      case 'pending':
        return <Clock className="h-6 w-6 text-yellow-500" />;
      case 'invalid':
        return <XCircle className="h-6 w-6 text-red-500" />;
      case 'not_found':
        return <AlertTriangle className="h-6 w-6 text-orange-500" />;
      default:
        return <Shield className="h-6 w-6 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'verified':
        return 'text-green-500 bg-green-500/20 border-green-500/30';
      case 'pending':
        return 'text-yellow-500 bg-yellow-500/20 border-yellow-500/30';
      case 'invalid':
        return 'text-red-500 bg-red-500/20 border-red-500/30';
      case 'not_found':
        return 'text-orange-500 bg-orange-500/20 border-orange-500/30';
      default:
        return 'text-gray-500 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'hackathon':
        return <Trophy className="h-5 w-5" />;
      case 'certification':
        return <Award className="h-5 w-5" />;
      case 'achievement':
        return <Code className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6 hover-glow">
            <Sparkles className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium">Blockchain Powered</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-space font-bold mb-6">
            <span className="neon-text">Verification</span> Center
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Verify the authenticity of achievements, certificates, and credentials 
            using blockchain technology. Every achievement is immutably recorded.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Verification Panel */}
          <div className="lg:col-span-2">
            {/* Verification Methods */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card rounded-xl p-6 mb-6"
            >
              <h2 className="text-xl font-space font-bold mb-4">Choose Verification Method</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {verificationMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`p-4 rounded-lg border transition-all duration-300 text-left ${
                        selectedMethod === method.id
                          ? 'border-primary bg-primary/10 shadow-lg'
                          : 'border-border hover:border-primary/50 glass'
                      }`}
                    >
                      <Icon className="h-6 w-6 text-primary mb-2" />
                      <h3 className="font-medium mb-1">{method.title}</h3>
                      <p className="text-xs text-muted-foreground">{method.description}</p>
                    </button>
                  );
                })}
              </div>

              {/* Search Input */}
              <div className="flex space-x-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder={verificationMethods.find(m => m.id === selectedMethod)?.placeholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 glass"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <Button 
                  onClick={handleSearch}
                  disabled={isSearching || !searchQuery.trim()}
                  className="gradient-purple-cyan hover-lift"
                >
                  {isSearching ? (
                    <Clock className="h-4 w-4 mr-2 animate-spin" />
                  ) : (
                    <Search className="h-4 w-4 mr-2" />
                  )}
                  Verify
                </Button>
              </div>
            </motion.div>

            {/* Verification Result */}
            {verificationResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="glass-card rounded-xl p-6 mb-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-space font-bold">Verification Result</h2>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(verificationResult.status)}
                    <Badge className={`${getStatusColor(verificationResult.status)} border`}>
                      {verificationResult.status === 'verified' ? 'Verified' :
                       verificationResult.status === 'pending' ? 'Pending' :
                       verificationResult.status === 'invalid' ? 'Invalid' : 'Not Found'}
                    </Badge>
                  </div>
                </div>

                {verificationResult.status === 'verified' ? (
                  <div className="space-y-6">
                    {/* Certificate Info */}
                    <div className="glass rounded-lg p-4 border border-green-500/20">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 p-3">
                          {getTypeIcon(verificationResult.type)}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold font-space mb-1">
                            {verificationResult.title}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Recipient:</span>
                              <span className="ml-2 font-medium">{verificationResult.recipient}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Issuer:</span>
                              <span className="ml-2 font-medium">{verificationResult.issuer}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Issue Date:</span>
                              <span className="ml-2 font-medium">{verificationResult.issueDate}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Block:</span>
                              <span className="ml-2 font-medium">#{verificationResult.blockNumber}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Blockchain Details */}
                    <div className="glass rounded-lg p-4">
                      <h4 className="font-semibold mb-3">Blockchain Details</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Certificate Hash:</span>
                          <div className="flex items-center space-x-2">
                            <code className="text-xs bg-muted/20 px-2 py-1 rounded">
                              {verificationResult.certificateHash.slice(0, 20)}...
                            </code>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(verificationResult.certificateHash)}
                            >
                              <Copy className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Transaction Hash:</span>
                          <div className="flex items-center space-x-2">
                            <code className="text-xs bg-muted/20 px-2 py-1 rounded">
                              {verificationResult.transactionHash.slice(0, 20)}...
                            </code>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(verificationResult.transactionHash)}
                            >
                              <Copy className="h-3 w-3" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <ExternalLink className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Metadata */}
                    {verificationResult.metadata && (
                      <div className="glass rounded-lg p-4">
                        <h4 className="font-semibold mb-3">Additional Details</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                          {Object.entries(verificationResult.metadata).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <span className="text-muted-foreground capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}:
                              </span>
                              <span className="font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex space-x-3">
                      <Button variant="outline" className="glass hover-glow">
                        <Download className="h-4 w-4 mr-2" />
                        Download Certificate
                      </Button>
                      <Button variant="outline" className="glass hover-glow">
                        <Eye className="h-4 w-4 mr-2" />
                        View on Explorer
                      </Button>
                      <Button variant="outline" className="glass hover-glow">
                        <QrCode className="h-4 w-4 mr-2" />
                        Generate QR
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <AlertTriangle className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Certificate Not Found</h3>
                    <p className="text-muted-foreground">
                      The certificate hash or identifier you entered could not be found 
                      in our blockchain records.
                    </p>
                  </div>
                )}
              </motion.div>
            )}

            {/* Recent Verifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-xl p-6"
            >
              <h2 className="text-xl font-space font-bold mb-4">Recent Verifications</h2>
              
              <div className="space-y-4">
                {sampleVerifications.slice(0, 3).map((verification, index) => (
                  <div
                    key={verification.id}
                    className="flex items-center justify-between p-4 glass rounded-lg hover-lift cursor-pointer"
                    onClick={() => setVerificationResult(verification)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-accent p-2">
                        {getTypeIcon(verification.type)}
                      </div>
                      <div>
                        <h4 className="font-medium">{verification.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {verification.recipient} • {verification.issuer}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(verification.status)}
                      <span className="text-sm text-muted-foreground">
                        {verification.issueDate}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* How It Works */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card rounded-xl p-6 mb-6"
            >
              <h3 className="text-lg font-space font-bold mb-4">How It Works</h3>
              
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: 'Immutable Recording',
                    description: 'Every achievement is recorded on the blockchain with a unique hash.'
                  },
                  {
                    step: 2,
                    title: 'Cryptographic Proof',
                    description: 'Digital signatures ensure authenticity and prevent tampering.'
                  },
                  {
                    step: 3,
                    title: 'Instant Verification',
                    description: 'Anyone can verify credentials using the certificate hash.'
                  }
                ].map((item) => (
                  <div key={item.step} className="flex space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="text-lg font-space font-bold mb-4">Verification Stats</h3>
              
              <div className="space-y-4">
                {[
                  { label: 'Total Certificates', value: '12,847', icon: FileText },
                  { label: 'Verified Today', value: '234', icon: CheckCircle },
                  { label: 'Success Rate', value: '99.8%', icon: Shield },
                  { label: 'Avg. Verify Time', value: '0.3s', icon: Zap }
                ].map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{stat.label}</span>
                      </div>
                      <span className="font-semibold">{stat.value}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainVerification;

