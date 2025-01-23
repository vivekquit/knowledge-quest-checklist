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
          { id: "k8s-arch", title: "Kubernetes Architecture" },
          { id: "docker-containerd", title: "Docker vs ContainerD" },
          { id: "etcd", title: "etcd" },
          { id: "api-server", title: "API Server" },
          { id: "controller-manager", title: "Controller Manager" },
          { id: "scheduler", title: "Scheduler" },
          { id: "kubelet", title: "Kubelet" },
          { id: "kube-proxy", title: "Kube Proxy" },
          { id: "k8s-extensions", title: "Kubernetes Extension Interfaces" },
          { id: "cri", title: "Container Runtime Interface (CRI)" },
          { id: "csi", title: "Container Storage Interface (CSI)" },
          { id: "pods", title: "Pods" },
          { id: "pods-yaml", title: "Pods with YAML" },
          { id: "replicasets", title: "ReplicaSets" },
          { id: "deployments", title: "Deployments" },
          { id: "services", title: "Services" },
          { id: "namespaces", title: "Namespaces" },
          { id: "imp-vs-dec", title: "Imperative vs Declarative" },
          { id: "kubectl-apply", title: "Kubectl Apply Command" }
        ]
      },
      {
        title: "Scheduling",
        subtopics: [
          { id: "manual-scheduling", title: "Manual Scheduling" },
          { id: "labels-selectors", title: "Labels and Selectors" },
          { id: "taints-tolerations", title: "Taints and Tolerations" },
          { id: "node-selectors", title: "Node Selectors" },
          { id: "node-affinity", title: "Node Affinity" },
          { id: "taints-vs-affinity", title: "Taints and Tolerations vs Node Affinity" },
          { id: "resource-quotas", title: "Resource Quotas & Limits" },
          { id: "daemonsets", title: "DaemonSets" },
          { id: "static-pods", title: "Static Pods" },
          { id: "multiple-schedulers", title: "Multiple Schedulers" },
          { id: "scheduler-profiles", title: "Configuring Kubernetes Scheduler Profiles" }
        ]
      },
      {
        title: "Logging & Monitoring",
        subtopics: [
          { id: "monitor-components", title: "Monitor Cluster Components" },
          { id: "app-logs", title: "Managing Application/Container Logs" }
        ]
      },
      {
        title: "Application Lifecycle Management",
        subtopics: [
          { id: "rolling-updates", title: "Rolling Updates & Rollbacks" },
          { id: "commands-args", title: "Commands and Arguments" },
          { id: "env-vars", title: "Environment Variables" },
          { id: "configmaps", title: "ConfigMaps" },
          { id: "secrets", title: "Secrets" },
          { id: "scale-apps", title: "Scale Applications" },
          { id: "hpa", title: "Horizontal Pod Autoscaler (HPA)" },
          { id: "vpa", title: "Vertical Pod Autoscaler (VPA)" },
          { id: "cluster-autoscaler", title: "Cluster Autoscaler" },
          { id: "keda", title: "Event-Driven Autoscaling with KEDA" },
          { id: "readiness-probes", title: "Readiness Probes" },
          { id: "liveness-probes", title: "Liveness Probes" },
          { id: "multi-container", title: "Multi-Container Pods" },
          { id: "init-containers", title: "Init Containers" }
        ]
      },
      {
        title: "Cluster Maintenance",
        subtopics: [
          { id: "os-upgrades", title: "OS Upgrades" },
          { id: "k8s-versions", title: "Kubernetes Software Versions" },
          { id: "cluster-upgrade", title: "Cluster Upgrade" },
          { id: "backup-restore", title: "Backup and Restore Methods" },
          { id: "etcdctl", title: "ETCDCTL" }
        ]
      },
      {
        title: "Security",
        subtopics: [
          { id: "security-primitives", title: "Kubernetes Security Primitives" },
          { id: "authentication", title: "Authentication" },
          { id: "tls-basics", title: "TLS Basics" },
          { id: "tls-k8s", title: "TLS in Kubernetes" },
          { id: "pki-certs", title: "PKI Certificates & API" },
          { id: "kubeconfig", title: "KubeConfig" },
          { id: "api-groups", title: "API Groups" },
          { id: "rbac", title: "Role-Based Access Controls (RBAC)" },
          { id: "cluster-roles", title: "Cluster Roles" },
          { id: "service-accounts", title: "Service Accounts" },
          { id: "image-security", title: "Image Security" },
          { id: "docker-security", title: "Security in Docker" },
          { id: "security-contexts", title: "Security Contexts" },
          { id: "network-policies", title: "Network Policies" },
          { id: "admission-controllers", title: "Admission Controllers" },
          { id: "kubectx-kubens", title: "Kubectx and Kubens" }
        ]
      },
      {
        title: "Storage",
        subtopics: [
          { id: "volume-plugins", title: "Volume Driver Plugins in Docker" },
          { id: "docker-storage", title: "Docker Storage" },
          { id: "volumes", title: "Volumes" },
          { id: "persistent-volumes", title: "Persistent Volumes (PV)" },
          { id: "pvc", title: "Persistent Volume Claims (PVC)" },
          { id: "pvc-pods", title: "Using PVC in Pods" },
          { id: "storage-classes", title: "Storage Classes" },
          { id: "dynamic-provisioning", title: "Dynamic Volume Provisioning" }
        ]
      },
      {
        title: "Networking",
        subtopics: [
          { id: "networking-basics", title: "Switching, Routing, Gateways" },
          { id: "coredns", title: "CoreDNS" },
          { id: "network-ns", title: "Network Namespaces" },
          { id: "cni", title: "Container Networking Interface (CNI)" },
          { id: "docker-networking", title: "Docker Networking" },
          { id: "cluster-networking", title: "Cluster Networking" },
          { id: "pod-networking", title: "Pod Networking" },
          { id: "weave", title: "Weave" },
          { id: "ipam-weave", title: "IPAM Weave" },
          { id: "ingress", title: "Ingress" },
          { id: "gateway-api-need", title: "The Need for Gateway API" },
          { id: "gateway-api-intro", title: "Introduction to Gateway API & Resource Model" },
          { id: "gateway-config", title: "Configure a Gateway Resource" },
          { id: "gateway-deployment", title: "Expose a Deployment on the Gateway" },
          { id: "traffic-switching", title: "Traffic Switching" }
        ]
      },
      {
        title: "Installation",
        subtopics: [
          { id: "infra-setup", title: "Infrastructure Setup" },
          { id: "cluster-init", title: "Cluster Configuration & Initialization" },
          { id: "cluster-security", title: "Cluster Security & Management" },
          { id: "core-services", title: "Core Services & Tools" },
          { id: "testing", title: "Testing & Validation" },
          { id: "kubeadm-setup", title: "Advanced Setup - Deploy with Kubeadm" },
          { id: "etcd-ha", title: "ETCD in HA" }
        ]
      }
    ],
    certificationProgress: {
      target: "CKA",
      percentage: 0,
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
        title: "Core Concepts",
        subtopics: [
          { id: "ckad-docker-containerd", title: "Docker vs ContainerD", relatedTopics: ["docker-containerd"] },
          { id: "ckad-pods", title: "Pods", relatedTopics: ["pods"] },
          { id: "ckad-replicasets", title: "ReplicaSets", relatedTopics: ["replicasets"] },
          { id: "ckad-deployments", title: "Deployments", relatedTopics: ["deployments"] },
          { id: "ckad-namespaces", title: "Namespaces", relatedTopics: ["namespaces"] },
          { id: "ckad-imperative", title: "Imperative Commands" }
        ]
      },
      {
        title: "Configuration",
        subtopics: [
          { id: "docker-images", title: "Docker Images" },
          { id: "ckad-commands", title: "Commands and Arguments", relatedTopics: ["commands-args"] },
          { id: "ckad-env", title: "Environment Variables", relatedTopics: ["env-vars"] },
          { id: "ckad-configmaps", title: "ConfigMaps", relatedTopics: ["configmaps"] },
          { id: "ckad-secrets", title: "Secrets", relatedTopics: ["secrets"] },
          { id: "ckad-security", title: "Security Contexts", relatedTopics: ["security-contexts"] },
          { id: "ckad-resources", title: "Resource Quotas & Limits", relatedTopics: ["resource-quotas"] },
          { id: "ckad-sa", title: "Service Accounts", relatedTopics: ["service-accounts"] },
          { id: "ckad-taints", title: "Taints and Tolerations", relatedTopics: ["taints-tolerations"] },
          { id: "ckad-node-selector", title: "Node Selectors", relatedTopics: ["node-selectors"] },
          { id: "ckad-affinity", title: "Node Affinity", relatedTopics: ["node-affinity"] },
          { id: "ckad-multi", title: "Multi-Container Pods", relatedTopics: ["multi-container"] },
          { id: "ckad-init", title: "Init Containers", relatedTopics: ["init-containers"] }
        ]
      },
      {
        title: "Observability",
        subtopics: [
          { id: "ckad-readiness", title: "Readiness Probes", relatedTopics: ["readiness-probes"] },
          { id: "ckad-liveness", title: "Liveness Probes", relatedTopics: ["liveness-probes"] },
          { id: "ckad-logs", title: "Managing Application/Container Logs", relatedTopics: ["app-logs"] },
          { id: "ckad-monitor", title: "Monitor Cluster Components", relatedTopics: ["monitor-components"] }
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
        title: "Attack Surface",
        subtopics: [
          { id: "attack-surface", title: "Understanding the Kubernetes Attack Surface" },
          { id: "4c-security", title: "The 4Cs of Cloud Native Security" }
        ]
      },
      {
        title: "Cluster Setup and Hardening",
        subtopics: [
          { id: "cis-bench", title: "CIS Benchmarks, Kube-bench" },
          { id: "cks-auth", title: "Authentication, TLS, PKI, and KubeConfig" },
          { id: "cks-rbac", title: "Authorization: RBAC, ABAC" },
          { id: "cks-network", title: "Network Policies" },
          { id: "cks-admission", title: "Admission Controllers" },
          { id: "cks-docker", title: "Docker & Node Security" }
        ]
      },
      {
        title: "System Hardening",
        subtopics: [
          { id: "least-privilege", title: "Least Privilege Principle" },
          { id: "ssh-hardening", title: "SSH Hardening, Privilege Escalation" },
          { id: "kernel-modules", title: "Restrict Kernel Modules" },
          { id: "security-profiles", title: "Implement Seccomp, AppArmor, SELinux" }
        ]
      },
      {
        title: "Supply Chain Security",
        subtopics: [
          { id: "sbom", title: "SBOM, KubeLinter" },
          { id: "trivy", title: "Scan Images with Trivy" },
          { id: "image-policy", title: "ImagePolicyWebhook" }
        ]
      },
      {
        title: "Runtime Security",
        subtopics: [
          { id: "audit-logs", title: "Audit Logging" },
          { id: "falco", title: "Falco" }
        ]
      }
    ],
    certificationProgress: {
      target: "CKS",
      percentage: 0
    }
  },
  {
    id: "ckna",
    title: "CKNA",
    description: "Certified Kubernetes and Cloud Native Associate",
    dependencies: [],
    position: { x: 100, y: 300 },
    sections: [
      {
        title: "Kubernetes Fundamentals",
        subtopics: [
          { id: "cloud-native", title: "What is Cloud Native?" },
          { id: "containers-intro", title: "What are Containers?" },
          { id: "container-orch", title: "Container Orchestration" },
          { id: "ckna-k8s-arch", title: "Kubernetes Architecture", relatedTopics: ["k8s-arch"] },
          { id: "ckna-cri", title: "Container Runtime Interface (CRI)", relatedTopics: ["cri"] },
          { id: "ckna-docker", title: "Docker vs ContainerD", relatedTopics: ["docker-containerd"] },
          { id: "k8s-resources", title: "Kubernetes Resources" }
        ]
      },
      {
        title: "Scheduling",
        subtopics: [
          { id: "ckna-manual", title: "Manual Scheduling", relatedTopics: ["manual-scheduling"] },
          { id: "ckna-labels", title: "Labels and Selectors", relatedTopics: ["labels-selectors"] },
          { id: "ckna-taints", title: "Taints and Tolerations", relatedTopics: ["taints-tolerations"] },
          { id: "ckna-node-sel", title: "Node Selectors", relatedTopics: ["node-selectors"] },
          { id: "ckna-affinity", title: "Node Affinity", relatedTopics: ["node-affinity"] }
        ]
      },
      {
        title: "Security",
        subtopics: [
          { id: "ckna-sec-prim", title: "Kubernetes Security Primitives", relatedTopics: ["security-primitives"] },
          { id: "ckna-auth", title: "Authentication", relatedTopics: ["authentication"] },
          { id: "ckna-rbac", title: "Role-Based Access Controls (RBAC)", relatedTopics: ["rbac"] },
          { id: "ckna-img-sec", title: "Image Security", relatedTopics: ["image-security"] }
        ]
      },
      {
        title: "Networking",
        subtopics: [
          { id: "ckna-cluster-net", title: "Cluster Networking", relatedTopics: ["cluster-networking"] },
          { id: "ckna-pod-net", title: "Pod Networking", relatedTopics: ["pod-networking"] },
          { id: "ckna-cni", title: "Container Networking Interface (CNI)", relatedTopics: ["cni"] },
          { id: "ckna-dns", title: "DNS", relatedTopics: ["coredns"] },
          { id: "ckna-ingress", title: "Ingress", relatedTopics: ["ingress"] },
          { id: "service-mesh", title: "Service Mesh" }
        ]
      },
      {
        title: "Storage",
        subtopics: [
          { id: "ckna-docker-store", title: "Docker Storage", relatedTopics: ["docker-storage"] },
          { id: "ckna-volumes", title: "Volumes", relatedTopics: ["volumes"] },
          { id: "ckna-pv", title: "Persistent Volumes (PV)", relatedTopics: ["persistent-volumes"] },
          { id: "ckna-pvc", title: "Persistent Volume Claims (PVC)", relatedTopics: ["pvc"] },
          { id: "ckna-sc", title: "Storage Classes", relatedTopics: ["storage-classes"] }
        ]
      },
      {
        title: "Cloud Native Architecture",
        subtopics: [
          { id: "autoscaling", title: "Autoscaling (HPA, VPA)" },
          { id: "serverless", title: "Serverless" },
          { id: "kep", title: "Kubernetes Enhancement Proposals (KEP)" },
          { id: "sig", title: "Kubernetes Special Interest Groups (SIG)" }
        ]
      },
      {
        title: "Observability",
        subtopics: [
          { id: "prometheus", title: "Prometheus" }
        ]
      }
    ]
  }
];