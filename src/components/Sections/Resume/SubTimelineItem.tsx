import {FC, memo} from 'react';
import {SubTimelineItem as SubTimelineItemData} from '../../../data/dataDef';

const SubTimelineItem: FC<{item: SubTimelineItemData}> = memo(({item}) => {
  const {title, date, location, content} = item;
  const showDot = location?.trim() && date?.trim();   // ← both present

  return (
    <div className="flex flex-col pb-3 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-1">
        <h2 className="text-m font-bold">{title}</h2>

        {(location || date) && (
          <div className="flex items-center justify-center gap-x-2 md:justify-start">
            {location && (
              <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
            )}
            {showDot && <span>•</span>}          {/* ← only when both exist */}
            {date && (
              <span className="flex-1 text-sm sm:flex-none">{date}</span>
            )}
          </div>
        )}
      </div>
      {content}
    </div>
  );
});

SubTimelineItem.displayName = 'SubTimelineItem';
export default SubTimelineItem;