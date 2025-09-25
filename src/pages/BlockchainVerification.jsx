// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Shield, 
//   Search, 
//   CheckCircle, 
//   XCircle, 
//   Clock,
//   Zap,
//   Award,
//   Trophy,
//   Code,
//   Calendar,
//   User,
//   Hash,
//   ExternalLink,
//   Copy,
//   Download,
//   Eye,
//   AlertTriangle,
//   Sparkles,
//   FileText,
//   Link,
//   QrCode
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Badge } from '@/components/ui/badge';

// const BlockchainVerification = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [verificationResult, setVerificationResult] = useState(null);
//   const [isSearching, setIsSearching] = useState(false);

//   const verificationMethods = [
//     {
//       id: 'hash',
//       title: 'Certificate Hash',
//       description: 'Verify using the unique certificate hash',
//       icon: Hash,
//       placeholder: '0x1a2b3c4d5e6f...'
//     },
//     {
//       id: 'qr',
//       title: 'QR Code',
//       description: 'Scan the QR code from your certificate',
//       icon: QrCode,
//       placeholder: 'Scan QR Code'
//     },
//     {
//       id: 'url',
//       title: 'Certificate URL',
//       description: 'Enter the certificate verification URL',
//       icon: Link,
//       placeholder: 'https://verify.porttrack.ai/...'
//     }
//   ];

//   const [selectedMethod, setSelectedMethod] = useState('hash');

//   const sampleVerifications = [
//     {
//       id: 1,
//       certificateHash: '0x1a2b3c4d5e6f7890abcdef1234567890abcdef12',
//       title: 'MIT Hackathon Winner 2024',
//       recipient: 'Alex Johnson',
//       issuer: 'MIT',
//       issueDate: '2024-01-15',
//       blockNumber: 18945672,
//       transactionHash: '0xabcdef1234567890abcdef1234567890abcdef12',
//       status: 'verified',
//       type: 'hackathon',
//       metadata: {
//         event: 'MIT AI Innovation Challenge',
//         placement: '1st Place',
//         category: 'AI/ML',
//         teamSize: 4
//       }
//     },
//     {
//       id: 2,
//       certificateHash: '0x2b3c4d5e6f7890abcdef1234567890abcdef1234',
//       title: 'Google Cloud Professional Certificate',
//       recipient: 'Sarah Chen',
//       issuer: 'Google Cloud',
//       issueDate: '2024-01-10',
//       blockNumber: 18943521,
//       transactionHash: '0xbcdef1234567890abcdef1234567890abcdef123',
//       status: 'verified',
//       type: 'certification',
//       metadata: {
//         certification: 'Professional Data Engineer',
//         validUntil: '2027-01-10',
//         credentialId: 'GCP-PDE-2024-001'
//       }
//     },
//     {
//       id: 3,
//       certificateHash: '0x3c4d5e6f7890abcdef1234567890abcdef123456',
//       title: 'Open Source Contribution Award',
//       recipient: 'Marcus Rodriguez',
//       issuer: 'GitHub',
//       issueDate: '2024-01-05',
//       blockNumber: 18941234,
//       transactionHash: '0xcdef1234567890abcdef1234567890abcdef1234',
//       status: 'verified',
//       type: 'achievement',
//       metadata: {
//         repository: 'tensorflow/tensorflow',
//         contributions: 25,
//         impact: 'High'
//       }
//     }
//   ];

//   const handleSearch = async () => {
//     if (!searchQuery.trim()) return;
    
//     setIsSearching(true);
    
//     // Simulate API call
//     setTimeout(() => {
//       const result = sampleVerifications.find(v => 
//         v.certificateHash.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         v.recipient.toLowerCase().includes(searchQuery.toLowerCase())
//       );
      
//       setVerificationResult(result || { status: 'not_found' });
//       setIsSearching(false);
//     }, 1500);
//   };

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//     // Could add toast notification here
//   };

//   const getStatusIcon = (status) => {
//     switch (status) {
//       case 'verified':
//         return <CheckCircle className="h-6 w-6 text-green-500" />;
//       case 'pending':
//         return <Clock className="h-6 w-6 text-yellow-500" />;
//       case 'invalid':
//         return <XCircle className="h-6 w-6 text-red-500" />;
//       case 'not_found':
//         return <AlertTriangle className="h-6 w-6 text-orange-500" />;
//       default:
//         return <Shield className="h-6 w-6 text-gray-500" />;
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'verified':
//         return 'text-green-500 bg-green-500/20 border-green-500/30';
//       case 'pending':
//         return 'text-yellow-500 bg-yellow-500/20 border-yellow-500/30';
//       case 'invalid':
//         return 'text-red-500 bg-red-500/20 border-red-500/30';
//       case 'not_found':
//         return 'text-orange-500 bg-orange-500/20 border-orange-500/30';
//       default:
//         return 'text-gray-500 bg-gray-500/20 border-gray-500/30';
//     }
//   };

//   const getTypeIcon = (type) => {
//     switch (type) {
//       case 'hackathon':
//         return <Trophy className="h-5 w-5" />;
//       case 'certification':
//         return <Award className="h-5 w-5" />;
//       case 'achievement':
//         return <Code className="h-5 w-5" />;
//       default:
//         return <FileText className="h-5 w-5" />;
//     }
//   };

//   return (
//     <div className="min-h-screen pt-20 pb-10">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6 hover-glow">
//             <Sparkles className="h-4 w-4 text-primary mr-2" />
//             <span className="text-sm font-medium">Blockchain Powered</span>
//           </div>
          
