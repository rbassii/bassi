// src/bidi.ts
var baseTypes = [
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "S",
  "B",
  "S",
  "WS",
  "B",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "B",
  "B",
  "B",
  "S",
  "WS",
  "ON",
  "ON",
  "ET",
  "ET",
  "ET",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "CS",
  "ON",
  "CS",
  "ON",
  "EN",
  "EN",
  "EN",
  "EN",
  "EN",
  "EN",
  "EN",
  "EN",
  "EN",
  "EN",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "ON",
  "ON",
  "ON",
  "ON",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "B",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "CS",
  "ON",
  "ET",
  "ET",
  "ET",
  "ET",
  "ON",
  "ON",
  "ON",
  "ON",
  "L",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "ET",
  "ET",
  "EN",
  "EN",
  "ON",
  "L",
  "ON",
  "ON",
  "ON",
  "EN",
  "L",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "ON",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "ON",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L"
];
var arabicTypes = [
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "CS",
  "AL",
  "ON",
  "ON",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AN",
  "AN",
  "AN",
  "AN",
  "AN",
  "AN",
  "AN",
  "AN",
  "AN",
  "AN",
  "ET",
  "AN",
  "AN",
  "AL",
  "AL",
  "AL",
  "NSM",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "ON",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL"
];
function classifyChar(charCode) {
  if (charCode <= 255)
    return baseTypes[charCode];
  if (1424 <= charCode && charCode <= 1524)
    return "R";
  if (1536 <= charCode && charCode <= 1791)
    return arabicTypes[charCode & 255];
  if (1792 <= charCode && charCode <= 2220)
    return "AL";
  return "L";
}
function computeBidiLevels(str) {
  const len = str.length;
  if (len === 0)
    return null;
  const types = new Array(len);
  let numBidi = 0;
  for (let i = 0;i < len; i++) {
    const t = classifyChar(str.charCodeAt(i));
    if (t === "R" || t === "AL" || t === "AN")
      numBidi++;
    types[i] = t;
  }
  if (numBidi === 0)
    return null;
  const startLevel = len / numBidi < 0.3 ? 0 : 1;
  const levels = new Int8Array(len);
  for (let i = 0;i < len; i++)
    levels[i] = startLevel;
  const e = startLevel & 1 ? "R" : "L";
  const sor = e;
  let lastType = sor;
  for (let i = 0;i < len; i++) {
    if (types[i] === "NSM")
      types[i] = lastType;
    else
      lastType = types[i];
  }
  lastType = sor;
  for (let i = 0;i < len; i++) {
    const t = types[i];
    if (t === "EN")
      types[i] = lastType === "AL" ? "AN" : "EN";
    else if (t === "R" || t === "L" || t === "AL")
      lastType = t;
  }
  for (let i = 0;i < len; i++) {
    if (types[i] === "AL")
      types[i] = "R";
  }
  for (let i = 1;i < len - 1; i++) {
    if (types[i] === "ES" && types[i - 1] === "EN" && types[i + 1] === "EN") {
      types[i] = "EN";
    }
    if (types[i] === "CS" && (types[i - 1] === "EN" || types[i - 1] === "AN") && types[i + 1] === types[i - 1]) {
      types[i] = types[i - 1];
    }
  }
  for (let i = 0;i < len; i++) {
    if (types[i] !== "EN")
      continue;
    let j;
    for (j = i - 1;j >= 0 && types[j] === "ET"; j--)
      types[j] = "EN";
    for (j = i + 1;j < len && types[j] === "ET"; j++)
      types[j] = "EN";
  }
  for (let i = 0;i < len; i++) {
    const t = types[i];
    if (t === "WS" || t === "ES" || t === "ET" || t === "CS")
      types[i] = "ON";
  }
  lastType = sor;
  for (let i = 0;i < len; i++) {
    const t = types[i];
    if (t === "EN")
      types[i] = lastType === "L" ? "L" : "EN";
    else if (t === "R" || t === "L")
      lastType = t;
  }
  for (let i = 0;i < len; i++) {
    if (types[i] !== "ON")
      continue;
    let end = i + 1;
    while (end < len && types[end] === "ON")
      end++;
    const before = i > 0 ? types[i - 1] : sor;
    const after = end < len ? types[end] : sor;
    const bDir = before !== "L" ? "R" : "L";
    const aDir = after !== "L" ? "R" : "L";
    if (bDir === aDir) {
      for (let j = i;j < end; j++)
        types[j] = bDir;
    }
    i = end - 1;
  }
  for (let i = 0;i < len; i++) {
    if (types[i] === "ON")
      types[i] = e;
  }
  for (let i = 0;i < len; i++) {
    const t = types[i];
    if ((levels[i] & 1) === 0) {
      if (t === "R")
        levels[i]++;
      else if (t === "AN" || t === "EN")
        levels[i] += 2;
    } else if (t === "L" || t === "AN" || t === "EN") {
      levels[i]++;
    }
  }
  return levels;
}
function computeSegmentLevels(normalized, segStarts) {
  const bidiLevels = computeBidiLevels(normalized);
  if (bidiLevels === null)
    return null;
  const segLevels = new Int8Array(segStarts.length);
  for (let i = 0;i < segStarts.length; i++) {
    segLevels[i] = bidiLevels[segStarts[i]];
  }
  return segLevels;
}

