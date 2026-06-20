import { useState, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFPageDisplayProps {
  file: string;
  /** which pages to show, 1-indexed. defaults to [1] */
  pages?: number[];
  width?: number;
  className?: string;
}

export function PDFPageDisplay({ file, pages = [1], width = 600, className = "" }: PDFPageDisplayProps) {
  const [numPages, setNumPages] = useState<number>(0);

  const onLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  }, []);

  const visiblePages = pages.filter((p) => p <= numPages || numPages === 0);

  return (
    <Document
      file={file}
      onLoadSuccess={onLoadSuccess}
      loading={<div className={`bg-[#E5E5E5] animate-pulse ${className}`} style={{ width, minHeight: width * 1.2 }} />}
      error={<div className="text-sm text-[#001524]/40 p-4">Could not load document.</div>}
    >
      {(numPages > 0 ? pages.filter((p) => p <= numPages) : visiblePages).map((pageNum) => (
        <div key={pageNum} className={className}>
          <Page
            pageNumber={pageNum}
            width={width}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </div>
      ))}
    </Document>
  );
}
