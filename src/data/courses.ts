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
    id: "ckna",
    title: "CKNA",
    description: "Certified Kubernetes and Cloud Native Associate",
    dependencies: [],
    position: { x: 100, y: 300 },
    sections: [
      {
        title: "Container Orchestration",
        subtopics: [
          { id: "ckna-containers", title: "Container Fundamentals", relatedTopics: ["containers"] },
          { id: "ckna-k8s-arch", title: "Kubernetes Architecture", relatedTopics: ["k8s-arch"] },
          { id: "ckna-cloud-native", title: "Cloud Native Architecture" }
        ]
      },
      {
        title: "Cloud Native Architecture",
        subtopics: [
          { id: "ckna-microservices", title: "Microservices" },
          { id: "ckna-scaling", title: "Scaling and High Availability" },
          { id: "ckna-observability", title: "Observability" }
        ]
      },
      {
        title: "Container Orchestration",
        subtopics: [
          { id: "ckna-deployment", title: "Deployment Strategies" },
          { id: "ckna-service-mesh", title: "Service Mesh" },
          { id: "ckna-storage", title: "Storage Solutions" }
        ]
      }
    ]
  },
  {
    id: "cka",
    title: "CKA",
    description: "Certified Kubernetes Administrator",
    dependencies: [],
    position: { x: 100, y: 100 },
    sections: [
      {
        title: "Cluster Architecture",
        subtopics: [
          { id: "k8s-arch", title: "Kubernetes Architecture", relatedTopics: ["ckna-k8s-arch"] },
          { id: "k8s-api", title: "API Primitives", relatedTopics: ["ckad-api"] },
          { id: "containers", title: "Containers", relatedTopics: ["ckad-containers"] },
          { id: "etcd", title: "ETCD Backup & Restore" }
        ]
      },
      {
        title: "Workloads & Scheduling",
        subtopics: [
          { id: "deployments", title: "Deployments", relatedTopics: ["ckad-deployments"] },
          { id: "scheduling", title: "Pod Scheduling & Affinity" },
          { id: "daemonsets", title: "DaemonSets", relatedTopics: ["ckad-daemonsets"] },
          { id: "resource-limits", title: "Resource Limits", relatedTopics: ["ckad-resources"] }
        ]
      },
      {
        title: "Services & Networking",
        subtopics: [
          { id: "services", title: "Services & Networking" },
          { id: "ingress", title: "Ingress Controllers" },
          { id: "dns", title: "CoreDNS Configuration" },
          { id: "network-policy", title: "Network Policies" }
        ]
      },
      {
        title: "Storage",
        subtopics: [
          { id: "volumes", title: "Volumes & Claims" },
          { id: "storage-class", title: "Storage Classes" },
          { id: "volume-modes", title: "Volume Modes & Access" }
        ]
      },
      {
        title: "Troubleshooting",
        subtopics: [
          { id: "cluster-trouble", title: "Cluster Troubleshooting" },
          { id: "app-trouble", title: "Application Failure" },
          { id: "networking-trouble", title: "Networking Issues" }
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
    dependencies: [],
    position: { x: 300, y: 100 },
    sections: [
      {
        title: "Application Design",
        subtopics: [
          { id: "ckad-containers", title: "Container Images", relatedTopics: ["containers"] },
          { id: "ckad-deployments", title: "Deployments", relatedTopics: ["deployments"] },
          { id: "ckad-jobs", title: "Jobs & CronJobs" },
          { id: "ckad-cm-secrets", title: "ConfigMaps & Secrets" }
        ]
      },
      {
        title: "Application Deployment",
        subtopics: [
          { id: "ckad-labels", title: "Labels & Selectors" },
          { id: "ckad-rolling", title: "Rolling Updates" },
          { id: "ckad-probes", title: "Probes & Health Checks" }
        ]
      },
      {
        title: "Application Observability",
        subtopics: [
          { id: "ckad-logging", title: "Logging" },
          { id: "ckad-debugging", title: "Debugging" },
          { id: "ckad-monitoring", title: "Monitoring" }
        ]
      },
      {
        title: "Application Environment",
        subtopics: [
          { id: "ckad-resources", title: "Resource Requirements" },
          { id: "ckad-security", title: "Security Contexts" },
          { id: "ckad-storage", title: "Storage" }
        ]
      },
      {
        title: "Services & Networking",
        subtopics: [
          { id: "ckad-services", title: "Services" },
          { id: "ckad-network", title: "Network Policies" },
          { id: "ckad-ingress", title: "Ingress" }
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
          { id: "cks-hardening", title: "CIS Benchmarks" },
          { id: "cks-upgrade", title: "Version Upgrades" },
          { id: "cks-network", title: "Network Security" }
        ]
      },
      {
        title: "Cluster Hardening",
        subtopics: [
          { id: "cks-rbac", title: "RBAC" },
          { id: "cks-accounts", title: "Service Accounts" },
          { id: "cks-policy", title: "Security Policies" }
        ]
      },
      {
        title: "System Hardening",
        subtopics: [
          { id: "cks-minimize", title: "Minimize Base Image" },
          { id: "cks-kernel", title: "Kernel Hardening" },
          { id: "cks-os", title: "OS Level Security" }
        ]
      },
      {
        title: "Supply Chain Security",
        subtopics: [
          { id: "cks-images", title: "Image Security" },
          { id: "cks-static", title: "Static Analysis" },
          { id: "cks-runtime", title: "Runtime Security" }
        ]
      },
      {
        title: "Monitoring & Logging",
        subtopics: [
          { id: "cks-audit", title: "Audit Logging" },
          { id: "cks-monitoring", title: "Security Monitoring" },
          { id: "cks-incident", title: "Incident Response" }
        ]
      }
    ],
    certificationProgress: {
      target: "CKS",
      percentage: 0
    }
  },
  {
    id: "cksa",
    title: "CKSA",
    description: "Certified Kubernetes Security Administrator",
    dependencies: [],
    position: { x: 300, y: 300 },
    sections: [
      {
        title: "Security Architecture",
        subtopics: [
          { id: "cksa-arch", title: "Security Architecture" },
          { id: "cksa-threats", title: "Threat Modeling" },
          { id: "cksa-compliance", title: "Compliance Requirements" }
        ]
      },
      {
        title: "Cluster Security",
        subtopics: [
          { id: "cksa-access", title: "Access Control" },
          { id: "cksa-secrets", title: "Secrets Management" },
          { id: "cksa-network", title: "Network Security" }
        ]
      },
      {
        title: "System Security",
        subtopics: [
          { id: "cksa-container", title: "Container Security" },
          { id: "cksa-runtime", title: "Runtime Security" },
          { id: "cksa-vulns", title: "Vulnerability Management" }
        ]
      }
    ]
  }
];