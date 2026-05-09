const tripData = {
  schedule: [
    {
      date: "2026-07-09",
      weekday: "Thu",
      dayLabel: "7/9",
      events: [
        { time: "11:20", items: ["ICN (T2) --> CDG (T2E)"] },
        { time: "18:20", items: ["CDG (T2E) 도착"] },
        { time: "20:00", items: ["Taxi (40~60', 68 euro)"] },
        { time: "21:00", items: ["숙소1 체크인 후 석식"] }
      ]
    },
    {
      date: "2026-07-10",
      weekday: "Fri",
      dayLabel: "7/10",
      events: [
        { time: "07:30", items: ["조식(숙소)"] },
        { time: "08:00", items: ["Navigo Easy 구입(메트로역) -> 10회분 충전"] },
        {
          time: "09:00",
          items: [
            "숙소 --> Vaugirard (M12)",
            "(1 km, 도보 15')",
            "Vaugirard --> Concorde (11 stops, 25')",
            "Place de la Concorde: 오벨리스크, 분수, 사진(30')",
            "Tuileries Garden 산책: 1시간 이내"
          ]
        },
        { time: "11:00", items: ["Louvre Museum 외관: 30-60'"] },
        { time: "12:25", items: ["중식(Rue de Rivoli 주변)"] },
        { time: "14:00", items: ["Musee d'Orsay (2-3 h)"] },
        { time: "14:30", items: ["(루브르에서 도보 15', 세느강 따라 걷기, 16 euro/p)"] },
        { time: "15:00", items: ["Tuileries (M1) --> Bir-Hakeim (M6)"] },
        { time: "15:30", items: ["(CDG-Etoile에서 환승, 총 10 stops, 15')"] },
        {
          time: "16:00",
          items: [
            "Musee d'Orsay (RER C) --> Champ de Mars Tour Eiffel",
            "(3 stops)",
            "Trocadero (Palais de Chaillot, 정원) 먼저,",
            "다음으로 Eiffel Tower",
            "마지막으로 Champ de Mars 공원"
          ]
        },
        { time: "18:20", items: ["석식(에펠탑 주변)"] },
        { time: "20:00", items: ["센강 유람선 야경(21:00~22:15)"] },
        { time: "20:30", items: ["Bir-Hakeim --> Vaugirard --> 숙소"] }
      ]
    },
    {
      date: "2026-07-11",
      weekday: "Sat",
      dayLabel: "7/11",
      events: [
        { time: "07:30", items: ["조식(숙소)"] },
        {
          time: "09:00",
          items: ["학회 등록(Paris Expo Porte de Versailles)", "(숙소에서 2.1 km, 29')"]
        },
        { time: "14:00", items: ["Champs-Elysees 거리 쇼핑, 카페"] },
        { time: "15:00", items: ["Palais Garnier (15 euro/p): 파리에서 가장 화려한 실내 공간"] },
        { time: "15:30", items: ["(CDG-Etoile (RER A) --> Auber)"] },
        {
          time: "16:00",
          items: ["Galeries Lafayette Haussmann (돔+루프탑 무료 전망)", "(210 m from Palais Garnier)"]
        },
        { time: "17:00", items: ["Saint-Lazare (M13) --> Plaisance (10 stops)", "이후 도보 10' to 숙소"] },
        { time: "18:20", items: ["석식(숙소)"] }
      ]
    },
    {
      date: "2026-07-12",
      weekday: "Sun",
      dayLabel: "7/12",
      events: [
        { time: "07:30", items: ["조식(숙소)"] },
        { time: "08:00", items: ["숙소 --> Volontaires (M12) (900 m, 도보 14')"] },
        {
          time: "09:00",
          items: [
            "Volontaires --> Abbesses (17 stops, 22')",
            "Montmartre",
            "Le Mur des Je t'aime",
            "Funiculaire",
            "Basilique du Sacre-Coeur"
          ]
        },
        { time: "11:00", items: ["Place du Tertre"] },
        { time: "11:20", items: ["La Maison Rose & Le Consulat"] },
        { time: "12:25", items: ["중식(마레지구)"] },
        { time: "13:25", items: ["Abbesses (M12) --> Saint-Paul (M1)"] },
        { time: "14:00", items: ["(Concorde에서 환승, 총 13 stops)"] },
        { time: "14:30", items: ["Le Marais (마레지구)"] },
        { time: "15:00", items: ["Place des Vosges (파리에서 가장 아름다운 광장)"] },
        { time: "15:30", items: ["Rue des Rosiers (유대인 지구+맛집 밀집)"] },
        { time: null, items: ["골목 쇼핑(파리 감성 최고)"] },
        {
          time: "16:00",
          items: [
            "Notre-Dame Cathedral",
            "(마레에서 도보 15-20')",
            "Pantheon",
            "Luxembourg Gardens",
            "Notre-Dme-des-Champs (M12) --> Volontaires --> 도보 15' to 숙소"
          ]
        },
        { time: "18:20", items: ["석식(숙소)"] }
      ]
    },
    {
      date: "2026-07-13",
      weekday: "Mon",
      dayLabel: "7/13",
      events: [
        { time: "07:30", items: ["Car rental at 7:00A (CDG 공항)"] },
        {
          time: "09:00",
          items: [
            "Giverny",
            "(95 km, 70' from CDG), 주차: 전용 무료 주차장",
            "Fondation Claude Monet",
            "(수련연못, 일본식 다리, 모네 정원, 집 내부)"
          ]
        },
        { time: "12:25", items: ["중식(Giverny 또는 이동 중)"] },
        {
          time: "14:00",
          items: [
            "Rouen: 2 h",
            "(70 km, 75' from Giverny), 주차: Parking du Vieux Marche",
            "Rouen Cathedral",
            "구시가지 중세 목조건물",
            "Gros-Horloge (대표 포토스팟)",
            "Place du Vieux-Marche (쟌다르크 관련장소)"
          ]
        },
        { time: "17:00", items: ["Rouen to Hotel Gabriel (250 km, 3 h)"] },
        { time: "20:00", items: ["숙소2 체크인"] },
        { time: "20:30", items: ["석식(섬 내부 or 호텔 레스토랑)"] }
      ]
    },
    {
      date: "2026-07-14",
      weekday: "Tue",
      dayLabel: "7/14",
      events: [
        { time: "08:00", items: ["몽생미셸 수도원(Abbey): 2 h"] },
        { time: "09:00", items: ["수도원 내부, 전망 테라스, 성벽길, 골목 상점"] },
        { time: "12:25", items: ["중식(고속도로 휴게소)"] },
        {
          time: "15:00",
          items: [
            "Etretat Cliffs: 1.5 h",
            "주차: Parking du Grand Val",
            "해변 --> 북쪽 절벽(Falaise d'Aval) 전망대"
          ]
        },
        {
          time: "17:00",
          items: [
            "숙소1로 출발",
            "(225 km, 2.5 h)",
            "숙소 인근 주차: Parking Indigo Paris Pasteur-Montparnasse",
            "(600 m away, 도보 8')"
          ]
        },
        { time: "20:00", items: ["석식(숙소 인근)"] }
      ]
    },
    {
      date: "2026-07-15",
      weekday: "Wed",
      dayLabel: "7/15",
      events: [
        { time: "08:00", items: ["늦잠 자기"] },
        { time: "12:25", items: ["중식(생제르맹 카페)"] },
        { time: "14:30", items: ["세느강 산책"] },
        {
          time: "16:00",
          items: [
            "쇼핑",
            "Le Bon Marche: 식품관이 훌륭(올리브오일, 트러플제품 등)",
            "Le Marais: 향수, 젊은 브랜드, 감성 부티크, 빈티지, 특별한 기념품"
          ]
        },
        { time: "18:20", items: ["석식"] }
      ]
    },
    {
      date: "2026-07-16",
      weekday: "Thu",
      dayLabel: "7/16",
      events: [
        { time: "07:30", items: ["조식(숙소)"] },
        { time: "08:00", items: ["숙소1 체크아웃"] },
        {
          time: "09:00",
          items: [
            "아웃렛",
            "La Vallee Village",
            "or",
            "베르사유 외부/정원 가볍게 둘러보고 One Nation Paris 쇼핑"
          ]
        },
        { time: "11:00", items: ["숙소2 체크아웃"] },
        { time: "12:25", items: ["중식(아웃렛)"] },
        { time: "17:00", items: ["Car return by 7:00P (CDG 공항)"] },
        { time: "18:20", items: ["석식(공항)"] },
        { time: "20:30", items: ["CDG (T2E) --> ICN (T2)"] }
      ]
    },
    {
      date: "2026-07-17",
      weekday: "Fri",
      dayLabel: "7/17",
      events: [{ time: "15:30", items: ["ICN 도착"] }]
    }
  ],
  meta: {
    rental: {
      title: "Rental",
      items: ["Alamo, CDG airport"]
    },
    stay1: {
      title: "Deux pièces de standing, climatisé",
      subtitle: "Primary Paris base",
      mapQuery: "28 Rue Labrouste, Paris, France",
      bookingUrl: "https://www.booking.com/Share-xA3cHn",
      items: [
        "28 Rue Labrouste",
        "Check-in: July 9 after CDG arrival",
        "Checkout noted: July 16 at 08:00",
        "Return to Stay 1 after Etretat on July 14"
      ]
    },
    stay2: {
      title: "Hotel Gabriel",
      subtitle: "Mont-Saint-Michel stay",
      mapQuery: "Hotel Gabriel, Mont-Saint-Michel, France",
      bookingUrl:
        "https://www.dropbox.com/scl/fi/5lrpudx5i0q5xk9wikv1w/0713_1-_-_7-9-_-_.pdf?rlkey=ktlpzls4ij7i44faxwqyq94e0&e=1&st=e26vg93b&dl=0",
      items: [
        "Check-in: July 13 at 20:00",
        "Checkout noted: July 14 at 11:00"
      ]
    }
  }
};

