export default function Badge() {
  return (
    <div className="content-stretch flex items-center justify-center px-[23px] py-[7px] relative rounded-[100px] size-full" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.31)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.86)] text-center tracking-[7.36px] uppercase whitespace-nowrap">ABOUT CHRISTOPHER NOLAN</p>
    </div>
  );
}