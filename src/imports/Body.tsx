import svgPaths from "./svg-10gc8g962a";
// ── Placeholder images (replace with real assets when ready) ──────────────────
const imgScreen2 =
  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&q=80";
const imgWorkEnvironment =
  "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=1200&q=80";
const imgProject01 =
  "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=1200&q=80";
const imgProject02 =
  "https://images.unsplash.com/photo-1511376777868-611b54f68947?w=1200&q=80";
const imgFilm1 =
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80";
const imgFilm2 =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80";
const imgFilm3 =
  "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&q=80";
const imgFilm4 =
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80";
const imgFilm6 =
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=80";
const imgArticle1 =
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80";
const imgArticle2 =
  "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80";
const imgArticle3 =
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[89.6px] text-black tracking-[-4.48px] uppercase w-full">
        <p className="leading-[76.16px] mb-0">VISUAL</p>
        <p className="leading-[76.16px]">POETRY</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[512px] relative shrink-0 w-[512px]" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] h-[96px] justify-center leading-[0] not-italic relative shrink-0 text-[#5d5f5f] text-[24px] w-[495.53px]">
        <p className="leading-[32px] mb-0">Welcome to a visual journey that transcends</p>
        <p className="leading-[32px] mb-0">time and space. Discover the artistry of</p>
        <p className="leading-[32px]">moments captured in motion.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container1 />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center mr-[-8px] pb-[13px] pt-[12px] px-px relative shrink-0 size-[40px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[10px] text-center uppercase w-[13.88px]">
        <p className="leading-[15px]">YT</p>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center pb-[13px] pt-[12px] px-px relative shrink-0 size-[40px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[10px] text-center uppercase w-[10.27px]">
        <p className="leading-[15px]">IG</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-8px] relative shrink-0 size-[40px]" data-name="Margin">
      <BackgroundBorder1 />
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center pb-[13px] pt-[12px] px-px relative shrink-0 size-[40px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[10px] text-center uppercase w-[12.48px]">
        <p className="leading-[15px]">FB</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-8px] relative shrink-0 size-[40px]" data-name="Margin">
      <BackgroundBorder2 />
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center pb-[13px] pt-[12px] px-px relative shrink-0 size-[40px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[10px] text-center uppercase w-[7.2px]">
        <p className="leading-[15px]">X</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-8px] relative shrink-0 size-[40px]" data-name="Margin">
      <BackgroundBorder3 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-start pr-[8px] relative shrink-0" data-name="Container">
      <BackgroundBorder />
      <Margin />
      <Margin1 />
      <Margin2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <div className="bg-[#c6c6c6] h-px shrink-0 w-[96px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[48px] tracking-[-2.4px] w-full">
        <p className="leading-[48px]">+250k</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[180px] relative shrink-0 w-[180px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[45px] justify-center leading-[0] not-italic relative shrink-0 text-[#5d5f5f] text-[12px] uppercase w-[156.03px]">
        <p className="leading-[15px] mb-0">Videos that reaching a</p>
        <p className="leading-[15px] mb-0">wide audience and give</p>
        <p className="leading-[15px]">lasting impression</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[48px] tracking-[-2.4px] w-full">
        <p className="leading-[48px]">+800k</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[180px] relative shrink-0 w-[180px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[45px] justify-center leading-[0] not-italic relative shrink-0 text-[#5d5f5f] text-[12px] uppercase w-[174.45px]">
        <p className="leading-[15px] mb-0">Hours watched, engaging</p>
        <p className="leading-[15px] mb-0">storytelling that</p>
        <p className="leading-[15px]">captivates viewers</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container4() {
  return (
    <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_101px] pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container8 />
    </div>
  );
}

function LeftColumnContent() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[48px] items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Left Column Content">
      <Container />
      <Container2 />
      <Container4 />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="absolute gap-x-[64px] gap-y-[64px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_625px] left-[48px] right-[48px] top-[224px]" data-name="Hero Section">
      <LeftColumnContent />
      <div className="aspect-[1429/1600] col-2 justify-self-stretch relative row-1 shrink-0" data-name="screen 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreen2} />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Epilogue:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[24px] w-full">
          <p className="leading-[32px] mb-0">LESS IS</p>
          <p className="leading-[32px]">ABSOLUTE.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="bg-[#f3f3f4] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-b border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16.5px] items-start pb-[156.5px] pt-[47.5px] px-[48px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5d5f5f] text-[12px] tracking-[2.4px] uppercase w-[101.03px]">
          <p className="leading-[16px]">Philosophy</p>
        </div>
        <Heading2 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-full">
        <p className="leading-[28px] mb-0">Available for select editorial</p>
        <p className="leading-[28px]">collaborations in 2024.</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-black relative shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16.5px] items-start pb-[163.5px] pt-[47.5px] px-[48px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic opacity-60 relative shrink-0 text-[12px] text-white tracking-[2.4px] uppercase w-[60.41px]">
          <p className="leading-[16px]">Status</p>
        </div>
        <Container11 />
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="col-[9/span_4] justify-self-stretch relative row-1 self-start shrink-0" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-black border-l border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-px relative w-full">
        <BackgroundHorizontalBorder />
        <Background />
      </div>
    </div>
  );
}

function WorkEnvironment() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Work Environment">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[131.33%] left-0 max-w-none top-[-15.67%] w-full" src={imgWorkEnvironment} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Epilogue:Bold',sans-serif] font-bold h-[40px] justify-center leading-[0] relative shrink-0 text-[36px] text-white uppercase w-[189.25px]">
        <p className="leading-[40px]">The Craft</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.2)] content-stretch flex inset-0 items-end p-[48px]" data-name="Overlay">
      <Container13 />
    </div>
  );
}

function Container12() {
  return (
    <div className="col-[1/span_8] h-[600px] justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <WorkEnvironment />
        <Overlay />
      </div>
    </div>
  );
}

function SectionFeaturedImageBentoish() {
  return (
    <div className="absolute grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_600px] left-[48px] p-px right-[48px] top-[985px]" data-name="Section - Featured Image (Bentoish)">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <VerticalBorder />
      <Container12 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[60px] tracking-[-3px] uppercase w-full">
        <p className="leading-[60px]">ABOUT</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5d5f5f] text-[18px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[29.25px] mb-0">My journey is a synthesis of technical</p>
        <p className="leading-[29.25px] mb-0">rigor and visual storytelling. I build</p>
        <p className="leading-[29.25px] mb-0">{`interfaces that don't just function—they`}</p>
        <p className="leading-[29.25px]">resonate.</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="col-[1/span_4] content-stretch flex flex-col gap-[31.375px] items-start justify-self-stretch pb-[106px] relative row-1 self-start shrink-0" data-name="Container">
      <Heading1 />
      <Container15 />
    </div>
  );
}

function ParagraphHorizontalBorder() {
  return (
    <div className="content-stretch flex items-baseline justify-between pb-[17px] relative shrink-0 w-full" data-name="Paragraph+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#c6c6c6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Epilogue:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[24px] uppercase w-[378.27px]">
        <p className="leading-[32px]">Senior Interactive Developer</p>
      </div>
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[16px] w-[153.94px]">
        <p className="leading-[24px]">Global Design House</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[8.5px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5d5f5f] text-[12px] w-[102.58px]">
        <p className="leading-[16px]">2022 — PRESENT</p>
      </div>
      <ParagraphHorizontalBorder />
    </div>
  );
}

function ParagraphHorizontalBorder1() {
  return (
    <div className="content-stretch flex items-baseline justify-between pb-[17px] relative shrink-0 w-full" data-name="Paragraph+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#c6c6c6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Epilogue:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[24px] uppercase w-[293.52px]">
        <p className="leading-[32px]">Creative Technologist</p>
      </div>
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[16px] w-[161.44px]">
        <p className="leading-[24px]">Studio Noir Collective</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[8.5px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5d5f5f] text-[12px] w-[78.06px]">
        <p className="leading-[16px]">2020 — 2022</p>
      </div>
      <ParagraphHorizontalBorder1 />
    </div>
  );
}