const scheduleRoot = document.getElementById("schedule");
const navRoot = document.getElementById("day-nav");
const detailLookup = {
  stay1: {
    label: "Stay 1",
    ...tripData.meta.stay1
  },
  stay2: {
    label: "Stay 2",
    ...tripData.meta.stay2
  },
  rental: {
    label: "Rental",
    ...tripData.meta.rental
  },
  concorde: {
    label: "Landmark",
    title: "Place de la Concorde",
    subtitle: "Grand square between the Champs-Elysees and the Tuileries.",
    mapQuery: "Place de la Concorde, Paris, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Obelisk_and_fountain_in_Place_de_la_Concorde,_Paris.JPG?width=800",
    imageAlt: "Place de la Concorde with its obelisk and fountain",
    items: [
      "Known for the Luxor Obelisk at the center.",
      "Large historic fountains frame the square.",
      "Good photo stop with wide views toward the Champs-Elysees, Tuileries, and the Seine.",
      "This slot in your itinerary is planned as a short 30-minute stop."
    ]
  },
  tuileries: {
    label: "Garden",
    title: "Tuileries Garden",
    subtitle: "Formal Parisian garden stretching between the Louvre and Place de la Concorde.",
    mapQuery: "Tuileries Garden, Paris, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Tuileries%20Garden.jpg?width=800",
    imageAlt: "View of the Tuileries Garden in Paris",
    items: [
      "Classic French garden with long promenades, fountains, and sculpture.",
      "Easy walking route between major central Paris landmarks.",
      "Good place for a light stroll, photos, and a short rest in the morning.",
      "Your itinerary keeps this as a brief stop of about 1 hour or less."
    ]
  },
  louvre: {
    label: "Museum",
    title: "Louvre Museum",
    subtitle: "One of the world’s most famous museums, set in the former royal palace.",
    mapQuery: "Louvre Museum, Paris, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Louvre%20Glass%20Pyramid%2C%20Paris%2C%20France%20%2853198133274%29.jpg?width=800",
    imageAlt: "The Louvre glass pyramid in Paris",
    items: [
      "Known for the glass pyramid courtyard and iconic palace facade.",
      "Even viewing only the exterior gives you one of central Paris’s best photo spots.",
      "It sits right beside the Tuileries and close to the Seine, so it fits well in this walking route.",
      "Your plan here is specifically for the exterior, not a full museum visit."
    ]
  },
  montmartre: {
    label: "Neighborhood",
    title: "Montmartre",
    subtitle: "Historic hilltop district known for village streets, artists, and broad Paris views.",
    mapQuery: "Montmartre, Paris, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Montmartre%20%28Paris%29.jpg?width=800",
    imageAlt: "Street view in Montmartre, Paris",
    items: [
      "Montmartre is one of Paris’s most atmospheric neighborhoods, with steep lanes, small cafes, and a more old-Paris feel.",
      "It is closely associated with artists, cabarets, and the hill around Sacre-Coeur.",
      "This stop works well as a morning walking area because several nearby sights cluster within a short distance.",
      "Your Day 4 plan uses Montmartre as the main area before moving through its landmark stops."
    ]
  },
  jemur: {
    label: "Art Wall",
    title: "Le Mur des Je t'aime",
    subtitle: "Famous love wall in Montmartre made of blue tiles covered with 'I love you' in many languages.",
    mapQuery: "Le Mur des Je t'aime, Paris, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/2022-04-12-Le%20mur%20des%20je%20t%27aime-8493.jpg?width=800",
    imageAlt: "Le Mur des Je t'aime in Paris",
    items: [
      "This small public artwork is one of Montmartre’s best-known photo spots.",
      "The wall displays 'I love you' written in many languages, which is the main reason visitors stop here.",
      "It fits naturally into a Montmartre walking route because it is compact and easy to pair with nearby hilltop sights.",
      "Your itinerary uses it as one of the short landmark stops in the Day 4 morning sequence."
    ]
  },
  funiculaire: {
    label: "Funicular",
    title: "Funiculaire de Montmartre",
    subtitle: "Short hillside railway that carries visitors up toward Sacre-Coeur without climbing the long stairway.",
    mapQuery: "Funiculaire de Montmartre, Paris, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/France-000439%20-%20Montmartre%20Funicular%20%2814707558697%29.jpg?width=800",
    imageAlt: "Montmartre funicular in Paris",
    items: [
      "The funicular is the easy way to reach the upper part of Montmartre without taking the full staircase.",
      "It is mainly practical, but it also feels like part of the classic Montmartre experience.",
      "Using it fits well with nearby stops such as Le Mur des Je t'aime and Sacre-Coeur because they cluster on the same hill route.",
      "Your itinerary treats this as one of the Day 4 access highlights inside the Montmartre sequence."
    ]
  },
  sacrecoeur: {
    label: "Basilica",
    title: "Basilique du Sacre-Coeur",
    subtitle: "White-domed hilltop basilica that crowns Montmartre and overlooks Paris from one of the city’s highest points.",
    mapQuery: "Basilique du Sacre-Coeur, Paris, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Basilique%20Sacr%C3%A9%20C%C5%93ur%20Montmartre.jpg?width=800",
    imageAlt: "Basilique du Sacre-Coeur in Montmartre, Paris",
    items: [
      "This is one of Paris’s most recognizable churches and the visual centerpiece of Montmartre.",
      "It is known for its bright white exterior, broad front steps, and panoramic view over the city.",
      "The stop fits naturally after the funicular because the basilica sits at the top of the Montmartre hill.",
      "Your itinerary treats it as one of the major highlights in the Day 4 morning route."
    ]
  },
  tertre: {
    label: "Square",
    title: "Place du Tertre",
    subtitle: "Historic Montmartre square known for portrait artists, cafes, and its classic old-Paris atmosphere.",
    mapQuery: "Place du Tertre, Paris, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Place%20du%20Tertre%20%2839776994984%29.jpg?width=800",
    imageAlt: "Place du Tertre in Montmartre, Paris",
    items: [
      "This square is one of the signature spots in Montmartre and is especially known for street artists and portrait stands.",
      "It feels more intimate and village-like than the larger boulevards of central Paris.",
      "The stop fits naturally after Sacre-Coeur because it is part of the same upper Montmartre walking area.",
      "Your itinerary uses it as a shorter landmark stop inside the Day 4 neighborhood sequence."
    ]
  },
  maisonconsulat: {
    label: "Montmartre Streets",
    title: "La Maison Rose & Le Consulat",
    subtitle: "Two of Montmartre’s best-known cafe facades, both popular as classic photo stops in the hilltop neighborhood.",
    mapQuery: "La Maison Rose, Paris, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/La%20Maison%20Rose%2C%20Paris%2C%20Montmartre.jpg?width=800",
    imageAlt: "La Maison Rose in Montmartre, Paris",
    items: [
      "La Maison Rose is the famous pink corner house in Montmartre and one of the neighborhood’s most recognizable facades.",
      "Le Consulat is another classic Montmartre cafe nearby, known for its old-Paris street atmosphere.",
      "These spots work best as short walking and photo stops rather than long sightseeing visits.",
      "Your itinerary groups them naturally after Place du Tertre as part of the same upper Montmartre wandering route."
    ]
  },
  marais: {
    label: "Neighborhood",
    title: "Le Marais",
    subtitle: "Historic central Paris district known for old streets, boutiques, cafes, and a lively walkable atmosphere.",
    mapQuery: "Le Marais, Paris, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Le%20Marais%20%40%20Paris%20%2815444920131%29.jpg?width=800",
    imageAlt: "Street view in Le Marais, Paris",
    items: [
      "Le Marais is one of Paris’s most popular walking neighborhoods, mixing historic buildings with shops, cafes, and small streets.",
      "It is especially known for fashion boutiques, food stops, and a strong neighborhood atmosphere compared with the grand boulevards.",
      "The area fits well for a slower afternoon of strolling, shopping, and short landmark stops.",
      "Your itinerary uses it as the main base for the Day 4 afternoon before Place des Vosges and Rue des Rosiers."
    ]
  },
  vosges: {
    label: "Square",
    title: "Place des Vosges",
    subtitle: "Elegant historic square in the Marais, known for its arcades, symmetry, and calm garden center.",
    mapQuery: "Place des Vosges, Paris, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Place%20des%20Vosges%2C%20Paris.jpg?width=800",
    imageAlt: "Place des Vosges in Paris",
    items: [
      "Often described as one of the most beautiful squares in Paris, it is known for its formal layout and red-brick facades.",
      "The arcades and central lawn make it feel quieter and more refined than the busier shopping streets nearby.",
      "It fits naturally within a Marais walking route as a slower, more architectural stop.",
      "Your itinerary treats this as one of the main Day 4 afternoon landmarks after exploring Le Marais."
    ]
  },
  rosier: {
    label: "Street",
    title: "Rue des Rosiers",
    subtitle: "One of the best-known streets in the Marais, associated with the historic Jewish quarter and popular food stops.",
    mapQuery: "Rue des Rosiers, Paris, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Paris%2C%20Rue%20des%20Rosiers%20%2843040432771%29.jpg?width=800",
    imageAlt: "Rue des Rosiers in Paris",
    items: [
      "Rue des Rosiers is one of the signature streets of the Marais and is closely tied to the neighborhood’s historic Jewish community.",
      "It is especially known for casual food stops, bakeries, and lively pedestrian street atmosphere.",
      "This stop works well as both a short walk and a practical snack or meal area during a Marais afternoon.",
      "Your itinerary places it after Place des Vosges as part of the same Day 4 neighborhood wandering route."
    ]
  },
  notredame: {
    label: "Cathedral",
    title: "Notre-Dame Cathedral",
    subtitle: "Historic Gothic cathedral on the Ile de la Cite, one of Paris’s most iconic religious and architectural landmarks.",
    mapQuery: "Notre-Dame Cathedral, Paris, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Notre%20dame%20cathedral%2C%20Paris.jpg?width=800",
    imageAlt: "Notre-Dame Cathedral in Paris",
    items: [
      "Notre-Dame is one of the defining monuments of Paris and one of the most famous examples of French Gothic architecture.",
      "It is especially known for its towers, rose windows, riverside setting, and long historical significance in the city.",
      "This stop fits naturally after the Marais because it is within walking reach and shifts the route toward the Ile de la Cite.",
      "Your itinerary treats it as one of the key Day 4 landmark visits before continuing farther south."
    ]
  },
  pantheon: {
    label: "Monument",
    title: "Pantheon",
    subtitle: "Neoclassical monument in the Latin Quarter, known for its grand dome and its role as a resting place for major French figures.",
    mapQuery: "Pantheon, Paris, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Panth%C3%A9on%20Paris.JPG?width=800",
    imageAlt: "Pantheon in Paris",
    items: [
      "The Pantheon began as a church and now serves as one of France’s major national monuments.",
      "It is especially known for its monumental dome, formal facade, and tombs of notable French writers, scientists, and public figures.",
      "This stop fits well after Notre-Dame because it continues the route into the Left Bank and the Latin Quarter area.",
      "Your itinerary treats it as one of the major late-afternoon landmarks on Day 4."
    ]
  },
  luxembourg: {
    label: "Garden",
    title: "Luxembourg Gardens",
    subtitle: "Classic Left Bank garden known for formal paths, fountains, lawns, and a relaxed Parisian park atmosphere.",
    mapQuery: "Luxembourg Gardens, Paris, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Fountain%20%40%20Jardin%20du%20Luxembourg%20%40%20Paris%20%2830623667325%29.jpg?width=800",
    imageAlt: "Luxembourg Gardens in Paris",
    items: [
      "Luxembourg Gardens is one of Paris’s best-known public gardens and a classic place for a lighter, slower walk.",
      "It is especially known for its tree-lined paths, chairs around the fountain basin, and the elegant setting beside the Luxembourg Palace.",
      "This stop fits naturally after the Pantheon because it keeps you in the same Left Bank area while shifting into a calmer outdoor setting.",
      "Your itinerary treats it as one of the final Day 4 stops before returning toward the metro."
    ]
  },
  giverny: {
    label: "Garden + House",
    title: "Giverny",
    subtitle: "Village visit centered on Claude Monet’s home and gardens, one of the most iconic art-related day-trip stops from Paris.",
    mapQuery: "Fondation Claude Monet, Giverny, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Monet%20Garden%2C%20Giverny%20%283%29.jpg?width=800",
    imageAlt: "Monet garden in Giverny",
    items: [
      "Giverny is best known for Claude Monet’s house and gardens, including the water-lily area and Japanese bridge that inspired his paintings.",
      "It works especially well as a morning-to-midday stop because the garden and house are the main experience rather than a dense town itinerary.",
      "This is one of the most visually distinctive nature-and-art stops in your trip, contrasting with the Paris city days before and after.",
      "Your itinerary focuses on the Fondation Claude Monet, including the garden, pond, bridge, and house interior."
    ]
  },
  monetfoundation: {
    label: "Monet Site",
    title: "Fondation Claude Monet",
    subtitle: "Monet’s house and gardens in Giverny, preserved as the core visit of the village.",
    mapQuery: "Fondation Claude Monet, Giverny, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Giverny%2C%20Monet%20house.jpg?width=800",
    imageAlt: "Claude Monet's house in Giverny",
    items: [
      "This is the main destination in Giverny and the centerpiece of the village visit.",
      "It includes Monet’s colorful house, flower garden, and the separate water garden with the bridge and lily-pond setting.",
      "This stop is more specific than the broader Giverny label because it is the actual site tied to Monet’s life and paintings.",
      "Your itinerary treats it as the main visit within the Day 5 Giverny stop."
    ]
  },
  rouen: {
    label: "City Stop",
    title: "Rouen",
    subtitle: "Historic Normandy city known for its cathedral, medieval center, and timber-framed streets.",
    mapQuery: "Rouen, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Rouen%20Old%20Town%20%2830784770452%29.jpg?width=800",
    imageAlt: "Old town street in Rouen, France",
    items: [
      "Rouen is best known for its cathedral, old market area, and dense medieval center with timber-framed buildings.",
      "It works well as a compact afternoon stop because several of the main sights are close together in the historic core.",
      "This matches your plan closely, since Rouen Cathedral, the old town, Gros-Horloge, and Place du Vieux-Marche are all part of the same walking area.",
      "Your itinerary treats Rouen as a focused 2-hour city stop before driving onward to Mont-Saint-Michel."
    ]
  },
  rouencathedral: {
    label: "Cathedral",
    title: "Rouen Cathedral",
    subtitle: "Major Gothic cathedral in Normandy, famous for its intricate facade and its association with Monet’s cathedral series.",
    mapQuery: "Rouen Cathedral, Rouen, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Fa%C3%A7ade%20of%20the%20Cath%C3%A9drale%20Notre-Dame%20de%20Rouen%20%2830268693284%29.jpg?width=800",
    imageAlt: "Rouen Cathedral in Rouen, France",
    items: [
      "Rouen Cathedral is one of the city’s main landmarks and one of the best-known Gothic cathedrals in France.",
      "It is especially recognized for its elaborate facade and for the series of paintings Claude Monet made of it in changing light.",
      "This stop fits naturally inside your Rouen walking route because it anchors the historic center and connects closely with the old-town streets.",
      "Your itinerary treats it as one of the headline sights within the Day 5 Rouen stop."
    ]
  },
  rouenhalftimber: {
    label: "Old Town",
    title: "Rouen Half-Timbered Houses",
    subtitle: "Medieval timber-framed streets that give Rouen much of its distinctive old-town character.",
    mapQuery: "Rue du Gros-Horloge, Rouen, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Panorama%20of%20Half-timber%20houses%20-%20The%20Old%20Town%20of%20Rouen%20%2830865170306%29.jpg?width=800",
    imageAlt: "Half-timbered houses in Rouen old town",
    items: [
      "Rouen is especially known for its medieval timber-framed buildings, which are one of the main reasons the city feels so different from central Paris.",
      "These streets are best experienced on foot, since much of the appeal comes from the facades, narrow lanes, and older urban texture.",
      "This stop fits closely with your Rouen Cathedral and Gros-Horloge visit because the main historic sights are all clustered in the old center.",
      "Your itinerary treats these medieval wooden buildings as one of the visual highlights of the Rouen segment."
    ]
  },
  groshorloge: {
    label: "Clock Landmark",
    title: "Gros-Horloge",
    subtitle: "Rouen’s famous Renaissance astronomical clock, mounted above one of the old town’s signature streets.",
    mapQuery: "Gros-Horloge, Rouen, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Le%20Gros%20Horloge%20-%20Rouen.jpg?width=800",
    imageAlt: "Gros-Horloge in Rouen, France",
    items: [
      "The Gros-Horloge is one of Rouen’s best-known landmarks and one of the city’s classic photo points.",
      "It is an old astronomical clock set in an arch across the street, which gives this part of the old town a very distinctive look.",
      "This stop fits naturally with Rouen Cathedral and the medieval streets because they are all concentrated in the same historic core.",
      "Your itinerary treats it as one of the headline visual stops within the Rouen segment."
    ]
  },
  vieuxmarche: {
    label: "Square",
    title: "Place du Vieux-Marche",
    subtitle: "Historic old market square in Rouen, closely associated with Joan of Arc and the city’s medieval center.",
    mapQuery: "Place du Vieux-Marche, Rouen, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Place%20du%20Vieux-March%C3%A9%2C%20Rouen%20%282%29.jpg?width=800",
    imageAlt: "Place du Vieux-Marche in Rouen, France",
    items: [
      "This square is one of Rouen’s major historic sites and is strongly associated with Joan of Arc.",
      "It combines a central square atmosphere with surrounding half-timbered buildings and later memorial elements.",
      "The stop fits naturally with the cathedral, Gros-Horloge, and old-town walk because it is part of the same compact historic area.",
      "Your itinerary treats it as one of the main Rouen landmarks within the short city stop."
    ]
  },
  montabbey: {
    label: "Abbey",
    title: "Mont-Saint-Michel Abbey",
    subtitle: "The famous hilltop abbey at Mont-Saint-Michel, combining dramatic architecture, historic cloisters, and sweeping views.",
    mapQuery: "Mont-Saint-Michel Abbey, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Abbaye%20du%20Mont-Saint-Michel%20%2812%29.jpg?width=800",
    imageAlt: "Mont-Saint-Michel Abbey in France",
    items: [
      "This is the signature monument of Mont-Saint-Michel and the main reason most visitors go up through the island streets.",
      "It is especially known for its layered stone architecture, elevated terraces, and the dramatic setting above the bay.",
      "The stop works well as your main Day 6 morning highlight because the abbey is the central experience before returning to the village lanes and viewpoints.",
      "Your itinerary treats this as a focused 2-hour visit with the abbey itself as the priority."
    ]
  },
  etretat: {
    label: "Cliff Coast",
    title: "Etretat Cliffs",
    subtitle: "Normandy coastal cliffs known for dramatic chalk arches, sea views, and classic viewpoints around Falaise d'Aval.",
    mapQuery: "Etretat Cliffs, Etretat, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Falaise%20d%20Aval%20in%20Etretat.jpg?width=800",
    imageAlt: "Etretat cliffs in Normandy, France",
    items: [
      "Etretat is famous for its white chalk cliffs and natural arch formations, especially around Falaise d'Aval.",
      "This is one of the most scenic landscape stops in your trip and works best for walking, views, and photos rather than indoor sightseeing.",
      "Your route note about the beach and the northern cliff viewpoint fits the classic Etretat walking pattern very well.",
      "The itinerary treats this as a focused 1.5-hour nature stop before returning toward Paris."
    ]
  },
  grandvalparking: {
    label: "Parking",
    title: "Parking du Grand Val",
    subtitle: "Convenient parking area commonly used for access to the Etretat cliff walk and beach approach.",
    mapQuery: "Parking du Grand Val, Etretat, France",
    items: [
      "This parking stop is practical because it places you near the walking route toward the beach and cliff viewpoint.",
      "For your itinerary, it functions mainly as the access point for the Etretat segment rather than a sightseeing stop."
    ]
  },
  indigoPasteur: {
    label: "Parking",
    title: "Parking Indigo Paris Pasteur-Montparnasse",
    subtitle: "Practical Paris parking option linked in your plan for the return to Stay 1.",
    mapQuery: "Parking Indigo Paris Pasteur-Montparnasse, Paris, France",
    items: [
      "This parking stop functions as the nearby car-storage point for your return to the Paris accommodation.",
      "In your itinerary, it is mainly a practical arrival detail rather than a sightseeing stop."
    ]
  },
  saintgermaincafe: {
    label: "Cafe Area",
    title: "Saint-Germain-des-Pres Cafes",
    subtitle: "Classic Left Bank cafe district associated with literary Paris, terrace culture, and long slow lunches.",
    mapQuery: "Saint-Germain-des-Pres, Paris, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Lesdeuxmagots.jpg?width=800",
    imageAlt: "Cafe terrace in Saint-Germain-des-Pres, Paris",
    items: [
      "Saint-Germain-des-Pres is one of the classic cafe neighborhoods in Paris and is strongly associated with literary and intellectual cafe culture.",
      "The area is known for terrace seating, elegant streets, and famous cafes such as Les Deux Magots and Cafe de Flore.",
      "It fits your Day 7 lunch stop well because it is more about atmosphere and a slower meal than about rushing through landmarks.",
      "Your itinerary treats this as a cafe-based lunch and strolling stop before the Seine walk and shopping later in the day."
    ]
  },
  bonmarche: {
    label: "Department Store",
    title: "Le Bon Marche",
    subtitle: "Historic Left Bank department store known for luxury shopping and its highly regarded food hall.",
    mapQuery: "Le Bon Marche, Paris, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Paris%20-%20Le%20Bon%20March%C3%A9%20%2829573701111%29.jpg?width=800",
    imageAlt: "Le Bon Marche in Paris",
    items: [
      "Le Bon Marche is one of Paris’s most famous department stores and is especially associated with a more refined Left Bank shopping atmosphere.",
      "It is a strong stop for gifts and gourmet products because La Grande Epicerie is one of the best-known food halls in the city.",
      "This fits your Day 7 shopping block well because your note specifically points to the food section for items like olive oil and truffle products.",
      "Your itinerary treats this as a practical and high-quality shopping stop rather than only a landmark photo stop."
    ]
  },
  maraisshopping: {
    label: "Shopping Area",
    title: "Le Marais Shopping",
    subtitle: "One of Paris’s strongest neighborhoods for niche shopping, younger brands, fragrance, vintage, and small distinctive boutiques.",
    mapQuery: "Le Marais, Paris, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Le%20Marais%20%40%20Paris%20%2815444920131%29.jpg?width=800",
    imageAlt: "Shopping street atmosphere in Le Marais, Paris",
    items: [
      "Le Marais is especially good for browsing smaller, more characterful shops rather than only major luxury flagships.",
      "It is a strong area for perfume, younger labels, curated boutiques, vintage, and more unusual gift shopping.",
      "This makes it a good contrast to Le Bon Marche because the experience is more neighborhood-based and exploratory.",
      "Your itinerary treats this as the more style- and discovery-oriented part of the Day 7 shopping block."
    ]
  },
  lavalleevillage: {
    label: "Outlet Village",
    title: "La Vallee Village",
    subtitle: "Open-air designer outlet village east of Paris, known for brand shopping in a more polished, walkable setting.",
    mapQuery: "La Vallee Village, Serris, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/La%20Vall%C3%A9e%20Village%2C%20f%C3%A9vrier%202025%202.jpg?width=800",
    imageAlt: "La Vallee Village in France",
    items: [
      "La Vallee Village is one of the main outlet-shopping destinations for Paris visitors looking for designer and luxury-brand discounts.",
      "The setting is more village-like and easier to walk than a typical enclosed mall, which makes it fit a lighter final-day shopping plan.",
      "This works well for your last full day because it is practical, focused, and easy to pair with airport-bound timing later on.",
      "Your itinerary treats it as the main outlet option on Day 8."
    ]
  },
  versaillesonenation: {
    label: "Alternative Plan",
    title: "Versailles Gardens + One Nation Paris",
    subtitle: "A lighter alternative final-day plan that combines a brief Versailles exterior/garden stop with outlet shopping at One Nation Paris.",
    mapQuery: "Palace of Versailles, Versailles, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Palace%20of%20Versailles%20Garden.jpg?width=800",
    imageAlt: "Gardens of the Palace of Versailles",
    items: [
      "This option works as a softer version of the day: a light exterior or garden look at Versailles followed by shopping rather than a heavy palace visit.",
      "The Versailles part is best treated as atmosphere and a short walk, especially if you want to save energy before the airport transfer.",
      "One Nation Paris then gives you a more outlet-focused shopping stop than central Paris shopping streets.",
      "Your itinerary presents this as the alternative to La Vallee Village on Day 8, not as an additional full sightseeing block."
    ]
  },
  falaiseaval: {
    label: "Viewpoint",
    title: "Falaise d'Aval Viewpoint",
    subtitle: "The classic Etretat cliff viewpoint overlooking the natural arch and sweeping Normandy coastline.",
    mapQuery: "Falaise d'Aval, Etretat, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/%C3%89tretat%20-%20La%20Falaise%20d%27Aval%20-%20View%20NE.jpg?width=800",
    imageAlt: "Falaise d'Aval viewpoint in Etretat, France",
    items: [
      "This is one of the signature viewpoints at Etretat and the classic place to appreciate the arch and cliff formation.",
      "The stop is mainly about the coastal panorama, the white chalk formations, and the contrast between the sea and the rock face.",
      "It fits your route exactly because the plan already moves from the beach toward the northern cliff viewpoint.",
      "Your itinerary treats this as one of the key visual highlights within the Etretat stop."
    ]
  },
  orsay: {
    label: "Museum",
    title: "Musee d'Orsay",
    subtitle: "Major Paris museum in a former Beaux-Arts railway station on the Left Bank.",
    mapQuery: "Musee d'Orsay, Paris, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Paris%2C%20Musee%20d%27Orsay.jpg?width=800",
    imageAlt: "Interior view of the Musee d'Orsay in Paris",
    items: [
      "Best known for Impressionist and Post-Impressionist masterpieces.",
      "The building itself is a highlight, especially the grand clock and station hall.",
      "It fits naturally after the Louvre/Tuileries walk before moving toward the Eiffel Tower area.",
      "Your itinerary gives this stop a fuller visit window of about 2 to 3 hours."
    ]
  },
  seinewalk: {
    label: "River Walk",
    title: "Seine River",
    subtitle: "Paris’s central river corridor, lined with major landmarks, bridges, and classic walking views.",
    mapQuery: "Seine River, Paris, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Seine%20in%20Paris.jpg?width=800",
    imageAlt: "The Seine River in Paris during daytime",
    items: [
      "The Seine is the main river running through central Paris and one of the city’s most recognizable settings.",
      "Walking along it gives you open views of bridges, monuments, and riverside architecture in a more relaxed pace than the metro.",
      "This stretch fits well between the Louvre side and Musee d'Orsay because the riverbank route is part of the classic central Paris walk.",
      "Your itinerary marks this as a short scenic walk before the Eiffel Tower area later in the day."
    ]
  },
  champselysees: {
    label: "Avenue",
    title: "Champs-Elysees",
    subtitle: "Paris’s grand ceremonial avenue, known for flagship stores, cafes, and its long view toward the Arc de Triomphe.",
    mapQuery: "Champs-Elysees, Paris, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Avenue%20des%20Champs-%C3%89lys%C3%A9es%20%2822426421876%29.jpg?width=800",
    imageAlt: "Champs-Elysees in Paris",
    items: [
      "This is one of Paris’s most famous streets and a classic place for strolling, shopping, and cafe stops.",
      "It runs between Place de la Concorde and the Arc de Triomphe, so the avenue itself is part of the attraction.",
      "The area mixes luxury brands, major retail, and broad sidewalks that feel especially lively in the afternoon and evening.",
      "Your Day 3 plan keeps this as a shopping and cafe block before moving on to Palais Garnier."
    ]
  },
  palaisgarnier: {
    label: "Opera House",
    title: "Palais Garnier",
    subtitle: "Grand 19th-century opera house famous for its lavish interiors and monumental Beaux-Arts design.",
    mapQuery: "Palais Garnier, Paris, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Op%C3%A9ra%20Garnier%20%2832816267521%29.jpg?width=800",
    imageAlt: "Palais Garnier in Paris",
    items: [
      "Also called the Opera Garnier, it is one of Paris’s most ornate landmark interiors.",
      "It is especially known for its grand staircase, gilded decoration, painted ceilings, and theatrical public rooms.",
      "This stop fits well after the Champs-Elysees because it shifts the day from shopping streets into one of the city’s most dramatic indoor spaces.",
      "Your itinerary treats this as a focused visit to one of Paris’s most visually impressive interiors."
    ]
  },
  galerieslafayette: {
    label: "Department Store",
    title: "Galeries Lafayette Haussmann",
    subtitle: "Historic Paris department store known for its stained-glass dome and free rooftop view.",
    mapQuery: "Galeries Lafayette Haussmann, Paris, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Galerie%20Lafayette%20Haussmann%20Dome.jpg?width=800",
    imageAlt: "Dome inside Galeries Lafayette Haussmann in Paris",
    items: [
      "The central dome is the main visual highlight and one of the most recognizable department-store interiors in Paris.",
      "It is popular both for shopping and for the rooftop terrace, which offers a free city view.",
      "This stop fits naturally after Palais Garnier because it is only a short walk away and keeps you in the same boulevard Haussmann area.",
      "Your itinerary highlights the dome and the free rooftop 전망 rather than a long shopping-only stop."
    ]
  },
  champdemars: {
    label: "Eiffel Area",
    title: "Champ de Mars Tour Eiffel",
    subtitle: "The park and riverside area around the Eiffel Tower, reached here by the RER/metro connection.",
    mapQuery: "Champ de Mars Tour Eiffel, Paris, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Eiffel%20Tower%20from%20Champ%20de%20Mars.jpg?width=800",
    imageAlt: "Eiffel Tower and Champ de Mars in Paris",
    items: [
      "This is the classic arrival zone for Eiffel Tower views and photos.",
      "From here you can move between Trocadero, the tower itself, and the lawns of Champ de Mars.",
      "It works well as the transition point into your evening Eiffel Tower sequence.",
      "Your 16:00 block uses this as the start of the Eiffel/Trocadero area visit."
    ]
  },
  trocadero: {
    label: "Viewpoint",
    title: "Trocadero",
    subtitle: "Classic Eiffel Tower viewpoint around the Palais de Chaillot and its gardens.",
    mapQuery: "Trocadero, Paris, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Eiffel%20tower%20from%20trocadero.jpg?width=800",
    imageAlt: "Trocadero view toward the Eiffel Tower in Paris",
    items: [
      "One of the most famous places in Paris for a frontal Eiffel Tower view.",
      "The esplanade, stairs, and gardens make it ideal for wide photos before going closer to the tower.",
      "Palais de Chaillot frames the area and gives the stop a grand architectural feel.",
      "Your itinerary places this as the first sightseeing stop in the Eiffel area sequence."
    ]
  },
  eiffel: {
    label: "Landmark",
    title: "Eiffel Tower",
    subtitle: "Paris’s most iconic landmark and the centerpiece of your evening sightseeing sequence.",
    mapQuery: "Eiffel Tower, Paris, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Eiffel%20tower-Paris.jpg?width=800",
    imageAlt: "Eiffel Tower in Paris",
    items: [
      "Built for the 1889 Exposition Universelle and now the city’s defining monument.",
      "Best enjoyed here after Trocadero so you get both the panoramic view and the close-up arrival.",
      "This part of the route naturally leads into the Champ de Mars lawns and your evening river-cruise plan.",
      "Your itinerary treats this as the central stop in the 16:00 Eiffel area block."
    ]
  },
  champdeparc: {
    label: "Park",
    title: "Champ de Mars",
    subtitle: "Large public lawn stretching south of the Eiffel Tower, ideal for open views and a slower pace.",
    mapQuery: "Champ de Mars, Paris, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Champ%20de%20Mars%20%40%20Eiffel%20Tower%20%40%20Paris%20%2834395064334%29.jpg?width=800",
    imageAlt: "Champ de Mars with the Eiffel Tower in Paris",
    items: [
      "This is the broad green park directly below the Eiffel Tower.",
      "Good for relaxed walking, wide photos, and a more open perspective after the closer tower stop.",
      "It works well as the final part of the sightseeing flow before dinner and the night cruise.",
      "Your itinerary places it as the last stop inside the 16:00 Eiffel area sequence."
    ]
  },
  seinecruise: {
    label: "River Cruise",
    title: "Seine River Cruise",
    subtitle: "Evening boat ride for illuminated Paris views, timed here with your Eiffel Tower night sequence.",
    mapQuery: "Port de la Bourdonnais, Paris, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Seine%20River%20in%20Paris%20at%20night%20%2851690023900%29.jpg?width=800",
    imageAlt: "Seine river at night in Paris",
    items: [
      "A Seine cruise is one of the easiest ways to see many Paris landmarks lit up in one continuous ride.",
      "You usually get river views of the Eiffel Tower, bridges, the Louvre side, Musee d'Orsay, and parts of Notre-Dame depending on the route.",
      "This works especially well after your Eiffel area visit because the embarkation points are commonly near the tower.",
      "Your plan treats this as the main night-view activity, with the cruise timed from 21:00 to 22:15."
    ]
  },
  eiffeldinner: {
    label: "Dinner",
    title: "Dinner near the Eiffel Tower",
    subtitle: "Adult-friendly dinner options depending on whether you want the best balance, the best view, or a full splurge.",
    items: [
      "Best balanced choice: 20 Eiffel - relaxed but highly regarded, and the safest overall dinner pick nearby.",
      "Best view / special night: Les Ombres - rooftop setting with a direct Eiffel Tower view.",
      "Most iconic splurge: Le Jules Verne - inside the Eiffel Tower itself for a true destination dinner."
    ]
  },
  rivoli: {
    label: "Street + Lunch",
    title: "Rue de Rivoli",
    subtitle: "Historic central Paris street running along the Louvre and Tuileries toward Place de la Concorde.",
    mapQuery: "Rue de Rivoli, Paris, France",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Rue%20de%20RIVOLI%2C%20Paris.jpg?width=800",
    imageAlt: "Rue de Rivoli in central Paris",
    items: [
      "Known for its arcades, shopping, and major Right Bank landmarks.",
      "This is a practical lunch zone because it sits directly on your Louvre-Tuileries walking route.",
      "Chinese option on Rue de Rivoli: BAYAN, 35 Rue de Rivoli, noted as the strongest nearby pick.",
      "Another direct-on-Rivoli option: L'Etoile de Rivoli, 158 Rue de Rivoli, more of a convenience choice.",
      "If you want a destination-level upscale Chinese meal instead: Imperial Treasure near the Champs-Elysees."
    ]
  }
};

function formatDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(date);
}

const dayAccentPalette = [
  "rgba(240, 159, 192, 0.98)",
  "rgba(132, 208, 255, 0.98)",
  "rgba(201, 184, 255, 0.98)",
  "rgba(255, 228, 109, 0.98)",
  "rgba(188, 238, 168, 0.98)",
  "rgba(255, 171, 214, 0.98)",
  "rgba(144, 214, 255, 0.98)",
  "rgba(255, 210, 159, 0.98)",
  "rgba(214, 190, 255, 0.98)"
];

function buildNav() {
  const fragment = document.createDocumentFragment();

  tripData.schedule.forEach((day, index) => {
    const link = document.createElement("a");
    link.className = "day-pill";
    link.href = `#day-${index + 1}`;
    link.dataset.target = `day-${index + 1}`;
    link.style.setProperty("--pill-accent", dayAccentPalette[index % dayAccentPalette.length]);
    link.innerHTML = `<strong>${day.dayLabel}</strong><span>${day.weekday}</span>`;
    fragment.appendChild(link);
  });

  navRoot.appendChild(fragment);
}

function setActiveDayPill(targetId) {
  const pills = navRoot.querySelectorAll(".day-pill");
  let activePill = null;

  pills.forEach((pill) => {
    const isActive = pill.getAttribute("href") === `#${targetId}`;
    pill.classList.toggle("is-active", isActive);
    pill.setAttribute("aria-current", isActive ? "true" : "false");

    if (isActive) {
      activePill = pill;
    }
  });

  if (activePill) {
    activePill.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  }
}

