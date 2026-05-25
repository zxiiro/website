export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS", "Kubernetes / EKS", "Cloudflare", "Docker", "Linux"],
  },
  {
    title: "CI/CD & Automation",
    skills: [
      "GitHub Actions",
      "Actions Runner Controller",
      "Jenkins",
      "Terraform",
      "AWS Lambda",
      "AWS SAM",
      "CloudFormation",
    ],
  },
  {
    title: "Languages & Tools",
    skills: ["Python", "Bash", "Git"],
  },
];
