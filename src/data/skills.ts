export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Software",
    skills: ["Bash", "Python", "Git", "Gerrit", "Linux", "Maven", "Nexus Repository"],
  },
  {
    title: "Release Engineering",
    skills: ["Jenkins", "Jenkins Job Builder", "Travis CI"],
  },
  {
    title: "Technical Writing",
    skills: ["Sphinx", "Docs Team Leadership", "API Documentation", "End-user Documentation"],
  },
];
