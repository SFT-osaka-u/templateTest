const data = {
    "settings": {
        "title": "2023春販売 販売・予約サイト",
        "date": "4/5(水)～4/14(金) ※土日除く",
        "place": "@万福寺さん前",
        "marquees": ["4/5(水)～4/7(金)は10:30-14:30, 4/10(月)～4/14(金)は16:30-19:00にお待ちしております!", "4/5(水)は販売イベントと履修相談会を同時開催します🙌"],
        "fontStyle": "<link rel='preconnect' href='https://fonts.googleapis.com'><link rel='preconnect' href='https://fonts.gstatic.com' crossorigin><link href='https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@300;400;500;700;900&display=swap' rel='stylesheet'>",
        "fontFamily": "font-family: 'Zen Maru Gothic', sans-serif;",
        "mainColor": "#00A0E9",
        "subColor": "#EB6100",
        // 分野のpropsとして渡すところまだ書いていない
        "genres":['法', '政治・経済', '文系その他', '英語', '第二言語', '数学', '理科', '情報・統計', '理系その他', '教職・資格']
    },
    "form": {
        "faculties": ["文学部", "法学部", "経済学部", "外国語学部", "人間科学部", "基礎工学部", "工学部", "医学部", "歯学部", "薬学部", "その他"],
        "grades": ["学部1年生", "学部2年生", "学部3年生", "学部4年生", "その他"],
        "dates": ["4/6(水)", "4/7(木)", "4/8(金)", "4/11(月)", "4/12(火)", "4/13(水)", "4/14(木)", "4/15(金)"]
    },
    "about": {
        "sns": [
            {
                "media": "twitter",
                "text": "支部Twitter",
                "url": "https://twitter.com/study42_OU",
            },
            {
                "media": "twitter",
                "text": "新歓Twitter",
                "url": "https://twitter.com/study42_ou_",
            },
            {
                "media": "instagram",
                "text": "Instagram",
                "url": "https://www.instagram.com/studyfortwo_ou/",
            },
            {
                "media": "line",
                "text": "公式LINE",
                "url": "https://lin.ee/pf1MTkW",
            },
            {
                "media": "email",
                "text": "メール",
                "url": "mailto:branch_osaka@studyfortwo.org",
            },
        ],
        "articles":[
            {
                "icon":"",
                "heading":"STUDY FOR TWO",
                "text":"ないようないようないようないよう"
            },
            {
                "icon":"",
                "heading":"阪大支部",
                "text":"ないようないようないようないよう"
            },
            {
                "icon":"mdi-finance",
                "heading":"支援実績",
                "text":"ないようないようないようないよう"
            },
        ]
    },
    "books": [
        {
            "isbn": 9789880030598,
            "title": "English Firsthand (4th Edition) 1: Student Book with Audio CD",
            "author": "Marc Hergesen",
            "publisher": "Pearson Longman",
            "originalPrice": 2910,
            "sellingPrice": 1455,
            "genre": "英語",
            "stock": 1,
            "sold": 5
        },
        {
            "isbn": 9789813130234,
            "title": "ENGLISH FIRSTHAND 2",
            "author": "Marc Helgesen",
            "publisher": "Pearson",
            "originalPrice": 2910,
            "sellingPrice": 1455,
            "genre": "英語",
            "stock": 2,
            "sold": 5
        },
        {
            "isbn": 9789813130227,
            "title": "ENGLISH FIRST HAND 1",
            "author": "Marc Helgesen",
            "publisher": "Pearson",
            "originalPrice": 2910,
            "sellingPrice": 1455,
            "genre": "英語",
            "stock": 1,
            "sold": 5
        },
        {
            "isbn": 9789620199325,
            "title": "New Edition Impact Issues 3",
            "author": "Richard R. Day",
            "publisher": "PEARSON",
            "originalPrice": 3454,
            "sellingPrice": 1727,
            "genre": "英語",
            "stock": 2,
            "sold": 5
        },
        {
            "isbn": 9789620199318,
            "title": "Impacts Issued 2",
            "author": "Richard R Day",
            "publisher": "Pearson Longman",
            "originalPrice": 3140,
            "sellingPrice": 1570,
            "genre": "英語",
            "stock": 6,
            "sold": 5
        },
        {
            "isbn": 9788976998576,
            "title": "結婚移民者と共に学ぶ韓国語③",
            "author": "ジャンウンフェ",
            "publisher": "オンラインマーケティング",
            "originalPrice": 1450,
            "sellingPrice": 725,
            "genre": "第二言語",
            "stock": 2,
            "sold": 1
        },
        {
            "isbn": 9788955189322,
            "title": "結婚移民者と共に学ぶ韓国語②",
            "author": "ジャンウンフェ",
            "publisher": "オンラインマーケティング",
            "originalPrice": 1450,
            "sellingPrice": 725,
            "genre": "第二言語",
            "stock": 2,
            "sold": 1
        },
        {
            "isbn": 9788955189315,
            "title": "結婚移民者と共に学ぶ韓国語①",
            "author": "ジャンウンフェ",
            "publisher": "オンラインマーケティング",
            "originalPrice": 1450,
            "sellingPrice": 725,
            "genre": "第二言語",
            "stock": 2,
            "sold": 1
        },
        {
            "isbn": 9788953934283,
            "title": "서울대 한국어",
            "author": "최은규 Choi Eunkyu",
            "publisher": "TWO PONDS",
            "originalPrice": 1909,
            "sellingPrice": 955,
            "genre": "第二言語",
            "stock": 1,
            "sold": 1
        },
        {
            "isbn": 9788877157355,
            "title": "Linea diretta Nuovo (v. 1a)",
            "author": "Conforti, Corrado",
            "publisher": null,
            "originalPrice": 4000,
            "sellingPrice": 2000,
            "genre": "第二言語",
            "stock": 1,
            "sold": 1
        },
        {
            "isbn": 9788875734398,
            "title": "che storia!",
            "author": "Gabriele Pallotti",
            "publisher": "Bonaccieditore",
            "originalPrice": 7138,
            "sellingPrice": 3569,
            "genre": "第二言語",
            "stock": 1,
            "sold": 1
        },
        {
            "isbn": 9788875734275,
            "title": "gramm.it  grammatica italiana per stranieri",
            "author": "G.Iacovoni",
            "publisher": "Bonacci editore",
            "originalPrice": 20.3,
            "sellingPrice": 11,
            "genre": "第二言語",
            "stock": 1,
            "sold": 1
        },
        {
            "isbn": 9788855700160,
            "title": "Civiltapuntoit",
            "author": "Marco Mezzadri",
            "publisher": null,
            "originalPrice": 3000,
            "sellingPrice": 1500,
            "genre": "第二言語",
            "stock": 1,
            "sold": 1
        },
        {
            "isbn": 9787301077658,
            "title": "実用韓日英漢分類辞典",
            "author": null,
            "publisher": "北京大学出版社",
            "originalPrice": 400,
            "sellingPrice": 200,
            "genre": "第二言語",
            "stock": 1,
            "sold": 1
        },
        {
            "isbn": 9786200014344,
            "title": "数理統計の基礎",
            "author": "阪本雄二",
            "publisher": null,
            "originalPrice": 900,
            "sellingPrice": 450,
            "genre": "情報・統計",
            "stock": 1,
            "sold": 1
        },
        {
            "isbn": 9784944178766,
            "title": "解析力学　キャンパス・ゼミ",
            "author": "馬場敬之",
            "publisher": "マセマ",
            "originalPrice": 2200,
            "sellingPrice": 1100,
            "genre": "理科",
            "stock": 1,
            "sold": 3
        },
        {
            "isbn": 9784944178568,
            "title": "電磁気学　キャンパス・ゼミ",
            "author": "馬場敬之",
            "publisher": "マセマ",
            "originalPrice": 2520,
            "sellingPrice": 1260,
            "genre": "理科",
            "stock": 1,
            "sold": 3
        },
        {
            "isbn": 9784944178544,
            "title": "スバラシク実力がつく！大学基礎数学キャンパスゼミ",
            "author": "高杉豊",
            "publisher": "マセマ",
            "originalPrice": 2205,
            "sellingPrice": 1103,
            "genre": "数学",
            "stock": 1,
            "sold": 1
        },
        {
            "isbn": 9784944178209,
            "title": "スバラシク実力がつく！微分積分キャンパスゼミ",
            "author": "高杉豊",
            "publisher": "マセマ",
            "originalPrice": 2200,
            "sellingPrice": 1100,
            "genre": "数学",
            "stock": 1,
            "sold": 1
        },
        {
            "isbn": 9784931315501,
            "title": "新訳第3版　中国語会話301　(上)",
            "author": "康玉",
            "publisher": "語文研究社",
            "originalPrice": 1300,
            "sellingPrice": 650,
            "genre": "第二言語",
            "stock": 1,
            "sold": 1
        },
        {
            "isbn": 9784916092885,
            "title": "現代経済学の数学基礎＜上＞",
            "author": "チャン、A.C.",
            "publisher": "シーエーピー出版",
            "originalPrice": 4400,
            "sellingPrice": 2200,
            "genre": "政治・経済",
            "stock": 1,
            "sold": 1
        },
        {
            "isbn": 9784909189158,
            "title": "知的財産管理技能検定2級　厳選過去問題集　2020年度版",
            "author": "アップロード知的教育総合研究所",
            "publisher": "アップロード",
            "originalPrice": 2400,
            "sellingPrice": 1200,
            "genre": "教職・資格",
            "stock": 1,
            "sold": 10
        },
        {
            "isbn": 9784909189080,
            "title": "知的財産管理技能検定3級　厳選過去問題集　2019年度版",
            "author": "アップロード知的教育総合研究所",
            "publisher": "アップロード",
            "originalPrice": 2000,
            "sellingPrice": 1000,
            "genre": "教職・資格",
            "stock": 1,
            "sold": 10
        },
        {
            "isbn": 9784907165901,
            "title": "スバラシク実力がつく！ 線形代数 キャンパス・ゼミ 改訂4",
            "author": "馬場敬之",
            "publisher": "マセマ",
            "originalPrice": 2320,
            "sellingPrice": 1160,
            "genre": "数学",
            "stock": 1,
            "sold": 1
        },
        {
            "isbn": 9784907165659,
            "title": "演習　微分積分　キャンパス・ゼミ",
            "author": "馬場敬之",
            "publisher": "マセマ",
            "originalPrice": 2100,
            "sellingPrice": 1050,
            "genre": "数学",
            "stock": 2,
            "sold": 1
        },
        {
            "isbn": 9784907165642,
            "title": "スバラシク実力がつく！偏微分方程式キャンパスゼミ",
            "author": "馬場敬之",
            "publisher": "マセマ",
            "originalPrice": 2400,
            "sellingPrice": 1200,
            "genre": "数学",
            "stock": 1,
            "sold": 1
        },
        {
            "isbn": 9784907165567,
            "title": "スバラシク実力がつく！統計力学キャンパスゼミ",
            "author": "馬場敬之",
            "publisher": "マセマ",
            "originalPrice": 2220,
            "sellingPrice": 1110,
            "genre": "情報・統計",
            "stock": 1,
            "sold": 1
        },
        {
            "isbn": 9784907165529,
            "title": "スバラシク実力がつく！ 線形代数 キャンパス・ゼミ 改訂3",
            "author": "馬場敬之",
            "publisher": "マセマ",
            "originalPrice": 2320,
            "sellingPrice": 1160,
            "genre": "数学",
            "stock": 2,
            "sold": 1
        },
        {
            "isbn": 9784907165383,
            "title": "スバラシク実力がつく！ 線形代数 キャンパス・ゼミ 改訂2",
            "author": "馬場敬之",
            "publisher": "マセマ",
            "originalPrice": 2323,
            "sellingPrice": 1162,
            "genre": "数学",
            "stock": 1,
            "sold": 1
        },
        {
            "isbn": 9784906033584,
            "title": "公式TOEIC Listening & Reading問題種＜６＞",
            "author": "Educational Testing Service",
            "publisher": "国債ビジネスコミュニケーション協会",
            "originalPrice": 3000,
            "sellingPrice": 1500,
            "genre": "教職・資格",
            "stock": 1,
            "sold": 10
        },
        {
            "isbn": 9784905426547,
            "title": "Serious Fun fourth edition",
            "author": "James C. Jensen",
            "publisher": "Global stories Press",
            "originalPrice": null,
            "sellingPrice": null,
            "genre": "英語",
            "stock": 1,
            "sold": 5
        },
        {
            "isbn": 9784905343035,
            "title": "Moi, je... コミュニケーション",
            "author": "Bruno Vannieuwenhuyse",
            "publisher": "アルマ出版",
            "originalPrice": 2500,
            "sellingPrice": 1250,
            "genre": "第二言語",
            "stock": 3,
            "sold": 1
        },
        {
            "isbn": 9784904702055,
            "title": "憲法入門",
            "author": "長谷部恭男",
            "publisher": "羽鳥書店",
            "originalPrice": 2200,
            "sellingPrice": 1100,
            "genre": "法",
            "stock": 1,
            "sold": 1
        },
        {
            "isbn": 9784904147009,
            "title": "ラ・ソスィエテ・フランセーズ",
            "author": "Jean-Luc AZRA",
            "publisher": "アルマ出版",
            "originalPrice": 2400,
            "sellingPrice": 1200,
            "genre": "第二言語",
            "stock": 3,
            "sold": 1
        },
        {
            "isbn": 9784903520209,
            "title": "生徒指導法の実践研究",
            "author": "吉田卓司",
            "publisher": null,
            "originalPrice": 2100,
            "sellingPrice": 1050,
            "genre": "文系その他",
            "stock": 1,
            "sold": 1
        },
        {
            "isbn": 9784902964448,
            "title": "スペイン語でなんと言うんですか？",
            "author": "田村美代子",
            "publisher": "弘学社",
            "originalPrice": 1800,
            "sellingPrice": 900,
            "genre": "第二言語",
            "stock": 1,
            "sold": 1
        },
        {
            "isbn": 9784902773781,
            "title": "高校生活指導＜第212号(2021)＞ 18歳を市民に",
            "author": "全国高校生活指導研究協議会",
            "publisher": "全国高校生活指導研究協議会",
            "originalPrice": 1320,
            "sellingPrice": 660,
            "genre": "教職・資格",
            "stock": 1,
            "sold": 10
        },
        {
            "isbn": 9784902773743,
            "title": "高校生活指導　18歳を市民に",
            "author": "全国高校生活指導研究協議会",
            "publisher": "電算印刷株式会社",
            "originalPrice": 1200,
            "sellingPrice": 600,
            "genre": "教職・資格",
            "stock": 1,
            "sold": 10
        },
        {
            "isbn": 9784902773538,
            "title": "高校生活指導　18歳を市民に　教師と生徒の「息苦しさ」を開く",
            "author": "高生研",
            "publisher": null,
            "originalPrice": 1200,
            "sellingPrice": 600,
            "genre": "文系その他",
            "stock": 1,
            "sold": 1
        },
        {
            "isbn": 9784901683593,
            "title": "高電圧工学",
            "author": "日高邦彦",
            "publisher": "数理工学社",
            "originalPrice": 2600,
            "sellingPrice": 1300,
            "genre": "理科",
            "stock": 1,
            "sold": 3
        },
        {
            "isbn": 9784900790056,
            "title": "DUO［デュオ］3.0",
            "author": "鈴木陽一",
            "publisher": "アイシーピー",
            "originalPrice": 1200,
            "sellingPrice": 600,
            "genre": "英語",
            "stock": 1,
            "sold": 5
        },
        {
            "isbn": 9784894768369,
            "title": "テクスト分析入門　小説を分析的に読むための実践ガイド",
            "author": "松本和也",
            "publisher": "ひつじ書房",
            "originalPrice": 2000,
            "sellingPrice": 1000,
            "genre": "文系その他",
            "stock": 1,
            "sold": 1
        },
        {
            "isbn": 9784894761957,
            "title": "「印欧人」のことば誌―比較言語学概説―",
            "author": "アンドレ・マルティネ",
            "publisher": "ひつじ書房",
            "originalPrice": 3800,
            "sellingPrice": 1900,
            "genre": "文系その他",
            "stock": 1,
            "sold": 1
        },
        {
            "isbn": 9784894281776,
            "title": "モノグラフ 行列",
            "author": "高橋正明",
            "publisher": "フォーラム・A",
            "originalPrice": 800,
            "sellingPrice": 400,
            "genre": "数学",
            "stock": 1,
            "sold": 1
        },
        {
            "isbn": 9784891749095,
            "title": "中級汉语2",
            "author": "陳昭宜",
            "publisher": "白帝社",
            "originalPrice": 1800,
            "sellingPrice": 900,
            "genre": "第二言語",
            "stock": 3,
            "sold": 1
        },
        {
            "isbn": 9784891746889,
            "title": "中級汉语",
            "author": "陳昭宜",
            "publisher": "白帝社",
            "originalPrice": 1800,
            "sellingPrice": 900,
            "genre": "第二言語",
            "stock": 5,
            "sold": 1
        },
        {
            "isbn": 9784891746360,
            "title": "トーク・トピックス",
            "author": "沈国威",
            "publisher": "白帝社",
            "originalPrice": 2500,
            "sellingPrice": 1250,
            "genre": "第二言語",
            "stock": 1,
            "sold": 1
        },
        {
            "isbn": 9784890853700,
            "title": "日本史　史料問題　一問一答【完全版】",
            "author": "金谷俊一郎",
            "publisher": "ナガセ",
            "originalPrice": 952,
            "sellingPrice": 476,
            "genre": "歴史",
            "stock": 1,
            "sold": 1
        },
        {
            "isbn": 9784890134304,
            "title": "老年医学系統講義テキスト",
            "author": "日本老年医学会",
            "publisher": "西村書店",
            "originalPrice": 4500,
            "sellingPrice": 2250,
            "genre": "理科",
            "stock": 1,
            "sold": 3
        },
        {
            "isbn": 9784888962834,
            "title": "会話で学ぶロシア語　中級Ⅰ",
            "author": "A.ディボフスキー",
            "publisher": "南雲堂フェニックス",
            "originalPrice": 1900,
            "sellingPrice": 950,
            "genre": "第二言語",
            "stock": 1,
            "sold": 1
        }
    ]
}