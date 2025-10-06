import {FC, memo} from 'react';

import {updates, education, exchange_intern, service, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
// import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';
import SubTimelineItem from './TimelineItem';
import UpdatesItem from './UpdatesItem';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Updates">
          <ul className="list-none pl-0 space-y-1">
            {updates.map((item, index) => (
              <UpdatesItem item={item} key={`${item.date}-${index}`} />
            ))}
          </ul>
        </ResumeSection>
        <ResumeSection title="Education">
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Global">
          {exchange_intern.map((item, index) => (
            <SubTimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Service">
          {service.map((item, index) => (
            <SubTimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        {/* <ResumeSection title="Research Fields">
          {research_fields.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection> */}
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