function ParagraphHorizontalBorder2() {
  return (
    <div className="content-stretch flex items-baseline justify-between pb-[17px] relative shrink-0 w-full" data-name="Paragraph+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#c6c6c6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Epilogue:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[24px] uppercase w-[259.92px]">
        <p className="leading-[32px]">Frontend Architect</p>
      </div>
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[16px] w-[119.64px]">
        <p className="leading-[24px]">Avenue Creative</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[8.5px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5d5f5f] text-[12px] w-[75.73px]">
        <p className="leading-[16px]">2018 — 2020</p>
      </div>
      <ParagraphHorizontalBorder2 />
    </div>
  );
}

function Container16() {
  return (
    <div className="col-[5/span_8] content-stretch flex flex-col gap-[48px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container17 />
      <Container18 />
      <Container19 />
    </div>
  );
}

function SectionAboutTimeline() {
  return (
    <div className="absolute bg-[#f9f9f9] gap-x-[80px] gap-y-[80px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_315px] left-0 px-[48px] py-[160px] right-0 top-[1627px]" data-name="Section - About & Timeline">
      <Container14 />
      <Container16 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[12px] tracking-[1.2px] uppercase w-[119.39px]">
        <p className="leading-[16px]">Collaborators</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[12px] w-[173.56px]">
        <p className="leading-[16px]">SELECTED CLIENTS 2018-2024</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Border1() {
  return (
    <div className="col-1 h-[125px] justify-self-stretch relative row-1 shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border-b border-black border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[49px] pl-[48px] pr-[49px] pt-[48px] relative size-full">
          <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black h-[28px] justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[20px] text-center w-[69.08px]">
            <p className="leading-[28px]">VOGUE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Border2() {
  return (
    <div className="col-2 h-[125px] justify-self-stretch relative row-1 shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border-b border-black border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[49px] pl-[48px] pr-[49px] pt-[48px] relative size-full">
          <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black h-[28px] justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[20px] text-center w-[57.05px]">
            <p className="leading-[28px]">LEICA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Border3() {
  return (
    <div className="col-3 h-[125px] justify-self-stretch relative row-1 shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border-b border-black border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[49px] pl-[48px] pr-[49px] pt-[48px] relative size-full">
          <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black h-[28px] justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[20px] text-center w-[52.98px]">
            <p className="leading-[28px]">BMW</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Border4() {
  return (
    <div className="col-4 h-[125px] justify-self-stretch relative row-1 shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border-b border-black border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[49px] pl-[48px] pr-[49px] pt-[48px] relative size-full">
          <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black h-[28px] justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[20px] text-center w-[81.31px]">
            <p className="leading-[28px]">SQUARE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_125px] pl-px pt-px relative shrink-0 w-full" data-name="Border">
      <div aria-hidden="true" className="absolute border-black border-l border-solid border-t inset-0 pointer-events-none" />
      <Border1 />
      <Border2 />
      <Border3 />
      <Border4 />
    </div>
  );
}

function SectionClientGrid() {
  return (
    <div className="absolute bg-[#e8e8e8] content-stretch flex flex-col gap-[48px] items-start left-0 px-[48px] py-[80px] right-0 top-[2262px]" data-name="Section - Client Grid">
      <Container20 />
      <Border />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1184px]" data-name="Heading 2">
      <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black h-[60px] justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[60px] tracking-[-3px] uppercase w-[389.08px]">
        <p className="leading-[60px]">CASE STUDIES</p>
      </div>
    </div>
  );
}

function Project() {
  return (
    <div className="absolute inset-[0_0_1px_0]" data-name="Project 01">
      <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
        <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden">
          <img alt="" className="absolute h-[256.51%] left-0 max-w-none top-[-78.26%] w-full" src={imgProject01} />
        </div>
        <div className="absolute bg-clip-padding bg-white border-0 border-[transparent] border-solid inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white uppercase w-[139.53px]">
        <p className="leading-[16px]">Visual Identity / Web</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black h-[72px] justify-center leading-[0] relative shrink-0 text-[72px] text-white uppercase w-[518.27px]">
        <p className="leading-[72px]">NOIR ARCHIVE</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[518.27px]" data-name="Container">
      <Container26 />
      <Heading4 />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 size-[30.985px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.9855 30.9855">
        <g id="Container">
          <path d={svgPaths.p4d1e380} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[48px] relative size-full">
          <Container25 />
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Article() {
  return (
    <div className="h-[500px] relative shrink-0 w-full" data-name="Article">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip pb-px relative rounded-[inherit] size-full">
        <Project />
        <Container24 />
      </div>
      <div aria-hidden="true" className="absolute border-b border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Project1() {
  return (
    <div className="absolute inset-[0_0_1px_0]" data-name="Project 02">
      <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
        <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden">
          <img alt="" className="absolute h-[256.51%] left-0 max-w-none top-[-78.26%] w-full" src={imgProject02} />
        </div>
        <div className="absolute bg-clip-padding bg-white border-0 border-[transparent] border-solid inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white uppercase w-[188.86px]">
        <p className="leading-[16px]">Motion Design / Interaction</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black h-[72px] justify-center leading-[0] relative shrink-0 text-[72px] text-white uppercase w-[522.27px]">
        <p className="leading-[72px]">KINETIC FORM</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[522.27px]" data-name="Container">
      <Container30 />
      <Heading5 />
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 size-[30.985px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.9855 30.9855">
        <g id="Container">
          <path d={svgPaths.p4d1e380} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[48px] relative size-full">
          <Container29 />
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Article1() {
  return (
    <div className="h-[500px] relative shrink-0 w-full" data-name="Article">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip pb-px relative rounded-[inherit] size-full">
        <Project1 />
        <Container28 />
      </div>
      <div aria-hidden="true" className="absolute border-b border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Article />
      <Article1 />
    </div>
  );
}

function SectionCaseStudies() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[80px] items-center left-0 py-[160px] right-0 top-[2612px]" data-name="Section - Case Studies">
      <Heading3 />
      <Container23 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[60px] text-white tracking-[-3px] uppercase w-full">
        <p className="leading-[60px] mb-0">FRAME BY</p>
        <p className="leading-[60px]">FRAME</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-full">
        <p className="leading-[28px] mb-0">Outside of code, I explore the world through 24 frames</p>
        <p className="leading-[28px]">per second. Video editing is my rhythmic meditation.</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="col-[1/span_5] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch pb-[237.78px] relative row-1 self-start shrink-0" data-name="Container">
      <Heading6 />
      <Container34 />
    </div>
  );
}

function Film() {
  return (
    <div className="h-[220.89px] relative shrink-0 w-full" data-name="Film 1">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFilm1} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] col-1 content-stretch flex flex-col items-start justify-center justify-self-stretch overflow-clip relative row-1 self-start shrink-0" data-name="Overlay">
      <Film />
    </div>
  );
}

function Film1() {
  return (
    <div className="h-[220.89px] relative shrink-0 w-full" data-name="Film 2">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFilm2} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] col-2 content-stretch flex flex-col items-start justify-center justify-self-stretch overflow-clip relative row-1 self-start shrink-0" data-name="Overlay">
      <Film1 />
    </div>
  );
}

function Film2() {
  return (
    <div className="h-[220.89px] relative shrink-0 w-full" data-name="Film 3">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFilm3} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] col-3 content-stretch flex flex-col items-start justify-center justify-self-stretch overflow-clip relative row-1 self-start shrink-0" data-name="Overlay">
      <Film2 />
    </div>
  );
}

function Film3() {
  return (
    <div className="h-[220.89px] relative shrink-0 w-full" data-name="Film 4">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFilm4} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] col-1 content-stretch flex flex-col items-start justify-center justify-self-stretch overflow-clip relative row-2 self-start shrink-0" data-name="Overlay">
      <Film3 />
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 size-[28.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4999 28.4999">
        <g id="Container">
          <path d={svgPaths.p28ccfc40} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="aspect-square bg-[rgba(255,255,255,0.1)] col-2 justify-self-stretch relative row-2 shrink-0" data-name="Overlay+Border">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Container36 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Film4() {
  return (
    <div className="h-[220.89px] relative shrink-0 w-full" data-name="Film 6">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFilm6} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Overlay5() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] col-3 content-stretch flex flex-col items-start justify-center justify-self-stretch overflow-clip relative row-2 self-start shrink-0" data-name="Overlay">
      <Film4 />
    </div>
  );
}

function Container35() {
  return (
    <div className="col-[6/span_7] gap-x-[4px] gap-y-[4px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[__220.89px_220.89px] justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Overlay1 />
      <Overlay2 />
      <Overlay3 />
      <Overlay4 />
      <OverlayBorder />
      <Overlay5 />
    </div>
  );
}

function Container32() {
  return (
    <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_445.78px] relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container35 />
    </div>
  );
}

function SectionHobbiesEditingGrid() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col items-start left-0 px-[48px] py-[160px] right-0 top-[4072px]" data-name="Section - Hobbies & Editing Grid">
      <Container32 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[28.269px] relative shrink-0 w-[40.481px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4806 28.2691">
        <g id="Container">
          <path d={svgPaths.p45e6400} fill="var(--fill-0, black)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] h-[198px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[36px] text-center w-[839.34px]">
        <p className="leading-[49.5px] mb-0">{`"Sricharan doesn't just build websites; he builds`}</p>
        <p className="leading-[49.5px] mb-0">digital monuments. His attention to typographic</p>
        <p className="leading-[49.5px] mb-0">detail and structural rhythm is unparalleled in the</p>
        <p className="leading-[49.5px]">{`modern web."`}</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Epilogue:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[16px] text-center tracking-[1.6px] uppercase w-[135.95px]">
        <p className="leading-[24px]">ARTHUR BLACK</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5d5f5f] text-[12px] text-center w-[185px]">
        <p className="leading-[16px]">Creative Director, Noir Collective</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Container41 />
    </div>
  );
}

function Container37() {
  return (
    <div className="max-w-[896px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-center max-w-[inherit] relative w-full">
        <Container38 />
        <Container39 />
        <Container40 />
      </div>
    </div>
  );
}

function SectionTestimonials() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[161px] pt-[160px] px-[192px] right-0 top-[4837.78px]" data-name="Section - Testimonials">
      <div aria-hidden="true" className="absolute border-b border-black border-solid inset-0 pointer-events-none" />
      <Container37 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black h-[60px] justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[60px] tracking-[-3px] uppercase w-[266.2px]">
        <p className="leading-[60px]">JOURNAL</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[5px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-b border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[12px] uppercase w-[99.08px]">
        <p className="leading-[16px]">View All Posts</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Link />
    </div>
  );
}

