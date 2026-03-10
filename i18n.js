(() => {
  const STORAGE_KEY = 'mamori_lang';
  const DEFAULT_LANG = 'ko';
  const SUPPORTED = ['ko', 'ja', 'en', 'zh'];

  const T = {
    ko: {
      kicker: '일본 생활 방어 도구',
      headline1: '일본에서 살아남기,',
      headline2: '이제 AI가 도와줍니다',
      description: '전화가 무서워도, 청구서가 이상해도, 계약서를 못 읽어도. Mamori가 옆에서 하나씩 해결합니다.',
      toolsLabel: '도구 모음',
      statusLive: '사용 가능',
      statusSoon: '개발 중',
      tool1Name: '전화 코칭',
      tool1Desc: '일본어 전화를 AI가 실시간으로 옆에서 도와줍니다. 상대방 말을 텍스트로 보여주고, 다음에 할 말을 제안합니다.',
      tool2Name: '퇴거비 체커',
      tool2Desc: '퇴거 시 청구서 사진을 찍으면 부당한 항목을 판별합니다. 국토교통성 가이드라인 기반.',
      tool3Name: '계약서 체커',
      tool3Desc: '임대 계약서의 불리한 조항을 자동으로 찾아냅니다.',
      tool4Name: '해지 메일 생성기',
      tool4Desc: 'NHK, 불필요한 구독 서비스 등을 해지하는 일본어 비즈니스 메일을 자동 생성합니다.',
      tagRealtime: '실시간',
      tagAI: 'AI 코칭',
      tagVoice: '음성 인식',
      tagPhoto: '사진 분석',
      tagLaw: '법적 근거',
      tagContract: '계약 검토',
      tagMail: '메일 생성',
      tagBusiness: '비즈니스 일본어',
      whyLabel: '왜 Mamori인가',
      why1Title: '언어 장벽 해소',
      why1Desc: '일본어를 못해도 필수적인 일을 처리할 수 있습니다',
      why2Title: '부당 청구 방어',
      why2Desc: '법적 근거를 기반으로 불합리한 비용을 걸러냅니다',
      why3Title: '프라이버시',
      why3Desc: '녹음 없음. 데이터 저장 없음. 안심하고 사용하세요',
      footer: 'Mamori - 일본에서 살아가는 외국인을 위한 AI 도구',
    },
    ja: {
      kicker: '日本生活の防衛ツール',
      headline1: '日本での暮らし、',
      headline2: 'AIがサポートします',
      description: '電話が怖くても、請求書がおかしくても、契約書が読めなくても。Mamoriがひとつずつ解決します。',
      toolsLabel: 'ツール一覧',
      statusLive: '利用可能',
      statusSoon: '開発中',
      tool1Name: '電話コーチング',
      tool1Desc: '日本語の電話をAIがリアルタイムでサポート。相手の話をテキストで表示し、次に言うことを提案します。',
      tool2Name: '退去費チェッカー',
      tool2Desc: '退去時の請求書を撮影すると、不当な項目を判別します。国土交通省ガイドライン準拠。',
      tool3Name: '契約書チェッカー',
      tool3Desc: '賃貸契約書の不利な条項を自動で見つけます。',
      tool4Name: '解約メール作成',
      tool4Desc: 'NHK、不要なサブスクなどを解約するビジネスメールを自動生成します。',
      tagRealtime: 'リアルタイム',
      tagAI: 'AIコーチ',
      tagVoice: '音声認識',
      tagPhoto: '写真分析',
      tagLaw: '法的根拠',
      tagContract: '契約レビュー',
      tagMail: 'メール作成',
      tagBusiness: 'ビジネス日本語',
      whyLabel: 'なぜMamoriか',
      why1Title: '言語の壁を解消',
      why1Desc: '日本語ができなくても必要なことを処理できます',
      why2Title: '不当請求を防御',
      why2Desc: '法的根拠に基づき、不合理な費用をチェックします',
      why3Title: 'プライバシー',
      why3Desc: '録音なし。データ保存なし。安心してご利用ください',
      footer: 'Mamori - 日本で暮らす外国人のためのAIツール',
    },
    en: {
      kicker: 'Japan Life Defense Tools',
      headline1: 'Surviving in Japan,',
      headline2: 'AI has your back',
      description: "Scared of phone calls? Suspicious bills? Can't read contracts? Mamori solves them one by one.",
      toolsLabel: 'Tools',
      statusLive: 'Available',
      statusSoon: 'Coming Soon',
      tool1Name: 'Phone Coaching',
      tool1Desc: 'AI assists your Japanese phone calls in real time. See what they say as text and get suggestions for your reply.',
      tool2Name: 'Move-out Cost Checker',
      tool2Desc: 'Take a photo of your move-out bill to identify unfair charges. Based on MLIT guidelines.',
      tool3Name: 'Contract Checker',
      tool3Desc: 'Automatically find unfavorable clauses in your rental contract.',
      tool4Name: 'Cancellation Email Generator',
      tool4Desc: 'Auto-generate Japanese business emails to cancel NHK, unnecessary subscriptions, and more.',
      tagRealtime: 'Real-time',
      tagAI: 'AI Coach',
      tagVoice: 'Speech Recognition',
      tagPhoto: 'Photo Analysis',
      tagLaw: 'Legal Basis',
      tagContract: 'Contract Review',
      tagMail: 'Email Generation',
      tagBusiness: 'Business Japanese',
      whyLabel: 'Why Mamori',
      why1Title: 'Break Language Barriers',
      why1Desc: 'Handle essential tasks even without Japanese skills',
      why2Title: 'Defend Against Unfair Charges',
      why2Desc: 'Filter out unreasonable costs based on legal grounds',
      why3Title: 'Privacy First',
      why3Desc: 'No recording. No data stored. Use with peace of mind',
      footer: 'Mamori - AI tools for foreigners living in Japan',
    },
    zh: {
      kicker: '日本生活防御工具',
      headline1: '在日本生活，',
      headline2: 'AI来帮你',
      description: '害怕打电话？账单有问题？看不懂合同？Mamori一个一个帮你解决。',
      toolsLabel: '工具集',
      statusLive: '可使用',
      statusSoon: '开发中',
      tool1Name: '电话辅导',
      tool1Desc: 'AI实时辅助你的日语电话。将对方的话显示为文字，并建议你下一句该说什么。',
      tool2Name: '退房费检查器',
      tool2Desc: '拍摄退房账单照片，识别不合理的收费项目。基于国土交通省指南。',
      tool3Name: '合同检查器',
      tool3Desc: '自动发现租房合同中的不利条款。',
      tool4Name: '退订邮件生成器',
      tool4Desc: '自动生成日语商务邮件，用于取消NHK、不必要的订阅服务等。',
      tagRealtime: '实时',
      tagAI: 'AI辅导',
      tagVoice: '语音识别',
      tagPhoto: '照片分析',
      tagLaw: '法律依据',
      tagContract: '合同审查',
      tagMail: '邮件生成',
      tagBusiness: '商务日语',
      whyLabel: '为什么选择Mamori',
      why1Title: '打破语言障碍',
      why1Desc: '不会日语也能处理必要的事务',
      why2Title: '防御不合理收费',
      why2Desc: '基于法律依据筛查不合理的费用',
      why3Title: '隐私保护',
      why3Desc: '无录音，无数据存储，放心使用',
      footer: 'Mamori - 为在日外国人打造的AI工具',
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