//           <h1 className="text-4xl md:text-6xl font-space font-bold mb-6">
//             <span className="neon-text">Verification</span> Center
//           </h1>
          
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Verify the authenticity of achievements, certificates, and credentials 
//             using blockchain technology. Every achievement is immutably recorded.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Verification Panel */}
//           <div className="lg:col-span-2">
//             {/* Verification Methods */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="glass-card rounded-xl p-6 mb-6"
//             >
//               <h2 className="text-xl font-space font-bold mb-4">Choose Verification Method</h2>
              
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//                 {verificationMethods.map((method) => {
//                   const Icon = method.icon;
//                   return (
//                     <button
//                       key={method.id}
//                       onClick={() => setSelectedMethod(method.id)}
//                       className={`p-4 rounded-lg border transition-all duration-300 text-left ${
//                         selectedMethod === method.id
//                           ? 'border-primary bg-primary/10 shadow-lg'
//                           : 'border-border hover:border-primary/50 glass'
//                       }`}
//                     >
//                       <Icon className="h-6 w-6 text-primary mb-2" />
//                       <h3 className="font-medium mb-1">{method.title}</h3>
//                       <p className="text-xs text-muted-foreground">{method.description}</p>
//                     </button>
//                   );
//                 })}
//               </div>

//               {/* Search Input */}
//               <div className="flex space-x-3">
//                 <div className="flex-1 relative">
//                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//                   <Input
//                     placeholder={verificationMethods.find(m => m.id === selectedMethod)?.placeholder}
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="pl-10 glass"
//                     onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
//                   />
//                 </div>
//                 <Button 
//                   onClick={handleSearch}
//                   disabled={isSearching || !searchQuery.trim()}
//                   className="gradient-purple-cyan hover-lift"
//                 >
//                   {isSearching ? (
//                     <Clock className="h-4 w-4 mr-2 animate-spin" />
//                   ) : (
//                     <Search className="h-4 w-4 mr-2" />
//                   )}
//                   Verify
//                 </Button>
//               </div>
//             </motion.div>

//             {/* Verification Result */}
//             {verificationResult && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="glass-card rounded-xl p-6 mb-6"
//               >
//                 <div className="flex items-center justify-between mb-6">
//                   <h2 className="text-xl font-space font-bold">Verification Result</h2>
//                   <div className="flex items-center space-x-2">
//                     {getStatusIcon(verificationResult.status)}
//                     <Badge className={`${getStatusColor(verificationResult.status)} border`}>
//                       {verificationResult.status === 'verified' ? 'Verified' :
//                        verificationResult.status === 'pending' ? 'Pending' :
//                        verificationResult.status === 'invalid' ? 'Invalid' : 'Not Found'}
//                     </Badge>
//                   </div>
//                 </div>

//                 {verificationResult.status === 'verified' ? (
//                   <div className="space-y-6">
//                     {/* Certificate Info */}
//                     <div className="glass rounded-lg p-4 border border-green-500/20">
//                       <div className="flex items-start space-x-4">
//                         <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 p-3">
//                           {getTypeIcon(verificationResult.type)}
//                         </div>
//                         <div className="flex-1">
//                           <h3 className="text-lg font-semibold font-space mb-1">
//                             {verificationResult.title}
//                           </h3>
//                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
//                             <div>
//                               <span className="text-muted-foreground">Recipient:</span>
//                               <span className="ml-2 font-medium">{verificationResult.recipient}</span>
//                             </div>
//                             <div>
//                               <span className="text-muted-foreground">Issuer:</span>
//                               <span className="ml-2 font-medium">{verificationResult.issuer}</span>
//                             </div>
//                             <div>
//                               <span className="text-muted-foreground">Issue Date:</span>
//                               <span className="ml-2 font-medium">{verificationResult.issueDate}</span>
//                             </div>
//                             <div>
//                               <span className="text-muted-foreground">Block:</span>
//                               <span className="ml-2 font-medium">#{verificationResult.blockNumber}</span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Blockchain Details */}
//                     <div className="glass rounded-lg p-4">
//                       <h4 className="font-semibold mb-3">Blockchain Details</h4>
//                       <div className="space-y-3">
//                         <div className="flex items-center justify-between">
//                           <span className="text-muted-foreground">Certificate Hash:</span>
//                           <div className="flex items-center space-x-2">
//                             <code className="text-xs bg-muted/20 px-2 py-1 rounded">
//                               {verificationResult.certificateHash.slice(0, 20)}...
//                             </code>
//                             <Button
//                               variant="ghost"
//                               size="sm"
//                               onClick={() => copyToClipboard(verificationResult.certificateHash)}
//                             >
//                               <Copy className="h-3 w-3" />
//                             </Button>
//                           </div>
//                         </div>
//                         <div className="flex items-center justify-between">
//                           <span className="text-muted-foreground">Transaction Hash:</span>
//                           <div className="flex items-center space-x-2">
//                             <code className="text-xs bg-muted/20 px-2 py-1 rounded">
//                               {verificationResult.transactionHash.slice(0, 20)}...
//                             </code>
//                             <Button
//                               variant="ghost"
//                               size="sm"
//                               onClick={() => copyToClipboard(verificationResult.transactionHash)}
//                             >
//                               <Copy className="h-3 w-3" />
//                             </Button>
//                             <Button variant="ghost" size="sm">
//                               <ExternalLink className="h-3 w-3" />
//                             </Button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Metadata */}
//                     {verificationResult.metadata && (
//                       <div className="glass rounded-lg p-4">
//                         <h4 className="font-semibold mb-3">Additional Details</h4>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
//                           {Object.entries(verificationResult.metadata).map(([key, value]) => (
//                             <div key={key} className="flex justify-between">
//                               <span className="text-muted-foreground capitalize">
//                                 {key.replace(/([A-Z])/g, ' $1').trim()}:
//                               </span>
//                               <span className="font-medium">{value}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Actions */}
//                     <div className="flex space-x-3">
//                       <Button variant="outline" className="glass hover-glow">
//                         <Download className="h-4 w-4 mr-2" />
//                         Download Certificate
//                       </Button>
//                       <Button variant="outline" className="glass hover-glow">
//                         <Eye className="h-4 w-4 mr-2" />
//                         View on Explorer
//                       </Button>
//                       <Button variant="outline" className="glass hover-glow">
//                         <QrCode className="h-4 w-4 mr-2" />
//                         Generate QR
//                       </Button>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="text-center py-8">
//                     <AlertTriangle className="h-12 w-12 text-orange-500 mx-auto mb-4" />
//                     <h3 className="text-lg font-semibold mb-2">Certificate Not Found</h3>
//                     <p className="text-muted-foreground">
//                       The certificate hash or identifier you entered could not be found 
//                       in our blockchain records.
//                     </p>
//                   </div>
//                 )}
//               </motion.div>
//             )}

