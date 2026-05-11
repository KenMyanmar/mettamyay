// Mettamyay bilingual dictionary.
// Burmese strings come VERBATIM from the founding charter (05/01/2026).
// Romanisations of monks/lay supporters are isolated here so a single edit
// fixes every component once Sayadaw U Tay confirms the canonical spellings.

export type Lang = "en" | "my";

export type Entry = { en: string; my: string };

export const dict = {
  // ── Nav ────────────────────────────────────────────────────────────
  "nav.movement":   { en: "The Movement",  my: "လှုပ်ရှားမှု" },
  "nav.howItWorks": { en: "How It Works",  my: "လုပ်ဆောင်ပုံ" },
  "nav.pathways":   { en: "Pathways",      my: "လမ်းကြောင်းများ" },
  "nav.vision":     { en: "Vision",        my: "မျှော်မှန်းချက်" },
  "nav.join":       { en: "Join Mettamyay", my: "ပါဝင်ပါ" },
  "nav.langEN":     { en: "EN", my: "EN" },
  "nav.langMY":     { en: "MY", my: "မြန်မာ" },

  // ── Hero ───────────────────────────────────────────────────────────
  // Locked tagline pair (11 May 2026 brief). Poetry lines (hero.line*) are
  // preserved and reused as the Vision section refrain — do not delete.
  "hero.eyebrow": { en: "Baka Sustainability Initiative · Natural-Building Pillar", my: "မြန်မာ့ဘက ရေရှည်တည်တံ့မှု အစီအစဉ် · သဘာဝဆောက်လုပ်ရေး မဏ္ဍိုင်" },
  "hero.brand":   { en: "Mettamyay", my: "မေတ္တာမြေ" },
  "hero.headline1": { en: "We don't just build",      my: "အဆောက်အအုံတွေ" },
  "hero.headline2": { en: "buildings.",                my: "ဆောက်ရုံမက —" },
  "hero.headline3": { en: "We build",                  my: "ဆောက်တတ်သူတွေကိုလည်း" },
  "hero.headline4": { en: "builders.",                 my: "မွေးထုတ်ပါသည်။" },
  "hero.sub": {
    en: "Mettamyay is the natural-building and livelihood pillar of the Baka Sustainability Initiative — teaching people to build, teach, earn, and replicate.",
    my: "မေတ္တာမြေသည် မြန်မာ့ဘက ရေရှည်တည်တံ့မှု အစီအစဉ်၏ သဘာဝဆောက်လုပ်ရေးနှင့် အသက်မွေးဝမ်းကျောင်း မဏ္ဍိုင်ဖြစ်သည်။ မြေ၊ ဒေသခံ ပစ္စည်းများ၊ သဘာဝနည်းလမ်းများဖြင့် တည်ဆောက်တတ်ရန် သင်ပေး၊ သင်ပြ၊ ဝင်ငွေရှာ၊ ပြန့်ပွားနိုင်စေသော လှုပ်ရှားမှု ဖြစ်ပါသည်။",
  },
  "hero.cta1":  { en: "Explore the Movement", my: "လှုပ်ရှားမှုကို ရှာဖွေပါ" },
  "hero.cta2":  { en: "Find Your Path",       my: "သင့်လမ်းကြောင်းကို ရှာပါ" },
  "hero.scroll":{ en: "Scroll",               my: "ဆက်ကြည့်ပါ" },

  // Refrain (originally the hero three-line poetry — relocated to Vision strap)
  "refrain.line1a":  { en: "Build with",  my: "မြေနဲ့" },
  "refrain.line1b":  { en: "earth.",      my: "တည်ဆောက်ပါ။" },
  "refrain.line2a":  { en: "Grow with",   my: "ရည်ရွယ်ချက်နဲ့" },
  "refrain.line2b":  { en: "purpose.",    my: "ကြီးထွားပါ။" },
  "refrain.line3a":  { en: "Live with",   my: "ပျော်ရွှင်စွာ" },
  "refrain.line3b":  { en: "joy.",        my: "နေထိုင်ပါ။" },

  // ── Manifesto ──────────────────────────────────────────────────────
  "man.eyebrow": { en: "Our Belief", my: "ကျွန်ုပ်တို့၏ ယုံကြည်ချက်" },
  "man.title1":  { en: "We don't just build buildings.", my: "ကျွန်ုပ်တို့သည် အဆောက်အအုံများကိုသာ မတည်ဆောက်ပါ။" },
  "man.title2a": { en: "We build the", my: "ထိုအဆောက်အအုံများကို တည်ဆောက်မည့်" },
  "man.title2b": { en: "builders",     my: "ဆောက်တတ်သူ" },
  "man.title2c": { en: "who build them.", my: "များကိုပါ မွေးထုတ်ပါသည်။" },
  "man.body": {
    en: "Mettamyay is a self-replicating natural-building education and livelihood movement, operating under the Baka Sustainability Initiative. Led by the wisdom of monks and the hands of skilled builders, we teach people to build, teach the next cohort, earn from their craft, and replicate the knowledge in their own communities.",
    my: "မေတ္တာမြေသည် မြန်မာ့ဘက ရေရှည်တည်တံ့မှု အစီအစဉ်အောက်တွင် ပြန့်ပွားနိုင်သော သဘာဝဆောက်လုပ်ရေး ပညာရေးနှင့် အသက်မွေး လှုပ်ရှားမှုဖြစ်သည်။ ဆရာတော်များ၏ ပညာဉာဏ်နှင့် ကျွမ်းကျင်သော တည်ဆောက်သူများ၏ လက်ဖြင့် လမ်းညွှန်ကာ — တည်ဆောက်တတ်ရန် သင်ပေး၊ နောက်တစ်ဆင့်ကို ပြန်လည် သင်ကြားပေး၊ မိမိအတတ်ဖြင့် ဝင်ငွေရှာ၊ မိမိ၏ ရပ်ရွာတွင် ပြန်လည် ပြန့်ပွားနိုင်အောင် လုပ်ဆောင်သည်။",
  },
  "man.quote": {
    en: "From the earth beneath our feet, we find not only shelter, but the very ground of our becoming.",
    my: "ခြေဖျားအောက်က မြေကြီးထဲမှ ငါတို့သည် နေထိုင်ရာသာမက ငါတို့ ဖြစ်တည်မှု၏ အရင်းခံ မြေကိုပါ ရှာတွေ့ကြသည်။",
  },
  "man.quoteAuthor": { en: "Sayadaw U Tay — Head Sayadaw, Mettamyay", my: "ဆရာတော် ဦးတေ — အကြီးအကဲ ဆရာတော်၊ မေတ္တာမြေ" },

  // ── What is Baka? (explainer for non-Burmese readers) ─────────────
  "baka.eyebrow": { en: "Context", my: "အကြောင်းအရင်း" },
  "baka.title":   { en: "What is Baka?", my: "ဘက ဆိုသည်မှာ အဘယ်နည်း။" },
  "baka.body": {
    en: "In Myanmar, \"Baka\" refers to monastic education schools established and managed by monks, often following the public curriculum while also transmitting Buddhist values, discipline, and community responsibility. Across Myanmar, monastic schools serve hundreds of thousands of children, many from underserved backgrounds.",
    my: "မြန်မာနိုင်ငံတွင် \"ဘက\" ဆိုသည်မှာ ဘုန်းတော်ကြီးများ တည်ထောင် ဦးစီးထားသော ဘုန်းတော်ကြီးသင် ပညာရေး ကျောင်းများကို ဆိုလိုသည်။ နိုင်ငံတော်၏ သင်ရိုးညွှန်းတမ်းကို လိုက်နာရင်း ဗုဒ္ဓဘာသာ၏ တန်ဖိုးများ၊ စည်းကမ်း၊ ရပ်ရွာအတွက် တာဝန်ယူမှုများကိုပါ ပူးတွဲ သင်ကြားပေးပါသည်။ မြန်မာတဝန်းတွင် ဘုန်းတော်ကြီးသင် ကျောင်းများသည် ပညာရေးဆိုင်ရာ အခွင့်အလမ်း နည်းပါးသော ကလေး သိန်းနှင့်ချီကို ထောက်ပံ့ပေးနေပါသည်။",
  },
  // Canonical "live classroom" framing — replaces earlier "buildings as side effect"
  // language. Reusable across components.
  "building.framing": {
    en: "Each building is both a useful space and a live classroom. The structure remains, but the deeper outcome is the trained person who can build again.",
    my: "အဆောက်အအုံတိုင်းသည် အသုံးဝင်သော နေရာတစ်ခုလည်း ဖြစ်ပြီး၊ လက်တွေ့ စာသင်ခန်းတစ်ခုလည်း ဖြစ်သည်။ အဆောက်အအုံ ကျန်ရစ်ပါသည် — သို့သော် ပိုနက်နဲသော ရလဒ်မှာ နောက်တစ်ကြိမ် ထပ်မံ တည်ဆောက်နိုင်သော ကျွမ်းကျင်ပြီးသူ တစ်ဦး ဖြစ်ပါသည်။",
  },

  // ── Pillars ────────────────────────────────────────────────────────
  "pillars.eyebrow": { en: "The Four Pillars", my: "မဏ္ဍိုင်လေးရပ်" },
  "pillars.title1":  { en: "Four forces.",     my: "မဏ္ဍိုင် လေးရပ်။" },
  "pillars.title2":  { en: "One living movement.", my: "လှုပ်ရှားမှု တစ်ခုတည်း။" },
  "pillar.spirit.title": { en: "Spirit", my: "စိတ်ဝိညာဉ်" },
  "pillar.spirit.body": {
    en: "Rooted in Buddhist compassion, mindful living, and the dignity of human work. Every building begins not with bricks, but with intention and wisdom.",
    my: "ဗုဒ္ဓဘာသာ၏ ကရုဏာတရား၊ သတိနှင့်ယှဉ်သော ထိုင်နေမှု၊ လူသား၏ လုပ်အားအပေါ် တန်ဖိုးထားခြင်း တွင် အခြေခံသည်။ အဆောက်အအုံတိုင်းသည် အုတ်များဖြင့် စတင်တည်ဆောက်ခြင်း မဟုတ်ဘဲ စေတနာနှင့် ပညာဉာဏ်ဖြင့် စတင်ပါသည်။",
  },
  "pillar.earth.title": { en: "Earth", my: "မြေကမ္ဘာ" },
  "pillar.earth.body": {
    en: "Natural materials, low-carbon beauty, and harmony with Myanmar's land. We work with the earth, not against it — creating spaces that breathe, endure, and belong.",
    my: "သဘာဝပစ္စည်းများ၊ ကာဗွန်ထုတ်လွှတ်မှုနည်းသော လှပခြင်း၊ မြန်မာမြေနှင့် လိုက်လျောညီထွေဖြစ်ခြင်း။ ကျွန်ုပ်တို့သည် မြေကြီးနှင့်ဆန့်ကျင်ဘက် မပြုဘဲ မြေနှင့်အတူ ဦးပေါင်းကာ အသက်ရှူနိုင်သော၊ ခိုင်ခံ့သော၊ နေထွေးမှု ရှိသော နေရာများကို ဖန်တီးပါသည်။",
  },
  "pillar.opportunity.title": { en: "Opportunity", my: "အခွင့်အလမ်း" },
  "pillar.opportunity.body": {
    en: "Skills become livelihoods. Livelihoods become leadership. Mettamyay trains people, incubates contractors, and connects builders to projects across Myanmar and beyond.",
    my: "ကျွမ်းကျင်မှုသည် အသက်မွေးဝမ်းကြောင်း ဖြစ်လာသည်။ အသက်မွေး ဝမ်းကြောင်းသည် ခေါင်းဆောင်မှု ဖြစ်လာသည်။ မေတ္တာမြေသည် လူများကို လေ့ကျင့်ပေးခြင်း၊ ကန်ထရိုက်တာများကို ပျိုးထောင်ပေးခြင်း၊ မြန်မာနိုင်ငံတဝန်းနှင့် နိုင်ငံတကာသို့ စီမံကိန်းများကို ချိတ်ဆက်ပေးခြင်းကို ဆောင်ရွက်ပါသည်။",
  },
  "pillar.joy.title": { en: "Joy", my: "ပျော်ရွှင်မှု" },
  "pillar.joy.body": {
    en: "Beautiful homes, meaningful work, and communities that feel truly alive. We build not just shelter but belonging — places where people want to be.",
    my: "လှသော အိမ်များ၊ အဓိပ္ပါယ်ရှိသော အလုပ်များ၊ အမှန်တကယ် ရှင်သန်နေသော အသိုက်အဝန်းများ။ ကျွန်ုပ်တို့သည် မိုးကာရုံသာ မဟုတ်ဘဲ လူတိုင်း နေထိုင်လိုသည့် ပိုင်ဆိုင်မှု ခံစားမှု ရှိသော နေရာများကို တည်ဆောက်ပါသည်။",
  },

  // ── Model (Replication Cycle — 5 steps, drawn as a loop) ──────────
  "model.eyebrow": { en: "The Replication Cycle", my: "ပြန့်ပွားမှု စက်ဝန်း" },
  "model.title":   { en: "A self-replicating cycle.", my: "မိမိကိုယ်ကို ပြန့်ပွားစေသော စက်ဝန်း။" },
  "model.sub":     { en: "Learn → Build → Earn → Teach → Replicate. Each loop produces builders who can build again — and teach the next cohort.", my: "သင်ယူ → တည်ဆောက် → ဝင်ငွေရှာ → သင်ကြား → ပြန့်ပွား။ စက်ဝန်းတိုင်းသည် ထပ်မံ တည်ဆောက်နိုင်ပြီး နောက်တစ်ဆင့်ကို သင်ကြားပေးနိုင်သော ဆောက်တတ်သူများကို မွေးထုတ်ပေးသည်။" },
  "model.s1.tag":  { en: "01 — Learn", my: "၀၁ — သင်ယူ" },
  "model.s1.t":    { en: "Earth Skills", my: "မြေသား ကျွမ်းကျင်မှု" },
  "model.s1.b": {
    en: "Awareness sessions, hands-on workshops, and mentorship in compressed earth blocks, lime plaster, bamboo, and passive cooling.",
    my: "သိမြင်ရေး ဆွေးနွေးပွဲများ၊ လက်တွေ့ အလုပ်ရုံများ၊ ဖိသိပ်မြေသားအုတ် (CEB)၊ ထုံးအင်္ဂတေ၊ ဝါး၊ နှင့် သဘာဝ အအေးပေး နည်းလမ်းများ။",
  },
  "model.s2.tag":  { en: "02 — Build", my: "၀၂ — တည်ဆောက်" },
  "model.s2.t":    { en: "Live Classrooms", my: "လက်တွေ့ စာသင်ခန်းများ" },
  "model.s2.b": {
    en: "Apprentices apply skills on real demonstration projects. Each building is both a useful space and a live classroom — the structure remains, and so does the trained person who can build again.",
    my: "သင်တန်းသားများသည် လက်တွေ့ စီမံကိန်းများတွင် ကျွမ်းကျင်မှုကို အသုံးပြုသည်။ အဆောက်အအုံတိုင်းသည် အသုံးဝင်သော နေရာတစ်ခုလည်း ဖြစ်ပြီး လက်တွေ့ စာသင်ခန်းတစ်ခုလည်း ဖြစ်သည် — အဆောက်အအုံ ကျန်ရစ်ပြီး၊ ထပ်မံ တည်ဆောက်နိုင်သော ကျွမ်းကျင်ပြီးသူလည်း ကျန်ရစ်ပါသည်။",
  },
  "model.s3.tag":  { en: "03 — Earn", my: "၀၃ — ဝင်ငွေရှာ" },
  "model.s3.t":    { en: "Livelihood", my: "အသက်မွေးဝမ်းကျောင်း" },
  "model.s3.b": {
    en: "Trained builders generate livelihoods — construction, repair, materials supply, and eco-spaces — across Myanmar.",
    my: "လေ့ကျင့်ပြီး တည်ဆောက်သူများသည် ဆောက်လုပ်ရေး၊ ပြင်ဆင်ရေး၊ ပစ္စည်း ထောက်ပံ့ရေး၊ နှင့် သဘာဝ နေထိုင်ရာ နေရာများမှ ဝင်ငွေကို မြန်မာတဝန်းတွင် ရှာဖွေသည်။",
  },
  "model.s4.tag":  { en: "04 — Teach", my: "၀၄ — သင်ကြား" },
  "model.s4.t":    { en: "The Multiplier", my: "ပွားများစေသူ" },
  "model.s4.b": {
    en: "Graduates teach the next cohort. This is the step that turns a project into a movement.",
    my: "ဘွဲ့ရသူများက နောက်တစ်ဆင့် သင်တန်းသားများကို ပြန်လည် သင်ကြားပေးသည်။ ဤအဆင့်က စီမံကိန်းကို လှုပ်ရှားမှုအဖြစ် ပြောင်းလဲစေသည်။",
  },
  "model.s5.tag":  { en: "05 — Replicate", my: "၀၅ — ပြန့်ပွား" },
  "model.s5.t":    { en: "Seed New Villages", my: "ရွာသစ်များတွင် ပျိုးထောင်" },
  "model.s5.b": {
    en: "Master trainers seed new villages, monasteries, and communities. The cycle restarts there — and the movement grows.",
    my: "ကျွမ်းကျင်ဆရာများသည် ရွာသစ်များ၊ ဘုန်းတော်ကြီးကျောင်းများ၊ ရပ်ရွာအသိုက်အဝန်းများတွင် ပြန်လည် ပျိုးထောင်ပေးသည်။ ထိုနေရာတွင် စက်ဝန်း ပြန်စပြီး လှုပ်ရှားမှု ပိုကြီးထွားသည်။",
  },

  // ── What We Are / What We Are Not ─────────────────────────────────
  "wwa.eyebrow":     { en: "Clarity", my: "ရှင်းရှင်းလင်းလင်း" },
  "wwa.title":       { en: "What we are. What we are not.", my: "ဘာဖြစ်သည်။ ဘာမဟုတ်သည်။" },
  "wwa.areHeading":  { en: "We are", my: "ဖြစ်သည်" },
  "wwa.notHeading":  { en: "We are not", my: "မဟုတ်ပါ" },
  "wwa.are1": { en: "A natural-building education movement",                          my: "သဘာဝဆောက်လုပ်ရေး ပညာရေး လှုပ်ရှားမှု" },
  "wwa.are2": { en: "A training, certification, and awareness platform",              my: "သင်တန်း၊ အသိအမှတ်ပြုလက်မှတ်၊ နှင့် သိမြင်ရေး ပလက်ဖောင်း" },
  "wwa.are3": { en: "A livelihood and skills-development initiative",                 my: "အသက်မွေးဝမ်းကျောင်းနှင့် ကျွမ်းကျင်မှု ဖွံ့ဖြိုးရေး အစီအစဉ်" },
  "wwa.are4": { en: "A pillar of the Baka Sustainability Initiative",                 my: "မြန်မာ့ဘက ရေရှည်တည်တံ့မှု အစီအစဉ်၏ မဏ္ဍိုင်တစ်ရပ်" },
  "wwa.are5": { en: "A self-replicating, community-led model",                        my: "ပြန့်ပွားနိုင်ပြီး ရပ်ရွာ ဦးဆောင်သော ပုံစံ" },
  "wwa.not1": { en: "A construction contractor or builder-for-hire",                  my: "ဆောက်လုပ်ရေး ကန်ထရိုက်တာ သို့မဟုတ် ငှားရမ်း တည်ဆောက်သူ မဟုတ်ပါ" },
  "wwa.not2": { en: "A charity that builds for beneficiaries",                        my: "အကျိုးခံစားသူများအတွက် တည်ဆောက်ပေးသော စွန့်ကြဲလုပ်ငန်း မဟုတ်ပါ" },
  "wwa.not3": { en: "A one-time workshop project",                                    my: "တစ်ကြိမ်တည်း အလုပ်ရုံ စီမံကိန်း မဟုတ်ပါ" },
  "wwa.not4": { en: "A school-building-only organisation",                            my: "ကျောင်းဆောက်ရုံသာ လုပ်သော အဖွဲ့အစည်း မဟုတ်ပါ" },
  "wwa.not5": { en: "A foreign-style architecture brand",                             my: "နိုင်ငံခြားပုံစံ ဗိသုကာ အမှတ်တံဆိပ် မဟုတ်ပါ" },

  // ── Stats (honest launch values, 11 May 2026) ─────────────────────
  "stats.village":   { en: "Learning Village",            my: "သင်ယူရွာ" },
  "stats.levels":    { en: "Training Levels",             my: "သင်တန်းအဆင့်များ" },
  "stats.pathways":  { en: "Livelihood Pathways",         my: "အသက်မွေးလမ်းများ" },
  "stats.updates":   { en: "Quarterly Impact Updates",    my: "သုံးလတစ်ကြိမ် အစီရင်ခံချက်" },

  // ── Pathways ───────────────────────────────────────────────────────
  "path.eyebrow":   { en: "Who Mettamyay Is For", my: "မေတ္တာမြေသည် မည်သူတို့အတွက်နည်း" },
  "path.title":     { en: "Every path begins here.", my: "လမ်းကြောင်းတိုင်း ဤတွင် စတင်ပါသည်။" },
  "path.sub": {
    en: "Whether you want to learn, build, invest, partner, or simply find a beautiful space — Mettamyay has a place for you.",
    my: "သင်ယူလိုသည်ဖြစ်စေ၊ တည်ဆောက်လိုသည်ဖြစ်စေ၊ ထောက်ပံ့လိုသည်ဖြစ်စေ၊ ပူးပေါင်းလိုသည်ဖြစ်စေ — မေတ္တာမြေတွင် နေရာရှိပါသည်။",
  },
  // Roles — used as Pathway labels AND as form dropdown options.
  // role slug ↔ allowed value in the applications.role CHECK constraint
  "role.train.label":      { en: "For Learners",       my: "သင်ယူလိုသူများအတွက်" },
  "role.train.title":      { en: "I Want to Build Skills", my: "ကျွမ်းကျင်မှု တည်ဆောက်လိုပါသည်" },
  "role.train.body": {
    en: "Gain hands-on training in earthen construction, earn certification, and open a pathway to meaningful work and income.",
    my: "မြေသား တည်ဆောက်ရေး လက်တွေ့ သင်တန်းများ၊ အသိအမှတ်ပြုလက်မှတ်နှင့် အဓိပ္ပါယ်ရှိသော အလုပ်နှင့် ဝင်ငွေသို့ လမ်းကြောင်း။",
  },
  "role.train.cta":        { en: "Start Training", my: "သင်တန်း စတင်ပါ" },

  "role.youth.label":      { en: "For Youth",         my: "လူငယ်များအတွက်" },
  "role.youth.title":      { en: "I'm a Young Person Looking for Direction", my: "ဦးတည်ချက် ရှာဖွေနေသော လူငယ်တစ်ဦး ဖြစ်သည်" },
  "role.youth.body": {
    en: "Join immersive youth-empowerment training cohorts in PyinOoLwin — earthen building, leadership, mindful living, and a paid pathway forward.",
    my: "ပြင်ဦးလွင်ရှိ လူငယ်စွမ်းရည် ဖွံ့ဖြိုးရေး သင်တန်းများသို့ ပါဝင်ပါ — မြေသား တည်ဆောက်ရေး၊ ခေါင်းဆောင်မှု၊ သတိနှင့်ယှဉ်သော နေထိုင်မှု၊ နှင့် ဝင်ငွေရှိသော လမ်းကြောင်း။",
  },
  "role.youth.cta":        { en: "Apply for a Cohort", my: "သင်တန်း လျှောက်ပါ" },

  "role.partner.label":    { en: "For Monks & Baka Schools", my: "ဘုန်းတော်ကြီးနှင့် ဘကကျောင်းများအတွက်" },
  "role.partner.title":    { en: "I Lead a Monastic School or Sangha", my: "ဘုန်းတော်ကြီးကျောင်း သို့မဟုတ် သံဃာအဖွဲ့ကို ဦးဆောင်နေသူ ဖြစ်သည်" },
  "role.partner.body": {
    en: "Bring Mettamyay training, certification, and demonstration builds to your monastic school or sangha — under the Baka Sustainability Initiative.",
    my: "မေတ္တာမြေ၏ သင်တန်း၊ အသိအမှတ်ပြုလက်မှတ်၊ နှင့် နမူနာ တည်ဆောက်မှုများကို သင့်ဘုန်းတော်ကြီးကျောင်း သို့မဟုတ် သံဃာအဖွဲ့သို့ ခေါ်ဆောင်လာပါ — မြန်မာ့ဘက ရေရှည်တည်တံ့မှု အစီအစဉ်အောက်တွင်။",
  },
  "role.partner.cta":      { en: "Bring Mettamyay Here", my: "ဤနေရာသို့ ခေါ်ဆောင်ပါ" },

  "role.client.label":     { en: "For Patrons / Clients", my: "ဖော်သည်များအတွက်" },
  "role.client.title":     { en: "I Have a Project", my: "စီမံကိန်း ရှိပါသည်" },
  "role.client.body": {
    en: "Hire certified Mettamyay builders for your home, retreat, monastery, school, or community space — beautiful, natural, enduring.",
    my: "သင့်အိမ်၊ အပန်းဖြေနေရာ၊ ဘုန်းတော်ကြီးကျောင်း၊ စားသင်ကျောင်း၊ သို့မဟုတ် ရပ်ရွာ နေရာအတွက် အသိအမှတ်ပြုခံ မေတ္တာမြေ တည်ဆောက်သူများကို ငှားရမ်းပါ။",
  },
  "role.client.cta":       { en: "Explore Projects", my: "စီမံကိန်းများ ကြည့်ပါ" },

  "role.support.label":    { en: "For Funders & Supporters", my: "ပံ့ပိုးကူညီသူများအတွက်" },
  "role.support.title":    { en: "I Want to Underwrite the Movement", my: "လှုပ်ရှားမှုကို ထောက်ပံ့လိုပါသည်" },
  "role.support.body": {
    en: "Every contribution trains builders. $50 covers a workshop seat · $200 a toolkit · $1,000 a small build · $5,000 trains 10 apprentices · $10,000 trains 20 + provides toolkits · $25,000 underwrites a full cohort + demonstration build · $50,000 establishes a new training location.",
    my: "ပံ့ပိုးမှုတိုင်းသည် တည်ဆောက်သူများကို လေ့ကျင့်ပေးသည်။ $၅၀ — အလုပ်ရုံ နေရာတစ်နေရာ · $၂၀၀ — ကိရိယာအစုံ · $၁,၀၀၀ — အသေးစား တည်ဆောက်မှု · $၅,၀၀၀ — သင်တန်းသား ၁၀ ဦး · $၁၀,၀၀၀ — ၂၀ ဦး + ကိရိယာများ · $၂၅,၀၀၀ — အပြည့်အဝ သင်တန်း + နမူနာ တည်ဆောက်မှု · $၅၀,၀၀၀ — သင်တန်းနေရာသစ်တစ်ခု။",
  },
  "role.support.cta":      { en: "Make a Contribution", my: "ပံ့ပိုးကူညီပါ" },

  "role.contractor.label": { en: "For Builders", my: "တည်ဆောက်သူများအတွက်" },
  "role.contractor.title": { en: "I'm a Contractor", my: "ကန်ထရိုက်တာ ဖြစ်သည်" },
  "role.contractor.body": {
    en: "Get certified, join the Mettamyay network, and access a pipeline of projects matched to your skills and location across Myanmar.",
    my: "အသိအမှတ်ပြုခံပါ၊ မေတ္တာမြေ ကွန်ယက်တွင် ပါဝင်ပါ၊ မြန်မာတဝန်းရှိ စီမံကိန်းများကို သင့်ကျွမ်းကျင်မှုနှင့် တိုက်ဆိုင်စွာ လက်ခံပါ။",
  },
  "role.contractor.cta":   { en: "Join the Network", my: "ကွန်ယက်တွင် ပါဝင်ပါ" },

  // ── Transformative Experiences ─────────────────────────────────────
  "tx.eyebrow": { en: "Transformative Experiences", my: "အသွင်ပြောင်းလဲစေသော အတွေ့အကြုံများ" },
  "tx.title":   { en: "You arrive to build. You leave transformed.", my: "တည်ဆောက်လာသူ၊ ပြောင်းလဲသွားသူ။" },
  "tx.body": {
    en: "At Mettamyay, visitors find more than a worksite — they find a path of self-rediscovery, holistic growth, and reconnection with the natural world.",
    my: "မေတ္တာမြေသို့ လာရောက်သူများသည် မိမိကိုယ်ကို ပြန်လည် ရှာဖွေခြင်း၊ ပကတိရေး ဖွံ့ဖြိုးတိုးတက်ခြင်း၊ သဘာဝနှင့် ချိတ်ဆက်ခြင်း — ဟူသော အသွင်ပြောင်းမှု ခရီးစဉ်ကို လျှောက်လှမ်းနိုင်ပါသည်။",
  },
  "tx.a.title":    { en: "7-Day Earthen Build Immersion", my: "၇ ရက် မြေသား တည်ဆောက်မှု ခရီးစဉ်" },
  "tx.a.duration": { en: "7 days · PyinOoLwin", my: "၇ ရက် · ပြင်ဦးလွင်" },
  "tx.a.audience": { en: "For curious builders, designers, and travellers.", my: "စူးစမ်းချင်သူ တည်ဆောက်သူများ၊ ဒီဇိုင်နာများ၊ နှင့် ခရီးသွားများအတွက်။" },
  "tx.a.deposit":  { en: "From USD 350 · meals & lodging included", my: "အနည်းဆုံး USD 350 · အစားအသောက်နှင့် နေရာပါဝင်" },
  "tx.b.title":    { en: "Monastic Retreat + Build", my: "ဆရာတော် ဦးဆောင်သော တရားအား + လက်တွေ့ တည်ဆောက်မှု" },
  "tx.b.duration": { en: "10 days · Mandalay region", my: "၁၀ ရက် · မန္တလေးတိုင်း" },
  "tx.b.audience": { en: "For practitioners seeking depth — half mindful practice, half hands on earth.", my: "တရားအားထုတ်လိုသူများအတွက် — တစ်ဝက် တရားအား၊ တစ်ဝက် မြေသား။" },
  "tx.b.deposit":  { en: "From USD 600 · dana model available", my: "အနည်းဆုံး USD 600 · ဒါန ပုံစံလည်း ရှိ" },
  "tx.c.title":    { en: "4-Week Youth Leadership Cohort", my: "၄ ပတ် လူငယ် ခေါင်းဆောင်မှု အပတ်စဉ်" },
  "tx.c.duration": { en: "4 weeks · residential", my: "၄ ပတ် · နေထိုင်သင်တန်း" },
  "tx.c.audience": { en: "Myanmar youth aged 18–28 — fully supported, paid pathway forward.", my: "အသက် ၁၈–၂၈ ရှိ မြန်မာ လူငယ်များ — အပြည့်အဝ ထောက်ပံ့၊ ဝင်ငွေရှိသော လမ်းကြောင်း။" },
  "tx.c.deposit":  { en: "Free for selected applicants · stipend included", my: "ရွေးချယ်ခံရသူများ အခမဲ့ · ထောက်ပံ့ကြေး ပါဝင်" },
  "tx.cta":        { en: "Reserve a Spot", my: "နေရာ ကြိုတင် မှာပါ" },

  // ── Council ────────────────────────────────────────────────────────
  "council.eyebrow": { en: "Founding Sayadaws & Lay Council", my: "အဖွဲ့ဝင် ဆရာတော်နှင့် လူပုဂ္ဂိုလ်များ" },
  "council.title":   { en: "Those Who Light the Way", my: "လမ်းပြထွန်းညှိသူများ" },
  "council.body": {
    en: "Mettamyay is guided by a council of senior Sayadaws and lay professionals across Myanmar.",
    my: "မေတ္တာမြေသည် ဆရာတော်များ၏ ပညာဉာဏ်နှင့် ပညာရှင်များ၏ လမ်းပြမှုဖြင့် ဦးဆောင်ပါသည်။",
  },
  // Council romanisations + Burmese spellings confirmed by Ken on 11 May 2026.
  // m1 (Sandarwara), m3 (Zaw Nyunt), m4 (Pyi Wa Tun) Burmese spellings are
  // best-guesses pending Sayadaw U Tay's review. Single-file edit here when
  // corrections arrive — no migration needed.
  "council.lead1.name":    { en: "Sayadaw U Tay", my: "ဆရာတော် ဦးတေ" },
  "council.lead1.role":    { en: "Head Sayadaw, founding monastic leader", my: "အကြီးအကဲ ဆရာတော်၊ မေတ္တာမြေ" },
  "council.lead2.name":    { en: "Sayadaw U Ngwe Tun", my: "ဆရာတော် ဦးငွေထွန်း" },
  "council.lead2.role":    { en: "Lead contact · Maphalan Monastic School, Phaya Gyi Monastery, Mandalay", my: "အဓိက ဆက်သွယ်သူ · မဖလန် ဘုန်းတော်ကြီးသင်ကျောင်း၊ ဘုရားကြီးတိုက်၊ မန္တလေး" },
  "council.m1.name":       { en: "Sayadaw U Sandarwara", my: "ဆရာတော် ဦးစန္ဒရဝါရ" },
  "council.m1.role":       { en: "Founding monastic supporter · Sandarama Baka School", my: "ဦးဆောင် ဆရာတော် · စန္ဒရာမ ဘကကျောင်း" },
  "council.m2.name":       { en: "Sayadaw U Razeinda Thiri", my: "ဆရာတော် ဦးရာဇိန္ဒသီရိ" },
  "council.m2.role":       { en: "Naung Taung monastic education leader · Southern Shan State", my: "နောင်တောင် ဆရာတော် · ရှမ်းပြည် တောင်ပိုင်း" },
  "council.m3.name":       { en: "Saya Zaw Nyunt", my: "ဆရာ ဇော်ညွန့်" },
  "council.m3.role":       { en: "Natural building teacher · technical trainer", my: "သဘာဝဆောက်လုပ်ရေး နည်းပြ ဆရာ" },
  "council.m4.name":       { en: "U Pyi Wa Tun", my: "ဦးပြည်ဝါထွန်း" },
  "council.m4.role":       { en: "PyinYawDaya Foundation · Baka sustainability advocate", my: "ပြည်ယောဒယ ဖောင်ဒေးရှင်း · ဘက ရေရှည်တည်တံ့မှု ဆောင်ရွက်သူ" },
  "council.m5.name":       { en: "U Zeya Moe Myint", my: "ဦးဇေယျာမိုးမြင့်" },
  "council.m5.role":       { en: "Veterinary specialist · farm owner", my: "တိရစ္ဆာန် ဆေးကုဆရာဝန် · ခြံပိုင်ရှင်" },
  "council.m6.name":       { en: "U Zeya Moe Shein", my: "ဦးဇေယျာမိုးရှိန်" },
  "council.m6.role":       { en: "Doctor · farm owner", my: "ဆရာဝန် · ခြံပိုင်ရှင်" },

  // ── Vision ─────────────────────────────────────────────────────────
  "vision.eyebrow": { en: "The Vision", my: "မျှော်မှန်းချက်" },
  "vision.t1":      { en: "A more", my: "ပိုလှသော" },
  "vision.t2":      { en: "beautiful", my: "လှပသော" },
  "vision.t3":      { en: "way to build, live,", my: "တည်ဆောက်ရန်၊ နေထိုင်ရန်၊" },
  "vision.t4":      { en: "and grow in", my: "ကြီးထွားရန်" },
  "vision.t5":      { en: "Myanmar.", my: "မြန်မာနိုင်ငံတွင်။" },
  "vision.body": {
    en: "Mettamyay is not a project. It is a new culture — where the wisdom of monks, the craft of builders, the beauty of natural materials, and the ambition of a new generation come together to create something Myanmar has never seen before.",
    my: "မေတ္တာမြေသည် စီမံကိန်းတစ်ခု မဟုတ်ပါ။ ၎င်းသည် ယဉ်ကျေးမှု အသစ်တစ်ခု — ဆရာတော်များ၏ ပညာဉာဏ်၊ တည်ဆောက်သူများ၏ လက်ရာ၊ သဘာဝပစ္စည်းများ၏ အလှ၊ နှင့် မျိုးဆက်သစ်၏ ရည်မှန်းချက်များ စုပေါင်းကာ မြန်မာနိုင်ငံ မမြင်ဖူးသေးသော အရာတစ်ခုကို ဖန်တီးနေသည်။",
  },
  // Holistic Wellbeing strapline (locked copy)
  "vision.wellbeing": {
    en: "Mettamyay measures success not by buildings, but by the wholeness — body, community, spirit, livelihood — of the people who build them.",
    my: "မေတ္တာမြေသည် အောင်မြင်မှုကို အဆောက်အအုံများဖြင့် မဟုတ်ဘဲ၊ တည်ဆောက်သူများ၏ ပကတိ — ကိုယ်၊ ရပ်ရွာ၊ စိတ်ဝိညာဉ်၊ အသက်မွေး — ဖြင့် တိုင်းတာပါသည်။",
  },
  "vision.cta":     { en: "Be Part of This", my: "ဒီအထဲမှာ ပါဝင်ပါ" },

  // ── Location ───────────────────────────────────────────────────────
  "loc.eyebrow": { en: "Where We Are", my: "တည်နေရာ" },
  "loc.title":   { en: "The ground of Mettamyay.", my: "မေတ္တာမြေ၏ မြေ။" },
  "loc.address": {
    en: "Naung Wal Village, Pyin Sa Village Tract, PyinOoLwin Township, Mandalay Region, Myanmar",
    my: "နောင်ဝယ်ကျေးရွာ၊ ပြင်စာအုပ်စု၊ ပြင်ဦးလွင်မြို့နယ်၊ မန္တလေးတိုင်းဒေသကြီး၊ မြန်မာနိုင်ငံ",
  },
  "loc.regionLabel": { en: "Region", my: "ဒေသ" },
  "loc.regionShort": {
    en: "PyinOoLwin area, Mandalay Region, Myanmar",
    my: "ပြင်ဦးလွင်ဒေသ၊ မန္တလေးတိုင်း၊ မြန်မာနိုင်ငံ",
  },
  "loc.regionNote": {
    en: "Exact coordinates and a precise map will publish once finalised.",
    my: "တိကျသော တည်နေရာနှင့် မြေပုံကို နောက်ပိုင်းတွင် ထပ်မံ ထုတ်ပြန်ပါမည်။",
  },

  // ── Contact ────────────────────────────────────────────────────────
  "contact.eyebrow": { en: "Reach Us", my: "ဆက်သွယ်ရန်" },
  "contact.title":   { en: "Speak with Mettamyay.", my: "မေတ္တာမြေနှင့် စကားပြောပါ။" },
  "contact.leadName":{ en: "U Ngwe Tun", my: "ဦးငွေထွန်း" },
  "contact.leadRole":{ en: "Lead contact", my: "အဓိက ဆက်သွယ်သူ" },
  "contact.base":    { en: "Maphalan Monastic School, Phaya Gyi Monastery, Mandalay", my: "မဖလန် ဘုန်းတော်ကြီးသင်ကျောင်း၊ ဘုရားကြီးတိုက်၊ မန္တလေးမြို့" },
  "contact.phoneLabel": { en: "Phone", my: "ဖုန်း" },
  "contact.phoneValue": { en: "+95 9 444 013 312", my: "၀၉ ၄၄၄ ၀၁၃ ၃၁၂" },
  "contact.emailLabel": { en: "Email", my: "အီးမေးလ်" },
  "contact.emailValue": { en: "hello@metabumi.org", my: "hello@metabumi.org" },

  // ── Application Dialog ─────────────────────────────────────────────
  "form.title":      { en: "Tell us a little about you", my: "သင့်အကြောင်း အနည်းငယ် ပြောပြပါ" },
  "form.subtitle":   { en: "We'll be in touch within a few days.", my: "ရက်အနည်းငယ်အတွင်း ပြန်လည် ဆက်သွယ်ပေးပါမည်။" },
  "form.name":       { en: "Your name", my: "သင့်နာမည်" },
  "form.contact":    { en: "Email or phone", my: "အီးမေးလ် သို့မဟုတ် ဖုန်း" },
  "form.role":       { en: "I'm reaching out as…", my: "ကျွန်ုပ်သည်…" },
  "form.message":    { en: "Anything you'd like us to know? (optional)", my: "ပြောလိုသည်များ ရှိပါသလား။ (ရွေးချယ်ရန်)" },
  "form.submit":     { en: "Send", my: "ပို့ပါ" },
  "form.submitting": { en: "Sending…", my: "ပို့နေသည်…" },
  "form.success":    { en: "Thank you. We've received your message.", my: "ကျေးဇူးတင်ပါသည်။ သင့်စာကို လက်ခံရရှိပါပြီ။" },
  "form.error":      { en: "Something went wrong. Please try again.", my: "တစ်စုံတစ်ရာ မှားယွင်းသွားပါသည်။ ထပ်ကြိုးစားပါ။" },
  "form.privacy":    { en: "We use your contact only to follow up about this enquiry.", my: "သင့်ဆက်သွယ်ရန် အချက်အလက်ကို ဤမေးမြန်းမှုအတွက်သာ အသုံးပြုပါမည်။" },
  "form.required":   { en: "Required", my: "လိုအပ်သည်" },

  // ── Footer ─────────────────────────────────────────────────────────
  "footer.tagline": {
    en: "Earth skills, compassionate leadership, and joyful communities — built from the ground up in Myanmar.",
    my: "မြေသား ပညာရပ်များ၊ ကရုဏာဖြင့် ခေါင်းဆောင်မှု၊ နှင့် ပျော်ရွှင်သော ရပ်ရွာများ — မြန်မာမြေမှ စတင် တည်ဆောက်ထားသည်။",
  },
  "footer.col1":   { en: "Movement",     my: "လှုပ်ရှားမှု" },
  "footer.col2":   { en: "Get Involved", my: "ပါဝင်ရန်" },
  "footer.col3":   { en: "Connect",      my: "ဆက်သွယ်ရန်" },
  "footer.l.pillars":  { en: "The Four Pillars", my: "မဏ္ဍိုင်လေးရပ်" },
  "footer.l.how":      { en: "How It Works",     my: "လုပ်ဆောင်ပုံ" },
  "footer.l.paths":    { en: "Pathways",         my: "လမ်းကြောင်းများ" },
  "footer.l.vision":   { en: "Vision",           my: "မျှော်မှန်းချက်" },
  "footer.l.learn":    { en: "Learn & Train",    my: "သင်ယူရန်" },
  "footer.l.partner":  { en: "Partner With Us",  my: "ပူးပေါင်းရန်" },
  "footer.l.hire":     { en: "Hire Builders",    my: "တည်ဆောက်သူ ငှားရမ်းရန်" },
  "footer.l.support":  { en: "Support",          my: "ထောက်ပံ့ရန်" },
  "footer.l.site":     { en: "metabumi.org",     my: "metabumi.org" },
  "footer.l.country":  { en: "Myanmar",          my: "မြန်မာ" },
  "footer.l.team":     { en: "Sayadaw U Tay & Team",    my: "ဆရာတော် ဦးတေ နှင့်အဖွဲ့" },
  "footer.copyright":  { en: "© 2026 Mettamyay. All rights reserved.", my: "© ၂၀၂၆ မေတ္တာမြေ။ မူပိုင်ခွင့် ထိန်းသိမ်းထားသည်။" },
  "footer.motto":      { en: "မေတ္တာမြေ — Ground of Loving Kindness", my: "မေတ္တာမြေ — မေတ္တာတရားကိန်းဝပ်ရာမြေ" },
} satisfies Record<string, Entry>;

export type DictKey = keyof typeof dict;
