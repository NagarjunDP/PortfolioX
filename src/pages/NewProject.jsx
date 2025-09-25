import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Rocket, X } from 'lucide-react';
import { auth, db } from '../firebase';
import { push, ref } from 'firebase/database';
import toast, { Toaster } from 'react-hot-toast';

const NewProjectForm = () => {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [project, setProject] = useState({
    title: '',
    description: '',
    tools: [],
    newTool: '',
    liveWebsite: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoadingAuth(false);
      if (!currentUser) {
        toast.error('You must be signed in to add a project.');
        navigate('/auth');
      }
    }, (error) => {
      console.error('NewProjectForm: Auth error:', error);
      setError('Authentication error.');
      toast.error('Authentication error.');
      setLoadingAuth(false);
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleProjectChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const addTool = () => {
    if (project.newTool.trim()) {
      setProject({
        ...project,
        tools: [...project.tools, project.newTool.trim()],
        newTool: ''
      });
    }
  };

  const removeTool = (tool) => {
    setProject({
      ...project,
      tools: project.tools.filter((t) => t !== tool)
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError('You must be signed in to add a project.');
      toast.error('You must be signed in to add a project.');
      return;
    }
    if (!project.title.trim() || !project.description.trim()) {
      setError('Title and description are required.');
      toast.error('Title and description are required.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await push(ref(db, `students/${user.uid}/projects`), {
        title: project.title.trim(),
        description: project.description.trim(),
        tools: project.tools,
        liveWebsite: project.liveWebsite.trim(),
        createdAt: new Date().toISOString()
      });
      toast.success('🎉 Project added successfully!');
      navigate('/dashboard');
    } catch (error) {
      console.error('NewProjectForm: Error saving project:', error);
      setError('Failed to save project.');
      toast.error('Failed to save project.');
    }
    setLoading(false);
  };

  if (loadingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-foreground text-lg"
        >
          Loading...
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
            <Button
              className="mt-4 gradient-purple-cyan"
              onClick={() => navigate('/auth')}
            >
              Go to Sign In
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-right" />
      <Card className="glass-strong border-white/10 w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-primary">
            <Rocket className="h-5 w-5" />
            <span>Add New Project</span>
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Showcase your latest project to recruiters and peers.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-sm font-medium">Project Title</label>
              <Input
                type="text"
                name="title"
                placeholder="Ex: AI-Powered Chatbot"
                value={project.title}
                onChange={handleProjectChange}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium">Description</label>
              <Textarea
                name="description"
                placeholder="Describe your project..."
                value={project.description}
                onChange={handleProjectChange}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium">Tools Used</label>
              <div className="flex gap-2">
                <Input
                  type="text"
                  name="newTool"
                  placeholder="Add a tool (e.g., React, Python)"
                  value={project.newTool}
                  onChange={handleProjectChange}
                />
                <Button type="button" onClick={addTool}>Add</Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tools.map((tool, idx) => (
                  <Badge
                    key={idx}
                    onClick={() => removeTool(tool)}
                    className="cursor-pointer hover:bg-red-500/20"
                  >
                    {tool} ✕
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Live Website URL</label>
              <Input
                type="url"
                name="liveWebsite"
                placeholder="https://yourproject.com"
                value={project.liveWebsite}
                onChange={handleProjectChange}
              />
            </div>
            <div className="flex gap-4">
              <Button
                type="submit"
                className="w-full gradient-purple-cyan hover-lift"
                disabled={loading}
              >
                {loading ? 'Saving...' : 'Add Project'}
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full glass hover-glow"
                onClick={() => navigate('/dashboard')}
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewProjectForm;