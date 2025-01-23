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
          { id: "cluster-ip", title: "Cluster IP" },
          { id: "load-balancer", title: "Load Balancer" },
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
          { id: "autoscaling", title: "Autoscaling" },
          { id: "hpa", title: "Horizontal Pod Autoscaler (HPA)" },
          { id: "vpa", title: "Vertical Pod Autoscaler (VPA)" },
          { id: "cluster-autoscaler", title: "Cluster Autoscaler" },
          { id: "keda", title: "Event-Driven Autoscaling with KEDA" },
          { id: "readiness-probes", title: "Readiness Probes" },
          { id: "liveness-probes", title: "Liveness Probes" },
          { id: "multi-container", title: "Multi Container PODs" },
          { id: "multi-container-design", title: "Multi-container PODs Design Patterns" },
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
          { id: "validating-mutating", title: "Validating and Mutating Admission Controllers" },
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
          { id: "using-pvc", title: "Using PVC in Pods" },
          { id: "storage-classes", title: "Storage Classes" },
          { id: "dynamic-provisioning", title: "Dynamic Volume Provisioning" }
        ]
      },
      {
        title: "Networking",
        subtopics: [
          { id: "networking-basics", title: "Switching, Routing, Gateways CNI in Kubernetes" },
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
          { id: "gateway-deployment", title: "Expose a deployment on the Gateway" },
          { id: "traffic-switching", title: "Traffic Switching" }
        ]
      },
      {
        title: "Install",
        subtopics: [
          { id: "infra-setup", title: "Infrastructure Setup" },
          { id: "cluster-init", title: "Cluster Configuration & Initialization" },
          { id: "cluster-security", title: "Cluster Security & Management" },
          { id: "core-services", title: "Core Services & Tools" },
          { id: "testing", title: "Testing & Validation" },
          { id: "kubeadm-setup", title: "Advanced Setup - Deploy with Kubeadm" },
          { id: "etcd-ha", title: "ETCD in HA" },
          { id: "helm-overview", title: "Helm Overview" },
          { id: "helm-installation", title: "Helm Installation" },
          { id: "helm-concepts", title: "Helm Concepts" },
          { id: "kustomize-overview", title: "Kustomize Overview" },
          { id: "kustomize-vs-helm", title: "Kustomize vs Helm" },
          { id: "kustomize-installation", title: "Kustomize Installation" },
          { id: "kustomize-yaml", title: "Kustomize.yaml file" },
          { id: "kustomize-output", title: "Kustomize Output" },
          { id: "kustomize-api-version", title: "Kustomize ApiVersion & Kind" },
          { id: "managing-directories", title: "Managing Directories with Kustomize" },
          { id: "common-kustomize-transformers", title: "Common Kustomize Transformers" },
          { id: "kustomize-patches", title: "Kustomize Patches" },
          { id: "kustomize-different-types", title: "Kustomize Different Types of Patches" },
          { id: "kustomize-patches-list", title: "Kustomize Patches List" },
          { id: "kustomize-patches-dictionary", title: "Kustomize Patches Dictionary" },
          { id: "kustomize-overlays", title: "Kustomize Overlays" },
          { id: "kustomize-components", title: "Kustomize Components" },
          { id: "custom-resource-definition", title: "Custom Resource Definition (CRD)" },
          { id: "operator-framework", title: "Operator Framework" }
        ]
      },
      {
        title: "Troubleshooting",
        subtopics: [
          { id: "application-failure", title: "Application Failure" },
          { id: "control-plane-failure", title: "Control Plane Failure" },
          { id: "worker-node-failure", title: "Worker Node Failure" },
          { id: "troubleshoot-services", title: "Troubleshoot Services and Networking" },
          { id: "common-networking-issues", title: "Common Networking Issues" },
          { id: "troubleshooting-api-server", title: "Troubleshooting the API Server, Scheduler" },
          { id: "network-troubleshooting", title: "Network Troubleshooting" }
        ]
      }
    ],
    certificationProgress: {
      target: "CKA",
      percentage: 0,
      contributesTo: {
        "ckad": 72,
        "kcna": 69,
        "cks": 27,
        "kcsa": 40
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
      },
      {
        title: "Pod Design",
        subtopics: [
          { id: "ckad-labels", title: "Labels and Selectors", relatedTopics: ["labels-selectors"] },
          { id: "ckad-rolling-updates", title: "Rolling Updates & Rollbacks", relatedTopics: ["rolling-updates"] },
          { id: "ckad-blue-green", title: "Deployment Strategy - Blue Green" },
          { id: "ckad-canary", title: "Deployment Strategy - Canary" },
          { id: "kustomize-overview", title: "Kustomize Overview" },
          { id: "kustomize-vs-helm", title: "Kustomize vs Helm" },
          { id: "kustomize-installation", title: "Kustomize Installation" },
          { id: "kustomize-overlays", title: "Kustomize Overlays" },
          { id: "kustomize-components", title: "Kustomize Components" },
          { id: "jobs", title: "Jobs" },
          { id: "cron-jobs", title: "Cron Jobs" }
        ]
      },
      {
        title: "Services & Networking",
        subtopics: [
          { id: "services", title: "Services" },
          { id: "network-policies", title: "Network Policies" },
          { id: "ingress", title: "Ingress" }
        ]
      },
      {
        title: "State Persistence",
        subtopics: [
          { id: "volume-plugins", title: "Volume Driver Plugins in Docker" },
          { id: "persistent-volumes", title: "Persistent Volumes (PV)" },
          { id: "persistent-volume-claims", title: "Persistent Volume Claims (PVC)", relatedTopics: ["pvc"] },
          { id: "storage-classes", title: "Storage Classes" },
          { id: "stateful-sets", title: "Stateful Sets" },
          { id: "headless-services", title: "Headless Services" }
        ]
      },
      {
        title: "Security",
        subtopics: [
          { id: "authentication", title: "Authentication" },
          { id: "kubeconfig", title: "KubeConfig" },
          { id: "api-groups", title: "API Groups" },
          { id: "authorization", title: "Authorization" },
          { id: "rbac", title: "Role Based Access Controls (RBAC)" },
          { id: "cluster-roles", title: "Cluster Roles" },
          { id: "admission-controllers", title: "Admission Controllers" },
          { id: "api-versions", title: "API Versions/Deprecations" },
          { id: "custom-resource-definition", title: "Custom Resource Definition (CRD)" },
          { id: "custom-controllers", title: "Custom Controllers" },
          { id: "operator-framework", title: "Operator Framework" }
        ]
      },
      {
        title: "Helm",
        subtopics: [
          { id: "helm-overview", title: "Helm Overview" },
          { id: "install-helm", title: "Install Helm" },
          { id: "helm-charts", title: "Helm Charts" },
          { id: "helm-components", title: "Helm Components" },
          { id: "customizing-helm", title: "Customizing Helm Chart Params" },
          { id: "lifecycle-management", title: "Lifecycle Management with Helm" }
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
    dependencies: [],
    position: { x: 500, y: 100 },
    sections: [
      {
        title: "Kubernetes Fundamentals",
        subtopics: [
          { id: "cloud-native", title: "What is Cloud Native?" },
          { id: "containers-intro", title: "What are Containers?" },
          { id: "container-orch", title: "Container Orchestration" },
          { id: "kcna-k8s-arch", title: "Kubernetes Architecture", relatedTopics: ["k8s-arch"] },
          { id: "kcna-cri", title: "Container Runtime Interface (CRI)", relatedTopics: ["cri"] },
          { id: "kcna-docker", title: "Docker vs ContainerD", relatedTopics: ["docker-containerd"] },
          { id: "k8s-resources", title: "Kubernetes Resources" }
        ]
      },
      {
        title: "Kubernetes Resources",
        subtopics: [
          { id: "kcna-pods", title: "Pods", relatedTopics: ["pods"] },
          { id: "kcna-replicasets", title: "ReplicaSets", relatedTopics: ["replicasets"] },
          { id: "kcna-deployments", title: "Deployments", relatedTopics: ["deployments"] },
          { id: "kcna-rolling-updates", title: "Rolling Updates & Rollbacks", relatedTopics: ["rolling-updates"] },
          { id: "kcna-imp-vs-dec", title: "Imperative vs Declarative", relatedTopics: ["imp-vs-dec"] },
          { id: "kcna-kubectl-apply", title: "Kubectl Apply Command", relatedTopics: ["kubectl-apply"] },
          { id: "kcna-namespaces", title: "Namespaces", relatedTopics: ["namespaces"] }
        ]
      },
      {
        title: "Scheduling",
        subtopics: [
          { id: "kcna-manual", title: "Manual Scheduling", relatedTopics: ["manual-scheduling"] },
          { id: "kcna-labels", title: "Labels and Selectors", relatedTopics: ["labels-selectors"] },
          { id: "kcna-taints", title: "Taints and Tolerations", relatedTopics: ["taints-tolerations"] },
          { id: "kcna-node-sel", title: "Node Selectors", relatedTopics: ["node-selectors"] },
          { id: "kcna-affinity", title: "Node Affinity", relatedTopics: ["node-affinity"] }
        ]
      },
      {
        title: "Security",
        subtopics: [
          { id: "kcna-sec-prim", title: "Kubernetes Security Primitives", relatedTopics: ["security-primitives"] },
          { id: "kcna-auth", title: "Authentication", relatedTopics: ["authentication"] },
          { id: "kcna-kubeconfig", title: "KubeConfig", relatedTopics: ["kubeconfig"] },
          { id: "kcna-api-groups", title: "API Groups", relatedTopics: ["api-groups"] },
          { id: "kcna-authorization", title: "Authorization", relatedTopics: ["authorization"] },
          { id: "kcna-rbac", title: "Role-Based Access Controls (RBAC)", relatedTopics: ["rbac"] },
          { id: "kcna-cluster-roles", title: "Cluster Roles", relatedTopics: ["cluster-roles"] },
          { id: "kcna-service-accounts", title: "Service Accounts", relatedTopics: ["service-accounts"] },
          { id: "kcna-image-security", title: "Image Security", relatedTopics: ["image-security"] },
          { id: "kcna-security-contexts", title: "Security Contexts", relatedTopics: ["security-contexts"] },
          { id: "kcna-network-policies", title: "Network Policies", relatedTopics: ["network-policies"] }
        ]
      },
      {
        title: "Networking",
        subtopics: [
          { id: "kcna-cluster-net", title: "Cluster Networking", relatedTopics: ["cluster-networking"] },
          { id: "kcna-pod-net", title: "Pod Networking", relatedTopics: ["pod-networking"] },
          { id: "kcna-cni", title: "Container Networking Interface (CNI)", relatedTopics: ["cni"] },
          { id: "kcna-weave", title: "Weave", relatedTopics: ["weave"] },
          { id: "kcna-dns", title: "DNS", relatedTopics: ["coredns"] },
          { id: "kcna-ingress", title: "Ingress", relatedTopics: ["ingress"] },
          { id: "kcna-service-mesh", title: "Service Mesh" }
        ]
      },
      {
        title: "Storage",
        subtopics: [
          { id: "kcna-docker-store", title: "Docker Storage", relatedTopics: ["docker-storage"] },
          { id: "kcna-volumes", title: "Volumes", relatedTopics: ["volumes"] },
          { id: "kcna-pv", title: "Persistent Volumes (PV)", relatedTopics: ["persistent-volumes"] },
          { id: "kcna-pvc", title: "Persistent Volume Claims (PVC)", relatedTopics: ["pvc"] },
          { id: "kcna-sc", title: "Storage Classes", relatedTopics: ["storage-classes"] }
        ]
      },
      {
        title: "Cloud Native Architecture",
        subtopics: [
          { id: "autoscaling", title: "Autoscaling (HPA, VPA)" },
          { id: "serverless", title: "Serverless" },
          { id: "kep", title: "Kubernetes Enhancement Proposals (KEP)" },
          { id: "sig", title: "Kubernetes Special Interest Groups (SIG)" },
          { id: "open-standards", title: "Open Standards" }
        ]
      },
      {
        title: "Cloud Native Observability",
        subtopics: [
          { id: "falco", title: "Falco" },
          { id: "slo-sla-sli", title: "SLO/SLA/SLI" },
          { id: "prometheus", title: "Prometheus" },
          { id: "cost-management", title: "Cost Management" }
        ]
      },
      {
        title: "Cloud Native Application Delivery",
        subtopics: [
          { id: "app-delivery-fundamentals", title: "Application Delivery Fundamentals" },
          { id: "gitops", title: "GitOps" },
          { id: "push-pull-deployments", title: "Push vs Pull-based Deployments" },
          { id: "ci-cd-gitops", title: "CI/CD with GitOps" },
          { id: "argocd", title: "ArgoCD" }
        ]
      }
    ],
    certificationProgress: {
      target: "KCNA",
      percentage: 0,
      contributesTo: {
        "ckad": 30,
        "cks": 20,
        "kcsa": 40
      }
    }
  },
  {
    id: "cks",
    title: "CKS",
    description: "Certified Kubernetes Security Specialist",
    dependencies: ["cka"],
    position: { x: 900, y: 100 },
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
    id: "kcsa",
    title: "KCSA",
    description: "Kubernetes and Cloud Native Security Associate",
    dependencies: [],
    position: { x: 700, y: 100 },
    sections: [
      {
        title: "Overview of Cloud Native Security",
        subtopics: [
          { id: "4c-security-kcsa", title: "The 4Cs of Cloud Native Security", relatedTopics: ["4c-security"] },
          { id: "cloud-provider-sec", title: "Cloud Provider Security" },
          { id: "infrastructure-security", title: "Infrastructure Security" },
          { id: "kubernetes-isolation", title: "Kubernetes Isolation Techniques" },
          { id: "artifact-repo-sec", title: "Artifact Repository Security" },
          { id: "image-security", title: "Image Security" },
          { id: "workload-code-security", title: "Workload and Application Code Security" }
        ]
      },
      {
        title: "Kubernetes Cluster Component Security",
        subtopics: [
          { id: "api-server", title: "API Server" },
          { id: "controller-manager", title: "Controller Manager" },
          { id: "scheduler", title: "Scheduler" },
          { id: "kubelet-security", title: "Kubelet Security" },
          { id: "cri", title: "Container Runtime Interface (CRI)" },
          { id: "kube-proxy", title: "Kube Proxy" },
          { id: "etcd", title: "etcd" },
          { id: "container-networking", title: "Container Networking" },
          { id: "kubectl-proxy", title: "Kubectl Proxy & Port Forward" },
          { id: "kubeconfig", title: "KubeConfig" },
          { id: "storage", title: "Storage" }
        ]
      },
      {
        title: "Kubernetes Security Fundamentals",
        subtopics: [
          { id: "pod-security", title: "Pod Security" },
          { id: "authentication", title: "Authentication" },
          { id: "authorization", title: "Authorization" },
          { id: "rbac", title: "Role Based Access Controls (RBAC)" },
          { id: "secrets", title: "Secrets" },
          { id: "namespaces", title: "Namespaces" },
          { id: "resource-quotas", title: "Resource Quotas & Limits" },
          { id: "security-contexts", title: "Security Contexts" },
          { id: "audit-logging", title: "Audit Logging" },
          { id: "network-policies", title: "Network Policies" }
        ]
      },
      {
        title: "Kubernetes Threat Model",
        subtopics: [
          { id: "trust-boundaries", title: "Trust Boundaries and Data Flow" },
          { id: "persistence", title: "Persistence" },
          { id: "dos", title: "Denial of Service (DoS)" },
          { id: "malicious-code", title: "Malicious Code Execution" },
          { id: "compromised-apps", title: "Compromised Applications in Containers" },
          { id: "attacker-network", title: "Attacker on the Network" },
          { id: "sensitive-data", title: "Access to Sensitive Data" },
          { id: "privilege-escalation", title: "Privilege Escalation" }
        ]
      },
      {
        title: "Platform Security",
        subtopics: [
          { id: "minimize-base-image", title: "Minimize base image footprint" },
          { id: "scan-images", title: "Scan images for known vulnerabilities (Trivy)" },
          { id: "falco", title: "Falco" },
          { id: "istio", title: "Istio" },
          { id: "pki-certs", title: "PKI Certificates & API" },
          { id: "tls-k8s", title: "TLS in Kubernetes" },
          { id: "mtls", title: "mTLS" },
          { id: "admission-controllers", title: "Admission Controllers" }
        ]
      },
      {
        title: "Compliance and Security Frameworks",
        subtopics: [
          { id: "compliance-frameworks", title: "Compliance Frameworks" },
          { id: "threat-modelling", title: "Threat Modelling Frameworks" },
          { id: "supply-chain-compliance", title: "Supply Chain Compliance" },
          { id: "automation-tooling", title: "Automation and Tooling" }
        ]
      }
    ],
    certificationProgress: {
      target: "KCSA",
      percentage: 0
    }
  }
];

// Add relationship mapping for common topics
export const topicRelationships: Record<string, string[]> = {
  "k8s-arch": ["k8s-arch-ckad", "k8s-arch-kcna", "k8s-arch-cks", "k8s-arch-kcsa"],
  "docker-containerd": ["docker-containerd-ckad", "docker-containerd-kcna"],
  "etcd": ["etcd-cka", "etcd-cks", "etcd-kcsa"],
  "api-server": ["api-server-cka", "api-server-cks", "api-server-kcsa"],
  "controller-manager": ["controller-manager-cka", "controller-manager-cks", "controller-manager-kcsa"],
  "scheduler": ["scheduler-cka", "scheduler-cks", "scheduler-kcsa"],
  "kubelet": ["kubelet-cka", "kubelet-cks", "kubelet-kcsa"],
  "kube-proxy": ["kube-proxy-cka", "kube-proxy-cks", "kube-proxy-kcsa"],
  "cri": ["cri-cka", "cri-ckad", "cri-kcna", "cri-kcsa"],
  "csi": ["csi-cka", "csi-kcna"],
  "pods": ["pods-cka", "pods-ckad", "pods-kcna"],
  "replicasets": ["replicasets-cka", "replicasets-ckad"],
  "deployments": ["deployments-cka", "deployments-ckad"],
  "services": ["services-cka", "services-ckad"],
  "namespaces": ["namespaces-cka", "namespaces-ckad"],
  "taints-tolerations": ["taints-tolerations-cka", "taints-tolerations-ckad", "taints-tolerations-kcna"],
  "node-selectors": ["node-selectors-cka", "node-selectors-ckad", "node-selectors-kcna"],
  "node-affinity": ["node-affinity-cka", "node-affinity-ckad", "node-affinity-kcna"],
  "security-primitives": ["security-primitives-cka", "security-primitives-kcna", "security-primitives-kcsa"],
  "authentication": ["authentication-cka", "authentication-kcna", "authentication-kcsa"],
  "rbac": ["rbac-cka", "rbac-kcna", "rbac-kcsa"],
  "network-policies": ["network-policies-cka", "network-policies-kcna", "network-policies-kcsa"],
  "admission-controllers": ["admission-controllers-cka", "admission-controllers-kcna", "admission-controllers-kcsa"],
  "image-security": ["image-security-cka", "image-security-kcna", "image-security-kcsa"],
  "pki-certs": ["pki-certs-cka", "pki-certs-kcsa"],
  "tls-k8s": ["tls-k8s-cka", "tls-k8s-kcsa"],
  "kubeconfig": ["kubeconfig-cka", "kubeconfig-kcna", "kubeconfig-kcsa"],
  "volumes": ["volumes-cka", "volumes-ckad", "volumes-kcna"],
  "persistent-volumes": ["persistent-volumes-cka", "persistent-volumes-kcna"],
  "pvc": ["pvc-cka", "pvc-ckad", "pvc-kcna"],
  "storage-classes": ["storage-classes-cka", "storage-classes-kcna"],
  "monitor-components": ["monitor-components-cka", "monitor-components-ckad"],
  "app-logs": ["app-logs-cka", "app-logs-ckad"],
  "readiness-probes": ["readiness-probes-ckad", "readiness-probes-kcna"],
  "liveness-probes": ["liveness-probes-ckad", "liveness-probes-kcna"],
  "keda": ["keda-cka", "keda-kcna"],
  "init-containers": ["init-containers-ckad", "init-containers-kcna"],
  "multi-container": ["multi-container-cka", "multi-container-ckad", "multi-container-kcna"],
  "kustomize-overview": ["kustomize-overview-ckad", "kustomize-overview-kcna"],
  "helm-overview": ["helm-overview-ckad", "helm-overview-kcna"]
};
