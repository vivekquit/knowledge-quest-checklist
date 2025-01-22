export interface Course {
  id: string;
  title: string;
  description: string;
  dependencies: string[];
  position: { x: number; y: number };
  certificationProgress?: {
    target: string;
    percentage: number;
  };
}

export const courses: Course[] = [
  {
    id: "cka",
    title: "CKA",
    description: "Certified Kubernetes Administrator - Core concepts and cluster management",
    dependencies: [],
    position: { x: 100, y: 100 },
  },
  {
    id: "ckad",
    title: "CKAD",
    description: "Certified Kubernetes Application Developer",
    dependencies: ["cka"],
    position: { x: 300, y: 100 },
    certificationProgress: {
      target: "CKAD",
      percentage: 72
    }
  },
  {
    id: "kcna",
    title: "KCNA",
    description: "Kubernetes and Cloud Native Associate",
    dependencies: ["cka"],
    position: { x: 500, y: 100 },
    certificationProgress: {
      target: "KCNA",
      percentage: 69
    }
  },
  {
    id: "cks",
    title: "CKS",
    description: "Certified Kubernetes Security Specialist",
    dependencies: ["cka"],
    position: { x: 700, y: 100 },
    certificationProgress: {
      target: "CKS",
      percentage: 27
    }
  },
  {
    id: "kcsa",
    title: "KCSA",
    description: "Kubernetes Cloud Security Associate",
    dependencies: ["cks"],
    position: { x: 900, y: 100 },
    certificationProgress: {
      target: "KCSA",
      percentage: 40
    }
  }
];