function setupDayNav() {
  const initialTarget = window.location.hash ? window.location.hash.slice(1) : "day-1";
  setActiveDayPill(initialTarget);
  const dayCards = [...scheduleRoot.querySelectorAll(".day-card")];

  const updateActiveDayFromViewport = () => {
    const anchorY = window.innerWidth <= 640 ? 150 : 180;
    let activeCard = dayCards[0];

    dayCards.forEach((card) => {
      const rect = card.getBoundingClientRect();

      if (rect.top <= anchorY) {
        activeCard = card;
      }
    });

    if (activeCard) {
      setActiveDayPill(activeCard.id);
    }
  };

  navRoot.addEventListener("click", (event) => {
    const pill = event.target.closest(".day-pill");

    if (!pill) {
      return;
    }

    const targetId = pill.getAttribute("href")?.slice(1);

    if (targetId) {
      setActiveDayPill(targetId);
    }
  });

  window.addEventListener("hashchange", () => {
    const targetId = window.location.hash ? window.location.hash.slice(1) : "day-1";
    setActiveDayPill(targetId);
  });

  window.addEventListener("scroll", updateActiveDayFromViewport, { passive: true });
  window.addEventListener("resize", updateActiveDayFromViewport);
  updateActiveDayFromViewport();
}

function buildSchedule() {
  const fragment = document.createDocumentFragment();

  tripData.schedule.forEach((day, index) => {
    const article = document.createElement("article");
    article.className = "day-card";
    article.id = `day-${index + 1}`;
    article.style.animationDelay = `${index * 45}ms`;

    const timeline = day.events
      .map((event) => {
        const timeLabel = event.time ?? "Flow";
        const timeClass = event.time ? "entry__time" : "entry__time entry__time--floating";
        const items = event.items
          .map((item) => {
            const itemTarget = getItemTarget(item);
            const itemInfo = itemTarget ? detailLookup[itemTarget] : null;
            const itemClass = itemInfo ? "entry__item entry__item--expandable" : "entry__item";
            const itemAttrs = itemInfo
              ? ` data-target="${itemTarget}" tabindex="0" role="button" aria-expanded="false" aria-label="Show ${escapeHtml(itemInfo.label)} information"`
              : "";
            const toggleMarkup = itemInfo
              ? `<button class="entry__toggle entry__toggle--inline" type="button" aria-hidden="true" tabindex="-1">+</button>`
              : "";
            const detailsMarkup = itemInfo
              ? `
                <div class="entry__details" hidden>
                  <p class="entry__details-label">${escapeHtml(itemInfo.label)}</p>
                  <h4>${escapeHtml(itemInfo.title)}</h4>
                  ${itemInfo.imageUrl ? `<img class="entry__thumbnail" src="${itemInfo.imageUrl}" alt="${escapeHtml(itemInfo.imageAlt || itemInfo.title)}" loading="lazy" />` : ""}
                  ${itemInfo.subtitle ? `<p class="entry__details-subtitle">${escapeHtml(itemInfo.subtitle)}</p>` : ""}
                  <div class="detail-links">
                  ${itemInfo.mapQuery ? `<a class="map-link" href="${buildGoogleMapsUrl(itemInfo.mapQuery)}" target="_blank" rel="noreferrer">Google Maps</a>` : ""}
                    ${itemInfo.bookingUrl ? `<a class="map-link" href="${itemInfo.bookingUrl}" target="_blank" rel="noreferrer">Open Booking</a>` : ""}
                  </div>
                  <ul>
                    ${itemInfo.items.map((detail) => renderDetailItem(detail, itemInfo)).join("")}
                  </ul>
                </div>
              `
              : "";

            return `
              <li class="${itemClass}"${itemAttrs}>
                <div class="entry__item-row">
                  <span>${escapeHtml(item)}</span>
                  ${toggleMarkup}
                </div>
                ${detailsMarkup}
              </li>
            `;
          })
          .join("");

        return `
          <div class="entry">
            <div class="${timeClass}">${escapeHtml(timeLabel)}</div>
            <div class="entry__body">
              <ul>${items}</ul>
            </div>
          </div>
        `;
      })
      .join("");

    article.innerHTML = `
      <div class="day-card__header">
        <div class="day-card__title">
          <h3>Day ${index + 1}</h3>
          <p>${day.dayLabel} · ${day.weekday} · ${formatDate(day.date)}</p>
        </div>
      </div>
      <div class="timeline">${timeline}</div>
    `;

    fragment.appendChild(article);
  });

  const closing = document.createElement("section");
  closing.className = "trip-closing";
  closing.innerHTML = `
    <p class="trip-closing__eyebrow">Return Home</p>
    <h3>Bon retour</h3>
    <p class="trip-closing__lede">Welcome home from Paris, with a safe landing and refreshed energy for the return to everyday days.</p>
    <div class="trip-closing__chips">
      <span>ICN arrival</span>
      <span>Baggage</span>
      <span>Home</span>
    </div>
  `;
  fragment.appendChild(closing);

  scheduleRoot.appendChild(fragment);
}

