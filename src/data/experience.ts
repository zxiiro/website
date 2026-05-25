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
    company: "The Linux Foundation",
    title: "Staff IT Engineer",
    start: "Aug 2025",
    end: "Present",
    current: true,
    bullets: [],
  },
  {
    company: "The Linux Foundation",
    title: "Senior Cloud Operations Engineer",
    start: "Jan 2024",
    end: "Aug 2025",
    bullets: [
      "Delivered robust cloud infrastructure and CI/CD pipelines to support PyTorch's open-source machine learning framework, enabling seamless development for a global community of researchers and engineers",
      "Collaborated with global teams to align infrastructure with project goals",
      "Supported the PyTorch MultiCloud Working Group, driving cross-platform compatibility and performance",
      "Designed and maintained AWS-based CI infrastructure, optimizing GitHub Actions workflows, service monitoring, and cost-efficiency",
      "Monitored and reported project costs using Ternary, ensuring transparency and budget adherence",
      "Implemented and supported an AWS Lambda-based autoscaler for self-hosted GitHub runners, improving scalability and resource utilization",
      "Managed GitHub Actions Runner Controller (ARC) to streamline CI/CD processes and ensure reliable build environments",
      "Administered Kubernetes (EKS) clusters, enhancing infrastructure resilience and developer productivity",
    ],
  },
  {
    company: "SurveyMonkey",
    title: "Principal Systems Engineer",
    start: "Jan 2022",
    end: "Mar 2023",
    bullets: [
      "Led the strategic transition from an internal self-hosted development platform to scalable cloud solutions using GitHub Enterprise & GitHub Actions, ensuring agile deployment and enhanced collaboration",
      "Guided teams with industry-leading best practices, empowering them to optimize and enhance dev workflows, ultimately leading to increased efficiency",
      "Pioneered the support transition from x86 to M1 Macs (ARM), deftly addressing and resolving inherent development challenges, guaranteeing smooth operations on the new platform",
    ],
  },
  {
    company: "Mosaic451",
    title: "Lead DevOps Automation Engineer",
    start: "Nov 2020",
    end: "Nov 2021",
    bullets: [
      "Guided dev teams with industry-leading best practices, empowering them to optimize and enhance dev workflows, ultimately leading to increased efficiency",
      "Standardized and automated software release process such as QA/test, versioning, release notes, and documentation across internal projects improving the quality of the final product",
      "Converted Lambda functions to AWS SAM Applications improving ease of deployment",
      "Managed and optimized Automation Infrastructure tools including Sceptre, CloudFormation, and AWS SAM ensuring robust, scalable, and agile deployment capabilities",
      "Enhanced Lambda functions' performance, achieving a notable 80% increase in response speed, vastly improving user experience and efficiency",
    ],
  },
  {
    company: "Lumina Networks",
    title: "DevOps Engineer",
    start: "Apr 2019",
    end: "Aug 2020",
    bullets: [
      "Spearheaded the complex migration of the company's internal private cloud infrastructure to AWS, enabling cost-efficiency and scalability benefits",
      "Standardized and automated internal CI tooling to minimize downtime and improve productivity across teams",
      "Managed development platform and tooling such as Jenkins, BitBucket, GitHub, Artifactory, BlackDuck, JIRA, and Confluence",
      "Maintained documentation for internal CI infrastructure services",
      "Contributed to key upstream open source projects used by Lumina Networks such as Jenkins Job Builder, OpenDaylight, and Linux Foundation Releng Tooling",
    ],
  },
  {
    company: "The Linux Foundation",
    title: "Release Manager",
    start: "Sep 2014",
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
    start: "Sep 2015",
    end: "Jul 2022",
    bullets: [
      "Contributed new features",
      "Reviewed community code contributions",
      "Maintained project documentation",
      "Provided project management and approved software releases",
    ],
  },
  {
    company: "Eclipse Foundation",
    title: "Release Engineer",
    start: "Feb 2012",
    end: "Sep 2014",
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
