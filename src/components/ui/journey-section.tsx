import StageCard from "./stage-card";
const studentIcon = "https://via.placeholder.com/150?text=Student";
const learnerIcon = "https://via.placeholder.com/150?text=Learner";
const internIcon = "https://via.placeholder.com/150?text=Intern";
const employeeIcon = "https://via.placeholder.com/150?text=Employee";
const JourneySection = () => {
  const stages = [
    {
      id: "student",
      title: "Student",
      description: "Build your foundation with essential skills and knowledge",
      image: studentIcon,
      features: [
        "Academic resources and study guides",
        "Skill assessment and gap analysis",
        "Career exploration tools",
        "Networking opportunities with peers"
      ]
    },
    {
      id: "learner",
      title: "Learner",
      description: "Enhance your expertise with specialized courses and training",
      image: learnerIcon,
      features: [
        "Industry-specific training programs",
        "Certification preparation",
        "Hands-on project experience",
        "Mentor matching and guidance"
      ]
    },
    {
      id: "intern",
      title: "Intern",
      description: "Gain real-world experience and build professional connections",
      image: internIcon,
      features: [
        "Internship opportunity database",
        "Application tracking system",
        "Interview preparation resources",
        "Performance feedback tools"
      ]
    },
    {
      id: "employee",
      title: "Employee",
      description: "Excel in your career with continuous growth and development",
      image: employeeIcon,
      features: [
        "Job matching and recommendations",
        "Professional development plans",
        "Leadership training programs",
        "Career advancement strategies"
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Career Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every great career starts with a single step. Let us guide you through 
            each stage of your professional development.
          </p>
        </div>

        {/* Journey Progress Visualization */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 journey-gradient transform -translate-y-1/2"></div>
            <div className="flex justify-between items-center">
              {stages.map((stage, index) => (
                <div key={stage.id} className="relative z-10 flex flex-col items-center">
                  <div className={`stage-dot ${index === 0 ? 'active' : ''}`}></div>
                  <span className="mt-2 text-sm font-medium text-center">
                    {stage.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stages.map((stage, index) => (
            <StageCard
              key={stage.id}
              title={stage.title}
              description={stage.description}
              image={stage.image}
              features={stage.features}
              isActive={index === 0}
              stage={stage.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;