//             {/* Recent Verifications */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="glass-card rounded-xl p-6"
//             >
//               <h2 className="text-xl font-space font-bold mb-4">Recent Verifications</h2>
              
//               <div className="space-y-4">
//                 {sampleVerifications.slice(0, 3).map((verification, index) => (
//                   <div
//                     key={verification.id}
//                     className="flex items-center justify-between p-4 glass rounded-lg hover-lift cursor-pointer"
//                     onClick={() => setVerificationResult(verification)}
//                   >
//                     <div className="flex items-center space-x-3">
//                       <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-accent p-2">
//                         {getTypeIcon(verification.type)}
//                       </div>
//                       <div>
//                         <h4 className="font-medium">{verification.title}</h4>
//                         <p className="text-sm text-muted-foreground">
//                           {verification.recipient} • {verification.issuer}
//                         </p>
//                       </div>
//                     </div>
                    
//                     <div className="flex items-center space-x-2">
//                       {getStatusIcon(verification.status)}
//                       <span className="text-sm text-muted-foreground">
//                         {verification.issueDate}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>

//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             {/* How It Works */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="glass-card rounded-xl p-6 mb-6"
//             >
//               <h3 className="text-lg font-space font-bold mb-4">How It Works</h3>
              
//               <div className="space-y-4">
//                 {[
//                   {
//                     step: 1,
//                     title: 'Immutable Recording',
//                     description: 'Every achievement is recorded on the blockchain with a unique hash.'
//                   },
//                   {
//                     step: 2,
//                     title: 'Cryptographic Proof',
//                     description: 'Digital signatures ensure authenticity and prevent tampering.'
//                   },
//                   {
//                     step: 3,
//                     title: 'Instant Verification',
//                     description: 'Anyone can verify credentials using the certificate hash.'
//                   }
//                 ].map((item) => (
//                   <div key={item.step} className="flex space-x-3">
//                     <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">
//                       {item.step}
//                     </div>
//                     <div>
//                       <h4 className="font-medium mb-1">{item.title}</h4>
//                       <p className="text-sm text-muted-foreground">{item.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Stats */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="glass-card rounded-xl p-6"
//             >
//               <h3 className="text-lg font-space font-bold mb-4">Verification Stats</h3>
              
//               <div className="space-y-4">
//                 {[
//                   { label: 'Total Certificates', value: '12,847', icon: FileText },
//                   { label: 'Verified Today', value: '234', icon: CheckCircle },
//                   { label: 'Success Rate', value: '99.8%', icon: Shield },
//                   { label: 'Avg. Verify Time', value: '0.3s', icon: Zap }
//                 ].map((stat) => {
//                   const Icon = stat.icon;
//                   return (
//                     <div key={stat.label} className="flex items-center justify-between">
//                       <div className="flex items-center space-x-2">
//                         <Icon className="h-4 w-4 text-primary" />
//                         <span className="text-sm text-muted-foreground">{stat.label}</span>
//                       </div>
//                       <span className="font-semibold">{stat.value}</span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlockchainVerification;

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   Shield,
//   Search,
//   CheckCircle,
//   XCircle,
//   Clock,
//   Zap,
//   Award,
//   Trophy,
//   Code,
//   FileText,
//   Link,
//   QrCode,
//   Upload,
//   Copy,
//   ExternalLink,
//   AlertTriangle,
//   Sparkles,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Badge } from "@/components/ui/badge";
// import { ethers } from "ethers";
// import pinataSDK from "@pinata/sdk";
// import { ref, set, get, onValue } from "firebase/database";
// import { db, auth } from "../firebase";

// // Initialize Pinata
// const pinata = new pinataSDK({ pinataJWTKey: import.meta.env.VITE_PINATA_JWT });


