import { ArrowRight, Star, GitFork, FolderGit2 } from 'lucide-react';

const projects = [
  {
    title: 'AI Traffic Controller',
    tags: ['PYTHON', 'PYTORCH', 'CUDA'],
    desc: 'Distributed neural network utilizing graph attention networks to optimize urban traffic flow across 500+ simulated intersections in real-time.',
    stars: '1.2k',
    forks: '230',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA18_67lOkd5eGmkVp4287fSiDnJHZmXaopB4I-hnxE6A7TpQRLssttQU3w93sAkHnAmCie5PjIhOn5Pu_Iu9tv9D-E8PRVOFrfIYx78yh7kqzBrY-Z8K5h87p9o6JYZGEIn-9gUjshOueaT4GBkG82acXFGnLzLhD2813r6Tzca5F5GIv2RxiNlB0udGoeFgcRO8erNPVm8PJwIcH9Tp0hVVfIrBoGw9D_Log0FkWJyCOkbTDs6KHB3osNI58MS5EaTc-j5EILiCN7'
  },
  {
    title: 'Distributed Ledger Node',
    tags: ['NODE.JS', 'LEVELDB', 'CRYPTO'],
    desc: 'A lightweight, highly concurrent blockchain node implementation focusing on Byzantine fault tolerance and minimal resource footprint.',
    stars: '340',
    forks: '45',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4yfVx4SwlSbP0w6PwH73OceS2mCaucSIjdAeBu8DltTNXfjkf7nBBzn6TQu0vEQGqa4UORH7HOa1ebO_X1o4Mu3d14aBe_LRGBMHrR6zV6iMF6FEW3rn-BAqaIvVwioxTJ-opnWEA_Fxd0XdFEr5RmemCG_cCBuo9B6XLq-oB4UC9I1gVqs1Z03m9BDos4WcwDHt2DMsXeu2LCqNnJT4PLUiX6C4ePfjdP1DkNPm2Gd3qc7VwjZQNIOwx5-v-n6wlQidaDwHhj6WL'
  },
  {
    title: 'GoLang Microservices',
    tags: ['GOLANG', 'GRPC', 'KUBERNETES'],
    desc: 'Event-driven microservice architecture with gRPC communication, demonstrating handling of 10k+ concurrent requests with sub-10ms latency.',
    stars: '890',
    forks: '120',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChASBnIPnRmwH8nxMycy3mRKwQGIy4XprqkQmKExyeKvBBGPPc6qYai_Uep7YtwE4OsPsw5ry1ZudsRFLNKqaqZaxPiTkJ1jgZx06p5Z7spB1-wsZfpYUc0KNzOptDy00b_yWW7Wu5iIBUnIachx5DgaAU7GmOly-7V71AzOzj6DBYb2UVrKdowabOgqDX7I5BkUyW-uu-Nc4jaKAH4jxrAgfDN0YmT4GgU7XXZY-yttAK9eLrBIdRkosnbILyQrxKv5JayTVOpSWP'
  },
  {
    title: 'Component System',
    tags: ['REACT', 'TYPESCRIPT', 'TAILWIND'],
    desc: 'A strictly typed, highly accessible headless UI library designed for brutalist and minimalist web applications.',
    stars: '4.5k',
    forks: '500',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARql4D0zfYXKLspleJZwn8yN8yi9e2x6NFC3_BSexKTtt2LVmgPeomXXy1UPa4E7UHjgdkEI9_jdDqOxC-VBUeIfnPsGMaw8dN-tCxYWrBl139Om6wEtcJVQoSItf3owwge-STbk9DAqRudx3kpcosDli-cEg8OLrFroWCAltNXW2juQLCtu8ALvz0pC1zryP_AIrZnFu-7hOavvrMtI8d3B3PR1IQ_Sy0Nn8vtxalRgqbaV-ORC8zcvtwnnGD1zCj0sLyCo4uaN8V'
  },
  {
    title: 'GraphQL Federation',
    tags: ['APOLLO', 'REDIS', 'DOCKER'],
    desc: 'Unified API gateway aggregating 12 downstream data services into a single, cohesive graph with Redis edge caching.',
    stars: '210',
    forks: '30',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkZ---vUG-jqlW2XHLrad3q4JyHPaqEBseI86fmAFkdtVnwXSRT65GuyAhZAkWwzpIOVWd059kihpXfhuZWPe5dWt4GXsCET95lixCYPtXtHR-ejgJrZkJQoii-AmBgdtpNNoLfeEUk80BjJQ2i1J34EWnYK-iqEfU90uzpBn43WTpPN0YqadEL5rkm30g2BEvQIcwTFdWDe0sxAMZ8XBzQd-xbZgAGmUKIHIPQawKPzc_y-hnUA_C0DGOvSJJ03yq1rHFe4MzDcDI'
  },
  {
    title: 'Rust WASM Engine',
    tags: ['RUST', 'WASM', 'WEBGL'],
    desc: 'High-performance physics calculation engine compiled to WebAssembly, delivering native-like speed to browser-based simulations.',
    stars: '560',
    forks: '80',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBz8GVzfkfPRlGQ9wcJS17vTXF483izdh0HovRQwdAVNlL-e-2Q2fRMYlPUgEDMyFrzMMumgpr4pZVA4PEziyg0p-05X-LRRatLRGkAuvOP7c3kYp5c8aYc1yTZabCe883Pj7vXuT5GPA6Os0hAHVVPoRxP90kVDMVzApwKzBDi3L9TspAbSj74ey3QOjzFeBbt9MLufH_dYrHdjI121wT4C2Wo9crkvhfabpF01yp6u4baxT2BWpWz00C6Ir2l4v2axLRfrDscvTIq'
  }
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-8">
      <div className="mb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
          <FolderGit2 className="text-primary w-8 h-8" />
          Projects Archive
        </h1>
        <p className="text-slate-400 mt-3 max-w-2xl text-lg">
          Algorithmic and architectural case studies. A curated index of distributed systems and implementations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <article key={idx} className="bg-surface border border-border rounded-xl overflow-hidden flex flex-col group hover:border-primary transition-colors">
            <div className="h-48 relative overflow-hidden bg-bg-dark">
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10 opacity-80"></div>
              <img src={project.img} alt={project.title} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-grow mb-6">
                {project.desc}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex gap-4 text-slate-500 text-sm font-medium">
                  <span className="flex items-center gap-1"><Star className="w-4 h-4" /> {project.stars}</span>
                  <span className="flex items-center gap-1"><GitFork className="w-4 h-4" /> {project.forks}</span>
                </div>
                <button className="text-primary font-bold text-sm flex items-center gap-1 group-hover:underline cursor-pointer">
                  View <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
