interface Achievement {
  title: string;
  organization: string;
  year: string;
  description: string;
}

interface AchievementCardProps {
  achievement: Achievement;
}

export default function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <div className="border border-gray-700 hover:border-purple-500 transition-colors h-full">
      <div className="p-4">
        <p className="text-gray-400 mb-2">{achievement.year}</p>
        <h3 className="text-xl font-semibold mb-2 hover:text-purple-500 transition-colors">
          {achievement.title}
        </h3>
        <p className="text-purple-500 text-sm mb-2">
          {achievement.organization}
        </p>
        <p className="text-gray-400">{achievement.description}</p>
      </div>
    </div>
  );
}
