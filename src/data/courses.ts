export interface SubTopic {
  id: string;
  title: string;
  relatedTopics?: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  dependencies: string[];
  position: { x: number; y: number };
  sections: {
    title: string;
    subtopics: SubTopic[];
  }[];
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
    description: "Certified Kubernetes Administrator",
    dependencies: [],
    position: { x: 100, y: 100 },
    sections: [
      {
        title: "Core Concepts",
        subtopics: [
          { id: "k8s-arch", title: "Kubernetes Architecture", relatedTopics: ["kcna-k8s-arch"] },
          { id: "k8s-api", title: "Kubernetes API Primitives", relatedTopics: ["ckad-api"] },
          { id: "containers", title: "Containers", relatedTopics: ["ckad-containers"] },
          { id: "security", title: "Security", relatedTopics: ["cks-security"] }
        ]
      },
      {
        title: "Scheduling",
        subtopics: [
          { id: "labels", title: "Labels & Selectors", relatedTopics: ["ckad-labels"] },
          { id: "daemonsets", title: "DaemonSets", relatedTopics: ["ckad-daemonsets"] },
          { id: "resource-limits", title: "Resource Limits", relatedTopics: ["ckad-resources"] }
        ]
      },
      {
        title: "Application Lifecycle",
        subtopics: [
          { id: "deployments", title: "Deployments", relatedTopics: ["ckad-deployments"] },
          { id: "rolling-updates", title: "Rolling Updates", relatedTopics: ["ckad-updates"] }
        ]
      },
      {
        title: "Cluster Maintenance",
        subtopics: [
          { id: "cluster-upgrade", title: "Cluster Upgrade", relatedTopics: ["cks-upgrade"] },
          { id: "backup-restore", title: "Backup & Restore", relatedTopics: ["cks-backup"] }
        ]
      },
      {
        title: "Security",
        subtopics: [
          { id: "authentication", title: "Authentication", relatedTopics: ["cks-auth"] },
          { id: "authorization", title: "Authorization", relatedTopics: ["cks-rbac"] },
          { id: "network-policies", title: "Network Policies", relatedTopics: ["cks-network"] }
        ]
      }
    ],
    certificationProgress: {
      target: "CKA",
      percentage: 100,
      contributesTo: {
        "ckad": 30,
        "cks": 40
      }
    }
  },
  {
    id: "ckad",
    title: "CKAD",
    description: "Certified Kubernetes Application Developer",
    dependencies: ["cka"],
    position: { x: 300, y: 100 },
    sections: [
      {
        title: "Application Design",
        subtopics: [
          { id: "ckad-containers", title: "Container Images", relatedTopics: ["containers"] },
          { id: "ckad-deployments", title: "Deployments", relatedTopics: ["deployments"] },
          { id: "ckad-jobs", title: "Jobs & CronJobs" }
        ]
      },
      {
        title: "Application Configuration",
        subtopics: [
          { id: "ckad-configmaps", title: "ConfigMaps & Secrets" },
          { id: "ckad-resources", title: "Resource Requirements", relatedTopics: ["resource-limits"] }
        ]
      },
      {
        title: "Application Observability",
        subtopics: [
          { id: "ckad-probes", title: "Probes & Health Checks" },
          { id: "ckad-logging", title: "Container Logging" }
        ]
      }
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
    id: "cks",
    title: "CKS",
    description: "Certified Kubernetes Security Specialist",
    dependencies: ["cka"],
    position: { x: 500, y: 100 },
    sections: [
      {
        title: "Cluster Setup",
        subtopics: [
          { id: "cks-hardening", title: "CIS Benchmarks", relatedTopics: ["security"] },
          { id: "cks-upgrade", title: "Version Upgrades", relatedTopics: ["cluster-upgrade"] }
        ]
      },
      {
        title: "Cluster Hardening",
        subtopics: [
          { id: "cks-rbac", title: "RBAC", relatedTopics: ["authorization"] },
          { id: "cks-network", title: "Network Policies", relatedTopics: ["network-policies"] }
        ]
      },
      {
        title: "System Hardening",
        subtopics: [
          { id: "cks-minimize", title: "Minimize Base Image Footprint" },
          { id: "cks-kernel", title: "Kernel Hardening Tools" }
        ]
      },
      {
        title: "Supply Chain Security",
        subtopics: [
          { id: "cks-containers", title: "Container Runtime Security" },
          { id: "cks-static", title: "Static Analysis" }
        ]
      }
    ],
    certificationProgress: {
      target: "CKS",
      percentage: 0,
      contributesTo: {
        "kcsa": 40
      }
    }
  }
];