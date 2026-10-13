import { GALLERY, SITE } from "@/lib/site";

function img(n: string) {
  return `${SITE.imageCdn}/${n}.webp`;
}

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <>
      <a className="skip-link" href="#main">
        본문 바로가기
      </a>

      <main id="main">
        <section className="hero" aria-label="천안애견미용학원 히어로">
          <img
            className="hero-media"
            src={img("12")}
            alt="천안애견미용학원 천안펫스쿨 창업 동선 연습"
            width={1600}
            height={1067}
            fetchPriority="high"
          />
          <div className="hero-veil" aria-hidden="true" />
          <div className="hero-content">
            <p className="hero-brand">
              {SITE.brandEn} · {SITE.brandKo}
            </p>
            <h1>천안애견미용학원</h1>
            <p className="hero-lead">
              충남 북부에서는 취업과 1인 샵이 둘 다 현실적인 선택입니다.
              불당·두정 수업은 처음부터 어느 쪽인지 묻고,
              연습 시간을 그 답에 맞춰 나눕니다.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#paths">
                취업과 창업
              </a>
              <a className="btn btn-ghost" href="#asan">
                아산·평택 통학
              </a>
            </div>
          </div>
        </section>

        <section className="keyword-bar" aria-label="천안 검색어">
          <div className="container keyword-bar-inner">
            <span>#천안애견미용학원</span>
            <span>#천안펫스쿨</span>
            <span>#천안강아지미용학원</span>
            <span>#불당애견미용</span>
            <span>#두정애견미용학원</span>
            <span>#애견미용사자격증</span>
            <span>#애견미용학원비용</span>
          </div>
        </section>

        <section className="section" id="paths">
          <div className="container">
            <div className="section-head left">
              <p className="eyebrow">Fork</p>
              <h2>같은 기술을 다른 이유로 반복합니다</h2>
            </div>
            <div className="info-grid">
              <article>
                <h3>살롱 자리</h3>
                <p>
                  천안역·두정역 주변 매장은 팀으로 일합니다.
                  <strong>천안애견미용학원</strong>의 이 트랙은
                  맡은 부위만 빠르고 일정하게 넘기는 연습입니다.
                </p>
              </article>
              <article>
                <h3>혼자 여는 샵</h3>
                <p>
                  불당·신부동에서 예약제를 생각하는 분은
                  접수, 견적 문장, 하루 마리 수를 기술 연습 사이에 넣습니다.
                  손이 느려도 설명을 빠뜨리면 통과하지 않습니다.
                </p>
              </article>
              <article>
                <h3>아직 모름</h3>
                <p>
                  4주 동안 두 과제를 반씩 해 보고 고릅니다.
                  <strong>천안펫스쿨</strong>은 그 전에 수강료를 긴 과정으로 잠그지 않습니다.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="curriculum">
          <div className="container split reverse">
            <div>
              <p className="eyebrow">Reps</p>
              <h2>훈련은 세 개의 통으로만 나눕니다</h2>
              <p>
                <strong>천안강아지미용학원</strong> 실습실에는
                안전 통, 모양 통, 장부 통이 있습니다.
                안전 통은 구강·발톱·귀, 모양 통은 클립과 가위,
                장부 통은 예약 간격과 추가 비용 문장입니다.
                취업 트랙은 모양 통이 크고, 창업 트랙은 장부 통이 큽니다.
              </p>
              <ul className="check-list">
                <li>안전 통을 통과하기 전에는 전동 도구를 주지 않습니다</li>
                <li>모양 통은 같은 부위를 다음 날 다시 자로 잽니다</li>
                <li>장부 통은 보호자 전화 대본을 소리 내어 읽습니다</li>
              </ul>
            </div>
            <figure className="media-frame">
              <img
                src={img("06")}
                alt="천안펫스쿨 모양 측정 연습"
                loading="lazy"
                width={800}
                height={1000}
              />
            </figure>
          </div>
        </section>

        <section className="section" id="asan">
          <div className="container narrow">
            <p className="eyebrow">Neighbors</p>
            <h2>아산 배방·탕정, 평택에서 오는 시간</h2>
            <p>
              상담 거점은 서북구 불당입니다. 아산 배방과 탕정은
              출퇴근 도로가 겹쳐 저녁 반이 밀립니다. 평택에서 올라오는 분은
              1호선 시간을 말하고, 그 시간이 주 3회를 못 채우면
              창업 트랙의 장부 과제를 집에서 하는 쪽으로 바꿉니다.
              통학이 긴 분에게 출석만으로 평가하지 않기 위해서입니다.
            </p>
            <p>
              두정역 생활권에서 오시는 분은 평일 오전 안전 통이 비어 있는 날이 많습니다.
              <strong>천안애견미용학원</strong> 예약 문자는 역 이름부터 적습니다.
            </p>
          </div>
        </section>

        <section className="section section-alt" id="price">
          <div className="container narrow">
            <p className="eyebrow">Build</p>
            <h2>애견미용학원비용은 통의 비율에 따라 달라집니다</h2>
            <p>
              취업 트랙은 모델 마리 수가 많고, 창업 트랙은
              상담 역할극 시간이 깁니다. 그래서 같은 “3개월”이라도
              <strong>애견미용학원비용</strong> 구성이 다릅니다.
              도구는 안전 통을 통과한 주에 구매 목록을 드립니다.
              <strong>애견미용사자격증</strong> 모의는 두 트랙 모두
              월 2회로 고정하고 그 이상 팔지 않습니다.
            </p>
            <div className="info-grid price-grid">
              <article>
                <h3>팀원</h3>
                <p>모양 통 비중. 두정·천안역 샵 파트타임용.</p>
              </article>
              <article>
                <h3>점주</h3>
                <p>장부 통 비중. 불당 예약제 1인 샵 초안.</p>
              </article>
              <article>
                <h3>가늠</h3>
                <p>4주만. 어느 트랙인지 정하기 위한 짧은 등록.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="gallery">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Measure</p>
              <h2>자로 재고 남긴 천안 실습</h2>
              <p>사진 각도보다 전날과 같은 길이인지를 먼저 봅니다.</p>
            </div>
            <div className="gallery-grid">
              {GALLERY.map((n) => (
                <figure key={n}>
                  <img
                    src={img(n)}
                    alt={`천안애견미용학원 측정 실습 ${n}`}
                    loading="lazy"
                    width={600}
                    height={750}
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-faq" id="faq">
          <div className="container narrow">
            <p className="eyebrow">FAQ</p>
            <h2>천안·아산에서 갈리는 질문</h2>
            <div className="faq-list">
              <details open>
                <summary>샵을 열려면 자격이 먼저인가요?</summary>
                <p>
                  점주 트랙은 예약 문장과 안전 통이 먼저입니다.
                  자격 모의는 월 2회로 붙여 두고, 그것만으로 개업 상담을 하지 않습니다.
                </p>
              </details>
              <details>
                <summary>탕정에서 저녁 수업이 밀리지 않나요?</summary>
                <p>
                  밀리는 날이 있습니다. 그래서 장부 과제는 이동 중에도 적을 수 있게
                  짧은 문장으로 끊어 드립니다.
                </p>
              </details>
              <details>
                <summary>가늠 4주 뒤에 환불이 되나요?</summary>
                <p>
                  가늠은 짧은 등록이라 이후 팀원·점주로 이어갈지 그 주에 정합니다.
                  이미 진행한 모델 횟수는 포함표에 차감 내역으로 적습니다.
                </p>
              </details>
              <details>
                <summary>신부동 아파트 상가에 자리가 있을까요?</summary>
                <p>
                  공실을 대신 알아봐 드리지는 않습니다. 하루 마리 수와 동선만
                  점주 트랙에서 계산해 보게 합니다.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="section section-contact" id="contact">
          <div className="container narrow contact-box">
            <p className="eyebrow">Buldang</p>
            <h2>불당에서 트랙을 하나 고릅니다</h2>
            <p>
              팀으로 들어갈지, 혼자 열지, 아직 모를지만 정해 오시면
              통의 비율과 통학 요일을 같은 종이에 적습니다.
            </p>
            <p className="contact-brand">
              {SITE.brandKo} · {SITE.schoolName}
            </p>
            <p className="contact-address">{SITE.address}</p>
            <p className="contact-address-sub">{SITE.addressDetail}</p>
            <a className="btn btn-primary" href="#paths">
              두 갈래 다시 보기
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <p className="footer-brand-en">{SITE.brandEn}</p>
            <p className="footer-brand-ko">{SITE.brandKo}</p>
            <p className="footer-seo">{SITE.title}</p>
          </div>
          <div className="footer-meta">
            <p>{SITE.address}</p>
            <p>천안애견미용학원 · 천안펫스쿨 · 불당애견미용</p>
            <p className="footer-managed">
              <img src="/kkf-logo.png" alt="" width={36} height={36} />
              <span>한국애견연맹 반려문화증진위원회에 의해 관리되는 페이지입니다.</span>
            </p>
            <p className="footer-copy">
              &copy; {year} {SITE.brandKo}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