function getItemTarget(item) {
  const joined = item;

  if (joined.includes("숙소1")) {
    return "stay1";
  }

  if (joined.includes("숙소2") || joined.includes("Hotel Gabriel")) {
    return "stay2";
  }

  if (joined.includes("Alamo") || joined.includes("Car rental") || joined.includes("Car return")) {
    return "rental";
  }

  if (joined.includes("Place de la Concorde")) {
    return "concorde";
  }

  if (joined.includes("Tuileries Garden")) {
    return "tuileries";
  }

  if (joined.includes("Louvre Museum")) {
    return "louvre";
  }

  if (joined.includes("Montmartre")) {
    return "montmartre";
  }

  if (joined.includes("Le Mur des Je t'aime")) {
    return "jemur";
  }

  if (joined.includes("Funiculaire")) {
    return "funiculaire";
  }

  if (joined.includes("Sacre-Coeur")) {
    return "sacrecoeur";
  }

  if (joined.includes("Place du Tertre")) {
    return "tertre";
  }

  if (joined.includes("La Maison Rose") || joined.includes("Le Consulat")) {
    return "maisonconsulat";
  }

  if (joined.includes("마레지구") || joined.includes("Le Marais")) {
    return "marais";
  }

  if (joined.includes("Place des Vosges")) {
    return "vosges";
  }

  if (joined.includes("Rue des Rosiers")) {
    return "rosier";
  }

  if (joined.includes("Notre-Dame Cathedral")) {
    return "notredame";
  }

  if (joined.includes("Pantheon")) {
    return "pantheon";
  }

  if (joined.includes("Luxembourg Gardens")) {
    return "luxembourg";
  }

  if (joined === "Giverny") {
    return "giverny";
  }

  if (joined.includes("Fondation Claude Monet")) {
    return "monetfoundation";
  }

  if (joined.includes("Rouen Cathedral")) {
    return "rouencathedral";
  }

  if (joined.includes("목조건물")) {
    return "rouenhalftimber";
  }

  if (joined.includes("Gros-Horloge")) {
    return "groshorloge";
  }

  if (joined.includes("Place du Vieux-Marche")) {
    return "vieuxmarche";
  }

  if (joined.includes("수도원(Abbey)")) {
    return "montabbey";
  }

  if (joined.includes("Etretat Cliffs")) {
    return "etretat";
  }

  if (joined.includes("Parking du Grand Val")) {
    return "grandvalparking";
  }

  if (joined.includes("Parking Indigo Paris Pasteur-Montparnasse")) {
    return "indigoPasteur";
  }

  if (joined.includes("생제르맹 카페")) {
    return "saintgermaincafe";
  }

  if (joined.includes("Le Bon Marche")) {
    return "bonmarche";
  }

  if (joined.includes("향수") || joined.includes("감성 부티크") || joined.includes("특별한 기념품")) {
    return "maraisshopping";
  }

  if (joined.includes("La Vallee Village")) {
    return "lavalleevillage";
  }

  if (joined.includes("베르사유 외부/정원") || joined.includes("One Nation Paris")) {
    return "versaillesonenation";
  }

  if (joined.includes("Falaise d'Aval")) {
    return "falaiseaval";
  }

  if (joined.startsWith("Rouen")) {
    return "rouen";
  }

  if (joined.includes("세느강 따라 걷기")) {
    return "seinewalk";
  }

  if (joined.includes("Champs-Elysees")) {
    return "champselysees";
  }

  if (joined.startsWith("Palais Garnier")) {
    return "palaisgarnier";
  }

  if (joined.includes("Galeries Lafayette Haussmann")) {
    return "galerieslafayette";
  }

  if (joined.includes("Champ de Mars Tour Eiffel")) {
    return "champdemars";
  }

  if (joined.includes("Trocadero")) {
    return "trocadero";
  }

  if (joined.includes("센강 유람선")) {
    return "seinecruise";
  }

  if (joined.includes("Eiffel Tower")) {
    return "eiffel";
  }

  if (joined.includes("Champ de Mars 공원")) {
    return "champdeparc";
  }

  if (joined.includes("석식(에펠탑 주변)")) {
    return "eiffeldinner";
  }

  if (joined.includes("Musee d'Orsay")) {
    return "orsay";
  }

  if (joined.includes("Rue de Rivoli")) {
    return "rivoli";
  }

  return "";
}

