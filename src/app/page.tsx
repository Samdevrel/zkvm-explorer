'use client';

import { useState } from 'react';

interface Computation {
  id: string;
  name: string;
  description: string;
  language: string;
  executionTime: number;
  proofSize: string;
  verificationTime: number;
  status: 'proven' | 'verifying' | 'verified';
}

interface zkVMStats {
  totalComputation: number;
  totalProofsGenerated: number;
  averageVerificationTime: string;
  totalDataProcessed: string;
}

const computations: Computation[] = [
  {
    id: 'ZKV-001',
    name: 'Machine Learning Inference',
    description: 'Run neural network inference on Ethereum data without revealing inputs.',
    language: 'Python + ZK-CIRCUIT',
    executionTime: 2.3,
    proofSize: '1.2 MB',
    verificationTime: 45,
    status: 'verified',
  },
  {
    id: 'ZKV-002',
    name: 'Secret Voting',
    description: 'Cryptographically prove votes without revealing voter identities.',
    language: 'Solidity + Circuit',
    executionTime: 1.8,
    proofSize: '0.8 MB',
    verificationTime: 38,
    status: 'verified',
  },
  {
    id: 'ZKV-003',
    name: 'Private Credential Verification',
    description: 'Prove education credentials without sharing personal data.',
    language: 'Rust + ZK-CIRCUIT',
    executionTime: 3.2,
    proofSize: '2.1 MB',
    verificationTime: 67,
    status: 'proven',
  },
  {
    id: 'ZKV-004',
    name: 'Encrypted Data Aggregation',
    description: 'Aggregate encrypted analytics without decrypting individual data.',
    language: 'Go + zkVM',
    executionTime: 4.5,
    proofSize: '3.4 MB',
    verificationTime: 89,
    status: 'verifying',
  },
];

const zkVMStats: zkVMStats = {
  totalComputation: 1247,
  totalProofsGenerated: 1247,
  averageVerificationTime: '48ms',
  totalDataProcessed: '2.4 PB',
};

