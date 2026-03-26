/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Linkedin, ExternalLink, GraduationCap, BookOpen, Film, MessageSquare, Globe, Users, Newspaper, Video, ChevronRight, Trophy, Presentation, Play, FileText } from "lucide-react";

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
      description: "I am a curious explorer of the world with a deep passion for consumer psychology and emerging technology trends. I thrive on challenges and pride myself on being a fast learner who takes initiative. My ultimate goal is to deliver superior value to clients through creative problem-solving and strategic thinking. Known for being a risk-taker and a people person with strong time management skills, I am currently seeking internship opportunities where I can apply my skills, take initiative, and grow.",
      edu: "Education",
      major: "Major",
      minor: "Minor",
      gpa: "GPA",
      university: "New York University (Main Campus)",
      majorVal: "Economics",
      minorVal: "Business of Entertainment, Media and Technology"
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "Selected Creative Works & Experiences",
      sections: {
        orgs: "Student Organizations",
        competition: "Competitions",
        presentation: "Class Presentations",
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
          linkText: "View Event Slides"
        },
        council: {
          title: "NYU 67A SSAIL Hall Council",
          event: "Chinatown Adventure Event",
          date: "February, 2026",
          desc: "Developed and pitched a Lunar New Year theme event to introduce residents to Chinese festive traditions. I designed all digital and print marketing materials using Canva, curated a local tour route and served as the lead guide for a group of 6 students, managing all logistics and safety."
        },
        mktsoc: {
          title: "NYU MKTSOC 25 Fall Case Competition (Round 2)",
          date: "November, 2025",
          desc: "Developed a strategic marketing turnaround for Solara, a wellness app facing a 7.3% market slump. Designed the 'Celebrity Wake-Up' campaign, leveraging AI-integrated personas like Ryan Reynolds to solve the 'willpower gap'. Strategy included a tiered pricing model positioning Solara as a cost-effective alternative.",
          linkText: "View MKTSOC Slides"
        },
        acm: {
          title: "Class Presentation: Modern Arts and Culture",
          date: "December, 2025",
          desc: "Crafted a presentation diving into the intersection of literature, gender roles, and consumer psychology. Explored whether consumerism for women is strictly tied to hedonism or serves a more complex emotional purpose through a close reading of Kate Chopin's work.",
          linkText: "View Presentation Slides"
        },
        td: {
          title: "TD Test Daily",
          date: "Dec 2023 - July 2024",
          desc: "Responsible for content planning and production for a public account platform with 200,000+ followers, assisting in the execution of brand promotion plans. Proficient in using Excel and the public account backend for user data analysis, planning educational articles, and maintaining a stable reading volume of 5,000+ per article. Created over 25+ high-conversion, high-interaction viral articles, with interaction rates exceeding the platform average by 150%.",
          linkText1: "Article: 'Waking up to my college closing...' (69.9K Views)",
          linkText2: "Article: 'Middle-class study abroad experience' (16.2K Views)",
          link1: "https://mp.weixin.qq.com/s/wZQpXuCB14Ob5mU1B5tLkg",
          link2: "https://mp.weixin.qq.com/s/O35yiCyw9d9yn_X59ETZNA"
        },
        personal: {
          title: "Jessie's Little World",
          type: "(Personal Account)",
          desc: "Independently responsible for topic selection, editing, layout, and user growth, with 0-to-1 market project execution experience. Combined with company financial report data, used SWOT, 4P and other theoretical frameworks to analyze marketing cases of large companies, transforming complex business logic into easy-to-spread deep long articles. Published a total of 7 deep business analysis articles, reaching more than 7,000 readers.",
          linkText1: "Article: 'Luckin Coffee vs. Starbucks China' (489 Views)",
          linkText2: "Luckin Coffee vs. Starbucks China: Will 20,000+ Stores Lead to Victory?",
          linkText3: "Article: 'The Rise of Private Dental Clinics' (6919 Views)",
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
      pdfUrl: "https://docs.google.com/document/d/1rljipEfRFSy-KwMsMhhgSsnUykMpIv0Qj4FFDvvWFm8/edit?usp=drive_link",
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
          degree: "B.S. in Economics with a Minor in BEMT",
          date: "May 2028",
          details: ["Cumulative GPA: 4.0/4.0", "Honors: NYU Liberal Studies Dean's List 24-25 AY"]
        },
        {
          school: "Guangzhou Foreign Language School",
          location: "Guangzhou, China",
          degree: "High School Diploma: Graduate of Distinction",
          date: "June 2024",
          details: ["GPA: 97.23/100", "Activities: Media Center (President), Art & Literature Club (Founder)"]
        }
      ],
      exp: [
        {
          company: "ECS Technology (Guangzhou) Co., Ltd.",
          role: "Sales Intern",
          date: "Jun 2025 – Aug 2025",
          details: [
            "Completed comprehensive training on product specifications and foundational sales strategies",
            "Conducted client site visits and market research to gather feedback on assigned potential clients",
            "Acquired a new client and secured an initial sales contract valued at ¥200,000"
          ]
        },
        {
          company: "TD Test Daily",
          role: "Social Media Coordinator",
          date: "Dec 2023 – Jul 2024",
          details: [
            "Directed content strategy for the company's social media platform with 200K+ followers",
            "Leveraged data-driven insights to curate weekly articles, maintaining 5,000 views per post",
            "Produced 25+ high-performing content exceeding platform average engagement by 150%"
          ]
        },
        {
          company: "Jessie's Little World",
          role: "Founder & Writer",
          date: "Jul 2023 – Jun 2024",
          details: [
            "Founded a publishing account on WeChat dedicated to dissecting marketing strategies",
            "Analyzed companies' financial reports and ad campaigns using SWOT and 4Ps/7Ps frameworks",
            "Published 7 analytical articles, reaching a total of 7,000+ readers"
          ]
        }
      ],
      leadership: [
        {
          org: "NYU Class Activities Board",
          role: "First Year Chair",
          date: "Sept 2025 – Present",
          details: ["Developed programs and initiatives that support and engage NYU's first-year students"]
        },
        {
          org: "NYU SSAIL Hall Council",
          role: "Director of Business Administration",
          date: "Sept 2025 – Present",
          details: ["Oversee a $14K budget, including reviewing and approving all funding proposals"]
        },
        {
          org: "NYU Live",
          role: "Headline Editor",
          date: "Sept 2024 – Present",
          details: ["Report latest news from NYU and NYC through high-impact storytelling"]
        }
      ],
      skills: {
        lang: "Languages & Skills: Mandarin (Native), Canva, AIGC (Gemini), CapCut, Microsoft Office, Google Workspace, Notion",
        interests: "Interests: Running, Free-Style Skiing, Cooking, Traveling, Video Editing"
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
      description: "我对世界充满好奇，热衷于洞察消费者心理学和技术趋势。我不畏挑战，具备快速学习的能力并勇于采取行动。我的目标是通过创意性的问题解决和战略思考，为客户创造卓越价值。我是一个敢于冒险、善于社交且具备极强时间管理能力的人。目前，我正在寻找实习机会，希望能在实践中应用我的技能、发挥主动性并不断成长。",
      edu: "教育背景",
      major: "专业",
      minor: "辅修",
      gpa: "GPA",
      university: "纽约大学（主校区）",
      majorVal: "经济学",
      minorVal: "娱乐、媒体与技术商业管理"
    },
    portfolio: {
      title: "作品集",
      subtitle: "精选创意作品与实践经历",
      sections: {
        orgs: "学生社团",
        competition: "竞赛经历",
        presentation: "课上演讲",
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
          linkText: "查看活动幻灯片"
        },
        council: {
          title: "NYU 67A SSAIL Hall Council",
          event: "唐人街探险活动",
          date: "2026年2月",
          desc: "组织宿舍农历新年主题活动，向外国同学介绍中国节日传统。熟练使用Canva设计了海报和Google Form报名表，并担任6名学生的中国城导游。",
          linkText: "查看活动幻灯片"
        },
        mktsoc: {
          title: "NYU MKTSOC 25 秋季案例竞赛 (第二轮)",
          date: "2025年11月",
          desc: "为面临7.3%市场下滑的健康应用Solara开发了战略营销转型方案。设计了“名人叫醒”活动，利用Ryan Reynolds等AI集成角色解决用户的“意志力差距”。策略包括阶梯定价模型，将Solara定位为高性价比替代方案。",
          linkText: "查看竞赛幻灯片"
        },
        acm: {
          title: "课上演讲：现代艺术与文化",
          date: "2025年12月",
          desc: "制作了一场深入探讨文学、性别角色和消费者心理学交集的演讲。通过对凯特·肖邦作品的细读，探讨女性消费主义是仅与享乐主义挂钩，还是服务于更复杂的情感目的。",
          linkText: "查看演讲幻灯片"
        },
        td: {
          title: "TD 厚朴优学",
          date: "2023年12月 - 2024年7月",
          desc: "负责为拥有20万+粉丝的公众号平台做内容策划与产出，协助执行品牌推广计划。熟练运用Excel表格和公众号后台做用户数据分析，策划教育类推文，保持每篇5000+的稳定阅读量。一共打造超过25+篇高转化、高互动的爆款内容，使推文互动率超出平台平均水平150%。",
          linkText1: "《一觉醒来，我的大学倒闭了...》（6.99万浏览量）",
          linkText2: "《“中产留学是爸妈送给我的富二代体验券”》（1.62万浏览量）",
          link1: "https://mp.weixin.qq.com/s/wZQpXuCB14Ob5mU1B5tLkg",
          link2: "https://mp.weixin.qq.com/s/O35yiCyw9d9yn_X59ETZNA"
        },
        personal: {
          title: "杰西的小世界",
          type: "（个人公众号）",
          desc: "独立负责选题、采编、排版及用户增长，具备从0到1的市场项目执行经验。结合公司财报数据，运用SWOT、4P等理论框架分析大厂营销案例，将复杂商业逻辑转化为易于传播的深度长文。累计发布7篇深度商业分析文章，触达超过7000名读者。",
          linkText1: "《瑞幸拿什么跟星巴克玩》（489浏览量）",
          linkText2: "Luckin Coffee vs. Starbucks China: Will 20,000+ Stores Lead to Victory? (英文版)",
          linkText3: "《私人牙科诊所的崛起》（6919浏览量）",
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
      pdfUrl: "https://docs.google.com/document/d/1KfXJZWUqyeSQszy6zJConywoKHJYSIDmOw5EUB8dMfk/edit?tab=t.0#heading=h.gjdgxs",
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
          degree: "经济学专业本科，辅修娱乐、媒体与技术商业管理",
          date: "2024.9 - 2028.5",
          details: ["总绩点: 4.0/4.0", "荣誉：2024-2025 学年优秀生名单 (NYU Liberal Studies Dean's List)"]
        },
        {
          school: "广州外国语学校",
          location: "中国广州",
          degree: "高中文凭：优秀毕业生",
          date: "2021.9 - 2024.6",
          details: ["总绩点: 97.23/100", "课外活动: IPMC学生媒体中心（总策划），Aphrodite文艺社（创始人）"]
        }
      ],
      exp: [
        {
          company: "广州佳杰科技有限公司",
          role: "新华三业务群销售实习",
          date: "2025.6 - 2025.8",
          details: [
            "销售培训：接受产品和基础销售知识培训，熟悉销售政策、商务合同条款等",
            "市场调研：拜访潜在客户，深度调研并分析客户反馈和需求",
            "客户维护：协同整合公司内部技术与商务资源，成功拓展1名新客户"
          ]
        },
        {
          company: "TD 厚朴优学",
          role: "TD北美留学进化论公众号运营",
          date: "2023.12 - 2024.7",
          details: [
            "内容规划：负责为拥有20万+粉丝的公众号平台做内容策划与产出",
            "数据驱动：挖掘社交媒体趋势，熟练运用Excel表格和公众号后台做用户数据分析",
            "爆款打造：打造超过25+篇爆款内容，使推文互动率超出平台平均水平150%"
          ]
        },
        {
          company: "杰西的小世界（个人微信公众号）",
          role: "创立人 & 文章编辑",
          date: "2023.7 - 2024.6",
          details: [
            "平台创立：独立负责选题、采编、排版及用户增长，具备从0到1的项目经验",
            "商业分析：运用SWOT、4P等理论框架分析大厂营销案例，撰写深度长文",
            "内容输出：累计发布7篇深度商业分析文章，触达超过7000名读者"
          ]
        }
      ],
      leadership: [
        {
          org: "纽约大学年级活动委员会",
          role: "大一学生主席",
          date: "2025.9 - 至今",
          details: ["开发并落地多项校园活动，旨在全面提升纽约大学大一新生的参与度"]
        },
        {
          org: "纽约大学SSAIL宿舍委员会",
          role: "财政部部长",
          date: "2025.9 - 至今",
          details: ["统筹管理1.4万美元年度预算，负责审查和审批3栋宿舍楼的资金申请"]
        },
        {
          org: "NYU Live",
          role: "头条文章编辑",
          date: "2024.9 - 至今",
          details: ["追踪报道纽约大学及纽约市最新热点资讯，精准传递NYU学子声音"]
        }
      ],
      skills: {
        lang: "语言和技能：中文（母语），英文（流利），Canva，创客贴，秀米，剪映，AIGC内容制作，Microsoft工具，Google工具，Notion",
        interests: "兴趣：跑步，自由式滑雪，烹饪，旅行，视频剪辑"
      }
    }
  }
};