// src/analysis.ts
var collapsibleWhitespaceRunRe = /[ \t\n\r\f]+/g;
var needsWhitespaceNormalizationRe = /[\t\n\r\f]| {2,}|^ | $/;
function getWhiteSpaceProfile(whiteSpace) {
  const mode = whiteSpace ?? "normal";
  return mode === "pre-wrap" ? { mode, preserveOrdinarySpaces: true, preserveHardBreaks: true } : { mode, preserveOrdinarySpaces: false, preserveHardBreaks: false };
}
function normalizeWhitespaceNormal(text) {
  if (!needsWhitespaceNormalizationRe.test(text))
    return text;
  let normalized = text.replace(collapsibleWhitespaceRunRe, " ");
  if (normalized.charCodeAt(0) === 32) {
    normalized = normalized.slice(1);
  }
  if (normalized.length > 0 && normalized.charCodeAt(normalized.length - 1) === 32) {
    normalized = normalized.slice(0, -1);
  }
  return normalized;
}
function normalizeWhitespacePreWrap(text) {
  if (!/[\r\f]/.test(text))
    return text.replace(/\r\n/g, `
`);
  return text.replace(/\r\n/g, `
`).replace(/[\r\f]/g, `
`);
}
var sharedWordSegmenter = null;
var segmenterLocale;
function getSharedWordSegmenter() {
  if (sharedWordSegmenter === null) {
    sharedWordSegmenter = new Intl.Segmenter(segmenterLocale, { granularity: "word" });
  }
  return sharedWordSegmenter;
}
var arabicScriptRe = /\p{Script=Arabic}/u;
var combiningMarkRe = /\p{M}/u;
var decimalDigitRe = /\p{Nd}/u;
function containsArabicScript(text) {
  return arabicScriptRe.test(text);
}
function isCJK(s) {
  for (const ch of s) {
    const c = ch.codePointAt(0);
    if (c >= 19968 && c <= 40959 || c >= 13312 && c <= 19903 || c >= 131072 && c <= 173791 || c >= 173824 && c <= 177983 || c >= 177984 && c <= 178207 || c >= 178208 && c <= 183983 || c >= 183984 && c <= 191471 || c >= 196608 && c <= 201551 || c >= 63744 && c <= 64255 || c >= 194560 && c <= 195103 || c >= 12288 && c <= 12351 || c >= 12352 && c <= 12447 || c >= 12448 && c <= 12543 || c >= 44032 && c <= 55215 || c >= 65280 && c <= 65519) {
      return true;
    }
  }
  return false;
}
var kinsokuStart = new Set([
  "，",
  "．",
  "！",
  "：",
  "；",
  "？",
  "、",
  "。",
  "・",
  "）",
  "〕",
  "〉",
  "》",
  "」",
  "』",
  "】",
  "〗",
  "〙",
  "〛",
  "ー",
  "々",
  "〻",
  "ゝ",
  "ゞ",
  "ヽ",
  "ヾ"
]);
var kinsokuEnd = new Set([
  '"',
  "(",
  "[",
  "{",
  "“",
  "‘",
  "«",
  "‹",
  "（",
  "〔",
  "〈",
  "《",
  "「",
  "『",
  "【",
  "〖",
  "〘",
  "〚"
]);
var forwardStickyGlue = new Set([
  "'",
  "’"
]);
var leftStickyPunctuation = new Set([
  ".",
  ",",
  "!",
  "?",
  ":",
  ";",
  "،",
  "؛",
  "؟",
  "।",
  "॥",
  "၊",
  "။",
  "၌",
  "၍",
  "၏",
  ")",
  "]",
  "}",
  "%",
  '"',
  "”",
  "’",
  "»",
  "›",
  "…"
]);
var arabicNoSpaceTrailingPunctuation = new Set([
  ":",
  ".",
  "،",
  "؛"
]);
var myanmarMedialGlue = new Set([
  "၏"
]);
var closingQuoteChars = new Set([
  "”",
  "’",
  "»",
  "›",
  "」",
  "』",
  "】",
  "》",
  "〉",
  "〕",
  "）"
]);
function isLeftStickyPunctuationSegment(segment) {
  if (isEscapedQuoteClusterSegment(segment))
    return true;
  let sawPunctuation = false;
  for (const ch of segment) {
    if (leftStickyPunctuation.has(ch)) {
      sawPunctuation = true;
      continue;
    }
    if (sawPunctuation && combiningMarkRe.test(ch))
      continue;
    return false;
  }
  return sawPunctuation;
}
function isCJKLineStartProhibitedSegment(segment) {
  for (const ch of segment) {
    if (!kinsokuStart.has(ch) && !leftStickyPunctuation.has(ch))
      return false;
  }
  return segment.length > 0;
}
function isForwardStickyClusterSegment(segment) {
  if (isEscapedQuoteClusterSegment(segment))
    return true;
  for (const ch of segment) {
    if (!kinsokuEnd.has(ch) && !forwardStickyGlue.has(ch) && !combiningMarkRe.test(ch))
      return false;
  }
  return segment.length > 0;
}
function isEscapedQuoteClusterSegment(segment) {
  let sawQuote = false;
  for (const ch of segment) {
    if (ch === "\\" || combiningMarkRe.test(ch))
      continue;
    if (kinsokuEnd.has(ch) || leftStickyPunctuation.has(ch) || forwardStickyGlue.has(ch)) {
      sawQuote = true;
      continue;
    }
    return false;
  }
  return sawQuote;
}
function splitTrailingForwardStickyCluster(text) {
  const chars = Array.from(text);
  let splitIndex = chars.length;
  while (splitIndex > 0) {
    const ch = chars[splitIndex - 1];
    if (combiningMarkRe.test(ch)) {
      splitIndex--;
      continue;
    }
    if (kinsokuEnd.has(ch) || forwardStickyGlue.has(ch)) {
      splitIndex--;
      continue;
    }
    break;
  }
  if (splitIndex <= 0 || splitIndex === chars.length)
    return null;
  return {
    head: chars.slice(0, splitIndex).join(""),
    tail: chars.slice(splitIndex).join("")
  };
}
function isRepeatedSingleCharRun(segment, ch) {
  if (segment.length === 0)
    return false;
  for (const part of segment) {
    if (part !== ch)
      return false;
  }
  return true;
}
function endsWithArabicNoSpacePunctuation(segment) {
  if (!containsArabicScript(segment) || segment.length === 0)
    return false;
  return arabicNoSpaceTrailingPunctuation.has(segment[segment.length - 1]);
}
function endsWithMyanmarMedialGlue(segment) {
  if (segment.length === 0)
    return false;
  return myanmarMedialGlue.has(segment[segment.length - 1]);
}
function splitLeadingSpaceAndMarks(segment) {
  if (segment.length < 2 || segment[0] !== " ")
    return null;
  const marks = segment.slice(1);
  if (/^\p{M}+$/u.test(marks)) {
    return { space: " ", marks };
  }
  return null;
}
function endsWithClosingQuote(text) {
  for (let i = text.length - 1;i >= 0; i--) {
    const ch = text[i];
    if (closingQuoteChars.has(ch))
      return true;
    if (!leftStickyPunctuation.has(ch))
      return false;
  }
  return false;
}
function classifySegmentBreakChar(ch, whiteSpaceProfile) {
  if (whiteSpaceProfile.preserveOrdinarySpaces || whiteSpaceProfile.preserveHardBreaks) {
    if (ch === " ")
      return "preserved-space";
    if (ch === "\t")
      return "tab";
    if (whiteSpaceProfile.preserveHardBreaks && ch === `
`)
      return "hard-break";
  }
  if (ch === " ")
    return "space";
  if (ch === " " || ch === " " || ch === "⁠" || ch === "\uFEFF") {
    return "glue";
  }
  if (ch === "​")
    return "zero-width-break";
  if (ch === "­")
    return "soft-hyphen";
  return "text";
}
function splitSegmentByBreakKind(segment, isWordLike, start, whiteSpaceProfile) {
  const pieces = [];
  let currentKind = null;
  let currentText = "";
  let currentStart = start;
  let currentWordLike = false;
  let offset = 0;
  for (const ch of segment) {
    const kind = classifySegmentBreakChar(ch, whiteSpaceProfile);
    const wordLike = kind === "text" && isWordLike;
    if (currentKind !== null && kind === currentKind && wordLike === currentWordLike) {
      currentText += ch;
      offset += ch.length;
      continue;
    }
    if (currentKind !== null) {
      pieces.push({
        text: currentText,
        isWordLike: currentWordLike,
        kind: currentKind,
        start: currentStart
      });
    }
    currentKind = kind;
    currentText = ch;
    currentStart = start + offset;
    currentWordLike = wordLike;
    offset += ch.length;
  }
  if (currentKind !== null) {
    pieces.push({
      text: currentText,
      isWordLike: currentWordLike,
      kind: currentKind,
      start: currentStart
    });
  }
  return pieces;
}
function isTextRunBoundary(kind) {
  return kind === "space" || kind === "preserved-space" || kind === "zero-width-break" || kind === "hard-break";
}
var urlSchemeSegmentRe = /^[A-Za-z][A-Za-z0-9+.-]*:$/;
function isUrlLikeRunStart(segmentation, index) {
  const text = segmentation.texts[index];
  if (text.startsWith("www."))
    return true;
  return urlSchemeSegmentRe.test(text) && index + 1 < segmentation.len && segmentation.kinds[index + 1] === "text" && segmentation.texts[index + 1] === "//";
}
function isUrlQueryBoundarySegment(text) {
  return text.includes("?") && (text.includes("://") || text.startsWith("www."));
}
function mergeUrlLikeRuns(segmentation) {
  const texts = segmentation.texts.slice();
  const isWordLike = segmentation.isWordLike.slice();
  const kinds = segmentation.kinds.slice();
  const starts = segmentation.starts.slice();
  for (let i = 0;i < segmentation.len; i++) {
    if (kinds[i] !== "text" || !isUrlLikeRunStart(segmentation, i))
      continue;
    let j = i + 1;
    while (j < segmentation.len && !isTextRunBoundary(kinds[j])) {
      texts[i] += texts[j];
      isWordLike[i] = true;
      const endsQueryPrefix = texts[j].includes("?");
      kinds[j] = "text";
      texts[j] = "";
      j++;
      if (endsQueryPrefix)
        break;
    }
  }
  let compactLen = 0;
  for (let read = 0;read < texts.length; read++) {
    const text = texts[read];
    if (text.length === 0)
      continue;
    if (compactLen !== read) {
      texts[compactLen] = text;
      isWordLike[compactLen] = isWordLike[read];
      kinds[compactLen] = kinds[read];
      starts[compactLen] = starts[read];
    }
    compactLen++;
  }
  texts.length = compactLen;
  isWordLike.length = compactLen;
  kinds.length = compactLen;
  starts.length = compactLen;
  return {
    len: compactLen,
    texts,
    isWordLike,
    kinds,
    starts
  };
}
function mergeUrlQueryRuns(segmentation) {
  const texts = [];
  const isWordLike = [];
  const kinds = [];
  const starts = [];
  for (let i = 0;i < segmentation.len; i++) {
    const text = segmentation.texts[i];
    texts.push(text);
    isWordLike.push(segmentation.isWordLike[i]);
    kinds.push(segmentation.kinds[i]);
    starts.push(segmentation.starts[i]);
    if (!isUrlQueryBoundarySegment(text))
      continue;
    const nextIndex = i + 1;
    if (nextIndex >= segmentation.len || isTextRunBoundary(segmentation.kinds[nextIndex])) {
      continue;
    }
    let queryText = "";
    const queryStart = segmentation.starts[nextIndex];
    let j = nextIndex;
    while (j < segmentation.len && !isTextRunBoundary(segmentation.kinds[j])) {
      queryText += segmentation.texts[j];
      j++;
    }
    if (queryText.length > 0) {
      texts.push(queryText);
      isWordLike.push(true);
      kinds.push("text");
      starts.push(queryStart);
      i = j - 1;
    }
  }
  return {
    len: texts.length,
    texts,
    isWordLike,
    kinds,
    starts
  };
}
var numericJoinerChars = new Set([
  ":",
  "-",
  "/",
  "×",
  ",",
  ".",
  "+",
  "–",
  "—"
]);
var asciiPunctuationChainSegmentRe = /^[A-Za-z0-9_]+[,:;]*$/;
var asciiPunctuationChainTrailingJoinersRe = /[,:;]+$/;
function segmentContainsDecimalDigit(text) {
  for (const ch of text) {
    if (decimalDigitRe.test(ch))
      return true;
  }
  return false;
}
function isNumericRunSegment(text) {
  if (text.length === 0)
    return false;
  for (const ch of text) {
    if (decimalDigitRe.test(ch) || numericJoinerChars.has(ch))
      continue;
    return false;
  }
  return true;
}
function mergeNumericRuns(segmentation) {
  const texts = [];
  const isWordLike = [];
  const kinds = [];
  const starts = [];
  for (let i = 0;i < segmentation.len; i++) {
    const text = segmentation.texts[i];
    const kind = segmentation.kinds[i];
    if (kind === "text" && isNumericRunSegment(text) && segmentContainsDecimalDigit(text)) {
      let mergedText = text;
      let j = i + 1;
      while (j < segmentation.len && segmentation.kinds[j] === "text" && isNumericRunSegment(segmentation.texts[j])) {
        mergedText += segmentation.texts[j];
        j++;
      }
      texts.push(mergedText);
      isWordLike.push(true);
      kinds.push("text");
      starts.push(segmentation.starts[i]);
      i = j - 1;
      continue;
    }
    texts.push(text);
    isWordLike.push(segmentation.isWordLike[i]);
    kinds.push(kind);
    starts.push(segmentation.starts[i]);
  }
  return {
    len: texts.length,
    texts,
    isWordLike,
    kinds,
    starts
  };
}
function mergeAsciiPunctuationChains(segmentation) {
  const texts = [];
  const isWordLike = [];
  const kinds = [];
  const starts = [];
  for (let i = 0;i < segmentation.len; i++) {
    const text = segmentation.texts[i];
    const kind = segmentation.kinds[i];
    const wordLike = segmentation.isWordLike[i];
    if (kind === "text" && wordLike && asciiPunctuationChainSegmentRe.test(text)) {
      let mergedText = text;
      let j = i + 1;
      while (asciiPunctuationChainTrailingJoinersRe.test(mergedText) && j < segmentation.len && segmentation.kinds[j] === "text" && segmentation.isWordLike[j] && asciiPunctuationChainSegmentRe.test(segmentation.texts[j])) {
        mergedText += segmentation.texts[j];
        j++;
      }
      texts.push(mergedText);
      isWordLike.push(true);
      kinds.push("text");
      starts.push(segmentation.starts[i]);
      i = j - 1;
      continue;
    }
    texts.push(text);
    isWordLike.push(wordLike);
    kinds.push(kind);
    starts.push(segmentation.starts[i]);
  }
  return {
    len: texts.length,
    texts,
    isWordLike,
    kinds,
    starts
  };
}
function splitHyphenatedNumericRuns(segmentation) {
  const texts = [];
  const isWordLike = [];
  const kinds = [];
  const starts = [];
  for (let i = 0;i < segmentation.len; i++) {
    const text = segmentation.texts[i];
    if (segmentation.kinds[i] === "text" && text.includes("-")) {
      const parts = text.split("-");
      let shouldSplit = parts.length > 1;
      for (let j = 0;j < parts.length; j++) {
        const part = parts[j];
        if (!shouldSplit)
          break;
        if (part.length === 0 || !segmentContainsDecimalDigit(part) || !isNumericRunSegment(part)) {
          shouldSplit = false;
        }
      }
      if (shouldSplit) {
        let offset = 0;
        for (let j = 0;j < parts.length; j++) {
          const part = parts[j];
          const splitText = j < parts.length - 1 ? `${part}-` : part;
          texts.push(splitText);
          isWordLike.push(true);
          kinds.push("text");
          starts.push(segmentation.starts[i] + offset);
          offset += splitText.length;
        }
        continue;
      }
    }
    texts.push(text);
    isWordLike.push(segmentation.isWordLike[i]);
    kinds.push(segmentation.kinds[i]);
    starts.push(segmentation.starts[i]);
  }
  return {
    len: texts.length,
    texts,
    isWordLike,
    kinds,
    starts
  };
}
function mergeGlueConnectedTextRuns(segmentation) {
  const texts = [];
  const isWordLike = [];
  const kinds = [];
  const starts = [];
  let read = 0;
  while (read < segmentation.len) {
    let text = segmentation.texts[read];
    let wordLike = segmentation.isWordLike[read];
    let kind = segmentation.kinds[read];
    let start = segmentation.starts[read];
    if (kind === "glue") {
      let glueText = text;
      const glueStart = start;
      read++;
      while (read < segmentation.len && segmentation.kinds[read] === "glue") {
        glueText += segmentation.texts[read];
        read++;
      }
      if (read < segmentation.len && segmentation.kinds[read] === "text") {
        text = glueText + segmentation.texts[read];
        wordLike = segmentation.isWordLike[read];
        kind = "text";
        start = glueStart;
        read++;
      } else {
        texts.push(glueText);
        isWordLike.push(false);
        kinds.push("glue");
        starts.push(glueStart);
        continue;
      }
    } else {
      read++;
    }
    if (kind === "text") {
      while (read < segmentation.len && segmentation.kinds[read] === "glue") {
        let glueText = "";
        while (read < segmentation.len && segmentation.kinds[read] === "glue") {
          glueText += segmentation.texts[read];
          read++;
        }
        if (read < segmentation.len && segmentation.kinds[read] === "text") {
          text += glueText + segmentation.texts[read];
          wordLike = wordLike || segmentation.isWordLike[read];
          read++;
          continue;
        }
        text += glueText;
      }
    }
    texts.push(text);
    isWordLike.push(wordLike);
    kinds.push(kind);
    starts.push(start);
  }
  return {
    len: texts.length,
    texts,
    isWordLike,
    kinds,
    starts
  };
}
function carryTrailingForwardStickyAcrossCJKBoundary(segmentation) {
  const texts = segmentation.texts.slice();
  const isWordLike = segmentation.isWordLike.slice();
  const kinds = segmentation.kinds.slice();
  const starts = segmentation.starts.slice();
  for (let i = 0;i < texts.length - 1; i++) {
    if (kinds[i] !== "text" || kinds[i + 1] !== "text")
      continue;
    if (!isCJK(texts[i]) || !isCJK(texts[i + 1]))
      continue;
    const split = splitTrailingForwardStickyCluster(texts[i]);
    if (split === null)
      continue;
    texts[i] = split.head;
    texts[i + 1] = split.tail + texts[i + 1];
    starts[i + 1] = starts[i] + split.head.length;
  }
  return {
    len: texts.length,
    texts,
    isWordLike,
    kinds,
    starts
  };
}
function buildMergedSegmentation(normalized, profile, whiteSpaceProfile) {
  const wordSegmenter = getSharedWordSegmenter();
  let mergedLen = 0;
  const mergedTexts = [];
  const mergedWordLike = [];
  const mergedKinds = [];
  const mergedStarts = [];
  for (const s of wordSegmenter.segment(normalized)) {
    for (const piece of splitSegmentByBreakKind(s.segment, s.isWordLike ?? false, s.index, whiteSpaceProfile)) {
      const isText = piece.kind === "text";
      if (profile.carryCJKAfterClosingQuote && isText && mergedLen > 0 && mergedKinds[mergedLen - 1] === "text" && isCJK(piece.text) && isCJK(mergedTexts[mergedLen - 1]) && endsWithClosingQuote(mergedTexts[mergedLen - 1])) {
        mergedTexts[mergedLen - 1] += piece.text;
        mergedWordLike[mergedLen - 1] = mergedWordLike[mergedLen - 1] || piece.isWordLike;
      } else if (isText && mergedLen > 0 && mergedKinds[mergedLen - 1] === "text" && isCJKLineStartProhibitedSegment(piece.text) && isCJK(mergedTexts[mergedLen - 1])) {
        mergedTexts[mergedLen - 1] += piece.text;
        mergedWordLike[mergedLen - 1] = mergedWordLike[mergedLen - 1] || piece.isWordLike;
      } else if (isText && mergedLen > 0 && mergedKinds[mergedLen - 1] === "text" && endsWithMyanmarMedialGlue(mergedTexts[mergedLen - 1])) {
        mergedTexts[mergedLen - 1] += piece.text;
        mergedWordLike[mergedLen - 1] = mergedWordLike[mergedLen - 1] || piece.isWordLike;
      } else if (isText && mergedLen > 0 && mergedKinds[mergedLen - 1] === "text" && piece.isWordLike && containsArabicScript(piece.text) && endsWithArabicNoSpacePunctuation(mergedTexts[mergedLen - 1])) {
        mergedTexts[mergedLen - 1] += piece.text;
        mergedWordLike[mergedLen - 1] = true;
      } else if (isText && !piece.isWordLike && mergedLen > 0 && mergedKinds[mergedLen - 1] === "text" && piece.text.length === 1 && piece.text !== "-" && piece.text !== "—" && isRepeatedSingleCharRun(mergedTexts[mergedLen - 1], piece.text)) {
        mergedTexts[mergedLen - 1] += piece.text;
      } else if (isText && !piece.isWordLike && mergedLen > 0 && mergedKinds[mergedLen - 1] === "text" && (isLeftStickyPunctuationSegment(piece.text) || piece.text === "-" && mergedWordLike[mergedLen - 1])) {
        mergedTexts[mergedLen - 1] += piece.text;
      } else {
        mergedTexts[mergedLen] = piece.text;
        mergedWordLike[mergedLen] = piece.isWordLike;
        mergedKinds[mergedLen] = piece.kind;
        mergedStarts[mergedLen] = piece.start;
        mergedLen++;
      }
    }
  }
  for (let i = 1;i < mergedLen; i++) {
    if (mergedKinds[i] === "text" && !mergedWordLike[i] && isEscapedQuoteClusterSegment(mergedTexts[i]) && mergedKinds[i - 1] === "text") {
      mergedTexts[i - 1] += mergedTexts[i];
      mergedWordLike[i - 1] = mergedWordLike[i - 1] || mergedWordLike[i];
      mergedTexts[i] = "";
    }
  }
  for (let i = mergedLen - 2;i >= 0; i--) {
    if (mergedKinds[i] === "text" && !mergedWordLike[i] && isForwardStickyClusterSegment(mergedTexts[i])) {
      let j = i + 1;
      while (j < mergedLen && mergedTexts[j] === "")
        j++;
      if (j < mergedLen && mergedKinds[j] === "text") {
        mergedTexts[j] = mergedTexts[i] + mergedTexts[j];
        mergedStarts[j] = mergedStarts[i];
        mergedTexts[i] = "";
      }
    }
  }
  let compactLen = 0;
  for (let read = 0;read < mergedLen; read++) {
    const text = mergedTexts[read];
    if (text.length === 0)
      continue;
    if (compactLen !== read) {
      mergedTexts[compactLen] = text;
      mergedWordLike[compactLen] = mergedWordLike[read];
      mergedKinds[compactLen] = mergedKinds[read];
      mergedStarts[compactLen] = mergedStarts[read];
    }
    compactLen++;
  }
  mergedTexts.length = compactLen;
  mergedWordLike.length = compactLen;
  mergedKinds.length = compactLen;
  mergedStarts.length = compactLen;
  const compacted = mergeGlueConnectedTextRuns({
    len: compactLen,
    texts: mergedTexts,
    isWordLike: mergedWordLike,
    kinds: mergedKinds,
    starts: mergedStarts
  });
  const withMergedUrls = carryTrailingForwardStickyAcrossCJKBoundary(mergeAsciiPunctuationChains(splitHyphenatedNumericRuns(mergeNumericRuns(mergeUrlQueryRuns(mergeUrlLikeRuns(compacted))))));
  for (let i = 0;i < withMergedUrls.len - 1; i++) {
    const split = splitLeadingSpaceAndMarks(withMergedUrls.texts[i]);
    if (split === null)
      continue;
    if (withMergedUrls.kinds[i] !== "space" && withMergedUrls.kinds[i] !== "preserved-space" || withMergedUrls.kinds[i + 1] !== "text" || !containsArabicScript(withMergedUrls.texts[i + 1])) {
      continue;
    }
    withMergedUrls.texts[i] = split.space;
    withMergedUrls.isWordLike[i] = false;
    withMergedUrls.kinds[i] = withMergedUrls.kinds[i] === "preserved-space" ? "preserved-space" : "space";
    withMergedUrls.texts[i + 1] = split.marks + withMergedUrls.texts[i + 1];
    withMergedUrls.starts[i + 1] = withMergedUrls.starts[i] + split.space.length;
  }
  return withMergedUrls;
}
function compileAnalysisChunks(segmentation, whiteSpaceProfile) {
  if (segmentation.len === 0)
    return [];
  if (!whiteSpaceProfile.preserveHardBreaks) {
    return [{
      startSegmentIndex: 0,
      endSegmentIndex: segmentation.len,
      consumedEndSegmentIndex: segmentation.len
    }];
  }
  const chunks = [];
  let startSegmentIndex = 0;
  for (let i = 0;i < segmentation.len; i++) {
    if (segmentation.kinds[i] !== "hard-break")
      continue;
    chunks.push({
      startSegmentIndex,
      endSegmentIndex: i,
      consumedEndSegmentIndex: i + 1
    });
    startSegmentIndex = i + 1;
  }
  if (startSegmentIndex < segmentation.len) {
    chunks.push({
      startSegmentIndex,
      endSegmentIndex: segmentation.len,
      consumedEndSegmentIndex: segmentation.len
    });
  }
  return chunks;
}
function analyzeText(text, profile, whiteSpace = "normal") {
  const whiteSpaceProfile = getWhiteSpaceProfile(whiteSpace);
  const normalized = whiteSpaceProfile.mode === "pre-wrap" ? normalizeWhitespacePreWrap(text) : normalizeWhitespaceNormal(text);
  if (normalized.length === 0) {
    return {
      normalized,
      chunks: [],
      len: 0,
      texts: [],
      isWordLike: [],
      kinds: [],
      starts: []
    };
  }
  const segmentation = buildMergedSegmentation(normalized, profile, whiteSpaceProfile);
  return {
    normalized,
    chunks: compileAnalysisChunks(segmentation, whiteSpaceProfile),
    ...segmentation
  };
}

