const teamBadges = {
  "DSHS SnowTrex Köln": {
    "short": "DSK",
    "color": "#0D6FB8",
    "text": "#FFFFFF"
  },
  "Eintracht Spontent Düsseldorf": {
    "short": "ESD",
    "color": "#343434",
    "text": "#FFFFFF"
  },
  "ESA Grimma Volleys": {
    "short": "EGV",
    "color": "#C3C3C3",
    "text": "#111111"
  },
  "BayerVolleys Leverkusen": {
    "short": "BVL",
    "color": "#343434",
    "text": "#FFFFFF"
  },
  "NawaRo Straubing": {
    "short": "STR",
    "color": "#EE7101",
    "text": "#FFFFFF"
  },
  "Neuseenland-Volleys Markkleeberg": {
    "short": "NVM",
    "color": "#65B32E",
    "text": "#FFFFFF"
  },
  "Sparkassen Wildcats Stralsund": {
    "short": "SWS",
    "color": "#343434",
    "text": "#FFFFFF"
  },
  "TV Planegg-Krailling": {
    "short": "TVP",
    "color": "#A4CFA1",
    "text": "#111111"
  },
  "TV Waldgirmes": {
    "short": "TVW",
    "color": "#3898CF",
    "text": "#FFFFFF"
  },
  "VCO Dresden": {
    "short": "VCO",
    "color": "#009CD0",
    "text": "#FFFFFF"
  },
  "VfL Oythe": {
    "short": "OYT",
    "color": "#E31825",
    "text": "#FFFFFF"
  },
  "Rote Raben Vilsbiburg": {
    "short": "RRV",
    "color": "#E20010",
    "text": "#FFFFFF"
  },
  "BBSC Berlin": {
    "short": "BER",
    "color": "#D70079",
    "text": "#FFFFFF"
  },
  "TV Dingolfing": {
    "short": "TVD",
    "color": "#E0B187",
    "text": "#111111"
  },
  "TV Hörde": {
    "short": "TVH",
    "color": "#111111",
    "text": "#FFFFFF"
  }
};

const teamProfileUrls = {
  "DSHS SnowTrex Köln": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308895",
  "Eintracht Spontent Düsseldorf": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776311815",
  "ESA Grimma Volleys": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308803",
  "BayerVolleys Leverkusen": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308933",
  "NawaRo Straubing": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308823",
  "Neuseenland-Volleys Markkleeberg": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309559",
  "Sparkassen Wildcats Stralsund": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309386",
  "TV Planegg-Krailling": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309673",
  "TV Waldgirmes": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309795",
  "VCO Dresden": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309105",
  "VfL Oythe": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308853",
  "Rote Raben Vilsbiburg": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309082",
  "BBSC Berlin": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776308987",
  "TV Dingolfing": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309004",
  "TV Hörde": "https://www.volleyball-bundesliga.de/cms/home/2_bundesliga_frauen/2_bundesliga_frauen_pro/mannschaften.xhtml?c.teamId=776309275"
};

const teamLogoUrls = {
  "DSHS SnowTrex Köln": "https://www.volleyball-bundesliga.de/uploads/9d7057ef-e7c8-4d41-9c70-3efce1b653a3/DSHS+SnowTrex+K%C3%B6ln.png",
  "BBSC Berlin": "https://www.volleyball-bundesliga.de/uploads/131fc503-06e0-4f69-a475-84adf278b0d9/BBSC+Berlin.png",
  "BayerVolleys Leverkusen": "https://www.volleyball-bundesliga.de/uploads/bb11fe67-9f40-49ed-a42f-1e99316dadf9/Bayer+Leverkusen.png",
  "ESA Grimma Volleys": "https://www.volleyball-bundesliga.de/uploads/e1c6edbd-64a5-4055-8f01-28c03e70f558/ESA+Grimma+Volleys_kreis.png",
  "Eintracht Spontent Düsseldorf": "https://www.volleyball-bundesliga.de/uploads/11eb6af6-6268-4767-8c60-813b6161d2fc/Eintracht+Spontent_Kreis.png",
  "TV Hörde": "https://www.volleyball-bundesliga.de/uploads/0a049112-a6b6-49b9-8e9d-38f09c907cb7/TV+H%C3%B6rde.png",
  "VfL Oythe": "https://www.volleyball-bundesliga.de/uploads/10c17d7b-d082-4d7d-a4e0-f1d800544ff8/oythe.png",
  "NawaRo Straubing": "https://www.volleyball-bundesliga.de/uploads/825c2558-e734-45c0-a93d-261df75fb4c3/Straubing.png",
  "Neuseenland-Volleys Markkleeberg": "https://www.volleyball-bundesliga.de/uploads/befce1b4-d568-4ffd-928a-d351be3301eb/Neuseenland-Volleys+Markkleeberg.png",
  "Rote Raben Vilsbiburg": "https://www.volleyball-bundesliga.de/uploads/19de3821-7526-4e46-a0b9-9cd60bf0535e/Vilsbiburg.png",
  "Sparkassen Wildcats Stralsund": "https://www.volleyball-bundesliga.de/uploads/edc53223-6279-497b-8f0c-a3b2bf93eed8/Sparkassen+Wildcats+Stralsund.png",
  "TV Dingolfing": "https://www.volleyball-bundesliga.de/uploads/b87f5e38-7eb4-4966-84a1-be0e4839f151/TV+Dingolfing.png",
  "TV Planegg-Krailling": "https://www.volleyball-bundesliga.de/uploads/c44d2e47-3206-4312-ac8e-067faff3ac85/Planegg-Krailling_Kreis.png",
  "TV Waldgirmes": "https://www.volleyball-bundesliga.de/uploads/89cb6afe-a0c8-4c30-a4c6-34cbe79176aa/TV_Waldgirmes_kreis.png",
  "VCO Dresden": "https://www.volleyball-bundesliga.de/uploads/33ebca47-ee88-4505-80a3-8f625a651bdc/Dresden.png"
};

const youtubeViewsDate = "29.06.2026";

const youtubeViews = {
  "3007": 1736,
  "3012": 1579,
  "3021": 2873,
  "3024": 1526,
  "3035": 960,
  "3036": 1399,
  "3049": 1001,
  "3055": 1478,
  "3063": 1147,
  "3067": 4878,
  "3077": 656,
  "3079": 869,
  "3091": 2110,
  "3098": 1645,
  "3103": 923,
  "3112": 1400,
  "3115": 1265,
  "3126": 711,
  "3127": 1101,
  "3140": 840,
  "3146": 922,
  "3154": 1571,
  "3158": 2166,
  "3168": 1143,
  "3170": 1139,
  "3182": 1238,
  "3196": 1466,
  "3210": 1357
};

const finalStandingsSource = "VBL-Tabelle, Stand 06.05.2026";

