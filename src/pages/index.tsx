import Header from "@/components/ui/header";
import HeroSection from "@/components/ui/hero-section";
import JourneySection from "@/components/ui/journey-section";
import StageDetailSection from "@/components/ui/stage-detail-section";
import Footer from "@/components/ui/footer";
import { BookOpen, Users, Target, Zap, Award, Briefcase, TrendingUp, Globe } from "lucide-react";

// ✅ Using placeholders instead of missing local assets
const studentIcon = "https://via.placeholder.com/300x200?text=Student";
const learnerIcon = "https://via.placeholder.com/300x200?text=Learner";
const internIcon = "https://via.placeholder.com/300x200?text=Intern";
const employeeIcon = "https://via.placeholder.com/300x200?text=Employee";

const Index = () => {
  const stageData = [
    {
      id: "student",
      title: "Student",
      subtitle: "Building Your Foundation",
      description:
        "Start your journey with the right knowledge and skills. Access study materials, connect with peers, and explore career paths.",
      image: studentIcon,
      resources: [
        {
          title: "Study Resources",
          description: "Comprehensive guides, notes, and materials for all subjects",
          icon: <BookOpen className="h-6 w-6 text-primary" />,
        },
        {
          title: "Peer Network",
          description: "Connect with fellow students and form study groups",
          icon: <Users className="h-6 w-6 text-primary" />,
        },
        {
          title: "Career Exploration",
          description: "Discover different career paths and opportunities",
          icon: <Target className="h-6 w-6 text-primary" />,
        },
      ],
      nextStage: "learner",
    },
    {
      id: "learner",
      title: "Learner",
      subtitle: "Expanding Your Skills",
      description:
        "Enhance your expertise with specialized training, certifications, and hands-on experience in your chosen field.",
      image: learnerIcon,
      resources: [
        {
          title: "Skill Development",
          description: "Industry-specific courses and training programs",
          icon: <Zap className="h-6 w-6 text-secondary" />,
        },
        {
          title: "Certifications",
          description: "Professional certifications to boost your credentials",
          icon: <Award className="h-6 w-6 text-secondary" />,
        },
        {
          title: "Projects",
          description: "Hands-on projects to build your portfolio",
          icon: <Target className="h-6 w-6 text-secondary" />,
        },
      ],
      nextStage: "intern",
    },
    {
      id: "intern",
      title: "Intern",
      subtitle: "Gaining Experience",
      description:
        "Bridge the gap between learning and working. Get real-world experience and build professional connections.",
      image: internIcon,
      resources: [
        {
          title: "Internship Portal",
          description: "Access to thousands of internship opportunities",
          icon: <Briefcase className="h-6 w-6 text-accent" />,
        },
        {
          title: "Interview Prep",
          description: "Comprehensive interview preparation and mock sessions",
          icon: <Users className="h-6 w-6 text-accent" />,
        },
        {
          title: "Mentorship",
          description: "Connect with industry professionals for guidance",
          icon: <Target className="h-6 w-6 text-accent" />,
        },
      ],
      nextStage: "employee",
    },
    {
      id: "employee",
      title: "Employee",
      subtitle: "Thriving in Your Career",
      description:
        "Excel in your professional role and continue growing. Access advanced resources for career advancement.",
      image: employeeIcon,
      resources: [
        {
          title: "Career Growth",
          description: "Leadership development and advancement strategies",
          icon: <TrendingUp className="h-6 w-6 text-primary" />,
        },
        {
          title: "Professional Network",
          description: "Build and maintain valuable professional relationships",
          icon: <Globe className="h-6 w-6 text-primary" />,
        },
        {
          title: "Skill Advancement",
          description: "Continuous learning and professional development",
          icon: <Zap className="h-6 w-6 text-primary" />,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <JourneySection />

        {/* Individual Stage Sections */}
        {stageData.map((stage) => (
          <StageDetailSection
            key={stage.id}
            id={stage.id}
            title={stage.title}
            subtitle={stage.subtitle}
            description={stage.description}
            image={stage.image}
            resources={stage.resources}
            nextStage={stage.nextStage}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
