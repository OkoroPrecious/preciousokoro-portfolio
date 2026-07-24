// import { IconType } from "react-icons";

// interface Technology {
//   name: string;
//   icon: IconType;
// }

// interface TechnologyCardProps {
//   category: string;
//   technologies: Technology[];
// }

// export default function TechnologyCard({
//   category,
//   technologies,
// }: TechnologyCardProps) {
//   return (
//     <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/40 hover:shadow-xl">
//       <h3 className="mb-8 text-2xl font-bold text-white">
//         {category}
//       </h3>

//       <div className="grid gap-4">
//         {technologies.map((tech) => {
//           const Icon = tech.icon;

//           return (
//             <div
//               key={tech.name}
//               className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950 px-5 py-4 transition-all duration-300 hover:border-amber-500/40 hover:bg-slate-800"
//             >
//               <Icon
//                 size={24}
//                 className="text-amber-400"
//               />

//               <span className="font-medium text-slate-200">
//                 {tech.name}
//               </span>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }