import { Github, Linkedin, Twitter ,Facebook , Instagram} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500 font-medium">
          © {new Date().getFullYear()} Zulkaif. All rights reserved.
        </p>
        
        <div className="flex items-center gap-5">
          <a href="https://github.com/ZulkaifAhmad" target="_blank" rel="noreferrer" className="p-2 bg-gray-50 rounded-lg hover:bg-[#000000] hover:text-white text-gray-600 transition-all duration-300 shadow-sm">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/zulkaif-ahmad-28a0512b7" target="_blank" rel="noreferrer" className="p-2 bg-gray-50 rounded-lg hover:bg-[#1877F2] hover:text-white text-gray-600 transition-all duration-300 shadow-sm">
            <Linkedin size={20} />
          </a>
          <a href="https://web.facebook.com/zulkaif.ahmad.149176" target="_blank" rel="noreferrer" className="p-2 bg-gray-50 rounded-lg hover:bg-[#1877F2] hover:text-white text-gray-600 transition-all duration-300 shadow-sm">
              <Facebook size={20} strokeWidth={1.5} />
            </a>
            <a href="https://www.instagram.com/zulkaif497/" target="_blank" rel="noreferrer" className="p-2 bg-gray-50 rounded-lg hover:bg-[#E4405F] hover:text-white text-gray-600 transition-all duration-300 shadow-sm">
              <Instagram size={20} strokeWidth={1.5} />
            </a>
        </div>
      </div>
    </footer>
  );
}