// // Contract details
// const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
// const contractABI = [[
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "to",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "tokenId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "approve",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "to",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "tokenURI",
// 				"type": "string"
// 			}
// 		],
// 		"name": "mintCertificate",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "renounceOwnership",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "from",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "to",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "tokenId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "safeTransferFrom",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "from",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "to",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "tokenId",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "bytes",
// 				"name": "data",
// 				"type": "bytes"
// 			}
// 		],
// 		"name": "safeTransferFrom",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "operator",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "bool",
// 				"name": "approved",
// 				"type": "bool"
// 			}
// 		],
// 		"name": "setApprovalForAll",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "from",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "to",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "tokenId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "transferFrom",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "newOwner",
// 				"type": "address"
// 			}
// 		],
// 		"name": "transferOwnership",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "constructor"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "sender",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "tokenId",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "owner",
// 				"type": "address"
// 			}
// 		],
// 		"name": "ERC721IncorrectOwner",
// 		"type": "error"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "operator",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "tokenId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "ERC721InsufficientApproval",
// 		"type": "error"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "approver",
// 				"type": "address"
// 			}
// 		],
// 		"name": "ERC721InvalidApprover",
// 		"type": "error"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "operator",
// 				"type": "address"
// 			}
// 		],
// 		"name": "ERC721InvalidOperator",
// 		"type": "error"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "owner",
// 				"type": "address"
// 			}
// 		],
// 		"name": "ERC721InvalidOwner",
// 		"type": "error"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "receiver",
// 				"type": "address"
// 			}
// 		],
// 		"name": "ERC721InvalidReceiver",
// 		"type": "error"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "sender",
// 				"type": "address"
// 			}
// 		],
// 		"name": "ERC721InvalidSender",
// 		"type": "error"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "tokenId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "ERC721NonexistentToken",
// 		"type": "error"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "owner",
// 				"type": "address"
// 			}
// 		],
// 		"name": "OwnableInvalidOwner",
// 		"type": "error"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "account",
// 				"type": "address"
// 			}
// 		],
// 		"name": "OwnableUnauthorizedAccount",
// 		"type": "error"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "owner",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "approved",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "uint256",
// 				"name": "tokenId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "Approval",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "owner",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "operator",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "bool",
// 				"name": "approved",
// 				"type": "bool"
// 			}
// 		],
// 		"name": "ApprovalForAll",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "_fromTokenId",
// 				"type": "uint256"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "_toTokenId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "BatchMetadataUpdate",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "_tokenId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "MetadataUpdate",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "previousOwner",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "newOwner",
// 				"type": "address"
// 			}
// 		],
// 		"name": "OwnershipTransferred",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "from",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "to",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "uint256",
// 				"name": "tokenId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "Transfer",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "owner",
// 				"type": "address"
// 			}
// 		],
// 		"name": "balanceOf",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "tokenId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "getApproved",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "tokenId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "getCertificateOwner",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "owner",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "operator",
// 				"type": "address"
// 			}
// 		],
// 		"name": "isApprovedForAll",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "name",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "nextTokenId",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "owner",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "tokenId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "ownerOf",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "bytes4",
// 				"name": "interfaceId",
// 				"type": "bytes4"
// 			}
// 		],
// 		"name": "supportsInterface",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "symbol",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "tokenId",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "tokenURI",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ]
// ];

// const BlockchainVerification = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [verificationResult, setVerificationResult] = useState(null);
//   const [isSearching, setIsSearching] = useState(false);
//   const [provider, setProvider] = useState(null);
//   const [signer, setSigner] = useState(null);
//   const [contract, setContract] = useState(null);
//   const [walletAddress, setWalletAddress] = useState(null);
//   const [certificateFile, setCertificateFile] = useState(null);
//   const [uploadStatus, setUploadStatus] = useState(null);
//   const [userId, setUserId] = useState(null);
//   const [recentCertificates, setRecentCertificates] = useState([]);

//   const verificationMethods = [
//     {
//       id: "hash",
//       title: "Certificate Hash",
//       description: "Verify using the unique certificate hash or token ID",
//       icon: FileText,
//       placeholder: "0x1a2b3c4d5e6f... or Token ID",
//     },
//     {
//       id: "qr",
//       title: "QR Code",
//       description: "Scan the QR code from your certificate",
//       icon: QrCode,
//       placeholder: "Scan QR Code",
//     },
//     {
//       id: "url",
//       title: "Certificate URL",
//       description: "Enter the certificate verification URL",
//       icon: Link,
//       placeholder: "https://verify.porttrack.ai/...",
//     },
//   ];
//   const [selectedMethod, setSelectedMethod] = useState("hash");

//   // Initialize ethers provider and Firebase auth
//   useEffect(() => {
//     if (window.ethereum) {
//       const ethProvider = new ethers.BrowserProvider(window.ethereum, {
//         chainId: 11155111, // Sepolia
//         name: "sepolia",
//         provider: { alchemy: import.meta.env.VITE_ALCHEMY_API_KEY },
//       });
//       setProvider(ethProvider);
//       connectWallet();
//     } else {
//       console.error("MetaMask not detected. Please install MetaMask.");
//     }

//     // Monitor Firebase auth state
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         setUserId(user.uid);
//       } else {
//         setUserId(null);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   // Fetch recent certificates for the user
//   useEffect(() => {
//     if (!userId) return;
//     const certificatesRef = ref(db, `users/${userId}/certificates`);
//     const unsubscribe = onValue(
//       certificatesRef,
//       (snapshot) => {
//         const data = snapshot.val();
//         if (data) {
//           const certArray = Object.values(data).slice(0, 3); // Limit to 3 for sidebar
//           setRecentCertificates(certArray);
//         } else {
//           setRecentCertificates([]);
//         }
//       },
//       (error) => {
//         console.error("Error fetching certificates:", error);
//       }
//     );
//     return () => unsubscribe();
//   }, [userId]);

