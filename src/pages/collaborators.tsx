// // pages/collaborators.tsx  (or app/collaborators/page.tsx)
// import { FC } from 'react';
// import { collaborators } from '../data/data';
// import Section from '../components/Layout/Section';          // ① 引入通用 Section
// import { SectionId } from '../data/data';                    // ② 引入 sectionId（任意字符串即可）

// const CollaboratorsPage: FC = () => (
//   <Section
//     sectionId={SectionId.Collaborators} // 可随意定义，例如 'collaborators'
//     className="bg-neutral-200"          // ③ 浅灰背景
//   >
//     <div className="mx-auto max-w-3xl px-4 py-16">
//       <h1 className="text-2xl font-bold mb-6">Collaborators</h1>
//       <ul className="list-disc list-inside space-y-2">
//         {collaborators.map((c) => (
//           <li key={c.name}>
//             <a
//               href={c.homepagelink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 hover:underline"
//             >
//               {c.name}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   </Section>
// );

// export default CollaboratorsPage;
// pages/collaborators.tsx  (或 app/collaborators/page.tsx)
import { FC } from 'react';
import { collaborators } from '../data/data';
import Section from '../components/Layout/Section';
import { SectionId } from '../data/data';

const CollaboratorsPage: FC = () => (
  <Section sectionId={SectionId.Collaborators} className="bg-neutral-200">
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-2xl font-bold mb-6">Collaborators</h1>
      <ul className="list-disc list-inside space-y-2">
        {collaborators.map((c) => (
          <li key={c.name}>
            <a
              href={c.homepagelink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {c.name}
            </a>
            : {c.message}
          </li>
        ))}
      </ul>
    </div>
  </Section>
);

export default CollaboratorsPage;