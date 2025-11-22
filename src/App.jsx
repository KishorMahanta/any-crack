import React, { useState } from 'react';
import { Shield, Lock, Unlock, AlertTriangle } from 'lucide-react';
import './App.css';

function App() {
  const [userId, setUserId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);
  const [logs, setLogs] = useState([]);

  const generatePassword = (id) => {
    let hash = 0;
    for (let i = 0; i < id.length; i++) {
      hash = ((hash << 5) - hash) + id.charCodeAt(i);
      hash = hash & hash;
    }
    
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    let seed = Math.abs(hash);
    
    for (let i = 0; i < 12; i++) {
      seed = (seed * 9301 + 49297) % 233280;
      password += chars[Math.floor((seed / 233280) * chars.length)];
    }
    
    return password;
  };

  const addLog = (msg, delay) => {
    setTimeout(() => {
      setLogs(prev => [...prev, msg]);
    }, delay);
  };

  const simulateCrack = async () => {
    if (!userId.trim()) return;
    
    setIsProcessing(true);
    setProgress(0);
    setResult(null);
    setLogs([]);

    addLog('> Initializing ANY-CRACK v2.1.4...', 100);
    addLog('> Loading encryption modules...', 400);
    addLog('> Connecting to shadow database...', 800);
    addLog(`> Target ID: ${userId}`, 1200);
    addLog('> Starting brute force algorithm...', 1600);
    addLog('> Testing hash combinations...', 2000);
    
    const intervals = [25, 50, 75, 90, 100];
    intervals.forEach((val, idx) => {
      setTimeout(() => setProgress(val), 2200 + (idx * 300));
    });

    addLog('> Decrypting password hash...', 2400);
    addLog('> Bypassing security protocols...', 2800);
    addLog('> PASSWORD CRACKED!', 3400);

    setTimeout(() => {
      const password = generatePassword(userId);
      setResult({
        userId,
        password,
        strength: 'High',
        encrypted: true
      });
      setIsProcessing(false);
    }, 3600);
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto mb-6 bg-red-50 border-2 border-red-500 rounded-lg p-4 flex items-start gap-3">
        <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={24} />
        <div>
          <h3 className="font-bold text-red-800 text-lg">⚠️ PASSWORD-CRACKING TOOL</h3>
          <p className="text-red-700 text-sm mt-1">
            This is a SIMULATED for entertainment/education. It does  actually crack passwords or breach any security in IG.
            All "passwords" are actual generated based on the input. Never attempt actual unauthorized access to systems.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-gray-50 border-2 border-gray-800 rounded-lg overflow-hidden shadow-2xl">
        <div className="bg-gray-900 text-white p-6 border-b-4 border-red-600">
          <div className="flex items-center gap-3">
            <Shield size={32} className="text-red-500" />
            <div>
              <h1 className="text-3xl font-bold tracking-wider">ANY-CRACK-IG</h1>
              <p className="text-gray-400 text-sm">Simulated Password Recovery Tool v2.1.4</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white border-b-2 border-gray-300">
          <label className="block text-gray-800 font-semibold mb-2 text-lg">
            TARGET USER ID:
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter any user ID..."
              className="flex-1 px-4 py-3 border-2 border-gray-800 rounded text-gray-900 font-mono text-lg focus:outline-none focus:border-red-600"
              disabled={isProcessing}
              onKeyPress={(e) => e.key === 'Enter' && simulateCrack()}
            />
            <button
              onClick={simulateCrack}
              disabled={isProcessing || !userId.trim()}
              className="px-8 py-3 bg-red-600 text-white font-bold rounded border-2 border-red-700 hover:bg-red-700 disabled:bg-gray-400 disabled:border-gray-500 transition-colors text-lg"
            >
              {isProcessing ? 'CRACKING...' : 'CRACK'}
            </button>
          </div>
        </div>

        {isProcessing && (
          <div className="p-6 bg-gray-100 border-b-2 border-gray-300">
            <div className="mb-2 flex justify-between text-sm font-mono text-gray-700">
              <span>PROGRESS:</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-6 border-2 border-gray-800 overflow-hidden">
              <div
                className="bg-gradient-to-r from-red-500 to-red-600 h-full transition-all duration-300 flex items-center justify-center"
                style={{ width: `${progress}%` }}
              >
                {progress > 10 && (
                  <span className="text-white text-xs font-bold">{progress}%</span>
                )}
              </div>
            </div>
          </div>
        )}

        {logs.length > 0 && (
          <div className="p-6 bg-black border-b-2 border-gray-300">
            <div className="font-mono text-sm space-y-1 max-h-48 overflow-y-auto">
              {logs.map((log, idx) => (
                <div key={idx} className="text-green-400">
                  {log}
                </div>
              ))}
            </div>
          </div>
        )}

        {result && (
          <div className="p-6 bg-green-50 border-b-2 border-green-500">
            <div className="flex items-center gap-3 mb-4">
              <Unlock size={32} className="text-green-600" />
              <h2 className="text-2xl font-bold text-green-800">ACCESS GRANTED</h2>
            </div>
            
            <div className="bg-white border-2 border-green-600 rounded-lg p-4 space-y-3">
              <div className="grid grid-cols-2 gap-4 text-lg">
                <div>
                  <span className="font-semibold text-gray-700">USER ID:</span>
                  <div className="font-mono text-gray-900 mt-1">{result.userId}</div>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">STATUS:</span>
                  <div className="font-mono text-green-600 mt-1">CRACKED ✓</div>
                </div>
              </div>
              
              <div className="pt-3 border-t-2 border-gray-200">
                <span className="font-semibold text-gray-700 text-lg">RECOVERED PASSWORD:</span>
                <div className="mt-2 p-4 bg-gray-900 rounded border-2 border-gray-700">
                  <code className="text-green-400 text-2xl font-mono font-bold tracking-wider">
                    {result.password}
                  </code>
                </div>
              </div>

              <div className="flex gap-4 text-sm pt-2">
                <div>
                  <span className="text-gray-600">Encryption:</span>
                  <span className="ml-2 font-mono text-gray-900">SHA-256</span>
                </div>
                <div>
                  <span className="text-gray-600">Strength:</span>
                  <span className="ml-2 font-mono text-gray-900">{result.strength}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="p-4 bg-gray-900 text-gray-400 text-center text-sm">
          <Lock size={16} className="inline mr-2" />
          Remember: This is a SIMULATION. Real password cracking is illegal and unethical .
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-6 text-center text-gray-600 text-sm">
        <p className="font-semibold">This tool demonstrates movie-style "hacking" visualization only.</p>
        <p className="mt-1"> Actual passwords are accessed. All results are generated then decode the code in text format.</p>
      </div>
    </div>
  );
}

export default App;