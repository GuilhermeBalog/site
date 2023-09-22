import React from 'react';
import ExternalLink from './external-link.js';

interface ExperienceItemProps {
  cardProps?: React.HTMLAttributes<HTMLDivElement>,
  image: {
    url: string,
    width: number,
    height: number,
    alt: string,
  },
  title: string,
  titleSpanProps?: React.HTMLAttributes<HTMLSpanElement>,
  titleProps?: React.HTMLAttributes<HTMLParagraphElement>,
  subtitle: string,
  subtitleProps?: React.HTMLAttributes<HTMLParagraphElement>,
  subtitleSpanProps?: React.HTMLAttributes<HTMLSpanElement>,
  time: string,
  start: Date,
  end?: Date,
  url: string,
  linkedin: string,
  content: {
    title: string,
    text: string,
  }[],
}

export default function ExperienceItem({
  image,
  title,
  titleSpanProps = {},
  titleProps = {},
  subtitle,
  subtitleProps = {},
  subtitleSpanProps = {},
  cardProps = {},
  time,
  start,
  end,
  url,
  linkedin,
  content,
}: ExperienceItemProps) {
  return (
    <>
      <div className="experience-card" {...cardProps}>
        <img
          src={image.url}
          width={image.width}
          height={image.height}
          alt={image.alt}
          className="experience-card__image"
          loading="lazy"
          itemProp="image"
        />

        <div className="experience-card__body">
          <p className="experience-card__title" {...titleProps}>
            <span {...titleSpanProps}>
              {title}
            </span>
          </p>

          <p className="experience-card__subtitle" {...subtitleProps}>
            <span {...subtitleSpanProps}>
              {subtitle}
            </span>
          </p>

          <p className="experience-card__time badge">{time}</p>

          <meta itemProp="startDate" content={start.toJSON()} />

          {end && <meta itemProp="endDate" content={end.toJSON()} />}

          <p className="experience-card__links">
            <ExternalLink
              href={url}
              className="experience-card__link"
              itemProp="url"
              data-emoji="🔗"
            >
              Website
            </ExternalLink>

            <ExternalLink
              href={linkedin}
              className="experience-card__link"
              data-emoji="👥"
            >
              LinkedIn
            </ExternalLink>
          </p>
        </div>
      </div>

      <div>
        {content.map(contentItem =>
          <div key={contentItem.title}>
            <p>
              <strong>{contentItem.title}</strong>
            </p>

            <p className="experience-card__description">
              {contentItem.text}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