//   // Connect wallet
//   const connectWallet = async () => {
//     if (!provider) return;
//     try {
//       const accounts = await provider.send("eth_requestAccounts", []);
//       const signer = await provider.getSigner();
//       const address = await signer.getAddress();
//       setSigner(signer);
//       setWalletAddress(address);
//       const achievementContract = new ethers.Contract(contractAddress, contractABI, signer);
//       setContract(achievementContract);
//     } catch (error) {
//       console.error("Wallet connection failed:", error);
//       setUploadStatus("error");
//       alert("Failed to connect wallet. Please ensure MetaMask is installed and set to Sepolia testnet.");
//     }
//   };

//   // Upload certificate to IPFS and mint NFT
//   // Upload certificate file to Pinata
//   const uploadToPinata = async (file) => {
//     const formData = new FormData();
//     formData.append("file", file);
  
//     const res = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
//       },
//       body: formData,
//     });
  
//     if (!res.ok) throw new Error("File upload failed");
//     return res.json();
//   };
  

// // Upload JSON metadata to Pinata
// const uploadMetadataToPinata = async (metadata) => {
//   const res = await fetch("https://api.pinata.cloud/pinning/pinJSONToIPFS", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
//     },
//     body: JSON.stringify(metadata),
//   });

//   if (!res.ok) throw new Error("Failed to upload metadata to Pinata");
//   return res.json(); // returns { IpfsHash }
// };

// // In your existing handleCertificateUpload
// const handleCertificateUpload = async () => {
//   if (!certificateFile || !contract || !signer || !userId) {
//     setUploadStatus("error");
//     alert("Please connect wallet, sign in, and select a certificate file.");
//     return;
//   }
//   setUploadStatus("uploading");

//   try {
//     // 1. Upload file to Pinata
//     const fileResult = await uploadToPinata(certificateFile);
//     const ipfsHash = `ipfs://${fileResult.IpfsHash}`;

//     // 2. Create metadata
//     const metadata = {
//       name: certificateFile.name,
//       description: "Blockchain-verified certificate",
//       image: ipfsHash,
//       attributes: [
//         { trait_type: "Recipient", value: auth.currentUser?.displayName || "Anonymous" },
//         { trait_type: "Issuer", value: "Porttrack" },
//         { trait_type: "Issue Date", value: new Date().toISOString() },
//       ],
//     };

//     // 3. Upload metadata to Pinata
//     const metadataResult = await uploadMetadataToPinata(metadata);
//     const metadataURI = `ipfs://${metadataResult.IpfsHash}`;

//     // 4. Mint NFT
//     const tx = await contract.mintCertificate(walletAddress, metadataURI);
//     const receipt = await tx.wait();
//     const tokenId = receipt.logs[0].args.tokenId.toString();

//     // 5. Save to Firebase (same as before)
//     const certificateRef = ref(db, `users/${userId}/certificates/${tokenId}`);
//     const certificateData = {
//       tokenId,
//       ipfsHash,
//       metadataURI,
//       title: certificateFile.name,
//       recipient: auth.currentUser?.displayName || "Anonymous",
//       issuer: "Porttrack",
//       issueDate: new Date().toISOString(),
//       blockNumber: receipt.blockNumber,
//       transactionHash: tx.hash,
//       status: "verified",
//       type: "certification",
//     };
//     await set(certificateRef, certificateData);

//     setUploadStatus("success");
//     setCertificateFile(null);
//     setVerificationResult(certificateData);
//   } catch (error) {
//     console.error("Upload failed:", error);
//     setUploadStatus("error");
//     alert(`Failed to upload certificate: ${error.message}`);
//   }
// };


//   // Verify certificate
//   const handleSearch = async () => {
//     if (!searchQuery.trim() || !contract || !userId) {
//       alert("Please connect wallet, sign in, and enter a search query.");
//       return;
//     }
//     setIsSearching(true);
//     try {
//       // Check Firebase for user-specific certificates
//       const certificatesRef = ref(db, `users/${userId}/certificates`);
//       const snapshot = await get(certificatesRef);
//       const certificates = snapshot.val();
//       let result = null;
//       if (certificates) {
//         result = Object.values(certificates).find(
//           (cert) =>
//             cert.tokenId === searchQuery ||
//             cert.ipfsHash.includes(searchQuery) ||
//             cert.transactionHash.toLowerCase() === searchQuery.toLowerCase()
//         );
//       }

//       // Verify on-chain
//       if (result) {
//         try {
//           const owner = await contract.getCertificateOwner(result.tokenId);
//           if (owner.toLowerCase() === walletAddress?.toLowerCase()) {
//             setVerificationResult({ ...result, status: "verified" });
//           } else {
//             setVerificationResult({ status: "invalid", message: "Certificate not owned by connected wallet" });
//           }
//         } catch (error) {
//           setVerificationResult({ status: "invalid", message: "Certificate not found on blockchain" });
//         }
//       } else {
//         setVerificationResult({ status: "not_found", message: "Certificate not found in your records" });
//       }
//     } catch (error) {
//       console.error("Verification failed:", error);
//       setVerificationResult({ status: "invalid", message: error.message });
//     } finally {
//       setIsSearching(false);
//     }
//   };

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//     alert("Copied to clipboard!");
//   };