function Article3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Article 1">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[141.66%] left-0 max-w-none top-[-20.83%] w-full" src={imgArticle1} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#e2e2e2] content-stretch flex flex-col h-[256px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Background">
      <Article3 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col h-[280px] items-start pb-[24px] relative shrink-0 w-full" data-name="Margin">
      <Background1 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5d5f5f] text-[10px] uppercase w-full">
        <p className="leading-[15px]">OCT 24, 2023</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container44 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Epilogue:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[20px] uppercase w-full">
        <p className="leading-[28px] mb-0">The Silent Space: Minimalism in</p>
        <p className="leading-[28px]">2024</p>
      </div>
    </div>
  );
}

function Article2() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Article">
      <Margin3 />
      <Margin4 />
      <Heading9 />
    </div>
  );
}

function Article5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Article 2">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[141.67%] left-0 max-w-none top-[-20.83%] w-full" src={imgArticle2} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#e2e2e2] content-stretch flex flex-col h-[256px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Background">
      <Article5 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col h-[280px] items-start pb-[24px] relative shrink-0 w-full" data-name="Margin">
      <Background2 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5d5f5f] text-[10px] uppercase w-full">
        <p className="leading-[15px]">SEP 12, 2023</p>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container45 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Epilogue:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[20px] uppercase w-full">
        <p className="leading-[28px]">Code as Architecture</p>
      </div>
    </div>
  );
}

