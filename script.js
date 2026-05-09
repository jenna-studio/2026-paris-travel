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
      title: "Stay 2",
      subtitle: "Mont-Saint-Michel stay",
      mapQuery: "Hotel Gabriel, Mont-Saint-Michel, France",
      items: [
        "Hotel Gabriel",
        "Check-in: July 13 at 20:00",
        "Checkout noted: July 14 at 11:00"
      ]
    }
  }
};

const scheduleRoot = document.getElementById("schedule");
const navRoot = document.getElementById("day-nav");
const metaRoot = document.getElementById("meta");
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

function buildNav() {
  const fragment = document.createDocumentFragment();

  tripData.schedule.forEach((day, index) => {
    const link = document.createElement("a");
    link.className = "day-pill";
    link.href = `#day-${index + 1}`;
    link.innerHTML = `<strong>${day.dayLabel}</strong><span>${day.weekday}</span>`;
    fragment.appendChild(link);
  });

  navRoot.appendChild(fragment);
}

function buildSchedule() {
  const fragment = document.createDocumentFragment();

  tripData.schedule.forEach((day, index) => {
    const article = document.createElement("article");
    article.className = "day-card";
    article.id = `day-${index + 1}`;
    article.style.animationDelay = `${index * 45}ms`;

    const eventCount = day.events.reduce((sum, event) => sum + event.items.length, 0);

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
        <div class="tag">${eventCount} items</div>
      </div>
      <div class="timeline">${timeline}</div>
    `;

    fragment.appendChild(article);
  });

  scheduleRoot.appendChild(fragment);
}

function buildMeta() {
  const sections = [
    { key: "stay1", ...tripData.meta.stay1 },
    { key: "stay2", ...tripData.meta.stay2 },
    { key: "rental", ...tripData.meta.rental }
  ];

  metaRoot.innerHTML = sections
    .map(
      (section) => `
        <div class="meta-block" id="meta-${section.key}" data-meta-key="${section.key}">
          <h4>${section.title}</h4>
          ${section.subtitle ? `<p class="meta-block__subtitle">${escapeHtml(section.subtitle)}</p>` : ""}
          <div class="detail-links">
            ${section.mapQuery ? `<a class="map-link" href="${buildGoogleMapsUrl(section.mapQuery)}" target="_blank" rel="noreferrer">Google Maps</a>` : ""}
            ${section.bookingUrl ? `<a class="map-link" href="${section.bookingUrl}" target="_blank" rel="noreferrer">Open Booking</a>` : ""}
          </div>
          <ul>
            ${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
      `
    )
    .join("");
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

  if (joined.includes("세느강 따라 걷기")) {
    return "seinewalk";
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
buildMeta();
setupEntryLinks();