//   const getStatusIcon = (status) => {
//     switch (status) {
//       case "verified":
//         return <CheckCircle className="h-6 w-6 text-green-500" />;
//       case "pending":
//         return <Clock className="h-6 w-6 text-yellow-500" />;
//       case "invalid":
//         return <XCircle className="h-6 w-6 text-red-500" />;
//       case "not_found":
//         return <AlertTriangle className="h-6 w-6 text-orange-500" />;
//       default:
//         return <Shield className="h-6 w-6 text-gray-500" />;
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "verified":
//         return "text-green-500 bg-green-500/20 border-green-500/30";
//       case "pending":
//         return "text-yellow-500 bg-yellow-500/20 border-yellow-500/30";
//       case "invalid":
//         return "text-red-500 bg-red-500/20 border-red-500/30";
//       case "not_found":
//         return "text-orange-500 bg-orange-500/20 border-orange-500/30";
//       default:
//         return "text-gray-500 bg-gray-500/20 border-gray-500/30";
//     }
//   };

//   const getTypeIcon = (type) => {
//     switch (type) {
//       case "hackathon":
//         return <Trophy className="h-5 w-5" />;
//       case "certification":
//         return <Award className="h-5 w-5" />;
//       case "achievement":
//         return <Code className="h-5 w-5" />;
//       default:
//         return <FileText className="h-5 w-5" />;
//     }
//   };
  
