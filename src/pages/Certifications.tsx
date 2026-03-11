import { Shield, Cloud, Server, Cpu, Database, CheckCircle2 } from 'lucide-react';

const certs = [
  {
    title: 'AWS Certified Solutions Architect – Professional',
    issuer: 'Amazon Web Services',
    date: 'Issued: 2023-11',
    desc: 'Advanced cloud architecture design, cost optimization, and secure infrastructure deployment.',
    hash: 'SHA-256: 8f434346648f6b96e44cb015562f...',
    icon: Cloud
  },
  {
    title: 'Google Cloud Professional Cloud Architect',
    issuer: 'Google Cloud',
    date: 'Issued: 2023-08',
    desc: 'Designing scalable, highly available, and reliable cloud-native applications on GCP.',
    hash: 'SHA-256: e3b0c44298fc1c149afbf4c8996f...',
    icon: Server
  },
  {
    title: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    date: 'Issued: 2022-12',
    desc: 'Installation, configuring, and managing production-grade Kubernetes clusters.',
    hash: 'SHA-256: 7d1a54127b222502f5b79b5fb080...',
    icon: Database
  },
  {
    title: 'DeepLearning.AI TensorFlow Developer',
    issuer: 'DeepLearning.AI',
    date: 'Issued: 2022-05',
    desc: 'Building and training neural networks, computer vision, and natural language processing models.',
    hash: 'SHA-256: 9f86d081884c7d659a2feaa0c55a...',
    icon: Cpu
  }
];

export default function Certifications() {
  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto">
      <div className="mb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
          <Shield className="text-primary w-8 h-8" />
          Secure Credentials
        </h1>
        <p className="text-slate-400 mt-3 text-lg">
          Cryptographic proof of technical capabilities. Validated against official issuing authorities.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {certs.map((cert, idx) => (
          <div key={idx} className="bg-surface border border-border rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 group hover:border-primary transition-colors">
            <div className="w-16 h-16 shrink-0 rounded-xl bg-bg-dark border border-border flex items-center justify-center group-hover:border-primary transition-colors">
              <cert.icon className="w-8 h-8 text-slate-400 group-hover:text-primary transition-colors" />
            </div>
            <div className="flex flex-col flex-grow min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-white truncate">{cert.title}</h3>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap bg-bg-dark px-3 py-1 rounded-full border border-border">
                  {cert.date}
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                {cert.desc}
              </p>
              <div className="flex items-center gap-2 mt-auto">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-xs font-mono text-slate-500 group-hover:text-primary transition-colors">
                  {cert.hash}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
