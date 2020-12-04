import React from 'react'

import ImageMapTohoku from 'image-map-tohoku'
import 'image-map-tohoku/dist/index.css'

const IMAGE_WIDTH = 1549; //height: 1686
const URL = 'https://skyace.co.jp/demo/tohoku-map1.jpg'
const MAP = {
  name: 'my-map',
  areas: [
    //住設・建材コーナー
    {
      name: '1',
      shape: 'rect',
      coords: [1402, 1150, 1434, 1384],
      info: {
        heading: '1:TOTO（株） ',
        cornerName : '住設・建材コーナー',
        logoUrl:
          'https://chubu-mirai-images.s3.amazonaws.com/1604651044401_el4mwtnfxl/04.png',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    {
      name: '4',
      shape: 'rect',
      coords: [1402, 1150, 1434, 1075],
      info: {
        heading: '4:（株）KVK ',
        cornerName : '住設・建材コーナー',
        logoUrl:
          'https://chubu-mirai-images.s3.amazonaws.com/1604651044401_el4mwtnfxl/04.png',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    {
      name: '6',
      shape: 'rect',
      coords: [1402, 1005, 1434, 1075],
      info: {
        heading: '6:コンビウィズ（株） ',
        cornerName : '住設・建材コーナー',
        logoUrl:
          'https://chubu-mirai-images.s3.amazonaws.com/1604651044401_el4mwtnfxl/04.png',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    {
      name: '2',
      shape: 'rect',
      coords: [1266, 1275, 1297, 1347],
      info: {
        heading: '2:クリナップ（株） ',
        cornerName : '住設・建材コーナー',
        logoUrl:
          'https://chubu-mirai-images.s3.amazonaws.com/1604651044401_el4mwtnfxl/04.png',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    {
      name: '3',
      shape: 'rect',
      coords: [1266, 1275, 1297, 1129],
      info: {
        heading: '3:タカラスタンダード（株） ',
        cornerName : '住設・建材コーナー',
        logoUrl:
          'https://chubu-mirai-images.s3.amazonaws.com/1604651044401_el4mwtnfxl/04.png',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },

    {
      name: '5',
      shape: 'rect',
      coords: [1266, 1058, 1297, 1129],
      info: {
        heading: '5:マイセット（株） ',
        cornerName : '住設・建材コーナー',
        logoUrl:
          'https://chubu-mirai-images.s3.amazonaws.com/1604651044401_el4mwtnfxl/04.png',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },

    {
      name: '7',
      shape: 'rect',
      coords: [1266, 1058, 1297, 986],
      info: {
        heading: '7:未来工房 ',
        cornerName : '住設・建材コーナー',
        logoUrl:
          'https://chubu-mirai-images.s3.amazonaws.com/1604651044401_el4mwtnfxl/04.png',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    //給湯・暖房コーナー
    {
      name: '1',
      shape: 'rect',
      coords: [1266, 911, 1297, 839],
      info: {
        heading: '1:（株）パロマ ',
        cornerName : '給湯・暖房コーナー',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    {
      name: '3',
      shape: 'rect',
      coords: [1266, 768, 1297, 839],
      info: {
        heading: '3:（株）コロナ ',
        cornerName : '給湯・暖房コーナー',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    {
      name: '4',
      shape: 'rect',
      coords: [1266, 768, 1297, 696],
      info: {
        heading: '4:（株）日本イトミック ',
        cornerName : '給湯・暖房コーナー',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },

    {
      name: '6',
      shape: 'rect',
      coords: [1266, 624, 1297, 696],
      info: {
        heading: '6:（株）トヨトミ ',
        cornerName : '給湯・暖房コーナー',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    {
      name: '8',
      shape: 'rect',
      coords: [1266, 624, 1297, 552],
      info: {
        heading: '8:リンナイ（株） ',
        cornerName : '給湯・暖房コーナー',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },

    {
      name: '2',
      shape: 'rect',
      coords: [1402, 770, 1434, 914],
      info: {
        heading: '2:（株）ノーリツ ',
        cornerName : '給湯・暖房コーナー',
        logoUrl:
          'https://chubu-mirai-images.s3.amazonaws.com/1604651044401_el4mwtnfxl/04.png',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    {
      name: '5',
      shape: 'rect',
      coords: [1402, 770, 1434, 697],
      info: {
        heading: '5:サンポット（株） ',
        cornerName : '給湯・暖房コーナー',
        logoUrl:
          'https://chubu-mirai-images.s3.amazonaws.com/1604651044401_el4mwtnfxl/04.png',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    {
      name: '7',
      shape: 'rect',
      coords: [1402, 625, 1434, 697],
      info: {
        heading: '7:パーパス（株） ',
        cornerName : '給湯・暖房コーナー',
        logoUrl:
          'https://chubu-mirai-images.s3.amazonaws.com/1604651044401_el4mwtnfxl/04.png',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    //空調・電化コーナー
    {
      name: '1',
      shape: 'rect',
      coords: [1402, 625, 1434, 479],
      info: {
        heading: '1: パナソニック（株）ハウジングシステム事業部',
        cornerName : '空調・電化コーナー',
        logoUrl:
          'https://chubu-mirai-images.s3.amazonaws.com/1604651044401_el4mwtnfxl/04.png',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    {
      name: '4',
      shape: 'rect',
      coords: [1402, 263, 1434, 479],
      info: {
        heading: '4:ダイキンHVACソリューション東北（株） ',
        cornerName : '空調・電化コーナー',
        logoUrl:
          'https://chubu-mirai-images.s3.amazonaws.com/1604651044401_el4mwtnfxl/04.png',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    {
      name: '2',
      shape: 'rect',
      coords: [1266, 479, 1297, 552],
      info: {
        heading: '2:東芝キヤリア（株） ',
        cornerName : '空調・電化コーナー',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    {
      name: '3',
      shape: 'rect',
      coords: [1266, 479, 1297, 334],
      info: {
        heading: '3:三菱電機住環境システムズ（株） ',
        cornerName : '空調・電化コーナー',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    //バブル・機材・産機コーナー
    {
      name: '1',
      shape: 'rect',
      coords: [1235, 409, 1266, 334],
      info: {
        heading: '1: 愛知時計電機（株）',
        cornerName : 'バブル・機材・産機コーナー',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    {
      name: '3',
      shape: 'rect',
      coords: [1235, 480, 1266, 409],
      info: {
        heading: '3:（株）サンダイヤ',
        cornerName : 'バブル・機材・産機コーナー',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    {
      name: '5',
      shape: 'rect',
      coords: [1235, 551, 1266, 480],
      info: {
        heading: '5:（株）ミナミサワ',
        cornerName : 'バブル・機材・産機コーナー',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    {
      name: '6',
      shape: 'rect',
      coords: [1235, 624, 1266, 551],
      info: {
        heading: '6:（株）兼工場',
        cornerName : 'バブル・機材・産機コーナー',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    {
      name: '8',
      shape: 'rect',
      coords: [1235, 696, 1266, 624],
      info: {
        heading: '8:（株）長谷川鋳工所',
        cornerName : 'バブル・機材・産機コーナー',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
      {
        name: '10',
        shape: 'rect',
        coords: [1235, 768, 1266, 696],
        info: {
          heading: '10:（株）フジキン',
          cornerName : 'バブル・機材・産機コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },　
      {
        name: '12',
        shape: 'rect',
        coords: [1235, 840, 1266, 768],
        info: {
          heading: '12:（株）光合金製作所',
          cornerName : 'バブル・機材・産機コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },　
      {
        name: '14',
        shape: 'rect',
        coords: [1235, 912, 1266, 840],
        info: {
          heading: '14: ホーコス（株）',
          cornerName : 'バブル・機材・産機コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },　
      {
        name: '2',
        shape: 'rect',
        coords: [1102, 409, 1134, 334],
        info: {
          heading: '2:（株）キッツ 三吉バルブ（株) 東洋バルブ（株）',
          cornerName : 'バブル・機材・産機コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },　
      {
        name: '4',
        shape: 'rect',
        coords: [1102, 551, 1134, 409],
        info: {
          heading: '4: 日栄インテック（株）',
          cornerName : 'バブル・機材・産機コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },　
      {
        name: '7',
        shape: 'rect',
        coords: [1102, 623, 1134, 551],
        info: {
          heading: '7:（株）武村製作所',
          cornerName : 'バブル・機材・産機コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },　
      {
        name: '9',
        shape: 'rect',
        coords: [1102, 696, 1134, 623],
        info: {
          heading: '9:（株）アカギ',
          cornerName : 'バブル・機材・産機コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },　
      {
        name: '11',
        shape: 'rect',
        coords: [1102, 768, 1134, 696],
        info: {
          heading: '11: 電熱産業（株）',
          cornerName : 'バブル・機材・産機コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },　
      {
        name: '13',
        shape: 'rect',
        coords: [1102, 840, 1134, 768],
        info: {
          heading: '13：大明工機（株）、エマソンバルブアンドコントロールジャパン（株）、（株）イワキ、（株）ITWパフォーマンスポリマーズ&フルイズジャパン、小澤物産（株)',
          cornerName : 'バブル・機材・産機コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },　
      {
        name: '15',
        shape: 'rect',
        coords: [1102, 912, 1134, 840],
        info: {
          heading: '15：(株）ベン',
          cornerName : 'バブル・機材・産機コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },　
    //ITソリューションコーナー
    {
      name: '14',
      shape: 'rect',
      coords: [1072, 457, 1102, 407],
      info: {
        heading: '14: 提案ソフト EST ダイキン（株）',
        cornerName : 'ITソリューションコーナー',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    {
      name: '13',
      shape: 'rect',
      coords: [1072, 502, 1102, 457],
      info: {
        heading: '13: お湯 net　（株）ノーリツ',
        cornerName : 'ITソリューションコーナー',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    {
      name: '12',
      shape: 'rect',
      coords: [1072, 552, 1102, 502],
      info: {
        heading: '12: TOTO（株）TETRA/ e - PRE',
        cornerName : 'ITソリューションコーナー',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    {
      name: '10',
      shape: 'rect',
      coords: [1072, 624, 1102, 552],
      info: {
        heading: '10: 富士ゼロックス宮城（株）',
        cornerName : 'ITソリューションコーナー',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    {
      name: '8',
      shape: 'rect',
      coords: [1072, 696, 1102, 624],
      info: {
        heading: '8：OA 家具',
        cornerName : 'ITソリューションコーナー',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    {
      name: '6',
      shape: 'rect',
      coords: [1072, 768, 1102, 696],
      info: {
        heading: '6：HOPEnet',
        cornerName : 'ITソリューションコーナー',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    {
      name: '4',
      shape: 'rect',
      coords: [1072, 841, 1102, 768],
      info: {
        heading: '4：OPS',
        cornerName : 'ITソリューションコーナー',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    {
      name: '2',
      shape: 'rect',
      coords: [1072, 913, 1102, 841],
      info: {
        heading: '2：AI/ロボット',
        cornerName : 'ITソリューションコーナー',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    {
      name: '16',
      shape: 'rect',
      coords: [952, 407, 982, 335],
      info: {
        heading: '16:（株）建設システム',
        cornerName : 'ITソリューションコーナー',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    {
      name: '15',
      shape: 'rect',
      coords: [952, 479, 982, 407],
      info: {
        heading: '15:（株）コンピューターシステム研究所',
        cornerName : 'ITソリューションコーナー',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    {
      name: '11',
      shape: 'rect',
      coords: [952, 551, 982, 479],
      info: {
        heading: '11: 応研（株）',
        cornerName : 'ITソリューションコーナー',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    {
      name: '9',
      shape: 'rect',
      coords: [952, 623, 982, 551],
      info: {
        heading: '9:（株）システムズナカシマ',
        cornerName : 'ITソリューションコーナー',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    {
      name: '7',
      shape: 'rect',
      coords: [952, 696, 982, 623],
      info: {
        heading: '7: 石田データサービス（株）',
        cornerName : 'ITソリューションコーナー',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    {
      name: '5',
      shape: 'rect',
      coords: [952, 768, 982, 696],
      info: {
        heading: '5: ダイキン工業（株）電子システム工業部',
        cornerName : 'ITソリューションコーナー',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    {
      name: '3',
      shape: 'rect',
      coords: [952, 840, 982, 768],
      info: {
        heading: '3: (株）スタッグ',
        cornerName : 'ITソリューションコーナー',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
    {
      name: '1',
      shape: 'rect',
      coords: [952, 914, 982, 840],
      info: {
        heading: '1: (株）アンドパット',
        cornerName : 'ITソリューションコーナー',
        link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
      }
    },
       //工具コーナー
       {
        name: '1',
        shape: 'rect',
        coords: [920, 371, 952, 335],
        info: {
          heading: '1: パナソニック（株）',
          cornerName : '工具コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
       {
        name: '2',
        shape: 'rect',
        coords: [920, 451, 952, 381],
        info: {
          heading: '2: ユニカ（株）',
          cornerName : '工具コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
       {
        name: '3',
        shape: 'rect',
        coords: [920, 498, 952, 461],
        info: {
          heading: '3: 土牛産業（株）',
          cornerName : '工具コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
       {
        name: '4',
        shape: 'rect',
        coords: [920, 542, 952, 508],
        info: {
          heading: '3:（株）MCCコーポレーション',
          cornerName : '工具コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
       {
        name: '5',
        shape: 'rect',
        coords: [920, 589, 952, 552],
        info: {
          heading: '5:（株）レジトン',
          cornerName : '工具コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
       {
        name: '6',
        shape: 'rect',
        coords: [920, 670, 952, 599],
        info: {
          heading: '6: ボッシュ（株）',
          cornerName : '工具コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
       {
        name: '7',
        shape: 'rect',
        coords: [920, 715, 952, 680],
        info: {
          heading: '7:（株）ハウスビーエム',
          cornerName : '工具コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
       {
        name: '8',
        shape: 'rect',
        coords: [920, 830, 952, 725],
        info: {
          heading: '7:アサダ（株）',
          cornerName : '工具コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
       {
        name: '9',
        shape: 'rect',
        coords: [920, 913, 952, 840],
        info: {
          heading: '9:（株）コクサイ',
          cornerName : '工具コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
       {
        name: '10',
        shape: 'rect',
        coords: [920, 1058, 952, 950],
        info: {
          heading: '10: 京セラインダストリアルツールズ販売株式会社',
          cornerName : '工具コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
       {
        name: '11',
        shape: 'rect',
        coords: [920, 1138, 952, 1068],
        info: {
          heading: '11: やまびこジャパン（株）',
          cornerName : '工具コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
      {
        name: '22',
        shape: 'rect',
        coords: [783, 390, 846, 354],
        info: {
          heading: '22:（株）ワキタ',
          cornerName : '工具コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
      {
        name: '23',
        shape: 'rect',
        coords: [694, 390, 783, 354],
        info: {
          heading: '23: レッキス工業（株）',
          cornerName : '工具コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
       {
        name: '12',
        shape: 'rect',
        coords: [800, 1166, 920, 1201],
        info: {
          heading: '12: アルインコ（株）',
          cornerName : '工具コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
      {
        name: '21',
        shape: 'rect',
        coords: [770, 623, 799, 480],
        info: {
          heading: '21:（株）マキタ',
          cornerName : '工具コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
      {
        name: '20',
        shape: 'rect',
        coords: [770, 707, 799, 633],
        info: {
          heading: '20:（株）ミヤナガ',
          cornerName : '工具コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
      {
        name: '19',
        shape: 'rect',
        coords: [770, 750, 799, 715],
        info: {
          heading: '19: トップ工業（株）',
          cornerName : '工具コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
      {
        name: '18',
        shape: 'rect',
        coords: [770, 868, 799, 760],
        info: {
          heading: '18: 工機販売（株）',
          cornerName : '工具コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
      {
        name: '17',
        shape: 'rect',
        coords: [770, 912, 799, 878],
        info: {
          heading: '17: (株）ハタヤリミテッド',
          cornerName : '工具コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
      {
        name: '16',
        shape: 'rect',
        coords: [770, 985, 799, 913],
        info: {
          heading: '16: 三笠産業 (株）',
          cornerName : '工具コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
      {
        name: '15',
        shape: 'rect',
        coords: [770, 1066, 799, 995],
        info: {
          heading: '15: 育良精機 (株）',
          cornerName : '工具コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
      {
        name: '14',
        shape: 'rect',
        coords: [770, 1102, 799, 1068],
        info: {
          heading: '14: 三京ダイヤモンド工業 (株）',
          cornerName : '工具コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
      {
        name: '13',
        shape: 'rect',
        coords: [770, 1140, 799, 1103],
        info: {
          heading: '13: 日本ヒルティ (株）',
          cornerName : '工具コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
       //生活・趣味商品・健康コーナー
       {
        name: '1',
        shape: 'rect',
        coords: [738, 551, 770, 480],
        info: {
          heading: '1: 三菱電機住環境システムズ（株）',
          cornerName : '生活・趣味商品・健康コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
       {
        name: '2',
        shape: 'rect',
        coords: [738, 623, 770, 551],
        info: {
          heading: '2: シャープマーケティングジャパン（株）',
          cornerName : '生活・趣味商品・健康コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
       {
        name: '3',
        shape: 'rect',
        coords: [738, 696, 770, 623],
        info: {
          heading: '3: 家事ラクコーナー',
          cornerName : '生活・趣味商品・健康コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
       {
        name: '4',
        shape: 'rect',
        coords: [738, 768, 770, 696],
        info: {
          heading: '4: （株）メルシー',
          cornerName : '生活・趣味商品・健康コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
       {
        name: '5',
        shape: 'rect',
        coords: [738, 842, 770, 768],
        info: {
          heading: '5: （株）廣畑',
          cornerName : '生活・趣味商品・健康コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
       {
        name: '6',
        shape: 'rect',
        coords: [738, 914, 770, 842],
        info: {
          heading: '6: （株）MJ',
          cornerName : '生活・趣味商品・健康コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
       {
        name: '7',
        shape: 'rect',
        coords: [738, 985, 770, 914],
        info: {
          heading: '7: （株）コイノテックス',
          cornerName : '生活・趣味商品・健康コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
       {
        name: '8',
        shape: 'rect',
        coords: [738, 1057, 770, 985],
        info: {
          heading: '8:  エース企画販売（株）',
          cornerName : '生活・趣味商品・健康コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
       {
        name: '9',
        shape: 'rect',
        coords: [738, 1129, 770, 1057],
        info: {
          heading: '9:（株）日本トリム、（株）エスエスショップ',
          cornerName : '生活・趣味商品・健康コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
      {
        name: '15',
        shape: 'rect',
        coords: [633, 589, 664, 518],
        info: {
          heading: '15: フィリップモリスジャパン（株）',
          cornerName : '生活・趣味商品・健康コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
      {
        name: '14',
        shape: 'rect',
        coords: [633, 731, 664, 589],
        info: {
          heading: '14: 健康快適コーナー',
          cornerName : '生活・趣味商品・健康コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
      {
        name: '13',
        shape: 'rect',
        coords: [633, 950, 664, 732],
        info: {
          heading: '13: 健康快適コーナー',
          cornerName : '生活・趣味商品・健康コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
      {
        name: '12',
        shape: 'rect',
        coords: [633, 1020, 664, 950],
        info: {
          heading: '12: ヤマゼンクリエイト（株）',
          cornerName : '生活・趣味商品・健康コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
      {
        name: '11',
        shape: 'rect',
        coords: [633, 1092, 664, 1020],
        info: {
          heading: '11: エコワン',
          cornerName : '生活・趣味商品・健康コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
      {
        name: '16',
        shape: 'rect',
        coords: [525, 625, 555, 551],
        info: {
          heading: '16: フィリップモリスジャパン（株）',
          cornerName : '生活・趣味商品・健康コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
      {
        name: '17',
        shape: 'rect',
        coords: [525, 695, 555, 625],
        info: {
          heading: '17: コロナ対策コーナー',
          cornerName : '生活・趣味商品・健康コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
      {
        name: '10',
        shape: 'rect',
        coords: [603, 1221, 725, 1183],
        info: {
          heading: '10: 銀座山形屋',
          cornerName : '生活・趣味商品・健康コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
       //特価コーナー
      {
        name: '1',
        shape: 'rect',
        coords: [525, 768, 555, 695],
        info: {
          heading: '17: 特価コーナー',
          cornerName : '特価コーナーコーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
       //景品コーナー
       {
        name: '2',
        shape: 'rect',
        coords: [525, 840, 555, 768],
        info: {
          heading: '2: （株）ダンロップスポーツマーケティング',
          cornerName : '景品コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
       {
        name: '3',
        shape: 'rect',
        coords: [525, 912, 555, 840],
        info: {
          heading: '3: 牛タン　利休',
          cornerName : '景品コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
      {
        name: '4',
        shape: 'rect',
        coords: [116, 1383, 146, 1220],
        info: {
          heading: '４: 三越',
          cornerName : '景品コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
      {
        name: '1',
        shape: 'rect',
        coords: [569, 430, 628, 394],
        info: {
          heading: '1: レッキス工業（株）',
          cornerName : '工具コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
       //管財・継手コーナー
      {
        name: '2',
        shape: 'rect',
        coords: [1235, 1057, 1266, 985],
        info: {
          heading: '2: 因幡電器産業（株）',
          cornerName : '管財・継手コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },　
      {
        name: '4',
        shape: 'rect',
        coords: [1235, 1130, 1266, 1057],
        info: {
          heading: '4:（株）タブチ',
          cornerName : '管財・継手コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },　
      {
        name: '6',
        shape: 'rect',
        coords: [1235, 1201, 1266, 1130],
        info: {
          heading: '6: 前澤化成工業（株）',
          cornerName : '管財・継手コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },　
      {
        name: '8',
        shape: 'rect',
        coords: [1235, 1273, 1266, 1201],
        info: {
          heading: '8: NJT銅管販売（株）、NJT銅管（株）、東洋フイツテング（株）',
          cornerName : '管財・継手コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },　
      {
        name: '9',
        shape: 'rect',
        coords: [1150, 1347, 1210, 1310],
        info: {
          heading: '9: シーシーアイ（株）',
          cornerName : '管財・継手コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },　
      {
        name: '10',
        shape: 'rect',
        coords: [1087, 1347, 1150, 1310],
        info: {
          heading: '10: 昭和電工建材（株）',
          cornerName : '管財・継手コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },　
      {
        name: '11',
        shape: 'rect',
        coords: [920, 1346, 983, 1201],
        info: {
          heading: '11: 積水化学工業（株）',
          cornerName : '管財・継手コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },　
      {
        name: '1',
        shape: 'rect',
        coords: [1102, 985, 1132, 912],
        info: {
          heading: '1：(株）テクノフレックス',
          cornerName : '管財・継手コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },　
      {
        name: '3',
        shape: 'rect',
        coords: [1102, 1057, 1134, 985],
        info: {
          heading: '3：(株）アトムズ',
          cornerName : '管財・継手コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },　
      {
        name: '5',
        shape: 'rect',
        coords: [1102, 1130, 1134, 1057],
        info: {
          heading: '5： アキレス　(株）',
          cornerName : '管財・継手コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },　
      {
        name: '7',
        shape: 'rect',
        coords: [1102, 1200, 1134, 1130],
        info: {
          heading: '7:　(株）ベンカン',
          cornerName : '管財・継手コーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },　
       //土木・ポンプコーナー
         {
        name: '7',
        shape: 'rect',
        coords: [1072, 985, 1102, 912],
        info: {
          heading: '7：(株）ライズ',
          cornerName : '土木・ポンプコーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },　
         {
        name: '6',
        shape: 'rect',
        coords: [1072, 1056, 1102, 985],
        info: {
          heading: '6：(株）荏原製作所',
          cornerName : '土木・ポンプコーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },　
         {
        name: '4',
        shape: 'rect',
        coords: [1072, 1130, 1102, 1056],
        info: {
          heading: '4：(株）寺田ポンプ',
          cornerName : '土木・ポンプコーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },　　
         {
        name: '2',
        shape: 'rect',
        coords: [1072, 1200, 1102, 1130],
        info: {
          heading: '2： SFA Japan(株）',
          cornerName : '土木・ポンプコーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },　
      {
        name: '5',
        shape: 'rect',
        coords: [952, 1059, 982, 987],
        info: {
          heading: '5: (株）ホーシン',
          cornerName : '土木・ポンプコーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
      {
        name: '3',
        shape: 'rect',
        coords: [952, 1130, 982, 1059],
        info: {
          heading: '3: (株）鶴見製作所',
          cornerName : '土木・ポンプコーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
      {
        name: '1',
        shape: 'rect',
        coords: [952, 1200, 982, 1130],
        info: {
          heading: '1: テラル (株)',
          cornerName : '土木・ポンプコーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
      //ホスト店
      {
        name: '1',
        shape: 'rect',
        coords: [102, 578, 132, 509],
        info: {
          heading: '1: （有）ミウラ管財',
          cornerName : 'ホスト店ー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
      {
        name: '2',
        shape: 'rect',
        coords: [102, 651, 132, 578],
        info: {
          heading: '2: 大森産業（株）',
          cornerName : 'ホスト店ー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
      {
        name: '3',
        shape: 'rect',
        coords: [102, 750, 132, 676],
        info: {
          heading: '3: 大谷産業（株）',
          cornerName : 'ホスト店ー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
      {
        name: '4',
        shape: 'rect',
        coords: [102, 822, 132, 750],
        info: {
          heading: '4: 東栄産業（株）',
          cornerName : 'ホスト店ー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
      {
        name: '5',
        shape: 'rect',
        coords: [102, 892, 132, 822],
        info: {
          heading: '5: （株）みちのく管財',
          cornerName : 'ホスト店ー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
      {
        name: '6',
        shape: 'rect',
        coords: [102, 988, 132, 917],
        info: {
          heading: '6: カヤバ管財（株）',
          cornerName : 'ホスト店ー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
      {
        name: '7',
        shape: 'rect',
        coords: [102, 1060, 132, 988],
        info: {
          heading: '7: （有）狩野商品',
          cornerName : 'ホスト店ー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
        //みらいタウン
      {
        name: '1',
        shape: 'rect',
        coords: [846, 242, 875, 331],
        info: {
          heading: '1:　みらいタウン',
          cornerName : 'みらいタウン',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
   //提案
      {
        name: '1',
        shape: 'rect',
        coords: [746, 1390, 913, 1267],
        info: {
          heading: '1: ミニセミナー',
          cornerName : '提案',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },　
      {
        name: '2',
        shape: 'rect',
        coords: [1072, 406, 1102, 335],
        info: {
          heading: '2:一般社団法人ベターライフリフォーム協会',
          cornerName : 'ITソリューションコーナー',
          link: 'https://v-messe.jp/hat/mirai2020chubu/26/index.html'
        }
      },
    ]}
const App = () => {
  return (
    <div style={{margin: 0}}>
      <ImageMapTohoku
        imageUrl={URL}
        imageWidth={IMAGE_WIDTH}
        imageMap={MAP}
        text='Create React Library Example 😄'
      />
    </div>
  )
}

export default App
