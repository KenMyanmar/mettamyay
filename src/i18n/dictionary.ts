// Mettamyay bilingual dictionary.
// Burmese strings come VERBATIM from the founding charter (05/01/2026).
// Romanisations of monks/lay supporters are isolated here so a single edit
// fixes every component once U Htay confirms the canonical spellings.

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
  "hero.eyebrow": { en: "Myanmar — Earth — Spirit — Future", my: "မြန်မာမြေ — စိတ်ဝိညာဉ် — အနာဂတ်" },
  "hero.brand":   { en: "Mettamyay", my: "မေတ္တာမြေ" },
  "hero.line1a":  { en: "Build with",  my: "မြေနဲ့" },
  "hero.line1b":  { en: "earth.",      my: "တည်ဆောက်ပါ။" },
  "hero.line2a":  { en: "Grow with",   my: "ရည်ရွယ်ချက်နဲ့" },
  "hero.line2b":  { en: "purpose.",    my: "ကြီးထွားပါ။" },
  "hero.line3a":  { en: "Live with",   my: "ပျော်ရွှင်စွာ" },
  "hero.line3b":  { en: "joy.",        my: "နေထိုင်ပါ။" },
  "hero.sub": {
    en: "A Myanmar-born movement where compassionate building becomes beautiful living, meaningful opportunity, and joyful community.",
    my: "ကရုဏာဖြင့် တည်ဆောက်ခြင်းသည် လှပသော နေထိုင်မှု၊ အဓိပ္ပါယ်ရှိသော အခွင့်အလမ်း၊ နှင့် ပျော်ရွှင်သော ရပ်ရွာအသိုက်အဝန်းအဖြစ် ပြောင်းလဲစေသည့် မြန်မာမြေမှ မွေးဖွားသော လှုပ်ရှားမှု။",
  },
  "hero.cta1":  { en: "Explore the Movement", my: "လှုပ်ရှားမှုကို ရှာဖွေပါ" },
  "hero.cta2":  { en: "Find Your Path",       my: "သင့်လမ်းကြောင်းကို ရှာပါ" },
  "hero.scroll":{ en: "Scroll",               my: "ဆက်ကြည့်ပါ" },

  // ── Manifesto ──────────────────────────────────────────────────────
  "man.eyebrow": { en: "Our Belief", my: "ကျွန်ုပ်တို့၏ ယုံကြည်ချက်" },
  "man.title1":  { en: "We don't just build homes.", my: "ကျွန်ုပ်တို့ အိမ်တွေကိုသာ မတည်ဆောက်ပါ။" },
  "man.title2a": { en: "We build the", my: "ထိုအိမ်များကို တည်ဆောက်မည့်" },
  "man.title2b": { en: "people",       my: "လူသား" },
  "man.title2c": { en: "who build them.", my: "များကိုပါ တည်ဆောက်ပါသည်။" },
  "man.body": {
    en: "Led by the wisdom of monks and guided by the hands of skilled builders, Mettamyay is a platform for earthen building skills, leadership formation, contractor development, and community connection — rooted in Myanmar, ready for the world.",
    my: "ဆရာတော်များ၏ ပညာဉာဏ်ဖြင့် ဦးဆောင်ပြီး၊ ကျွမ်းကျင်သော တည်ဆောက်သူများ၏ လက်ဖြင့် လမ်းညွှန်ထားသော မေတ္တာမြေသည် မြေသား အဆောက်အအုံ ပညာရပ်များ၊ ခေါင်းဆောင်မှု ပျိုးထောင်ရေး၊ ကန်ထရိုက်တာ ဖွံ့ဖြိုးတိုးတက်ရေး၊ နှင့် ရပ်ရွာ ပူးပေါင်းမှုအတွက် ပလက်ဖောင်းတစ်ခုဖြစ်ပါသည် — မြန်မာမြေတွင် အရင်းအမြစ်ပြုပြီး၊ ကမ္ဘာအတွက် အသင့်။",
  },
  "man.quote": {
    en: "From the earth beneath our feet, we find not only shelter, but the very ground of our becoming.",
    my: "ခြေဖျားအောက်က မြေကြီးထဲမှ ငါတို့သည် နေထိုင်ရာသာမက ငါတို့ ဖြစ်တည်မှု၏ အရင်းခံ မြေကိုပါ ရှာတွေ့ကြသည်။",
  },
  "man.quoteAuthor": { en: "U Htay — Head Sayadaw, Mettamyay", my: "ဦးတေ — အကြီးအကဲ ဆရာတော်၊ မေတ္တာမြေ" },

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

  // ── Model ──────────────────────────────────────────────────────────
  "model.eyebrow": { en: "The Mettamyay Model", my: "မေတ္တာမြေ ပုံစံ" },
  "model.title":   { en: "A self-reinforcing ecosystem.", my: "မိမိကိုယ်ကို အားပြုပေးနေသည့် ဂေဟစနစ်။" },
  "model.sub":     { en: "From first skills to community leadership — every step builds the next.", my: "အစပိုင်း ကျွမ်းကျင်မှုမှ ရပ်ရွာ ခေါင်းဆောင်မှုထိ — အဆင့်တိုင်းသည် နောက်တစ်ဆင့်ကို တည်ဆောက်ပါသည်။" },
  "model.s1.tag":  { en: "01 — Learn", my: "၀၁ — သင်ယူ" },
  "model.s1.t":    { en: "Earth Skills", my: "မြေသား ကျွမ်းကျင်မှုများ" },
  "model.s1.b": {
    en: "Compressed earth blocks (CEB), lime plaster, structural logic, site management, and aesthetic craft.",
    my: "ဖိသိပ်ထားသော မြေသားအုတ်များ (CEB)၊ ထုံးအင်္ဂတေ၊ ဖွဲ့စည်းပုံ ဆိုင်ရာ ယုတ္တိ၊ ဆိုက်အကြီး၊ အလှအပ ပညာရပ်များ။",
  },
  "model.s2.tag":  { en: "02 — Lead", my: "၀၂ — ဦးဆောင်" },
  "model.s2.t":    { en: "Leadership", my: "ခေါင်းဆောင်မှု" },
  "model.s2.b": {
    en: "Selected graduates grow into site leaders, community mentors, and quality-certified professionals.",
    my: "ရွေးချယ်ခံရသူများသည် ဆိုက်အကြီး၊ ရပ်ရွာ ထောက်ပံ့သူ၊ အရည်အသွေး အသိအမှတ်ပြုခံ ပညာရှင်များ ဖြစ်လာသည်။",
  },
  "model.s3.tag":  { en: "03 — Build", my: "၀၃ — တည်ဆောက်" },
  "model.s3.t":    { en: "Real Projects", my: "လက်တွေ့ စီမံကိန်းများ" },
  "model.s3.b": {
    en: "Homes, monasteries, eco-retreats, schools, and community spaces — proof-of-work that earns trust and income.",
    my: "အိမ်များ၊ ဘုန်းတော်ကြီး ကျောင်းများ၊ စားသင်ကျောင်းများ၊ သဘာဝ အပန်းဖြေ နေရာများ၊ ရပ်ရွာ နေရာများ။",
  },
  "model.s4.tag":  { en: "04 — Connect", my: "၀၄ — ချိတ်ဆက်" },
  "model.s4.t":    { en: "The Network", my: "ကွန်ယက်" },
  "model.s4.b": {
    en: "Mettamyay matches certified builders with patrons, links partners locally and internationally, and grows a network that sustains itself through every project.",
    my: "အရည်အသွေး အသိအမှတ်ပြုခံ တည်ဆောက်သူများကို ဖော်သည်များနှင့် ချိတ်ဆက်ပေး၊ ပြည်တွင်း ပြည်ပ မိတ်ဖက်များကို ဆက်စပ်ပေး။",
  },

  // ── Stats ──────────────────────────────────────────────────────────
  "stats.pillars":   { en: "Core Pillars",         my: "အဓိက မဏ္ဍိုင်များ" },
  "stats.pathways":  { en: "Pathways for People",  my: "လူများအတွက် လမ်းကြောင်းများ" },
  "stats.mission":   { en: "Mission: Myanmar",     my: "မြန်မာ့ ရည်မှန်းချက်" },
  "stats.global":    { en: "Globally Connected",   my: "ကမ္ဘာနှင့် ချိတ်ဆက်" },

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

  "role.partner.label":    { en: "For Organizations", my: "အဖွဲ့အစည်းများအတွက်" },
  "role.partner.title":    { en: "I Want to Partner", my: "ပူးပေါင်းလိုပါသည်" },
  "role.partner.body": {
    en: "Align your NGO, company, or institution with a Myanmar-rooted movement building skills, community, and sustainable futures.",
    my: "သင်၏ NGO၊ ကုမ္ပဏီ၊ သို့မဟုတ် အဖွဲ့အစည်းကို မြန်မာမြေတွင် အရင်းအမြစ်ပြုသော လှုပ်ရှားမှုနှင့် ပူးပေါင်းပါ။",
  },
  "role.partner.cta":      { en: "Partner With Us", my: "ပူးပေါင်းပါ" },

  "role.client.label":     { en: "For Patrons / Clients", my: "ဖော်သည်များအတွက်" },
  "role.client.title":     { en: "I Have a Project", my: "စီမံကိန်း ရှိပါသည်" },
  "role.client.body": {
    en: "Hire certified Mettamyay builders for your home, retreat, monastery, school, or community space — beautiful, natural, enduring.",
    my: "သင့်အိမ်၊ အပန်းဖြေနေရာ၊ ဘုန်းတော်ကြီးကျောင်း၊ စားသင်ကျောင်း၊ သို့မဟုတ် ရပ်ရွာ နေရာအတွက် အသိအမှတ်ပြုခံ မေတ္တာမြေ တည်ဆောက်သူများကို ငှားရမ်းပါ။",
  },
  "role.client.cta":       { en: "Explore Projects", my: "စီမံကိန်းများ ကြည့်ပါ" },

  "role.support.label":    { en: "For Supporters", my: "ထောက်ပံ့ကူညီလိုသူများအတွက်" },
  "role.support.title":    { en: "I Want to Support", my: "ထောက်ပံ့လိုပါသည်" },
  "role.support.body": {
    en: "Fund training cohorts, sponsor a community build, or contribute to the movement that's shaping Myanmar's earthen future.",
    my: "သင်တန်းများကို ထောက်ပံ့ပါ၊ ရပ်ရွာ တည်ဆောက်ရေးကို ပံ့ပိုးပါ၊ မြန်မာမြေ၏ မြေသား အနာဂတ်ကို ပုံဖော်နေသော လှုပ်ရှားမှုသို့ ပါဝင်ပါ။",
  },
  "role.support.cta":      { en: "Support Mettamyay", my: "မေတ္တာမြေကို ထောက်ပံ့ပါ" },

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
  // CPME acronym is unverified at time of writing — we render the lead's
  // name without the acronym until U Htay confirms (within 72h).
  "council.lead1.name":    { en: "U Ngwe Tun", my: "ဦးငွေထွန်း" },
  "council.lead1.role":    { en: "Lead contact · Maphalan Monastic School, Phaya Gyi Monastery, Mandalay", my: "အဓိက ဆက်သွယ်သူ · မဖလန် ဘုန်းတော်ကြီးသင်ကျောင်း၊ ဘုရားကြီးတိုက်၊ မန္တလေး" },
  "council.lead2.name":    { en: "U Htay & Team", my: "ဦးတေ နှင့်အဖွဲ့" },
  "council.lead2.role":    { en: "Head guidance", my: "အဓိက လမ်းညွှန်" },
  "council.m1.name":       { en: "Sayadaw U Razinda Theiri", my: "ဦးရာဇိန္ဒသီရိ" },
  "council.m1.role":       { en: "Naungtaung Parahita School, Hopong, Southern Shan State", my: "နောင်တောင် ပရဟိတ ကျောင်း၊ ဟိုပုံး၊ တောင်ပိုင်း ရှမ်းပြည်နယ်" },
  "council.m2.name":       { en: "Sayadaw U Nottara", my: "ဦးနော္တရ" },
  "council.m2.role":       { en: "Dhammarama Monastic School, Hlaing Township, Yangon Region", my: "ဓမ္မာရာမ ဘုန်းတော်ကြီးသင်ကျောင်း၊ လှိုင်မြို့နယ်၊ ရန်ကုန်တိုင်း" },
  "council.m3.name":       { en: "Sayadaw U Pyi Htut", my: "ဦးပြည်ထွဋ်" },
  "council.m3.role":       { en: "Myanmar Monastic Schools Development · Parago Sworar Co.", my: "မြန်မာ ဘုန်းတော်ကြီး သင်ကျောင်း ဖွံ့ဖြိုးရေး · ပါရဂူ စွောရာ ကုမ္ပဏီ" },
  "council.m4.name":       { en: "U Zeya Moe Myint", my: "ဦးဇေယျာမိုးမြင့်" },
  "council.m4.role":       { en: "Veterinary specialist · farm owner", my: "တိရစ္ဆာန် ဆေးကုဆရာဝန် · ခြံပိုင်ရှင်" },
  "council.m5.name":       { en: "U Zeya Moe Shein", my: "ဦးဇေယျာမိုးရှိန်" },
  "council.m5.role":       { en: "Doctor · farm owner", my: "ဆရာဝန် · ခြံပိုင်ရှင်" },

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
  "footer.l.team":     { en: "U Htay & Team",    my: "ဦးတေ နှင့်အဖွဲ့" },
  "footer.copyright":  { en: "© 2026 Mettamyay. All rights reserved.", my: "© ၂၀၂၆ မေတ္တာမြေ။ မူပိုင်ခွင့် ထိန်းသိမ်းထားသည်။" },
  "footer.motto":      { en: "မေတ္တာမြေ — Ground of Loving Kindness", my: "မေတ္တာမြေ — မေတ္တာတရားကိန်းဝပ်ရာမြေ" },
} satisfies Record<string, Entry>;

export type DictKey = keyof typeof dict;