function Article4() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch pb-[28px] relative row-1 self-start shrink-0" data-name="Article">
      <Margin5 />
      <Margin6 />
      <Heading10 />
    </div>
  );
}

function Article7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Article 3">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[141.66%] left-0 max-w-none top-[-20.83%] w-full" src={imgArticle3} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#e2e2e2] content-stretch flex flex-col h-[256px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Background">
      <Article7 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col h-[280px] items-start pb-[24px] relative shrink-0 w-full" data-name="Margin">
      <Background3 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5d5f5f] text-[10px] uppercase w-full">
        <p className="leading-[15px]">AUG 05, 2023</p>
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container46 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Epilogue:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[20px] uppercase w-full">
        <p className="leading-[28px]">Digital Noir: A New Aesthetic</p>
      </div>
    </div>
  );
}

function Article6() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch pb-[28px] relative row-1 self-start shrink-0" data-name="Article">
      <Margin7 />
      <Margin8 />
      <Heading11 />
    </div>
  );
}

function Container43() {
  return (
    <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_359px] relative shrink-0 w-full" data-name="Container">
      <Article2 />
      <Article4 />
      <Article6 />
    </div>
  );
}

function SectionBlogArticles() {
  return (
    <div className="absolute bg-[#f9f9f9] content-stretch flex flex-col gap-[80px] items-start left-0 px-[48px] py-[160px] right-0 top-[5540.78px]" data-name="Section - Blog/Articles">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 size-[28.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4999 28.4999">
        <g id="Container">
          <path d={svgPaths.p1c062600} fill="var(--fill-0, #1A1C1C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.5px] opacity-60 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[10px] uppercase w-[46.05px]">
        <p className="leading-[15px]">LinkedIn</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.5px] relative shrink-0" data-name="Container">
      <Container50 />
      <div className="flex flex-col font-['Epilogue:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] mb-[-0.5px] relative shrink-0 text-[#1a1c1c] text-[24px] uppercase w-[215.41px]">
        <p className="leading-[32px]">@sricharan-dev</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Container48 />
        <Container49 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[25.5px] relative shrink-0 w-[28.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4999 25.4999">
        <g id="Container">
          <path d={svgPaths.p3fb1c800} fill="var(--fill-0, #1A1C1C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.5px] opacity-60 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[10px] uppercase w-[58.59px]">
        <p className="leading-[15px]">Instagram</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.5px] relative shrink-0" data-name="Container">
      <Container54 />
      <div className="flex flex-col font-['Epilogue:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] mb-[-0.5px] relative shrink-0 text-[#1a1c1c] text-[24px] uppercase w-[179.7px]">
        <p className="leading-[32px]">@noir_editor</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Container52 />
        <Container53 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[28.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.4999 22.4999">
        <g id="Container">
          <path d={svgPaths.pfa91300} fill="var(--fill-0, #1A1C1C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.5px] opacity-60 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[10px] uppercase w-[38.03px]">
        <p className="leading-[15px]">Github</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.5px] relative shrink-0" data-name="Container">
      <Container58 />
      <div className="flex flex-col font-['Epilogue:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] mb-[-0.5px] relative shrink-0 text-[#1a1c1c] text-[24px] uppercase w-[221.16px]">
        <p className="leading-[32px]">/sricharan-arch</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Container56 />
        <Container57 />
      </div>
    </div>
  );
}

