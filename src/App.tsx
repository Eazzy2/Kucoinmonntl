import { motion } from 'motion/react';
import { 
  Shield, 
  TrendingUp, 
  Headphones, 
  Gift, 
  User, 
  ShoppingCart, 
} from 'lucide-react';

// Header Component
const Header = () => (
  <header className="px-6 py-6 flex flex-col gap-4 bg-white">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-[#008e4d] rounded-[8px] flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white drop-shadow-sm">
            <path d="M12 2L4 10l8 8 8-8-8-8zM7.5 10L12 5.5 16.5 10 12 14.5 7.5 10z" />
            <path d="M12 8.5L9.5 11l2.5 2.5 2.5-2.5-2.5-2.5z" />
          </svg>
        </div>
        <div className="flex flex-col -space-y-1">
          <span className="text-2xl font-[900] tracking-tighter text-[#008e4d] italic">KUCOIN</span>
        </div>
      </div>
      <div className="flex items-center gap-6 text-gray-800">
        <User size={28} strokeWidth={1.5} />
        <div className="relative">
          <ShoppingCart size={28} strokeWidth={1.5} />
          <span className="absolute -top-1 -right-2 bg-[#008e4d] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
            2
          </span>
        </div>
      </div>
    </div>
    <span className="text-[11px] font-bold tracking-[0.2em] text-black uppercase">
      People's Exchange
    </span>
  </header>
);

// KuCoin Play Store Link
const KUCOIN_APP_LINK = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://play.google.com/store/apps/details%3Fid%3Dcom.kubi.kucoin%26referrer%3Dutm_source%253Dgoogle%2526utm_medium%253Dorganic%2526utm_term%253Dkucoin%2Bsign%2Bup%26pcampaignid%3DAPPU_1_1RgDaraXJMTWhbIP5oOe4QU&ved=2ahUKEwj21cSN3LOUAxVEa0EAHeaBJ1wQ44QBegQIDxAP&usg=AOvVaw2eUgdN9MAl2EjRYUlo3cI9";

// Feature Item Component
const FeatureItem = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <a 
    href={KUCOIN_APP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center text-center p-4 hover:bg-green-50 transition-colors rounded-xl"
  >
    <div className="mb-4 text-[#008e4d]">
      <Icon size={36} strokeWidth={1.5} />
    </div>
    <h3 className="font-bold text-lg mb-1 text-gray-900">{title}</h3>
    <p className="text-sm text-gray-500 leading-tight px-2">{description}</p>
  </a>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col max-w-md mx-auto overflow-hidden shadow-2xl">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-1 overflow-y-auto scrollbar-hide"
      >
        <Header />

        {/* Hero Section */}
        <section className="relative px-6 pt-8 pb-12 overflow-hidden bg-gradient-to-b from-white to-green-50/30">
          <div className="relative z-10">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-[42px] leading-[1.1] font-bold text-[#008e4d] mb-6 tracking-tight"
            >
              Trade Crypto. <br />
              Grow Your Wealth.
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 mb-12 max-w-[280px] leading-relaxed"
            >
              Trade 700+ cryptocurrencies on our platform.
            </motion.p>
          </div>

          {/* Hero Visual Mockup */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, x: 50 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="absolute -right-16 top-24 w-[340px] pointer-events-none"
          >
            <img 
              src="/src/assets/images/kucoin_hero_visual_1779032033542.png" 
              alt="KuCoin Trading App Mockup" 
              className="w-full drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="flex flex-col gap-4 mt-64 relative z-10">
            <motion.a 
              href={KUCOIN_APP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 bg-[#008e4d] text-white text-xl font-bold rounded-[20px] shadow-lg shadow-green-900/10 flex items-center justify-center"
            >
              Sign Up / Get Started
            </motion.a>
            <motion.a 
              href={KUCOIN_APP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 bg-white text-[#008e4d] text-xl font-bold rounded-[20px] border-2 border-[#008e4d] flex items-center justify-center"
            >
              Explore Markets
            </motion.a>
          </div>
        </section>

        {/* Features Table */}
        <section className="px-4 py-16 grid grid-cols-2 gap-x-2 gap-y-12 bg-white">
          <FeatureItem 
            icon={Shield} 
            title="Secure" 
            description="Top tier security to protect your assets" 
          />
          <FeatureItem 
            icon={TrendingUp} 
            title="Advanced Tools" 
            description="powerful trading tools for beginners and pros" 
          />
          <FeatureItem 
            icon={Headphones} 
            title="24/7 Support" 
            description="Always there for u anytime, anywhere" 
          />
          <FeatureItem 
            icon={Gift} 
            title="Rewards" 
            description="Earn rewards as you trade" 
          />
        </section>
        
        {/* Fill dynamic space */}
        <div className="h-20" />
      </motion.div>
    </div>
  );
}
