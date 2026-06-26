/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Linkedin, ExternalLink, GraduationCap, BookOpen, Film, MessageSquare, Globe, Users, Newspaper, Video, ChevronRight, Trophy, Play, FileText, Printer, Menu, X, Sparkles, Heart, Bookmark, MoreHorizontal, Send } from "lucide-react";

type Language = "en" | "zh";

const translations = {
  en: {
    nav: { about: "About", portfolio: "Portfolio", resume: "Resume", contact: "Contact" },
    hero: {
      subtitle: "Economics Student at NYU",
      tagline: "Consumer Insight × Growth Mindset",
      cta: "View Portfolio"
    },
    bio: {
      title: "About Me",
      description: `"Blockbuster"

I make complex things worth reading.

Whether it's crafting content for a 200K+ social media account, organizing events for hundreds of students at NYU, or helping clients navigate tax strategy at Deloitte, the throughline has always been the same: find the story, and tell it in a way that actually lands.

My path has been deliberately varied. Each role pushed me to understand people from a different angle, including what clients need, what readers want, and how to turn expertise into something genuinely useful.

I’m also a life-long learner. I dig into problems until the logic clicks. I look for business signals inside tech trends. That restless curiosity is what kept my GPA at 4.0. It’s not discipline for its own sake, but the genuine need to actually get it.

Outside of work, I find my balance on trails and slopes. Long-distance running clears my head. Freestyle skiing reminds me how to become a risk-taker and get comfortable with losing control. Current goal: land a 180 mute grab. Not there yet, but getting closer:)`,
      edu: "Education",
      major: "Major",
      minor: "Minor",
      gpa: "GPA",
      university: "New York University (Main Campus)",
      majorVal: "Economics",
      minorVal: "Business Studies and Business of Entertainment, Media, and Technology",
      strengthTitle: "Strength",
      strengths: ["Achiever", "Context", "Focus", "Strategic", "Learner"],
      reportLink: "View Gallup Strength Report",
      reportUrl: "/gallup_report.pdf",
      skillsTitle: "Skills",
      skills: ["AIGC (Gemini, Claude)", "Canva", "Microsoft Office", "CapCut"],
      skillsSubtitle: "Tools & Technologies"
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "Selected Creative Works & Experiences",
      sections: {
        orgs: "Student Organizations",
        competition: "Competitions",
        td: "TD Test Daily",
        personal: "Jessie's Little World (Personal Account)",
        video: "Video Editing"
      },
      items: {
        cab: {
          title: "NYU Class Activities Board",
          event: "Friendship Island Event",
          date: "September, 2025",
          desc: "Planned and hosted the first 25 Fall CAB event 'Friendship Island', a high-energy speed-friending mixer designed specifically to help first-year students build meaningful campus connections. We curated a multi-activity program, featuring a tropical island theme, interactive bingo and an E-Board Mingle. I designed the event's visual slide deck. Successfully generated 60 RSVPs and over 30 attendees.",
          linkText: "View Event Slides",
          link: "https://canva.link/8z7g03m76o0wge2",
          image: "https://i.postimg.cc/Jn26XvWq/Wechat-IMG4181.jpg",
          images: [
            "https://i.postimg.cc/Jn26XvWq/Wechat-IMG4181.jpg"
          ]
        },
        council: {
          title: "NYU 67A SSAIL Hall Council",
          event: "Chinatown Adventure Event",
          date: "February, 2026",
          desc: "Developed and pitched a Lunar New Year theme event to introduce residents to Chinese festive traditions. I designed all digital and print marketing materials using Canva, curated a local tour route and served as the lead guide for a group of 6 students, managing all logistics and safety.",
          linkText: "View Event Poster",
          link: "https://canva.link/vqrh29oeewgwqf2"
        },
        wallstreet: {
          title: "NYU 67A SSAIL Hall Council",
          event: "A Cup of Wall Street Event",
          date: "March, 2026",
          desc: "Organized 'A Cup of Wall Street' event, leading a cohort of 6 students to visit a coffee shop converted from a Wall Street bank, exploring the historical heritage of New York's Financial District.",
          linkText: "View Event Poster",
          link: "https://canva.link/jhhqah91wo2zmx8"
        },
        mktsoc: {
          title: "NYU MKTSOC 25 Fall Case Competition — TOP 6",
          date: "November, 2025",
          desc: "Developed a strategic marketing turnaround for Solara, a wellness app facing a 7.3% market slump. Designed the 'Celebrity Wake-Up' campaign, leveraging AI-integrated personas like Ryan Reynolds to solve the 'willpower gap'. Strategy included a tiered pricing model positioning Solara as a cost-effective alternative.",
          linkText: "View Competition Slides (PDF)"
        },
        td: {
          title: "TD Test Daily",
          date: "Dec 2023 - July 2024",
          desc: "Responsible for content planning and production for a public account platform with 200,000+ followers, assisting in the execution of brand promotion plans. Proficient in using Excel and the public account backend for user data analysis, planning educational articles, and maintaining a stable reading volume of 5,000+ per article. Created over 25+ high-conversion, high-interaction viral articles, with interaction rates exceeding the platform average by 150%.",
          linkText1: "Article: 'Waking up to my college closing...' (69.9K Views) - Simplified Chinese Version",
          linkText2: "Article: 'Middle-class study abroad experience' (16.2K Views) - Simplified Chinese Version",
          link1: "https://mp.weixin.qq.com/s/wZQpXuCB14Ob5mU1B5tLkg",
          link2: "https://mp.weixin.qq.com/s/O35yiCyw9d9yn_X59ETZNA"
        },
        personal: {
          title: "Jessie's Little World",
          type: "(Personal Account)",
          desc: "Independently responsible for topic selection, editing, layout, and user growth, with 0-to-1 market project execution experience. Combined with company financial report data, used SWOT, 4P and other theoretical frameworks to analyze marketing cases of large companies, transforming complex business logic into easy-to-spread deep long articles. Published a total of 7 deep business analysis articles, reaching more than 7,000 readers.",
          linkText1: "Article: 'Luckin Coffee vs. Starbucks China' (489 Views) - Simplified Chinese Version",
          linkText2: "Luckin Coffee vs. Starbucks China: Will 20,000+ Stores Lead to Victory? - English Version",
          linkText3: "Article: 'The Rise of Private Dental Clinics' (6919 Views) - Simplified Chinese Version",
          link1: "https://mp.weixin.qq.com/s/7kllMw_rH8TiuFGufjxqjQ",
          link2: "https://docs.google.com/document/d/1vS0PRgA-Aww7ayhcoC7S03Azy3bwXvNISI27pGddtGs/edit?usp=sharing",
          link3: "https://mp.weixin.qq.com/s/XtUbPb4ud6HddD3GE9TSNw"
        }
      }
    },
    contact: {
      title: "Get In Touch",
      gmail: "Gmail",
      qq: "QQ Email",
      linkedin: "LinkedIn"
    },
    resume: {
      title: "Resume",
      download: "Download PDF",
      print: "Print Portfolio to PDF",
      pdfUrl: "/resume_en.pdf",
      gallup: "Gallup CliftonStrengths PDF",
      gallupUrl: "/gallup_report.pdf",
      sections: {
        education: "Education",
        experience: "Professional Experience",
        leadership: "Leadership & Activities",
        skills: "Skills & Interests"
      },
      edu: [
        {
          school: "New York University, College of Arts and Science",
          location: "New York, NY",
          degree: "B.S. in Economics",
          minor: "Minor: Business Studies, Business of Entertainment, Media, and Technology",
          date: "Sept 2024 – May 2028",
          details: [
            "Cumulative GPA: 4.0/4.0", 
            "Honors: NYU Liberal Studies Dean's List 24-25 AY",
            "Relevant Courses: Management and Organizations, Digital Business Strategy, Topics: Economics Research, Intro to Marketing"
          ]
        }
      ],
      exp: [
        {
          company: "Deloitte Consulting (Shanghai) Co., Ltd. Beijing Branch",
          role: "Tax & Business Advisory Intern",
          date: "May 2026 – Present",
          details: [
            "Collaborate with consultants and senior managers in the Transfer Pricing team to scope client requirements, frame core business challenges, and deliver transfer pricing documentation for multinational clients",
            "Build 3 structured workpapers and financial reports using Excel (pivot tables), including FY25 Related Party Transactions and Intangible Asset List, translating intercompany transaction data into decision-ready outputs for client review",
            "Conduct 20+ pages of automotive industry and market share analysis on leading brands (e.g., Hyundai China), evaluating competitive dynamics across EV and passenger vehicle segments to provide deeper insights for client base"
          ]
        },
        {
          company: "VSTECS (HK00856)",
          role: "Sales Intern",
          date: "Jun 2025 – Aug 2025",
          details: [
            "Executed structured competitive analysis by evaluating downstream client needs and upstream manufacturer capabilities across 8 site visits; identified product service gaps to help the sales team convert 5 target clients",
            "Supported commercial risk control by reviewing 10+ contracts and analyzing 20+ prospective clients' financial statements under guidelines, screening out high-risk counterparties to eliminate default exposure",
            "Coordinated internal technical and commercial resources through a complex sales cycle, aligning cross-functional stakeholders to successfully acquire a new institutional client and secure a ¥200,000 contract"
          ]
        },
        {
          company: "TD Test Daily",
          role: "Social Media Coordinator",
          date: "Dec 2023 – Jul 2024",
          details: [
            "Developed content strategies for a 200K+ follower WeChat platform by analyzing audience demographics and engagement metrics, consistently driving 10,000+ views per post and outperforming average platform engagement by 100%",
            "Initiated research on U.S. higher education financial deficits (e.g., Rutgers, Penn State, University of Arizona), synthesizing complex financial disclosures into compelling analyses that generated 70,000+ views"
          ]
        }
      ],
      leadership: [
        {
          org: "NYU Class Activities Board",
          role: "Executive Vice President",
          date: "Sept 2025 – Present",
          details: [
            "Lead weekly general meetings and advise 2 CAB committees to host 4 high-impact events within a single semester",
            "Direct budgeting and event operations for large-scale campus programming",
            "Events: Last First Day, Friendship Island, Halloween Bash, Friendsgiving, Spring Banquet, Slime Making, Senior Week"
          ]
        },
        {
          org: "NYU 67A SSAIL Hall Council",
          role: "Director of Business Administration",
          date: "Sept 2025 – May 2026",
          details: [
            "Standardize financial tracking of a $14,000 budget, building custom templates to streamline proposal auditing",
            "Partner with Resident Assistants (RAs) to design multi-channel promotional campaigns, boosting event turnout by 40%",
            "Events: UVL Prelim, Dormsgiving, Chinatown Adventure, A Cup of Wall Street, Mimi's Frozen Yogurt Social"
          ]
        },
        {
          org: "NYU Live",
          role: "Headline Editor",
          date: "Sept 2024 – May 2026",
          details: [
            "Report NYU and NYC news while managing \"NYU Survival Kit\" blog, tailoring content to the Gen-Z student demographic；publish 12+ articles and organize a 30+ person orientation mixer, fostering community among NYU Chinese students",
            "Build and manage a 187-member WeChat community for NYU's Class of 2030, serving as a key resource for incoming students"
          ]
        }
      ],
      skills: {
        lang: "Languages & Skills: Mandarin (Native), English (TOEFL 111/120), Microsoft Office (Word, Excel, PowerPoint), AIGC Content Creation (Gemini & Claude), Google Workspace (Sheets, Docs), Canva, Figma, CapCut, Notion",
        interests: "Interests: Running, Free-Style Skiing, Cooking, Hiking, Exploring Shops"
      }
    }
  },
  zh: {
    nav: { about: "关于我", portfolio: "作品集", resume: "简历", contact: "联系方式" },
    hero: {
      subtitle: "纽约大学经济学学生",
      tagline: "消费者洞察 × 成长型思维",
      cta: "查看作品集"
    },
    bio: {
      title: "关于我",
      description: `不管是帮客户梳理品牌故事、为20万粉丝的账号策划内容，还是在纽约大学组织百人活动，我做的事情形式各异，但核心始终是同一件事：找到那根线，把散落的信息串成一个真正能打动人的故事。

这条路我走得很杂。社媒运营、活动策划、销售、德勤的税务咨询……每一段经历都逼着我从不同角度理解人，理解客户想要什么，读者需要什么，以及怎么把"专业"变成"有用"。

我也致力成为一个终生学习者，具备快速学习的能力。对我来说，好奇心不是加分项，而是工作方式。我习惯刨根问底，喜欢在技术趋势里找商业逻辑，也愿意在失败里反复打磨。大学4.0 GPA背后没有什么秘诀，只是想把知识点搞清楚。

工作之外，我在山上和路上找平衡。长跑让我清空大脑，自由式滑雪让我重新学会接受失控。最近的目标是180转体 + mute抓板。还没落稳，但在练。`,
      edu: "教育背景",
      major: "专业",
      minor: "辅修",
      gpa: "GPA",
      university: "纽约大学（主校区）",
      majorVal: "经济学",
      minorVal: "商业研究和娱乐、媒体与技术商业管理",
      strengthTitle: "优势",
      strengths: ["成就 (Achiever)", "史思 (Context)", "专注 (Focus)", "战略 (Strategic)", "学习 (Learner)"],
      reportLink: "查看盖洛普优势报告",
      reportUrl: "/gallup_report.pdf",
      skillsTitle: "专业技能",
      skills: ["AIGC (Gemini, Claude)", "Canva", "Microsoft Office", "剪映"],
      skillsSubtitle: "工具与技术"
    },
    portfolio: {
      title: "作品集",
      subtitle: "精选创意作品与实践经历",
      sections: {
        orgs: "学生社团",
        competition: "竞赛经历",
        td: "TD 厚朴优学",
        personal: "杰西的小世界（个人公众号）",
        video: "视频剪辑"
      },
      items: {
        cab: {
          title: "NYU Class Activities Board",
          event: "Friendship Island 活动",
          date: "2025年9月",
          desc: "策划并主持了25年秋季CAB首场活动“友谊岛”，这是一个旨在帮助一年级学生建立校园联系的高能量社交聚会。策划了包括热带岛屿主题、“bingo”游戏 和E-Board交流在内的多元活动。我同时设计了活动演示文稿。最终成功吸引了60人报名，30多人到场。",
          linkText: "查看活动幻灯片",
          link: "https://canva.link/8z7g03m76o0wge2",
          image: "https://i.postimg.cc/Jn26XvWq/Wechat-IMG4181.jpg",
          images: [
            "https://i.postimg.cc/Jn26XvWq/Wechat-IMG4181.jpg"
          ]
        },
        council: {
          title: "NYU 67A SSAIL Hall Council",
          event: "唐人街探险活动",
          date: "2026年2月",
          desc: "组织宿舍农历新年主题活动，向外国同学介绍中国节日传统。熟练使用Canva设计了海报和Google Form报名表，并担任6名学生的中国城导游。",
          linkText: "查看活动海报",
          link: "https://canva.link/vqrh29oeewgwqf2"
        },
        wallstreet: {
          title: "NYU 67A SSAIL Hall Council",
          event: "“啡阅华尔街”活动",
          date: "2026年3月",
          desc: "组织了“啡阅华尔街”活动，带领 6 名学生参观由华尔街银行改造的咖啡店，探寻纽约金融区的历史底蕴。",
          linkText: "查看活动海报",
          link: "https://canva.link/jhhqah91wo2zmx8"
        },
        mktsoc: {
          title: "NYU MKTSOC 25 秋季案例竞赛 — TOP 6",
          date: "2025年11月",
          desc: "为面临7.3%市场下滑的健康应用Solara开发了战略营销转型方案。设计了“名人叫醒”活动，利用Ryan Reynolds等AI集成角色解决用户的“意志力差距”。策略包括阶梯定价模型，将Solara定位为高性价比替代方案。",
          linkText: "查看竞赛幻灯片 (PDF)"
        },
        td: {
          title: "TD 厚朴优学",
          date: "2023年12月 - 2024年7月",
          desc: "负责为拥有20万+粉丝的公众号平台做内容策划与产出，协助执行品牌推广计划。熟练运用Excel表格和公众号后台做用户数据分析，策划教育类推文，保持每篇5000+的稳定阅读量。一共打造超过25+篇高转化、高互动的爆款内容，使推文互动率超出平台平均水平150%。",
          linkText1: "《一觉醒来，我的大学倒闭了...》（6.99万浏览量）- 简体中文版",
          linkText2: "《“中产留学是爸妈送给我的富二代体验券”》（1.62万浏览量）- 简体中文版",
          link1: "https://mp.weixin.qq.com/s/wZQpXuCB14Ob5mU1B5tLkg",
          link2: "https://mp.weixin.qq.com/s/O35yiCyw9d9yn_X59ETZNA"
        },
        personal: {
          title: "杰西的小世界",
          type: "（个人公众号）",
          desc: "独立负责选题、采编、排版及用户增长，具备从0到1的市场项目执行经验。结合公司财报数据，运用SWOT、4P等理论框架分析大厂营销案例，将复杂商业逻辑转化为易于传播的深度长文。累计发布7篇深度商业分析文章，触达超过7000名读者。",
          linkText1: "《瑞幸拿什么跟星巴克玩》（489浏览量）- 简体中文版",
          linkText2: "Luckin Coffee vs. Starbucks China: Will 20,000+ Stores Lead to Victory? - English Version",
          linkText3: "《私人牙科诊所的崛起》（6919浏览量）- 简体中文版",
          link1: "https://mp.weixin.qq.com/s/7kllMw_rH8TiuFGufjxqjQ",
          link2: "https://docs.google.com/document/d/1vS0PRgA-Aww7ayhcoC7S03Azy3bwXvNISI27pGddtGs/edit?usp=sharing",
          link3: "https://mp.weixin.qq.com/s/XtUbPb4ud6HddD3GE9TSNw"
        }
      }
    },
    contact: {
      title: "取得联系",
      gmail: "Gmail",
      qq: "QQ邮箱",
      linkedin: "LinkedIn"
    },
    resume: {
      title: "个人简历",
      download: "下载 PDF",
      print: "打印作品集为 PDF",
      pdfUrl: "/resume_zh.pdf",
      gallup: "盖洛普优势报告 PDF",
      gallupUrl: "/gallup_report.pdf",
      sections: {
        education: "教育经历",
        experience: "工作经验",
        leadership: "领导力与课外活动",
        skills: "专业技能与兴趣"
      },
      edu: [
        {
          school: "纽约大学, 文理学院 (College of Arts and Science)",
          location: "美国纽约",
          degree: "经济学专业本科",
          minor: "辅修：商业研究，娱乐、媒体与技术商业管理",
          date: "2024.9 - 2028.5",
          details: [
            "总绩点: 4.0/4.0", 
            "荣誉：2024-2025 学年优秀生名单 (NYU Liberal Studies Dean's List 24-25 AY)",
            "相关课程：管理与组织架构，数字商务战略，主题：经济学研究，市场营销概论"
          ]
        }
      ],
      exp: [
        {
          company: "德勤管理咨询（上海）有限公司北京分公司",
          role: "税务与商务咨询实习生",
          date: "2026.5 - 至今",
          details: [
            "协作交付：与转让定价团队顾问及高级经理协作，明确跨国客户需求，梳理核心业务挑战，完成转让定价文档交付",
            "数据建模：运用Excel数据透视表构建3份结构化工作底稿及财务报告，涵盖FY25关联方交易及无形资产清单，将内部交易数据转化为可供客户决策的成果输出",
            "行业分析：完成逾20页汽车行业及市场份额分析报告，覆盖现代中国等主要品牌，深度评估新能源汽车与乘用车细分市场竞争格局，为客户提供洞察支持"
          ]
        },
        {
          company: "广州佳杰科技有限公司",
          role: "新华三业务群销售实习",
          date: "2025.6 - 2025.8",
          details: [
            "竞争洞察：通过8次实地走访，系统评估下游客户需求与上游厂商能力，开展竞品分析，识别产品服务缺口协助销售团队成功转化5家目标客户",
            "风险管控：参与商业风险管控工作，依据相关规范审核10+份合同，分析20+家潜在客户财务报表，筛查高风险交易客户，有效规避违约情况",
            "客户拓展：统筹内部技术与商务资源，推动跨职能团队协同配合，成功开拓一家新客户，签署金额¥200,000的合同"
          ]
        },
        {
          company: "Test Daily厚朴优学",
          role: "社媒运营",
          date: "2023.12 - 2024.7",
          details: [
            "内容策划：通过分析受众画像和互动指标，为拥有20万+粉丝的微信平台制定内容策略，持续保持每篇10,000+的阅读量，超出平台平均互动率100%",
            "专题研究：主导美国高等教育财政赤字专题研究（如罗格斯大学、宾州州立大学、亚利桑那大学），将复杂的财务信息披露整合为极具吸引力的分析内容，累计创造70,000+次阅读量"
          ]
        }
      ],
      leadership: [
        {
          org: "纽约大学年级活动委员会",
          role: "执行副主席",
          date: "2025.9 - 至今",
          details: [
            "会议统筹：主持每周例会，并指导2个年级委员会单学期内举办4场高影响力活动",
            "活动运营：负责大型校园活动的预算管理与活动运营工作",
            "举办活动：Last First Day, Friendship Island, Halloween Bash, Friendsgiving, Spring Banquet, Slime Making, Senior Week"
          ]
        },
        {
          org: "纽约大学67A SSAIL宿舍委员会",
          role: "财政部部长",
          date: "2025.9 - 2026.5",
          details: [
            "财务规范：规范管理 14,000 美元年度预算，设计结构化模板以简化提案审核流程",
            "宣传推广：与宿舍助理 (RA) 开展多渠道宣传，服务 100+ 学生并将参与率提升 40%",
            "举办活动：UVL Prelim, Dormsgiving, Chinatown Adventure, A Cup of Wall Street, Mimi's Frozen Yogurt Social"
          ]
        },
        {
          org: "NYU Live",
          role: "头条文章编辑",
          date: "2024.9 - 2026.5",
          details: [
            "流量转化：负责生活方式专栏“情报特刊”，深度洞察Z世代受众画像并定制专属内容，定向产出探店、选课、求职等垂类内容，累计发布 12 篇深度公众号文章，持续扩大NYU学生社群影响力",
            "社群运营：创建并精细化运营187人NYU 2030届新生微信社群，策划30+人线下见面会，搭建新生信息交流平台"
          ]
        }
      ],
      skills: {
        lang: "语言和技能：中文（母语），英文（流利，托福 111/120），Microsoft工具 (Word, Excel, PowerPoint), AIGC内容制作 (Gemini & Claude)，Google Sheet，Canva，Figma，创客贴，秀米编辑器，壹伴小插件，剪映，Notion",
        interests: "兴趣：跑步，自由式滑雪，烹饪，徒步，探店"
      }
    }
  }
};

