import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500 font-medium">
          © {new Date().getFullYear()} Zulkaif. All rights reserved.
        </p>
        
        <div className="flex items-center gap-5">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-slate-800 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}