function SectionSocialMediaArea() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 pb-[80px] pl-[48px] pr-[48.01px] pt-[81px] right-0 top-[6359.78px]" data-name="Section - Social Media Area">
      <div aria-hidden="true" className="absolute border-black border-solid border-t inset-0 pointer-events-none" />
      <Container47 />
      <Container51 />
      <Container55 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="h-[6567.78px] relative shrink-0 w-full" data-name="Main Content">
      <HeroSection />
      <SectionFeaturedImageBentoish />
      <SectionAboutTimeline />
      <SectionClientGrid />
      <SectionCaseStudies />
      <SectionHobbiesEditingGrid />
      <SectionTestimonials />
      <SectionBlogArticles />
      <SectionSocialMediaArea />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] tracking-[1.2px] w-[318.83px]">
        <p className="leading-[16px]">© 2024 DIGITAL NOIR. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] tracking-[1.2px] w-[69.08px]">
        <p className="leading-[16px]">Instagram</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] tracking-[1.2px] w-[58.97px]">
        <p className="leading-[16px]">LinkedIn</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] tracking-[1.2px] w-[38.48px]">
        <p className="leading-[16px]">Email</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex gap-[48px] h-[16px] items-start relative shrink-0" data-name="Container">
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Container59() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[48px] py-[80px] relative w-full">
          <Container60 />
          <Container61 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-black content-stretch flex items-center justify-center min-h-[200px] pt-[160px] relative shrink-0 w-full" data-name="Footer">
      <Container59 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[24px] text-black tracking-[-1.2px] uppercase w-full">
        <p className="leading-[32px]">SRICHARAN</p>
      </div>
    </div>
  );
}

