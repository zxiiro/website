export type Role = {
  company: string;
  title: string;
  start: string;
  end: string;
  current?: boolean;
  bullets: string[];
};

export const experience: Role[] = [
  {
    company: "Lumina Networks",
    title: "DevOps Engineer",
    start: "Apr 2019",
    end: "Present",
    current: true,
    bullets: [
      "Automate internal release processes",
      "Develop tooling to improve CI workflows and management",
      "Manage CI services: Jenkins, BitBucket, GitHub, Artifactory, Blackduck",
      "Manage communications platforms: JIRA, Confluence",
      "Provide CI support for internal developers",
      "Write and manage documentation for internal CI infrastructure",
      "Participate in upstream Open Source projects: OpenDaylight, Linux Foundation Releng Tooling, Jenkins Job Builder",
    ],
  },
  {
    company: "Linux Foundation",
    title: "Release Manager",
    start: "Sept 2014",
    end: "Mar 2019",
    bullets: [
      "Provided software build support to LF projects, notably OpenDaylight and Academy Software Foundation",
      "Managed services including Jenkins, Gerrit, Nexus, Sonar",
      "Developed and deployed tooling used by LF: Jenkins Job Builder (JJB), Python Jenkins, Global JJB, lftools",
      "Project Lead for OpenDaylight releng projects",
      "Wrote and managed documentation for OpenDaylight and Linux Foundation Releng",
    ],
  },
  {
    company: "OpenDaylight",
    title: "Technical Steering Committee Member",
    start: "Nov 2016",
    end: "Oct 2019",
    bullets: [
      "Participated in technical discussions related to the OpenDaylight project",
      "Provided release engineering expertise to the TSC members",
      "Assisted in directing sub-projects toward a successful software release",
    ],
  },
  {
    company: "Jenkins Job Builder",
    title: "Core Reviewer",
    start: "Sept 2015",
    end: "Present",
    current: true,
    bullets: [
      "Contribute new features",
      "Review community code contributions",
      "Maintain project documentation",
      "Provide project management and approve software releases",
    ],
  },
  {
    company: "Eclipse Foundation",
    title: "Release Engineer",
    start: "Feb 2012",
    end: "Sept 2014",
    bullets: [
      "Provided support to Eclipse projects for the Common Build Infrastructure (CBI)",
      "Provided support for the Eclipse Long Term Support (LTS) forge",
      "Assisted Eclipse projects with migrating builds to Maven/Tycho",
      "Gerrit and Hudson deployment and maintenance",
      "Web-based code signing service development and management",
      "Setup SonarQube code analysis software",
    ],
  },
  {
    company: "Nakina Systems",
    title: "Support Engineer",
    start: "Nov 2009",
    end: "Feb 2012",
    bullets: [
      "Provided Enterprise level support to Tier 1 ISPs",
      "Product support for Nakina NI-Framework and NI-Controller, including Solaris 10 and Oracle 10g/11g administration",
      "Provided Nakina product training to team members",
      "Product Verification, UI Testing, Developer API testing in Java / Python",
      "Created install and Solaris zone automation scripts",
    ],
  },
  {
    company: "FOSSLC",
    title: "Lead Developer",
    start: "Feb 2008",
    end: "Jan 2015",
    bullets: [
      "Lead Developer for Freeseer, a presentation capture tool used to record open source conferences inexpensively",
      "Mentored students from GSoC, UCOSP, and Facebook Open Academy",
      "Volunteer filming for FSOSS, PGCon, BSDCan, SotM2011, FOSS4G, EclipseCon NA/Europe",
    ],
  },
  {
    company: "BOLDstreet Wireless",
    title: "Technical Services Specialist",
    start: "Jan 2007",
    end: "Dec 2007",
    bullets: [
      "Monitored and managed over 1000 hotspots across Canada for SLA compliance",
      "Troubleshoot network issues with clients and on-site partners",
      "Scripted automated configuration of Colubris Access Points",
      "Cellphone testing on UMA/SIP protocols",
    ],
  },
];
