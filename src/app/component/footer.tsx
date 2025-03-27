import Link from "next/link";
import Image from "next/image"; // ✅ Next.js Image import

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          
          {/* ✅ Next.js Image Component */}
          <Image alt="Arbish's Portfolio" src="/logo.png" width={90} height={90} />

          {/* ✅ Copyright Text */}
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Arbish Mohiuddin — All Rights Reserved
          </p>

          {/* ✅ Social Media Icons */}
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            {/* LinkedIn Icon */}
            <Link
              href="https://www.linkedin.com/in/arbish-mohiuddin-79a514261"
              target="_blank"
              className="ml-3 text-gray-500"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                className="w-6 h-6"
              >
                <path
                  stroke="none"
                  d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3c-1 0-1.8-0.8-1.8-1.8s0.8-1.8 1.8-1.8 1.8 0.8 1.8 1.8-0.8 1.8-1.8 1.8zm13.5 10.3h-3v-4.5c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4v4.6h-3v-9h3v1.2c0.5-0.8 1.5-1.7 3.2-1.7 3.4 0 4 2.2 4 5v4.5z"
                />
              </svg>
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
