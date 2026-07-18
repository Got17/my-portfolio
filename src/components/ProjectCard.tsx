import React from 'react';
import { Card } from './Card';
import { Button } from './Button';

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  liveUrl,
  className = '',
}) => {
  return (
    <Card className={`project-card glass-panel ${className}`}>
      {imageUrl ? (
        <div className="project-card-image-wrapper">
          <img src={imageUrl} alt={title} className="project-card-image" />
        </div>
      ) : (
        <div className="project-card-image-placeholder">
          <span>💻</span>
        </div>
      )}
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        
        {tags.length > 0 && (
          <div className="project-card-tags">
            {tags.map((tag) => (
              <span key={tag} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="project-card-actions">
          {liveUrl && (
            <Button
              variant="primary"
              onClick={() => window.open(liveUrl, '_blank', 'noopener,noreferrer')}
              className="project-card-btn"
            >
              Demo
            </Button>
          )}
          {githubUrl && (
            <Button
              variant="outline"
              onClick={() => window.open(githubUrl, '_blank', 'noopener,noreferrer')}
              className="project-card-btn"
            >
              GitHub
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};
export default ProjectCard;
