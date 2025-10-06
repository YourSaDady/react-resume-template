// // components/Sections/Portfolio.tsx
// import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
// import classNames from 'classnames';
// import Image from 'next/image';
// import {FC, memo, useCallback, useState} from 'react';

// // import { isMobile } from '../../config';
// import {portfolioItems, SectionId} from '../../data/data';
// import {PortfolioItem} from '../../data/dataDef';
// // import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
// import Section from '../Layout/Section';

// const Portfolio: FC = memo(() => {
//   const [zoomed, setZoomed] = useState<PortfolioItem | null>(null); // ① 放大状态

//   const closeZoom = useCallback(() => setZoomed(null), []);

//   return (
//     <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
//       <div className="flex flex-col gap-y-8">
//         <h2 className="self-center text-xl font-bold text-white">Check out my life outside the lab here ;)</h2>
//         <div className="w-full columns-2 md:columns-3 lg:columns-4">
//           {portfolioItems.map((item, index) => (
//             <div className="pb-6" key={`${item.title}-${index}`}>
//               <div
//                 className={classNames(
//                   'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
//                 )}
//               >
//                 {/* ② 点击卡片触发放大 */}
//                 <Image
//                   alt={item.title}
//                   className="h-full w-full cursor-pointer"
//                   // onClick={() => setZoomed(item)}
//                   onClick={useCallback(() => setZoomed(item), [item])}
//                   placeholder="blur"
//                   src={item.image}
//                 />
//                 <ItemOverlay item={item} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ③ 全屏遮罩：点击外部关闭 */}
//       {zoomed && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
//           onClick={closeZoom}
//         >
//           <div
//             className="relative max-w-4xl max-h-[90vh] p-4"
//             onClick={(e) => e.stopPropagation()} // 防止点击图片本身关闭
//           >
//             <Image
//               alt={zoomed.title}
//               className="object-contain"
//               fill
//               src={zoomed.image}
//             />
//           </div>
//         </div>
//       )}
//     </Section>
//   );
// });

// Portfolio.displayName = 'Portfolio';
// export default Portfolio;

// /* ---------- 下方 ItemOverlay 无改动 ---------- */
// const ItemOverlay: FC<{item: PortfolioItem}> = memo(
//   ({item: {url, title, description}}) => {
//     /* 原有逻辑保留，仅去掉 target="_blank" 即可 */
//     return (
//       <a
//         className="absolute inset-0 h-full w-full bg-gray-900 transition-all duration-300 opacity-0 hover:opacity-80"
//         href={url}
//         rel="noopener noreferrer"
//         target="_blank"
//       >
//         <div className="relative h-full w-full p-4">
//           <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
//             <h2 className="text-center font-bold text-white">{title}</h2>
//             <p className="text-xs text-white sm:text-sm">{description}</p>
//           </div>
//           <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 text-white sm:bottom-2 sm:right-2" />
//         </div>
//       </a>
//     );
//   },
// );
// components/Sections/Portfolio.tsx
import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, useCallback, useState} from 'react';

import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  const [zoomed, setZoomed] = useState<PortfolioItem | null>(null);

  /* ---------- Hooks must be at top level ---------- */
  const closeZoom = useCallback(() => setZoomed(null), []);

  // factory: returns the click handler for a *specific* item
  const handleZoom = useCallback(
    (item: PortfolioItem) => () => setZoomed(item),
    []
  );

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Check out my life outside the lab here ;)</h2>
        <div className="w-full columns-2 md:columns-3 lg:columns-4">
          {portfolioItems.map((item, index) => (
            <div className="pb-6" key={`${item.title}-${index}`}>
              <div
                className={classNames(
                  'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl'
                )}
              >
                <Image
                  alt={item.title}
                  className="h-full w-full cursor-pointer"
                  onClick={handleZoom(item)} // ✅ factory call
                  placeholder="blur"
                  src={item.image}
                />
                <ItemOverlay item={item} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Zoom overlay */}
      {zoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={closeZoom}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image alt={zoomed.title} className="object-contain" fill src={zoomed.image} />
          </div>
        </div>
      )}
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

/* ---------- ItemOverlay ---------- */
const ItemOverlay: FC<{ item: PortfolioItem }> = memo(
  ({item: {url, title, description}}) => (
    <a
      className="absolute inset-0 h-full w-full bg-gray-900 transition-all duration-300 opacity-0 hover:opacity-80"
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="relative h-full w-full p-4">
        <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
          <h2 className="text-center font-bold text-white">{title}</h2>
          <p className="text-xs text-white sm:text-sm">{description}</p>
        </div>
        <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 text-white sm:bottom-2 sm:right-2" />
      </div>
    </a>
  )
);