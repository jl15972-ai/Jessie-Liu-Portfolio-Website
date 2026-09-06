import React, { useState } from "react";
import { 
  Printer, 
  X, 
  Globe, 
  GraduationCap, 
  Trophy, 
  Snowflake, 
  Users, 
  MessageSquare, 
  Video, 
  Mail, 
  Linkedin, 
  ExternalLink,
  BookOpen,
  Film,
  CheckCircle2,
  FileText,
  Download,
  Loader2,
  HelpCircle,
  AlertTriangle
} from "lucide-react";

interface PrintPortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: "en" | "zh";
  onToggleLang: () => void;
  translations: any;
}

export const PrintPortfolioModal: React.FC<PrintPortfolioModalProps> = ({
  isOpen,
  onClose,
  lang,
  onToggleLang,
  translations,
}) => {
  const t = translations?.[lang] || translations?.["en"] || {};
  const isZh = lang === "zh";
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [isDownloadingOffline, setIsDownloadingOffline] = useState(false);
  const isInIframe = typeof window !== "undefined" && window.self !== window.top;

  const getStandalonePrintUrl = (autoPrint = true) => {
    if (typeof window === "undefined") return "?print=true";
    const url = new URL(window.location.href);
    url.searchParams.set("print", "true");
    url.searchParams.set("lang", lang);
    if (autoPrint) {
      url.searchParams.set("autoprint", "true");
    } else {
      url.searchParams.delete("autoprint");
    }
    url.hash = "print";
    return url.toString();
  };

  // When loaded standalone with autoprint=true, auto launch print dialog after images settle
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get("autoprint") === "true" && window.self === window.top) {
        const timer = setTimeout(() => {
          try {
            window.print();
          } catch (e) {
            console.warn("Autoprint exception:", e);
          }
        }, 800);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  if (!isOpen) return null;

  const handlePrint = () => {
    try {
      window.print();
    } catch (err) {
      console.warn("window.print error or blocked by sandbox:", err);
      window.open(getStandalonePrintUrl(true), "_blank");
    }
  };

  const handleDownloadOfflineHtml = () => {
    const element = document.getElementById("print-portfolio-document");
    if (!element) return;
    try {
      setIsDownloadingOffline(true);
      const title = isZh ? "刘嘉欣_Jessie_Liu_作品集" : "Jessie_Liu_Academic_Portfolio";
      const styles = Array.from(document.querySelectorAll('style, link[rel="stylesheet"]'))
        .map(el => el.outerHTML)
        .join('\n');

      const fullHtml = `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
${styles}
<style>
  body { background-color: #f8fafc; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
  @media print {
    @page { size: A4 portrait; margin: 8mm 10mm; }
    body { padding: 0 !important; background: white !important; font-size: 9.5pt; }
    .no-print { display: none !important; }
    p, li, blockquote, dd, dt { break-inside: avoid !important; page-break-inside: avoid !important; orphans: 3 !important; widows: 3 !important; }
    h1, h2, h3, h4, h5, h6 { break-after: avoid !important; page-break-after: avoid !important; break-inside: avoid !important; }
    a, button, img { break-inside: avoid !important; page-break-inside: avoid !important; }
    section, .print-break-inside-auto, .space-y-4, .space-y-5, .space-y-6, .space-y-8, .space-y-10, .space-y-12 { break-inside: auto !important; page-break-inside: auto !important; }
    .avoid-break, .break-inside-avoid, .print-break-inside-avoid, [class*="rounded-xl"], [class*="rounded-2xl"], [class*="rounded-lg"] { break-inside: avoid !important; page-break-inside: avoid !important; }
    * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
  }
</style>
</head>
<body>
  <div class="no-print" style="max-width: 850px; margin: 0 auto 16px; padding: 12px 18px; background: #0f172a; color: white; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
    <div>
      <div style="font-weight: 600; font-size: 14px;">${isZh ? '刘嘉欣 · 个人作品集（离线文档）' : 'Jessie Liu · Portfolio Document'}</div>
      <div style="font-size: 11px; color: #94a3b8;">${isZh ? '可直接使用快捷键 Cmd+P / Ctrl+P 另存为 PDF' : 'Press Cmd+P / Ctrl+P anytime to save as PDF'}</div>
    </div>
    <button onclick="window.print()" style="background: #2563eb; color: white; border: none; padding: 8px 16px; border-radius: 20px; font-size: 12px; font-weight: 600; cursor: pointer;">
      ${isZh ? '🖨️ 打印 / 另存为 PDF' : '🖨️ Print / Save as PDF'}
    </button>
  </div>
  <div style="max-width: 850px; margin: 0 auto;">
    ${element.outerHTML}
  </div>
</body>
</html>`;

      const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
      const downloadUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = `${title}.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(downloadUrl);
    } catch (err) {
      console.error("Download offline html error:", err);
    } finally {
      setIsDownloadingOffline(false);
    }
  };

  const nameZh = "刘嘉欣";
  const nameEn = "Jessie Liu";
  const contacts = {
    email: "jl15972@nyu.edu",
    phone: "(929) 751-5864",
    location: isZh ? "美国纽约" : "New York, NY",
    linkedin: "https://www.linkedin.com/in/jessie-liu-6b2985323",
    linkedinDisplay: "linkedin.com/in/jessie-liu-6b2985323",
    portfolioUrl: "https://jl15972-ai.github.io/Jessie-Liu-Portfolio-Website",
    portfolioDisplay: "jl15972-ai.github.io/Jessie-Liu-Portfolio-Website"
  };

  const toAbsoluteUrl = (url?: string) => {
    if (!url) return "";
    if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("mailto:")) {
      return url;
    }
    if (typeof window !== "undefined" && window.location?.origin) {
      return `${window.location.origin}${url.startsWith("/") ? "" : "/"}${url}`;
    }
    return url;
  };

  const photoUrl = "https://i.postimg.cc/CKBc65PS/Weixin-Image-20260901220215-512-2.jpg";
  const tdLogo = "https://i.postimg.cc/zXwcHprK/1666948832523.jpg";

  return (
    <div id="print-portfolio-modal-wrapper" className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-sm overflow-y-auto print:static print:bg-white print:overflow-visible">
      {/* Top Floating Control Toolbar (Hidden in Print) */}
      <div className="sticky top-0 z-50 bg-slate-900/95 text-white border-b border-white/10 px-4 sm:px-6 py-3.5 backdrop-blur-md no-print shadow-xl">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="p-1.5 bg-accent/20 text-accent rounded-lg">
              <Printer size={18} />
            </span>
            <div>
              <h2 className="text-sm sm:text-base font-semibold tracking-wide">
                {isZh ? "作品集 PDF 打印与导出预览" : "Portfolio PDF Export & Print Preview"}
              </h2>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                {isZh ? "清晰工整的整站作品集 A4 排版版本" : "Clean, publication-grade A4 formatted portfolio"}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/15 rounded-full text-xs font-medium transition-colors"
              title={isZh ? "切换为英文版" : "Switch to Chinese"}
            >
              <Globe size={14} />
              <span>{isZh ? "English" : "中文"}</span>
            </button>

            {/* Primary Save as PDF Button */}
            {isInIframe ? (
              <a
                href={getStandalonePrintUrl(true)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white rounded-full text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer"
                title={isZh ? "在新窗口打开并自动弹出保存为 PDF 窗口" : "Open in new window and auto-launch Save as PDF"}
              >
                <Printer size={16} />
                <span>{isZh ? "另存为 PDF (新窗口打开)" : "Save as PDF (New Tab)"}</span>
              </a>
            ) : (
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white rounded-full text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer"
                title={isZh ? "弹出系统打印对话框，选择「另存为 PDF」并保存" : "Open system print dialog to save as PDF"}
              >
                <Printer size={16} />
                <span>{isZh ? "另存为 PDF / 打印" : "Save as PDF / Print"}</span>
              </button>
            )}

            {/* Direct print fallback for iframe */}
            {isInIframe && (
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/15 text-white rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                title={isZh ? "直接在当前页面尝试调出打印面板" : "Attempt print in current window"}
              >
                <span>{isZh ? "当前页打印" : "Print Directly"}</span>
              </button>
            )}

            <button
              onClick={() => setShowGuideModal(prev => !prev)}
              className="flex items-center gap-1 px-2.5 py-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-full text-xs font-medium transition-colors cursor-pointer"
              title={isZh ? "查看保存与打印指南" : "Export Help & Guide"}
            >
              <HelpCircle size={15} />
              <span className="hidden sm:inline">{isZh ? "如何保存？" : "Help"}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Informative Guidance Tip & Explain Why */}
        <div className="max-w-5xl mx-auto mt-2 pt-2 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-1.5 text-[11.5px] text-slate-200">
          <div className="flex items-start sm:items-center gap-1.5">
            <span className="text-emerald-400 font-bold shrink-0">💡 {isZh ? "操作提示：" : "Tip:"}</span>
            <span>
              {isZh 
                ? "因 AI Studio 内嵌预览的安全限制，点击绿色的「新窗口打开并保存为 PDF」会在新标签页自动弹出打印窗口；在【目标打印机】中选择「另存为 PDF」并点击「保存」即可！" 
                : "Due to preview iframe security rules, click the green button to open in a new tab where 'Save as PDF' opens automatically."
              }
            </span>
          </div>
          <button 
            onClick={() => setShowGuideModal(true)}
            className="text-accent hover:underline font-medium shrink-0 ml-auto md:ml-0 cursor-pointer"
          >
            {isZh ? "详细保存步骤与疑难解答 ↗" : "Detailed Step-by-Step Guide ↗"}
          </button>
        </div>

        {/* Detailed Explanation / Step-by-Step Popover Modal */}
        {showGuideModal && (
          <div className="max-w-5xl mx-auto mt-3 p-4 bg-slate-800/95 border border-slate-700 rounded-xl text-xs space-y-3 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-700 pb-2">
              <span className="font-bold text-sm text-white flex items-center gap-2">
                <AlertTriangle size={16} className="text-emerald-400" />
                {isZh ? "如何顺利将作品集保存为 PDF 文件？" : "How to save this portfolio as a PDF file?"}
              </span>
              <button 
                onClick={() => setShowGuideModal(false)}
                className="text-slate-400 hover:text-white p-1 cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300 leading-relaxed">
              <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-700/50">
                <h4 className="font-semibold text-white mb-1.5 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[11px]">1</span>
                  {isZh ? "标准方式：在新标签页保存为高清 PDF（推荐）" : "Standard: Save as Crisp Vector PDF"}
                </h4>
                <ol className="list-decimal list-inside space-y-1 text-slate-300">
                  <li>{isZh ? "点击上方绿色的「新窗口打开并保存为 PDF」按钮。" : "Click 'Open in Tab & Save as PDF'."}</li>
                  <li>{isZh ? "在新标签页中，浏览器会自动调出打印设置面板。" : "In the new tab, the print dialog opens automatically."}</li>
                  <li>{isZh ? "在【目标打印机 / Destination】中选择「另存为 PDF / Save as PDF」。" : "Select 'Save as PDF' as the Destination."}</li>
                  <li>{isZh ? "在「更多设置」中勾选「背景图形 / Background graphics」。" : "Check 'Background graphics' in More Settings."}</li>
                  <li>{isZh ? "点击右下角「保存」，即可生成包含全部可点击链接的高清 PDF！" : "Click Save to get a vector PDF with live hyperlinks!"}</li>
                </ol>
              </div>

              <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-700/50">
                <h4 className="font-semibold text-white mb-1.5 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-[11px]">2</span>
                  {isZh ? "离线备份：下载离线文档 (.html)" : "Offline Backup: Download Offline File"}
                </h4>
                <p className="text-slate-400 mb-2">
                  {isZh 
                    ? "点击「下载离线文件 (.html)」可瞬间将整份作品集打包保存到您的电脑本地，无需联网即可随时双击打开阅读。"
                    : "Save the entire portfolio offline to your machine in seconds. Open and read offline anytime without internet."}
                </p>
                <p className="text-slate-400">
                  {isZh 
                    ? "用任何浏览器（Chrome / Safari / Edge）打开该离线文件后，按快捷键 Cmd + P 或 Ctrl + P 即可随时再次另存为 PDF。"
                    : "Open it in Chrome/Safari, then press Cmd+P or Ctrl+P to save as PDF."}
                </p>
              </div>
            </div>
            <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-1 border-t border-slate-700/60">
              <span className="text-amber-400">ℹ️</span>
              <span>
                {isZh 
                  ? "常见疑问说明：由于 AI Studio 预览窗口处于安全沙箱（iframe）中，浏览器会禁止页面在框架内直接调用系统打印，因此在独立新标签页中打开即可完美执行。"
                  : "Explanation: Modern browser security prevents print dialogs inside iframe previews; opening in a full tab cleanly bypasses this restriction."}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Printable Document Sheet */}
      <div className="py-6 sm:py-10 px-2 sm:px-6 flex justify-center print:p-0 print:m-0">
        <div 
          id="print-portfolio-document"
          className="print-document-container bg-white text-slate-900 w-full max-w-4xl shadow-2xl rounded-2xl print:rounded-none print:shadow-none p-6 sm:p-12 md:p-14 print:p-0 border border-slate-200 print:border-none space-y-8 print:space-y-4"
        >
          {/* ====================================================
              DOCUMENT HEADER / COVER BANNER
             ==================================================== */}
          <div className="border-b-2 border-slate-900 pb-5 print:pb-2.5 avoid-break print:break-inside-avoid">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-accent font-bold block mb-1">
                  {isZh ? "个人作品集与职业档案" : "Academic & Professional Portfolio"}
                </span>
                <h1 className="serif text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight leading-none mb-2">
                  {isZh ? `${nameZh} (${nameEn})` : nameEn}
                </h1>
                <p className="text-sm sm:text-base text-slate-800 font-semibold">
                  {isZh ? "Economics & Business @ New York University (纽约大学 经济与商业)" : "Economics & Business @ New York University"}
                </p>
                <p className="text-xs text-accent font-semibold tracking-wider uppercase mt-1">
                  {isZh ? "消费者洞察 × 成长型思维" : "Consumer Insight × Growth Mindset"}
                </p>
              </div>

              {/* Contact Information Block */}
              <div className="text-xs text-slate-600 space-y-1.5 sm:text-right border-t sm:border-t-0 pt-3 sm:pt-0 w-full sm:w-auto">
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Mail size={13} className="text-accent shrink-0" />
                  <a href={`mailto:${contacts.email}`} className="font-medium text-slate-800 hover:text-accent hover:underline">
                    {contacts.email}
                  </a>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Linkedin size={13} className="text-accent shrink-0" />
                  <a href={contacts.linkedin} target="_blank" rel="noreferrer" className="text-slate-700 hover:text-accent hover:underline font-medium">
                    {contacts.linkedinDisplay}
                  </a>
                </div>
                <div className="text-slate-500 text-[11px] pt-0.5">
                  {contacts.phone} | {contacts.location}
                </div>
              </div>
            </div>
          </div>

          {/* ====================================================
              SECTION 1: PROFILE & EXECUTIVE SUMMARY
             ==================================================== */}
          <section className="space-y-4 print:space-y-2.5 print:break-inside-auto">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
              <span className="w-2.5 h-2.5 bg-accent rounded-sm inline-block"></span>
              <h2 className="serif text-lg sm:text-xl font-bold uppercase tracking-wider text-slate-900">
                {isZh ? "一、个人概述与学术背景" : "I. Profile & Academic Background"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 print:gap-4 items-start">
              {/* Photo & Key Stats */}
              <div className="md:col-span-4 flex flex-col items-center sm:items-start gap-3.5 print:gap-2.5">
                <img 
                  src={photoUrl} 
                  alt={nameEn}
                  className="w-32 h-42 sm:w-40 sm:h-52 print:w-28 print:h-36 object-cover rounded-xl shadow-md border border-slate-200 shrink-0 avoid-break print:break-inside-avoid"
                  referrerPolicy="no-referrer"
                />
                <div className="w-full bg-slate-50 p-3.5 print:p-2.5 rounded-xl border border-slate-200 text-xs print:text-[11px] space-y-1.5 print:space-y-0.5 avoid-break print:break-inside-avoid">
                  <div className="font-bold text-slate-900 text-xs">
                    {isZh ? "纽约大学（主校区）" : "New York University"}
                  </div>
                  <div className="text-slate-600">
                    <span className="font-semibold text-slate-700">{isZh ? "专业：" : "Major: "}</span>
                    {isZh ? "经济学专业本科" : "B.A. in Economics"}
                  </div>
                  <div className="text-slate-600">
                    <span className="font-semibold text-slate-700">{isZh ? "辅修：" : "Minors: "}</span>
                    {isZh ? "商业研究；娱乐、媒体与技术商业管理" : "Business Studies; Business of Entertainment, Media, and Technology"}
                  </div>
                  <div className="text-slate-800 font-bold pt-1 border-t border-slate-200 flex items-baseline gap-2">
                    <span>GPA:</span>
                    <span className="text-accent font-extrabold">4.0 / 4.0</span>
                  </div>
                  <div className="text-[10px] text-slate-500">
                    {isZh ? "连续两年入选优秀生名单 (Dean's List 24-26)" : "Liberal Studies Dean's List (2024–26)"}
                  </div>
                </div>
              </div>

              {/* Bio Narrative */}
              <div className="md:col-span-8 space-y-3 print:space-y-2">
                <div className="bg-slate-50/70 p-4 sm:p-5 print:p-3 rounded-xl border border-slate-200 avoid-break print:break-inside-avoid">
                  <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                    <Snowflake size={16} className="text-accent" />
                    <span>{isZh ? "核心理念与故事陈述" : "Narrative & Philosophy"}</span>
                  </h3>
                  <p className="whitespace-pre-line text-xs sm:text-[13px] print:text-[11px] text-slate-700 font-light leading-relaxed print:leading-normal">
                    {t.bio.description}
                  </p>
                </div>

                {/* Gallup Strengths & Tools Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 print:gap-2 pt-1 avoid-break print:break-inside-avoid">
                  <div className="bg-white p-3.5 print:p-2.5 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between avoid-break print:break-inside-avoid">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2 font-bold text-xs text-slate-900 uppercase tracking-wider">
                        <div className="flex items-center gap-1.5">
                          <Trophy size={14} className="text-accent" />
                          <span>{t.bio.strengthTitle} (Gallup CliftonStrengths)</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mb-2.5">
                        {(t.bio.strengths as string[]).map((s: string, idx: number) => (
                          <span key={idx} className="px-2 py-0.5 bg-slate-100 text-slate-800 rounded text-[11px] font-medium border border-slate-200">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={toAbsoluteUrl(t.bio.reportUrl)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-accent hover:underline pt-1 border-t border-slate-100"
                    >
                      <FileText size={12} />
                      <span>{t.bio.reportLink}</span>
                      <ExternalLink size={11} className="opacity-70" />
                    </a>
                  </div>

                  <div className="bg-white p-3.5 print:p-2.5 rounded-xl border border-slate-200 shadow-2xs avoid-break print:break-inside-avoid">
                    <div className="flex items-center gap-2 mb-2 font-bold text-xs text-slate-900 uppercase tracking-wider">
                      <Snowflake size={14} className="text-accent" />
                      <span>{t.bio.skillsTitle} ({isZh ? "核心工具" : "Core Stack"})</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {(t.bio.skills as string[]).map((sk: string, idx: number) => (
                        <span key={idx} className="px-2 py-0.5 bg-slate-100 text-slate-800 rounded text-[11px] font-medium border border-slate-200">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ====================================================
              SECTION 2: STUDENT ORGANIZATIONS & CAMPUS LEADERSHIP
             ==================================================== */}
          <section className="space-y-5 print:space-y-3.5 print:break-inside-auto">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
              <span className="w-2.5 h-2.5 bg-accent rounded-sm inline-block"></span>
              <h2 className="serif text-lg sm:text-xl font-bold uppercase tracking-wider text-slate-900">
                {isZh ? "二、学生组织与校园活动策划作品" : "II. Campus Leadership & Event Planning"}
              </h2>
            </div>

            <div className="space-y-6">
              {/* CAB Friendship Island */}
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 avoid-break space-y-4">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                  <h3 className="font-bold text-base text-slate-900">
                    {t.portfolio.items.cab.title} — {t.portfolio.items.cab.event}
                  </h3>
                  <span className="text-xs font-semibold text-accent">{t.portfolio.items.cab.date}</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {t.portfolio.items.cab.desc}
                </p>
                <div className="flex flex-col sm:flex-row print:flex-row gap-5 items-center pt-1">
                  <div className="shrink-0 flex justify-center w-full sm:w-auto print:w-auto">
                    <img 
                      src={t.portfolio.items.cab.images ? t.portfolio.items.cab.images[0] : t.portfolio.items.cab.image}
                      alt="CAB Friendship Island Event"
                      className="rounded-xl w-44 sm:w-52 md:w-56 print:w-48 h-auto object-contain border border-slate-200 shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-600 bg-white p-4 rounded-xl border border-slate-200 space-y-2.5 flex-1 self-stretch flex flex-col justify-center">
                    <div className="font-bold text-slate-900 text-xs">{isZh ? "策划亮点与产出：" : "Key Highlights:"}</div>
                    <div className="flex items-start gap-1.5 leading-relaxed">
                      <span className="text-accent font-bold select-none">•</span>
                      <span>{isZh ? "破冰互动机制：定制热带海岛主题互动与 Bingo 游戏，促成新生高效破冰" : "Curated speed-friending program & interactive tropical island bingo"}</span>
                    </div>
                    <div className="flex items-start gap-1.5 leading-relaxed">
                      <span className="text-accent font-bold select-none">•</span>
                      <span>{isZh ? "视觉呈现：独立设计全套 Canva 宣发演示课件与海报，统一视觉规范" : "Designed end-to-end visual slide deck and promotional materials on Canva"}</span>
                    </div>
                    <div className="flex items-start gap-1.5 leading-relaxed">
                      <span className="text-accent font-bold select-none">•</span>
                      <span>{isZh ? "成效数据：成功达成 60 RSVPs 并实现 30+ 新生高活跃度深度参与" : "Generated 60 RSVPs with 30+ highly engaged first-year attendees"}</span>
                    </div>
                    {t.portfolio.items.cab.link && (
                      <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between">
                        <a 
                          href={t.portfolio.items.cab.link} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                        >
                          <FileText size={13} />
                          <span>{t.portfolio.items.cab.linkText} (Canva)</span>
                          <ExternalLink size={12} className="opacity-70" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* 67A Hall Council - Chinatown & Wall Street */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 avoid-break">
                {/* Chinatown */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-sm text-slate-900">{t.portfolio.items.council.title}</h4>
                      <span className="text-[11px] text-accent font-semibold">{t.portfolio.items.council.date}</span>
                    </div>
                    <p className="text-xs font-medium text-slate-700 mb-2">{t.portfolio.items.council.event}</p>
                    <p className="text-[11px] text-slate-600 leading-relaxed mb-3">{t.portfolio.items.council.desc}</p>
                  </div>
                  <div className="mt-auto space-y-2">
                    <div className="grid grid-cols-3 gap-2 items-start">
                      <div className="bg-slate-100 rounded border border-slate-200 overflow-hidden flex items-center justify-center p-0.5">
                        <img src="https://i.postimg.cc/hGKkmBCM/Chinatown-Adventure.jpg" alt="Chinatown poster" className="rounded w-full max-h-40 object-contain" referrerPolicy="no-referrer" />
                      </div>
                      <div className="bg-slate-100 rounded border border-slate-200 overflow-hidden flex items-center justify-center p-0.5">
                        <img src="https://i.postimg.cc/Znv2mKqD/Wechat-IMG3930.jpg" alt="Chinatown photo 1" className="rounded w-full max-h-40 object-contain" referrerPolicy="no-referrer" />
                      </div>
                      <div className="bg-slate-100 rounded border border-slate-200 overflow-hidden flex items-center justify-center p-0.5">
                        <img src="https://i.postimg.cc/xqr71DJJ/Wechat-IMG3931.jpg" alt="Chinatown photo 2" className="rounded w-full max-h-40 object-contain" referrerPolicy="no-referrer" />
                      </div>
                    </div>
                    {t.portfolio.items.council.link && (
                      <div className="pt-1.5 border-t border-slate-200">
                        <a 
                          href={t.portfolio.items.council.link} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-accent hover:underline"
                        >
                          <FileText size={12} />
                          <span>{t.portfolio.items.council.linkText} (Canva)</span>
                          <ExternalLink size={11} className="opacity-70" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Wall Street */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-sm text-slate-900">{t.portfolio.items.wallstreet.title}</h4>
                      <span className="text-[11px] text-accent font-semibold">{t.portfolio.items.wallstreet.date}</span>
                    </div>
                    <p className="text-xs font-medium text-slate-700 mb-2">{t.portfolio.items.wallstreet.event}</p>
                    <p className="text-[11px] text-slate-600 leading-relaxed mb-3">{t.portfolio.items.wallstreet.desc}</p>
                  </div>
                  <div className="mt-auto space-y-2">
                    <div className="grid grid-cols-3 gap-2 items-start">
                      <div className="bg-slate-100 rounded border border-slate-200 overflow-hidden flex items-center justify-center p-0.5">
                        <img src="https://i.postimg.cc/MTFcNQvS/Image-22-55-25.png" alt="Wall street poster" className="rounded w-full max-h-40 object-contain" referrerPolicy="no-referrer" />
                      </div>
                      <div className="bg-slate-100 rounded border border-slate-200 overflow-hidden flex items-center justify-center p-0.5">
                        <img src="https://i.postimg.cc/xdqNR51H/Wechat-IMG4273.jpg" alt="Wall street photo 1" className="rounded w-full max-h-40 object-contain" referrerPolicy="no-referrer" />
                      </div>
                      <div className="bg-slate-100 rounded border border-slate-200 overflow-hidden flex items-center justify-center p-0.5">
                        <img src="https://i.postimg.cc/pXx97RL4/Wechat-IMG4274.jpg" alt="Wall street photo 2" className="rounded w-full max-h-40 object-contain" referrerPolicy="no-referrer" />
                      </div>
                    </div>
                    {t.portfolio.items.wallstreet.link && (
                      <div className="pt-1.5 border-t border-slate-200">
                        <a 
                          href={t.portfolio.items.wallstreet.link} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-accent hover:underline"
                        >
                          <FileText size={12} />
                          <span>{t.portfolio.items.wallstreet.linkText} (Canva)</span>
                          <ExternalLink size={11} className="opacity-70" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ====================================================
              SECTION 3: BUSINESS STRATEGY & CASE COMPETITIONS
             ==================================================== */}
          <section className="space-y-5 print:space-y-3.5 print:break-inside-auto">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
              <span className="w-2.5 h-2.5 bg-accent rounded-sm inline-block"></span>
              <h2 className="serif text-lg sm:text-xl font-bold uppercase tracking-wider text-slate-900">
                {isZh ? "三、商业分析与案例大赛" : "III. Business Strategy & Case Competitions"}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* L'Oréal Case */}
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col justify-between avoid-break print:break-inside-avoid">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-accent/15 text-accent rounded inline-block mb-2">
                    {isZh ? "罗兰贝格 × 欧莱雅商业大赛" : "L'Oréal × Roland Berger"}
                  </span>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1 leading-snug">
                    {t.portfolio.items.loreal.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 mb-2.5">{t.portfolio.items.loreal.date}</div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {t.portfolio.items.loreal.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px]">
                  <span className="text-slate-600 flex items-center gap-1.5 font-medium">
                    <FileText size={14} className="text-accent shrink-0" />
                    <span>{isZh ? "成果：完整商业战略 Deck (PDF)" : "Deliverable: Strategy Deck (PDF)"}</span>
                  </span>
                  {t.portfolio.items.loreal.link && (
                    <a
                      href={toAbsoluteUrl(t.portfolio.items.loreal.link)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-accent font-semibold hover:underline bg-accent/10 px-2.5 py-1 rounded border border-accent/20 transition-colors w-fit"
                    >
                      <FileText size={12} />
                      <span>{t.portfolio.items.loreal.linkText}</span>
                      <ExternalLink size={11} className="shrink-0 opacity-70" />
                    </a>
                  )}
                </div>
              </div>

              {/* MKTSOC Case */}
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col justify-between avoid-break print:break-inside-avoid">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-accent/15 text-accent rounded inline-block mb-2">
                    {isZh ? "纽约大学营销协会案例赛 TOP 6" : "NYU MKTSOC Finalist (TOP 6)"}
                  </span>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1 leading-snug">
                    {t.portfolio.items.mktsoc.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 mb-2.5">{t.portfolio.items.mktsoc.date}</div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {t.portfolio.items.mktsoc.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px]">
                  <span className="text-slate-600 flex items-center gap-1.5 font-medium">
                    <FileText size={14} className="text-accent shrink-0" />
                    <span>{isZh ? "成果：品牌逆风翻盘营销方案 (PDF)" : "Deliverable: Turnaround Deck (PDF)"}</span>
                  </span>
                  {t.portfolio.items.mktsoc.link && (
                    <a
                      href={toAbsoluteUrl(t.portfolio.items.mktsoc.link)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-accent font-semibold hover:underline bg-accent/10 px-2.5 py-1 rounded border border-accent/20 transition-colors w-fit"
                    >
                      <FileText size={12} />
                      <span>{t.portfolio.items.mktsoc.linkText}</span>
                      <ExternalLink size={11} className="shrink-0 opacity-70" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* ====================================================
              SECTION 4: MEDIA OPERATIONS & CONTENT STRATEGY
             ==================================================== */}
          <section className="space-y-5 print:space-y-3.5 print:break-inside-auto">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
              <span className="w-2.5 h-2.5 bg-accent rounded-sm inline-block"></span>
              <h2 className="serif text-lg sm:text-xl font-bold uppercase tracking-wider text-slate-900">
                {isZh ? "四、新媒体运营与内容策略分析" : "IV. Media Operations & Growth Analytics"}
              </h2>
            </div>

            {/* TD Test Daily */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 avoid-break print:break-inside-avoid space-y-3">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <div className="flex items-center gap-2.5">
                  <img src={tdLogo} alt="TD Logo" className="w-6 h-6 object-contain rounded" referrerPolicy="no-referrer" />
                  <h3 className="font-bold text-base text-slate-900">{t.portfolio.items.td.title}</h3>
                </div>
                <span className="text-xs font-semibold text-accent">{t.portfolio.items.td.date}</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {t.portfolio.items.td.desc}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 items-center">
                <div className="sm:col-span-2 grid grid-cols-2 gap-2">
                  <img src="https://i.postimg.cc/RCw2ghjL/Wechat-IMG3953.jpg" alt="TD work sample 1" className="rounded-lg h-28 w-full object-cover object-top border border-slate-200" referrerPolicy="no-referrer" />
                  <img src="https://i.postimg.cc/nhh5VkMX/Wechat-IMG3952.jpg" alt="TD work sample 2" className="rounded-lg h-28 w-full object-cover object-top border border-slate-200" referrerPolicy="no-referrer" />
                </div>
                <div className="text-[11px] text-slate-700 bg-white p-3 rounded-lg border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900">{isZh ? "数据成果：" : "Key Metrics:"}</div>
                  <div>• {isZh ? "用户量：200,000+ 留学生社群" : "Audience: 200,000+ followers"}</div>
                  <div>• {isZh ? "爆款文章：单篇阅读 69.9K (高校财报解密)" : "Top Hit: 69.9K views (University fiscal study)"}</div>
                  <div>• {isZh ? "均篇阅读：10,000+，转化率超均值 100%" : "Avg: 10K+ reads, 100% above benchmark"}</div>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-200 flex flex-wrap gap-x-4 gap-y-1.5 text-[11px]">
                {t.portfolio.items.td.link1 && (
                  <a
                    href={t.portfolio.items.td.link1}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-accent hover:underline"
                  >
                    <FileText size={12} />
                    <span>{t.portfolio.items.td.linkText1}</span>
                    <ExternalLink size={10} className="opacity-70" />
                  </a>
                )}
                {t.portfolio.items.td.link2 && (
                  <a
                    href={t.portfolio.items.td.link2}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-accent hover:underline"
                  >
                    <FileText size={12} />
                    <span>{t.portfolio.items.td.linkText2}</span>
                    <ExternalLink size={10} className="opacity-70" />
                  </a>
                )}
              </div>
            </div>

            {/* Jessie's Little World (Personal Account) */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 avoid-break space-y-3">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                <h3 className="font-bold text-base text-slate-900">
                  {t.portfolio.items.personal.title} <span className="font-normal text-slate-500 text-xs">{t.portfolio.items.personal.type}</span>
                </h3>
                <span className="text-xs text-slate-500 font-medium">{isZh ? "7 篇深度商业分析 · 7000+ 读者" : "7 Deep Business Articles · 7,000+ Readers"}</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {t.portfolio.items.personal.desc}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 items-center">
                <div className="sm:col-span-2 grid grid-cols-2 gap-2">
                  <img src="https://i.postimg.cc/Rh7gTPVY/9d37d304a62aeba96fb70aa2e6884954.jpg" alt="Article 1" className="rounded-lg h-32 w-full object-cover object-top border border-slate-200" referrerPolicy="no-referrer" />
                  <img src="https://i.postimg.cc/8PGKCVtq/640.webp" alt="Article 2" className="rounded-lg h-32 w-full object-cover object-top border border-slate-200" referrerPolicy="no-referrer" />
                </div>
                <div className="text-[11px] text-slate-700 bg-white p-3 rounded-lg border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900">{isZh ? "精选代表作：" : "Featured Articles:"}</div>
                  <div>• {isZh ? "瑞幸 vs 星巴克中国 (商业模式与万店竞争)" : "Luckin vs. Starbucks China (20K+ Stores Battle)"}</div>
                  <div>• {isZh ? "私立牙科诊所兴起逻辑与医疗消费观察" : "Rise of Private Dental Clinics Market Analysis"}</div>
                  <div>• {isZh ? "运用 SWOT、4P 理论深度结合财报拆解" : "Applied SWOT, 4P & corporate 10-K filings"}</div>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-200 flex flex-wrap gap-x-4 gap-y-1.5 text-[11px]">
                {t.portfolio.items.personal.link1 && (
                  <a
                    href={t.portfolio.items.personal.link1}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-accent hover:underline"
                  >
                    <FileText size={12} />
                    <span>{t.portfolio.items.personal.linkText1}</span>
                    <ExternalLink size={10} className="opacity-70" />
                  </a>
                )}
                {t.portfolio.items.personal.link2 && (
                  <a
                    href={t.portfolio.items.personal.link2}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-accent hover:underline"
                  >
                    <FileText size={12} />
                    <span>{t.portfolio.items.personal.linkText2}</span>
                    <ExternalLink size={10} className="opacity-70" />
                  </a>
                )}
                {t.portfolio.items.personal.link3 && (
                  <a
                    href={t.portfolio.items.personal.link3}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-accent hover:underline"
                  >
                    <FileText size={12} />
                    <span>{t.portfolio.items.personal.linkText3}</span>
                    <ExternalLink size={10} className="opacity-70" />
                  </a>
                )}
              </div>
            </div>
          </section>

          {/* ====================================================
              SECTION 5: COMPLETE PROFESSIONAL RESUME
             ==================================================== */}
          <section className="space-y-4 print:space-y-2.5 pt-2 print:pt-0 print:break-inside-auto">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
              <span className="w-2.5 h-2.5 bg-accent rounded-sm inline-block"></span>
              <h2 className="serif text-lg sm:text-xl font-bold uppercase tracking-wider text-slate-900">
                {isZh ? "五、个人简历与职业经历" : "V. Professional Resume & Experiences"}
              </h2>
            </div>

            {/* Education */}
            <div className="space-y-2.5 print:break-inside-auto">
              <h3 className="text-xs uppercase tracking-widest font-bold text-slate-400 border-b border-slate-200 pb-1">
                {t.resume.sections.education}
              </h3>
              {t.resume.edu.map((item: any, i: number) => (
                <div key={i} className="text-xs avoid-break print:break-inside-avoid">
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>{item.school}</span>
                    <span className="text-slate-500 font-medium">{item.date}</span>
                  </div>
                  <div className="text-slate-600 mb-1">
                    {item.degree} {item.minor ? `— ${item.minor}` : ""}
                  </div>
                  <ul className="space-y-1 pl-3 text-slate-700">
                    {item.details.map((d: string, j: number) => (
                      <li key={j} className="flex items-start gap-1.5">
                        <span className="text-accent font-bold select-none">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Experience */}
            <div className="space-y-3 pt-1.5 print:break-inside-auto">
              <h3 className="text-xs uppercase tracking-widest font-bold text-slate-400 border-b border-slate-200 pb-1">
                {t.resume.sections.experience}
              </h3>
              <div className="space-y-3">
                {t.resume.exp.map((item: any, i: number) => (
                  <div key={i} className="text-xs avoid-break print:break-inside-avoid">
                    <div className="flex justify-between items-baseline font-bold text-slate-900">
                      <span>{item.company}</span>
                      <span className="text-slate-500 font-medium">{item.date}</span>
                    </div>
                    <div className="text-accent font-semibold mb-1">{item.role}</div>
                    <ul className="space-y-1 pl-3 text-slate-700">
                      {item.details.map((d: string, j: number) => (
                        <li key={j} className="flex items-start gap-1.5 leading-relaxed">
                          <span className="text-accent font-bold select-none">•</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership */}
            <div className="space-y-3 pt-1.5 print:break-inside-auto">
              <h3 className="text-xs uppercase tracking-widest font-bold text-slate-400 border-b border-slate-200 pb-1">
                {t.resume.sections.leadership}
              </h3>
              <div className="space-y-3">
                {t.resume.leadership.map((item: any, i: number) => (
                  <div key={i} className="text-xs avoid-break print:break-inside-avoid">
                    <div className="flex justify-between items-baseline font-bold text-slate-900">
                      <span>{item.org}</span>
                      <span className="text-slate-500 font-medium">{item.date}</span>
                    </div>
                    <div className={`text-accent font-semibold ${item.details && item.details.length > 0 ? "mb-1" : "mb-0"}`}>{item.role}</div>
                    {item.details && item.details.length > 0 && (
                      <ul className="space-y-1 pl-3 text-slate-700">
                        {item.details.map((d: string, j: number) => (
                          <li key={j} className="flex items-start gap-1.5 leading-relaxed">
                            <span className="text-accent font-bold select-none">•</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Interests */}
            <div className="avoid-break print:break-inside-avoid bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs space-y-1.5">
              <h3 className="text-xs uppercase tracking-widest font-bold text-slate-900 border-b border-slate-200 pb-1">
                {t.resume.sections.skills}
              </h3>
              {t.resume.skills.lang && (
                <div className="text-slate-700 leading-relaxed font-medium">
                  {t.resume.skills.lang}
                </div>
              )}
              {t.resume.skills.tech && (
                <div className="text-slate-700 leading-relaxed">
                  {t.resume.skills.tech}
                </div>
              )}
              {t.resume.skills.interests && (
                <div className="text-slate-700 leading-relaxed">
                  {t.resume.skills.interests}
                </div>
              )}
            </div>
          </section>

          {/* ====================================================
              SECTION 6: CONTACT & VERIFICATION FOOTER
             ==================================================== */}
          <div className="border-t border-slate-200 pt-6 text-center text-xs text-slate-500 space-y-2 avoid-break">
            <div className="flex flex-wrap justify-center items-center gap-6 font-medium text-slate-700">
              <span className="flex items-center gap-1.5">
                <Mail size={13} className="text-accent" />
                {contacts.email}
              </span>
              <a href={contacts.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-accent hover:underline">
                <Linkedin size={13} className="text-accent" />
                {contacts.linkedinDisplay}
              </a>
              <span className="text-slate-500">
                {contacts.phone} | {contacts.location}
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              &copy; {new Date().getFullYear()} {isZh ? `${nameZh} (${nameEn})` : nameEn}. {isZh ? "个人作品集完整版 · 保留所有权利" : "Official Comprehensive Portfolio. All Rights Reserved."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