// src/measurement.ts
var measureContext = null;
var segmentMetricCaches = new Map;
var cachedEngineProfile = null;
var emojiPresentationRe = /\p{Emoji_Presentation}/u;
var maybeEmojiRe = /[\p{Emoji_Presentation}\p{Extended_Pictographic}\p{Regional_Indicator}\uFE0F\u20E3]/u;
var sharedGraphemeSegmenter = null;
var emojiCorrectionCache = new Map;
function getMeasureContext() {
  if (measureContext !== null)
    return measureContext;
  if (typeof OffscreenCanvas !== "undefined") {
    measureContext = new OffscreenCanvas(1, 1).getContext("2d");
    return measureContext;
  }
  if (typeof document !== "undefined") {
    measureContext = document.createElement("canvas").getContext("2d");
    return measureContext;
  }
  throw new Error("Text measurement requires OffscreenCanvas or a DOM canvas context.");
}
function getSegmentMetricCache(font) {
  let cache = segmentMetricCaches.get(font);
  if (!cache) {
    cache = new Map;
    segmentMetricCaches.set(font, cache);
  }
  return cache;
}
function getSegmentMetrics(seg, cache) {
  let metrics = cache.get(seg);
  if (metrics === undefined) {
    const ctx = getMeasureContext();
    metrics = {
      width: ctx.measureText(seg).width,
      containsCJK: isCJK(seg)
    };
    cache.set(seg, metrics);
  }
  return metrics;
}
function getEngineProfile() {
  if (cachedEngineProfile !== null)
    return cachedEngineProfile;
  if (typeof navigator === "undefined") {
    cachedEngineProfile = {
      lineFitEpsilon: 0.005,
      carryCJKAfterClosingQuote: false,
      preferPrefixWidthsForBreakableRuns: false,
      preferEarlySoftHyphenBreak: false
    };
    return cachedEngineProfile;
  }
  const ua = navigator.userAgent;
  const vendor = navigator.vendor;
  const isSafari = vendor === "Apple Computer, Inc." && ua.includes("Safari/") && !ua.includes("Chrome/") && !ua.includes("Chromium/") && !ua.includes("CriOS/") && !ua.includes("FxiOS/") && !ua.includes("EdgiOS/");
  const isChromium = ua.includes("Chrome/") || ua.includes("Chromium/") || ua.includes("CriOS/") || ua.includes("Edg/");
  cachedEngineProfile = {
    lineFitEpsilon: isSafari ? 1 / 64 : 0.005,
    carryCJKAfterClosingQuote: isChromium,
    preferPrefixWidthsForBreakableRuns: isSafari,
    preferEarlySoftHyphenBreak: isSafari
  };
  return cachedEngineProfile;
}
function parseFontSize(font) {
  const m = font.match(/(\d+(?:\.\d+)?)\s*px/);
  return m ? parseFloat(m[1]) : 16;
}
function getSharedGraphemeSegmenter() {
  if (sharedGraphemeSegmenter === null) {
    sharedGraphemeSegmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
  }
  return sharedGraphemeSegmenter;
}
function isEmojiGrapheme(g) {
  return emojiPresentationRe.test(g) || g.includes("️");
}
function textMayContainEmoji(text) {
  return maybeEmojiRe.test(text);
}
function getEmojiCorrection(font, fontSize) {
  let correction = emojiCorrectionCache.get(font);
  if (correction !== undefined)
    return correction;
  const ctx = getMeasureContext();
  ctx.font = font;
  const canvasW = ctx.measureText("\uD83D\uDE00").width;
  correction = 0;
  if (canvasW > fontSize + 0.5 && typeof document !== "undefined" && document.body !== null) {
    const span = document.createElement("span");
    span.style.font = font;
    span.style.display = "inline-block";
    span.style.visibility = "hidden";
    span.style.position = "absolute";
    span.textContent = "\uD83D\uDE00";
    document.body.appendChild(span);
    const domW = span.getBoundingClientRect().width;
    document.body.removeChild(span);
    if (canvasW - domW > 0.5) {
      correction = canvasW - domW;
    }
  }
  emojiCorrectionCache.set(font, correction);
  return correction;
}
function countEmojiGraphemes(text) {
  let count = 0;
  const graphemeSegmenter = getSharedGraphemeSegmenter();
  for (const g of graphemeSegmenter.segment(text)) {
    if (isEmojiGrapheme(g.segment))
      count++;
  }
  return count;
}
function getEmojiCount(seg, metrics) {
  if (metrics.emojiCount === undefined) {
    metrics.emojiCount = countEmojiGraphemes(seg);
  }
  return metrics.emojiCount;
}
function getCorrectedSegmentWidth(seg, metrics, emojiCorrection) {
  if (emojiCorrection === 0)
    return metrics.width;
  return metrics.width - getEmojiCount(seg, metrics) * emojiCorrection;
}
function getSegmentGraphemeWidths(seg, metrics, cache, emojiCorrection) {
  if (metrics.graphemeWidths !== undefined)
    return metrics.graphemeWidths;
  const widths = [];
  const graphemeSegmenter = getSharedGraphemeSegmenter();
  for (const gs of graphemeSegmenter.segment(seg)) {
    const graphemeMetrics = getSegmentMetrics(gs.segment, cache);
    widths.push(getCorrectedSegmentWidth(gs.segment, graphemeMetrics, emojiCorrection));
  }
  metrics.graphemeWidths = widths.length > 1 ? widths : null;
  return metrics.graphemeWidths;
}
function getSegmentGraphemePrefixWidths(seg, metrics, cache, emojiCorrection) {
  if (metrics.graphemePrefixWidths !== undefined)
    return metrics.graphemePrefixWidths;
  const prefixWidths = [];
  const graphemeSegmenter = getSharedGraphemeSegmenter();
  let prefix = "";
  for (const gs of graphemeSegmenter.segment(seg)) {
    prefix += gs.segment;
    const prefixMetrics = getSegmentMetrics(prefix, cache);
    prefixWidths.push(getCorrectedSegmentWidth(prefix, prefixMetrics, emojiCorrection));
  }
  metrics.graphemePrefixWidths = prefixWidths.length > 1 ? prefixWidths : null;
  return metrics.graphemePrefixWidths;
}
function getFontMeasurementState(font, needsEmojiCorrection) {
  const ctx = getMeasureContext();
  ctx.font = font;
  const cache = getSegmentMetricCache(font);
  const fontSize = parseFontSize(font);
  const emojiCorrection = needsEmojiCorrection ? getEmojiCorrection(font, fontSize) : 0;
  return { cache, fontSize, emojiCorrection };
}

