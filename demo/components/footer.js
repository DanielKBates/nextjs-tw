import { navbarItems, footerItems } from "./nav"

  export default function Footer() {
    return (
      <footer className="bg-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            {navbarItems.map((item) => (
              <div key={item.text} className="px-5 py-2">
                <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                  {item.text}
                </a>
              </div>
            ))}
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            {footerItems.map((item) => (
              <a key={item.text} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.text}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-center text-base text-gray-400">&copy; 2021 Thinking Feet LLC. All rights reserved.</p>
        </div>
      </footer>
    )
  }
  