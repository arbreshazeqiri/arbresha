import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="flex lg:flex-row md:flex-row flex-col py-8 text-center justify-center gap-2">
        <p className="text-foreground/60 flex items-center justify-center gap-2">
          © 2025 Arbresha Zeqiri.{" "}
        </p>
        <p className="text-foreground/60 flex items-center justify-center gap-2">
          Made with <Heart size={16} className="text-pink-gradient-start" /> and
          a RedBull.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