// src/line-break.ts
function canBreakAfter(kind) {
  return kind === "space" || kind === "preserved-space" || kind === "tab" || kind === "zero-width-break" || kind === "soft-hyphen";
}
function getTabAdvance(lineWidth, tabStopAdvance) {
  if (tabStopAdvance <= 0)
    return 0;
  const remainder = lineWidth % tabStopAdvance;
  if (Math.abs(remainder) <= 0.000001)
    return tabStopAdvance;
  return tabStopAdvance - remainder;
}
function getBreakableAdvance(graphemeWidths, graphemePrefixWidths, graphemeIndex, preferPrefixWidths) {
  if (!preferPrefixWidths || graphemePrefixWidths === null) {
    return graphemeWidths[graphemeIndex];
  }
  return graphemePrefixWidths[graphemeIndex] - (graphemeIndex > 0 ? graphemePrefixWidths[graphemeIndex - 1] : 0);
}
function fitSoftHyphenBreak(graphemeWidths, initialWidth, maxWidth, lineFitEpsilon, discretionaryHyphenWidth, cumulativeWidths) {
  let fitCount = 0;
  let fittedWidth = initialWidth;
  while (fitCount < graphemeWidths.length) {
    const nextWidth = cumulativeWidths ? initialWidth + graphemeWidths[fitCount] : fittedWidth + graphemeWidths[fitCount];
    const nextLineWidth = fitCount + 1 < graphemeWidths.length ? nextWidth + discretionaryHyphenWidth : nextWidth;
    if (nextLineWidth > maxWidth + lineFitEpsilon)
      break;
    fittedWidth = nextWidth;
    fitCount++;
  }
  return { fitCount, fittedWidth };
}
function walkPreparedLinesSimple(prepared, maxWidth, onLine) {
  const { widths, kinds, breakableWidths, breakablePrefixWidths } = prepared;
  if (widths.length === 0)
    return 0;
  const engineProfile = getEngineProfile();
  const lineFitEpsilon = engineProfile.lineFitEpsilon;
  let lineCount = 0;
  let lineW = 0;
  let hasContent = false;
  let lineStartSegmentIndex = 0;
  let lineStartGraphemeIndex = 0;
  let lineEndSegmentIndex = 0;
  let lineEndGraphemeIndex = 0;
  let pendingBreakSegmentIndex = -1;
  let pendingBreakPaintWidth = 0;
  function clearPendingBreak() {
    pendingBreakSegmentIndex = -1;
    pendingBreakPaintWidth = 0;
  }
  function emitCurrentLine(endSegmentIndex = lineEndSegmentIndex, endGraphemeIndex = lineEndGraphemeIndex, width = lineW) {
    lineCount++;
    onLine?.({
      startSegmentIndex: lineStartSegmentIndex,
      startGraphemeIndex: lineStartGraphemeIndex,
      endSegmentIndex,
      endGraphemeIndex,
      width
    });
    lineW = 0;
    hasContent = false;
    clearPendingBreak();
  }
  function startLineAtSegment(segmentIndex, width) {
    hasContent = true;
    lineStartSegmentIndex = segmentIndex;
    lineStartGraphemeIndex = 0;
    lineEndSegmentIndex = segmentIndex + 1;
    lineEndGraphemeIndex = 0;
    lineW = width;
  }
  function startLineAtGrapheme(segmentIndex, graphemeIndex, width) {
    hasContent = true;
    lineStartSegmentIndex = segmentIndex;
    lineStartGraphemeIndex = graphemeIndex;
    lineEndSegmentIndex = segmentIndex;
    lineEndGraphemeIndex = graphemeIndex + 1;
    lineW = width;
  }
  function appendWholeSegment(segmentIndex, width) {
    if (!hasContent) {
      startLineAtSegment(segmentIndex, width);
      return;
    }
    lineW += width;
    lineEndSegmentIndex = segmentIndex + 1;
    lineEndGraphemeIndex = 0;
  }
  function updatePendingBreak(segmentIndex, segmentWidth) {
    if (!canBreakAfter(kinds[segmentIndex]))
      return;
    pendingBreakSegmentIndex = segmentIndex + 1;
    pendingBreakPaintWidth = lineW - segmentWidth;
  }
  function appendBreakableSegment(segmentIndex) {
    appendBreakableSegmentFrom(segmentIndex, 0);
  }
  function appendBreakableSegmentFrom(segmentIndex, startGraphemeIndex) {
    const gWidths = breakableWidths[segmentIndex];
    const gPrefixWidths = breakablePrefixWidths[segmentIndex] ?? null;
    for (let g = startGraphemeIndex;g < gWidths.length; g++) {
      const gw = getBreakableAdvance(gWidths, gPrefixWidths, g, engineProfile.preferPrefixWidthsForBreakableRuns);
      if (!hasContent) {
        startLineAtGrapheme(segmentIndex, g, gw);
        continue;
      }
      if (lineW + gw > maxWidth + lineFitEpsilon) {
        emitCurrentLine();
        startLineAtGrapheme(segmentIndex, g, gw);
      } else {
        lineW += gw;
        lineEndSegmentIndex = segmentIndex;
        lineEndGraphemeIndex = g + 1;
      }
    }
    if (hasContent && lineEndSegmentIndex === segmentIndex && lineEndGraphemeIndex === gWidths.length) {
      lineEndSegmentIndex = segmentIndex + 1;
      lineEndGraphemeIndex = 0;
    }
  }
  let i = 0;
  while (i < widths.length) {
    const w = widths[i];
    const kind = kinds[i];
    if (!hasContent) {
      if (w > maxWidth && breakableWidths[i] !== null) {
        appendBreakableSegment(i);
      } else {
        startLineAtSegment(i, w);
      }
      updatePendingBreak(i, w);
      i++;
      continue;
    }
    const newW = lineW + w;
    if (newW > maxWidth + lineFitEpsilon) {
      if (canBreakAfter(kind)) {
        appendWholeSegment(i, w);
        emitCurrentLine(i + 1, 0, lineW - w);
        i++;
        continue;
      }
      if (pendingBreakSegmentIndex >= 0) {
        emitCurrentLine(pendingBreakSegmentIndex, 0, pendingBreakPaintWidth);
        continue;
      }
      if (w > maxWidth && breakableWidths[i] !== null) {
        emitCurrentLine();
        appendBreakableSegment(i);
        i++;
        continue;
      }
      emitCurrentLine();
      continue;
    }
    appendWholeSegment(i, w);
    updatePendingBreak(i, w);
    i++;
  }
  if (hasContent)
    emitCurrentLine();
  return lineCount;
}
function walkPreparedLines(prepared, maxWidth, onLine) {
  if (prepared.simpleLineWalkFastPath) {
    return walkPreparedLinesSimple(prepared, maxWidth, onLine);
  }
  const {
    widths,
    lineEndFitAdvances,
    lineEndPaintAdvances,
    kinds,
    breakableWidths,
    breakablePrefixWidths,
    discretionaryHyphenWidth,
    tabStopAdvance,
    chunks
  } = prepared;
  if (widths.length === 0 || chunks.length === 0)
    return 0;
  const engineProfile = getEngineProfile();
  const lineFitEpsilon = engineProfile.lineFitEpsilon;
  let lineCount = 0;
  let lineW = 0;
  let hasContent = false;
  let lineStartSegmentIndex = 0;
  let lineStartGraphemeIndex = 0;
  let lineEndSegmentIndex = 0;
  let lineEndGraphemeIndex = 0;
  let pendingBreakSegmentIndex = -1;
  let pendingBreakFitWidth = 0;
  let pendingBreakPaintWidth = 0;
  let pendingBreakKind = null;
  function clearPendingBreak() {
    pendingBreakSegmentIndex = -1;
    pendingBreakFitWidth = 0;
    pendingBreakPaintWidth = 0;
    pendingBreakKind = null;
  }
  function emitCurrentLine(endSegmentIndex = lineEndSegmentIndex, endGraphemeIndex = lineEndGraphemeIndex, width = lineW) {
    lineCount++;
    onLine?.({
      startSegmentIndex: lineStartSegmentIndex,
      startGraphemeIndex: lineStartGraphemeIndex,
      endSegmentIndex,
      endGraphemeIndex,
      width
    });
    lineW = 0;
    hasContent = false;
    clearPendingBreak();
  }
  function startLineAtSegment(segmentIndex, width) {
    hasContent = true;
    lineStartSegmentIndex = segmentIndex;
    lineStartGraphemeIndex = 0;
    lineEndSegmentIndex = segmentIndex + 1;
    lineEndGraphemeIndex = 0;
    lineW = width;
  }
  function startLineAtGrapheme(segmentIndex, graphemeIndex, width) {
    hasContent = true;
    lineStartSegmentIndex = segmentIndex;
    lineStartGraphemeIndex = graphemeIndex;
    lineEndSegmentIndex = segmentIndex;
    lineEndGraphemeIndex = graphemeIndex + 1;
    lineW = width;
  }
  function appendWholeSegment(segmentIndex, width) {
    if (!hasContent) {
      startLineAtSegment(segmentIndex, width);
      return;
    }
    lineW += width;
    lineEndSegmentIndex = segmentIndex + 1;
    lineEndGraphemeIndex = 0;
  }
  function updatePendingBreakForWholeSegment(segmentIndex, segmentWidth) {
    if (!canBreakAfter(kinds[segmentIndex]))
      return;
    const fitAdvance = kinds[segmentIndex] === "tab" ? 0 : lineEndFitAdvances[segmentIndex];
    const paintAdvance = kinds[segmentIndex] === "tab" ? segmentWidth : lineEndPaintAdvances[segmentIndex];
    pendingBreakSegmentIndex = segmentIndex + 1;
    pendingBreakFitWidth = lineW - segmentWidth + fitAdvance;
    pendingBreakPaintWidth = lineW - segmentWidth + paintAdvance;
    pendingBreakKind = kinds[segmentIndex];
  }
  function appendBreakableSegment(segmentIndex) {
    appendBreakableSegmentFrom(segmentIndex, 0);
  }
  function appendBreakableSegmentFrom(segmentIndex, startGraphemeIndex) {
    const gWidths = breakableWidths[segmentIndex];
    const gPrefixWidths = breakablePrefixWidths[segmentIndex] ?? null;
    for (let g = startGraphemeIndex;g < gWidths.length; g++) {
      const gw = getBreakableAdvance(gWidths, gPrefixWidths, g, engineProfile.preferPrefixWidthsForBreakableRuns);
      if (!hasContent) {
        startLineAtGrapheme(segmentIndex, g, gw);
        continue;
      }
      if (lineW + gw > maxWidth + lineFitEpsilon) {
        emitCurrentLine();
        startLineAtGrapheme(segmentIndex, g, gw);
      } else {
        lineW += gw;
        lineEndSegmentIndex = segmentIndex;
        lineEndGraphemeIndex = g + 1;
      }
    }
    if (hasContent && lineEndSegmentIndex === segmentIndex && lineEndGraphemeIndex === gWidths.length) {
      lineEndSegmentIndex = segmentIndex + 1;
      lineEndGraphemeIndex = 0;
    }
  }
  function continueSoftHyphenBreakableSegment(segmentIndex) {
    if (pendingBreakKind !== "soft-hyphen")
      return false;
    const gWidths = breakableWidths[segmentIndex];
    if (gWidths === null)
      return false;
    const fitWidths = engineProfile.preferPrefixWidthsForBreakableRuns ? breakablePrefixWidths[segmentIndex] ?? gWidths : gWidths;
    const usesPrefixWidths = fitWidths !== gWidths;
    const { fitCount, fittedWidth } = fitSoftHyphenBreak(fitWidths, lineW, maxWidth, lineFitEpsilon, discretionaryHyphenWidth, usesPrefixWidths);
    if (fitCount === 0)
      return false;
    lineW = fittedWidth;
    lineEndSegmentIndex = segmentIndex;
    lineEndGraphemeIndex = fitCount;
    clearPendingBreak();
    if (fitCount === gWidths.length) {
      lineEndSegmentIndex = segmentIndex + 1;
      lineEndGraphemeIndex = 0;
      return true;
    }
    emitCurrentLine(segmentIndex, fitCount, fittedWidth + discretionaryHyphenWidth);
    appendBreakableSegmentFrom(segmentIndex, fitCount);
    return true;
  }
  function emitEmptyChunk(chunk) {
    lineCount++;
    onLine?.({
      startSegmentIndex: chunk.startSegmentIndex,
      startGraphemeIndex: 0,
      endSegmentIndex: chunk.consumedEndSegmentIndex,
      endGraphemeIndex: 0,
      width: 0
    });
    clearPendingBreak();
  }
  for (let chunkIndex = 0;chunkIndex < chunks.length; chunkIndex++) {
    const chunk = chunks[chunkIndex];
    if (chunk.startSegmentIndex === chunk.endSegmentIndex) {
      emitEmptyChunk(chunk);
      continue;
    }
    hasContent = false;
    lineW = 0;
    lineStartSegmentIndex = chunk.startSegmentIndex;
    lineStartGraphemeIndex = 0;
    lineEndSegmentIndex = chunk.startSegmentIndex;
    lineEndGraphemeIndex = 0;
    clearPendingBreak();
    let i = chunk.startSegmentIndex;
    while (i < chunk.endSegmentIndex) {
      const kind = kinds[i];
      const w = kind === "tab" ? getTabAdvance(lineW, tabStopAdvance) : widths[i];
      if (kind === "soft-hyphen") {
        if (hasContent) {
          lineEndSegmentIndex = i + 1;
          lineEndGraphemeIndex = 0;
          pendingBreakSegmentIndex = i + 1;
          pendingBreakFitWidth = lineW + discretionaryHyphenWidth;
          pendingBreakPaintWidth = lineW + discretionaryHyphenWidth;
          pendingBreakKind = kind;
        }
        i++;
        continue;
      }
      if (!hasContent) {
        if (w > maxWidth && breakableWidths[i] !== null) {
          appendBreakableSegment(i);
        } else {
          startLineAtSegment(i, w);
        }
        updatePendingBreakForWholeSegment(i, w);
        i++;
        continue;
      }
      const newW = lineW + w;
      if (newW > maxWidth + lineFitEpsilon) {
        const currentBreakFitWidth = lineW + (kind === "tab" ? 0 : lineEndFitAdvances[i]);
        const currentBreakPaintWidth = lineW + (kind === "tab" ? w : lineEndPaintAdvances[i]);
        if (pendingBreakKind === "soft-hyphen" && engineProfile.preferEarlySoftHyphenBreak && pendingBreakFitWidth <= maxWidth + lineFitEpsilon) {
          emitCurrentLine(pendingBreakSegmentIndex, 0, pendingBreakPaintWidth);
          continue;
        }
        if (pendingBreakKind === "soft-hyphen" && continueSoftHyphenBreakableSegment(i)) {
          i++;
          continue;
        }
        if (canBreakAfter(kind) && currentBreakFitWidth <= maxWidth + lineFitEpsilon) {
          appendWholeSegment(i, w);
          emitCurrentLine(i + 1, 0, currentBreakPaintWidth);
          i++;
          continue;
        }
        if (pendingBreakSegmentIndex >= 0 && pendingBreakFitWidth <= maxWidth + lineFitEpsilon) {
          emitCurrentLine(pendingBreakSegmentIndex, 0, pendingBreakPaintWidth);
          continue;
        }
        if (w > maxWidth && breakableWidths[i] !== null) {
          emitCurrentLine();
          appendBreakableSegment(i);
          i++;
          continue;
        }
        emitCurrentLine();
        continue;
      }
      appendWholeSegment(i, w);
      updatePendingBreakForWholeSegment(i, w);
      i++;
    }
    if (hasContent) {
      const finalPaintWidth = pendingBreakSegmentIndex === chunk.consumedEndSegmentIndex ? pendingBreakPaintWidth : lineW;
      emitCurrentLine(chunk.consumedEndSegmentIndex, 0, finalPaintWidth);
    }
  }
  return lineCount;
}

