import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-16 bg-gray-900 text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Logo + Description */}
          <div className="md:col-span-1">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={120}
              height={40}
              className="mb-4"
            />
            <p className="text-gray-300 text-sm leading-relaxed max-w-[250px]">
              Build stunning landing pages faster with our modern templates.
            </p>
          </div>

          {/* Links - Example column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><Link href="#">Features</Link></li>
              <li><Link href="#">Pricing</Link></li>
              <li><Link href="#">Integrations</Link></li>
              <li><Link href="#">Documentation</Link></li>
            </ul>
          </div>

          {/* Links - Example column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Press</Link></li>
            </ul>
          </div>

          {/* Links - Example column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><Link href="#">Help Center</Link></li>
              <li><Link href="#">Contact</Link></li>
              <li><Link href="#">Terms</Link></li>
              <li><Link href="#">Privacy</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Voltaris Digital Solutions. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6">
            <Link href="#" aria-label="Twitter">
              <Image
                src="/icons/twitter.svg"
                alt="Twitter"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#" aria-label="GitHub">
              <Image
                src="/icons/github.svg"
                alt="GitHub"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
