import KnowledgeGraph from "@/components/KnowledgeGraph";

const Index = () => {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Kubernetes Learning Path
          </h1>
          <p className="text-lg text-gray-400">
            Track your progress through the Kubernetes certification ecosystem
          </p>
        </div>
        <KnowledgeGraph />
      </div>
    </div>
  );
};

export default Index;