// src/layout.ts
var sharedGraphemeSegmenter2 = null;
var sharedLineTextCaches = new WeakMap;
function getSharedGraphemeSegmenter2() {
  if (sharedGraphemeSegmenter2 === null) {
    sharedGraphemeSegmenter2 = new Intl.Segmenter(undefined, { granularity: "grapheme" });
  }
  return sharedGraphemeSegmenter2;
}
function createEmptyPrepared(includeSegments) {
  if (includeSegments) {
    return {
      widths: [],
      lineEndFitAdvances: [],
      lineEndPaintAdvances: [],
      kinds: [],
      simpleLineWalkFastPath: true,
      segLevels: null,
      breakableWidths: [],
      breakablePrefixWidths: [],
      discretionaryHyphenWidth: 0,
      tabStopAdvance: 0,
      chunks: [],
      segments: []
    };
  }
  return {
    widths: [],
    lineEndFitAdvances: [],
    lineEndPaintAdvances: [],
    kinds: [],
    simpleLineWalkFastPath: true,
    segLevels: null,
    breakableWidths: [],
    breakablePrefixWidths: [],
    discretionaryHyphenWidth: 0,
    tabStopAdvance: 0,
    chunks: []
  };
}
function measureAnalysis(analysis, font, includeSegments) {
  const graphemeSegmenter = getSharedGraphemeSegmenter2();
  const engineProfile = getEngineProfile();
  const { cache, emojiCorrection } = getFontMeasurementState(font, textMayContainEmoji(analysis.normalized));
  const discretionaryHyphenWidth = getCorrectedSegmentWidth("-", getSegmentMetrics("-", cache), emojiCorrection);
  const spaceWidth = getCorrectedSegmentWidth(" ", getSegmentMetrics(" ", cache), emojiCorrection);
  const tabStopAdvance = spaceWidth * 8;
  if (analysis.len === 0)
    return createEmptyPrepared(includeSegments);
  const widths = [];
  const lineEndFitAdvances = [];
  const lineEndPaintAdvances = [];
  const kinds = [];
  let simpleLineWalkFastPath = analysis.chunks.length <= 1;
  const segStarts = includeSegments ? [] : null;
  const breakableWidths = [];
  const breakablePrefixWidths = [];
  const segments = includeSegments ? [] : null;
  const preparedStartByAnalysisIndex = Array.from({ length: analysis.len });
  const preparedEndByAnalysisIndex = Array.from({ length: analysis.len });
  function pushMeasuredSegment(text, width, lineEndFitAdvance, lineEndPaintAdvance, kind, start, breakable, breakablePrefix) {
    if (kind !== "text" && kind !== "space" && kind !== "zero-width-break") {
      simpleLineWalkFastPath = false;
    }
    widths.push(width);
    lineEndFitAdvances.push(lineEndFitAdvance);
    lineEndPaintAdvances.push(lineEndPaintAdvance);
    kinds.push(kind);
    segStarts?.push(start);
    breakableWidths.push(breakable);
    breakablePrefixWidths.push(breakablePrefix);
    if (segments !== null)
      segments.push(text);
  }
  for (let mi = 0;mi < analysis.len; mi++) {
    preparedStartByAnalysisIndex[mi] = widths.length;
    const segText = analysis.texts[mi];
    const segWordLike = analysis.isWordLike[mi];
    const segKind = analysis.kinds[mi];
    const segStart = analysis.starts[mi];
    if (segKind === "soft-hyphen") {
      pushMeasuredSegment(segText, 0, discretionaryHyphenWidth, discretionaryHyphenWidth, segKind, segStart, null, null);
      preparedEndByAnalysisIndex[mi] = widths.length;
      continue;
    }
    if (segKind === "hard-break") {
      pushMeasuredSegment(segText, 0, 0, 0, segKind, segStart, null, null);
      preparedEndByAnalysisIndex[mi] = widths.length;
      continue;
    }
    if (segKind === "tab") {
      pushMeasuredSegment(segText, 0, 0, 0, segKind, segStart, null, null);
      preparedEndByAnalysisIndex[mi] = widths.length;
      continue;
    }
    const segMetrics = getSegmentMetrics(segText, cache);
    if (segKind === "text" && segMetrics.containsCJK) {
      let unitText = "";
      let unitStart = 0;
      for (const gs of graphemeSegmenter.segment(segText)) {
        const grapheme = gs.segment;
        if (unitText.length === 0) {
          unitText = grapheme;
          unitStart = gs.index;
          continue;
        }
        if (kinsokuEnd.has(unitText) || kinsokuStart.has(grapheme) || leftStickyPunctuation.has(grapheme) || engineProfile.carryCJKAfterClosingQuote && isCJK(grapheme) && endsWithClosingQuote(unitText)) {
          unitText += grapheme;
          continue;
        }
        const unitMetrics = getSegmentMetrics(unitText, cache);
        const w2 = getCorrectedSegmentWidth(unitText, unitMetrics, emojiCorrection);
        pushMeasuredSegment(unitText, w2, w2, w2, "text", segStart + unitStart, null, null);
        unitText = grapheme;
        unitStart = gs.index;
      }
      if (unitText.length > 0) {
        const unitMetrics = getSegmentMetrics(unitText, cache);
        const w2 = getCorrectedSegmentWidth(unitText, unitMetrics, emojiCorrection);
        pushMeasuredSegment(unitText, w2, w2, w2, "text", segStart + unitStart, null, null);
      }
      preparedEndByAnalysisIndex[mi] = widths.length;
      continue;
    }
    const w = getCorrectedSegmentWidth(segText, segMetrics, emojiCorrection);
    const lineEndFitAdvance = segKind === "space" || segKind === "preserved-space" || segKind === "zero-width-break" ? 0 : w;
    const lineEndPaintAdvance = segKind === "space" || segKind === "zero-width-break" ? 0 : w;
    if (segWordLike && segText.length > 1) {
      const graphemeWidths = getSegmentGraphemeWidths(segText, segMetrics, cache, emojiCorrection);
      const graphemePrefixWidths = engineProfile.preferPrefixWidthsForBreakableRuns ? getSegmentGraphemePrefixWidths(segText, segMetrics, cache, emojiCorrection) : null;
      pushMeasuredSegment(segText, w, lineEndFitAdvance, lineEndPaintAdvance, segKind, segStart, graphemeWidths, graphemePrefixWidths);
    } else {
      pushMeasuredSegment(segText, w, lineEndFitAdvance, lineEndPaintAdvance, segKind, segStart, null, null);
    }
    preparedEndByAnalysisIndex[mi] = widths.length;
  }
  const chunks = mapAnalysisChunksToPreparedChunks(analysis.chunks, preparedStartByAnalysisIndex, preparedEndByAnalysisIndex);
  const segLevels = segStarts === null ? null : computeSegmentLevels(analysis.normalized, segStarts);
  if (segments !== null) {
    return {
      widths,
      lineEndFitAdvances,
      lineEndPaintAdvances,
      kinds,
      simpleLineWalkFastPath,
      segLevels,
      breakableWidths,
      breakablePrefixWidths,
      discretionaryHyphenWidth,
      tabStopAdvance,
      chunks,
      segments
    };
  }
  return {
    widths,
    lineEndFitAdvances,
    lineEndPaintAdvances,
    kinds,
    simpleLineWalkFastPath,
    segLevels,
    breakableWidths,
    breakablePrefixWidths,
    discretionaryHyphenWidth,
    tabStopAdvance,
    chunks
  };
}
function mapAnalysisChunksToPreparedChunks(chunks, preparedStartByAnalysisIndex, preparedEndByAnalysisIndex) {
  const preparedChunks = [];
  for (let i = 0;i < chunks.length; i++) {
    const chunk = chunks[i];
    const startSegmentIndex = chunk.startSegmentIndex < preparedStartByAnalysisIndex.length ? preparedStartByAnalysisIndex[chunk.startSegmentIndex] : preparedEndByAnalysisIndex[preparedEndByAnalysisIndex.length - 1] ?? 0;
    const endSegmentIndex = chunk.endSegmentIndex < preparedStartByAnalysisIndex.length ? preparedStartByAnalysisIndex[chunk.endSegmentIndex] : preparedEndByAnalysisIndex[preparedEndByAnalysisIndex.length - 1] ?? 0;
    const consumedEndSegmentIndex = chunk.consumedEndSegmentIndex < preparedStartByAnalysisIndex.length ? preparedStartByAnalysisIndex[chunk.consumedEndSegmentIndex] : preparedEndByAnalysisIndex[preparedEndByAnalysisIndex.length - 1] ?? 0;
    preparedChunks.push({
      startSegmentIndex,
      endSegmentIndex,
      consumedEndSegmentIndex
    });
  }
  return preparedChunks;
}
function prepareInternal(text, font, includeSegments, options) {
  const analysis = analyzeText(text, getEngineProfile(), options?.whiteSpace);
  return measureAnalysis(analysis, font, includeSegments);
}
function prepareWithSegments(text, font, options) {
  return prepareInternal(text, font, true, options);
}
function getInternalPrepared(prepared) {
  return prepared;
}
function getSegmentGraphemes(segmentIndex, segments, cache) {
  let graphemes = cache.get(segmentIndex);
  if (graphemes !== undefined)
    return graphemes;
  graphemes = [];
  const graphemeSegmenter = getSharedGraphemeSegmenter2();
  for (const gs of graphemeSegmenter.segment(segments[segmentIndex])) {
    graphemes.push(gs.segment);
  }
  cache.set(segmentIndex, graphemes);
  return graphemes;
}
function getLineTextCache(prepared) {
  let cache = sharedLineTextCaches.get(prepared);
  if (cache !== undefined)
    return cache;
  cache = new Map;
  sharedLineTextCaches.set(prepared, cache);
  return cache;
}
function lineHasDiscretionaryHyphen(kinds, startSegmentIndex, startGraphemeIndex, endSegmentIndex) {
  return endSegmentIndex > 0 && kinds[endSegmentIndex - 1] === "soft-hyphen" && !(startSegmentIndex === endSegmentIndex && startGraphemeIndex > 0);
}
function buildLineTextFromRange(segments, kinds, cache, startSegmentIndex, startGraphemeIndex, endSegmentIndex, endGraphemeIndex) {
  let text = "";
  const endsWithDiscretionaryHyphen = lineHasDiscretionaryHyphen(kinds, startSegmentIndex, startGraphemeIndex, endSegmentIndex);
  for (let i = startSegmentIndex;i < endSegmentIndex; i++) {
    if (kinds[i] === "soft-hyphen" || kinds[i] === "hard-break")
      continue;
    if (i === startSegmentIndex && startGraphemeIndex > 0) {
      text += getSegmentGraphemes(i, segments, cache).slice(startGraphemeIndex).join("");
    } else {
      text += segments[i];
    }
  }
  if (endGraphemeIndex > 0) {
    if (endsWithDiscretionaryHyphen)
      text += "-";
    text += getSegmentGraphemes(endSegmentIndex, segments, cache).slice(startSegmentIndex === endSegmentIndex ? startGraphemeIndex : 0, endGraphemeIndex).join("");
  } else if (endsWithDiscretionaryHyphen) {
    text += "-";
  }
  return text;
}
function createLayoutLine(prepared, cache, width, startSegmentIndex, startGraphemeIndex, endSegmentIndex, endGraphemeIndex) {
  return {
    text: buildLineTextFromRange(prepared.segments, prepared.kinds, cache, startSegmentIndex, startGraphemeIndex, endSegmentIndex, endGraphemeIndex),
    width,
    start: {
      segmentIndex: startSegmentIndex,
      graphemeIndex: startGraphemeIndex
    },
    end: {
      segmentIndex: endSegmentIndex,
      graphemeIndex: endGraphemeIndex
    }
  };
}
function materializeLayoutLine(prepared, cache, line) {
  return createLayoutLine(prepared, cache, line.width, line.startSegmentIndex, line.startGraphemeIndex, line.endSegmentIndex, line.endGraphemeIndex);
}
function layoutWithLines(prepared, maxWidth, lineHeight) {
  const lines = [];
  if (prepared.widths.length === 0)
    return { lineCount: 0, height: 0, lines };
  const graphemeCache = getLineTextCache(prepared);
  const lineCount = walkPreparedLines(getInternalPrepared(prepared), maxWidth, (line) => {
    lines.push(materializeLayoutLine(prepared, graphemeCache, line));
  });
  return { lineCount, height: lineCount * lineHeight, lines };
}