export default function Home() {
  const [selectedComp, setSelectedComp] = useState<Computation | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const runComputation = async () => {
    setIsRunning(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsRunning(false);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="border-b-4 border-blue-400 bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black">zkVM Explorer</h1>
          <p className="text-gray-400 mt-2">General-purpose zero-knowledge computation on Ethereum</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-900 border-4 border-blue-400 p-4 text-center">
            <div className="text-3xl font-black text-blue-400">1,247</div>
            <div className="text-sm text-gray-400">Total Computations</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">1,247</div>
            <div className="text-sm text-gray-400">Proofs Generated</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black text-green-400">48ms</div>
            <div className="text-sm text-gray-400">Avg Verification</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">2.4 PB</div>
            <div className="text-sm text-gray-400">Data Processed</div>
          </div>
        </section>

        {/* zkVM Stats */}
        <section className="bg-gray-900 border-4 border-blue-400 p-6">
          <h2 className="text-xl font-black text-blue-400 mb-4">zkVM Network Stats</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-800 border-2 border-gray-700">
              <div className="text-sm text-gray-400">Total Computations</div>
              <div className="text-2xl font-bold">{zkVMStats.totalComputation.toLocaleString()}</div>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-700">
              <div className="text-sm text-gray-400">Proofs Generated</div>
              <div className="text-2xl font-bold">{zkVMStats.totalProofsGenerated.toLocaleString()}</div>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-700">
              <div className="text-sm text-gray-400">Avg Verification Time</div>
              <div className="text-2xl font-bold text-blue-400">{zkVMStats.averageVerificationTime}</div>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-700">
              <div className="text-sm text-gray-400">Total Data Processed</div>
              <div className="text-2xl font-bold">{zkVMStats.totalDataProcessed}</div>
            </div>
          </div>
        </section>

        {/* Compute button */}
        <button
          onClick={runComputation}
          disabled={isRunning}
          className="w-full py-4 bg-blue-500 text-white font-bold border-4 border-blue-400 hover:bg-blue-400 disabled:opacity-50 disabled:cursor-not-allowed text-xl"
        >
          {isRunning ? 'Running zkVM Computation...' : 'Run zkVM Computation'}
        </button>

        {/* Computations */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">Computation Examples</h2>
          <div className="space-y-4">
            {computations.map((comp) => (
              <div
                key={comp.id}
                onClick={() => setSelectedComp(comp)}
                className={`p-4 border-4 cursor-pointer transition-all ${
                  selectedComp?.id === comp.id
                    ? 'bg-blue-900/30 border-blue-400'
                    : 'bg-gray-800 border-gray-600 hover:border-gray-500'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-xs text-gray-400">{comp.id}</span>
                    <h3 className="font-bold text-blue-400">{comp.name}</h3>
                  </div>
                  <span className={`px-2 py-1 text-xs font-bold ${
                    comp.status === 'verified' ? 'bg-green-900 text-green-400' :
                    comp.status === 'proven' ? 'bg-yellow-900 text-yellow-400' :
                    'bg-blue-900 text-blue-400'
                  }`}>
                    {comp.status.toUpperCase()}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-3">{comp.description}</p>
                <div className="grid grid-cols-4 gap-2 text-xs text-gray-400">
                  <div>
                    <div className="text-gray-500">Language</div>
                    <div className="font-bold text-white">{comp.language}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Execution Time</div>
                    <div className="font-bold">{comp.executionTime}s</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Proof Size</div>
                    <div className="font-bold">{comp.proofSize}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Verification</div>
                    <div className="font-bold">{comp.verificationTime}ms</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Computation */}
        {selectedComp && (
          <section className="bg-gray-900 border-4 border-blue-400 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-black text-blue-400">{selectedComp.name}</h2>
                <p className="text-sm text-gray-400">{selectedComp.id}</p>
              </div>
              <button
                onClick={() => setSelectedComp(null)}
                className="px-4 py-2 bg-gray-700 text-white font-bold border-2 border-gray-600 hover:bg-gray-600"
              >
                Close
              </button>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400 mb-1">Description</div>
                <p className="text-white">{selectedComp.description}</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-3 bg-gray-800 border border-gray-700">
                  <div className="text-sm text-gray-400">Language</div>
                  <div className="font-bold">{selectedComp.language}</div>
                </div>
                <div className="p-3 bg-gray-800 border border-gray-700">
                  <div className="text-sm text-gray-400">Execution Time</div>
                  <div className="font-bold">{selectedComp.executionTime}s</div>
                </div>
                <div className="p-3 bg-gray-800 border border-gray-700">
                  <div className="text-sm text-gray-400">Proof Size</div>
                  <div className="font-bold">{selectedComp.proofSize}</div>
                </div>
                <div className="p-3 bg-gray-800 border border-gray-700">
                  <div className="text-sm text-gray-400">Verification</div>
                  <div className="font-bold text-blue-400">{selectedComp.verificationTime}ms</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* How zkVM Works */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">How zkVM Works</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">1️⃣</div>
              <h3 className="font-bold text-blue-400 mb-2">Compile to Circuit</h3>
              <p className="text-xs text-gray-400">Convert code to zero-knowledge circuit</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">2️⃣</div>
              <h3 className="font-bold text-purple-400 mb-2">Run Off-Chain</h3>
              <p className="text-xs text-gray-400">Execute computation privately</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">3️⃣</div>
              <h3 className="font-bold text-green-400 mb-2">Generate Proof</h3>
              <p className="text-xs text-gray-400">Prove correctness without data</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">4️⃣</div>
              <h3 className="font-bold text-orange-400 mb-2">Verify on Ethereum</h3>
              <p className="text-xs text-gray-400">Single proof = all executions</p>
            </div>
          </div>
        </section>

        {/* Real-World Use Cases */}
        <section className="bg-gray-900 border-4 border-purple-400 p-6">
          <h2 className="text-xl font-black text-purple-400 mb-4">Real-World Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-800 border-2 border-gray-700">
              <div className="text-2xl mb-2">🔐</div>
              <h3 className="font-bold text-blue-400 mb-2">Privacy-Preserving AI</h3>
              <p className="text-sm text-gray-400">Run ML inference on sensitive data without exposing inputs</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-700">
              <div className="text-2xl mb-2">🗳️</div>
              <h3 className="font-bold text-purple-400 mb-2">Secret Voting</h3>
              <p className="text-sm text-gray-400">Cryptographically prove votes without revealing identities</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-700">
              <div className="text-2xl mb-2">🎓</div>
              <h3 className="font-bold text-green-400 mb-2">Credential Verification</h3>
              <p className="text-sm text-gray-400">Verify education without sharing personal data</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-8 border-t border-gray-800">
          <p>
            Built by <a href="https://x.com/samdevrel" className="text-blue-400 hover:underline">@samdevrel</a>
          <button
            onClick={() => window.location.href = '/docs/overview'}
            className="w-full py-4 bg-purple-500 text-white font-bold border-4 border-purple-400 hover:bg-purple-400 mb-4"
          >
            {buttonText}
          </button>
                    </p>
        </footer>
      </div>
    </main>
  );
}