function LogoLeft() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[304px]" data-name="Logo Left">
      <Container63 />
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-b-2 border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Epilogue:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-black tracking-[-0.7px] uppercase w-[38.55px]">
        <p className="leading-[20px]">WORK</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Epilogue:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] tracking-[-0.7px] uppercase w-[75.84px]">
        <p className="leading-[20px]">EXPERIENCE</p>
      </div>
    </div>
  );
}

function LeftLinks() {
  return (
    <div className="content-stretch flex gap-[31.99px] items-center relative shrink-0" data-name="Left Links">
      <Link4 />
      <Link5 />
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[14.086px] relative shrink-0 w-[21.25px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2499 14.0865">
        <g id="Container">
          <path d={svgPaths.p1c62e520} fill="var(--fill-0, black)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-px relative shrink-0 size-[64px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container64 />
    </div>
  );
}

function CenterCircularMenuToggle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Center Circular Menu Toggle">
      <Button />
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Epilogue:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] tracking-[-0.7px] uppercase w-[33.31px]">
        <p className="leading-[20px]">BLOG</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Epilogue:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] tracking-[-0.7px] uppercase w-[59.05px]">
        <p className="leading-[20px]">CONTACT</p>
      </div>
    </div>
  );
}

function RightLinks() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Right Links">
      <Link6 />
      <Link7 />
    </div>
  );
}

function CenteredNavigationAndToggle() {
  return (
    <div className="content-stretch flex gap-[48px] items-center justify-center relative shrink-0 w-[608px]" data-name="Centered Navigation and Toggle">
      <LeftLinks />
      <CenterCircularMenuToggle />
      <RightLinks />
    </div>
  );
}

function Container62() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[32px] pr-[336px] py-[24px] relative w-full">
          <LogoLeft />
          <CenteredNavigationAndToggle />
        </div>
      </div>
    </div>
  );
}

function TopNavBar() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 top-0 w-[1280px]" data-name="TopNavBar">
      <Container62 />
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col items-start pb-[24.22px] relative size-full" data-name="Body">
      <MainContent />
      <Footer />
      <TopNavBar />
    </div>
  );
}