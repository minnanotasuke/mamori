(() => {
  const STORAGE_KEY = 'mamori_lang';
  const DEFAULT_LANG = 'ko';
  const SUPPORTED = ['ko', 'ja', 'en', 'zh'];

  const T = {
    ko: {
      kicker: 'AI 전화 코칭',
      headline1: '일본어 전화가 무서울 때,',
      headline2: 'AI가 옆에서 도와줍니다',
      description: '상대방 말을 실시간으로 텍스트로 보여주고, 다음에 할 말을 제안합니다. 가스 개통, 병원 예약, 배달 문의까지.',
      featureTitle: '이렇게 작동합니다',
      step1Title: '전화 목적 입력',
      step1Desc: '가스 개통, 병원 예약 등 목적을 입력하면 AI가 상황에 맞는 코칭을 준비합니다',
      step2Title: 'AI가 전화를 걸어줍니다',
      step2Desc: '번호를 입력하면 브라우저에서 바로 전화가 연결됩니다. 이어폰 사용을 권장합니다.',
      step3Title: '실시간 코칭',
      step3Desc: '상대방 말이 텍스트로 표시되고, AI가 다음에 할 말을 제안합니다',
      ctaButton: '지금 시작하기 →',
      ctaSub: '무료. 회원가입 불필요.',
      whyLabel: '왜 Mamori인가',
      why1Title: '언어 장벽 해소',
      why1Desc: '일본어를 못해도 필수적인 전화를 처리할 수 있습니다',
      why2Title: '실시간 코칭',
      why2Desc: '통역이 아닌 코칭. 내가 직접 말하면서 AI가 도와줍니다',
      why3Title: '프라이버시',
      why3Desc: '녹음 없음. 데이터 저장 없음. 안심하고 사용하세요',
      useCasesLabel: '이런 상황에서 쓰세요',
      useCase1: '🏥 병원 예약',
      useCase2: '🔥 가스/전기 개통',
      useCase3: '📦 배달 재배달',
      useCase4: '🏠 부동산 문의',
      useCase5: '📱 인터넷 계약',
      useCase6: '🏦 은행 문의',
      footer: 'Mamori - 일본에서 살아가는 외국인을 위한 AI 전화 코칭',
    },
    ja: {
      kicker: 'AI電話コーチング',
      headline1: '日本語の電話が怖いとき、',
      headline2: 'AIがサポートします',
      description: '相手の話をリアルタイムでテキスト表示し、次に言うことを提案します。ガス開通、病院予約、配達の問い合わせまで。',
      featureTitle: 'こう使います',
      step1Title: '電話の目的を入力',
      step1Desc: 'ガス開通、病院予約など目的を入力すると、AIが状況に合ったコーチングを準備します',
      step2Title: 'AIが電話をかけます',
      step2Desc: '番号を入力すると、ブラウザからそのまま電話がつながります。イヤホンの使用をおすすめします。',
      step3Title: 'リアルタイムコーチング',
      step3Desc: '相手の話がテキストで表示され、AIが次に言うことを提案します',
      ctaButton: '今すぐ始める →',
      ctaSub: '無料。会員登録不要。',
      whyLabel: 'なぜMamoriか',
      why1Title: '言語の壁を解消',
      why1Desc: '日本語ができなくても必要な電話を処理できます',
      why2Title: 'リアルタイムコーチング',
      why2Desc: '通訳ではなくコーチング。自分で話しながらAIがサポートします',
      why3Title: 'プライバシー',
      why3Desc: '録音なし。データ保存なし。安心してご利用ください',
      useCasesLabel: 'こんな場面で使えます',
      useCase1: '🏥 病院予約',
      useCase2: '🔥 ガス・電気の開通',
      useCase3: '📦 再配達の依頼',
      useCase4: '🏠 不動産の問い合わせ',
      useCase5: '📱 インターネット契約',
      useCase6: '🏦 銀行の問い合わせ',
      footer: 'Mamori - 日本で暮らす外国人のためのAI電話コーチング',
    },
    en: {
      kicker: 'AI Phone Coaching',
      headline1: 'Scared of calling in Japanese?',
      headline2: 'AI has your back',
      description: "See what they say as text in real time, and get suggestions for your reply. Gas setup, hospital booking, delivery inquiries and more.",
      featureTitle: 'How it works',
      step1Title: 'Enter your call purpose',
      step1Desc: 'Type your goal (gas setup, hospital booking, etc.) and AI prepares situation-specific coaching',
      step2Title: 'AI makes the call',
      step2Desc: 'Enter the number and the call connects right from your browser. Earphones recommended.',
      step3Title: 'Real-time coaching',
      step3Desc: "Their words appear as text, and AI suggests what to say next",
      ctaButton: 'Get started now →',
      ctaSub: 'Free. No sign-up required.',
      whyLabel: 'Why Mamori',
      why1Title: 'Break Language Barriers',
      why1Desc: 'Handle essential phone calls even without Japanese skills',
      why2Title: 'Real-time Coaching',
      why2Desc: "Not an interpreter. You speak while AI coaches you",
      why3Title: 'Privacy First',
      why3Desc: 'No recording. No data stored. Use with peace of mind',
      useCasesLabel: 'Use it for',
      useCase1: '🏥 Hospital booking',
      useCase2: '🔥 Gas/electricity setup',
      useCase3: '📦 Delivery redelivery',
      useCase4: '🏠 Real estate inquiries',
      useCase5: '📱 Internet contract',
      useCase6: '🏦 Bank inquiries',
      footer: 'Mamori - AI phone coaching for foreigners living in Japan',
    },
    zh: {
      kicker: 'AI电话辅导',
      headline1: '害怕打日语电话？',
      headline2: 'AI来帮你',
      description: '实时将对方的话显示为文字，并建议你下一句该说什么。开通燃气、预约医院、快递查询都能用。',
      featureTitle: '使用方法',
      step1Title: '输入电话目的',
      step1Desc: '输入开通燃气、预约医院等目的，AI会准备针对性的辅导',
      step2Title: 'AI帮你打电话',
      step2Desc: '输入号码后，直接从浏览器拨打电话。建议使用耳机。',
      step3Title: '实时辅导',
      step3Desc: '对方说的话会显示为文字，AI会建议你接下来说什么',
      ctaButton: '立即开始 →',
      ctaSub: '免费。无需注册。',
      whyLabel: '为什么选择Mamori',
      why1Title: '打破语言障碍',
      why1Desc: '不会日语也能处理必要的电话',
      why2Title: '实时辅导',
      why2Desc: '不是翻译，是辅导。你自己说话，AI在旁边帮你',
      why3Title: '隐私保护',
      why3Desc: '无录音，无数据存储，放心使用',
      useCasesLabel: '适用场景',
      useCase1: '🏥 预约医院',
      useCase2: '🔥 开通燃气/电力',
      useCase3: '📦 快递再投递',
      useCase4: '🏠 房产咨询',
      useCase5: '📱 网络合同',
      useCase6: '🏦 银行咨询',
      footer: 'Mamori - 为在日外国人打造的AI电话辅导',
    },
  };

  function norm(lang) {
    const c = String(lang || '').toLowerCase().split('-')[0];
    return SUPPORTED.includes(c) ? c : DEFAULT_LANG;
  }

  function getLang() {
    try { const s = localStorage.getItem(STORAGE_KEY); if (s) return norm(s); } catch {}
    return DEFAULT_LANG;
  }

  function setLang(lang) {
    const l = norm(lang);
    try { localStorage.setItem(STORAGE_KEY, l); } catch {}
    document.documentElement.lang = l;
    return l;
  }

  function t(key, lang) {
    const l = norm(lang || getLang());
    return (T[l] && T[l][key]) || (T[DEFAULT_LANG] && T[DEFAULT_LANG][key]) || key;
  }

  function applyAll(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.getAttribute('data-i18n'), lang);
    });
    document.title = 'Mamori - ' + t('kicker', lang);
  }

  let currentLang = setLang(getLang());
  applyAll(currentLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.dataset.lang === currentLang) btn.classList.add('active');
    else btn.classList.remove('active');

    btn.addEventListener('click', () => {
      currentLang = setLang(btn.dataset.lang);
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === currentLang));
      applyAll(currentLang);
    });
  });
})();
