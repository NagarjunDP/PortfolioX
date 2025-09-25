// import React, { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Sparkles, Github, Award, Brain, School, Rocket } from "lucide-react";

// const DetailsCollector = () => {
//   const [details, setDetails] = useState({
//     major: "",
//     university: "",
//     skills: [],
//     newSkill: "",
//     github: "",
//     certifications: "",
//     projects: "",
//     interests: "",
//   });

//   const handleChange = (e) => {
//     setDetails({ ...details, [e.target.name]: e.target.value });
//   };

//   const addSkill = () => {
//     if (details.newSkill.trim()) {
//       setDetails({
//         ...details,
//         skills: [...details.skills, details.newSkill],
//         newSkill: "",
//       });
//     }
//   };

//   const removeSkill = (skill) => {
//     setDetails({
//       ...details,
//       skills: details.skills.filter((s) => s !== skill),
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Portfolio Details:", details);
//     alert("Journey saved successfully!");
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-background">
//       <Card className="w-full max-w-2xl shadow-xl rounded-2xl glass">
//         <CardHeader>
//           <CardTitle className="text-2xl font-bold flex items-center gap-2">
//             <Sparkles className="h-6 w-6 text-primary" />
//             Build Your Journey Node
//           </CardTitle>
//           <p className="text-sm text-muted-foreground">
//             Let’s create a professional portfolio that tells your story.
//           </p>
//         </CardHeader>

//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Major */}
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 <School className="h-4 w-4 inline mr-1 text-primary" /> Major
//               </label>
//               <Input
//                 type="text"
//                 name="major"
//                 value={details.major}
//                 onChange={handleChange}
//                 placeholder="e.g. Computer Science"
//               />
//             </div>

//             {/* University */}
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 🎓 University
//               </label>
//               <Input
//                 type="text"
//                 name="university"
//                 value={details.university}
//                 onChange={handleChange}
//                 placeholder="e.g. MIT, Harvard..."
//               />
//             </div>

//             {/* Skills */}
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 <Brain className="h-4 w-4 inline mr-1 text-primary" /> Skills
//               </label>
//               <div className="flex gap-2">
//                 <Input
//                   type="text"
//                   name="newSkill"
//                   value={details.newSkill}
//                   onChange={handleChange}
//                   placeholder="Add a skill..."
//                 />
//                 <Button type="button" onClick={addSkill}>
//                   Add
//                 </Button>
//               </div>
//               <div className="flex flex-wrap gap-2 mt-2">
//                 {details.skills.map((skill, i) => (
//                   <Badge
//                     key={i}
//                     variant="secondary"
//                     className="cursor-pointer hover:bg-red-200"
//                     onClick={() => removeSkill(skill)}
//                   >
//                     {skill} ✕
//                   </Badge>
//                 ))}
//               </div>
//             </div>

//             {/* GitHub */}
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 <Github className="h-4 w-4 inline mr-1 text-primary" /> GitHub
//               </label>
//               <Input
//                 type="url"
//                 name="github"
//                 value={details.github}
//                 onChange={handleChange}
//                 placeholder="https://github.com/username"
//               />
//             </div>

//             {/* Certifications */}
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 <Award className="h-4 w-4 inline mr-1 text-primary" /> Certifications
//               </label>
//               <Textarea
//                 name="certifications"
//                 value={details.certifications}
//                 onChange={handleChange}
//                 placeholder="List your certifications (comma separated)"
//               />
//             </div>

//             {/* Projects */}
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 <Rocket className="h-4 w-4 inline mr-1 text-primary" /> Projects
//               </label>
//               <Textarea
//                 name="projects"
//                 value={details.projects}
//                 onChange={handleChange}
//                 placeholder="Describe your projects"
//               />
//             </div>

//             {/* Interests */}
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 🌟 Interests
//               </label>
//               <Input
//                 type="text"
//                 name="interests"
//                 value={details.interests}
//                 onChange={handleChange}
//                 placeholder="AI, Blockchain, Art..."
//               />
//             </div>

//             {/* Submit */}
//             <Button type="submit" className="w-full gradient-purple-cyan hover-lift">
//               Save Journey
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default DetailsCollector;
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sparkles, Github, Award, Brain, School, Rocket } from "lucide-react";
import { getDatabase, ref, set,push } from "firebase/database";
import { db } from "../firebase";
import {getAuth} from "firebase/auth"
// 👈 import db
//import { ref, push } from "firebase/database"; // 👈 import helpers