export default function App() {
  const [lang, setLang] = useState<Language>("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [activeCabImg, setActiveCabImg] = useState(0);
  const [cabLiked, setCabLiked] = useState(false);
  const [cabBookmarked, setCabBookmarked] = useState(false);
  const t = translations[lang];

  const nameZh = "刘嘉欣";
  const nameEn = "Jessie Liu";
  const name = `${nameZh} ${nameEn}`;
  const photoUrl = "https://i.postimg.cc/xTkL3Nkz/eaba872db411359dcefb7b5fb2c80aa8.jpg";
  const tdLogo = "https://i.postimg.cc/zXwcHprK/1666948832523.jpg";
  
  const contacts = {
    qq: "3148498539@qq.com",
    gmail: "jl15972@nyu.edu",
    linkedin: "https://www.linkedin.com/in/jessie-liu-6b2985323"
  };

  const toggleLang = () => setLang(prev => prev === "en" ? "zh" : "en");

  return (
    <div className="min-h-screen font-sans selection:bg-sky-100 bg-white">
      {/* Header / Nav */}
      <nav className="fixed top-0 w-full z-50 px-6 md:px-8 py-4 md:py-6 flex justify-between md:justify-end items-center mix-blend-difference text-white">
        <div className="md:hidden text-sm uppercase tracking-widest font-bold">
          {lang === "en" ? "Jessie Liu" : "刘嘉欣"}
        </div>
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
            <a href="#about" className="hover:opacity-50 transition-opacity">{t.nav.about}</a>
            <a href="#portfolio" className="hover:opacity-50 transition-opacity">{t.nav.portfolio}</a>
            <a href="#resume" className="hover:opacity-50 transition-opacity">{t.nav.resume}</a>
            <a href="#contact" className="hover:opacity-50 transition-opacity">{t.nav.contact}</a>
          </div>
          <button 
            onClick={toggleLang}
            className="hidden sm:flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            <Globe size={14} />
            {lang === "en" ? "中文简体" : "English"}
          </button>
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden flex items-center justify-center p-2 border border-white/25 rounded-full hover:bg-white hover:text-black transition-all"
            aria-label="Toggle menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-lg z-50 flex flex-col justify-between p-8 text-white md:hidden"
          >
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold tracking-widest uppercase text-accent">Jessie Liu</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-8 text-3xl font-light tracking-widest text-center my-auto">
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-accent transition-colors py-2 block"
              >
                {t.nav.about}
              </a>
              <a 
                href="#portfolio" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-accent transition-colors py-2 block"
              >
                {t.nav.portfolio}
              </a>
              <a 
                href="#resume" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-accent transition-colors py-2 block"
              >
                {t.nav.resume}
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-accent transition-colors py-2 block"
              >
                {t.nav.contact}
              </a>
              
              <button 
                onClick={() => {
                  toggleLang();
                  setMobileMenuOpen(false);
                }}
                className="mx-auto flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all mt-4"
              >
                <Globe size={16} />
                {lang === "en" ? "中文简体" : "English"}
              </button>
            </div>

            <div className="flex justify-center gap-8 py-4 border-t border-white/10">
              <a href={contacts.linkedin} target="_blank" rel="noreferrer" className="text-white/60 hover:text-accent transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${contacts.gmail}`} className="text-white/60 hover:text-accent transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen lg:h-screen flex items-center justify-center overflow-hidden py-24 lg:py-0">
        <div className="absolute inset-0 bg-light-blue opacity-20" />
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
          <motion.div
            key={lang}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-4 leading-tight">
              {lang === "zh" ? (
                <>
                  {nameZh} <br /> {nameEn}
                </>
              ) : (
                <>
                  {nameEn} <br /> {nameZh}
                </>
              )}
            </h1>
            <div className="mb-8">
              <p className="text-lg sm:text-xl text-accent font-medium tracking-wide mb-2">
                {t.hero.subtitle}
              </p>
              <p className="text-sm sm:text-base md:text-lg text-slate-500 font-light tracking-[0.2em] uppercase">
                {t.hero.tagline}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#portfolio" 
                className="bg-slate-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-accent transition-colors"
              >
                {t.hero.cta}
              </a>
              <a 
                href="#resume" 
                className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full text-sm font-medium hover:border-accent transition-colors flex items-center gap-2"
              >
                <FileText size={18} />
                {t.nav.resume}
              </a>
              <div className="flex items-center gap-4 px-4">
                <a href={contacts.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href={`mailto:${contacts.gmail}`} className="text-slate-400 hover:text-accent transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-96 md:h-[32rem]">
              <div className="absolute inset-0 bg-light-blue rounded-3xl rotate-6 -z-10" />
              <img 
                src={photoUrl} 
                alt={name}
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="serif text-4xl mb-16 text-center">{t.bio.title}</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
                <div>
                  <GraduationCap className="text-accent mb-4 shrink-0" size={32} />
                  <h3 className="text-xs uppercase tracking-widest text-slate-400 mb-2">{t.bio.edu}</h3>
                  <p className="font-medium text-xs sm:text-sm md:text-base text-slate-900">{t.bio.university}</p>
                </div>
              </div>
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
                <div>
                  <BookOpen className="text-accent mb-4 shrink-0" size={32} />
                  <h3 className="text-xs uppercase tracking-widest text-slate-400 mb-2">{t.bio.major}</h3>
                  <p className="font-medium text-xs sm:text-sm md:text-base text-slate-900">{t.bio.majorVal}</p>
                </div>
              </div>
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
                <div>
                  <Film className="text-accent mb-4 shrink-0" size={32} />
                  <h3 className="text-xs uppercase tracking-widest text-slate-400 mb-2">{t.bio.minor}</h3>
                  <p className="font-medium text-xs sm:text-sm md:text-base text-slate-900">{t.bio.minorVal}</p>
                </div>
              </div>
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
                <div>
                  <Trophy className="text-accent mb-4 shrink-0" size={32} />
                  <h3 className="text-xs uppercase tracking-widest text-slate-400 mb-2">{t.bio.gpa}</h3>
                  <p className="font-medium text-xs sm:text-sm md:text-base text-slate-900">4.0 / 4.0</p>
                </div>
              </div>
            </div>
            <div className="text-center max-w-3xl mx-auto">
              <p className="whitespace-pre-line text-left md:text-justify text-base sm:text-lg text-slate-600 font-light leading-relaxed mb-12">
                {t.bio.description}
              </p>

              {/* Strengths & Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12 text-center">
                {/* Strengths Card */}
                <div className="bg-white px-6 py-8 sm:px-10 sm:py-10 rounded-[1.5rem] shadow-sm border border-slate-100 flex flex-col items-center justify-between min-h-[250px]">
                  <div className="flex flex-col items-center gap-5 w-full">
                    <div className="flex items-center gap-3">
                      <Trophy className="text-accent" size={24} />
                      <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-slate-900">
                        {t.bio.strengthTitle}
                      </h3>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                      {(t.bio.strengths as string[]).map((strength: string, i: number) => (
                        <span 
                          key={i}
                          className="px-3.5 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-xs sm:text-sm font-medium text-slate-700 capitalize"
                        >
                          {strength}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a 
                    href={t.bio.reportUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 flex items-center gap-2 text-accent text-xs sm:text-sm font-medium hover:underline"
                  >
                    <FileText size={16} />
                    {t.bio.reportLink}
                  </a>
                </div>

                {/* Skills Card */}
                <div className="bg-white px-6 py-8 sm:px-10 sm:py-10 rounded-[1.5rem] shadow-sm border border-slate-100 flex flex-col items-center justify-between min-h-[250px]">
                  <div className="flex flex-col items-center gap-5 w-full">
                    <div className="flex items-center gap-3">
                      <Sparkles className="text-accent" size={24} />
                      <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-slate-900">
                        {t.bio.skillsTitle}
                      </h3>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                      {(t.bio.skills as string[]).map((skill: string, i: number) => (
                        <span 
                          key={i}
                          className="px-3.5 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-xs sm:text-sm font-medium text-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 sm:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="serif text-4xl sm:text-5xl md:text-6xl mb-4">{t.portfolio.title}</h2>
            <p className="text-slate-400 tracking-widest uppercase text-xs">{t.portfolio.subtitle}</p>
          </div>

          <div className="space-y-24 sm:space-y-32">
            {/* 1. Student Orgs */}
            <div className="space-y-8 sm:space-y-12">
              <div className="flex items-center gap-4">
                <Users className="text-accent" size={32} />
                <h3 className="serif text-2xl sm:text-3xl md:text-4xl">{t.portfolio.sections.orgs}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {/* CAB */}
                <div className="bg-light-blue/10 p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-light-blue/20">
                  <h4 className="font-bold text-lg sm:text-xl mb-2">{t.portfolio.items.cab.title}</h4>
                  <p className="text-accent font-medium mb-4">{t.portfolio.items.cab.event} • {t.portfolio.items.cab.date}</p>
                  <p className="text-slate-600 mb-6 font-light leading-relaxed text-sm sm:text-base">{t.portfolio.items.cab.desc}</p>
                  {t.portfolio.items.cab.images ? (
                    <div className="mb-6">
                      <img 
                        src={t.portfolio.items.cab.images[0]} 
                        onClick={() => setLightboxImg(t.portfolio.items.cab.images[0])}
                        className="rounded-xl w-full h-auto shadow-sm cursor-zoom-in hover:scale-[1.01] transition-all duration-300" 
                        alt={lang === "en" ? "CAB Event Portfolio" : "CAB 活动作品"} 
                        referrerPolicy="no-referrer" 
                      />
                    </div>
                  ) : t.portfolio.items.cab.image ? (
                    <div className="mb-6">
                      <img src={t.portfolio.items.cab.image} className="rounded-2xl w-full h-auto shadow-sm" alt="CAB Event" referrerPolicy="no-referrer" />
                    </div>
                  ) : null}
                  <a href={t.portfolio.items.cab.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-900 font-medium hover:text-accent transition-colors">
                    {t.portfolio.items.cab.linkText} <ExternalLink size={16} />
                  </a>
                </div>
                {/* Council */}
                <div className="bg-light-blue/10 p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-light-blue/20">
                  <h4 className="font-bold text-lg sm:text-xl mb-2">{t.portfolio.items.council.title}</h4>
                  <p className="text-accent font-medium mb-4">{t.portfolio.items.council.event} • {t.portfolio.items.council.date}</p>
                  <p className="text-slate-600 mb-6 font-light leading-relaxed text-sm sm:text-base">{t.portfolio.items.council.desc}</p>
                  <div className="flex flex-col gap-4 mb-6">
                    <img src="https://i.postimg.cc/hGKkmBCM/Chinatown-Adventure.jpg" className="rounded-xl w-full h-auto shadow-sm" alt="Chinatown" referrerPolicy="no-referrer" />
                    <div className="grid grid-cols-2 gap-4">
                      <img src="https://i.postimg.cc/Znv2mKqD/Wechat-IMG3930.jpg" className="rounded-xl w-full h-auto shadow-sm" alt="Chinatown" referrerPolicy="no-referrer" />
                      <img src="https://i.postimg.cc/xqr71DJJ/Wechat-IMG3931.jpg" className="rounded-xl w-full h-auto shadow-sm" alt="Chinatown" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                  {t.portfolio.items.council.link && (
                    <a href={t.portfolio.items.council.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-900 font-medium hover:text-accent transition-colors">
                      {t.portfolio.items.council.linkText} <ExternalLink size={16} />
                    </a>
                  )}
                </div>
                {/* Wall Street */}
                <div className="bg-light-blue/10 p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-light-blue/20 md:col-span-2">
                  <h4 className="font-bold text-lg sm:text-xl mb-2">{t.portfolio.items.wallstreet.title}</h4>
                  <p className="text-accent font-medium mb-4">{t.portfolio.items.wallstreet.event} • {t.portfolio.items.wallstreet.date}</p>
                  <p className="text-slate-600 mb-6 font-light leading-relaxed text-sm sm:text-base">{t.portfolio.items.wallstreet.desc}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 print:grid-cols-2 print:gap-8">
                    <div className="print:row-span-2">
                      <img src="https://i.postimg.cc/MTFcNQvS/Image-22-55-25.png" className="rounded-xl w-full h-full object-cover shadow-sm" alt="Wall Street Poster" referrerPolicy="no-referrer" />
                    </div>
                    <img src="https://i.postimg.cc/xdqNR51H/Wechat-IMG4273.jpg" className="rounded-xl w-full h-auto shadow-sm" alt="Wall Street Event 1" referrerPolicy="no-referrer" />
                    <img src="https://i.postimg.cc/pXx97RL4/Wechat-IMG4274.jpg" className="rounded-xl w-full h-auto shadow-sm" alt="Wall Street Event 2" referrerPolicy="no-referrer" />
                  </div>
                  {t.portfolio.items.wallstreet.link && (
                    <a href={t.portfolio.items.wallstreet.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-900 font-medium hover:text-accent transition-colors">
                      {t.portfolio.items.wallstreet.linkText} <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* 2. Competitions */}
            <div className="space-y-8 sm:space-y-12">
              <div className="flex items-center gap-4">
                <Trophy className="text-accent" size={32} />
                <h3 className="serif text-2xl sm:text-3xl md:text-4xl">{t.portfolio.sections.competition}</h3>
              </div>
              <div className="bg-slate-900 text-white p-6 sm:p-12 rounded-2xl sm:rounded-[3rem] overflow-hidden relative">
                <div className="relative z-10 max-w-2xl">
                  <h4 className="font-bold text-xl sm:text-2xl mb-2">{t.portfolio.items.mktsoc.title}</h4>
                  <p className="text-accent font-medium mb-6">{t.portfolio.items.mktsoc.date}</p>
                  <p className="text-slate-300 mb-8 font-light leading-relaxed text-base sm:text-lg">{t.portfolio.items.mktsoc.desc}</p>
                  <a href="/competition_experience.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-accent hover:text-white transition-all text-sm sm:text-base">
                    {t.portfolio.items.mktsoc.linkText} <ExternalLink size={18} />
                  </a>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 -skew-x-12 translate-x-12" />
              </div>
            </div>



            {/* 4. TD Test Daily */}
            <div className="space-y-8 sm:space-y-12">
              <div className="flex items-center gap-4">
                <img src={tdLogo} alt="TD Logo" className="w-10 h-10 object-contain rounded-lg" referrerPolicy="no-referrer" />
                <h3 className="serif text-2xl sm:text-3xl md:text-4xl">{t.portfolio.sections.td}</h3>
              </div>
              <div className="bg-light-blue/5 p-6 sm:p-12 rounded-2xl sm:rounded-[3rem] border border-light-blue/20 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
                  <img src="https://i.postimg.cc/RCw2ghjL/Wechat-IMG3953.jpg" className="rounded-2xl shadow-md w-full h-auto" alt="TD Work" referrerPolicy="no-referrer" />
                  <img src="https://i.postimg.cc/nhh5VkMX/Wechat-IMG3952.jpg" className="rounded-2xl shadow-md w-full h-auto" alt="TD Work" referrerPolicy="no-referrer" />
                </div>
                <div className="order-1 md:order-2 space-y-6">
                  <div className="flex items-center gap-3">
                    <img src={tdLogo} alt="TD Logo" className="w-8 h-8 object-contain rounded-md" referrerPolicy="no-referrer" />
                    <h4 className="font-bold text-xl sm:text-2xl">{t.portfolio.items.td.title}</h4>
                  </div>
                  <p className="text-accent font-medium">{t.portfolio.items.td.date}</p>
                  <p className="text-slate-600 font-light leading-relaxed text-base sm:text-lg">{t.portfolio.items.td.desc}</p>
                  <div className="flex flex-wrap gap-4">
                    <a href={t.portfolio.items.td.link1} target="_blank" rel="noreferrer" className="text-sm bg-white border border-slate-200 px-4 py-2 rounded-full hover:border-accent transition-colors">{t.portfolio.items.td.linkText1}</a>
                    <a href={t.portfolio.items.td.link2} target="_blank" rel="noreferrer" className="text-sm bg-white border border-slate-200 px-4 py-2 rounded-full hover:border-accent transition-colors">{t.portfolio.items.td.linkText2}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Personal Official Account */}
            <div className="space-y-8 sm:space-y-12 print:break-inside-avoid">
              <div className="flex items-center gap-4">
                <MessageSquare className="text-accent" size={32} />
                <h3 className="serif text-2xl sm:text-3xl md:text-4xl">{t.portfolio.sections.personal}</h3>
              </div>
              <div className="bg-slate-50 p-6 sm:p-12 rounded-2xl sm:rounded-[3rem] border border-slate-200 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="space-y-6">
                  <h4 className="font-bold text-xl sm:text-2xl">
                    {t.portfolio.items.personal.title}
                    <span className="block text-base sm:text-lg font-normal text-slate-400 mt-1">{t.portfolio.items.personal.type}</span>
                  </h4>
                  <p className="text-slate-600 font-light leading-relaxed text-base sm:text-lg">{t.portfolio.items.personal.desc}</p>
                  <div className="flex flex-wrap gap-4">
                    <a href={t.portfolio.items.personal.link1} target="_blank" rel="noreferrer" className="text-sm bg-white border border-slate-200 px-4 py-2 rounded-full hover:border-accent transition-colors">{t.portfolio.items.personal.linkText1}</a>
                    <a href={t.portfolio.items.personal.link2} target="_blank" rel="noreferrer" className="text-sm bg-white border border-slate-200 px-4 py-2 rounded-full hover:border-accent transition-colors">{t.portfolio.items.personal.linkText2}</a>
                    {t.portfolio.items.personal.link3 && (
                      <a href={t.portfolio.items.personal.link3} target="_blank" rel="noreferrer" className="text-sm bg-white border border-slate-200 px-4 py-2 rounded-full hover:border-accent transition-colors">{t.portfolio.items.personal.linkText3}</a>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 print:grid-cols-1 print:gap-8">
                  <div className="aspect-[3/4] bg-slate-200 rounded-2xl overflow-hidden shadow-lg print:aspect-auto print:h-auto">
                    <img src="https://i.postimg.cc/Rh7gTPVY/9d37d304a62aeba96fb70aa2e6884954.jpg" className="w-full h-full object-cover print:object-contain" alt="Personal Account" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-[3/4] bg-slate-200 rounded-2xl overflow-hidden mt-8 shadow-lg print:aspect-auto print:h-auto print:mt-0">
                    <img src="https://i.postimg.cc/8PGKCVtq/640.webp" className="w-full h-full object-cover print:object-contain" alt="Personal Account" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Video Editing */}
            <div className="space-y-8 sm:space-y-12 print:break-inside-avoid">
              <div className="flex items-center gap-4">
                <Video className="text-accent" size={32} />
                <h3 className="serif text-2xl sm:text-3xl md:text-4xl">{t.portfolio.sections.video}</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "https://weixin.qq.com/sph/Aqi4P4pmR",
                  "https://weixin.qq.com/sph/AUZllPqit",
                  "https://weixin.qq.com/sph/AvJkHvu0D",
                  "https://weixin.qq.com/sph/AEVDVZMEN"
                ].map((url, i) => (
                  <a 
                    key={i}
                    href={url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="aspect-[9/16] bg-slate-100 rounded-2xl flex flex-col items-center justify-center group hover:bg-light-blue transition-colors relative overflow-hidden print:break-inside-avoid print:bg-white print:border print:border-slate-200"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play size={20} className="text-accent fill-accent" />
                    </div>
                    <span className="mt-4 text-[10px] sm:text-xs font-medium text-slate-400 group-hover:text-slate-900 uppercase tracking-widest">Video {i+1}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-24 sm:py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-4">
              <div>
                <h2 className="serif text-4xl sm:text-5xl md:text-6xl mb-4">{t.resume.title}</h2>
                <p className="text-slate-400 tracking-widest uppercase text-xs">Professional Background</p>
              </div>
              <div className="flex flex-wrap items-center gap-4 no-print">
                <a 
                  href={t.resume.pdfUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-accent transition-all"
                >
                  <FileText size={18} />
                  {t.resume.download}
                </a>
                <a 
                  href={t.resume.gallupUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-900 rounded-full text-sm font-medium hover:border-accent hover:bg-slate-50 transition-all"
                >
                  <Trophy size={18} />
                  {t.resume.gallup}
                </a>
              </div>
            </div>

            <div className="space-y-16">
              {/* Education */}
              <div>
                <h3 className="text-sm sm:text-base uppercase tracking-[0.2em] text-accent font-bold mb-8 border-b border-slate-200 pb-2">
                  {t.resume.sections.education}
                </h3>
                <div className="space-y-8">
                  {t.resume.edu.map((item: any, i: number) => (
                    <div key={i} className="group">
                      <div className="flex flex-col md:flex-row justify-between mb-2">
                        <h4 className="font-bold text-xl text-slate-900">{item.school}</h4>
                        <span className="text-slate-400 font-mono text-sm">{item.date}</span>
                      </div>
                      <div className="flex flex-col text-slate-500 mb-4 text-sm">
                        <span>{item.degree}</span>
                        {item.minor && (
                          <span className="mt-1">
                            {item.minor}
                          </span>
                        )}
                      </div>
                      <ul className="space-y-2">
                        {item.details.map((detail: string, j: number) => (
                          <li key={j} className="text-slate-600 flex items-start gap-2 text-sm leading-relaxed">
                            <span className="text-accent shrink-0 font-bold select-none">·</span>
                            <span className="flex-1">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-sm sm:text-base uppercase tracking-[0.2em] text-accent font-bold mb-8 border-b border-slate-200 pb-2">
                  {t.resume.sections.experience}
                </h3>
                <div className="space-y-12">
                  {t.resume.exp.map((item: any, i: number) => (
                    <div key={i}>
                      <div className="flex flex-col md:flex-row justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-xl text-slate-900">{item.company}</h4>
                        </div>
                        <span className="text-slate-400 font-mono text-sm">{item.date}</span>
                      </div>
                      <p className="text-accent font-medium mb-4">{item.role}</p>
                      <ul className="space-y-3">
                        {item.details.map((detail: string, j: number) => (
                          <li key={j} className="text-slate-600 flex items-start gap-2 text-sm leading-relaxed">
                            <span className="text-accent shrink-0 font-bold select-none">·</span>
                            <span className="flex-1">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leadership */}
              <div>
                <h3 className="text-sm sm:text-base uppercase tracking-[0.2em] text-accent font-bold mb-8 border-b border-slate-200 pb-2">
                  {t.resume.sections.leadership}
                </h3>
                <div className="flex flex-col gap-6">
                  {t.resume.leadership.map((item: any, i: number) => (
                    <div key={i} className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                        <div>
                          <h4 className="font-bold text-lg leading-tight text-slate-800">{item.org}</h4>
                          <p className="text-accent text-sm font-medium mt-1">{item.role}</p>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full whitespace-nowrap">{item.date}</span>
                      </div>
                      <ul className="space-y-2 mt-4 border-t border-slate-50 pt-4">
                        {item.details.map((detail: string, j: number) => (
                          <li key={j} className="text-slate-500 flex items-start gap-2 text-xs sm:text-sm leading-relaxed">
                            <span className="text-accent shrink-0 font-bold select-none">·</span>
                            <span className="flex-1">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="bg-slate-900 text-white p-6 sm:p-12 rounded-2xl sm:rounded-[3rem]">
                <h3 className="text-sm sm:text-base uppercase tracking-[0.2em] text-accent font-bold mb-8 border-b border-white/10 pb-2">
                  {t.resume.sections.skills}
                </h3>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">{t.resume.skills.lang}</p>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">{t.resume.skills.interests}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 sm:py-32 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="serif text-3xl sm:text-4xl md:text-5xl mb-12 sm:mb-16">{t.contact.title}</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <motion.a 
              whileHover={{ y: -5 }}
              href={`mailto:${contacts.gmail}`}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-2">
                <Mail size={24} className="text-accent" />
              </div>
              <span className="text-xs uppercase tracking-widest opacity-50">{t.contact.gmail}</span>
              <span className="text-base sm:text-lg font-light break-all px-2">{contacts.gmail}</span>
            </motion.a>

            <motion.a 
              whileHover={{ y: -5 }}
              href={`mailto:${contacts.qq}`}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-2">
                <MessageSquare size={24} className="text-accent" />
              </div>
              <span className="text-xs uppercase tracking-widest opacity-50">{t.contact.qq}</span>
              <span className="text-base sm:text-lg font-light break-all px-2">{contacts.qq}</span>
            </motion.a>

            <motion.a 
              whileHover={{ y: -5 }}
              href={contacts.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-2">
                <Linkedin size={24} className="text-accent" />
              </div>
              <span className="text-xs uppercase tracking-widest opacity-50">{t.contact.linkedin}</span>
              <span className="text-base sm:text-lg font-light break-all px-2">Jessie Liu</span>
            </motion.a>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-slate-900 text-white/30 text-center border-t border-white/5">
        <p className="text-sm tracking-widest uppercase">&copy; {new Date().getFullYear()} {name}. All Rights Reserved.</p>
      </footer>

      {/* Fullscreen Lightbox Modal */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 bg-slate-950/90 z-50 flex flex-col items-center justify-center p-4 backdrop-blur-md cursor-zoom-out"
          onClick={() => setLightboxImg(null)}
        >
          <div className="relative max-w-5xl max-h-[85vh] flex flex-col items-center">
            <button 
              className="absolute -top-12 right-0 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-200"
              onClick={() => setLightboxImg(null)}
            >
              <X size={20} />
            </button>
            <img 
              src={lightboxImg} 
              className="rounded-xl max-w-full max-h-[75vh] object-contain shadow-2xl border border-white/10" 
              alt="Enlarged view" 
              referrerPolicy="no-referrer" 
            />
            <p className="text-white/50 text-xs sm:text-sm mt-4 tracking-wider text-center font-light">
              {lang === "en" ? "Click anywhere to close" : "点击任意区域关闭"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