const finalStandings = {
  "overall": [
    {
      "rank": 1,
      "team": "Rote Raben Vilsbiburg",
      "played": 28,
      "wins": 26,
      "sets": "80:11",
      "balls": "2215:1651",
      "points": 79
    },
    {
      "rank": 2,
      "team": "NawaRo Straubing",
      "played": 28,
      "wins": 24,
      "sets": "76:28",
      "balls": "2439:1973",
      "points": 72
    },
    {
      "rank": 3,
      "team": "VfL Oythe",
      "played": 28,
      "wins": 24,
      "sets": "75:32",
      "balls": "2485:2184",
      "points": 69
    },
    {
      "rank": 4,
      "team": "TV Planegg-Krailling",
      "played": 28,
      "wins": 22,
      "sets": "71:30",
      "balls": "2327:2023",
      "points": 63
    },
    {
      "rank": 5,
      "team": "VCO Dresden",
      "played": 28,
      "wins": 17,
      "sets": "65:45",
      "balls": "2422:2341",
      "points": 52
    },
    {
      "rank": 6,
      "team": "DSHS SnowTrex Köln",
      "played": 28,
      "wins": 15,
      "sets": "56:52",
      "balls": "2357:2400",
      "points": 45
    },
    {
      "rank": 7,
      "team": "BayerVolleys Leverkusen",
      "played": 28,
      "wins": 15,
      "sets": "55:53",
      "balls": "2358:2293",
      "points": 44
    },
    {
      "rank": 8,
      "team": "TV Waldgirmes",
      "played": 28,
      "wins": 14,
      "sets": "54:49",
      "balls": "2258:2248",
      "points": 42
    },
    {
      "rank": 9,
      "team": "ESA Grimma Volleys",
      "played": 28,
      "wins": 13,
      "sets": "49:59",
      "balls": "2282:2309",
      "points": 35
    },
    {
      "rank": 10,
      "team": "Sparkassen Wildcats Stralsund",
      "played": 28,
      "wins": 11,
      "sets": "49:63",
      "balls": "2332:2464",
      "points": 35
    },
    {
      "rank": 11,
      "team": "Eintracht Spontent Düsseldorf",
      "played": 28,
      "wins": 9,
      "sets": "43:67",
      "balls": "2284:2456",
      "points": 27
    },
    {
      "rank": 12,
      "team": "Neuseenland-Volleys Markkleeberg",
      "played": 28,
      "wins": 7,
      "sets": "34:70",
      "balls": "2128:2386",
      "points": 21
    },
    {
      "rank": 13,
      "team": "TV Dingolfing",
      "played": 28,
      "wins": 5,
      "sets": "32:75",
      "balls": "2134:2493",
      "points": 18
    },
    {
      "rank": 14,
      "team": "TV Hörde",
      "played": 28,
      "wins": 4,
      "sets": "26:77",
      "balls": "2067:2405",
      "points": 16
    },
    {
      "rank": 15,
      "team": "BBSC Berlin",
      "played": 28,
      "wins": 4,
      "sets": "24:78",
      "balls": "1968:2430",
      "points": 12
    }
  ],
  "home": [
    {
      "rank": 1,
      "team": "Rote Raben Vilsbiburg",
      "played": 14,
      "wins": 14,
      "sets": "42:3",
      "balls": "1108:803",
      "points": 42
    },
    {
      "rank": 2,
      "team": "VfL Oythe",
      "played": 14,
      "wins": 13,
      "sets": "41:10",
      "balls": "1229:1000",
      "points": 40
    },
    {
      "rank": 3,
      "team": "NawaRo Straubing",
      "played": 14,
      "wins": 11,
      "sets": "37:15",
      "balls": "1215:1018",
      "points": 35
    },
    {
      "rank": 4,
      "team": "TV Planegg-Krailling",
      "played": 14,
      "wins": 11,
      "sets": "34:15",
      "balls": "1121:975",
      "points": 31
    },
    {
      "rank": 5,
      "team": "VCO Dresden",
      "played": 14,
      "wins": 8,
      "sets": "32:24",
      "balls": "1243:1190",
      "points": 24
    },
    {
      "rank": 6,
      "team": "BayerVolleys Leverkusen",
      "played": 14,
      "wins": 8,
      "sets": "31:26",
      "balls": "1245:1165",
      "points": 24
    },
    {
      "rank": 7,
      "team": "TV Waldgirmes",
      "played": 14,
      "wins": 8,
      "sets": "28:24",
      "balls": "1143:1119",
      "points": 23
    },
    {
      "rank": 8,
      "team": "Sparkassen Wildcats Stralsund",
      "played": 14,
      "wins": 7,
      "sets": "29:28",
      "balls": "1205:1241",
      "points": 21
    },
    {
      "rank": 9,
      "team": "DSHS SnowTrex Köln",
      "played": 14,
      "wins": 7,
      "sets": "27:28",
      "balls": "1162:1199",
      "points": 20
    },
    {
      "rank": 10,
      "team": "ESA Grimma Volleys",
      "played": 14,
      "wins": 7,
      "sets": "27:28",
      "balls": "1201:1165",
      "points": 19
    },
    {
      "rank": 11,
      "team": "Eintracht Spontent Düsseldorf",
      "played": 14,
      "wins": 5,
      "sets": "25:30",
      "balls": "1196:1187",
      "points": 18
    },
    {
      "rank": 12,
      "team": "TV Dingolfing",
      "played": 14,
      "wins": 5,
      "sets": "20:33",
      "balls": "1078:1210",
      "points": 14
    },
    {
      "rank": 13,
      "team": "TV Hörde",
      "played": 14,
      "wins": 4,
      "sets": "17:35",
      "balls": "1093:1199",
      "points": 13
    },
    {
      "rank": 14,
      "team": "Neuseenland-Volleys Markkleeberg",
      "played": 14,
      "wins": 4,
      "sets": "16:34",
      "balls": "1023:1145",
      "points": 11
    },
    {
      "rank": 15,
      "team": "BBSC Berlin",
      "played": 14,
      "wins": 2,
      "sets": "12:38",
      "balls": "983:1195",
      "points": 7
    }
  ],
  "away": [
    {
      "rank": 1,
      "team": "NawaRo Straubing",
      "played": 14,
      "wins": 13,
      "sets": "39:13",
      "balls": "1224:955",
      "points": 37
    },
    {
      "rank": 2,
      "team": "Rote Raben Vilsbiburg",
      "played": 14,
      "wins": 12,
      "sets": "38:8",
      "balls": "1107:848",
      "points": 37
    },
    {
      "rank": 3,
      "team": "TV Planegg-Krailling",
      "played": 14,
      "wins": 11,
      "sets": "37:15",
      "balls": "1206:1048",
      "points": 32
    },
    {
      "rank": 4,
      "team": "VfL Oythe",
      "played": 14,
      "wins": 11,
      "sets": "34:22",
      "balls": "1256:1184",
      "points": 29
    },
    {
      "rank": 5,
      "team": "VCO Dresden",
      "played": 14,
      "wins": 9,
      "sets": "33:21",
      "balls": "1179:1151",
      "points": 28
    },
    {
      "rank": 6,
      "team": "DSHS SnowTrex Köln",
      "played": 14,
      "wins": 8,
      "sets": "29:24",
      "balls": "1195:1201",
      "points": 25
    },
    {
      "rank": 7,
      "team": "BayerVolleys Leverkusen",
      "played": 14,
      "wins": 7,
      "sets": "24:27",
      "balls": "1113:1128",
      "points": 20
    },
    {
      "rank": 8,
      "team": "TV Waldgirmes",
      "played": 14,
      "wins": 6,
      "sets": "26:25",
      "balls": "1115:1129",
      "points": 19
    },
    {
      "rank": 9,
      "team": "ESA Grimma Volleys",
      "played": 14,
      "wins": 6,
      "sets": "22:31",
      "balls": "1081:1144",
      "points": 16
    },
    {
      "rank": 10,
      "team": "Sparkassen Wildcats Stralsund",
      "played": 14,
      "wins": 4,
      "sets": "20:35",
      "balls": "1127:1223",
      "points": 14
    },
    {
      "rank": 11,
      "team": "Neuseenland-Volleys Markkleeberg",
      "played": 14,
      "wins": 3,
      "sets": "18:36",
      "balls": "1105:1241",
      "points": 10
    },
    {
      "rank": 12,
      "team": "Eintracht Spontent Düsseldorf",
      "played": 14,
      "wins": 4,
      "sets": "18:37",
      "balls": "1088:1269",
      "points": 9
    },
    {
      "rank": 13,
      "team": "BBSC Berlin",
      "played": 14,
      "wins": 2,
      "sets": "12:40",
      "balls": "985:1235",
      "points": 5
    },
    {
      "rank": 14,
      "team": "TV Dingolfing",
      "played": 14,
      "wins": 0,
      "sets": "12:42",
      "balls": "1056:1283",
      "points": 4
    },
    {
      "rank": 15,
      "team": "TV Hörde",
      "played": 14,
      "wins": 0,
      "sets": "9:42",
      "balls": "974:1206",
      "points": 3
    }
  ]
};

const playerProfileUrls = {
  "Franziska Nitsche": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=9958921",
  "Crystal Burk": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=771634116",
  "Noelani Maraea Kleiner": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308987&userId=767220035",
  "Thora Bauer": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=770982680",
  "Bianka Werner": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=744825380",
  "Mille Kjosaas": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309386&userId=778013892",
  "Charlotte Kerscher": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=767528985",
  "Lilly Roßberg": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=770982472",
  "Elisabeth Kettenbach": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309673&userId=59149633",
  "Annika Stenchly": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308895&userId=70003721",
  "Tabea-Éliane Dreiack": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=769049818",
  "Selina Ebner": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309004&userId=767191582",
  "Theresa Barner": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=750792046",
  "Frauke Böcker": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309275&userId=8173",
  "Lara Drölle": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=22326117",
  "Hannah Buß": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=770982676",
  "Svenja Enning": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308933&userId=29160657",
  "Lena Olliges": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=767131010",
  "Emily Langguth": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=11646493",
  "Georgia McGovern": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308853&userId=777895387",
  "Elisabeth Kesper": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309795&userId=767966578",
  "Pia Fernau": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=678774889",
  "Pauline Meyer": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=770990166",
  "Hanna Christin Lengkey": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308987&userId=772060842",
  "Gesa Brandstrup": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309386&userId=752329134",
  "Joana Huber": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309673&userId=762602031",
  "Franziska Koob": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309004&userId=742778854",
  "Emma Neukirchen": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309275&userId=771345481",
  "Esenia Fomenko": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=777554881",
  "Meret Singer": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=750449302",
  "Nele Fickenwirth": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=778191508",
  "Carlotta Strube": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=678972761",
  "Sarah Overländer": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308933&userId=9573813",
  "Leonie Amann": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309795&userId=70434234"
};

