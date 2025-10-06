// components/PublistSection.tsx
import { FC, useMemo, useState } from 'react';
import Publist from './Publist';

const fields = ['All', 'EBMs', 'LMs', 'Interpret', 'Reasonin\'&Plannin\'', 'Test-Time']; // extend as needed

const PublistSection: FC<{ items: Publist[] }> = ({ items }) => {
    const [active, setActive] = useState('All');
  
    const visible = useMemo(() => {
      if (active === 'All') return items;
      return items.filter((it) =>
        it.field.split(',').map((f) => f.trim()).includes(active)
      );
    }, [active, items]);
  
    return (
      <div className="w-full bg-neutral-200">
        {/* title + scholar link */}
        <div className="max-w-4xl mx-auto px-4 pt-8 pb-4 text-center">
          <h2 className="text-2xl font-bold text-neutral-900">Recent Works</h2>
          <p className="text-sm text-neutral-700 mt-2">
            For a complete list, please refer to{' '}
            <a
              href="https://scholar.google.com/citations?user=YOUR_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Google Scholar
            </a>
            .
          </p>
        </div>
  
        {/* centred translucent menu bar */}
        <div className="flex justify-center pb-6">
          <div className="inline-flex flex-wrap justify-center gap-2 rounded-full bg-white/60 px-4 py-2 shadow backdrop-blur">
            {fields.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-1.5 text-sm rounded-full transition ${
                  active === f
                    ? 'bg-orange-500 text-white shadow'
                    : 'text-neutral-700 hover:bg-neutral-200/70'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
  
        {/* publication list – no individual panels, only divider lines */}
        <div className="max-w-4xl mx-auto px-4 pb-8">
          {visible.map((it, idx) => (
            <Publist key={`${it.title}-${idx}`} item={it} />
          ))}
        </div>
      </div>
    );
  };
  
  export default PublistSection;