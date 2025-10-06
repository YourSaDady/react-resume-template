// components/UpdatesItem.tsx
import { FC, memo } from 'react';
import { UpdatesItem as UpdatesItemData } from '../../../data/dataDef';

const UpdatesItem: FC<{ item: UpdatesItemData }> = memo(({ item }) => {
  const { date, message, links } = item;

  return (
    <div className="leading-relaxed">
      <span className="font-semibold text-gray-700">[{date}]:</span>{' '}
      <span>{message}</span>{' '}
      {links?.map(({ text, url }, idx) => (
        <a
          key={idx}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {text}
        </a>
      ))}
    </div>
  );
});

UpdatesItem.displayName = 'UpdatesItem';
export default UpdatesItem;