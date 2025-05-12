import ProjectDetailContent from "../../components/ProjectDetailContent";
import ReactPlayer from 'react-player';

const projectDetails = {
  'onside-events': {
    title: 'Onside Events',
    video: 'https://fra.cloud.appwrite.io/v1/storage/buckets/670e7068001eb54a1075/files/6820c4400032f3fba73e/view?project=66bcc317000e93b4164f&mode=admin', // Replace with actual video URL
    features: {
      screens: '50 screens',
      database: 'Firebase integration',
      onboarding: 'Interactive user onboarding',
      authentication: 'Email login',
      analytics: 'Real-time usage analytics',
    },
  },
  'phanda-platform': {
    title: 'Phanda Platform',
    video: 'https://fra.cloud.appwrite.io/v1/storage/buckets/670e7068001eb54a1075/files/6820dc260011483603c5/view?project=66bcc317000e93b4164f&mode=admin', // Replace with actual video URL
    features: {
      screens: '12 screens',
      database: 'Firebase integration',
      onboarding: 'Sign Up',
      authentication: 'Email login',
    },
  },
  'signature-events': {
    title: 'Signature Events',
    video: 'https://fra.cloud.appwrite.io/v1/storage/buckets/670e7068001eb54a1075/files/6820dcd2001436525cb3/view?project=66bcc317000e93b4164f&mode=admin', // Replace with actual video URL
    features: {
      screens: '30 screens',
      database: 'Firebase & SQLite integration',
    },
  },
};

export default function ProjectDetail({ params }) {
  console.log('Params:', params);
  const project = projectDetails[params?.slug];

  if (!project) {
    return (
      <main className="min-h-screen bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-8">Project Not Found</h1>
          <p className="text-lg">The project you are looking for does not exist.</p>
        </div>
      </main>
    );
  }

  return <ProjectDetailContent project={project} />;
}