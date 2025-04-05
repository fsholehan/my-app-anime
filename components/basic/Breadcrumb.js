import { usePathname } from "next/navigation";
import convertIdToTitle from "@/utils/convertIdToTitle";
import Link from "next/link";

export default function Breadcrumb({ currentPage }) {
  const pathname = usePathname();
  const pages = [];

  if (pathname) {
    const segments = pathname.split("/").filter(Boolean); // hapus empty string
    segments.forEach((item, index) => {
      const isLast = index === segments.length - 1;
      const href = "/" + segments.slice(0, index + 1).join("/");

      pages.push({
        title: convertIdToTitle(item),
        href: isLast ? null : href, // terakhir tidak jadi link
      });
    });
  }

  // Override last page jika currentPage disediakan
  if (currentPage) {
    if (currentPage.action === "replace") {
      pages.pop(); // hapus terakhir
    }
    pages.push({
      title: currentPage.title,
      href: currentPage.href || null,
    });
  }

  return (
    <header
      className="flex p-3 border rounded-lg bg-zinc-900 border-zinc-800"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {/* Home */}
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium hover:text-amber-600 text-zinc-200"
          >
            <svg
              className="w-3 h-3 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            Home
          </Link>
        </li>

        {/* Dynamic Breadcrumbs */}
        {pages.map((page, index) => (
          <li
            key={index}
            aria-current={index === pages.length - 1 ? "page" : undefined}
          >
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 mx-1 text-zinc-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              {page.href ? (
                <Link
                  href={page.href}
                  className="ms-1 text-sm font-medium hover:text-amber-600 md:ms-2 text-zinc-200"
                >
                  {page.title}
                </Link>
              ) : (
                <span className="ms-1 text-sm font-medium text-zinc-200 md:ms-2 line-clamp-1">
                  {page.title}
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </header>
  );
}
