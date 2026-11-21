import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, RefreshCw, Copy, Check, Shield } from 'lucide-react';
import { terminalCommands } from '../data/portfolioData';

export default function InteractiveTerminal({ openContactModal }) {
  const [history, setHistory] = useState([
    { type: 'system', content: 'Welcome to Saumya\'s SDE Cyber Terminal v2.4.0 [x86_64-vit-chennai]' },
    { type: 'system', content: 'Type "help" or click any preset command button below to inspect profile.' },
    { type: 'command', cmd: 'whoami' },
    { type: 'output', content: terminalCommands.whoami }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);
  const [scanning, setScanning] = useState(false);
  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, scanning]);

  const handleCommand = (cmdStr) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    if (!cleanCmd) return;

    const newHistory = [...history, { type: 'command', cmd: cmdStr }];

    if (cleanCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (cleanCmd === 'help') {
      newHistory.push({
        type: 'output',
        content: 'Available Commands:\n• whoami       - SDE bio & VIT Chennai status\n• skills       - Technical languages, web & AI stack\n• projects     - InsurePulse, SignFlow, Speech AI, etc.\n• education    - VIT Chennai CGPA 8.97 & academic history\n• achievements - Azure AZ-900, FIITJEE Scholarship, JNV rank\n• cyber-scan   - Run simulated AI/Cyber threat vulnerability check\n• hire         - Contact & hiring status\n• clear        - Clear terminal screen'
      });
    } else if (cleanCmd === 'cyber-scan') {
      setScanning(true);
      newHistory.push({
        type: 'system',
        content: '⚡ Initializing YOLOv8 & OpenCV Computer Vision Threat Detection Pipeline...'
      });
      setHistory(newHistory);
      setInputVal('');

      setTimeout(() => {
        setHistory((prev) => [
          ...prev,
          { type: 'output', content: '[OK] Loaded PyTorch YOLOv8 weights (30+ FPS capability)' },
          { type: 'output', content: '[OK] InsurePulse RBAC Governance: 15/15 Routes Secured with JWT' },
          { type: 'output', content: '[OK] SafeSpeak NLP Classification Pipeline: TF-IDF + SVM Operational' },
          { type: 'system', content: '✅ Cyber Scan Complete: 0 Vulnerabilities Detected. Architecture Secured.' }
        ]);
        setScanning(false);
      }, 1200);
      return;
    } else if (terminalCommands[cleanCmd]) {
      newHistory.push({
        type: 'output',
        content: terminalCommands[cleanCmd]
      });
    } else {
      newHistory.push({
        type: 'error',
        content: `bash: command not found: ${cmdStr}. Type "help" for a list of available commands.`
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  const copyTerminalContent = () => {
    const textToCopy = history.map(h => {
      if (h.type === 'command') return `$ ${h.cmd}`;
      return h.content;
    }).join('\n');
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const quickButtons = ['whoami', 'skills', 'projects', 'cyber-scan', 'achievements', 'contact', 'clear'];

  return (
    <section id="terminal" className="py-16 relative">
      <div className="w-full">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
            <TerminalIcon className="w-3.5 h-3.5" />
            Interactive Code Console
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Developer <span className="text-indigo-400">Command Center</span>
          </h2>
        </div>

        {/* Terminal Window */}
        <div className="rounded-2xl bg-[#090d16] border border-white/10 overflow-hidden shadow-2xl">
          
          {/* Header Bar */}
          <div className="bg-[#0f1422] border-b border-white/10 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
              <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-indigo-400" />
                saumya@vit-chennai: ~/sde-profile
              </span>
            </div>

            <button 
              onClick={copyTerminalContent}
              className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1 font-mono"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Logs'}</span>
            </button>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-xs sm:text-sm min-h-[300px] max-h-[420px] overflow-y-auto space-y-3 bg-[#06080e] text-slate-200">
            {history.map((item, idx) => (
              <div key={idx} className="leading-relaxed">
                {item.type === 'command' && (
                  <div className="flex items-start gap-2 text-cyan-400">
                    <span className="text-indigo-400 font-bold">saumya@vit:~$</span>
                    <span className="font-semibold text-white">{item.cmd}</span>
                  </div>
                )}
                {item.type === 'output' && (
                  <div className="text-slate-300 whitespace-pre-wrap pl-4 border-l-2 border-indigo-500/40 my-1 py-0.5">
                    {item.content}
                  </div>
                )}
                {item.type === 'system' && (
                  <div className="text-indigo-300 font-semibold bg-indigo-500/10 p-2 rounded-lg border border-indigo-500/20 my-1">
                    {item.content}
                  </div>
                )}
                {item.type === 'error' && (
                  <div className="text-rose-400 bg-rose-500/10 p-2 rounded-lg border border-rose-500/20 my-1">
                    {item.content}
                  </div>
                )}
              </div>
            ))}

            {scanning && (
              <div className="flex items-center gap-2 text-cyan-400 animate-pulse my-2">
                <RefreshCw className="w-4 h-4 animate-spin text-cyan-400" />
                <span>Running security scan analysis...</span>
              </div>
            )}

            <div ref={terminalEndRef} />
          </div>

          {/* Preset Buttons & Input */}
          <div className="p-4 bg-[#0d121f] border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-mono text-slate-400 mr-1">PRESETS:</span>
              {quickButtons.map((btn) => (
                <button
                  key={btn}
                  onClick={() => handleCommand(btn)}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 hover:border-indigo-400 transition-all duration-150"
                >
                  ${btn}
                </button>
              ))}
            </div>

            <form onSubmit={onSubmit} className="flex-1 max-w-sm flex items-center gap-2">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type 'whoami', 'cyber-scan'..."
                className="w-full bg-[#06080e] border border-white/15 rounded-xl px-3 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-indigo-400"
              />
              <button 
                type="submit"
                className="p-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-colors"
                title="Execute Command"
              >
                <Play className="w-4 h-4 fill-current" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
