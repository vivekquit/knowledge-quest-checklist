export interface Course {
  id: string;
  title: string;
  description: string;
  dependencies: string[];
  position: { x: number; y: number };
}

export const courses: Course[] = [
  {
    id: "k8s-intro",
    title: "Kubernetes Basics",
    description: "Introduction to Kubernetes and container orchestration",
    dependencies: [],
    position: { x: 300, y: 100 },
  },
  {
    id: "pods",
    title: "Pods & Containers",
    description: "Working with Pods and Containers in Kubernetes",
    dependencies: ["k8s-intro"],
    position: { x: 200, y: 200 },
  },
  {
    id: "deployments",
    title: "Deployments",
    description: "Managing application deployments in Kubernetes",
    dependencies: ["pods"],
    position: { x: 400, y: 200 },
  },
  {
    id: "services",
    title: "Services & Networking",
    description: "Kubernetes networking and service discovery",
    dependencies: ["pods"],
    position: { x: 300, y: 300 },
  },
  {
    id: "storage",
    title: "Storage",
    description: "Persistent storage in Kubernetes",
    dependencies: ["pods"],
    position: { x: 500, y: 300 },
  },
];