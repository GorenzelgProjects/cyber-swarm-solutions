import React from 'react';

interface FormattedTextProps {
  text: string;
  className?: string;
}

const FormattedText: React.FC<FormattedTextProps> = ({ text, className = '' }) => {
  // Split text into paragraphs
  const paragraphs = text.split('\n\n');

  return (
    <div className={className}>
      {paragraphs.map((paragraph, pIndex) => {
        // Check if paragraph starts with bullet
        if (paragraph.trim().startsWith('•')) {
          // Split bullets into separate items
          const bulletItems = paragraph
            .split('\n\n')
            .filter(item => item.trim().startsWith('•'));
          
          return (
            <ul key={pIndex} className="space-y-3 list-none">
              {bulletItems.map((item, iIndex) => {
                const cleanItem = item.replace(/^•\s*/, '').trim();
                return (
                  <li key={iIndex} className="flex gap-3">
                    <span className="text-sage mt-1">•</span>
                    <span>{formatInlineText(cleanItem)}</span>
                  </li>
                );
              })}
            </ul>
          );
        }

        // Regular paragraph
        return (
          <p key={pIndex} className="whitespace-pre-line">
            {formatInlineText(paragraph)}
          </p>
        );
      })}
    </div>
  );
};

// Helper function to format bold text and italic quotes
const formatInlineText = (text: string): React.ReactNode => {
  const parts: React.ReactNode[] = [];
  let currentIndex = 0;
  let key = 0;

  // First, handle quotes (text in "quotes" becomes italic)
  const quoteRegex = /"([^"]+)"/g;
  let quoteMatch;
  const quotedSegments: Array<{ start: number; end: number; text: string }> = [];

  while ((quoteMatch = quoteRegex.exec(text)) !== null) {
    quotedSegments.push({
      start: quoteMatch.index,
      end: quoteMatch.index + quoteMatch[0].length,
      text: quoteMatch[1],
    });
  }

  // Handle bold text **text**
  const boldRegex = /\*\*([^*]+)\*\*/g;
  let boldMatch;
  const boldSegments: Array<{ start: number; end: number; text: string }> = [];

  while ((boldMatch = boldRegex.exec(text)) !== null) {
    boldSegments.push({
      start: boldMatch.index,
      end: boldMatch.index + boldMatch[0].length,
      text: boldMatch[1],
    });
  }

  // Combine all segments and sort by position
  const allSegments = [
    ...quotedSegments.map(s => ({ ...s, type: 'quote' as const })),
    ...boldSegments.map(s => ({ ...s, type: 'bold' as const })),
  ].sort((a, b) => a.start - b.start);

  // Process segments
  allSegments.forEach((segment) => {
    // Add text before this segment
    if (currentIndex < segment.start) {
      parts.push(text.substring(currentIndex, segment.start));
    }

    // Add formatted segment
    if (segment.type === 'quote') {
      parts.push(
        <em key={key++} className="italic">
          "{segment.text}"
        </em>
      );
    } else if (segment.type === 'bold') {
      parts.push(
        <strong key={key++} className="font-semibold">
          {segment.text}
        </strong>
      );
    }

    currentIndex = segment.end;
  });

  // Add remaining text
  if (currentIndex < text.length) {
    parts.push(text.substring(currentIndex));
  }

  return parts.length > 0 ? parts : text;
};

export default FormattedText;
