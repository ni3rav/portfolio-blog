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
    <div className="border border-surface1 hover:border-mauve transition-colors h-full">
      <div className="p-4">
        <p className="text-subtext0 mb-2">{achievement.year}</p>
        <h3 className="text-xl font-semibold mb-2 hover:text-mauve transition-colors">
          {achievement.title}
        </h3>
        <p className="text-mauve text-sm mb-2">
          {achievement.organization}
        </p>
        <p className="text-subtext0">{achievement.description}</p>
      </div>
    </div>
  );
}