export default function App() {
  const [lang, setLang] = useState<Language>("en");
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
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-white">
        <div className="flex items-center gap-3 md:gap-4">
          <span className="font-medium tracking-tighter text-xl whitespace-nowrap">{name}</span>
          <span className="opacity-30">|</span>
          <span className="text-[10px] md:text-xs uppercase tracking-widest opacity-70 whitespace-nowrap">
            {lang === "en" ? "Economics Student at NYU" : "纽约大学经济学学生"}
          </span>
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
            <a href="#about" className="hover:opacity-50 transition-opacity">{t.nav.about}</a>
            <a href="#portfolio" className="hover:opacity-50 transition-opacity">{t.nav.portfolio}</a>
            <a href="#resume" className="hover:opacity-50 transition-opacity">{t.nav.resume}</a>
            <a href="#contact" className="hover:opacity-50 transition-opacity">{t.nav.contact}</a>
          </div>
          <button 
            onClick={toggleLang}
            className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            <Globe size={14} />
            {lang === "en" ? "中文简体" : "English"}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-light-blue opacity-20" />
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
          <motion.div
            key={lang}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="serif text-6xl md:text-8xl mb-4 leading-tight">
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
              <p className="text-xl text-accent font-medium tracking-wide mb-2">
                {t.hero.subtitle}
              </p>
              <p className="text-lg text-slate-500 font-light tracking-[0.2em] uppercase">
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
            <div className="relative w-72 h-96 md:w-96 md:h-[32rem]">
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
                <GraduationCap className="text-accent mb-4" size={32} />
                <h3 className="text-xs uppercase tracking-widest text-slate-400 mb-2">{t.bio.edu}</h3>
                <p className="font-medium text-sm md:text-base">{t.bio.university}</p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
                <BookOpen className="text-accent mb-4" size={32} />
                <h3 className="text-xs uppercase tracking-widest text-slate-400 mb-2">{t.bio.major}</h3>
                <p className="font-medium text-sm md:text-base">{t.bio.majorVal}</p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
                <Film className="text-accent mb-4" size={32} />
                <h3 className="text-xs uppercase tracking-widest text-slate-400 mb-2">{t.bio.minor}</h3>
                <p className="font-medium text-sm md:text-base">{t.bio.minorVal}</p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
                <Trophy className="text-accent mb-4" size={32} />
                <h3 className="text-xs uppercase tracking-widest text-slate-400 mb-2">{t.bio.gpa}</h3>
                <p className="font-medium text-sm md:text-base">4.0 / 4.0</p>
              </div>
            </div>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                {t.bio.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="serif text-6xl mb-4">{t.portfolio.title}</h2>
            <p className="text-slate-400 tracking-widest uppercase text-xs">{t.portfolio.subtitle}</p>
          </div>

          <div className="space-y-32">
            {/* 1. Student Orgs */}
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <Users className="text-accent" size={32} />
                <h3 className="serif text-4xl">{t.portfolio.sections.orgs}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {/* CAB */}
                <div className="bg-light-blue/10 p-10 rounded-3xl border border-light-blue/20">
                  <h4 className="font-bold text-xl mb-2">{t.portfolio.items.cab.title}</h4>
                  <p className="text-accent font-medium mb-4">{t.portfolio.items.cab.event} • {t.portfolio.items.cab.date}</p>
                  <p className="text-slate-600 mb-6 font-light leading-relaxed">{t.portfolio.items.cab.desc}</p>
                  <a href="https://www.canva.com/design/DAHEunjxrww/XP__xl-FatdwC5j0TZk-tQ/view" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-900 font-medium hover:text-accent transition-colors">
                    {t.portfolio.items.cab.linkText} <ExternalLink size={16} />
                  </a>
                </div>
                {/* Council */}
                <div className="bg-light-blue/10 p-10 rounded-3xl border border-light-blue/20">
                  <h4 className="font-bold text-xl mb-2">{t.portfolio.items.council.title}</h4>
                  <p className="text-accent font-medium mb-4">{t.portfolio.items.council.event} • {t.portfolio.items.council.date}</p>
                  <p className="text-slate-600 mb-6 font-light leading-relaxed">{t.portfolio.items.council.desc}</p>
                  <div className="grid grid-cols-3 gap-2">
                    <img src="https://i.postimg.cc/hGKkmBCM/Chinatown-Adventure.jpg" className="rounded-lg aspect-square object-cover" alt="Chinatown" referrerPolicy="no-referrer" />
                    <img src="https://i.postimg.cc/Znv2mKqD/Wechat-IMG3930.jpg" className="rounded-lg aspect-square object-cover" alt="Chinatown" referrerPolicy="no-referrer" />
                    <img src="https://i.postimg.cc/xqr71DJJ/Wechat-IMG3931.jpg" className="rounded-lg aspect-square object-cover" alt="Chinatown" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Competitions */}
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <Trophy className="text-accent" size={32} />
                <h3 className="serif text-4xl">{t.portfolio.sections.competition}</h3>
              </div>
              <div className="bg-slate-900 text-white p-12 rounded-[3rem] overflow-hidden relative">
                <div className="relative z-10 max-w-2xl">
                  <h4 className="font-bold text-2xl mb-2">{t.portfolio.items.mktsoc.title}</h4>
                  <p className="text-accent font-medium mb-6">{t.portfolio.items.mktsoc.date}</p>
                  <p className="text-slate-300 mb-8 font-light leading-relaxed text-lg">{t.portfolio.items.mktsoc.desc}</p>
                  <a href="https://docs.google.com/presentation/d/1s8n70wuzMyRBH18s7rpkHrJS4h3ScMcI-MvG0smcTvE/edit?usp=sharing" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-accent hover:text-white transition-all">
                    {t.portfolio.items.mktsoc.linkText} <ExternalLink size={18} />
                  </a>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 -skew-x-12 translate-x-12" />
              </div>
            </div>

            {/* 3. Class Presentations */}
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <Presentation className="text-accent" size={32} />
                <h3 className="serif text-4xl">{t.portfolio.sections.presentation}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h4 className="font-bold text-2xl">{t.portfolio.items.acm.title}</h4>
                  <p className="text-accent font-medium">{t.portfolio.items.acm.date}</p>
                  <p className="text-slate-600 font-light leading-relaxed text-lg">{t.portfolio.items.acm.desc}</p>
                  <a href="https://canva.link/ab674oln4c4xsqx" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-900 font-medium hover:text-accent transition-colors">
                    {t.portfolio.items.acm.linkText} <ExternalLink size={16} />
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img src="https://i.postimg.cc/httw4rhN/Wechat-IMG3941.jpg" className="rounded-2xl shadow-lg" alt="Presentation" referrerPolicy="no-referrer" />
                  <img src="https://i.postimg.cc/g2t7xZZJ/Wechat-IMG3943.jpg" className="rounded-2xl shadow-lg" alt="Presentation" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>

            {/* 4. TD Test Daily */}
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <img src={tdLogo} alt="TD Logo" className="w-10 h-10 object-contain rounded-lg" referrerPolicy="no-referrer" />
                <h3 className="serif text-4xl">{t.portfolio.sections.td}</h3>
              </div>
              <div className="bg-light-blue/5 p-12 rounded-[3rem] border border-light-blue/20 grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
                  <img src="https://i.postimg.cc/RCw2ghjL/Wechat-IMG3953.jpg" className="rounded-2xl shadow-md" alt="TD Work" referrerPolicy="no-referrer" />
                  <img src="https://i.postimg.cc/nhh5VkMX/Wechat-IMG3952.jpg" className="rounded-2xl shadow-md" alt="TD Work" referrerPolicy="no-referrer" />
                </div>
                <div className="order-1 md:order-2 space-y-6">
                  <div className="flex items-center gap-3">
                    <img src={tdLogo} alt="TD Logo" className="w-8 h-8 object-contain rounded-md" referrerPolicy="no-referrer" />
                    <h4 className="font-bold text-2xl">{t.portfolio.items.td.title}</h4>
                  </div>
                  <p className="text-accent font-medium">{t.portfolio.items.td.date}</p>
                  <p className="text-slate-600 font-light leading-relaxed text-lg">{t.portfolio.items.td.desc}</p>
                  <div className="flex flex-wrap gap-4">
                    <a href={t.portfolio.items.td.link1} target="_blank" rel="noreferrer" className="text-sm bg-white border border-slate-200 px-4 py-2 rounded-full hover:border-accent transition-colors">{t.portfolio.items.td.linkText1}</a>
                    <a href={t.portfolio.items.td.link2} target="_blank" rel="noreferrer" className="text-sm bg-white border border-slate-200 px-4 py-2 rounded-full hover:border-accent transition-colors">{t.portfolio.items.td.linkText2}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Personal Official Account */}
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <MessageSquare className="text-accent" size={32} />
                <h3 className="serif text-4xl">{t.portfolio.sections.personal}</h3>
              </div>
              <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-200 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h4 className="font-bold text-2xl">
                    {t.portfolio.items.personal.title}
                    <span className="block text-lg font-normal text-slate-400 mt-1">{t.portfolio.items.personal.type}</span>
                  </h4>
                  <p className="text-slate-600 font-light leading-relaxed text-lg">{t.portfolio.items.personal.desc}</p>
                  <div className="flex flex-wrap gap-4">
                    <a href={t.portfolio.items.personal.link1} target="_blank" rel="noreferrer" className="text-sm bg-white border border-slate-200 px-4 py-2 rounded-full hover:border-accent transition-colors">{t.portfolio.items.personal.linkText1}</a>
                    <a href={t.portfolio.items.personal.link2} target="_blank" rel="noreferrer" className="text-sm bg-white border border-slate-200 px-4 py-2 rounded-full hover:border-accent transition-colors">{t.portfolio.items.personal.linkText2}</a>
                    {t.portfolio.items.personal.link3 && (
                      <a href={t.portfolio.items.personal.link3} target="_blank" rel="noreferrer" className="text-sm bg-white border border-slate-200 px-4 py-2 rounded-full hover:border-accent transition-colors">{t.portfolio.items.personal.linkText3}</a>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-[3/4] bg-slate-200 rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://i.postimg.cc/Rh7gTPVY/9d37d304a62aeba96fb70aa2e6884954.jpg" className="w-full h-full object-cover" alt="Personal Account" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-[3/4] bg-slate-200 rounded-2xl overflow-hidden mt-8 shadow-lg">
                    <img src="https://i.postimg.cc/8PGKCVtq/640.webp" className="w-full h-full object-cover" alt="Personal Account" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Video Editing */}
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <Video className="text-accent" size={32} />
                <h3 className="serif text-4xl">{t.portfolio.sections.video}</h3>
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
                    className="aspect-[9/16] bg-slate-100 rounded-2xl flex flex-col items-center justify-center group hover:bg-light-blue transition-colors relative overflow-hidden"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play size={20} className="text-accent fill-accent" />
                    </div>
                    <span className="mt-4 text-xs font-medium text-slate-400 group-hover:text-slate-900 uppercase tracking-widest">Video {i+1}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div>
                <h2 className="serif text-6xl mb-4">{t.resume.title}</h2>
                <p className="text-slate-400 tracking-widest uppercase text-xs">Professional Background</p>
              </div>
              <a 
                href={t.resume.pdfUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-accent transition-all"
              >
                <FileText size={18} />
                {t.resume.download}
              </a>
            </div>

            <div className="space-y-16">
              {/* Education */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-8 border-b border-slate-200 pb-2">
                  {t.resume.sections.education}
                </h3>
                <div className="space-y-8">
                  {t.resume.edu.map((item: any, i: number) => (
                    <div key={i} className="group">
                      <div className="flex flex-col md:flex-row justify-between mb-2">
                        <h4 className="font-bold text-xl text-slate-900">{item.school}</h4>
                        <span className="text-slate-400 font-mono text-sm">{item.date}</span>
                      </div>
                      <div className="flex justify-between text-slate-500 mb-4 italic">
                        <span>{item.degree}</span>
                        <span>{item.location}</span>
                      </div>
                      <ul className="space-y-2">
                        {item.details.map((detail: string, j: number) => (
                          <li key={j} className="text-slate-600 flex gap-3 text-sm">
                            <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-8 border-b border-slate-200 pb-2">
                  {t.resume.sections.experience}
                </h3>
                <div className="space-y-12">
                  {t.resume.exp.map((item: any, i: number) => (
                    <div key={i}>
                      <div className="flex flex-col md:flex-row justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {(item.company === "TD Test Daily" || item.company === "TD 厚朴优学") && (
                            <img src={tdLogo} alt="TD Logo" className="w-6 h-6 object-contain rounded-sm" referrerPolicy="no-referrer" />
                          )}
                          <h4 className="font-bold text-xl text-slate-900">{item.company}</h4>
                        </div>
                        <span className="text-slate-400 font-mono text-sm">{item.date}</span>
                      </div>
                      <p className="text-accent font-medium mb-4">{item.role}</p>
                      <ul className="space-y-3">
                        {item.details.map((detail: string, j: number) => (
                          <li key={j} className="text-slate-600 flex gap-3 text-sm leading-relaxed">
                            <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leadership */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-8 border-b border-slate-200 pb-2">
                  {t.resume.sections.leadership}
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {t.resume.leadership.map((item: any, i: number) => (
                    <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="font-bold text-lg leading-tight">{item.org}</h4>
                        <span className="text-[10px] font-mono text-slate-400 whitespace-nowrap ml-2">{item.date}</span>
                      </div>
                      <p className="text-accent text-sm font-medium mb-4">{item.role}</p>
                      <ul className="space-y-2">
                        {item.details.map((detail: string, j: number) => (
                          <li key={j} className="text-slate-500 text-xs leading-relaxed flex gap-2">
                            <span className="text-accent mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="bg-slate-900 text-white p-12 rounded-[3rem]">
                <h3 className="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-8 border-b border-white/10 pb-2">
                  {t.resume.sections.skills}
                </h3>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">{t.resume.skills.lang}</p>
                  <p className="text-slate-300 leading-relaxed">{t.resume.skills.interests}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="serif text-5xl mb-16">{t.contact.title}</h2>
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
              <span className="text-lg font-light">{contacts.gmail}</span>
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
              <span className="text-lg font-light">{contacts.qq}</span>
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
              <span className="text-lg font-light">Jessie Liu</span>
            </motion.a>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-slate-900 text-white/30 text-center border-t border-white/5">
        <p className="text-sm tracking-widest uppercase">&copy; {new Date().getFullYear()} {name}. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
