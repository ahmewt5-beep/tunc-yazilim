"use client";
import { useEffect, useState } from "react";
import { Activity, Server, Cpu, Network } from "lucide-react";

export default function LiveMetrics() {
  const [aiLatency, setAiLatency] = useState(14);
  const [bandwidth, setBandwidth] = useState(1.2);

  useEffect(() => {
    const interval = setInterval(() => {
      setAiLatency(Math.floor(Math.random() * 8) + 12);
      setBandwidth(+(Math.random() * 0.5 + 1.0).toFixed(2));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { title: "Sistem Uptime (Aylık)", value: "99.998%", icon: <Server className="w-5 h-5 text-emerald-400" /> },
    { title: "LLM Yanıt Süresi", value: `${aiLatency}ms`, icon: <Cpu className="w-5 h-5 text-[#00e5ff]" /> },
    { title: "Aktif Veri İşleme", value: `${bandwidth} TB/s`, icon: <Activity className="w-5 h-5 text-purple-400" /> },
    { title: "Ağ Gecikmesi", value: "< 1ms", icon: <Network className="w-5 h-5 text-blue-400" /> },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
      {metrics.map((metric, idx) => (
        <div key={idx} className="bg-surface border border-border p-5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
            {metric.icon}
          </div>
          <p className="text-zinc-500 text-xs font-semibold tracking-wider uppercase mb-2">{metric.title}</p>
          <p className="text-2xl md:text-3xl font-bold text-white font-mono tracking-tighter">{metric.value}</p>
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-transparent to-[#00e5ff] group-hover:w-full transition-all duration-700"></div>
        </div>
      ))}
    </div>
  );
}
