export interface Course {
  id: string;
  title: string;
  description: string;
  dependencies: string[];
  position: { x: number; y: number };
  certificationProgress?: {
    target: string;
    percentage: number;
    contributesTo?: {
      [key: string]: number; // courseId: contribution percentage
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
    certificationProgress: {
      target: "KCSA",
      percentage: 0
    }
  }
];