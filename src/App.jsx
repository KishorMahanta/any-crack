import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Shield, Lock, Unlock, AlertTriangle, Copy, Check } from 'lucide-react';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import './App.css';

function Home() {
  const [userId, setUserId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);
  const [logs, setLogs] = useState([]);
  const [copied, setCopied] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [decodedPassword, setDecodedPassword] = useState(null);

  // Instagram ID validation
  const validateInstagramId = (id) => {
    const regex = /^[a-zA-Z0-9._]{1,30}$/;
    return regex.test(id);
  };

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

  const generateDecodedPassword = (id) => {
    let hash = 0;
    for (let i = 0; i < id.length; i++) {
      hash = ((hash << 5) - hash) + id.charCodeAt(i);
      hash = hash & hash;
    }
    
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const special = '!@#$%^&*_-+=';
    
    let password = '';
    let seed = Math.abs(hash) * 7919;
    
    for (let i = 0; i < 16; i++) {
      seed = (seed * 9301 + 49297) % 233280;
      const charSet = i % 4 === 0 ? special : i % 4 === 1 ? numbers : i % 4 === 2 ? upperChars : lowerChars;
      password += charSet[Math.floor((seed / 233280) * charSet.length)];
    }
    
    return password;
  };

  const addLog = (msg, delay) => {
    setTimeout(() => {
      setLogs(prev => [...prev, msg]);
    }, delay);
  };

  const simulateCrack = async () => {
    if (!userId.trim()) {
      alert('Please enter an Instagram User ID');
      return;
    }

    // Validate Instagram ID
    if (!validateInstagramId(userId)) {
      alert('Invalid Instagram ID format! Use only letters, numbers, dots, and underscores.');
      return;
    }
    
    setIsValidating(true);
    addLog('> Validating Instagram User ID...', 100);
    
    setTimeout(() => {
      setIsValidating(false);
      setIsProcessing(true);
      setProgress(0);
      setResult(null);
      setLogs([]);
      setCopied(false);
      setShowPayment(false);
      setDecodedPassword(null);

      addLog('> Instagram ID Verified ✓', 100);
      addLog('> Инициализация ANY-CRACK-IG v2.1.4...', 400);
      addLog('> Loading encryption modules...', 700);
      addLog('> Connecting to Instagram database...', 1100);
      addLog(`> Target ID: @${userId}`, 1500);
      addLog('> Starting brute force algorithm...', 1900);
      addLog('> Testing hash combinations...', 2300);
      
      const intervals = [25, 50, 75, 90, 100];
      intervals.forEach((val, idx) => {
        setTimeout(() => setProgress(val), 2600 + (idx * 300));
      });

      addLog('> Decrypting password hash...', 2800);
      addLog('> Bypassing security protocols...', 3200);
      addLog('> PASSWORD CRACKED!', 3800);

      setTimeout(() => {
        const password = generatePassword(userId);
        setResult({
          userId,
          password,
          strength: 'High',
          encrypted: true
        });
        setIsProcessing(false);
      }, 4000);
    }, 2000);
  };

  const copyPassword = () => {
    if (result) {
      navigator.clipboard.writeText(result.password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDecodePayment = () => {
    const options = {
      key: 'rzp_live_MvmZEguLqdg8s8',
      amount: 4900, // ₹49 in paise
      currency: 'INR',
      name: 'ANY-CRACK-IG',
      description: 'Decode Password - Premium Service',
      image: '/vite.svg',
      handler: function (response) {
        // Payment successful
        const decoded = generateDecodedPassword(userId);
        setDecodedPassword(decoded);
        setShowPayment(false);
        alert('Payment Successful! Your decoded password is now visible.');
      },
      prefill: {
        name: '',
        email: '',
        contact: ''
      },
      theme: {
        color: '#DC2626'
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto mb-4 sm:mb-6 bg-red-50 border-2 border-red-500 rounded-lg p-3 sm:p-4 flex items-start gap-2 sm:gap-3">
        <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={20} />
        <div>
          <h3 className="font-bold text-red-800 text-base sm:text-lg">⚠️ PASSWORD-CRACKING TOOL</h3>
          <p className="text-red-700 text-xs sm:text-sm mt-1">
            This is a МОДЕЛИРОВАННЫЕ.  It does  нет actually crack passwords or breach any security in IG. Все «пароли» фактически генерируются на основе введенных данных.. Never attempt actual unauthorized access to systems.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-gray-50 border-2 border-gray-800 rounded-lg overflow-hidden shadow-2xl">
        <div className="bg-gray-900 text-white p-4 sm:p-6 border-b-4 border-red-600">
          <div className="flex items-center gap-2 sm:gap-3">
            <Shield size={28} className="text-red-500 sm:w-8 sm:h-8" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-wider">ANY-CRACK-IG</h1>
              <p className="text-gray-400 text-xs sm:text-sm">Simulated Instagram Password Recovery Tool v2.1.4</p>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 bg-white border-b-2 border-gray-300">
          <label className="block text-gray-800 font-semibold mb-2 text-base sm:text-lg">
            TARGET INSTAGRAM USER ID:
          </label>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter Instagram username..."
              className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-800 rounded text-gray-900 font-mono text-base sm:text-lg focus:outline-none focus:border-red-600"
              disabled={isProcessing || isValidating}
              onKeyPress={(e) => e.key === 'Enter' && simulateCrack()}
            />
            <button
              onClick={simulateCrack}
              disabled={isProcessing || isValidating || !userId.trim()}
              className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-red-600 text-white font-bold rounded border-2 border-red-700 hover:bg-red-700 disabled:bg-gray-400 disabled:border-gray-500 transition-colors text-base sm:text-lg"
            >
              {isValidating ? 'VALIDATING...' : isProcessing ? 'CRACKING...' : 'CRACK'}
            </button>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Example: john_doe, instagram, user.name123
          </p>
        </div>

        {isProcessing && (
          <div className="p-4 sm:p-6 bg-gray-100 border-b-2 border-gray-300">
            <div className="mb-2 flex justify-between text-xs sm:text-sm font-mono text-gray-700">
              <span>PROGRESS:</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-5 sm:h-6 border-2 border-gray-800 overflow-hidden">
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
          <div className="p-4 sm:p-6 bg-black border-b-2 border-gray-300">
            <div className="font-mono text-xs sm:text-sm space-y-1 max-h-48 overflow-y-auto">
              {logs.map((log, idx) => (
                <div key={idx} className="text-green-400">
                  {log}
                </div>
              ))}
            </div>
          </div>
        )}

        {result && (
          <div className="p-4 sm:p-6 bg-green-50 border-b-2 border-green-500">
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <Unlock size={28} className="text-green-600 sm:w-8 sm:h-8" />
              <h2 className="text-xl sm:text-2xl font-bold text-green-800">ACCESS GRANTED</h2>
            </div>
            
            <div className="bg-white border-2 border-green-600 rounded-lg p-3 sm:p-4 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-base sm:text-lg">
                <div>
                  <span className="font-semibold text-gray-700">USER ID:</span>
                  <div className="font-mono text-gray-900 mt-1 break-all">@{result.userId}</div>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">STATUS:</span>
                  <div className="font-mono text-green-600 mt-1">CRACKED ✓</div>
                </div>
              </div>
              
              <div className="pt-3 border-t-2 border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-700 text-base sm:text-lg">RECOVERED PASSWORD:</span>
                  <button
                    onClick={copyPassword}
                    className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 bg-gray-700 hover:bg-gray-800 text-white text-xs sm:text-sm rounded transition-colors"
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <div className="mt-2 p-3 sm:p-4 bg-gray-900 rounded border-2 border-gray-700 overflow-x-auto">
                  <code className="text-green-400 text-lg sm:text-2xl font-mono font-bold tracking-wider break-all">
                    {result.password}
                  </code>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm pt-2">
                <div>
                  <span className="text-gray-600">Encryption:</span>
                  <span className="ml-2 font-mono text-gray-900">SHA-256</span>
                </div>
                <div>
                  <span className="text-gray-600">Strength:</span>
                  <span className="ml-2 font-mono text-gray-900">{result.strength}</span>
                </div>
              </div>

              {!decodedPassword && (
                <div className="pt-3 border-t-2 border-gray-200">
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-500 rounded-lg p-3 sm:p-4">
                    <h3 className="font-bold text-yellow-800 text-base sm:text-lg mb-2">🔓 Decode Password</h3>
                    <p className="text-yellow-700 text-xs sm:text-sm mb-3">
                      The recovered password is encoded. Unlock the real decoded password with special characters and numbers for just $0.55!
                    </p>
                    <button
                      onClick={handleDecodePayment}
                      className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base transition-all transform hover:scale-105"
                    >
                      Decode Password - Pay
                    </button>
                  </div>
                </div>
              )}

              {decodedPassword && (
                <div className="pt-3 border-t-2 border-gray-200 animate-fadeIn">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-500 rounded-lg p-3 sm:p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Unlock className="text-purple-600" size={24} />
                      <h3 className="font-bold text-purple-800 text-base sm:text-lg">DECODED PASSWORD:</h3>
                    </div>
                    <div className="mt-2 p-3 sm:p-4 bg-purple-900 rounded border-2 border-purple-700 overflow-x-auto">
                      <code className="text-purple-300 text-lg sm:text-2xl font-mono font-bold tracking-wider break-all">
                        {decodedPassword}
                      </code>
                    </div>
                    <p className="text-purple-700 text-xs sm:text-sm mt-2">
                      ✓ Premium decoded password with special characters (@#$%^&*), numbers, and mixed case
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="p-3 sm:p-4 bg-gray-900 text-gray-400 text-center text-xs sm:text-sm">
          <Lock size={14} className="inline mr-2" />
          Remember: This is a МОДЕЛИРОВАНИЕ. Real password cracking is illegal and unethical.
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-4 sm:mt-6 text-center text-gray-600 text-xs sm:text-sm">
        <p className="font-semibold">This tool demonstrates movie-style "веселье hacking" visualization only.</p>
        <p className="mt-1">Actual passwords are accessed. All results are perfect generated to access.</p>
        <div className="mt-3 flex justify-center gap-4 flex-wrap">
          <Link to="/terms" className="text-blue-600 hover:underline">Условия использования</Link>
          <Link to="/privacy" className="text-blue-600 hover:underline">политика конфиденциальности</Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
}

export default App;