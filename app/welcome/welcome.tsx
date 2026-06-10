import { useState, useEffect } from "react";

const GREETINGS = [
  { text: "Bonjour", lang: "French", color: "from-blue-500 to-indigo-600" },
  { text: "Hello", lang: "English", color: "from-purple-500 to-pink-600" },
  { text: "Hola", lang: "Spanish", color: "from-amber-500 to-orange-600" },
  { text: "Ciao", lang: "Italian", color: "from-emerald-500 to-teal-600" },
  { text: "Konnichiwa", lang: "Japanese", color: "from-rose-500 to-red-600" },
  { text: "Namaste", lang: "Hindi", color: "from-cyan-500 to-blue-600" },
];

export function Welcome() {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [userName, setUserName] = useState("");
  const [customGreeting, setCustomGreeting] = useState("");
  const [celebrate, setCelebrate] = useState(false);

  // Cycle through greetings every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % GREETINGS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleGreetingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName.trim()) {
      const currentGreet = GREETINGS[greetingIndex].text;
      setCustomGreeting(`${currentGreet}, ${userName.trim()} ! 👋`);
      setCelebrate(true);
      setTimeout(() => setCelebrate(false), 2000);
    }
  };

  const currentGreeting = GREETINGS[greetingIndex];

  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 overflow-hidden font-sans transition-colors duration-300">
      {/* Decorative Glowing Gradients in Background */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-pink-500/20 blur-[130px] pointer-events-none" />
      <div className="absolute top-[30%] right-[20%] w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-950/70 border-b border-gray-200/50 dark:border-gray-800/50 transition-colors">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                />
              </svg>
            </div>
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              AuraApp
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              Live sur cPanel : Port 4000
            </span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-6 pt-12 pb-24 relative z-10 flex flex-col items-center">
        {/* Hero Section */}
        <section className="text-center max-w-3xl space-y-6 mt-8">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gray-200/50 dark:bg-gray-800/50 border border-gray-300/30 dark:border-gray-700/30 text-sm font-medium tracking-wide text-gray-600 dark:text-gray-300">
            ✨ Déploiement Production Réussi
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none text-gray-900 dark:text-white">
            Votre application dit <br />
            <span
              className={`inline-block mt-3 px-4 py-2 rounded-2xl bg-gradient-to-r ${currentGreeting.color} text-transparent bg-clip-text transition-all duration-700 transform hover:scale-105`}
            >
              {currentGreeting.text} !
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Bienvenue sur votre serveur Remix / React Router personnalisé. Une
            architecture moderne propulsée par Express, stylisée avec Tailwind CSS v4.
          </p>
        </section>

        {/* Personalized Interactive Greeting Form */}
        <section className="w-full max-w-md mt-12">
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-800/50 rounded-3xl p-8 shadow-xl shadow-gray-200/10 dark:shadow-black/30 relative">
            {celebrate && (
              <div className="absolute inset-0 bg-indigo-500/5 rounded-3xl pointer-events-none border-2 border-indigo-500/50 animate-pulse transition-all duration-300" />
            )}

            <h2 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-gray-100">
              Dites-nous votre nom
            </h2>

            <form onSubmit={handleGreetingSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Entrez votre prénom ou pseudo..."
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  maxLength={30}
                  className="w-full px-5 py-3 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/50 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-200 text-center text-lg font-semibold"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold text-lg shadow-lg shadow-indigo-500/25 hover:shadow-indigo-600/35 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 cursor-pointer"
              >
                Générer la salutation
              </button>
            </form>

            {/* Display greeting result */}
            {customGreeting && (
              <div className="mt-6 p-4 rounded-2xl bg-gray-100/50 dark:bg-gray-950/50 border border-gray-200/30 dark:border-gray-800/30 text-center animate-bounce">
                <p className="text-xl font-extrabold bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
                  {customGreeting}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Langue courante : {currentGreeting.lang}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Feature Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-20">
          {/* Card 1 */}
          <div className="group p-8 rounded-3xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-gray-200/40 dark:border-gray-800/40 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/5 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              React Router v7
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Propulsé par Vite avec le support complet du SSR, du routing imbriqué,
              et de la génération de types automatique.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group p-8 rounded-3xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-gray-200/40 dark:border-gray-800/40 hover:border-purple-500/30 dark:hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/5 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-500 dark:text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v3.75a3 3 0 0 1-3 3M5.25 14.25a3.001 3.001 0 0 0-3 2.122 3 3 0 0 0 5.659.878m11.841-3a3.001 3.001 0 0 1 3 2.122 3 3 0 0 1-5.659.878m-7.933-2.122A4.505 4.505 0 0 1 8.12 16.5h7.76a4.505 4.505 0 0 1-.61-2.25"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Express Custom Server
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Un serveur Node personnalisé idéal pour cPanel, fonctionnant sur le port
              4000 avec gestion robuste des assets et du SSR.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group p-8 rounded-3xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-gray-200/40 dark:border-gray-800/40 hover:border-pink-500/30 dark:hover:border-pink-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/5 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-pink-500/10 text-pink-500 dark:text-pink-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.01-3.02a5.972 5.972 0 0 0-.704 2.097M12.918 14.5a15.999 15.999 0 0 1 3.387 1.621m-5.01-3.02a5.974 5.974 0 0 1 .704 2.097m0 0a3 3 0 1 1-5.78 1.128 2.25 2.25 0 0 0-2.4 2.245 4.5 4.5 0 0 1 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.997 15.997 0 0 0 3.388-1.62m-5.01-3.02a5.973 5.973 0 0 0-.704 2.097M16.305 14.5a15.998 15.998 0 0 1 3.388 1.62m-5.01-3.02a5.973 5.973 0 0 1 .704 2.097m0 0a3 3 0 1 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Tailwind CSS v4
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Mise en page optimisée avec le tout dernier moteur de Tailwind CSS,
              intégré via le compilateur ultrarapide de Vite.
            </p>
          </div>
        </section>
      </main>

      {/* Subtle Footer */}
      <footer className="absolute bottom-6 w-full text-center text-xs text-gray-400 dark:text-gray-600">
        © 2026 AuraApp • Fait avec ❤️ pour cPanel et Express.
      </footer>
    </div>
  );
}
