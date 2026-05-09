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
        { time: null, items: ["숙소1 체크인 후 석식"] }
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
        { time: "20:00", items: ["Eiffel Tower 야경(센강 유람선 21:00~22:15)"] },
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
    rental: ["Alamo, CDG airport"],
    stay1: ["28 Rue Labrouste"],
    stay2: ["Hotel Gabriel"]
  }
};

const scheduleRoot = document.getElementById("schedule");
const navRoot = document.getElementById("day-nav");
const metaRoot = document.getElementById("meta");

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
        const items = event.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");

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
    { title: "Rental", items: tripData.meta.rental },
    { title: "Stay 1", items: tripData.meta.stay1 },
    { title: "Stay 2", items: tripData.meta.stay2 }
  ];

  metaRoot.innerHTML = sections
    .map(
      (section) => `
        <div class="meta-block">
          <h4>${section.title}</h4>
          <ul>
            ${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
      `
    )
    .join("");
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
