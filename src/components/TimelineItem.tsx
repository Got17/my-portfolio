import React from 'react';

export interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description: string;
  tags?: string[];
  className?: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  company,
  description,
  tags = [],
  className = '',
}) => {
  return (
    <div className={`timeline-item ${className}`}>
      <div className="timeline-marker">
        <div className="timeline-marker-dot"></div>
        <div className="timeline-marker-line"></div>
      </div>
      <div className="timeline-content-wrapper">
        <span className="timeline-year">{year}</span>
        <h3 className="timeline-title">{title}</h3>
        <h4 className="timeline-company">{company}</h4>
        <p className="timeline-description">{description}</p>
        {tags.length > 0 && (
          <div className="timeline-tags">
            {tags.map((tag) => (
              <span key={tag} className="timeline-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default TimelineItem;
