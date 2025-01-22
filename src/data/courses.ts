export interface Course {
  id: string;
  title: string;
  description: string;
  dependencies: string[];
  position: { x: number; y: number };
  subtopics: string[];
  certificationProgress?: {
    target: string;
    percentage: number;
    contributesTo?: {
      [key: string]: number;
    };
  };
}

export const courses: Course[] = [
  {
    id: "cka",
    title: "CKA",
    description: "Certified Kubernetes Administrator - Core concepts and cluster management",
    dependencies: [],
    position: { x: 100, y: 100 },
    subtopics: [
      "Cluster Architecture",
      "Workloads & Scheduling",
      "Services & Networking",
      "Storage",
      "Troubleshooting",
      "Cluster Maintenance",
      "Logging & Monitoring",
      "Security"
    ],
    certificationProgress: {
      target: "CKA",
      percentage: 100,
      contributesTo: {
        "ckad": 30,
        "cks": 40,
        "kcna": 25
      }
    }
  },
  {
    id: "ckad",
    title: "CKAD",
    description: "Certified Kubernetes Application Developer",
    dependencies: ["cka"],
    position: { x: 300, y: 100 },
    subtopics: [
      "Application Design",
      "Application Deployment",
      "Application Observability",
      "Application Configuration",
      "Services & Networking",
      "Pod Design",
      "State Persistence"
    ],
    certificationProgress: {
      target: "CKAD",
      percentage: 0,
      contributesTo: {
        "cks": 20
      }
    }
  },
  {
    id: "kcna",
    title: "KCNA",
    description: "Kubernetes and Cloud Native Associate",
    dependencies: ["cka"],
    position: { x: 500, y: 100 },
    subtopics: [
      "Kubernetes Fundamentals",
      "Container Orchestration",
      "Cloud Native Architecture",
      "Cloud Native Observability",
      "Cloud Native Application Delivery",
      "Cloud Native Security"
    ],
    certificationProgress: {
      target: "KCNA",
      percentage: 0,
      contributesTo: {
        "cks": 10,
        "kcsa": 20
      }
    }
  },
  {
    id: "cks",
    title: "CKS",
    description: "Certified Kubernetes Security Specialist",
    dependencies: ["cka"],
    position: { x: 700, y: 100 },
    subtopics: [
      "Cluster Setup",
      "Cluster Hardening",
      "System Hardening",
      "Minimize Microservice Vulnerabilities",
      "Supply Chain Security",
      "Monitoring, Logging and Runtime Security"
    ],
    certificationProgress: {
      target: "CKS",
      percentage: 0,
      contributesTo: {
        "kcsa": 40
      }
    }
  },
  {
    id: "kcsa",
    title: "KCSA",
    description: "Kubernetes Cloud Security Associate",
    dependencies: ["cks"],
    position: { x: 900, y: 100 },
    subtopics: [
      "Cloud Security Fundamentals",
      "Container Security",
      "Kubernetes Security",
      "Cloud Platform Security",
      "Security Operations",
      "Compliance and Governance"
    ],
    certificationProgress: {
      target: "KCSA",
      percentage: 0
    }
  }
];