// pages/demos/wordbomb.ts
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
var C = {
  bg: "#c0c0c0",
  white: "#ffffff",
  mid: "#808080",
  dark: "#404040",
  black: "#000000",
  ledBg: "#000000",
  ledRed: "#ff0000",
  ledDim: "#3a0000",
  header: "#c0c0c0"
};
var HEADER_H = 52;
var BORDER = 3;
var FONT_SIZE = 13;
var FONT = `bold ${FONT_SIZE}px Arial, sans-serif`;
var LINE_H = FONT_SIZE * 1.5;
var PAD_X = 9;
var PAD_Y = 6;
var TILE_H = FONT_SIZE + PAD_Y * 2;
var GAP = 2;
var GRAVITY = 0.52;
var BOUNCE = 0.28;
var FRICTION = 0.76;
var BLAST_RADIUS = 200;
var MAX_FORCE = 26;
var BASE_WORDS = [
  "reflow",
  "canvas",
  "layout",
  "medição",
  "linha",
  "pixel",
  "render",
  "cursor",
  "bomba",
  "texto",
  "largura",
  "prepare",
  "DOM",
  "emoji",
  "CJK",
  "cache",
  "segmento",
  "bidi",
  "unicode",
  "resize",
  "overflow",
  "wrap",
  "pretext",
  "fonte",
  "kerning",
  "glifo",
  "árabe",
  "tailandês",
  "altura",
  "quebra",
  "widget",
  "grid",
  "física",
  "gravidade",
  "impacto",
  "explosão",
  "colisão",
  "velocidade",
  "rotação",
  "âncora",
  "medida",
  "fluxo",
  "intl",
  "segmenter",
  "grapheme",
  "cluster",
  "break",
  "hyphen",
  "justify",
  "baseline",
  "ascender",
  "leading",
  "ligature",
  "glyph"
];
var words = [];
var rings = [];
var sparks = [];
var mouseX = -999;
var mouseY = -999;
var startTime = Date.now();
var explodeCount = 0;
function tileRaised(x, y, w, h) {
  ctx.fillStyle = C.bg;
  ctx.fillRect(x, y, w, h);
  ctx.fillStyle = C.white;
  ctx.fillRect(x, y, w, 2);
  ctx.fillRect(x, y, 2, h);
  ctx.fillStyle = C.mid;
  ctx.fillRect(x, y + h - 2, w, 2);
  ctx.fillRect(x + w - 2, y, 2, h);
  ctx.fillStyle = C.dark;
  ctx.fillRect(x + 1, y + h - 1, w - 2, 1);
  ctx.fillRect(x + w - 1, y + 1, 1, h - 2);
}
function tileSunken(x, y, w, h) {
  ctx.fillStyle = "#aaaaaa";
  ctx.fillRect(x, y, w, h);
  ctx.fillStyle = C.mid;
  ctx.fillRect(x, y, w, 2);
  ctx.fillRect(x, y, 2, h);
  ctx.fillStyle = C.white;
  ctx.fillRect(x, y + h - 2, w, 2);
  ctx.fillRect(x + w - 2, y, 2, h);
}
var SEG_MAP = [
  [true, true, true, true, true, true, false],
  [false, true, true, false, false, false, false],
  [true, true, false, true, true, false, true],
  [true, true, true, true, false, false, true],
  [false, true, true, false, false, true, true],
  [true, false, true, true, false, true, true],
  [true, false, true, true, true, true, true],
  [true, true, true, false, false, false, false],
  [true, true, true, true, true, true, true],
  [true, true, true, true, false, true, true]
];
function drawLEDDigit(x, y, digit, w = 14, h = 24) {
  const sw = 2.5;
  const segs = SEG_MAP[Math.max(0, Math.min(9, digit))];
  const color = (on) => on ? C.ledRed : C.ledDim;
  ctx.fillStyle = color(segs[0]);
  ctx.fillRect(x + sw, y, w - sw * 2, sw);
  ctx.fillStyle = color(segs[1]);
  ctx.fillRect(x + w - sw, y + sw, sw, h / 2 - sw);
  ctx.fillStyle = color(segs[2]);
  ctx.fillRect(x + w - sw, y + h / 2 + sw, sw, h / 2 - sw * 2);
  ctx.fillStyle = color(segs[3]);
  ctx.fillRect(x + sw, y + h - sw, w - sw * 2, sw);
  ctx.fillStyle = color(segs[4]);
  ctx.fillRect(x, y + h / 2 + sw, sw, h / 2 - sw * 2);
  ctx.fillStyle = color(segs[5]);
  ctx.fillRect(x, y + sw, sw, h / 2 - sw);
  ctx.fillStyle = color(segs[6]);
  ctx.fillRect(x + sw, y + h / 2 - sw / 2, w - sw * 2, sw);
}
function drawLED(x, y, value, digits = 3) {
  const DW = 18;
  const DH = 28;
  const PAD = 4;
  const totalW = DW * digits + PAD * 2;
  const totalH = DH + PAD * 2;
  ctx.fillStyle = C.dark;
  ctx.fillRect(x, y, totalW, totalH);
  ctx.fillStyle = C.mid;
  ctx.fillRect(x + 1, y + 1, totalW - 2, totalH - 2);
  ctx.fillStyle = C.ledBg;
  ctx.fillRect(x + 2, y + 2, totalW - 4, totalH - 4);
  const str = Math.min(999, Math.max(0, value)).toString().padStart(digits, "0");
  for (let i = 0;i < digits; i++) {
    drawLEDDigit(x + PAD + i * DW, y + PAD, Number(str[i]), DW - 2, DH);
  }
}
var faceState = "normal";
var facePressed = false;
var FACE_R = 16;
function drawFace(cx, cy) {
  const r = FACE_R;
  if (facePressed) {
    tileSunken(cx - r - 2, cy - r - 2, (r + 2) * 2, (r + 2) * 2);
  } else {
    tileRaised(cx - r - 2, cy - r - 2, (r + 2) * 2, (r + 2) * 2);
  }
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fillStyle = "#ffff00";
  ctx.fill();
  ctx.strokeStyle = C.dark;
  ctx.lineWidth = 1;
  ctx.stroke();
  if (faceState === "dead") {
    ctx.strokeStyle = C.black;
    ctx.lineWidth = 2;
    for (const ox of [-6, 5]) {
      ctx.beginPath();
      ctx.moveTo(cx + ox - 2, cy - 6);
      ctx.lineTo(cx + ox + 2, cy - 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx + ox + 2, cy - 6);
      ctx.lineTo(cx + ox - 2, cy - 2);
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.moveTo(cx - 6, cy + 6);
    ctx.bezierCurveTo(cx - 2, cy + 3, cx + 2, cy + 9, cx + 6, cy + 6);
    ctx.strokeStyle = C.black;
    ctx.lineWidth = 2;
    ctx.stroke();
  } else if (faceState === "cool") {
    ctx.fillStyle = C.black;
    ctx.fillRect(cx - 9, cy - 6, 8, 5);
    ctx.fillRect(cx + 1, cy - 6, 8, 5);
    ctx.fillRect(cx - 1, cy - 5, 2, 3);
    ctx.beginPath();
    ctx.arc(cx, cy + 3, 6, 0.2, Math.PI - 0.2);
    ctx.strokeStyle = C.black;
    ctx.lineWidth = 2;
    ctx.stroke();
  } else {
    ctx.fillStyle = C.black;
    ctx.fillRect(cx - 7, cy - 6, 3, 4);
    ctx.fillRect(cx + 4, cy - 6, 3, 4);
    ctx.beginPath();
    ctx.arc(cx, cy + 2, 6, 0.2, Math.PI - 0.2);
    ctx.strokeStyle = C.black;
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}
function drawBomb(cx, cy) {
  const R = 11;
  const SL = 6;
  const SS = 3.5;
  ctx.save();
  ctx.translate(cx, cy);
  ctx.strokeStyle = C.black;
  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  for (let i = 0;i < 4; i++) {
    const a = Math.PI / 4 + i * Math.PI / 2;
    ctx.beginPath();
    ctx.moveTo(Math.cos(a) * (R - 1), Math.sin(a) * (R - 1));
    ctx.lineTo(Math.cos(a) * (R + SL), Math.sin(a) * (R + SL));
    ctx.stroke();
  }
  for (let i = 0;i < 4; i++) {
    const a = i * Math.PI / 2;
    ctx.beginPath();
    ctx.moveTo(Math.cos(a) * (R - 1), Math.sin(a) * (R - 1));
    ctx.lineTo(Math.cos(a) * (R + SS), Math.sin(a) * (R + SS));
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.arc(2, 3, R, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(0,0,0,0.25)";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(0, 0, R, 0, Math.PI * 2);
  ctx.fillStyle = "#111";
  ctx.fill();
  ctx.strokeStyle = C.black;
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(-3.5, -3.5, 3.5, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255,255,255,0.65)";
  ctx.fill();
  ctx.restore();
}
function drawHeader() {
  const W = canvas.width;
  tileRaised(0, 0, W, canvas.height);
  tileRaised(BORDER, BORDER, W - BORDER * 2, HEADER_H);
  const minesLeft = words.filter((w) => !w.live).length;
  const secs = Math.min(999, Math.floor((Date.now() - startTime) / 1000));
  drawLED(BORDER + 8, BORDER + (HEADER_H - 36) / 2, minesLeft);
  const cx = W / 2;
  const cy = BORDER + HEADER_H / 2;
  drawFace(cx, cy);
  const ledW = 18 * 3 + 8;
  drawLED(W - BORDER - ledW - 8, BORDER + (HEADER_H - 36) / 2, secs);
}
function gridTop() {
  return HEADER_H + BORDER * 2 + 6;
}
function measureAll() {
  const map = new Map;
  for (const text of BASE_WORDS) {
    if (map.has(text))
      continue;
    const prepared = prepareWithSegments(text, FONT);
    const result = layoutWithLines(prepared, 9999, LINE_H);
    map.set(text, result.lines[0]?.width ?? FONT_SIZE * text.length * 0.6);
  }
  return map;
}
function buildGrid(widths) {
  const W = canvas.width;
  const H = canvas.height;
  const top = gridTop();
  const entities = [];
  let x = BORDER + GAP;
  let y = top + GAP;
  let idx = 0;
  while (y + TILE_H < H - BORDER) {
    const text = BASE_WORDS[idx % BASE_WORDS.length];
    idx++;
    const tw = widths.get(text) ?? 80;
    const w = tw + PAD_X * 2;
    if (x + w > W - BORDER - GAP) {
      x = BORDER + GAP;
      y += TILE_H + GAP;
      if (y + TILE_H >= H - BORDER)
        break;
    }
    entities.push({
      text,
      w,
      x: x + w / 2,
      y: y + TILE_H / 2,
      vx: 0,
      vy: 0,
      rot: 0,
      rotV: 0,
      live: false,
      settled: false
    });
    x += w + GAP;
  }
  return entities;
}
function resetAll() {
  rings = [];
  sparks = [];
  explodeCount = 0;
  faceState = "normal";
  startTime = Date.now();
  const widths = measureAll();
  words = buildGrid(widths);
}
function explode(ex, ey) {
  if (ey < gridTop())
    return;
  explodeCount++;
  if (words.filter((w) => !w.live).length === 0)
    faceState = "cool";
  rings.push({ x: ex, y: ey, r: 4, maxR: BLAST_RADIUS, alpha: 1 });
  rings.push({ x: ex, y: ey, r: 2, maxR: BLAST_RADIUS * 0.5, alpha: 0.7 });
  for (let i = 0;i < 45; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 2 + Math.random() * 11;
    sparks.push({
      x: ex,
      y: ey,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 3,
      life: 0.7 + Math.random() * 0.5,
      size: 1.5 + Math.random() * 2.5
    });
  }
  for (const word of words) {
    const dx = word.x - ex;
    const dy = word.y - ey;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < BLAST_RADIUS + word.w / 2) {
      word.live = true;
      word.settled = false;
      const f = MAX_FORCE * Math.max(0, 1 - dist / BLAST_RADIUS);
      const angle = Math.atan2(dy, dx);
      word.vx += Math.cos(angle) * f + (Math.random() - 0.5) * 4;
      word.vy += Math.sin(angle) * f - 4;
      word.rotV += (Math.random() - 0.5) * 0.26;
    }
  }
}
function update() {
  const W = canvas.width;
  const H = canvas.height;
  const floor = H - BORDER - 4;
  for (const word of words) {
    if (!word.live)
      continue;
    word.vy += GRAVITY;
    word.x += word.vx;
    word.y += word.vy;
    word.rot += word.rotV;
    if (word.y + TILE_H / 2 >= floor) {
      word.y = floor - TILE_H / 2;
      word.vy *= -BOUNCE;
      word.vx *= FRICTION;
      word.rotV *= 0.58;
      if (Math.abs(word.vy) < 0.8 && Math.abs(word.vx) < 0.3) {
        word.vy = 0;
        word.vx = 0;
        word.rotV = 0;
        word.settled = true;
      }
    }
    if (word.x - word.w / 2 < BORDER) {
      word.x = BORDER + word.w / 2;
      word.vx = Math.abs(word.vx) * 0.4;
    }
    if (word.x + word.w / 2 > W - BORDER) {
      word.x = W - BORDER - word.w / 2;
      word.vx = -Math.abs(word.vx) * 0.4;
    }
    if (word.y - TILE_H / 2 < gridTop()) {
      word.y = gridTop() + TILE_H / 2;
      word.vy = Math.abs(word.vy) * 0.3;
    }
  }
  for (const ring of rings) {
    ring.r += (ring.maxR - ring.r) * 0.13;
    ring.alpha *= 0.84;
  }
  rings = rings.filter((r) => r.alpha > 0.01);
  for (const s of sparks) {
    s.x += s.vx;
    s.y += s.vy;
    s.vy += 0.28;
    s.vx *= 0.97;
    s.life -= 0.025;
  }
  sparks = sparks.filter((s) => s.life > 0);
}
function draw() {
  const W = canvas.width;
  const H = canvas.height;
  ctx.fillStyle = C.bg;
  ctx.fillRect(0, 0, W, H);
  drawHeader();
  const gt = gridTop();
  ctx.fillStyle = C.mid;
  ctx.fillRect(BORDER, gt, W - BORDER * 2, 2);
  ctx.fillRect(BORDER, gt, 2, H - gt - BORDER);
  ctx.fillStyle = C.white;
  ctx.fillRect(BORDER, H - BORDER - 2, W - BORDER * 2, 2);
  ctx.fillRect(W - BORDER - 2, gt, 2, H - gt - BORDER);
  for (const ring of rings) {
    ctx.beginPath();
    ctx.arc(ring.x, ring.y, ring.r, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(255,140,0,${ring.alpha * 0.9})`;
    ctx.lineWidth = 3;
    ctx.stroke();
  }
  for (const s of sparks) {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2);
    const a = Math.floor(s.life * 255).toString(16).padStart(2, "0");
    ctx.fillStyle = `#ff8800${a}`;
    ctx.fill();
  }
  ctx.textBaseline = "middle";
  ctx.font = FONT;
  for (const word of words) {
    ctx.save();
    ctx.translate(word.x, word.y);
    ctx.rotate(word.rot);
    const hw = word.w / 2;
    const hh = TILE_H / 2;
    if (word.live) {
      tileSunken(-hw, -hh, word.w, TILE_H);
      ctx.fillStyle = "#888";
    } else {
      tileRaised(-hw, -hh, word.w, TILE_H);
      ctx.fillStyle = "#00008b";
    }
    ctx.textAlign = "center";
    ctx.fillText(word.text, 0, 1);
    ctx.restore();
  }
  if (mouseX > 0)
    drawBomb(mouseX, mouseY);
}
function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}
window.addEventListener("resize", () => {
  resize();
  resetAll();
});
canvas.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});
canvas.addEventListener("mouseleave", () => {
  mouseX = -999;
  mouseY = -999;
});
canvas.addEventListener("mousedown", (e) => {
  const cx = canvas.width / 2;
  const cy = BORDER + HEADER_H / 2;
  const dist = Math.sqrt((e.clientX - cx) ** 2 + (e.clientY - cy) ** 2);
  if (dist < FACE_R + 4) {
    facePressed = true;
    return;
  }
});
canvas.addEventListener("mouseup", (e) => {
  const cx = canvas.width / 2;
  const cy = BORDER + HEADER_H / 2;
  const dist = Math.sqrt((e.clientX - cx) ** 2 + (e.clientY - cy) ** 2);
  if (facePressed && dist < FACE_R + 8) {
    resetAll();
  }
  facePressed = false;
});
canvas.addEventListener("click", (e) => {
  const cx = canvas.width / 2;
  const cy = BORDER + HEADER_H / 2;
  const dist = Math.sqrt((e.clientX - cx) ** 2 + (e.clientY - cy) ** 2);
  if (dist < FACE_R + 4)
    return;
  explode(e.clientX, e.clientY);
});
canvas.addEventListener("touchstart", (e) => {
  e.preventDefault();
  const t = e.touches[0];
  if (t)
    explode(t.clientX, t.clientY);
}, { passive: false });
document.getElementById("resetBtn")?.addEventListener("click", resetAll);
document.fonts.ready.then(() => {
  resetAll();
  loop();
});
