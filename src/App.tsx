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
      skills: ["AIGC (Gemini, Claude)", "Canva", "Figma", "Microsoft Office", "Notion"],
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
        loreal: {
          title: "2026 Roland Berger × L’Oréal China Case Competition",
          date: "July, 2026",
          desc: "Designed the CeraVe 'Shield' AI Eco-Strategy, a revolutionary digital model integrating real-time map weather LBS API with L'Oréal's Skin Genius technology. Created a proactive, personalized daily skin defense system with location-aware stress profiling, interactive skincare guidance, and a business roadmap centered around Gen Z consumer retention.",
          linkText: "View Case Competition Slides (PDF)"
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
          desc: "Responsible for content planning and production for a public account platform with 200,000+ followers, assisting in the execution of brand promotion plans. Proficient in using Excel and the public account backend for user data analysis, planning educational articles, and maintaining a stable reading volume of 10,000+ per article. Created over 25+ high-conversion, high-interaction viral articles, with interaction rates exceeding the platform average by 100%.",
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
      pdfUrl: "/Jessie_Resume_2026_EN_v2.pdf",
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
          degree: "Bachelor of Arts in Economics",
          minor: "Minors: Business Studies; Business of Entertainment, Media, and Technology",
          date: "May 2028",
          details: [
            "Cumulative GPA: 4.0/4.0",
            "Relevant Coursework: Management and Organizations, Digital Business Strategy, Introduction to Marketing",
            "Honors: NYU Liberal Studies Dean's List, 2024–25 & 2025–26"
          ]
        }
      ],
      exp: [
        {
          company: "Deloitte",
          role: "Tax and Business Advisory Intern",
          date: "May 2026 – Jun 2026",
          details: [
            "Built 5 FY25 related-party transaction models and intangible asset reports for multinational clients, transforming raw transaction data into management-ready analysis",
            "Cross-verified financial and operational data on peer companies against public filings and industry databases, supporting a 100+ page multi-sector commercial analysis across New Energy, Automotive, and Consumer Services"
          ]
        },
        {
          company: "VSTECS (HK00856)",
          role: "Sales Intern",
          date: "Jun 2025 – Aug 2025",
          details: [
            "Conducted 8 field visits to distributors and system integrators across South China, gathering competitive intelligence on Huawei and Inspur to refine H3C and HPE server positioning",
            "Evaluated credit risk across 20+ prospective sub-distributors and 10+ contracts, supporting partner screening and mitigating bad-debt exposure across the distribution network",
            "Advanced 5 target clients through the sales pipeline by translating market and customer insights into tailored sales strategies, securing 1 new channel partner and a ¥200,000 server procurement contract"
          ]
        },
        {
          company: "Test Daily",
          role: "Social Media Coordinator",
          date: "Dec 2023 – Jul 2024",
          details: [
            "Analyzed engagement data across 200K+ followers to identify Gen Z education trends and audience preferences; produced 25+ articles averaging 10K+ views and outperforming platform benchmarks by 100%",
            "Identified emerging online trends and transformed complex education and business topics into timely, story-driven content, with one top-performing article reaching 70K+ views",
            "Leveraged content to engage prospective international students and parents throughout the customer journey, helping drive a 15% increase in study-abroad consulting inquiries and strengthen conversion to the firm’s education services"
          ]
        }
      ],
      leadership: [
        {
          org: "NYU Class Activities Board",
          role: "Executive Vice President (promoted from First Year Chair)",
          date: "Sep 2025 – Present",
          details: [
            "Spearhead 4 campus-wide events per semester serving 800+ NYU students, translating student feedback into programming strategy and leading weekly planning and post-event debriefs",
            "Supervise the First Year Committee, overseeing project approvals, resource allocation, vendor coordination, and milestone tracking to deliver events within budget and timeline constraints"
          ]
        },
        {
          org: "NYU 67A Hall Council",
          role: "Director of Business Administration",
          date: "Sep 2025 – May 2026",
          details: [
            "Managed a $17,500 annual programming budget for a 200-resident community, overseeing funding allocations, expense tracking, and event spending",
            "Partnered with Resident Assistants to design multi-channel promotional campaigns for community events, increasing turnout by 40%"
          ]
        },
        {
          org: "NYU Live",
          role: "Headline Editor",
          date: "Sep 2024 – May 2026",
          details: [
            "Managed the lifestyle column \"NYU Intelligence Special\", analyzing Gen Z audience personas to curate targeted niche content (NYC food spots, course registration, career insights); published 12 in-depth WeChat articles, expanding reach across the NYU student community",
            "Built and managed a 187-member WeChat community for incoming NYU Class of 2030 students, organizing a 30+ person offline meetup to establish an information-sharing platform"
          ]
        }
      ],
      skills: {
        lang: "Languages: English (Fluent, TOEFL 111/120), Mandarin (Native)",
        tech: "Technical Skills: Microsoft Office (Excel - PivotTables, XLOOKUP, PowerPoint, Word), Google Sheets, AIGC (Gemini & Claude), Canva, Figma, Notion",
        ai: "",
        interests: "Interests: Running, Freestyle Skiing, Cooking, Hiking, Matcha, Exploring NYC Restaurants"
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
      skills: ["AIGC (Gemini, Claude)", "Canva", "Figma", "Microsoft Office", "Notion"],
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
        loreal: {
          title: "罗兰贝格x欧莱雅中国精英挑战赛",
          date: "2026年7月",
          desc: "策划并设计了全新“适乐护”微信小程序 AI 生态战略，全球首创将高德地图实时气象与欧莱雅 Skin Genius 测肤技术深度融合。构建了集“气象环境指数-实时皮肤压力-主动防护提醒”于一体的场景化主动防御系统，针对 Z 世代消费群体提供个性化护肤方案。",
          linkText: "查看挑战赛方案 (PDF)"
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
          desc: "负责为拥有20万+粉丝的公众号平台做内容策划与产出，协助执行品牌推广计划。熟练运用Excel表格和公众号后台做用户数据分析，策划教育类推文，保持每篇10000+阅读量。一共打造超过25+篇高转化、高互动的爆款内容，使推文互动率超出平台平均水平100%。",
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
      pdfUrl: "/Jessie_Resume_2026_CN_v2.pdf",
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
          degree: "经济学专业本科，辅修商业研究和娱乐、媒体与技术商业管理",
          date: "2024.9 - 2028.5",
          details: [
            "总绩点: 4.0/4.0 （学校不提供排名）",
            "相关课程：管理与组织架构，数字商务战略，主题：经济学研究",
            "荣誉：2025-2026学年和2024-2025 学年优秀生名单 (NYU Liberal Studies Dean’s List 25-26AY and 24-25 AY)"
          ]
        }
      ],
      exp: [
        {
          company: "德勤管理咨询（上海）有限公司北京分公司",
          role: "税务与商务咨询实习生",
          date: "2026.5 - 2026.6",
          details: [
            "数据结构化与决策支持：熟练运用 Excel对跨国巨头海量内部交易数据进行清洗与分类汇总；构建 5 份 FY25 关联方交易及无形资产清单的工作底稿与财务报告，将原始数据高效转化为结构清晰、直供客户管理层审阅的标准化交付物。",
            "跨境项目与商务拓展支持：支持团队针对跨国客户的商业拓展与项目投标工作，负责德勤投标 PPT的语言翻译与排版视觉校对，并独立完成 3 篇深度行业分析报告及 6 份合同的中英双语翻译。",
            "行业调研与基准分析：负责新能源、汽车、高端制造及泛消费（如语言教育）等行业头部客户共计 100+ 页商业分析报告的质量复核；通过深度检索跨国上市企业财报及行业数据库，对德勤报告中引用的同行业竞品财务与运营指标进行独立交叉检验与勾稽关系审查，确保底层数据的精准度，有力支撑了报告逻辑的严密性。"
          ]
        },
        {
          company: "广州佳杰科技有限公司",
          role: "新华三业务群销售实习",
          date: "2025.6 - 2025.8",
          details: [
            "市场调研与渠道策略：聚焦华南企业级 IT 市场，负责新华三服务器（H3C UniServer & HPE ProLiant）渠道链路调研；通过对 8 家核心代理商及系统集成商实地走访，并对华为、浪潮等头部竞品进行多维基准对比与缺口分析，协助团队优化渠道准入策略，成功转化 5 家目标合作伙伴。",
            "渠道风险管控：深度参与分销生态体系下的风险合规与准入审查；对 20+ 家潜在合作伙伴的资产负债表及经营状况进行深度的财务分析，并合规审核 10+ 份商务合同，有效评估代理商授信风险，规避潜在的履约与坏账违约损失。",
            "客户拓展：精准对齐 B 端客户深层需求，高效整合内部技术与产品资源，成功拓展 1 家全新渠道伙伴，推动签署总金额达 ¥200,000 的服务器采购协议。"
          ]
        },
        {
          company: "Test Daily厚朴优学",
          role: "TD北美留学进化论公众号运营",
          date: "2023.12 - 2024.7",
          details: [
            "内容策划与用户洞察：依托后台数据剖析 20万+ 粉丝的深度画像与用户分层，精准捕捉年轻一代跨境消费与留学教育需求，累计产出 25+ 篇高深度推文，实现平均单篇 10,000+ 阅读量，内容转化率超越平台均值 100%。",
            "逻辑拆解与商业叙事：发表全网首个关于美国高校财政危机研究推文，通过深度剖析罗格斯、宾州州立等院校的官方财务报告，融合 Z 世代网络语境与幽默叙事风格，将复杂的商业逻辑转化为兼顾学生与家长阅读偏好的深度解读，实现单专题累计阅读量超 70,000 次。",
            "用户全旅程转化赋能：依托高质量内容在留学决策全旅程中深度触达并沉淀意向留学生及家长群体，有效推动留学咨询量提升 15%。"
          ]
        }
      ],
      leadership: [
        {
          org: "纽约大学年级活动委员会",
          role: "执行副主席",
          date: "2025.9 - 至今",
          details: [
            "项目管理：主持每周社团例会，构建“学生需求收集—反馈分析—活动策划—经验复盘”的结构化项目闭环；单学期内成功推动 4 场校级大型项目从 0 到 1 落地，累计吸引 800+ 纽约大学学生参与。",
            "梯队建设与外部供应链统筹：指导大一委员会工作，负责项目审批、资源分配及关键节点管控，赋能梯队建设；高效对接并谈判校外多方供应商，跨职能统筹核心物资与场地资源，在有限预算内实现项目高质量交付。"
          ]
        },
        {
          org: "纽约大学67A SSAIL宿舍委员会",
          role: "财政部部长",
          date: "2025.9 - 2026.5",
          details: [
            "预算与财务管理：规范管理 200 人社区 17,500 美元年度项目预算，统筹资金分配、支出追踪及活动成本控制",
            "宣发推广与活动赋能：与宿舍助理 (RA) 协同开展多渠道宣传推广，推动社区活动整体参与率提升 40%"
          ]
        },
        {
          org: "NYU Live",
          role: "头条文章编辑",
          date: "2024.9 - 2026.5",
          details: [
            "专栏打造与内容输出：负责生活方式专栏“情报特刊”，深度洞察 Z 世代受众画像并定制专属内容，定向产出探店、选课、求职等垂类内容，累计发布 12 篇深度公众号推文，持续扩大 NYU 学生社群影响力",
            "社群运营与活动组织：创建并精细化运营 187 人 NYU 2030 届新生微信社群，策划 30+ 人线下见面会，搭建新生信息交流与互助平台"
          ]
        }
      ],
      skills: {
        lang: "语言：中文（母语），英文（流利，托福111/120）",
        tech: "技能：Microsoft工具 (Word, Excel, PowerPoint)，AIGC内容制作 (Gemini & Claude)，Google Sheet，Canva，Figma，Notion",
        ai: "",
        interests: "爱好：跑步，自由式滑雪，烹饪，徒步，做抹茶，探店"
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
  const photoUrl = "https://i.postimg.cc/CKBc65PS/Weixin-Image-20260901220215-512-2.jpg";
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* L'Oréal Case Competition */}
                <div className="bg-slate-900 text-white p-6 sm:p-10 rounded-2xl sm:rounded-[2.5rem] overflow-hidden relative flex flex-col justify-between border border-slate-800">
                  <div className="relative z-10">
                    <span className="bg-accent/20 text-accent text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full mb-4 inline-block">
                      {lang === "en" ? "L'Oréal × Roland Berger" : "罗兰贝格 × 欧莱雅"}
                    </span>
                    <h4 className="font-bold text-xl sm:text-2xl mb-2 leading-snug">{t.portfolio.items.loreal.title}</h4>
                    <p className="text-accent font-medium mb-4 text-sm font-mono">{t.portfolio.items.loreal.date}</p>
                    <p className="text-slate-300 mb-8 font-light leading-relaxed text-sm sm:text-base">{t.portfolio.items.loreal.desc}</p>
                  </div>
                  <div className="relative z-10 mt-auto">
                    <a href="/roland_berger_loreal_2026.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full font-medium hover:bg-accent hover:text-white transition-all text-xs sm:text-sm shadow-sm">
                      {t.portfolio.items.loreal.linkText} <ExternalLink size={16} />
                    </a>
                  </div>
                  <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-12 pointer-events-none" />
                </div>

                {/* MKTSOC Case Competition */}
                <div className="bg-slate-900 text-white p-6 sm:p-10 rounded-2xl sm:rounded-[2.5rem] overflow-hidden relative flex flex-col justify-between border border-slate-800">
                  <div className="relative z-10">
                    <span className="bg-accent/20 text-accent text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full mb-4 inline-block">
                      {lang === "en" ? "NYU Marketing Society" : "纽约大学营销协会"}
                    </span>
                    <h4 className="font-bold text-xl sm:text-2xl mb-2 leading-snug">{t.portfolio.items.mktsoc.title}</h4>
                    <p className="text-accent font-medium mb-4 text-sm font-mono">{t.portfolio.items.mktsoc.date}</p>
                    <p className="text-slate-300 mb-8 font-light leading-relaxed text-sm sm:text-base">{t.portfolio.items.mktsoc.desc}</p>
                  </div>
                  <div className="relative z-10 mt-auto">
                    <a href="/competition_experience.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full font-medium hover:bg-accent hover:text-white transition-all text-xs sm:text-sm shadow-sm">
                      {t.portfolio.items.mktsoc.linkText} <ExternalLink size={16} />
                    </a>
                  </div>
                  <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-12 pointer-events-none" />
                </div>
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
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-6">
              <div>
                <h2 className="serif text-4xl sm:text-5xl md:text-6xl mb-4">{t.resume.title}</h2>
                <p className="text-slate-400 tracking-widest uppercase text-xs">
                  {lang === "en" ? "Professional Background" : "职业背景与成长轨迹"}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 no-print">
                <a 
                  href={t.resume.pdfUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3.5 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-accent hover:text-white transition-all duration-200 shadow-sm"
                >
                  <FileText size={18} />
                  {t.resume.download}
                </a>
              </div>
            </div>

            <div className="space-y-16">
              {/* Education */}
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wider text-accent font-bold mb-8 border-b-2 border-slate-200 pb-3">
                  {t.resume.sections.education}
                </h3>
                <div className="space-y-8">
                  {t.resume.edu.map((item: any, i: number) => (
                    <div key={i} className="group">
                      <div className="flex flex-col sm:flex-row justify-between items-baseline mb-2 gap-2">
                        <h4 className="font-bold text-sm sm:text-base text-slate-900">{item.school}</h4>
                        <div className="flex items-center gap-2 text-slate-500 font-medium text-xs sm:text-sm whitespace-nowrap">
                          {item.location && <span>{item.location}</span>}
                          {item.location && <span className="text-slate-300 select-none">|</span>}
                          <span>{item.date}</span>
                        </div>
                      </div>
                      <div className="flex flex-col text-slate-500 mb-3 text-xs sm:text-sm">
                        <span className="text-slate-600">{item.degree}</span>
                        {item.minor && (
                          <span className="mt-0.5 text-slate-600">
                            {item.minor}
                          </span>
                        )}
                      </div>
                      <ul className="space-y-2 pl-4 sm:pl-5">
                        {item.details.map((detail: string, j: number) => (
                          <li key={j} className="text-slate-600 flex items-start gap-2 text-xs sm:text-sm leading-relaxed">
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
                <h3 className="text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wider text-accent font-bold mb-8 border-b-2 border-slate-200 pb-3">
                  {t.resume.sections.experience}
                </h3>
                <div className="space-y-12">
                  {t.resume.exp.map((item: any, i: number) => (
                    <div key={i}>
                      <div className="flex flex-col sm:flex-row justify-between items-baseline mb-2 gap-2">
                        <h4 className="font-bold text-sm sm:text-base text-slate-900">{item.company}</h4>
                        <div className="flex items-center gap-2 text-slate-500 font-medium text-xs sm:text-sm whitespace-nowrap">
                          {item.location && <span>{item.location}</span>}
                          {item.location && <span className="text-slate-300 select-none">|</span>}
                          <span>{item.date}</span>
                        </div>
                      </div>
                      <p className="text-accent font-medium mb-3 text-xs sm:text-sm">{item.role}</p>
                      <ul className="space-y-2.5 pl-4 sm:pl-5">
                        {item.details.map((detail: string, j: number) => (
                          <li key={j} className="text-slate-600 flex items-start gap-2 text-xs sm:text-sm leading-relaxed">
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
                <h3 className="text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wider text-accent font-bold mb-8 border-b-2 border-slate-200 pb-3">
                  {t.resume.sections.leadership}
                </h3>
                <div className="space-y-6">
                  {t.resume.leadership.map((item: any, i: number) => (
                    <div key={i} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm">
                      <div className="flex flex-col sm:flex-row justify-between items-baseline mb-2 gap-2">
                        <h4 className="font-bold text-sm sm:text-base text-slate-900">{item.org}</h4>
                        <div className="flex items-center gap-2 text-slate-500 font-medium text-xs sm:text-sm whitespace-nowrap">
                          {item.location && <span>{item.location}</span>}
                          {item.location && <span className="text-slate-300 select-none">|</span>}
                          <span>{item.date}</span>
                        </div>
                      </div>
                      <p className="text-accent font-medium mb-3 text-xs sm:text-sm">{item.role}</p>
                      <ul className="space-y-2.5">
                        {item.details.map((detail: string, j: number) => (
                          <li key={j} className="text-slate-600 flex items-start gap-2 text-xs sm:text-sm leading-relaxed">
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
                <h3 className="text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wider text-accent font-bold mb-8 border-b-2 border-white/10 pb-3">
                  {t.resume.sections.skills}
                </h3>
                <div className="space-y-4 sm:space-y-5">
                  {t.resume.skills.lang && <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">{t.resume.skills.lang}</p>}
                  {t.resume.skills.tech && <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">{t.resume.skills.tech}</p>}
                  {t.resume.skills.ai && <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">{t.resume.skills.ai}</p>}
                  {t.resume.skills.interests && <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">{t.resume.skills.interests}</p>}
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
