const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

function generateResumePDF(outputPath) {
  // US Letter: 8.5 x 11 in = 612 x 792 pt
  const doc = new PDFDocument({
    size: 'LETTER',
    margins: {
      top: 34,
      bottom: 34,
      left: 38,
      right: 38
    },
    autoFirstPage: true
  });

  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);

  // Register TrueType Times New Roman (Liberation Serif) fonts
  const fontDir = path.join(__dirname, 'fonts');
  doc.registerFont('Times-Roman-TTF', path.join(fontDir, 'LiberationSerif-Regular.ttf'));
  doc.registerFont('Times-Bold-TTF', path.join(fontDir, 'LiberationSerif-Bold.ttf'));
  doc.registerFont('Times-Italic-TTF', path.join(fontDir, 'LiberationSerif-Italic.ttf'));
  doc.registerFont('Times-BoldItalic-TTF', path.join(fontDir, 'LiberationSerif-BoldItalic.ttf'));

  const fRegular = 'Times-Roman-TTF';
  const fBold = 'Times-Bold-TTF';
  const fItalic = 'Times-Italic-TTF';

  const leftMargin = 38;
  const rightMargin = 612 - 38;
  const contentWidth = rightMargin - leftMargin;
  const black = '#000000';

  // 1. Header Name
  doc.font(fBold).fontSize(20.5).fillColor(black)
     .text('Jessie (Jiaxin) Liu', leftMargin, 34, {
       width: contentWidth,
       align: 'center'
     });

  // 2. Contact Info
  doc.font(fRegular).fontSize(9.5).fillColor(black)
     .text('(929) 751-5864 | New York, NY 10009 | jl15972@nyu.edu', leftMargin, doc.y + 2, {
       width: contentWidth,
       align: 'center'
     });

  doc.y += 3;

  // Helper for Section Header
  function addSectionHeader(title) {
    const y = doc.y + 4;
    doc.font(fBold).fontSize(10).fillColor(black)
       .text(title, leftMargin, y, { characterSpacing: 0.2 });
    
    const lineY = doc.y + 1;
    doc.moveTo(leftMargin, lineY)
       .lineTo(rightMargin, lineY)
       .lineWidth(0.65)
       .strokeColor(black)
       .stroke();
    
    doc.y = lineY + 3;
  }

  // Helper for 2-column header row
  function addHeaderRow(leftText, leftFont, rightText, rightFont, fontSize = 9.5) {
    const y = doc.y;
    doc.font(leftFont).fontSize(fontSize).fillColor(black)
       .text(leftText, leftMargin, y, { width: contentWidth - 120, align: 'left' });
    
    doc.font(rightFont).fontSize(fontSize).fillColor(black)
       .text(rightText, leftMargin, y, { width: contentWidth, align: 'right' });
    
    doc.y = y + fontSize + 1.8;
  }

  // Helper for bullet item
  function addBullet(text, fontSize = 9.2) {
    const bulletIndent = leftMargin + 11;
    const textWidth = rightMargin - bulletIndent;
    const bulletY = doc.y;

    // Bullet symbol
    doc.font(fRegular).fontSize(7).fillColor(black)
       .text('●', leftMargin + 2, bulletY + 1.2);

    doc.font(fRegular).fontSize(fontSize).fillColor(black)
       .text(text, bulletIndent, bulletY, {
         width: textWidth,
         align: 'left',
         lineGap: 1.1
       });
    
    doc.y = doc.y + 1.8;
  }

  // Helper for labeled text line
  function addLabeledLine(label, value, isEntireLineItalic = false, fontSize = 9.2) {
    const y = doc.y;
    
    if (isEntireLineItalic) {
      doc.font(fItalic).fontSize(fontSize).fillColor(black)
         .text(label + ' ' + value, leftMargin, y, {
           width: contentWidth,
           align: 'left',
           lineGap: 1
         });
    } else {
      doc.font(fBold).fontSize(fontSize).fillColor(black)
         .text(label + ' ', leftMargin, y, { continued: true });
      doc.font(fRegular).fontSize(fontSize).fillColor(black)
         .text(value, {
           width: contentWidth,
           align: 'left',
           lineGap: 1
         });
    }
    doc.y = doc.y + 1.2;
  }

  // SECTION: EDUCATION
  addSectionHeader('EDUCATION');
  addHeaderRow('New York University, College of Arts and Science', fBold, 'New York, NY', fRegular);
  addHeaderRow('Bachelor of Arts in Economics', fItalic, 'May 2028', fRegular);
  addLabeledLine('Minors:', 'Business Studies; Business of Entertainment, Media, and Technology', true);
  addLabeledLine('Cumulative GPA:', '4.0/4.0');
  addLabeledLine('Relevant Coursework:', 'Management and Organizations, Digital Business Strategy, Introduction to Marketing');
  addLabeledLine('Honors:', "NYU Liberal Studies Dean's List, 2024–25 & 2025–26");

  doc.y += 2;

  // SECTION: PROFESSIONAL EXPERIENCE
  addSectionHeader('PROFESSIONAL EXPERIENCE');
  
  // 1. Deloitte
  addHeaderRow('Deloitte', fBold, 'Beijing, China', fRegular);
  addHeaderRow('Tax and Business Advisory Intern', fItalic, 'May 2026 – Jun 2026', fRegular);
  addBullet('Built 5 FY25 related-party transaction models and intangible asset reports for multinational clients, transforming raw transaction data into management-ready analysis');
  addBullet('Cross-verified financial and operational data on peer companies against public filings and industry databases, supporting a 100+ page multi-sector commercial analysis across New Energy, Automotive, and Consumer Services');

  doc.y += 1.5;

  // 2. VSTECS
  addHeaderRow('VSTECS (HK00856)', fBold, 'Guangzhou, China', fRegular);
  addHeaderRow('Sales Intern', fItalic, 'Jun 2025 – Aug 2025', fRegular);
  addBullet('Conducted 8 field visits to distributors and system integrators across South China, gathering competitive intelligence on Huawei and Inspur to refine H3C and HPE server positioning');
  addBullet('Evaluated credit risk across 20+ prospective sub-distributors and 10+ contracts, supporting partner screening and mitigating bad-debt exposure across the distribution network');
  addBullet('Advanced 5 target clients through the sales pipeline by translating market and customer insights into tailored sales strategies, securing 1 new channel partner and a ¥200,000 server procurement contract');

  doc.y += 1.5;

  // 3. Test Daily
  addHeaderRow('Test Daily', fBold, 'Guangzhou, China', fRegular);
  addHeaderRow('Social Media Coordinator', fItalic, 'Dec 2023 – Jul 2024', fRegular);
  addBullet('Analyzed engagement data across 200K+ followers to identify Gen Z education trends and audience preferences; produced 25+ articles averaging 10K+ views and outperforming platform benchmarks by 100%');
  addBullet('Identified emerging online trends and transformed complex education and business topics into timely, story-driven content, using culturally relevant and emotionally resonant narratives to generate up to 70K+ views per article');
  addBullet('Leveraged content to engage prospective international students and parents throughout the customer journey, helping drive a 15% increase in study-abroad consulting inquiries and strengthen conversion to the firm’s education services');

  doc.y += 2;

  // SECTION: LEADERSHIP & EXTRACURRICULAR ACTIVITIES
  addSectionHeader('LEADERSHIP & EXTRACURRICULAR ACTIVITIES');
  
  // 1. NYU CAB
  addHeaderRow('NYU Class Activities Board', fBold, 'New York, NY', fRegular);
  addHeaderRow('Executive Vice President (promoted from First Year Chair)', fItalic, 'Sep 2025 – Present', fRegular);
  addBullet('Spearhead 4 campus-wide events per semester serving 800+ NYU students, translating student feedback into programming strategy and leading weekly planning and post-event debriefs');
  addBullet('Supervise the First Year Committee, overseeing project approvals, resource allocation, vendor coordination, and milestone tracking to deliver events within budget and timeline constraints');

  doc.y += 1.5;

  // 2. NYU 67A Hall Council
  addHeaderRow('NYU 67A Hall Council', fBold, 'New York, NY', fRegular);
  addHeaderRow('Director of Business Administration', fItalic, 'Sep 2025 – May 2026', fRegular);
  addBullet('Managed a $17,500 annual programming budget for a 200-resident community, overseeing funding allocations, expense tracking, and event spending');
  addBullet('Partnered with Resident Assistants to design multi-channel promotional campaigns for community events, increasing turnout by 40%');

  doc.y += 2;

  // SECTION: SKILLS & INTERESTS
  addSectionHeader('SKILLS & INTERESTS');
  addLabeledLine('Languages & Technical Skills:', 'English, Mandarin; Excel (PivotTables, XLOOKUP), PowerPoint, Google Sheets');
  addLabeledLine('Interests:', 'Running, Freestyle Skiing, Cooking, Hiking, Matcha, Exploring NYC Restaurants');

  doc.end();

  return new Promise((resolve, reject) => {
    stream.on('finish', resolve);
    stream.on('error', reject);
  });
}

const targetPath = path.join(__dirname, 'public', 'Jessie_Resume_2026_EN_v2.pdf');
generateResumePDF(targetPath).then(() => {
  console.log('Successfully generated', targetPath);
}).catch((err) => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