//   return (
//     <div className="min-h-screen pt-20 pb-10 bg-gradient-to-b from-gray-900 to-black">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6 hover-glow">
//             <Sparkles className="h-4 w-4 text-purple-500 mr-2" />
//             <span className="text-sm font-medium text-white">Blockchain Powered</span>
//           </div>
//           <h1 className="text-4xl md:text-6xl font-space font-bold mb-6">
//             <span className="neon-text">Verification</span> Center
//           </h1>
//           <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//             Verify the authenticity of your certificates using blockchain technology. Secure, transparent, and immutable.
//           </p>
//           {walletAddress ? (
//             <p className="text-sm text-gray-400 mt-2">
//               Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
//             </p>
//           ) : (
//             <Button onClick={connectWallet} className="gradient-purple-cyan hover-lift mt-4">
//               Connect Wallet
//             </Button>
//           )}
//           {!userId && (
//             <p className="text-sm text-red-500 mt-2">Please sign in to upload or verify certificates.</p>
//           )}
//         </motion.div>
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Verification Panel */}
//           <div className="lg:col-span-2">
//             {/* Certificate Upload */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="glass-card rounded-xl p-6 mb-6"
//             >
//               <h2 className="text-xl font-space font-bold mb-4 text-white">Upload Certificate</h2>
//               <div className="mb-4">
//                 <Input
//                   type="file"
//                   accept="image/*,.pdf"
//                   onChange={(e) => setCertificateFile(e.target.files[0])}
//                   className="text-white bg-gray-800 border-gray-700"
//                 />
//               </div>
//               <Button
//                 onClick={handleCertificateUpload}
//                 disabled={!certificateFile || uploadStatus === "uploading" || !userId}
//                 className="gradient-purple-cyan hover-lift"
//               >
//                 {uploadStatus === "uploading" ? (
//                   <Clock className="h-4 w-4 mr-2 animate-spin" />
//                 ) : (
//                   <Upload className="h-4 w-4 mr-2" />
//                 )}
//                 {uploadStatus === "uploading" ? "Uploading..." : "Verify on Blockchain"}
//               </Button>
//               {uploadStatus === "success" && (
//                 <p className="text-green-500 mt-2">Certificate verified and minted successfully!</p>
//               )}
//               {uploadStatus === "error" && (
//                 <p className="text-red-500 mt-2">Upload failed. Please check your wallet and try again.</p>
//               )}
//             </motion.div>
//             {/* Verification Methods */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="glass-card rounded-xl p-6 mb-6"
//             >
//               <h2 className="text-xl font-space font-bold mb-4 text-white">Verify Certificate</h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//                 {verificationMethods.map((method) => {
//                   const Icon = method.icon;
//                   return (
//                     <button
//                       key={method.id}
//                       onClick={() => setSelectedMethod(method.id)}
//                       className={`p-4 rounded-lg border transition-all duration-300 text-left ${
//                         selectedMethod === method.id
//                           ? "border-purple-500 bg-purple-500/10 shadow-lg"
//                           : "border-gray-700 hover:border-purple-500/50 glass"
//                       }`}
//                     >
//                       <Icon className="h-6 w-6 text-purple-500 mb-2" />
//                       <h3 className="font-medium mb-1 text-white">{method.title}</h3>
//                       <p className="text-xs text-gray-400">{method.description}</p>
//                     </button>
//                   );
//                 })}
//               </div>
//               <div className="flex space-x-3">
//                 <div className="flex-1 relative">
//                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//                   <Input
//                     placeholder={verificationMethods.find((m) => m.id === selectedMethod)?.placeholder}
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="pl-10 glass text-white bg-gray-800 border-gray-700"
//                     onKeyPress={(e) => e.key === "Enter" && handleSearch()}
//                   />
//                 </div>
//                 <Button
//                   onClick={handleSearch}
//                   disabled={isSearching || !searchQuery.trim() || !contract || !userId}
//                   className="gradient-purple-cyan hover-lift"
//                 >
//                   {isSearching ? (
//                     <Clock className="h-4 w-4 mr-2 animate-spin" />
//                   ) : (
//                     <Search className="h-4 w-4 mr-2" />
//                   )}
//                   Verify
//                 </Button>
//               </div>
//             </motion.div>
//             {/* Verification Result */}
//             {verificationResult && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="glass-card rounded-xl p-6 mb-6"
//               >
//                 <div className="flex items-center justify-between mb-6">
//                   <h2 className="text-xl font-space font-bold text-white">Verification Result</h2>
//                   <div className="flex items-center space-x-2">
//                     {getStatusIcon(verificationResult.status)}
//                     <Badge className={`${getStatusColor(verificationResult.status)} border`}>
//                       {verificationResult.status === "verified"
//                         ? "Verified"
//                         : verificationResult.status === "pending"
//                         ? "Pending"
//                         : verificationResult.status === "invalid"
//                         ? "Invalid"
//                         : "Not Found"}
//                     </Badge>
//                   </div>
//                 </div>
//                 {verificationResult.status === "verified" ? (
//                   <div className="space-y-6">
//                     <div className="glass rounded-lg p-4 border border-green-500/20">
//                       <div className="flex items-start space-x-4">
//                         <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 p-3">
//                           {getTypeIcon(verificationResult.type)}
//                         </div>
//                         <div className="flex-1">
//                           <h3 className="text-lg font-semibold font-space mb-1 text-white">
//                             {verificationResult.title}
//                           </h3>
//                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
//                             <div>
//                               <span className="text-gray-400">Recipient:</span>
//                               <span className="ml-2 font-medium">{verificationResult.recipient}</span>
//                             </div>
//                             <div>
//                               <span className="text-gray-400">Issuer:</span>
//                               <span className="ml-2 font-medium">{verificationResult.issuer}</span>
//                             </div>
//                             <div>
//                               <span className="text-gray-400">Issue Date:</span>
//                               <span className="ml-2 font-medium">{verificationResult.issueDate}</span>
//                             </div>
//                             <div>
//                               <span className="text-gray-400">Block:</span>
//                               <span className="ml-2 font-medium">#{verificationResult.blockNumber}</span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       {verificationResult.ipfsHash && (
//                         <img
//                           src={`https://gateway.pinata.cloud/ipfs/${verificationResult.ipfsHash.replace("ipfs://", "")}`}
//                           alt={verificationResult.title}
//                           className="w-full h-auto object-cover rounded-lg mt-4"
//                           loading="lazy"
//                         />
//                       )}
//                     </div>
//                     <div className="glass rounded-lg p-4">
//                       <h4 className="font-semibold mb-3 text-white">Blockchain Details</h4>
//                       <div className="space-y-3">
//                         <div className="flex items-center justify-between">
//                           <span className="text-gray-400">Certificate Hash:</span>
//                           <div className="flex items-center space-x-2">
//                             <code className="text-xs bg-gray-700/20 px-2 py-1 rounded">
//                               {verificationResult.ipfsHash?.slice(0, 20)}...
//                             </code>
//                             <Button
//                               variant="ghost"
//                               size="sm"
//                               onClick={() => copyToClipboard(verificationResult.ipfsHash)}
//                             >
//                               <Copy className="h-3 w-3" />
//                             </Button>
//                           </div>
//                         </div>
//                         <div className="flex items-center justify-between">
//                           <span className="text-gray-400">Transaction Hash:</span>
//                           <div className="flex items-center space-x-2">
//                             <code className="text-xs bg-gray-700/20 px-2 py-1 rounded">
//                               {verificationResult.transactionHash?.slice(0, 20)}...
//                             </code>
//                             <Button
//                               variant="ghost"
//                               size="sm"
//                               onClick={() => copyToClipboard(verificationResult.transactionHash)}
//                             >
//                               <Copy className="h-3 w-3" />
//                             </Button>
//                             <Button
//                               variant="ghost"
//                               size="sm"
//                               onClick={() =>
//                                 window.open(
//                                   `https://sepolia.etherscan.io/tx/${verificationResult.transactionHash}`,
//                                   "_blank"
//                                 )
//                               }
//                             >
//                               <ExternalLink className="h-3 w-3" />
//                             </Button>
//                           </div>
//                         </div>
//                         <div className="flex items-center justify-between">
//                           <span className="text-gray-400">Token ID:</span>
//                           <div className="flex items-center space-x-2">
//                             <code className="text-xs bg-gray-700/20 px-2 py-1 rounded">
//                               {verificationResult.tokenId}
//                             </code>
//                             <Button
//                               variant="ghost"
//                               size="sm"
//                               onClick={() => copyToClipboard(verificationResult.tokenId)}
//                             >
//                               <Copy className="h-3 w-3" />
//                             </Button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="text-center py-8">
//                     <AlertTriangle className="h-12 w-12 text-orange-500 mx-auto mb-4" />
//                     <h3 className="text-lg font-semibold mb-2 text-white">Certificate Not Found</h3>
//                     <p className="text-gray-400">
//                       The certificate hash, token ID, or transaction hash could not be found in your records.
//                     </p>
//                     {verificationResult.message && (
//                       <p className="text-sm text-red-500 mt-2">{verificationResult.message}</p>
//                     )}
//                   </div>
//                 )}
//               </motion.div>
//             )}
//           </div>
//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             {/* How It Works */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="glass-card rounded-xl p-6 mb-6"
//             >
//               <h3 className="text-lg font-space font-bold mb-4 text-white">How It Works</h3>
//               <div className="space-y-4">
//                 {[
//                   {
//                     step: 1,
//                     title: "Upload Certificate",
//                     description: "Upload your certificate to IPFS for decentralized storage.",
//                   },
//                   {
//                     step: 2,
//                     title: "Mint NFT",
//                     description: "Mint an NFT on Ethereum Sepolia to record the certificate.",
//                   },
//                   {
//                     step: 3,
//                     title: "Verify Ownership",
//                     description: "Verify ownership using the NFT token ID or transaction hash.",
//                   },
//                 ].map((item) => (
//                   <div key={item.step} className="flex space-x-3">
//                     <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center text-sm font-bold">
//                       {item.step}
//                     </div>
//                     <div>
//                       <h4 className="font-medium mb-1 text-white">{item.title}</h4>
//                       <p className="text-sm text-gray-400">{item.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//             {/* Recent Certificates */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="glass-card rounded-xl p-6"
//             >
//               <h3 className="text-lg font-space font-bold mb-4 text-white">Recent Certificates</h3>
//               {recentCertificates.length > 0 ? (
//                 <div className="space-y-4">
//                   {recentCertificates.map((cert) => (
//                     <div
//                       key={cert.tokenId}
//                       className="flex items-center justify-between p-4 glass rounded-lg hover-lift cursor-pointer"
//                       onClick={() => setVerificationResult(cert)}
//                     >
//                       <div className="flex items-center space-x-3">
//                         <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-2">
//                           {getTypeIcon(cert.type)}
//                         </div>
//                         <div>
//                           <h4 className="font-medium text-white">{cert.title}</h4>
//                           <p className="text-sm text-gray-400">
//                             {cert.recipient} • {cert.issuer}
//                           </p>
//                         </div>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         {getStatusIcon(cert.status)}
//                         <span className="text-sm text-gray-400">
//                           {new Date(cert.issueDate).toLocaleDateString()}
//                         </span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p className="text-sm text-gray-400">No certificates found.</p>
//               )}
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlockchainVerification;

