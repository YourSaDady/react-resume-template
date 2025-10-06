// import classNames from 'classnames';
// import Image from 'next/image';
// import { FC, memo } from 'react';
// import {Publist} from '../../data/dataDef'

// const Publist: FC<{ item: Publist }> = memo(({ item }) => {
//     const { title, authors, imageSrc, paperlink, codelink, demolink, conference } = item;
  
//     return (
//       <div className="flex justify-center pb-6 border-b-2 last:border-0 last:pb-0">
//         {/* inner flex: left image | right text block */}
//         <div className="flex items-start gap-4 max-w-4xl w-full">
//           {/* left image - add top margin to create gap from line above */}
//           <div className="relative w-64 h-36 rounded border border-neutral-300 overflow-hidden shrink-0 mt-5">
//             <Image src={imageSrc} alt={title} fill className="object-cover" />
//           </div>
  
//           {/* right text block */}
//           <div className="flex flex-col text-m mt-4">
//             <h3 className="text-base font-bold text-neutral-800">{title}</h3>
//             <p className="text-sm text-neutral-700 mt-1">{authors}</p>
//             <p className="text-xs text-neutral-600 mb-2">{conference}</p>
  
//             {/* buttons */}
//             <div className="flex flex-wrap gap-2 mt-auto">
//               <a
//                 href={paperlink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-3 py-1 text-sm rounded bg-blue-600 text-white hover:bg-blue-700"
//               >
//                 Paper
//               </a>
//               <a
//                 href={codelink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-3 py-1 text-sm rounded bg-gray-700 text-white hover:bg-gray-600"
//               >
//                 Code
//               </a>
//               {demolink && (
//                 <a
//                   href={demolink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700"
//                 >
//                   Demo
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   });
  
// Publist.displayName = 'Publist';
// export default Publist;
// import classNames from 'classnames';
import Image from 'next/image';
import { FC, memo } from 'react';
import { Publist } from '../../data/dataDef';

const Publist: FC<{ item: Publist }> = memo(({ item }) => {
  const { title, authors, imageSrc, paperlink, codelink, demolink, conference } = item;

  return (
    <div className="flex justify-center pb-6 border-b-2 last:border-0 last:pb-0">
      {/* inner flex: left image | right text block */}
      <div className="flex items-start gap-4 max-w-4xl w-full">
        {/* left image - 64:36 frame, fully filled (stretched + cropped) */}
        <div className="relative w-64 h-36 rounded border border-neutral-300 overflow-hidden shrink-0 mt-5">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover object-center"
          />
        </div>

        {/* right text block */}
        <div className="flex flex-col text-m mt-4">
          <h3 className="text-base font-bold text-neutral-800">{title}</h3>
          <p className="text-sm text-neutral-700 mt-1">{authors}</p>
          <p className="text-xs text-neutral-600 mb-2">{conference}</p>

          {/* buttons */}
          <div className="flex flex-wrap gap-2 mt-auto">
            <a
              href={paperlink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-sm rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Paper
            </a>
            <a
              href={codelink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-sm rounded bg-gray-700 text-white hover:bg-gray-600"
            >
              Code
            </a>
            {demolink && (
              <a
                href={demolink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700"
              >
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

Publist.displayName = 'PublistItem';
export default Publist;