const FINANCE_CAREERS = [
  {
    name:"Investment Banker", icon:"IB", difficulty:9, salary:"₹12 LPA – ₹1 Cr+", description:"Advises companies on raising capital, IPOs, mergers, acquisitions, and major financial transactions.",
    definition:"Investment Bankers help companies raise capital, go public, acquire businesses, and complete major financial transactions.",
    india:["₹12–25 LPA","₹30–60 LPA","₹1 Cr+"], usa:["$120k–200k","$250k–500k","$1M+"],
    tasks:["Build financial models","Analyze companies","Prepare presentations and pitch books","Support mergers and acquisitions","Work with clients","Conduct valuation analysis"],
    skills:["Financial Modeling","Excel","Accounting","Valuation","Communication","PowerPoint","Market Research","Business Analysis"],
    roadmap:["High School","Bachelor's Degree","Finance Internship","Investment Banking Analyst","Associate","Vice President","Managing Director"],
    subjects:["Mathematics","Economics","Business Studies","Accounting"], majors:["Finance","Economics","Mathematics","Business Analytics","Engineering (optional)"], certifications:["Financial Modeling & Valuation Analyst (FMVA)","Wall Street Prep","CFA (Optional)"], internships:["Investment bank","Corporate finance","Equity research"],
    fit:["Can handle extreme pressure","Competitive","Strong attention to detail","Comfortable with long work hours","Like business","Enjoy presentations"],
    universities:{worldwide:["Wharton","NYU Stern","Columbia","London School of Economics","University of Chicago"],india:["SRCC","St. Xavier's","NMIMS","IIM Indore IPM"]}
  },
  {
    name:"Chartered Accountant (CA)", icon:"CA", difficulty:10, salary:"₹7 LPA – ₹60 LPA+", description:"Audits financial records, advises on tax, and helps organizations maintain accurate accounts.",
    definition:"Chartered Accountants are expert accounting professionals who manage auditing, taxation, reporting, compliance, and financial strategy.",
    india:["₹7–12 LPA","₹15–30 LPA","₹40–60 LPA+"], usa:["$65k–90k","$100k–160k","$200k+"],
    tasks:["Audit financial statements","Prepare tax filings","Review internal controls","Advise business leaders","Ensure regulatory compliance","Analyze financial records"],
    skills:["Accounting","Auditing","Taxation","Attention to Detail","Ethics","Financial Reporting","Problem Solving"],
    roadmap:["High School (Any Stream)","CA Foundation","CA Intermediate","Articleship","CA Final","Chartered Accountant"],
    subjects:["Any high school stream","Accounting helpful","Mathematics helpful","Economics helpful"], majors:["B.Com","Accounting","Commerce"], certifications:["ICAI CA Qualification","DISA (optional)","IFRS Certification"], internships:["CA articleship","Audit firm","Tax advisory"],
    fit:["Love accuracy","Enjoy accounting","Are highly disciplined","Like solving detailed problems","Value professional ethics"],
    universities:{worldwide:["University of Illinois Urbana-Champaign","University of Texas at Austin","University of Manchester","University of Melbourne"],india:["SRCC","Loyola College","Christ University","St. Xavier's"]}
  },
  {
    name:"Equity Research Analyst", icon:"ER", difficulty:8, salary:"₹8 LPA – ₹50 LPA+", description:"Studies companies and industries to estimate value and explain investment opportunities and risks.",
    definition:"Equity Research Analysts investigate public companies, build forecasts, estimate valuations, and publish research for investors.",
    india:["₹8–15 LPA","₹18–35 LPA","₹40–50 LPA+"], usa:["$85k–130k","$150k–250k","$350k+"],
    tasks:["Analyze financial statements","Build earnings forecasts","Speak with company management","Study industries and competitors","Write research reports","Create valuation models"],
    skills:["Financial Statement Analysis","Forecasting","Report Writing","Financial Analysis","Valuation","Accounting","Excel","Market Research"],
    roadmap:["High School","Finance or Economics Degree","Research Internship","Research Associate","Equity Research Analyst","Senior Analyst","Research Director"],
    subjects:["Mathematics","Economics","Accounting","English"], majors:["Finance","Economics","Accounting","Mathematics"], certifications:["CFA","Financial Modeling courses"], internships:["Brokerage research","Asset management","Investment research"],
    fit:["Like investing","Enjoy deep research","Write clearly","Question assumptions","Enjoy company analysis"],
    universities:{worldwide:["London School of Economics","University of Chicago","University of California, Berkeley","Columbia","NYU Stern"],india:["SRCC","Ashoka University","Christ University","NMIMS"]}
  },
  {
    name:"Portfolio Manager", icon:"PM", difficulty:9, salary:"₹15 LPA – ₹1 Cr+", description:"Builds and manages investment portfolios to meet defined risk and return objectives.",
    definition:"Portfolio Managers decide how investment funds are allocated across assets while managing risk, performance, and client goals.",
    india:["₹15–30 LPA","₹35–70 LPA","₹1 Cr+"], usa:["$110k–180k","$200k–500k","$1M+"],
    tasks:["Select investments","Monitor portfolio risk","Study markets and economies","Meet clients","Review performance","Adjust asset allocation"],
    skills:["Investing","Risk Management","Asset Allocation","Economics","Decision Making","Communication","Data Analysis"],
    roadmap:["High School","Finance Degree","Investment Internship","Research Analyst","Associate Portfolio Manager","Portfolio Manager","Chief Investment Officer"],
    subjects:["Mathematics","Economics","Business Studies","Computer Science"], majors:["Finance","Economics","Mathematics","Statistics","Data Science","Computer Science"], certifications:["CFA","FRM","CAIA"], internships:["Asset management","Wealth management","Investment research"],
    fit:["Patient thinker","Emotionally disciplined","Comfortable with uncertainty","Like investing","Think long term","Enjoy working with data"],
    universities:{worldwide:["University of Chicago","MIT","Princeton","Columbia"],india:["Indian Statistical Institute","IIT Bombay","SRCC","IIM Indore IPM"]}
  },
  {
    name:"Venture Capitalist", icon:"VC", difficulty:8, salary:"₹12 LPA – ₹1 Cr+", description:"Invests in high-growth startups and supports founders as they build and scale companies.",
    definition:"Venture Capitalists identify promising startups, invest capital for equity, and help founders grow toward a successful exit.",
    india:["₹12–25 LPA","₹30–60 LPA","₹1 Cr+"], usa:["$100k–180k","$200k–450k","$1M+"],
    tasks:["Meet startup founders","Evaluate markets and products","Conduct due diligence","Analyze startup economics","Support portfolio companies","Source new investments"],
    skills:["Startup Evaluation","Startup Analysis","Networking","Valuation","Communication","Strategy","Entrepreneurship"],
    roadmap:["High School","Bachelor's Degree","Startup or Finance Internship","Analyst","Associate","Principal","Partner"],
    subjects:["Economics","Business Studies","Mathematics","Computer Science"], majors:["Finance","Economics","Business","Computer Science","Entrepreneurship"], certifications:["CFA optional","Startup and valuation courses"], internships:["Startup","VC fund","Investment banking"],
    fit:["Loves innovation","Love startups","Enjoy meeting people","Spot trends early","Accept uncertainty","Think strategically"],
    universities:{worldwide:["Stanford","University of California, Berkeley","MIT","Harvard"],india:["Ashoka University","BITS Pilani","IIT Bombay","IIM Indore IPM"]}
  },
  {
    name:"Private Equity Associate", icon:"PE", difficulty:10, salary:"₹20 LPA – ₹1.5 Cr+", description:"Evaluates, buys, and improves established companies before selling them for a return.",
    definition:"Private Equity Associates analyze business acquisitions, build investment models, conduct due diligence, and help improve portfolio companies.",
    india:["₹20–40 LPA","₹50–90 LPA","₹1.5 Cr+"], usa:["$150k–250k","$300k–600k","$1M+"],
    tasks:["Build LBO models","Evaluate acquisition targets","Conduct due diligence","Present investment recommendations","Monitor portfolio companies","Plan exit strategies"],
    skills:["Leveraged Buyouts (LBO)","Due Diligence","LBO Modeling","Valuation","Accounting","Strategy","Negotiation","Excel"],
    roadmap:["High School","Finance Degree","Investment Banking Internship","Investment Banking Analyst","PE Associate","Vice President","Partner"],
    subjects:["Mathematics","Economics","Accounting","Business Studies"], majors:["Finance","Economics","Accounting","Business"], certifications:["CFA optional","Advanced financial modeling"], internships:["Investment banking","Transaction advisory","Private equity"],
    fit:["Enjoy intense analysis","Like business strategy","Handle pressure well","Enjoy negotiations","Think like an owner"],
    note:"Most private equity professionals first work in investment banking before moving into PE.",
    universities:{worldwide:["Wharton","Harvard","Stanford","Columbia"],india:["SRCC","IIM Ahmedabad","IIM Bangalore","IIM Calcutta"]}
  },
  {
    name:"Corporate Financial Analyst", icon:"FA", difficulty:6, salary:"₹5 LPA – ₹35 LPA+", description:"Uses financial data, budgets, and forecasts to help organizations make stronger decisions.",
    definition:"Corporate Financial Analysts study business performance, prepare forecasts, and provide insights that guide company financial decisions.",
    india:["₹5–10 LPA","₹12–22 LPA","₹25–35 LPA+"], usa:["$65k–90k","$95k–140k","$170k+"],
    tasks:["Create budgets and forecasts","Analyze business performance","Build reports and dashboards","Explain financial trends","Support investment decisions","Track costs and revenue"],
    skills:["Financial Planning & Analysis (FP&A)","Excel","Financial Analysis","Budgeting","Forecasting","Communication","Data Visualization","Accounting"],
    roadmap:["High School","Finance Degree","Finance Internship","Junior Corporate Financial Analyst","Corporate Financial Analyst","Finance Manager","Finance Director"],
    subjects:["Mathematics","Economics","Accounting","Computer Science"], majors:["Finance","Accounting","Economics","Business","Data Analytics"], certifications:["FPAC Certification","CFA (optional)"], internships:["Corporate finance","FP&A","Accounting"],
    fit:["Enjoy numbers","Like solving business problems","Communicate clearly","Enjoy organized work","Like finding patterns"],
    universities:{worldwide:["Indiana University Kelley","University of Michigan Ross","University of Texas at Austin","Penn State"],india:["Christ University","NMIMS","SRCC","St. Xavier's"]}
  },
  {
    name:"Chief Financial Officer (CFO)", icon:"CF", difficulty:9, salary:"₹50 LPA – ₹5 Cr+", description:"Leads a company's financial strategy, planning, capital decisions, reporting, and risk management.",
    definition:"A Chief Financial Officer is the senior executive responsible for a company's financial strategy, performance, reporting, and major capital decisions.",
    india:["₹50 LPA–₹1 Cr","₹1–3 Cr","₹3–5 Cr+"], usa:["$180k–300k","$350k–700k","$1M+"],
    tasks:["Set financial strategy","Advise the CEO and board","Oversee budgets and reporting","Manage cash and risk","Raise capital","Lead finance teams"],
    skills:["Leadership","Capital Allocation","Strategic Decision Making","Corporate Finance","Strategy","Communication","Risk Management"],
    roadmap:["High School","Finance or Accounting Degree","Financial Analyst","Finance Manager","Finance Director","Vice President Finance","CFO"],
    subjects:["Mathematics","Economics","Accounting","Business Studies"], majors:["Finance","Accounting","Economics","Business"], certifications:["CA","CFA","MBA"], internships:["Corporate finance","Accounting","Investment banking"],
    fit:["Want to lead organizations","Think long term","Comfortable making high-stakes decisions","Strong business judgment","Communicate with executives"],
    universities:{worldwide:["Wharton","Chicago Booth","Kellogg","Harvard"],india:["IIM Ahmedabad","IIM Bangalore","IIM Calcutta","ISB"]}
  },
  {
    name:"Management Consultant", icon:"MC", difficulty:8, salary:"₹12 LPA – ₹1 Cr+", description:"Helps organizations solve complex business problems and improve strategy, operations, and performance.",
    definition:"Management Consultants analyze difficult business challenges and recommend practical strategies to improve organizations.",
    india:["₹12–25 LPA","₹30–55 LPA","₹1 Cr+"], usa:["$100k–180k","$200k–400k","$700k+"],
    tasks:["Analyze business problems","Interview clients","Research industries","Build presentations","Develop recommendations","Support implementation"],
    skills:["Case Interview Skills","Structured Problem Solving","Problem Solving","Communication","PowerPoint","Data Analysis","Strategy","Business Analysis"],
    roadmap:["High School","Bachelor's Degree","Consulting Internship","Business Analyst","Consultant","Engagement Manager","Partner"],
    subjects:["Mathematics","Economics","English","Business Studies"], majors:["Business","Economics","Engineering","Finance","Computer Science"], certifications:["Case Interview Skills","MBA optional","Analytics courses"], internships:["Consulting","Business strategy","Operations"],
    fit:["Loves solving ambiguous problems","Love problem solving","Enjoy presentations","Like variety","Work well in teams"],
    universities:{worldwide:["Harvard","Stanford","INSEAD","Wharton"],india:["IIM Ahmedabad","IIM Bangalore","IIM Calcutta","IIT Delhi"]}
  },
  {
    name:"Commercial Banker", icon:"CB", difficulty:6, salary:"₹6 LPA – ₹45 LPA+", description:"Helps businesses manage accounts, access loans, and use banking services to operate and grow.",
    definition:"Commercial Bankers work with business clients to provide loans, cash-management tools, accounts, and financial guidance.",
    india:["₹6–12 LPA","₹15–28 LPA","₹35–45 LPA+"], usa:["$70k–110k","$120k–200k","$250k+"],
    tasks:["Evaluate business loan applications","Analyze credit risk","Build client relationships","Structure banking solutions","Monitor repayments","Support business growth"],
    skills:["Relationship Management","Lending","Credit Analysis","Banking","Communication","Risk Assessment","Financial Statements","Negotiation"],
    roadmap:["High School","Finance Degree","Banking Internship","Credit Analyst","Relationship Manager","Commercial Banker","Regional Head"],
    subjects:["Mathematics","Economics","Accounting","Business Studies"], majors:["Finance","Accounting","Economics","Business"], certifications:["Credit analysis courses","Banking certifications"], internships:["Commercial bank","Credit team","Business banking"],
    fit:["Enjoy helping businesses","Like relationship building","Assess risk carefully","Communicate well","Prefer practical finance"],
    universities:{worldwide:["Indiana University Kelley","University of Florida","Texas A&M","University of Wisconsin"],india:["Christ University","NMIMS","St. Xavier's","Symbiosis"]}
  }
];

const CAREER_UNIVERSITIES = {
  worldwide:["Wharton","Columbia","NYU Stern","Harvard","MIT","Chicago Booth"],
  india:["SRCC","St. Xavier's","Christ University","Ashoka University","NMIMS","IIM Indore IPM"]
};
