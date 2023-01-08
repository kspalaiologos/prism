Prism.languages.fasm = {
    comment: /;.*$/m,
    string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    label: { pattern: /(^\s*)[A-Za-z._?$][\w.?$@~#]*:/m, lookbehind: !0, alias: "function" },
    builtin: /\b(?:byte|word|dword|fword|pword|qword|tbyte|tword|dqword|xword|qqword|yword|zword|dqqword|db|dd|df|dp|dq|dt|du|dw|rb|rd|rf|rp|rq|rt|rw|file|short|near|far|define|include|irp|irps|irpv|macro|match|postpone|purge|rept|restore|restruc|struc|common|forward|local|reverse|align|as|at|defined|dup|eq|eqtype|from|in|on|ptr|relativeto|used|rd|rn|ru|rz|sae|1to2|1to4|1to8|1to16|1to32|1to64|binary|use16|use32|use64|mz|pe|pe64|console|gui|native|efi|efiboot|efiruntime|dll|wdm|nx|large|coff|ms|ms64|static|elf|elf64|interpreter|dynamic|note|gnustack|gnuehframe|code|data|readable|writable|writeable|executable|shareable|discardable|notpageable|linkremove|linkinfo|export|import|resource|fixups)\b/i,
    keyword: /\b(?:and|mod|or|shl|shr|xor|bsf|bsr|not|plt|rva|aad|aam|adc|adcx|add|addsubps|adox|align|and|andn|arpl|assert|bextr|blcfill|blci|blcic|blcmsk|blcs|blsfill|blsi|blsic|blsmsk|blsr|bnd|bndcl|bndcn|bndcu|bndldx|bndmk|bndmov|bndstx|bound|break|bsf|bsr|bswap|bt|btc|btr|bts|bzhi|call|clac|clc|cld|clflush|clflushopt|clgi|cli|clts|clwb|cmc|cmova|cmovae|cmovb|cmovbe|cmovc|cmove|cmovg|cmovge|cmovl|cmovle|cmovna|cmovnae|cmovnb|cmovnbe|cmovnc|cmovne|cmovng|cmovnge|cmovnl|cmovnle|cmovno|cmovnp|cmovns|cmovnz|cmovo|cmovp|cmovpe|cmovpo|cmovs|cmovz|cmp|cmpeqpd|cmpeqps|cmpeqsd|cmpeqss|cmplepd|cmpleps|cmplesd|cmpless|cmpltpd|cmpltps|cmpltsd|cmpltss|cmpneqpd|cmpneqps|cmpneqsd|cmpneqss|cmpnlepd|cmpnleps|cmpnlesd|cmpnless|cmpnltpd|cmpnltps|cmpnltsd|cmpnltss|cmpordpd|cmpordps|cmpordsd|cmpordss|cmppd|cmpps|cmps|cmpsb|cmpsd|cmpss|cmpunordpd|cmpunordps|cmpunordsd|cmpunordss|cmpxchg|cmpxchg16b|cmpxchg8b|comisd|comiss|cpuid|crc32|cvtdq2pd|cvtpd2dq|cvtpd2pi|cvtpi2pd|cvtpi2ps|cvtps2pd|cvtps2pi|cvtsd2si|cvtsi2sd|cvtsi2ss|cvtss2si|cvttpd2pi|cvttps2dq|cvttps2pi|cvttsd2si|cvttss2si|data|dec|display|div|else|emms|end|enter|entry|err|extractps|extrn|extrq|f2xm1|fabs|fadd|faddp|fbld|fbstp|fchs|fclex|fcmovb|fcmovbe|fcmove|fcmovnb|fcmovnbe|fcmovne|fcmovnu|fcmovu|fcom|fcomi|fcomip|fcomp|fcompp|fcos|fdecstp|fdisi|fdiv|fdivp|fdivr|fdivrp|femms|feni|ffree|ffreep|fiadd|ficom|ficomp|fidiv|fidivr|fild|fimul|fincstp|finit|fist|fistp|fisttp|fisub|fisubr|fld|fld1|fldcw|fldenv|fldl2e|fldl2t|fldlg2|fldln2|fldpi|fldz|fmul|fmulp|fnclex|fndisi|fneni|fninit|fnop|fnsave|fnstcw|fnstenv|fnstsw|format|fpatan|fprem|fprem1|fptan|frndint|frstor|frstpm|fsave|fscale|fsetpm|fsin|fsincos|fsqrt|fst|fstcw|fstenv|fstp|fstsw|fsub|fsubp|fsubr|fsubrp|ftst|fucom|fucomi|fucomip|fucomp|fucompp|fwait|fxam|fxch|fxrstor|fxsave|fxtract|fyl2x|fyl2xp1|getsec|haddps|heap|hlt|hsubps|icebp|idiv|if|imul|in|inc|ins|insb|insertps|insertq|int|int1|int3|invd|invlpg|invlpga|iret|ja|jae|jb|jbe|jc|je|jg|jge|jl|jle|jmp|jna|jnae|jnb|jnbe|jnc|jne|jng|jnge|jnl|jnle|jno|jnp|jns|jnz|jo|jp|jpe|jpo|js|jz|kaddb|kaddd|kaddq|kaddw|kandb|kandd|kandnb|kandnd|kandnq|kandnw|kandq|kandw|kmovb|kmovd|kmovq|kmovw|knotb|knotd|knotq|knotw|korb|kord|korq|kortestb|kortestd|kortestq|kortestw|korw|kshiftlb|kshiftld|kshiftlq|kshiftlw|kshiftrb|kshiftrd|kshiftrq|kshiftrw|ktestb|ktestd|ktestq|ktestw|kunpckbw|kunpckdq|kunpckwd|kxnorb|kxnord|kxnorq|kxnorw|kxorb|kxord|kxorq|kxorw|label|lahf|lar|lddqu|ldmxcsr|lds|lea|leave|les|lfence|lfs|lgdt|lgs|lidt|lldt|llwpcb|lmsw|load|loadall286|loadall386|lock|lods|lodsb|loop|loope|loopne|loopnz|loopz|lsl|lss|ltr|lwpins|lwpval|lzcnt|maskmovdqu|maskmovq|mfence|monitor|mov|movapd|movaps|movbe|movd|movdq2q|movdqa|movdqu|movhlps|movhpd|movhps|movlhps|movlpd|movlps|movmskpd|movmskps|movntdq|movntdqa|movnti|movntpd|movntps|movntq|movntsd|movntss|movq|movq2dq|movs|movsb|movsd|movshdup|movsldup|movss|movsx|movsxd|movupd|movups|movzx|mul|mulx|mwait|neg|nop|not|or|org|out|outs|outsb|palignr|pause|pclmulhqhdq|pclmulhqhqdq|pclmulhqlqdq|pclmullqhdq|pclmullqhqdq|pclmullqlqdq|pclmulqdq|pcommit|pdep|pext|pextrb|pextrd|pextrq|pextrw|pinsrb|pinsrd|pinsrq|pinsrw|pmovmskb|pmovsxbd|pmovsxbq|pmovsxbw|pmovsxdq|pmovsxwd|pmovsxwq|pmovzxbd|pmovzxbq|pmovzxbw|pmovzxdq|pmovzxwd|pmovzxwq|pop|popcnt|popd|popf|popq|popw|prefetch|prefetchnta|prefetcht0|prefetcht1|prefetcht2|prefetchw|prefetchwt1|pshufd|pshufhw|pshuflw|pshufw|pslldq|psrldq|public|push|pushd|pushf|pushq|pushw|rcl|rcr|rdfsbase|rdgsbase|rdmsr|rdpkru|rdpmc|rdrand|rdseed|rdtsc|rdtscp|rep|repe|repeat|repne|repnz|repz|ret|retf|retn|rol|ror|rorx|rsm|sahf|sal|sar|sarx|sbb|scas|scasb|section|segment|seta|setae|setb|setbe|setc|sete|setg|setge|setl|setle|setna|setnae|setnb|setnbe|setnc|setne|setng|setnge|setnl|setnle|setno|setnp|setns|setnz|seto|setp|setpe|setpo|sets|setz|sfence|sgdt|shl|shld|shlx|shr|shrd|shrx|sidt|skinit|sldt|slwpcb|smsw|stac|stack|stc|std|stgi|sti|stmxcsr|store|stos|stosb|str|sub|swapgs|syscall|sysenter|sysexit|sysret|t1mskc|test|times|tzcnt|tzmsk|ucomisd|ucomiss|ud2|useavx256|useavx512|verr|verw|vgatherdpd|vgatherdps|vgatherpf0dpd|vgatherpf0dps|vgatherpf0qpd|vgatherpf0qps|vgatherpf1dpd|vgatherpf1dps|vgatherpf1qpd|vgatherpf1qps|vgatherqpd|vgatherqps|virtual|vldmxcsr|vmcall|vmfunc|vmlaunch|vmload|vmmcall|vmresume|vmrun|vmsave|vmxoff|vpcmov|vpermil2pd|vpermil2ps|vpermilmo2pd|vpermilmo2ps|vpermilmz2pd|vpermilmz2ps|vpermiltd2pd|vpermiltd2ps|vpgatherdd|vpgatherdq|vpgatherqd|vpgatherqq|vpscatterdd|vpscatterdq|vpscatterqd|vpscatterqq|vscatterdpd|vscatterdps|vscatterpf0dpd|vscatterpf0dps|vscatterpf0qpd|vscatterpf0qps|vscatterpf1dpd|vscatterpf1dps|vscatterpf1qpd|vscatterpf1qps|vscatterqpd|vscatterqps|vstmxcsr|vzeroall|vzeroupper|wait|wbinvd|while|wrfsbase|wrgsbase|wrmsr|wrpkru|xabort|xacquire|xadd|xbegin|xchg|xend|xgetbv|xlat|xlatb|xor|xrelease|xrstor|xsave|xsaveopt|xsetbv|xtest|cbw|cmpsw|cwd|fldenvw|fnsavew|fnstenvw|frstorw|fsavew|fstenvw|insw|iretw|jcxz|lodsw|loopew|loopnew|loopnzw|loopw|loopzw|movsw|outsw|popfw|pushfw|retfw|retnw|retw|scasw|stosw|popaw|pushaw|cdq|cwde|fldenvd|fnsaved|fnstenvd|frstord|fsaved|fstenvd|insd|iretd|jecxz|lodsd|loopd|looped|loopned|loopnzd|loopzd|outsd|retfd|scasd|stosd|popad|popfd|pushad|pushfd|retd|retnd|cdqe|cmpsq|cqo|fxrstor64|fxsave64|iretq|jrcxz|lodsq|loopeq|loopneq|loopnzq|loopq|loopzq|movsq|rdmsrq|retfq|scasq|stosq|sysexitq|sysretq|wrmsrq|xrstor64|xsave64|xsaveopt64|popfq|pushfq|retnq|retq|aaa|aas|daa|das|into|popa|pusha|salc|setalc|vfmadd132pd|vfmadd132ps|vfmadd132sd|vfmadd132ss|vfmadd213pd|vfmadd213ps|vfmadd213sd|vfmadd213ss|vfmadd231pd|vfmadd231ps|vfmadd231sd|vfmadd231ss|vfmaddsub132pd|vfmaddsub132ps|vfmaddsub213pd|vfmaddsub213ps|vfmaddsub231pd|vfmaddsub231ps|vfmsub132pd|vfmsub132ps|vfmsub132sd|vfmsub132ss|vfmsub213pd|vfmsub213ps|vfmsub213sd|vfmsub213ss|vfmsub231pd|vfmsub231ps|vfmsub231sd|vfmsub231ss|vfmsubadd132pd|vfmsubadd132ps|vfmsubadd213pd|vfmsubadd213ps|vfmsubadd231pd|vfmsubadd231ps|vfnmadd132pd|vfnmadd132ps|vfnmadd132sd|vfnmadd132ss|vfnmadd213pd|vfnmadd213ps|vfnmadd213sd|vfnmadd213ss|vfnmadd231pd|vfnmadd231ps|vfnmadd231sd|vfnmadd231ss|vfnmsub132pd|vfnmsub132ps|vfnmsub132sd|vfnmsub132ss|vfnmsub213pd|vfnmsub213ps|vfnmsub213sd|vfnmsub213ss|vfnmsub231pd|vfnmsub231ps|vfnmsub231sd|vfnmsub231ss|vfmaddpd|vfmaddps|vfmaddsd|vfmaddss|vfmaddsubpd|vfmaddsubps|vfmsubaddpd|vfmsubaddps|vfmsubpd|vfmsubps|vfmsubsd|vfmsubss|vfnmaddpd|vfnmaddps|vfnmaddsd|vfnmaddss|vfnmsubpd|vfnmsubps|vfnmsubsd|vfnmsubss|packssdw|packsswb|packuswb|paddb|paddd|paddq|paddsb|paddsw|paddusb|paddusw|paddw|pand|pandn|pavgb|pavgw|pcmpeqb|pcmpeqd|pcmpeqw|pcmpgtb|pcmpgtd|pcmpgtw|pmaddwd|pmaxsw|pmaxub|pminsw|pminub|pmulhuw|pmulhw|pmullw|pmuludq|por|psadbw|pslld|psllq|psllw|psrad|psraw|psrld|psrlq|psrlw|psubb|psubd|psubq|psubsb|psubsw|psubusb|psubusw|psubw|punpckhbw|punpckhdq|punpckhwd|punpcklbw|punpckldq|punpcklwd|pxor|addpd|addps|addsd|addss|addsubpd|andnpd|andnps|andpd|andps|cvtdq2ps|cvtpd2ps|cvtps2dq|cvtsd2ss|cvtss2sd|cvttpd2dq|divpd|divps|divsd|divss|haddpd|hsubpd|maxpd|maxps|maxsd|maxss|minpd|minps|minsd|minss|movddup|mulpd|mulps|mulsd|mulss|orpd|orps|punpckhqdq|punpcklqdq|rcpps|rcpss|rsqrtps|rsqrtss|shufpd|shufps|sqrtpd|sqrtps|sqrtsd|sqrtss|subpd|subps|subsd|subss|unpckhpd|unpckhps|unpcklpd|unpcklps|xorpd|xorps|aesdec|aesdeclast|aesenc|aesenclast|aesimc|aeskeygenassist|blendpd|blendps|blendvpd|blendvps|dppd|dpps|mpsadbw|packusdw|pblendvb|pblendw|pcmpeqq|pcmpestri|pcmpestrm|pcmpgtq|pcmpistri|pcmpistrm|phminposuw|pmaxsb|pmaxsd|pmaxud|pmaxuw|pminsb|pminsd|pminud|pminuw|pmuldq|pmulld|ptest|roundpd|roundps|roundsd|roundss|sha1msg1|sha1msg2|sha1nexte|sha1rnds4|sha256msg1|sha256msg2|sha256rnds2|pabsb|pabsd|pabsw|phaddd|phaddsw|phaddw|phsubd|phsubsw|phsubw|pmaddubsw|pmulhrsw|pshufb|psignb|psignd|psignw|vaddpd|vaddps|vaddsd|vaddss|vaddsubpd|vaddsubps|vaesdec|vaesdeclast|vaesenc|vaesenclast|vaesimc|vaeskeygenassist|valignd|valignq|vandnpd|vandnps|vandpd|vandps|vblendmpd|vblendmps|vblendpd|vblendps|vblendvpd|vblendvps|vbroadcastf128|vbroadcasti128|vbroadcastsd|vbroadcastss|vcmpeq_ospd|vcmpeq_osps|vcmpeq_ossd|vcmpeq_osss|vcmpeq_uqpd|vcmpeq_uqps|vcmpeq_uqsd|vcmpeq_uqss|vcmpeq_uspd|vcmpeq_usps|vcmpeq_ussd|vcmpeq_usss|vcmpeqpd|vcmpeqps|vcmpeqsd|vcmpeqss|vcmpfalse_ospd|vcmpfalse_osps|vcmpfalse_ossd|vcmpfalse_osss|vcmpfalsepd|vcmpfalseps|vcmpfalsesd|vcmpfalsess|vcmpge_oqpd|vcmpge_oqps|vcmpge_oqsd|vcmpge_oqss|vcmpgepd|vcmpgeps|vcmpgesd|vcmpgess|vcmpgt_oqpd|vcmpgt_oqps|vcmpgt_oqsd|vcmpgt_oqss|vcmpgtpd|vcmpgtps|vcmpgtsd|vcmpgtss|vcmple_oqpd|vcmple_oqps|vcmple_oqsd|vcmple_oqss|vcmplepd|vcmpleps|vcmplesd|vcmpless|vcmplt_oqpd|vcmplt_oqps|vcmplt_oqsd|vcmplt_oqss|vcmpltpd|vcmpltps|vcmpltsd|vcmpltss|vcmpneq_oqpd|vcmpneq_oqps|vcmpneq_oqsd|vcmpneq_oqss|vcmpneq_ospd|vcmpneq_osps|vcmpneq_ossd|vcmpneq_osss|vcmpneq_uspd|vcmpneq_usps|vcmpneq_ussd|vcmpneq_usss|vcmpneqpd|vcmpneqps|vcmpneqsd|vcmpneqss|vcmpnge_uqpd|vcmpnge_uqps|vcmpnge_uqsd|vcmpnge_uqss|vcmpngepd|vcmpngeps|vcmpngesd|vcmpngess|vcmpngt_uqpd|vcmpngt_uqps|vcmpngt_uqsd|vcmpngt_uqss|vcmpngtpd|vcmpngtps|vcmpngtsd|vcmpngtss|vcmpnle_uqpd|vcmpnle_uqps|vcmpnle_uqsd|vcmpnle_uqss|vcmpnlepd|vcmpnleps|vcmpnlesd|vcmpnless|vcmpnlt_uqpd|vcmpnlt_uqps|vcmpnlt_uqsd|vcmpnlt_uqss|vcmpnltpd|vcmpnltps|vcmpnltsd|vcmpnltss|vcmpord_spd|vcmpord_sps|vcmpord_ssd|vcmpord_sss|vcmpordpd|vcmpordps|vcmpordsd|vcmpordss|vcmppd|vcmpps|vcmpsd|vcmpss|vcmptrue_uspd|vcmptrue_usps|vcmptrue_ussd|vcmptrue_usss|vcmptruepd|vcmptrueps|vcmptruesd|vcmptruess|vcmpunord_spd|vcmpunord_sps|vcmpunord_ssd|vcmpunord_sss|vcmpunordpd|vcmpunordps|vcmpunordsd|vcmpunordss|vcomisd|vcomiss|vcompresspd|vcompressps|vcvtdq2pd|vcvtdq2ps|vcvtpd2dq|vcvtpd2ps|vcvtpd2qq|vcvtpd2udq|vcvtpd2uqq|vcvtph2ps|vcvtps2dq|vcvtps2pd|vcvtps2ph|vcvtps2qq|vcvtps2udq|vcvtps2uqq|vcvtqq2pd|vcvtqq2ps|vcvtsd2si|vcvtsd2ss|vcvtsd2usi|vcvtsi2sd|vcvtsi2ss|vcvtss2sd|vcvtss2si|vcvtss2usi|vcvttpd2dq|vcvttpd2qq|vcvttpd2udq|vcvttpd2uqq|vcvttps2dq|vcvttps2qq|vcvttps2udq|vcvttps2uqq|vcvttsd2si|vcvttsd2usi|vcvttss2si|vcvttss2usi|vcvtudq2pd|vcvtudq2ps|vcvtuqq2pd|vcvtuqq2ps|vcvtusi2sd|vcvtusi2ss|vdbpsadbw|vdivpd|vdivps|vdivsd|vdivss|vdppd|vdpps|vexpandpd|vexpandps|vextractf128|vextracti128|vextractps|vhaddpd|vhaddps|vhsubpd|vhsubps|vinsertf128|vinserti128|vinsertps|vlddqu|vmaskmovdqu|vmaskmovpd|vmaskmovps|vmaxpd|vmaxps|vmaxsd|vmaxss|vminpd|vminps|vminsd|vminss|vmovapd|vmovaps|vmovd|vmovddup|vmovdqa|vmovdqu|vmovhlps|vmovhpd|vmovhps|vmovlhps|vmovlpd|vmovlps|vmovmskpd|vmovmskps|vmovntdq|vmovntdqa|vmovntpd|vmovntps|vmovq|vmovsd|vmovshdup|vmovsldup|vmovss|vmovupd|vmovups|vmpsadbw|vmulpd|vmulps|vmulsd|vmulss|vorpd|vorps|vpabsb|vpabsd|vpabsq|vpabsw|vpackssdw|vpacksswb|vpackusdw|vpackuswb|vpaddb|vpaddd|vpaddq|vpaddsb|vpaddsw|vpaddusb|vpaddusw|vpaddw|vpalignr|vpand|vpandd|vpandn|vpandnd|vpandnq|vpandq|vpavgb|vpavgw|vpblendd|vpblendmb|vpblendmd|vpblendmq|vpblendmw|vpblendvb|vpblendw|vpbroadcastb|vpbroadcastd|vpbroadcastq|vpbroadcastw|vpclmulhqhdq|vpclmulhqlqdq|vpclmullqhdq|vpclmullqlqdq|vpclmulqdq|vpcmpeqb|vpcmpeqd|vpcmpeqq|vpcmpeqw|vpcmpestri|vpcmpestrm|vpcmpgtb|vpcmpgtd|vpcmpgtq|vpcmpgtw|vpcmpistri|vpcmpistrm|vpcompressd|vpcompressq|vpconflictd|vpconflictq|vperm2f128|vperm2i128|vpermb|vpermd|vpermi2b|vpermi2d|vpermi2pd|vpermi2ps|vpermi2q|vpermi2w|vpermilpd|vpermilps|vpermpd|vpermps|vpermq|vpermt2b|vpermt2d|vpermt2pd|vpermt2ps|vpermt2q|vpermt2w|vpermw|vpexpandd|vpexpandq|vpextrb|vpextrd|vpextrq|vpextrw|vphaddd|vphaddsw|vphaddw|vphminposuw|vphsubd|vphsubsw|vphsubw|vpinsrb|vpinsrd|vpinsrq|vpinsrw|vplzcntd|vplzcntq|vpmadd52huq|vpmadd52luq|vpmaddubsw|vpmaddwd|vpmaskmovd|vpmaskmovq|vpmaxsb|vpmaxsd|vpmaxsq|vpmaxsw|vpmaxub|vpmaxud|vpmaxuq|vpmaxuw|vpminsb|vpminsd|vpminsq|vpminsw|vpminub|vpminud|vpminuq|vpminuw|vpmovmskb|vpmovsxbd|vpmovsxbq|vpmovsxbw|vpmovsxdq|vpmovsxwd|vpmovsxwq|vpmovzxbd|vpmovzxbq|vpmovzxbw|vpmovzxdq|vpmovzxwd|vpmovzxwq|vpmuldq|vpmulhrsw|vpmulhuw|vpmulhw|vpmulld|vpmullq|vpmullw|vpmultishiftqb|vpmuludq|vpor|vpord|vporq|vprolvd|vprolvq|vprorvd|vprorvq|vpsadbw|vpshufb|vpshufd|vpshufhw|vpshuflw|vpsignb|vpsignd|vpsignw|vpslld|vpslldq|vpsllq|vpsllvd|vpsllvq|vpsllvw|vpsllw|vpsrad|vpsraq|vpsravd|vpsravq|vpsravw|vpsraw|vpsrld|vpsrldq|vpsrlq|vpsrlvd|vpsrlvq|vpsrlvw|vpsrlw|vpsubb|vpsubd|vpsubq|vpsubsb|vpsubsw|vpsubusb|vpsubusw|vpsubw|vpternlogd|vpternlogq|vptest|vpunpckhbw|vpunpckhdq|vpunpckhqdq|vpunpckhwd|vpunpcklbw|vpunpckldq|vpunpcklqdq|vpunpcklwd|vpxor|vpxord|vpxorq|vrcpps|vrcpss|vroundpd|vroundps|vroundsd|vroundss|vrsqrtps|vrsqrtss|vshufpd|vshufps|vsqrtpd|vsqrtps|vsqrtsd|vsqrtss|vsubpd|vsubps|vsubsd|vsubss|vtestpd|vtestps|vucomisd|vucomiss|vunpckhpd|vunpckhps|vunpcklpd|vunpcklps|vxorpd|vxorps|vbroadcastf32x2|vbroadcastf32x4|vbroadcastf32x8|vbroadcastf64x2|vbroadcastf64x4|vbroadcasti32x2|vbroadcasti32x4|vbroadcasti32x8|vbroadcasti64x2|vbroadcasti64x4|vexp2pd|vexp2ps|vextractf32x4|vextractf32x8|vextractf64x2|vextractf64x4|vextracti32x4|vextracti32x8|vextracti64x2|vextracti64x4|vfixupimmpd|vfixupimmps|vfixupimmsd|vfixupimmss|vfpclasspd|vfpclassps|vfpclasssd|vfpclassss|vgetexppd|vgetexpps|vgetexpsd|vgetexpss|vgetmantpd|vgetmantps|vgetmantsd|vgetmantss|vinsertf32x4|vinsertf32x8|vinsertf64x2|vinsertf64x4|vinserti32x4|vinserti32x8|vinserti64x2|vinserti64x4|vmovdqa32|vmovdqa64|vmovdqu16|vmovdqu32|vmovdqu64|vmovdqu8|vpbroadcastmb2q|vpbroadcastmw2d|vpcmpb|vpcmpd|vpcmpleb|vpcmpled|vpcmpleq|vpcmpleub|vpcmpleud|vpcmpleuq|vpcmpleuw|vpcmplew|vpcmpltb|vpcmpltd|vpcmpltq|vpcmpltub|vpcmpltud|vpcmpltuq|vpcmpltuw|vpcmpltw|vpcmpneqb|vpcmpneqd|vpcmpneqq|vpcmpnequb|vpcmpnequd|vpcmpnequq|vpcmpnequw|vpcmpneqw|vpcmpnleb|vpcmpnled|vpcmpnleq|vpcmpnleub|vpcmpnleud|vpcmpnleuq|vpcmpnleuw|vpcmpnlew|vpcmpnltb|vpcmpnltd|vpcmpnltq|vpcmpnltub|vpcmpnltud|vpcmpnltuq|vpcmpnltuw|vpcmpnltw|vpcmpq|vpcmpub|vpcmpud|vpcmpuq|vpcmpuw|vpcmpw|vpmovb2m|vpmovd2m|vpmovdb|vpmovdw|vpmovm2b|vpmovm2d|vpmovm2q|vpmovm2w|vpmovq2m|vpmovqb|vpmovqd|vpmovqw|vpmovsdb|vpmovsdw|vpmovsqb|vpmovsqd|vpmovsqw|vpmovswb|vpmovusdb|vpmovusdw|vpmovusqb|vpmovusqd|vpmovusqw|vpmovuswb|vpmovw2m|vpmovwb|vprold|vprolq|vprord|vprorq|vptestmb|vptestmd|vptestmq|vptestmw|vptestnmb|vptestnmd|vptestnmq|vptestnmw|vrangepd|vrangeps|vrangesd|vrangess|vrcp14pd|vrcp14ps|vrcp14sd|vrcp14ss|vrcp28pd|vrcp28ps|vrcp28sd|vrcp28ss|vreducepd|vreduceps|vreducesd|vreducess|vrndscalepd|vrndscaleps|vrndscalesd|vrndscaless|vrsqrt14pd|vrsqrt14ps|vrsqrt14sd|vrsqrt14ss|vrsqrt28pd|vrsqrt28ps|vrsqrt28sd|vrsqrt28ss|vscalefpd|vscalefps|vscalefsd|vscalefss|vshuff32x4|vshuff64x2|vshufi32x4|vshufi64x2|vfrczpd|vfrczps|vfrczsd|vfrczss|vpcomb|vpcomd|vpcomeqb|vpcomeqd|vpcomeqq|vpcomequb|vpcomequd|vpcomequq|vpcomequw|vpcomeqw|vpcomfalseb|vpcomfalsed|vpcomfalseq|vpcomfalseub|vpcomfalseud|vpcomfalseuq|vpcomfalseuw|vpcomfalsew|vpcomgeb|vpcomged|vpcomgeq|vpcomgeub|vpcomgeud|vpcomgeuq|vpcomgeuw|vpcomgew|vpcomgtb|vpcomgtd|vpcomgtq|vpcomgtub|vpcomgtud|vpcomgtuq|vpcomgtuw|vpcomgtw|vpcomleb|vpcomled|vpcomleq|vpcomleub|vpcomleud|vpcomleuq|vpcomleuw|vpcomlew|vpcomltb|vpcomltd|vpcomltq|vpcomltub|vpcomltud|vpcomltuq|vpcomltuw|vpcomltw|vpcomneqb|vpcomneqd|vpcomneqq|vpcomnequb|vpcomnequd|vpcomnequq|vpcomnequw|vpcomneqw|vpcomq|vpcomtrueb|vpcomtrued|vpcomtrueq|vpcomtrueub|vpcomtrueud|vpcomtrueuq|vpcomtrueuw|vpcomtruew|vpcomub|vpcomud|vpcomuq|vpcomuw|vpcomw|vphaddbd|vphaddbq|vphaddbw|vphadddq|vphaddubd|vphaddubq|vphaddubw|vphaddudq|vphadduwd|vphadduwq|vphaddwd|vphaddwq|vphsubbw|vphsubdq|vphsubwd|vpmacsdd|vpmacsdqh|vpmacsdql|vpmacssdd|vpmacssdqh|vpmacssdql|vpmacsswd|vpmacssww|vpmacswd|vpmacsww|vpmadcsswd|vpmadcswd|vpperm|vprotb|vprotd|vprotq|vprotw|vpshab|vpshad|vpshaq|vpshaw|vpshlb|vpshld|vpshlq|vpshlw|pavgusb|pf2id|pf2iw|pfacc|pfadd|pfcmpeq|pfcmpge|pfcmpgt|pfmax|pfmin|pfmul|pfnacc|pfpnacc|pfrcp|pfrcpit1|pfrcpit2|pfrsqit1|pfrsqrt|pfsub|pfsubr|pi2fd|pi2fw|pmulhrw|pswapd|invept|invpcid|invvpid|vmclear|vmptrld|vmptrst|vmread|vmwrite|vmxon)\b/i,
    register: { pattern: /\b(?:eip|rip|spl|sp|esp|rsp|bpl|bp|ebp|rbp|sil|si|esi|rsi|dil|di|edi|rdi|al|ah|bl|bh|cl|ch|dl|dh|r8b|r9b|r10b|r11b|r12b|r13b|r14b|r15b|r8l|r9l|r10l|r11l|r12l|r13l|r14l|r15l|ax|bx|cx|dx|r8w|r9w|r10w|r11w|r12w|r13w|r14w|r15w|r8d|r9d|r10d|r11d|r12d|r13d|r14d|r15d|eax|ebx|ecx|edx|rax|rbx|rcx|rdx|r8|r9|r10|r11|r12|r13|r14|r15|cs|ds|es|fs|gs|ss|st|st0|st1|st2|st3|st4|st5|st6|st7|mm0|mm1|mm2|mm3|mm4|mm5|mm6|mm7|xmm0|xmm1|xmm2|xmm3|xmm4|xmm5|xmm6|xmm7|xmm8|xmm9|xmm10|xmm11|xmm12|xmm13|xmm14|xmm15|xmm16|xmm17|xmm18|xmm19|xmm20|xmm21|xmm22|xmm23|xmm24|xmm25|xmm26|xmm27|xmm28|xmm29|xmm30|xmm31|ymm0|ymm1|ymm2|ymm3|ymm4|ymm5|ymm6|ymm7|ymm8|ymm9|ymm10|ymm11|ymm12|ymm13|ymm14|ymm15|ymm16|ymm17|ymm18|ymm19|ymm20|ymm21|ymm22|ymm23|ymm24|ymm25|ymm26|ymm27|ymm28|ymm29|ymm30|ymm31|zmm0|zmm1|zmm2|zmm3|zmm4|zmm5|zmm6|zmm7|zmm8|zmm9|zmm10|zmm11|zmm12|zmm13|zmm14|zmm15|zmm16|zmm17|zmm18|zmm19|zmm20|zmm21|zmm22|zmm23|zmm24|zmm25|zmm26|zmm27|zmm28|zmm29|zmm30|zmm31|k0|k1|k2|k3|k4|k5|k6|k7|bnd0|bnd1|bnd2|bnd3|cr0|cr1|cr2|cr3|cr4|cr8|cr5|cr6|cr7|cr9|cr10|cr11|cr12|cr13|cr14|cr15|dr0|dr1|dr2|dr3|dr8|dr4|dr5|dr6|dr7|dr9|dr10|dr11|dr12|dr13|dr14|dr15|tr3|tr4|tr5|tr6|tr7|tr0|tr1|tr2)\b/, alias: "variable" },
    number: /(?:(?<!\$)\b0x|\b0X|(?<!\w|\$)\$)[0-9a-fA-F_']+\b(?!\$)|\b0[0-9a-fA-F_']+[hH]\b|\b[0-7_']+[oOqQ]\b|\b[01_']+[bB]\b|\b[0-9_']+f\b|\b[0-9_']+\.[0-9_']+\b|\b[0-9_']+[eE][0-9_']+\b|(?<!\$)\b[0-9_']+[dD]?\b(?!\$)/,
    operator: /[\+\-\/\*=<>\(\)\[\\\]\{\}\:\,\|\&\~\#\\%`\!]|(?<!\w|\$)\${1,2}(?!\w|\$)/
};