import React, { useState } from "react";
import { ethers } from "ethers";

const contractABI = [
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "string", name: "tokenURI", type: "string" },
    ],
    name: "mintCertificate",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export default function BlockchainVerification() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");
  const [txHash, setTxHash] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");

  // Upload file to Pinata
  const uploadToPinata = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
        },
        body: formData,
      });

      if (!res.ok) {
        const errorMsg = await res.text();
        console.error(errorMsg);
        throw new Error("Pinata upload failed: " + errorMsg);
      }

      return res.json(); // { IpfsHash }
    } catch (err) {
      console.error("Pinata error:", err);
      throw err;
    }
  };

  // Upload metadata JSON to Pinata
  const uploadMetadata = async (ipfsHash, filename) => {
    try {
      const metadata = {
        name: filename,
        description: "Blockchain verified certificate",
        image: `ipfs://${ipfsHash}`,
        attributes: [{ trait_type: "Verified", value: "true" }],
      };

      const res = await fetch("https://api.pinata.cloud/pinning/pinJSONToIPFS", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
        },
        body: JSON.stringify(metadata),
      });

      if (!res.ok) {
        const errorMsg = await res.text();
        console.error(errorMsg);
        throw new Error("Metadata upload failed");
      }

      return res.json(); // { IpfsHash }
    } catch (err) {
      console.error("Metadata error:", err);
      throw err;
    }
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first");

    try {
      setStatus("Uploading file to IPFS...");
      const fileRes = await uploadToPinata(file);
      const ipfsHash = fileRes.IpfsHash;

      setPreviewUrl(`https://gateway.pinata.cloud/ipfs/${ipfsHash}`);

      setStatus("Uploading metadata...");
      const metaRes = await uploadMetadata(ipfsHash, file.name);
      const metadataURI = `ipfs://${metaRes.IpfsHash}`;

      setStatus("Minting NFT on blockchain...");
      if (!window.ethereum) throw new Error("MetaMask not found");

      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();

      const contract = new ethers.Contract(
        import.meta.env.VITE_CONTRACT_ADDRESS,
        contractABI,
        signer
      );

      const tx = await contract.mintCertificate(await signer.getAddress(), metadataURI);
      const receipt = await tx.wait();

      setTxHash(receipt.transactionHash || receipt.hash);
      setStatus("✅ Certificate minted & verified on blockchain!");
    } catch (err) {
      console.error(err);
      setStatus("❌ Error: " + err.message);
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Upload Certificate</h2>
      <input
        type="file"
        accept="image/*,.pdf"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />
      <button
        onClick={handleUpload}
        className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700"
      >
        Verify on Blockchain
      </button>

      {status && <p className="mt-4">{status}</p>}

      {previewUrl && (
        <div className="mt-4">
          <h3 className="font-semibold">Certificate Preview:</h3>
          {file.type === "application/pdf" ? (
            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-400"
            >
              View PDF
            </a>
          ) : (
            <img src={previewUrl} alt="Certificate" className="mt-2 rounded" />
          )}
        </div>
      )}

      {txHash && (
        <p className="mt-4 text-green-400">
          View on Etherscan:{" "}
          <a
            href={`https://sepolia.etherscan.io/tx/${txHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {txHash.slice(0, 10)}...
          </a>
        </p>
      )}
    </div>
  );
}