const DetailsCollector = () => {
  const [details, setDetails] = useState({
    major: "",
    university: "",
    skills: [],
    newSkill: "",
    github: "",
    certifications: "",
    projects: "",
    interests: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const addSkill = () => {
    if (details.newSkill.trim()) {
      setDetails({
        ...details,
        skills: [...details.skills, details.newSkill],
        newSkill: "",
      });
    }
  };

  const removeSkill = (skill) => {
    setDetails({
      ...details,
      skills: details.skills.filter((s) => s !== skill),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const auth = getAuth();
      const user = auth.currentUser;
  
      if (!user) {
        alert("⚠️ You must be logged in to save your journey.");
        setLoading(false);
        return;
      }
  
      // 👇 Save data under user UID instead of random push ID
      await set(ref(db, `students/${user.uid}`), {
        major: details.major,
        university: details.university,
        skills: details.skills,
        github: details.github,
        certifications: details.certifications,
        projects: details.projects,
        interests: details.interests,
        createdAt: new Date().toISOString(),
      });
  
      alert("🎉 Journey saved successfully!");
  
      // reset form
      setDetails({
        major: "",
        university: "",
        skills: [],
        newSkill: "",
        github: "",
        certifications: "",
        projects: "",
        interests: "",
      });
    } catch (error) {
      console.error("Error saving journey:", error);
      alert("⚠️ Failed to save journey.");
    }
  
    setLoading(false);
  };
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-background">
      <Card className="w-full max-w-2xl shadow-xl rounded-2xl glass">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            Build Your Journey Node
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Let’s create a professional portfolio that tells your story.
          </p>
        </CardHeader>

        <CardContent>
  <form onSubmit={handleSubmit} className="space-y-6">
    {/* Major */}
    <div>
      <label className="text-sm font-medium">Major</label>
      <Input
        type="text"
        name="major"
        placeholder="Ex: Computer Science"
        value={details.major}
        onChange={handleChange}
      />
    </div>

    {/* University */}
    <div>
      <label className="text-sm font-medium">University</label>
      <Input
        type="text"
        name="university"
        placeholder="Ex: DSU Bangalore"
        value={details.university}
        onChange={handleChange}
      />
    </div>

    {/* Skills */}
    <div>
      <label className="text-sm font-medium">Skills</label>
      <div className="flex gap-2">
        <Input
          type="text"
          name="newSkill"
          placeholder="Add a skill"
          value={details.newSkill}
          onChange={handleChange}
        />
        <Button type="button" onClick={addSkill}>Add</Button>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {details.skills.map((skill, idx) => (
          <Badge
            key={idx}
            onClick={() => removeSkill(skill)}
            className="cursor-pointer"
          >
            {skill} ✕
          </Badge>
        ))}
      </div>
    </div>

    {/* Github */}
    <div>
      <label className="text-sm font-medium flex items-center gap-1">
        <Github className="w-4 h-4" /> GitHub Profile
      </label>
      <Input
        type="url"
        name="github"
        placeholder="https://github.com/username"
        value={details.github}
        onChange={handleChange}
      />
    </div>

    {/* Certifications */}
    <div>
      <label className="text-sm font-medium flex items-center gap-1">
        <Award className="w-4 h-4" /> Certifications
      </label>
      <Textarea
        name="certifications"
        placeholder="List your certifications..."
        value={details.certifications}
        onChange={handleChange}
      />
    </div>

    {/* Projects */}
    <div>
      <label className="text-sm font-medium flex items-center gap-1">
        <Rocket className="w-4 h-4" /> Projects
      </label>
      <Textarea
        name="projects"
        placeholder="Describe your projects..."
        value={details.projects}
        onChange={handleChange}
      />
    </div>

    {/* Interests */}
    <div>
      <label className="text-sm font-medium flex items-center gap-1">
        <Brain className="w-4 h-4" /> Interests
      </label>
      <Input
        type="text"
        name="interests"
        placeholder="AI, Blockchain, Design..."
        value={details.interests}
        onChange={handleChange}
      />
    </div>

    {/* Submit */}
    <Button
      type="submit"
      className="w-full gradient-purple-cyan hover-lift"
      disabled={loading}
    >
      {loading ? "Saving..." : "Save Journey"}
    </Button>
  </form>
</CardContent>

      </Card>
    </div>
  );
};

export default DetailsCollector;
