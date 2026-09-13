(function () {
    const API_BASE = 'https://gwansang-api.vercel.app';

    const CARDS = [
        { name: '광대', icon: '🃏' }, { name: '마법사', icon: '🪄' }, { name: '여사제', icon: '🌙' },
        { name: '여황제', icon: '👑' }, { name: '황제', icon: '⚔️' }, { name: '교황', icon: '⛪' },
        { name: '연인', icon: '💞' }, { name: '전차', icon: '🏇' }, { name: '힘', icon: '🦁' },
        { name: '은둔자', icon: '🏮' }, { name: '운명의 수레바퀴', icon: '🎡' }, { name: '정의', icon: '⚖️' },
        { name: '매달린 사람', icon: '🙃' }, { name: '죽음', icon: '💀' }, { name: '절제', icon: '🌊' },
        { name: '악마', icon: '😈' }, { name: '탑', icon: '🗼' }, { name: '별', icon: '⭐' },
        { name: '달', icon: '🌕' }, { name: '태양', icon: '☀️' }, { name: '심판', icon: '📯' },
        { name: '세계', icon: '🌍' },
    ];
    const SPREAD_SIZE = 3;

    const questionSection = document.getElementById('questionSection');
    const drawSection = document.getElementById('drawSection');
    const loadingSection = document.getElementById('loadingSection');
    const resultSection = document.getElementById('resultSection');
    const questionInput = document.getElementById('questionInput');
    const goToDrawBtn = document.getElementById('goToDrawBtn');
    const cardSpread = document.getElementById('cardSpread');
    const retryBtn = document.getElementById('retryBtn');

    function shuffle(arr) {
        const a = arr.slice();
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function buildSpread() {
        const picks = shuffle(CARDS).slice(0, SPREAD_SIZE).map((c) => ({
            ...c,
            reversed: Math.random() < 0.5,
        }));

        cardSpread.innerHTML = '';
        picks.forEach((cardData) => {
            const card = document.createElement('div');
            card.className = 'tr-card';

            const inner = document.createElement('div');
            inner.className = 'tr-card-inner';

            const back = document.createElement('div');
            back.className = 'tr-card-face tr-card-back';

            const front = document.createElement('div');
            front.className = 'tr-card-face tr-card-front';
            front.innerHTML = `
                <div class="tr-mini-icon">${cardData.icon}</div>
                <div class="tr-mini-name">${cardData.name}</div>
                <div class="tr-mini-orientation">${cardData.reversed ? '역방향' : '정방향'}</div>
            `;

            inner.appendChild(back);
            inner.appendChild(front);
            card.appendChild(inner);
            cardSpread.appendChild(card);

            card.addEventListener('click', () => onPickCard(card, cardData));
        });
    }

    let picked = false;

    function onPickCard(card, cardData) {
        if (picked) return;
        picked = true;

        card.classList.add('flipped');
        Array.from(cardSpread.children).forEach((el) => {
            if (el !== card) el.classList.add('picked-out');
        });

        setTimeout(() => {
            fetchReading(cardData);
        }, 700);
    }

    goToDrawBtn.addEventListener('click', () => {
        picked = false;
        buildSpread();
        questionSection.style.display = 'none';
        drawSection.style.display = 'block';
    });

    async function fetchReading(cardData) {
        drawSection.style.display = 'none';
        loadingSection.style.display = 'block';

        try {
            const res = await fetch(API_BASE + '/api/tarot', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    card: cardData.name,
                    reversed: cardData.reversed,
                    question: questionInput.value,
                }),
            });
            const data = await res.json();

            loadingSection.style.display = 'none';

            if (!res.ok || data.error) {
                alert(data.error || 'AI 리딩에 실패했어요. 다시 시도해주세요.');
                questionSection.style.display = 'block';
                return;
            }

            renderResult(cardData, data);
            resultSection.style.display = 'block';
        } catch (err) {
            loadingSection.style.display = 'none';
            questionSection.style.display = 'block';
            alert('서버에 연결할 수 없어요. 잠시 후 다시 시도해주세요.');
        }
    }

    function renderResult(cardData, data) {
        document.getElementById('resultCardName').textContent =
            `${cardData.icon} ${cardData.name} (${cardData.reversed ? '역방향' : '정방향'})`;
        document.getElementById('resultHeadline').textContent = data.headline || '';
        document.getElementById('resultMessage').textContent = data.message || '';
        document.getElementById('resultAdvice').textContent = data.advice || '';

        const cautionItem = document.getElementById('cautionItem');
        if (data.caution && data.caution.trim()) {
            document.getElementById('resultCaution').textContent = data.caution;
            cautionItem.style.display = 'block';
        } else {
            cautionItem.style.display = 'none';
        }

        document.getElementById('resultClosing').textContent = data.closingMessage || '';
    }

    retryBtn.addEventListener('click', () => {
        questionInput.value = '';
        resultSection.style.display = 'none';
        questionSection.style.display = 'block';
    });
})();