function setupEntryLinks() {
  scheduleRoot.addEventListener("click", (event) => {
    const entry = event.target.closest(".entry__item--expandable");

    if (!entry) {
      return;
    }

    toggleEntryDetails(entry);
  });

  scheduleRoot.addEventListener("keydown", (event) => {
    const entry = event.target.closest(".entry__item--expandable");

    if (!entry) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleEntryDetails(entry);
    }
  });
}

function toggleEntryDetails(entry) {
  const details = entry.querySelector(".entry__details");

  if (!details) {
    return;
  }

  const isOpen = entry.classList.contains("entry--open");

  scheduleRoot.querySelectorAll(".entry__item--expandable.entry--open").forEach((openEntry) => {
    openEntry.classList.remove("entry--open");
    openEntry.setAttribute("aria-expanded", "false");
    const openDetails = openEntry.querySelector(".entry__details");
    if (openDetails) {
      openDetails.hidden = true;
    }
  });

  if (!isOpen) {
    entry.classList.add("entry--open");
    entry.setAttribute("aria-expanded", "true");
    details.hidden = false;
  }
}

function buildGoogleMapsUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function renderDetailItem(detail, itemInfo) {
  if (itemInfo.title !== "Rue de Rivoli") {
    if (itemInfo.title === "Dinner near the Eiffel Tower") {
      if (detail.includes("20 Eiffel")) {
        return `
          <li>
            <div class="detail-line">
              <span>${escapeHtml(detail)}</span>
              <div class="detail-links detail-links--inline-block">
                <a class="map-link" href="https://guide.michelin.com/us/en/ile-de-france/paris/restaurant/20-eiffel" target="_blank" rel="noreferrer">Info</a>
                <a class="map-link" href="https://www.google.com/maps/search/?api=1&query=20+Rue+de+Monttessuy%2C+75007+Paris" target="_blank" rel="noreferrer">Google Maps</a>
              </div>
            </div>
          </li>
        `;
      }

      if (detail.includes("Les Ombres")) {
        return `
          <li>
            <div class="detail-line">
              <span>${escapeHtml(detail)}</span>
              <div class="detail-links detail-links--inline-block">
                <a class="map-link" href="https://guide.michelin.com/en/ile-de-france/paris/restaurant/les-ombres" target="_blank" rel="noreferrer">Info</a>
                <a class="map-link" href="https://www.google.com/maps/search/?api=1&query=27+Quai+Jacques-Chirac%2C+75007+Paris" target="_blank" rel="noreferrer">Google Maps</a>
              </div>
            </div>
          </li>
        `;
      }

      if (detail.includes("Le Jules Verne")) {
        return `
          <li>
            <div class="detail-line">
              <span>${escapeHtml(detail)}</span>
              <div class="detail-links detail-links--inline-block">
                <a class="map-link" href="https://guide.michelin.com/en/ile-de-france/paris/restaurant/le-jules-verne" target="_blank" rel="noreferrer">Info</a>
                <a class="map-link" href="https://www.google.com/maps/search/?api=1&query=Le+Jules+Verne%2C+Tour+Eiffel%2C+Paris" target="_blank" rel="noreferrer">Google Maps</a>
              </div>
            </div>
          </li>
        `;
      }
    }

    return `<li>${escapeHtml(detail)}</li>`;
  }

  if (detail.includes("BAYAN")) {
    return `
      <li>
        <div class="detail-line">
          <span>${escapeHtml(detail)}</span>
          <div class="detail-links detail-links--inline-block">
            <a class="map-link" href="https://www.thefork.com/restaurant/bayan-4eme-r442515" target="_blank" rel="noreferrer">Info</a>
            <a class="map-link" href="https://www.google.com/maps/search/?api=1&query=35+Rue+de+Rivoli%2C+75004+Paris" target="_blank" rel="noreferrer">Google Maps</a>
          </div>
        </div>
      </li>
    `;
  }

  if (detail.includes("L'Etoile de Rivoli")) {
    return `
      <li>
        <div class="detail-line">
          <span>${escapeHtml(detail)}</span>
          <div class="detail-links detail-links--inline-block">
            <a class="map-link" href="https://www.tripadvisor.com/Restaurant_Review-g187147-d21380236-Reviews-L_etoile_de_rivoli-Paris_Ile_de_France.html" target="_blank" rel="noreferrer">Info</a>
            <a class="map-link" href="https://www.google.com/maps/search/?api=1&query=158+Rue+de+Rivoli%2C+75001+Paris" target="_blank" rel="noreferrer">Google Maps</a>
          </div>
        </div>
      </li>
    `;
  }

  if (detail.includes("Imperial Treasure")) {
    return `
      <li>
        <div class="detail-line">
          <span>${escapeHtml(detail)}</span>
          <div class="detail-links detail-links--inline-block">
            <a class="map-link" href="https://www.thefork.com/restaurant/imperial-treasure-r540737" target="_blank" rel="noreferrer">Info</a>
            <a class="map-link" href="https://www.google.com/maps/search/?api=1&query=44+Rue+de+Bassano%2C+75008+Paris" target="_blank" rel="noreferrer">Google Maps</a>
          </div>
        </div>
      </li>
    `;
  }

  return `<li>${escapeHtml(detail)}</li>`;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

buildNav();
buildSchedule();
setupDayNav();
setupEntryLinks();
