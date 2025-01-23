export interface SubTopic {
  id: string;
  title: string;
  relatedTopics?: string[]; // IDs of related topics in other courses
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
    description: "Certified Kubernetes Administrator - Core concepts and cluster management",
    dependencies: [],
    position: { x: 100, y: 100 },
    sections: [
      {
        title: "Core Concepts",
        subtopics: [
          { id: "k8s-arch", title: "Kubernetes Architecture", relatedTopics: ["kcna-k8s-arch"] },
          { id: "docker-containerd", title: "Docker vs ContainerD", relatedTopics: ["ckad-docker", "kcna-docker"] },
          { id: "etcd", title: "etcd" },
          { id: "api-server", title: "API Server", relatedTopics: ["kcsa-api-server"] },
          { id: "controller-manager", title: "Controller Manager", relatedTopics: ["kcsa-controller"] },
          { id: "scheduler", title: "Scheduler", relatedTopics: ["kcsa-scheduler"] }
        ]
      },
      {
        title: "Workloads",
        subtopics: [
          { id: "kubelet", title: "Kubelet", relatedTopics: ["kcsa-kubelet"] },
          { id: "kube-proxy", title: "Kube Proxy" },
          { id: "k8s-extensions", title: "Kubernetes Extension Interfaces" }
        ]
      },
      {
        title: "Container Runtime",
        subtopics: [
          { id: "cri", title: "Container Runtime Interface (CRI)", relatedTopics: ["kcna-cri", "kcsa-cri"] },
          { id: "csi", title: "Container Storage Interface (CSI)" },
          { id: "pods", title: "Pods", relatedTopics: ["ckad-pods", "kcna-pods"] }
        ]
      }
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
    sections: [
      {
        title: "Application Design",
        subtopics: [
          { id: "app-design", title: "Application Design" },
          { id: "app-deployment", title: "Application Deployment" }
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
    id: "kcna",
    title: "KCNA",
    description: "Kubernetes and Cloud Native Associate",
    dependencies: ["cka"],
    position: { x: 500, y: 100 },
    sections: [
      {
        title: "Kubernetes Fundamentals",
        subtopics: [
          { id: "k8s-fundamentals", title: "Kubernetes Fundamentals" }
        ]
      }
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
    sections: [
      {
        title: "Security",
        subtopics: [
          { id: "security-fundamentals", title: "Security Fundamentals" }
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
  },
  {
    id: "kcsa",
    title: "KCSA",
    description: "Kubernetes Cloud Security Associate",
    dependencies: ["cks"],
    position: { x: 900, y: 100 },
    sections: [
      {
        title: "Cloud Security",
        subtopics: [
          { id: "cloud-security-fundamentals", title: "Cloud Security Fundamentals" }
        ]
      }
    ],
    certificationProgress: {
      target: "KCSA",
      percentage: 0
    }
  }
];