const gameSummaries = {};

const games = [
  {
    "number": 3007,
    "matchId": 777353330,
    "weekday": "Samstag",
    "date": "20.09.2025",
    "time": "18:00",
    "home": "Neuseenland-Volleys Markkleeberg",
    "away": "Rote Raben Vilsbiburg",
    "score": "0:3",
    "ballPoints": "48:75",
    "sets": [
      "14:25",
      "18:25",
      "16:25"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/b53d41d0-af1f-430e-89d6-64d359b5bf9c/3007",
    "venue": "Neuseenlandhalle",
    "spectators": 230,
    "duration": 61,
    "mvps": [
      {
        "team": "Neuseenland-Volleys Markkleeberg",
        "name": "Franziska Nitsche",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=9958921"
      },
      {
        "team": "Rote Raben Vilsbiburg",
        "name": "Crystal Burk",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=771634116"
      }
    ],
    "rankAfter": 14,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778401249",
    "summary": [
      "Rote Raben Vilsbiburg setzte sich gegen Neuseenland-Volleys Markkleeberg mit 0:3 durch. Die Sätze endeten 14:25, 18:25, 16:25; insgesamt wurden 48:75 Ballpunkte gespielt.",
      "Stimmungsvoller Start in der „neuen“ Liga: Das war es nun, das erste (Heim-)Spiel in der für die jungen Damen der Neuseenland-Volleys Markkleeberg \"neuen\" Liga. 230 Fans waren trotz Hochsommerrückkehr in die Neuseenlandhalle gekommen und sorgten nach 5 Monaten Wettkampfabstinenz wieder für tolle Stimmung. Jede gute Markkleeberger Aktion, jeder Punktgewinn wurde gefeiert, wohl wissend, dass die Mädels diese Unterstützung dringend brauchen."
    ],
    "videoUrl": "https://www.youtube.com/live/cDpIX6kI_9w?si=HSXqUtQAFW7Le6de",
    "youtubeViews": 1736
  },
  {
    "number": 3012,
    "matchId": 777353367,
    "weekday": "Samstag",
    "date": "27.09.2025",
    "time": "18:00",
    "home": "BBSC Berlin",
    "away": "Neuseenland-Volleys Markkleeberg",
    "score": "1:3",
    "ballPoints": "82:95",
    "sets": [
      "21:25",
      "25:20",
      "16:25",
      "20:25"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/cfa054ff-ff0c-4ae6-9c63-e3e3b4c84406/3012",
    "venue": "Sporthalle Hämmerlingstraße",
    "spectators": 127,
    "duration": 101,
    "mvps": [
      {
        "team": "BBSC Berlin",
        "name": "Noelani Maraea Kleiner",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308987&userId=767220035"
      },
      {
        "team": "Neuseenland-Volleys Markkleeberg",
        "name": "Thora Bauer",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=770982680"
      }
    ],
    "rankAfter": 8,
    "summary": [
      "Neuseenland-Volleys Markkleeberg gewann beim BBSC Berlin mit 3:1 (25:21, 20:25, 25:16, 25:20). Nach dem Berliner Satzausgleich übernahmen die geschlossenen und fehlerarmen Gäste wieder die Kontrolle; besonders Angriff, Block und Abwehr griffen wirkungsvoll ineinander. Thora Bauer erhielt die goldene MVP-Medaille."
    ],
    "videoUrl": "https://www.youtube.com/live/KBPeMzrregM?si=g8mn2wv7LyxmXzEA",
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778492449",
    "youtubeViews": 1579
  },
  {
    "number": 3021,
    "matchId": 777353416,
    "weekday": "Freitag",
    "date": "03.10.2025",
    "time": "18:00",
    "home": "Neuseenland-Volleys Markkleeberg",
    "away": "Sparkassen Wildcats Stralsund",
    "score": "1:3",
    "ballPoints": "77:94",
    "sets": [
      "17:25",
      "15:25",
      "25:19",
      "20:25"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/4ce366bc-29d7-41c8-aeee-0598862691f0/3021",
    "venue": "Neuseenlandhalle",
    "spectators": 308,
    "duration": 97,
    "mvps": [
      {
        "team": "Neuseenland-Volleys Markkleeberg",
        "name": "Bianka Werner",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=744825380"
      },
      {
        "team": "Sparkassen Wildcats Stralsund",
        "name": "Mille Kjosaas",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309386&userId=778013892"
      }
    ],
    "rankAfter": 9,
    "summary": [
      "Sparkassen Wildcats Stralsund setzte sich gegen Neuseenland-Volleys Markkleeberg mit 1:3 durch. Die Sätze endeten 17:25, 15:25, 25:19, 20:25; insgesamt wurden 77:94 Ballpunkte gespielt.",
      "Ein fast perfektes Wochenende: Das hätte man nicht besser planen können. Die Anfahrt nach Markleeberg verlief entspannt und durch den Feiertag nahezu ohne Störungen. So hatte das Team ausreichend Zeit, sich mit der erstmals bespielten Halle vertraut zu machen. Zum Spielbeginn war diese dann sehr gut besucht und unter ihnen zahlreiche Unterstützer der Wildcats. Fans, Freunde und Familie sowie Ehemalige hatten den Weg in die Halle nicht gescheut. Und sie wurden für ihr Kommen belohnt."
    ],
    "videoUrl": "https://www.youtube.com/live/xagkRScIXz0?si=nkCcevqKRXd1nVio",
    "youtubeViews": 2873,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778574063"
  },
  {
    "number": 3024,
    "matchId": 777353441,
    "weekday": "Samstag",
    "date": "11.10.2025",
    "time": "19:00",
    "home": "NawaRo Straubing",
    "away": "Neuseenland-Volleys Markkleeberg",
    "score": "3:1",
    "ballPoints": "98:80",
    "sets": [
      "25:15",
      "22:25",
      "25:16",
      "26:24"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/7d8f678f-6ee1-4467-9a21-4d110fe07190/3024",
    "venue": "turmair Volleyballarena",
    "spectators": 400,
    "duration": 99,
    "mvps": [
      {
        "team": "NawaRo Straubing",
        "name": "Charlotte Kerscher",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=767528985"
      },
      {
        "team": "Neuseenland-Volleys Markkleeberg",
        "name": "Lilly Roßberg",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=770982472"
      }
    ],
    "rankAfter": 11,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778675270",
    "summary": [
      "NawaRo Straubing setzte sich gegen Neuseenland-Volleys Markkleeberg mit 3:1 durch. Die Sätze endeten 25:15, 22:25, 25:16, 26:24; insgesamt wurden 98:80 Ballpunkte gespielt.",
      "Leider blieben die Ligapunkte in Straubing: Zum zweiten Auswärtsspiel der Saison erwartete am 11.10.2025 mit dem Vorjahresfünften und aktuellen Tabellensiebenten NawaRo Straubing eine bundesligaerfahrene Mannschaft die Neuseenland-Volleys Markkleeberg. Doch nachdem alle wieder soweit gesund waren und gut trainiert hatten, wollten sie dem Favoriten ordentlich Paroli bieten. Ihr Kommentar : „ &hellip;mit jeder Menge Erfahrung und Motivation aus dem letzten Heimspiel wollen wir gegen Straubing alles geben!“. Cheftrainer Tim Reichenbach ergänzte : \"&hellip; nur wenn wir als Mannschaft über uns hinauswachsen, können wir auf weitere wichtige Zähler für die Saison hoffen.“."
    ],
    "videoUrl": "https://www.youtube.com/live/4DqRDrqLc84?si=AuL-2ejbQRvqnjBl",
    "youtubeViews": 1526
  },
  {
    "number": 3035,
    "matchId": 777353502,
    "weekday": "Samstag",
    "date": "18.10.2025",
    "time": "18:00",
    "home": "Neuseenland-Volleys Markkleeberg",
    "away": "TV Planegg-Krailling",
    "score": "0:3",
    "ballPoints": "60:75",
    "sets": [
      "17:25",
      "20:25",
      "23:25"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/d4b57294-b797-4e41-abfb-651e7cb577ea/3035",
    "venue": "Neuseenlandhalle",
    "spectators": 180,
    "duration": 72,
    "mvps": [
      {
        "team": "Neuseenland-Volleys Markkleeberg",
        "name": "Bianka Werner",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=744825380"
      },
      {
        "team": "TV Planegg-Krailling",
        "name": "Elisabeth Kettenbach",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309673&userId=59149633"
      }
    ],
    "rankAfter": 14,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=778774480",
    "summary": [
      "TV Planegg-Krailling setzte sich gegen Neuseenland-Volleys Markkleeberg mit 0:3 durch. Die Sätze endeten 17:25, 20:25, 23:25; insgesamt wurden 60:75 Ballpunkte gespielt.",
      "Leider noch immer keine Heimspielpunkte: Das dritte Heimspiel der Neuseenland-Volleys Markkleeberg gegen einen weiteren Mitaufsteiger, die Damen des Turnvereins Planegg-Krailling 1907 e.V. ging leider verloren. Gegen diesen Gegner, den späteren Meister der 2. Bundesliga Süd der Vorsaison, konnten die Markkleebergerinnen bisher nur einen Satz gewinnen. Wenigstens das sollte wieder gelingen. In dieser Hoffnung trieben die gewohnt stimmgewaltigen Fans, diesmal waren es 180, ihr Team pausenlos an, wollten es quasi zu diesem Satz- und vielleicht gar zu einem Punktgewinn tragen."
    ],
    "videoUrl": "https://www.youtube.com/live/0LeWZqA1avQ?si=NtO5nB2EvGkItsX-",
    "youtubeViews": 960
  },
  {
    "number": 3036,
    "matchId": 777353515,
    "weekday": "Sonntag",
    "date": "02.11.2025",
    "time": "16:00",
    "home": "DSHS SnowTrex Köln",
    "away": "Neuseenland-Volleys Markkleeberg",
    "score": "3:1",
    "ballPoints": "96:79",
    "sets": [
      "25:21",
      "21:25",
      "25:15",
      "25:18"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/32fd7619-e73a-4c31-9d29-f96126dc52df/3036",
    "venue": "Deutsche Sporthochschule Köln, Halle 22",
    "spectators": 180,
    "duration": 100,
    "mvps": [
      {
        "team": "DSHS SnowTrex Köln",
        "name": "Annika Stenchly",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308895&userId=70003721"
      },
      {
        "team": "Neuseenland-Volleys Markkleeberg",
        "name": "Tabea-Éliane Dreiack",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=769049818"
      }
    ],
    "rankAfter": 13,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779043837",
    "galleryUrl": "https://www.flickr.com/photos/88608964@N07/albums/72177720330118334",
    "videoUrl": "https://www.youtube.com/watch?v=fBjhULBYJ4U",
    "summary": [
      "DSHS SnowTrex Köln setzte sich gegen Neuseenland-Volleys Markkleeberg mit 3:1 durch. Die Sätze endeten 25:21, 21:25, 25:15, 25:18; insgesamt wurden 96:79 Ballpunkte gespielt.",
      "Punkte blieben leider in Köln: In der Halle 22 der Deutschen Sporthochschule Köln wurde der Gastgeber DSHS SnowTrex Köln am 02.11.2025 seiner Favoritenrolle gegen das Aufsteigerteam aus dem Markkleeberger Neuseenland gerecht. Obwohl die Markkleebergerinnen nach 5 Stunden Anreise phasenweise stark aufgespielt haben, gab es wie zuletzt im Pokalspiel in Waldgirmes nur einen Satzgewinn."
    ],
    "youtubeViews": 1399
  },
  {
    "number": 3049,
    "matchId": 777353588,
    "weekday": "Samstag",
    "date": "15.11.2025",
    "time": "18:00",
    "home": "Neuseenland-Volleys Markkleeberg",
    "away": "TV Dingolfing",
    "score": "3:1",
    "ballPoints": "99:75",
    "sets": [
      "25:16",
      "24:26",
      "25:15",
      "25:18"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/3fcceb88-ab4a-4a90-857d-c5b02464b5d9/3049",
    "venue": "Neuseenlandhalle",
    "spectators": 240,
    "duration": 96,
    "mvps": [
      {
        "team": "Neuseenland-Volleys Markkleeberg",
        "name": "Franziska Nitsche",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=9958921"
      },
      {
        "team": "TV Dingolfing",
        "name": "Selina Ebner",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309004&userId=767191582"
      }
    ],
    "rankAfter": 11,
    "summary": [
      "Neuseenland-Volleys Markkleeberg setzte sich gegen TV Dingolfing mit 3:1 durch. Die Sätze endeten 25:16, 24:26, 25:15, 25:18; insgesamt wurden 99:75 Ballpunkte gespielt.",
      "Endlich die ersten drei Heimspielpunkte: Zum Samstag-Spiel am Doppel-Heimspiel-Wochenende waren am 15.11.2025 die Damen vom TV Dingolfing in die Markkleeberger Neuseenlandhalle gekommen. Man kannte sich ein wenig vom Vorbereitungsturnier im September in Markkleeberg. Von den Vorzeichen her war es das Spiel eines erfahrenen Bundesligateams gegen einen Aufsteiger. Doch nach Markkleeberg kamen die Dingos als direkter Tabellennachbar mit auch nur einem gewonnenen Spiel bisher. Das barg für Markkleebergs Team und Fans die Hoffnung, endlich den ersten Heimsieg schaffen zu können. Doch auch die Dingos wollten „&hellip; den zweiten Saisonsieg und damit auch die Wiederholung ihres Erfolges beim Turnier in der Saisonvorbereitung in Markkleeberg.“. Ein spannendes Match „auf Augenhöhe“ war also zu erwarten. Und das bekamen die 240 Fans in der wieder überaus stimmungsvollen Halle dann auch zu sehen."
    ],
    "videoUrl": "https://www.youtube.com/live/wOG3-lQDTfM?si=EeZ_3i3N7aMYEqL8",
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779270360",
    "youtubeViews": 1001
  },
  {
    "number": 3115,
    "matchId": 777354000,
    "weekday": "Sonntag",
    "date": "16.11.2025",
    "time": "15:00",
    "home": "Neuseenland-Volleys Markkleeberg",
    "away": "NawaRo Straubing",
    "score": "1:3",
    "ballPoints": "79:96",
    "sets": [
      "15:25",
      "19:25",
      "25:21",
      "20:25"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/8bb21828-b6c3-4a5c-99fe-a5577267e884/3115",
    "venue": "Neuseenlandhalle",
    "spectators": 223,
    "duration": 85,
    "mvps": [
      {
        "team": "Neuseenland-Volleys Markkleeberg",
        "name": "Franziska Nitsche",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=9958921"
      },
      {
        "team": "NawaRo Straubing",
        "name": "Theresa Barner",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308823&userId=750792046"
      }
    ],
    "rankAfter": 12,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779290045",
    "summary": [
      "NawaRo Straubing setzte sich gegen Neuseenland-Volleys Markkleeberg mit 1:3 durch. Die Sätze endeten 15:25, 19:25, 25:21, 20:25; insgesamt wurden 79:96 Ballpunkte gespielt.",
      "Leider NawaRo auch im Rückspiel zu stark: Am Sonntag, dem 16.11.2025, kamen die Damen von NawaRo Straubing inclusive einiger freundlicher Fans schon zum Saisonrückspiel nach Markkleeberg. Das Hinspiel in Straubing am 11.10.2025 war umkämpft, ging aber 1:3 verloren. In Markkleeberg erinnert man sich noch an das etwas umstrittene, knappe Ende des vierten Satzes."
    ],
    "videoUrl": "https://www.youtube.com/live/5Hl90D9nhvU?si=SDynTlKQAm_CWYjf",
    "youtubeViews": 1265
  },
  {
    "number": 3063,
    "matchId": 777353674,
    "weekday": "Samstag",
    "date": "29.11.2025",
    "time": "18:00",
    "home": "Neuseenland-Volleys Markkleeberg",
    "away": "ESA Grimma Volleys",
    "score": "0:3",
    "ballPoints": "43:75",
    "sets": [
      "13:25",
      "16:25",
      "14:25"
    ],
    "venue": "Neuseenlandhalle",
    "spectators": 411,
    "duration": 66,
    "mvps": [],
    "rankAfter": 13,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779503647",
    "summary": [
      "ESA Grimma Volleys setzte sich gegen Neuseenland-Volleys Markkleeberg mit 0:3 durch. Die Sätze endeten 13:25, 16:25, 14:25; insgesamt wurden 43:75 Ballpunkte gespielt.",
      "Derbysieg leider deutlich verpasst: Am letzten Novembersamstag kam es für die Neuseenland-Volleys Markkleeberg zum bisherigen Saisonhöhepunkt in der Neuseenlandhalle – dem „Landkreis-Leipzig-Derby“ gegen die favorisierten ESA Grimma Volleys."
    ],
    "videoUrl": "https://www.youtube.com/live/L8Owx_vCn6o?si=_TkutiM34w0VeGIG",
    "youtubeViews": 1147
  },
  {
    "number": 3055,
    "matchId": 777353631,
    "weekday": "Samstag",
    "date": "06.12.2025",
    "time": "19:30",
    "home": "TV Hörde",
    "away": "Neuseenland-Volleys Markkleeberg",
    "score": "2:3",
    "ballPoints": "98:100",
    "sets": [
      "14:25",
      "25:21",
      "23:25",
      "25:14",
      "11:15"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/0e24e24a-3c1b-4e0c-9c53-332b2442b56b/3055",
    "venue": "Sporthalle Phoenix (Hörde III)",
    "spectators": 100,
    "duration": 112,
    "mvps": [
      {
        "team": "TV Hörde",
        "name": "Frauke Böcker",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309275&userId=8173"
      },
      {
        "team": "Neuseenland-Volleys Markkleeberg",
        "name": "Franziska Nitsche",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=9958921"
      }
    ],
    "rankAfter": 13,
    "summary": [
      "Neuseenland-Volleys Markkleeberg setzte sich gegen TV Hörde mit 2:3 durch. Die Sätze endeten 14:25, 25:21, 23:25, 25:14, 11:15; insgesamt wurden 98:100 Ballpunkte gespielt.",
      "Keine Geschenke an Nikolaus: Am Nikolaustag ging es für die Hörder Mädchen in einem Kellerduell um wichtige Punkte. In einem Spiel gegen die Neuseenland-Volleys Markkleeberg mussten sich die Hörderinnen beweisen. Leider schafften sie es nicht, in ihrer heimischen Halle zu siegen, jedoch konnten sie sich einen Punkt sichern. Sie verloren das Spiel mit einem Spielstand von 2:3 (14:25, 25:21, 23:25, 25:14, 11:15)."
    ],
    "videoUrl": "https://www.youtube.com/live/YmHygWpnqx0?si=QBZANDagx7ozjWkx",
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779631865",
    "youtubeViews": 1478
  },
  {
    "number": 3067,
    "matchId": 777353705,
    "weekday": "Sonntag",
    "date": "07.12.2025",
    "time": "14:00",
    "home": "Eintracht Spontent Düsseldorf",
    "away": "Neuseenland-Volleys Markkleeberg",
    "score": "3:2",
    "ballPoints": "104:96",
    "sets": [
      "22:25",
      "25:21",
      "25:17",
      "17:25",
      "15:8"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/ac49b905-8f5d-491f-b407-df09409be118/3067",
    "venue": "DH Brinckmannstraße, Hulda Pankok",
    "spectators": 55,
    "duration": 99,
    "mvps": [
      {
        "team": "Eintracht Spontent Düsseldorf",
        "name": "Lara Drölle",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=22326117"
      },
      {
        "team": "Neuseenland-Volleys Markkleeberg",
        "name": "Hannah Buß",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=770982676"
      }
    ],
    "rankAfter": 13,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779628212",
    "summary": [
      "Eintracht Spontent Düsseldorf setzte sich gegen Neuseenland-Volleys Markkleeberg mit 3:2 durch. Die Sätze endeten 22:25, 25:21, 25:17, 17:25, 15:8; insgesamt wurden 104:96 Ballpunkte gespielt.",
      "Einen Punkt verschenkt.: Beim 3:2 Heimsieg lässt die Eintracht gegen Markkleeberg einen Punkt liegen, sammelt aber immerhin zwei wichtige Zähler ein. Dementsprechend gemischt war die Gefühlslage nach dem Spiel."
    ],
    "videoUrl": "https://www.youtube.com/watch?v=5pZ2RYkGwLA&pp=ygUuRFlOIEVpbnRyYWNodCBTcG9udGVudCBEw7xzc2VsZG9yZiBNYXJrbGVlYmVyZw%3D%3D",
    "youtubeViews": 4878
  },
  {
    "number": 3077,
    "matchId": 777353760,
    "weekday": "Samstag",
    "date": "13.12.2025",
    "time": "18:00",
    "home": "Neuseenland-Volleys Markkleeberg",
    "away": "BayerVolleys Leverkusen",
    "score": "0:3",
    "ballPoints": "58:75",
    "sets": [
      "21:25",
      "17:25",
      "20:25"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/bd0cf96f-5ae5-4c2f-9abb-9eb07bf7ab9a/3077",
    "venue": "Neuseenlandhalle",
    "spectators": 203,
    "duration": 71,
    "mvps": [
      {
        "team": "Neuseenland-Volleys Markkleeberg",
        "name": "Bianka Werner",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=744825380"
      },
      {
        "team": "BayerVolleys Leverkusen",
        "name": "Svenja Enning",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308933&userId=29160657"
      }
    ],
    "rankAfter": 13,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779715494",
    "videoUrl": "https://www.youtube.com/watch?v=4yzXHZaA0SU",
    "summary": [
      "BayerVolleys Leverkusen setzte sich gegen Neuseenland-Volleys Markkleeberg mit 0:3 durch. Die Sätze endeten 21:25, 17:25, 20:25; insgesamt wurden 58:75 Ballpunkte gespielt.",
      "Volleys kontrollieren die Partie: Die aufwendige Tour nach Sachsen, die erst am Sonntagmorgen um 3 Uhr in Leverkusen ihr Ende fand, hat sich für die BayerVolleys gelohnt. Beim 3:0 (25:21, 25:17, 25:20)-Sieg gegen Aufsteiger Neuseenland-Volleys Markkleeberg konnten die Leverkusenerinnen nach einer kleinen Durststrecke noch mal einen klaren Sieg und damit drei Punkte einfahren."
    ],
    "youtubeViews": 656
  },
  {
    "number": 3196,
    "matchId": 777354490,
    "weekday": "Sonntag",
    "date": "14.12.2025",
    "time": "15:00",
    "home": "VCO Dresden",
    "away": "Neuseenland-Volleys Markkleeberg",
    "score": "3:1",
    "ballPoints": "97:90",
    "sets": [
      "25:19",
      "20:25",
      "27:25",
      "25:21"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/e2ae312a-52f7-4b71-a5fd-d3998fa8efe0/3196",
    "venue": "Schulsporthalle des Sportschulzentrum",
    "spectators": 132,
    "duration": 94,
    "mvps": [
      {
        "team": "VCO Dresden",
        "name": "Lena Olliges",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=767131010"
      },
      {
        "team": "Neuseenland-Volleys Markkleeberg",
        "name": "Emily Langguth",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=11646493"
      }
    ],
    "rankAfter": 13,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779750624",
    "summary": [
      "VCO Dresden gewann das intensive Sachsenderby mit 3:1 (25:19, 20:25, 27:25, 25:21). Nach Markkleebergs Satzausgleich entschied Dresden den umkämpften dritten Durchgang erst mit 27:25 und drehte im vierten Satz einen Rückstand. Ein Ass besiegelte schließlich den Dresdner Heimsieg."
    ],
    "videoUrl": "https://www.youtube.com/live/zc4zA6CpoTk?si=Iu6GjYMr05WqR5Ce",
    "youtubeViews": 1466
  },
  {
    "number": 3079,
    "matchId": 777353773,
    "weekday": "Sonntag",
    "date": "21.12.2025",
    "time": "15:00",
    "home": "VfL Oythe",
    "away": "Neuseenland-Volleys Markkleeberg",
    "score": "3:1",
    "ballPoints": "98:92",
    "sets": [
      "25:20",
      "20:25",
      "25:21",
      "28:26"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/d89d5830-ba52-43fe-b395-395c0ba6c7f6/3079",
    "venue": "SH Gymnasium Antonianum Vechta",
    "spectators": 161,
    "duration": 98,
    "mvps": [
      {
        "team": "VfL Oythe",
        "name": "Georgia McGovern",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308853&userId=777895387"
      },
      {
        "team": "Neuseenland-Volleys Markkleeberg",
        "name": "Franziska Nitsche",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=9958921"
      }
    ],
    "rankAfter": 13,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779817721",
    "summary": [
      "VfL Oythe setzte sich gegen Neuseenland-Volleys Markkleeberg mit 3:1 durch. Die Sätze endeten 25:20, 20:25, 25:21, 28:26; insgesamt wurden 98:92 Ballpunkte gespielt.",
      "Sooo nahe dran …: Sooo nahe dran an einem Punktgewinn waren die Neuseenland-Volleys Markkleeberg in ihrem letzten Spiel des Jahres beim VfL Oythe."
    ],
    "videoUrl": "https://www.youtube.com/live/V4ErSTTOEm8?si=KEmFYg_mawLNdH7J",
    "youtubeViews": 869
  },
  {
    "number": 3091,
    "matchId": 777353852,
    "weekday": "Sonntag",
    "date": "04.01.2026",
    "time": "15:00",
    "home": "Neuseenland-Volleys Markkleeberg",
    "away": "TV Waldgirmes",
    "score": "3:2",
    "ballPoints": "106:96",
    "sets": [
      "23:25",
      "25:18",
      "18:25",
      "25:16",
      "15:12"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/f82221d1-9016-4952-a289-3ffccb195b97/3091",
    "venue": "Neuseenlandhalle",
    "spectators": 302,
    "duration": 114,
    "mvps": [
      {
        "team": "Neuseenland-Volleys Markkleeberg",
        "name": "Tabea-Éliane Dreiack",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=769049818"
      },
      {
        "team": "TV Waldgirmes",
        "name": "Elisabeth Kesper",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309795&userId=767966578"
      }
    ],
    "rankAfter": 12,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=779942190",
    "summary": [
      "Neuseenland-Volleys Markkleeberg setzte sich gegen TV Waldgirmes mit 3:2 durch. Die Sätze endeten 23:25, 25:18, 18:25, 25:16, 15:12; insgesamt wurden 106:96 Ballpunkte gespielt.",
      "Gelungener Markkleeberger Jahresstart: In das Wettkampfjahr 2026 gingen die Neuseenland-Volleys Markkleeberg am 04.01.2026 in der Neuseenlandhalle gegen den insgesamt stark in die Liga gestarteten Mitaufsteiger TV 05 Waldgirmes (Tabellenplatz 8 mit 12 Punkten Vorsprung) vom „Glückszahl-Tabellenplatz“ 13. Doch die Hessinnen hatten ihre letzten drei Spiele verloren – war das die kleine Markkleeberger Siegchance gegen den Favoriten ?"
    ],
    "videoUrl": "https://www.youtube.com/live/180yNPy02f4?si=wy6jp_EE9rSSFu_M",
    "youtubeViews": 2110
  },
  {
    "number": 3098,
    "matchId": 777353895,
    "weekday": "Samstag",
    "date": "10.01.2026",
    "time": "19:00",
    "home": "Rote Raben Vilsbiburg",
    "away": "Neuseenland-Volleys Markkleeberg",
    "score": "3:0",
    "ballPoints": "75:51",
    "sets": [
      "25:19",
      "25:13",
      "25:19"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/10b389c9-a4dd-4f79-a79a-acb93825d71e/3098",
    "venue": "Ballsporthalle Vilsbiburg",
    "spectators": 465,
    "duration": 64,
    "mvps": [
      {
        "team": "Rote Raben Vilsbiburg",
        "name": "Pia Fernau",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309082&userId=678774889"
      },
      {
        "team": "Neuseenland-Volleys Markkleeberg",
        "name": "Pauline Meyer",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=770990166"
      }
    ],
    "rankAfter": 12,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780026172",
    "summary": [
      "Rote Raben Vilsbiburg setzte sich gegen Neuseenland-Volleys Markkleeberg mit 3:0 durch. Die Sätze endeten 25:19, 25:13, 25:19; insgesamt wurden 75:51 Ballpunkte gespielt.",
      "Den Spitzenreiter ein wenig geärgert: „Vielleicht wachsen wir ja über uns hinaus und können die Vilsbiburgerinnen ein bisschen ärgern!“ hatte der Markkleeberger Chefcoach Tim Reichenbach vor dem Spiel gesagt. Und genau das gelang seinem Team zumindest in Satz 1 lange Zeit."
    ],
    "videoUrl": "https://www.youtube.com/live/X7Uu6-KaJBY?si=eqcnd4uD22xHZEh6",
    "youtubeViews": 1645
  },
  {
    "number": 3103,
    "matchId": 777353926,
    "weekday": "Samstag",
    "date": "17.01.2026",
    "time": "18:00",
    "home": "Neuseenland-Volleys Markkleeberg",
    "away": "BBSC Berlin",
    "score": "3:0",
    "ballPoints": "75:59",
    "sets": [
      "25:23",
      "25:14",
      "25:22"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/77d81ef3-1b97-44df-a348-773daec66492/3103",
    "venue": "Neuseenlandhalle",
    "spectators": 224,
    "duration": 76,
    "mvps": [
      {
        "team": "Neuseenland-Volleys Markkleeberg",
        "name": "Emily Langguth",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=11646493"
      },
      {
        "team": "BBSC Berlin",
        "name": "Hanna Christin Lengkey",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308987&userId=772060842"
      }
    ],
    "rankAfter": 12,
    "summary": [
      "Neuseenland-Volleys Markkleeberg setzte sich gegen BBSC Berlin mit 3:0 durch. Die Sätze endeten 25:23, 25:14, 25:22; insgesamt wurden 75:59 Ballpunkte gespielt.",
      "Auch im Heimspiel drei Punkte gegen BBSC: Im ersten von zwei ganz wichtigen Rückspielen, dem „Sechs-Punkte-Spiel“ gegen den BBSC Berlin, gelang den Neuseenland-Volleys Markkleeberg der allseits erwartete, aber nicht selbstverständliche Sieg. 224 Zuschauer sorgten für die dazu notwendige tolle Stimmung und machten vergessen, dass vielleicht der eine oder andere Fan und Unterstützer das zeitgleiche Fußball(spitzen)spiel RB Leipzig - Bayern München vorgezogen hatte."
    ],
    "videoUrl": "https://www.youtube.com/live/e3cd1H9LGlA?si=ZThV0ZYIxSia0gXX",
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780103688",
    "youtubeViews": 923
  },
  {
    "number": 3112,
    "matchId": 777353981,
    "weekday": "Samstag",
    "date": "24.01.2026",
    "time": "17:00",
    "home": "Sparkassen Wildcats Stralsund",
    "away": "Neuseenland-Volleys Markkleeberg",
    "score": "3:0",
    "ballPoints": "79:63",
    "sets": [
      "25:23",
      "29:27",
      "25:13"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/ff8d4e8c-9bf7-4544-bef8-71133f26d610/3112",
    "venue": "Diesterweg-Sporthalle",
    "spectators": 477,
    "duration": 77,
    "mvps": [
      {
        "team": "Sparkassen Wildcats Stralsund",
        "name": "Gesa Brandstrup",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309386&userId=752329134"
      },
      {
        "team": "Neuseenland-Volleys Markkleeberg",
        "name": "Thora Bauer",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=770982680"
      }
    ],
    "rankAfter": 12,
    "summary": [
      "Sparkassen Wildcats Stralsund setzte sich gegen Neuseenland-Volleys Markkleeberg mit 3:0 durch. Die Sätze endeten 25:23, 29:27, 25:13; insgesamt wurden 79:63 Ballpunkte gespielt.",
      "Sieg in drei Sätzen: Mit den Neuseenland-Volleys Markleeberg kam ein besonderes Team in die Diesterweg-Sporthalle. Zunächst gehört es zu jenen Mannschaften, die erstmals am Sund aufschlagen. Dann stand der Bus bereits vor der Halle als die ersten Verantwortlichen der Sparkassen Wildcats eintrafen und das waren immerhin dreieinhalb Stunden vor dem Spiel. Das bekamen bisher nicht viele hin. Die vielen Gästefans stellen ein weiteres Merkmal dar. Und dann war da noch der Antrag an die Schiedsrichter auf getrenntes Einschlagen. Niemand konnte sich erinnern, ob das in den 17 Saison schon einmal so stattfand."
    ],
    "videoUrl": "https://www.youtube.com/live/TW4LdVHkZRU?si=2z895b4ynEj1zzjb",
    "youtubeViews": 1400,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780212278"
  },
  {
    "number": 3126,
    "matchId": 777354067,
    "weekday": "Samstag",
    "date": "07.02.2026",
    "time": "19:00",
    "home": "TV Planegg-Krailling",
    "away": "Neuseenland-Volleys Markkleeberg",
    "score": "3:0",
    "ballPoints": "75:50",
    "sets": [
      "25:14",
      "25:17",
      "25:19"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/c5c078ef-ece9-4406-888b-898ae90e35e6/3126",
    "venue": "Feodor-Lynen-Gymnasium",
    "spectators": 175,
    "duration": 65,
    "mvps": [
      {
        "team": "TV Planegg-Krailling",
        "name": "Joana Huber",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309673&userId=762602031"
      },
      {
        "team": "Neuseenland-Volleys Markkleeberg",
        "name": "Tabea-Éliane Dreiack",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=769049818"
      }
    ],
    "rankAfter": 12,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780386059",
    "summary": [
      "TV Planegg-Krailling setzte sich gegen Neuseenland-Volleys Markkleeberg mit 3:0 durch. Die Sätze endeten 25:14, 25:17, 25:19; insgesamt wurden 75:50 Ballpunkte gespielt.",
      "Trainerwunsch Punktgewinn nicht erfüllt: „&hellip; wollen wir im Saisonendspurt nochmal Vollgas geben und gegen Planegg das erste Mal versuchen, auch den Top-Teams der Liga Punkte zu entlocken“, hatte Chefcoach Tim Reichenbach vor dem Spiel gesagt."
    ],
    "videoUrl": "https://www.youtube.com/live/XBvQ1PBX48M?si=A6YrMhQtRHZV4tAv",
    "youtubeViews": 711
  },
  {
    "number": 3127,
    "matchId": 777354074,
    "weekday": "Samstag",
    "date": "14.02.2026",
    "time": "18:00",
    "home": "Neuseenland-Volleys Markkleeberg",
    "away": "DSHS SnowTrex Köln",
    "score": "0:3",
    "ballPoints": "66:77",
    "sets": [
      "22:25",
      "25:27",
      "19:25"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/cb31d241-b953-437c-979e-388756de58e1/3127",
    "venue": "Neuseenlandhalle",
    "spectators": 267,
    "duration": 86,
    "mvps": [
      {
        "team": "Neuseenland-Volleys Markkleeberg",
        "name": "Thora Bauer",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=770982680"
      },
      {
        "team": "DSHS SnowTrex Köln",
        "name": "Annika Stenchly",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308895&userId=70003721"
      }
    ],
    "rankAfter": 12,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780486265",
    "galleryUrl": "https://www.flickr.com/photos/88608964@N07/albums/72177720332096083/",
    "videoUrl": "https://www.youtube.com/watch?v=Fn6zbPXNvvo&t=8714s",
    "summary": [
      "DSHS SnowTrex Köln setzte sich gegen Neuseenland-Volleys Markkleeberg mit 0:3 durch. Die Sätze endeten 22:25, 25:27, 19:25; insgesamt wurden 66:77 Ballpunkte gespielt.",
      "Köln holt 3:0 in Markkleeberg: Nach zwei Niederlagen meldet sich DSHS SnowTrex Köln eindrucksvoll zurück. Beim abstiegsgefährdeten Gastgeber Neuseenland-Volleys Markkleeberg setzte sich das Team mit 3:0 durch – dank mentaler Stabilität in der Crunchtime und klarer Überlegenheit im Blockspiel."
    ],
    "youtubeViews": 1101
  },
  {
    "number": 3140,
    "matchId": 777354153,
    "weekday": "Samstag",
    "date": "21.02.2026",
    "time": "19:00",
    "home": "TV Dingolfing",
    "away": "Neuseenland-Volleys Markkleeberg",
    "score": "0:3",
    "ballPoints": "56:75",
    "sets": [
      "20:25",
      "19:25",
      "17:25"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/8bb6fea9-9028-4e89-a51e-b48f88d4da36/3140",
    "venue": "Sporthalle Höll-Ost",
    "spectators": 162,
    "duration": 71,
    "mvps": [
      {
        "team": "TV Dingolfing",
        "name": "Franziska Koob",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309004&userId=742778854"
      },
      {
        "team": "Neuseenland-Volleys Markkleeberg",
        "name": "Emily Langguth",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=11646493"
      }
    ],
    "rankAfter": 12,
    "summary": [
      "Neuseenland-Volleys Markkleeberg gewann beim TV Dingolfing klar mit 3:0 (25:20, 25:19, 25:17). Dingolfing hielt jeweils nur bis etwa zur Satzmitte mit; anschließend nutzten die Gäste die zunehmenden Eigenfehler konsequent. Nach 71 Minuten nahm Markkleeberg drei wichtige Punkte im Kampf um den Klassenerhalt mit."
    ],
    "videoUrl": "https://www.youtube.com/live/F_c-s958Goc?si=4uJ_007u5Z8SIJJ4",
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780579148",
    "youtubeViews": 840
  },
  {
    "number": 3146,
    "matchId": 777354184,
    "weekday": "Samstag",
    "date": "07.03.2026",
    "time": "18:00",
    "home": "Neuseenland-Volleys Markkleeberg",
    "away": "TV Hörde",
    "score": "3:1",
    "ballPoints": "97:83",
    "sets": [
      "25:23",
      "22:25",
      "25:19",
      "25:16"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/47103446-073c-4acf-9802-1736f9c2990f/3146",
    "venue": "Neuseenlandhalle",
    "spectators": 206,
    "duration": 100,
    "mvps": [
      {
        "team": "Neuseenland-Volleys Markkleeberg",
        "name": "Emily Langguth",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=11646493"
      },
      {
        "team": "TV Hörde",
        "name": "Emma Neukirchen",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309275&userId=771345481"
      }
    ],
    "rankAfter": 12,
    "summary": [
      "Neuseenland-Volleys Markkleeberg setzte sich gegen TV Hörde mit 3:1 durch. Die Sätze endeten 25:23, 22:25, 25:19, 25:16; insgesamt wurden 97:83 Ballpunkte gespielt.",
      "Phasenweise gut: Am Samstag, den 07. März 2026, stellten sich die Hörderinnen einem Gegner auf Augenhöhe. Nachdem sie in der Hinrunde die Punkte geteilt hatten, wollten sie in der Rückrunde mehr Punkte sammeln. Diese wären entscheidend für die Tabelle gewesen. Leider spielten die Hörderinnen sehr phasenweise und konnten sich nur einen Satz sichern. Das Spiel endete 3:1 (25:23, 22:25, 25:19, 25:16) für die NeuseenlandVolleys Markkleeberg."
    ],
    "videoUrl": "https://www.youtube.com/live/aoDPpjQgkm0?si=7DX_RQ-VbhrvyMMJ",
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780759137",
    "youtubeViews": 922
  },
  {
    "number": 3210,
    "matchId": 777354568,
    "weekday": "Sonntag",
    "date": "08.03.2026",
    "time": "15:00",
    "home": "Neuseenland-Volleys Markkleeberg",
    "away": "VCO Dresden",
    "score": "0:3",
    "ballPoints": "58:75",
    "sets": [
      "21:25",
      "23:25",
      "14:25"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/29fb259c-5a4a-4dd0-9fd1-001275542fd7/3210",
    "venue": "Neuseenlandhalle",
    "spectators": 270,
    "duration": 66,
    "mvps": [
      {
        "team": "Neuseenland-Volleys Markkleeberg",
        "name": "Emily Langguth",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=11646493"
      },
      {
        "team": "VCO Dresden",
        "name": "Esenia Fomenko",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309105&userId=777554881"
      }
    ],
    "rankAfter": 12,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780755888",
    "summary": [
      "VCO Dresden setzte sich gegen Neuseenland-Volleys Markkleeberg mit 0:3 durch. Die Sätze endeten 21:25, 23:25, 14:25; insgesamt wurden 58:75 Ballpunkte gespielt.",
      "(Zu)starke DSC-Talente: 274 Fans hatten am Frauen(sonn)tagnachmittag den Weg in die Markkleeberger Neuseenlandhalle gefunden und feuerten ihre Volleys wieder prächtig an. Leider war das aber nicht vom Erfolg in Form des erhofften Punktgewinns gekrönt, weil die favorisierten Gäste aus der Landeshauptstadt einfach zu stark aufspielten."
    ],
    "videoUrl": "https://www.youtube.com/live/IJzx7DRGS9E?si=UgCkw9GF6XIqeONa",
    "youtubeViews": 1357
  },
  {
    "number": 3154,
    "matchId": 777354239,
    "weekday": "Sonntag",
    "date": "15.03.2026",
    "time": "16:00",
    "home": "ESA Grimma Volleys",
    "away": "Neuseenland-Volleys Markkleeberg",
    "score": "3:0",
    "ballPoints": "75:49",
    "sets": [
      "25:11",
      "25:23",
      "25:15"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/86cd92a5-0ab5-47cf-a65b-9d8d016f05d8/3154",
    "venue": "Muldentalhalle",
    "spectators": 512,
    "duration": 65,
    "mvps": [
      {
        "team": "ESA Grimma Volleys",
        "name": "Meret Singer",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308803&userId=750449302"
      },
      {
        "team": "Neuseenland-Volleys Markkleeberg",
        "name": "Emily Langguth",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=11646493"
      }
    ],
    "rankAfter": 12,
    "summary": [
      "ESA Grimma Volleys setzte sich gegen Neuseenland-Volleys Markkleeberg mit 3:0 durch. Die Sätze endeten 25:11, 25:23, 25:15; insgesamt wurden 75:49 Ballpunkte gespielt.",
      "Revanche im Derby-Rückspiel nicht geglückt: Mit den etwa 150 lauten Markkleeberger Fans in grün im Rücken wollten die Neuseenland-Volleys die favorisierten Gastgeberinnen im Derby-Rückspiel mindestens herausfordern, auch wenn die erste Zuspielerin Bianca Werner leider krankheitsbedingt immer noch fehlte."
    ],
    "videoUrl": "https://www.youtube.com/live/aKxaoBMTtfc?si=9w6wLPjvghgWSUBc",
    "youtubeViews": 1571,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=780833460"
  },
  {
    "number": 3158,
    "matchId": 777354258,
    "weekday": "Samstag",
    "date": "28.03.2026",
    "time": "18:00",
    "home": "Neuseenland-Volleys Markkleeberg",
    "away": "Eintracht Spontent Düsseldorf",
    "score": "1:3",
    "ballPoints": "86:94",
    "sets": [
      "25:19",
      "19:25",
      "22:25",
      "20:25"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/019782c4-d28a-4e94-9a36-187b5b6ccd97/3158",
    "venue": "Neuseenlandhalle",
    "spectators": 247,
    "duration": 101,
    "mvps": [
      {
        "team": "Neuseenland-Volleys Markkleeberg",
        "name": "Nele Fickenwirth",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=778191508"
      },
      {
        "team": "Eintracht Spontent Düsseldorf",
        "name": "Carlotta Strube",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776311815&userId=678972761"
      }
    ],
    "rankAfter": 12,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781009586",
    "summary": [
      "Eintracht Spontent Düsseldorf setzte sich gegen Neuseenland-Volleys Markkleeberg mit 1:3 durch. Die Sätze endeten 25:19, 19:25, 22:25, 20:25; insgesamt wurden 86:94 Ballpunkte gespielt.",
      "Leider nur ein Satzgewinn: Am letzten Samstag stand das vorletzte Heimspiel der Neuseenland-Volleys Markkleeberg gegen Eintracht Spontent Düsseldorf an. Das hatte nicht nur die Bedeutung der Revanche für die knappe Hinspielniederlage (2:3), sondern war angesichts der Tabellensituation (11. gegen 12.) schon von einiger Bedeutung für den Klassenerhalt"
    ],
    "videoUrl": "https://www.youtube.com/watch?v=XFL1aRU5CNo&pp=ygUuRFlOIEVpbnRyYWNodCBTcG9udGVudCBEw7xzc2VsZG9yZiBNYXJrbGVlYmVyZw%3D%3D",
    "youtubeViews": 2166
  },
  {
    "number": 3168,
    "matchId": 777354325,
    "weekday": "Samstag",
    "date": "11.04.2026",
    "time": "19:30",
    "home": "BayerVolleys Leverkusen",
    "away": "Neuseenland-Volleys Markkleeberg",
    "score": "3:2",
    "ballPoints": "109:103",
    "sets": [
      "22:25",
      "21:25",
      "25:22",
      "25:17",
      "16:14"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/39491cc4-dda1-4898-abee-9e1a7ee83267/3168",
    "venue": "Ostermann-Arena",
    "spectators": 338,
    "duration": 120,
    "mvps": [
      {
        "team": "BayerVolleys Leverkusen",
        "name": "Sarah Overländer",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308933&userId=9573813"
      },
      {
        "team": "Neuseenland-Volleys Markkleeberg",
        "name": "Franziska Nitsche",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=9958921"
      }
    ],
    "rankAfter": 12,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781164213",
    "videoUrl": "https://www.youtube.com/watch?v=Dx1C5yey6oM",
    "summary": [
      "BayerVolleys Leverkusen setzte sich gegen Neuseenland-Volleys Markkleeberg mit 3:2 durch. Die Sätze endeten 22:25, 21:25, 25:22, 25:17, 16:14; insgesamt wurden 109:103 Ballpunkte gespielt.",
      "Volleys drehen 0:2-Rückstand: Spannender als erwartet gestalteten die BayerVolleys am Samstagabend in der Ostermann-Arena ihr Heimspiel gegen die Neuseenland-Volleys Markkleeberg. Beim 3:2 (22:25, 21:25, 25:22, 25:17, 16:14)-Sieg musste Leverkusen einen 0:2 – Satzrückstand umbiegen, um im Tiebreak zumindest zwei Zähler für den Sieg zu bekommen."
    ],
    "youtubeViews": 1143
  },
  {
    "number": 3170,
    "matchId": 777354338,
    "weekday": "Samstag",
    "date": "25.04.2026",
    "time": "18:00",
    "home": "Neuseenland-Volleys Markkleeberg",
    "away": "VfL Oythe",
    "score": "1:3",
    "ballPoints": "71:96",
    "sets": [
      "18:25",
      "17:25",
      "25:21",
      "11:25"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/e397bf4c-7d40-49e3-8423-00a07f4b3b07/3170",
    "venue": "Neuseenlandhalle",
    "spectators": 295,
    "duration": 93,
    "mvps": [
      {
        "team": "Neuseenland-Volleys Markkleeberg",
        "name": "Bianka Werner",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=744825380"
      },
      {
        "team": "VfL Oythe",
        "name": "Georgia McGovern",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776308853&userId=777895387"
      }
    ],
    "rankAfter": 12,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781302816",
    "summary": [
      "VfL Oythe setzte sich gegen Neuseenland-Volleys Markkleeberg mit 1:3 durch. Die Sätze endeten 18:25, 17:25, 25:21, 11:25; insgesamt wurden 71:96 Ballpunkte gespielt.",
      "Erhofften Punktgewinn nicht geschafft: Zu ihrem letzten Heimspiel der Saison empfingen die Neuseenland-Volleys Markkleeberg den favorisierten Tabellendritten VfL Oythe. Die Aufgabe war klar : den Fans ein tolles letztes Heimspiel bieten und möglichst das Saisonziel Klassenerhalt vorzeitig sichern, indem (mindestens) ein Punkt gewonnen wird. 29 5 Fans waren in die Neuseenlandhalle gekommen und gaben alles, um ihr Team zu pushen. Doch auch aus Oythe war eine kleine, aber lautstarke Fangemeinde angereist. Und letztere war dann nach dem Spiel die glücklichere."
    ],
    "videoUrl": "https://www.youtube.com/live/p1QeyzwyvWU?si=86F7AONC8jZOwj1w",
    "youtubeViews": 1139
  },
  {
    "number": 3182,
    "matchId": 777354411,
    "weekday": "Samstag",
    "date": "02.05.2026",
    "time": "19:00",
    "home": "TV Waldgirmes",
    "away": "Neuseenland-Volleys Markkleeberg",
    "score": "3:1",
    "ballPoints": "99:82",
    "sets": [
      "24:26",
      "25:16",
      "25:18",
      "25:22"
    ],
    "statsUrl": "https://distributor.sams-score.de/scoresheet/pdf/ab457007-a6a4-435a-8b82-cf3c027e6e15/3182",
    "venue": "Sporthalle der Lahntalschule Atzbach",
    "spectators": 212,
    "duration": 98,
    "mvps": [
      {
        "team": "TV Waldgirmes",
        "name": "Leonie Amann",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309795&userId=70434234"
      },
      {
        "team": "Neuseenland-Volleys Markkleeberg",
        "name": "Franziska Nitsche",
        "url": "https://www.volleyball-bundesliga.de/popup/teamMember/teamMemberDetails.xhtml?teamId=776309559&userId=9958921"
      }
    ],
    "rankAfter": 12,
    "articleUrl": "https://www.volleyball-bundesliga.de/popup/article/fullArticle.xhtml?articleId=781383194",
    "summary": [
      "TV Waldgirmes setzte sich gegen Neuseenland-Volleys Markkleeberg mit 3:1 durch. Die Sätze endeten 24:26, 25:16, 25:18, 25:22; insgesamt wurden 99:82 Ballpunkte gespielt.",
      "Gelungenes Saisonfinale für Waldgirmes: Trainer Daniel Bock durfte sich damit genau das Ende wünschen, das er sich nach dem Auswärtssieg in Köln erhofft hatte: ein starker Auftritt vor heimischem Publikum, unterstützt von zahlreichen eigenen Fans sowie mitgereisten Gästefans die beiden Teams Applaudierten"
    ],
    "videoUrl": "https://www.youtube.com/live/95rKYhDQ0_Q?si=AqiIMFN0-yC-eeYe",
    "youtubeViews": 1238
  }
];

games.forEach((game) => {
  const views = youtubeViews[String(game.number)];
  if (Number.isFinite(views)) game.youtubeViews = views;
});
