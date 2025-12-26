import { ExternalLink } from 'lucide-react';
import type { Media, MediaCategory } from '../types';

interface MediaCardProps {
  media: Media;
  category: MediaCategory | undefined;
}

const MediaCard = ({ media, category }: MediaCardProps) => {
  return (
    <article className="group relative bg-card rounded-2xl border border-border/60 p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
      <div className="flex items-start gap-4 mb-5">
        {category && (
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/40 flex items-center justify-center text-2xl" aria-label={category.name}>
            {category.icon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-bold text-lg text-card-foreground truncate group-hover:text-primary transition-colors duration-300">
              {media.title}
            </h3>
          </div>
          {category && (
            <p className="text-sm font-medium text-primary/80 mb-2">{category.name}</p>
          )}
          <p className="text-sm text-muted-foreground line-clamp-3">
            {media.description}
          </p>
        </div>

        <a
          href={media.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 w-9 h-9 rounded-xl border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 group-hover:scale-110"
          aria-label={`Visit ${media.title}`}
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
};

export default MediaCard;

