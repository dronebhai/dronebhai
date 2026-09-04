import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  showSchema?: boolean;
}

export default function Breadcrumbs({
  items,
  className = "",
  showSchema = true,
}: BreadcrumbsProps) {
  const schemaData = showSchema
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label,
          ...(item.href
            ? {
                item: item.href.startsWith("http")
                  ? item.href
                  : `https://dronebhai.com${item.href}`,
              }
            : {}),
        })),
      }
    : null;

  return (
    <>
      {schemaData && <JsonLd data={schemaData} />}
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center gap-1.5 text-xs text-slate-500 py-2 ${className}`}
      >
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="flex items-center gap-1.5">
                {index > 0 && (
                  <span className="material-symbols-outlined text-[12px] text-slate-400 select-none">
                    chevron_right
                  </span>
                )}
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors hover:underline"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={`font-medium ${
                      isLast ? "text-slate-900" : "text-slate-600"
                    }`}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
