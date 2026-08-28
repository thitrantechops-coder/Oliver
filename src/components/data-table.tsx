import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type DataTableProps = {
  headers: string[];
  rows: (string | ReactNode)[][];
  caption?: string;
  invert?: boolean;
};

export function DataTable({ headers, rows, caption, invert = false }: DataTableProps) {
  return (
    <div className="overflow-x-auto">
      {caption ? (
        <p className={cn("mb-3 text-sm", invert ? "text-night-muted" : "text-muted")}>{caption}</p>
      ) : null}
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className={cn("border-b", invert ? "border-night-fg/30" : "border-ink")}>
            {headers.map((h) => (
              <th
                key={h}
                className={cn(
                  "py-3 pr-4 font-semibold tracking-wide",
                  invert ? "text-night-fg" : "text-ink",
                )}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={cn("border-b", invert ? "border-night-fg/12" : "border-line")}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={cn(
                    "py-3.5 pr-4 align-top leading-relaxed",
                    j === 0 && "font-medium",
                    invert ? "text-night-muted" : "text-ink-soft",
                    j === 0 && (invert ? "text-night-fg" : "text-ink"),
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
